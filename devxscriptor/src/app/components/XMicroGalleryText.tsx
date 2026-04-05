import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './XMicroGalleryText.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface XMicroGalleryTextProps {
  images: [GalleryImage, GalleryImage, GalleryImage];
  text: React.ReactNode;
  textPosition?: 'left' | 'right';
  autoShuffle?: boolean;
  shuffleInterval?: number;
}

const XMicroGalleryText: React.FC<XMicroGalleryTextProps> = ({ 
  images, 
  text, 
  textPosition = 'left',
  autoShuffle = false,
  shuffleInterval = 5000
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImages, setCurrentImages] = React.useState(images);

  React.useEffect(() => {
    setCurrentImages(images);
  }, [images]);

  React.useEffect(() => {
    if (!autoShuffle) return;

    const intervalId = setInterval(() => {
      setCurrentImages((prev) => {
        const next = [...prev] as [GalleryImage, GalleryImage, GalleryImage];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, shuffleInterval);

    return () => clearInterval(intervalId);
  }, [autoShuffle, shuffleInterval]);

  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isTextRight = textPosition === 'right';

  return (
    <div ref={containerRef} className={`${styles.container} ${isTextRight ? styles.reverse : ''}`}>
      <div className={`${styles.textContent} ${isTextRight ? styles.textRight : styles.textLeft} ${isVisible ? styles.visible : ''}`}>
        {typeof text === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          text
        )}
      </div>
      
      <div className={styles.gallery}>
        <div className={styles.artisticGrid}>
          {currentImages.map((image, index) => (
            <motion.div 
              layout
              key={image.src} 
              className={`${styles.imageWrapper} ${styles[`artistic${index + 1}`]} ${isVisible ? styles.visible : ''}`}
              style={{ transitionProperty: 'opacity, box-shadow' }}
              transition={{
                layout: { type: "spring", stiffness: 80, damping: 20 }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.previewImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XMicroGalleryText;
