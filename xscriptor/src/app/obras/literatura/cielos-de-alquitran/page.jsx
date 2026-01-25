'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../LibrosPage.module.css";
import Socialcontact from "@/app/components/contact/socialcontact";

const images = [
  {
    src: "/images/colecciones/libros/cielosdealquitran01.webp",
    alt: "Portada del libro Cielos de alquitrán"
  },
  {
    src: "/images/colecciones/libros/cielosdealquitran02.webp",
    alt: "Página interior del libro Cielos de alquitrán"
  },
  {
    src: "/images/colecciones/libros/cielosdealquitran03.webp",
    alt: "Otra página del libro Cielos de alquitrán"
  },
  {
    src: "/images/colecciones/libros/cielosdealquitran04.webp",
    alt: "Otra página del libro Cielos de alquitrán"
  },
  {
    src: "/images/colecciones/libros/cielosdealquitran05.webp",
    alt: "Otra página del libro Cielos de alquitrán"
  }
];

export default function CielosdealquitranPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className={styles.container}>
      <h1>Cielos de alquitrán</h1>
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
              <p>Un poemario que explora los bordes de la introspección a través de las experiencias.</p>
              <p>Este libro es ideal para quienes buscan un reflejo de sus perspectivas internas mediante la expresión ajena.</p>
            </section>
          </header>
          
          <div className={styles.price}>15,00 €</div>

          <dl className={styles.infoTable}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>ISBN:</dt>
              <dd className={styles.metaValue}>978-84-11455-58-9</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>EAN:</dt>
              <dd className={styles.metaValue}>9788411455589</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Editorial:</dt>
              <dd className={styles.metaValue}>Círculo rojo</dd>
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
              <dd className={styles.metaValue}>15 x 1.17 x 21cm</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Peso:</dt>
              <dd className={styles.metaValue}>300 gramos</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Páginas:</dt>
              <dd className={styles.metaValue}>184</dd>
            </div>
          </dl>

          <div className={styles.buyButtons}>
            <Link 
              href="https://www.amazon.es/Cielos-alquitr%C3%A1n-%C3%93scar-Preciado/dp/8411455580"
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
