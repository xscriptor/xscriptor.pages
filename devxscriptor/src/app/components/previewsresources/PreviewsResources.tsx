'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PreviewsResources.module.css';

const PreviewsResources: React.FC = () => {
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

  const vscodeimages = [
    { src: '/images/resources/vscode/vscode01.jpg', alt: 'Xretro Xscriptor Theme for vscode' },
    { src: '/images/resources/vscode/vscode02.jpg', alt: 'Xscriptor Themes for vscode' },
    { src: '/images/resources/vscode/vscode03.jpg', alt: 'X Greyscale for Vscode' },
    { src: '/images/resources/vscode/vscode05.jpg', alt: 'X Inverted Greyscale for Vscode' },
  ];

  const terminalimages = [
    { src: '/images/resources/kitty/kitty.webp', alt: 'Kitty Terminal on Arch Linux with Z theme' },
    { src: '/images/resources/kitty/kitty1.png', alt: 'Kitty Terminal with xscriptor theme' },
    { src: '/images/resources/powershell/powershell.png', alt: 'Powershell Terminal with X Candy Pop Theme' },
  ];

  const obsidianimages = [
    { src: '/images/resources/obsidian/preview01.jpg', alt: 'Complete Desktop Xscriptor Theme for obsidian' },
    { src: '/images/resources/obsidian/preview02.jpg', alt: 'Mobile dark tree Xscriptor Theme for obsidian' },
    { src: '/images/resources/obsidian/preview03.jpg', alt: 'Mobile dark page Xscriptor Theme for obsidian' },
    { src: '/images/resources/obsidian/preview04.jpg', alt: 'Xscriptor light Theme for obsidian' },
  ];

  const jetbrainsimages = [
    { src: '/images/resources/jetbrains/preview0.png', alt: 'Dark mode preview of Xscriptor Theme for Jetbrains IDEs' },
    { src: '/images/resources/jetbrains/preview1.png', alt: 'Xscriptor Theme detailed for Jetbrains IDEs' },
    { src: '/images/resources/jetbrains/preview2.png', alt: 'Xscriptor light Theme for Jetbrains IDEs' },
  ];

  const xglassimages = [
    { src: '/images/resources/xglass/xglass02.png', alt: 'Xglass for vscode preview' },
    { src: '/images/resources/xglass/xglass01.png', alt: 'Xglass for vscode in windows preview' },
    { src: '/images/resources/xglass/xglass03.png', alt: 'Xglass in void preview' },
  ];

  const xheliximages = [
    { src: '/images/resources/helix/helix02.png', alt: 'X Candypop for helix preview' },
    { src: '/images/resources/helix/helix01.png', alt: 'Main helix preview with x theme' },
    { src: '/images/resources/helix/helix03.png', alt: 'Main helix view with x candypop theme' },
  ];

  return (
    <div ref={containerRef} className={styles.previewsContainer}>
      {/* Xscriptor Themes for Vscode and forks Section */}
      <section className={styles.section}>
        <a href="https://github.com/xscriptordev/vscode" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Xscriptor Themes for Vscode & Forks</h2></a>
        <div className={styles.literaryGrid}>
          {vscodeimages.map((image, index) => (
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
        <a href="https://github.com/xscriptordev/terminal" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Terminal schemes</h2></a>
        <div className={styles.artisticGrid}>
          {terminalimages.map((image, index) => (
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

      <section className={styles.section}>
        <a href="https://github.com/xscriptordev/obsidian/tree/master" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>X Obsidian Theme</h2></a>
        <div className={styles.literaryGrid}>
          {obsidianimages.map((image, index) => (
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

      <section className={styles.section}>
        <a href="https://github.com/xscriptordev/jetbrains" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>JetBrains Theme</h2></a>
        <div className={styles.artisticGrid}>
          {jetbrainsimages.map((image, index) => (
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


      <section className={styles.section}>
        <a href="https://marketplace.visualstudio.com/items?itemName=xscriptor.xglass" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Xglass for vscode & forks- windows and linux</h2></a>
        <div className={styles.artisticGrid}>
          {xglassimages.map((image, index) => (
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

      <section className={styles.section}>
        <a href="https://github.com/xscriptordev/helix" target='_blank' rel='noopener noreferrer'><h2 className={styles.sectionTitle}>Helix X themes</h2></a>
        <div className={styles.artisticGrid}>
          {xheliximages.map((image, index) => (
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

export default PreviewsResources;