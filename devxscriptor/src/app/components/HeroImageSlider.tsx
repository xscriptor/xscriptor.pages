'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HeroImageSlider.module.css';

type SliderImage = {
  src: string;
  alt: string;
};

type HeroImageSliderProps = {
  images: SliderImage[];
  autoPlayMs?: number;
};

export default function HeroImageSlider({
  images,
  autoPlayMs = 4200,
}: HeroImageSliderProps) {
  const safeImages = images?.length ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, autoPlayMs);

    return () => window.clearInterval(intervalId);
  }, [safeImages.length, autoPlayMs]);

  useEffect(() => {
    if (activeIndex >= safeImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeImages.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  };

  if (!safeImages.length) {
    return null;
  }

  return (
    <div className={styles.sliderRoot}>
      <div className={styles.sliderFrame}>
        <div className={styles.sliderViewport}>
          {safeImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={index === 0}
              />
            </div>
          ))}
          <div className={styles.fadeBottom} />

          {safeImages.length > 1 && (
            <div className={styles.controls}>
              <button
                type="button"
                onClick={goToPrev}
                className={styles.arrowButton}
                aria-label="Imagen anterior"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goToNext}
                className={styles.arrowButton}
                aria-label="Imagen siguiente"
              >
                →
              </button>
            </div>
          )}
        </div>

        {safeImages.length > 1 && (
          <div className={styles.pagination}>
            {safeImages.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}