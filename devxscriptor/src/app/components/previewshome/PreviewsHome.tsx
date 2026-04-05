'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PreviewsHome.module.css';

const PreviewsHome: React.FC = () => {
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

  // Literary project images (preview0001 to preview0004)
  const literaryImages = [
    { src: '/images/previews/preview0001.webp', alt: 'Literary Project 1' },
    { src: '/images/previews/preview0002.webp', alt: 'Literary Project 2' },
    { src: '/images/previews/preview0003.webp', alt: 'Literary Project 3' },
    { src: '/images/previews/preview0004.webp', alt: 'Literary Project 4' }
  ];

  // Artistic project images (reordered: preview0006 first, then preview0005 and preview0007)
  const artisticImages = [
    { src: '/images/previews/preview0006.webp', alt: 'Artistic Project 1' },
    { src: '/images/previews/preview0005.webp', alt: 'Artistic Project 2' },
    { src: '/images/previews/preview0007.webp', alt: 'Artistic Project 3' }
  ];

  return (
    <div ref={containerRef} className={styles.previewsContainer}>
      {/* Literary Project Section */}
      <section className={styles.section}>
        <a href="https://www.xscriptor.com" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Literary</h2></a> <a href="https://www.xscriptor.com" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>& Artistic</h2></a><h2 className={styles.sectionTitle}> Projects</h2>
        <div className={styles.literaryGrid}>
          {literaryImages.map((image, index) => (
            <div key={index} className={`${styles.imageWrapper} ${styles[`literary${index + 1}`]}`}>
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

      {/* Artistic Project Section */}
      <section className={styles.section}>
        <a href="https://art.xscriptor.com" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Artistic Project</h2></a>
        <div className={styles.artisticGrid}>
          {artisticImages.map((image, index) => (
            <div key={index} className={`${styles.imageWrapper} ${styles[`artistic${index + 1}`]}`}>
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