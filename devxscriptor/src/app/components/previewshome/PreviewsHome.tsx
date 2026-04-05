'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PreviewsHome.module.css';

interface PreviewImage {
  src: string;
  alt: string;
}

interface PreviewsHomeProps {
  images: PreviewImage[];
  layout?: 1 | 2 | 3;
  title?: React.ReactNode;
}

const LAYOUT_PREFIXES: Record<number, string> = {
  1: 'layout1',
  2: 'layout2',
  3: 'layout3',
};

const PreviewsHome: React.FC<PreviewsHomeProps> = ({ images, layout = 1, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = containerRef.current?.querySelectorAll(`.${styles.section}, .${styles.imageWrapper}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const gridClass = {
    1: styles.gridLayout1,
    2: styles.gridLayout2,
    3: styles.gridLayout3,
  }[layout];

  const prefix = LAYOUT_PREFIXES[layout];

  return (
    <div ref={containerRef} className={styles.previewsContainer}>
      <section className={styles.section}>
        {title && (
          <div className={styles.titleRow}>
            {title}
          </div>
        )}
        <div className={gridClass}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageWrapper} ${styles[`${prefix}_${index + 1}`] || ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.previewImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreviewsHome;