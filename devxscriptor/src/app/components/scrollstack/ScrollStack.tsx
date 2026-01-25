'use client'
import React, { ReactNode, useLayoutEffect, useRef, useCallback } from 'react';
import styles from './ScrollStack.module.css';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`${styles['scroll-stack-card']} ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = scroller.querySelector(`.${styles['scroll-stack-end']}`) as HTMLElement;
    const endElementTop = endElement ? endElement.offsetTop : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = card.offsetTop;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardsRef.current[j].offsetTop;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage
  ]);



  const setupNativeScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let isScrollingPage = false;

    // Handle scroll within the ScrollStack
    const handleNativeScroll = () => {
      if (isUpdatingRef.current || isScrollingPage) return;
      
      updateCardTransforms();
    };

    // Handle wheel events to allow page scrolling when at boundaries
    const handleWheel = (e: WheelEvent) => {
      const scrollTop = scroller.scrollTop;
      const scrollHeight = scroller.scrollHeight - scroller.clientHeight;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop >= scrollHeight - 1;
      
      // Allow page scroll when scrolling up at the top
      if (isAtTop && e.deltaY < 0) {
        isScrollingPage = true;
        e.preventDefault();
        window.scrollBy(0, e.deltaY);
        setTimeout(() => { isScrollingPage = false; }, 50);
        return;
      }
      
      // Allow page scroll when scrolling down at the bottom
      if (isAtBottom && e.deltaY > 0) {
        isScrollingPage = true;
        e.preventDefault();
        window.scrollBy(0, e.deltaY);
        setTimeout(() => { isScrollingPage = false; }, 50);
        return;
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const scrollTop = scroller.scrollTop;
      const scrollHeight = scroller.scrollHeight - scroller.clientHeight;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop >= scrollHeight - 1;
      
      // Allow page scroll when swiping up at the top
      if (isAtTop && deltaY < 0) {
        isScrollingPage = true;
        e.preventDefault();
        window.scrollBy(0, deltaY * 2);
        setTimeout(() => { isScrollingPage = false; }, 50);
        return;
      }
      
      // Allow page scroll when swiping down at the bottom
      if (isAtBottom && deltaY > 0) {
        isScrollingPage = true;
        e.preventDefault();
        window.scrollBy(0, deltaY * 2);
        setTimeout(() => { isScrollingPage = false; }, 50);
        return;
      }
    };

    // Handle clicks outside ScrollStack to allow normal page scrolling
    const handleDocumentWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      if (!scroller.contains(target)) {
        // Allow normal page scrolling when outside ScrollStack
        return;
      }
    };

    scroller.addEventListener('scroll', handleNativeScroll, { passive: true });
    scroller.addEventListener('wheel', handleWheel, { passive: false });
    scroller.addEventListener('touchstart', handleTouchStart, { passive: true });
    scroller.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('wheel', handleDocumentWheel, { passive: true });
    
    return () => {
      scroller.removeEventListener('scroll', handleNativeScroll);
      scroller.removeEventListener('wheel', handleWheel);
      scroller.removeEventListener('touchstart', handleTouchStart);
      scroller.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('wheel', handleDocumentWheel);
    };
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll(`.${styles['scroll-stack-card']}`)) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    const cleanup = setupNativeScroll();

    updateCardTransforms();

    return () => {
      if (cleanup) {
        cleanup();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupNativeScroll,
    updateCardTransforms
  ]);

  return (
    <div className={`${styles['scroll-stack-scroller']} ${className}`.trim()} ref={scrollerRef}>
      <div className={styles['scroll-stack-inner']}>
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className={styles['scroll-stack-end']} />
      </div>
    </div>
  );
};

export default ScrollStack;
