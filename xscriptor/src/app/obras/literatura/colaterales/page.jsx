'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../LibrosPage.module.css";
import Socialcontact from "@/app/components/contact/socialcontact";

const images = [
  {
    src: "/images/colecciones/libros/colaterales01.webp",
    alt: "Portada del libro Colaterales"
  },
  {
    src: "/images/colecciones/libros/colaterales02.webp",
    alt: "Página interior del libro Colaterales"
  },
  {
    src: "/images/colecciones/libros/colaterales03.webp",
    alt: "Otra página del libro Colaterales"
  },
  {
    src: "/images/colecciones/libros/colaterales0022.webp",
    alt: "Otra página del libro Colaterales"
  }
];

export default function AsintotaPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className={styles.container}>
      <h1>Colaterales</h1>
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
              <p>Un poemario autoconfesional que busca reunir, con un lenguaje de connotación cercana y científica embebido en simbología, la secuencia de una vivencia definida como la ruta del enamoramiento.</p>
              <p>Se subdivide internamente en segmentos que buscan definir esa trazabilidad entre el tacto y la incertidumbre.</p>
            </section>
          </header>
          
          <div className={styles.price}>15,00 €</div>

          <dl className={styles.infoTable}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>ISBN:</dt>
              <dd className={styles.metaValue}>978-8419871411</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>ISBN-10:</dt>
              <dd className={styles.metaValue}>8419871419</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Editorial:</dt>
              <dd className={styles.metaValue}>Loto Azul</dd>
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
              <dd className={styles.metaValue}>14 x 0.7 x 21 cm</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Peso:</dt>
              <dd className={styles.metaValue}>200 gramos</dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Páginas:</dt>
              <dd className={styles.metaValue}>126</dd>
            </div>
          </dl>

          <div className={styles.buyButtons}>
            <Link 
              href="https://www.amazon.es/COLATERALES-SIN-COLECCION-%C3%93scar-Preciado/dp/8419871419/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=books&sr=1-1"
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
