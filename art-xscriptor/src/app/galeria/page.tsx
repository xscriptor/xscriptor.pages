"use client";

import { BlurFade } from "@/app/components/blur-fade/blur-fade";
import styles from "./gallery.module.css";
import Image from "next/image";




const imagesPaint = [
  "/arte/digitalpaint/arte0001.jpg",
  "/arte/digitalpaint/arte0002.jpg",
  "/arte/digitalpaint/arte0003.jpg",
  "/arte/digitalpaint/arte0004.jpg",
  "/arte/digitalpaint/arte0005.jpg",
  "/arte/digitalpaint/arte0006.jpg",
  "/arte/digitalpaint/arte0007.jpg",
  "/arte/digitalpaint/arte0008.jpg",  
  "/arte/digitalpaint/arte0009.jpg",
  "/arte/digitalpaint/arte0010.jpg",
  "/arte/digitalpaint/arte0011.jpg",
  "/arte/digitalpaint/arte0012.jpg",
  "/arte/digitalpaint/arte0013.jpg",
  "/arte/digitalpaint/arte0014.jpg",
  "/arte/digitalpaint/arte0015.jpg",
  "/arte/digitalpaint/arte0016.jpg",
  "/arte/digitalpaint/arte002.webp",
  "/arte/digitalpaint/arte004.webp",
  "/arte/digitalpaint/arte006.webp",
  "/arte/digitalpaint/arte001.webp",
];


const imagesPrimavera = [
  "/arte/primavera/arte003.webp",
  "/arte/primavera/arte007.webp",
  "/arte/primavera/arte005.webp",
  "/arte/primavera/arte008.webp",
  "/arte/primavera/arte010.webp",
  "/arte/primavera/arte0011.jpg",
  "/arte/primavera/arte0012.jpg",
  "/arte/primavera/arte0013.jpg",
  "/arte/primavera/arte0014.jpg",
  "/arte/primavera/arte0015.jpg",
  "/arte/primavera/arte0016.jpg",
  "/arte/primavera/arte0017.jpg",
  "/arte/primavera/arte0018.jpg",
  "/arte/primavera/arte0019.jpg",
  "/arte/primavera/arte0020.jpg",
  "/arte/primavera/arte0021.jpg",
  "/arte/primavera/arte0022.jpg",
  "/arte/primavera/arte0023.jpg",
  "/arte/primavera/arte0024.jpg",
];

const imagesOtonio = [
  "/arte/otonio/otonio001.jpg",
  "/arte/otonio/otonio002.jpg",
  "/arte/otonio/otonio003.jpg",
  "/arte/otonio/otonio004.jpg",
  "/arte/otonio/otonio005.jpg",
  "/arte/otonio/otonio006.jpg",
  "/arte/otonio/otonio007.jpg",
]

const imagesVerano = [
  "/arte/verano/verano001.jpg",
  "/arte/verano/verano002.jpg",
  "/arte/verano/verano003.jpg",
  "/arte/verano/verano004.jpg",
  "/arte/verano/verano005.jpg",
  "/arte/verano/verano006.jpg",
  "/arte/verano/verano007.jpg",
  "/arte/verano/verano008.jpg",
]

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="container mx-auto px-2 py-8 sm:px-4 md:px-6 lg:px-8" style={{ width: '100%', maxWidth: '100vw', boxSizing: 'border-box' }}>
        {/* Header */}
        <BlurFade delay={0.1}>
            <h2>
              Pintura Digital
            </h2>
            <p>
              <em>Síntesis de obras digitales</em>
            </p>
            <p>
              Este resumen de la colección busca representar la expresión artística digital, fusionando la creatividad con la tecnología de hoy en día. Cada obra es una obra única, una manifestación de la imaginación.
              </p>
        </BlurFade>
        <main>
        {/* Contenedor de colección reutilizable */}
        <div className="collection-container">
          {/* Galería con 3 columnas y aparición gradual por filas */}
          <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {imagesPaint.map((image, index) => {
              // Calcular la fila para el retraso de aparición
              const row = Math.floor(index / 3);
              const delay = 0.2 + (row * 0.1);
              
              return (
                <BlurFade 
                  key={`image-${index}`} 
                  delay={delay} 
                  inView
                  duration={0.5}
                  blur="8px"
                >
                  <div className={styles.imageWrapper}>
                    <article className={styles.imageArticle}>
                      <Image
                        className={styles.galleryImage}
                        src={image}
                        alt={`Obra de arte ${index + 1}`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </article>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
        </div>
        <BlurFade delay={0.1}>
            <h1>
              Primavera
            </h1>
            <p>
              <em>Colección de florescencias</em>
            </p>
            <p>
              Esta síntesis de la colección representa el florecer interno de cada individuo como reflejo de la estación en la naturaleza.  
            </p>
        </BlurFade>
        <div className="collection-container">
          {/* Galería con 3 columnas y aparición gradual por filas */}
          <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {imagesPrimavera.map((image, index) => {
              // Calcular la fila para el retraso de aparición
              const row = Math.floor(index / 3);
              const delay = 0.2 + (row * 0.1);
              
              return (
                <BlurFade 
                  key={`image-${index}`} 
                  delay={delay} 
                  inView
                  duration={0.5}
                  blur="8px"
                >
                  <div className={styles.imageWrapper}>
                    <article className={styles.imageArticle}>
                      <Image
                        className={styles.galleryImage}
                        src={image}
                        alt={`Obra de arte ${index + 1}`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </article>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
        </div>

        <BlurFade delay={0.1}>
            <h1>
              Otoño
            </h1>
            <p>
              <em>Colección de ocasos</em>
            </p>
            <p>
              Conjunto de representaciones para rememorar que todo pasa, pero no por ello es menos importante.
            </p>
        </BlurFade>
        <div className="collection-container">
          {/* Galería con 3 columnas y aparición gradual por filas */}
          <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {imagesOtonio.map((image, index) => {
              // Calcular la fila para el retraso de aparición
              const row = Math.floor(index / 3);
              const delay = 0.2 + (row * 0.1);
              
              return (
                <BlurFade 
                  key={`image-${index}`} 
                  delay={delay} 
                  inView
                  duration={0.5}
                  blur="8px"
                >
                  <div className={styles.imageWrapper}>
                    <article className={styles.imageArticle}>
                      <Image
                        className={styles.galleryImage}
                        src={image}
                        alt={`Obra de arte ${index + 1}`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </article>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
        </div>

        <BlurFade delay={0.1}>
            <h1>
              Verano
            </h1>
            <p>
              <em>Colección de Clímax</em>
            </p>
            <p>
              Producto del remanente de la primavera, nos trae a colación la misma intensidad de la pérdida y el cambio en su forma prematura, donde el calor es la base fundamental del momento capturado.
            </p>
        </BlurFade>
        <div className="collection-container">
          {/* Galería con 3 columnas y aparición gradual por filas */}
          <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {imagesVerano.map((image, index) => {
              // Calcular la fila para el retraso de aparición
              const row = Math.floor(index / 3);
              const delay = 0.2 + (row * 0.1);
              
              return (
                <BlurFade 
                  key={`image-${index}`} 
                  delay={delay} 
                  inView
                  duration={0.5}
                  blur="8px"
                >
                  <div className={styles.imageWrapper}>
                    <article className={styles.imageArticle}>
                      <Image
                        className={styles.galleryImage}
                        src={image}
                        alt={`Obra de arte ${index + 1}`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </article>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
        </div>

        </main>
      </div>
    </div>
  );
}
