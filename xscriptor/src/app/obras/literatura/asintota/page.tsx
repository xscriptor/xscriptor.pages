import Image from 'next/image';
import styles from './AsintotaPage.module.css';

const galleryImages = [
  {
    src: "/images/colecciones/libros/asintota01.png",
    alt: "Asíntota - Imagen 1",
    width: 600,
    height: 900
  },
  {
    src: "/images/colecciones/libros/asintota02.png",
    alt: "Asíntota - Imagen 2",
    width: 600,
    height: 900
  },
  {
    src: "/images/colecciones/libros/asintota03.png",
    alt: "Asíntota - Imagen 3",
    width: 600,
    height: 900
  }
];

export default function AsintotaPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Asíntota</h1>
      
      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.galleryImage}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <p>Eventualmente estarán disponibles las tres versiones de <em>Asíntota</em>, un poemario redactado a través del bagaje personal.</p>
    </div>
    
  );
}
