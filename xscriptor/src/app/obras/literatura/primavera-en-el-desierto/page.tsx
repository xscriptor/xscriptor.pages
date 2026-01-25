'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../LibrosPage.module.css";
import Socialcontact from "@/app/components/contact/socialcontact";

const images = [
  {
    src: "/images/colecciones/libros/primaveraeneldesierto02.webp",
    alt: "Página interior del libro primavera en el desierto"
  },
  {
    src: "/images/colecciones/libros/primaveraeneldesierto01.webp",
    alt: "Portada del libro primavera en el desierto"
  },
  {
    src: "/images/colecciones/libros/primaveraeneldesierto03.webp",
    alt: "Página interior del libro primavera en el desierto"
  },
  {
    src: "/images/colecciones/libros/primaveraeneldesierto04.webp",
    alt: "Página interior del libro primavera en el desierto"
  }
];

export default function PrimaveraeneldesiertoPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className={styles.container}>
      <h1>Primavera en el desierto</h1>
      <div className={styles.pageGrid}>
        {/* Galería */}
        <section className={styles.gallery}>
          {/* Imagen principal */}
          <div className={styles.mainImage}>
            <figure>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                priority
                className={styles.featuredImg}
              />
            </figure>
          </div>

          {/* Miniaturas */}
          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${index === selectedImage ? styles.thumbnailActive : ''}`}
                onClick={() => setSelectedImage(index)}
                aria-label={`Ver ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={90}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          <h3>¿Quieres una copia firmada?, contáctame</h3>
          <Socialcontact />
        </section>

        {/* Ficha técnica */}
        <div className={styles.details}>
          <header>
            
            
            <section className={styles.description}>
              <p>El fruto tangible de atravesar el océano para encontrarse de frente con una segunda oportunidad</p>
              <p>Una experiencia tan escasa y profundamente enriquecedora como una primavera en el desierto.</p>
            </section>
          </header>
          
          <div className={styles.price}>15,00 €</div>

          <dl className={styles.infoTable}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>ISBN:</dt>
              <dd className={styles.metaValue}>979-8355749958</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>ASIN:</dt>
              <dd className={styles.metaValue}>B0BGNCJYPM</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Editorial:</dt>
              <dd className={styles.metaValue}>Autopublicado</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Formato:</dt>
              <dd className={styles.metaValue}>Tapa blanda</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>País:</dt>
              <dd className={styles.metaValue}>España</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Idioma:</dt>
              <dd className={styles.metaValue}>Castellano</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Dimensiones:</dt>
              <dd className={styles.metaValue}>6 x 0.28 x 9 pulgadas</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Peso:</dt>
              <dd className={styles.metaValue}>150 gramos</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Páginas:</dt>
              <dd className={styles.metaValue}>122</dd>
            </div>
          </dl>

          <div className={styles.buyButtons}>
            <Link 
              href="https://www.amazon.com/-/es/Primavera-en-el-desierto-Spanish/dp/B0BGNCJYPM"
              className={styles.buyButton}
            >
              Comprar en Amazon
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
