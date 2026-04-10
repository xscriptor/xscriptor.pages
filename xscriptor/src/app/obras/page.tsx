import styles from "@/app/obras/ObrasPage.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Colecciones - Xscriptor",
  description: "Descubre las colecciones de X y otros artistas relacionados",
};


export default function coleccionesPage() {
  return (
    <div>
      <h1>Obras</h1>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h2><Link href="/obras/literatura">Literatura</Link></h2>
          <ul className={styles.libros}>
            <li>
              <Link href="/obras/literatura/boulevard">
                <h3>
                  Boulevard
                </h3>
              </Link>
              <em>
                Un viaje introspectivo a través de la melancolía, los recuerdos agridulces y la materialización más profunda del sentimiento de pérdida.
              </em>
            </li>
            <li>
              <Link href="/obras/literatura/asintota">
                <h3>
                  Asíntota
                </h3>
              </Link>
              <em>
                La expresión poética de esas trazabilidades que se acercan mucho a materializarse pero que jamás alcanzan a definir una trayectoria conjunta.
              </em>
            </li>

            <li>
              <Link href="/obras/literatura/colaterales">
                <h3>
                  Colaterales
                </h3>
              </Link>
              <em>
                Una exploración del tránsito de sentimientos afines al amor y su experiencia más orgánica mediante la profundidad de una simbiosis con el lenguaje científico.
              </em>
            </li>

            <li>
              <Link href="/obras/literatura/primavera-en-el-desierto">
                <h3>
                  Primavera en el desierto
                </h3>
              </Link>
              <em>
                Como necesidad de dejar redactada una sed que lentamente va siendo saciada, no solamente en la violencia del vacío existencial que cualquier individuo puede experimentar, sino también en el lugar y la hora.
              </em>
            </li>

            <li>
              <Link href="/obras/literatura/cielos-de-alquitran">
                <h3>
                  Cielos de alquitrán
                </h3>
              </Link>
              <em>
                Es el resultado de una conjunción de redacciones que atrapan la sustancia de la urgencia, la nostalgia y la transformación. La metáfora del cielo oscuro y la portada de la rosa marchita hablan de duelo, renuncia, y la búsqueda de trascendencia entre ruinas.
              </em>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2><a href="https://art.xscriptor.com" target="_blank" rel="noopener noreferrer">Arte</a></h2>
          <div className={styles.libros}>
          <em>Un espacio dedicado exclusivamente a la extensión del arte en distintas vertientes.</em>
          </div>
          <div className={styles.arteGallery}>
          <Image
            src="/images/colecciones/arte/arte001.webp"
            alt="Ilustración de corazón fondo blanco hecha por xscriptor"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte002.webp"
            alt="Pintura digital tonos púrpura"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte003.webp"
            alt="Fotografía flores Colección primavera en Alemania"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte004.webp"
            alt="Pintura digital retrato en blanco y negro"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte005.webp"
            alt="Flor de colección de otoño"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte006.webp"
            alt="Pintura digital múltiples colores de xscriptor"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte007.webp"
            alt="Colección primavera en Alemania, flores"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte008.webp"
            alt="Flores de colección primavera en Alemania"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte009.webp"
            alt="Arte de superposición múltiple"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          <Image
            src="/images/colecciones/arte/arte010.webp"
            alt="Flores en superposición múltiple colección de otoño"
            width={500}
            height={500}
            className={styles.arteThumbnail}
          />
          </div>
        </div>
      </div>
    </div>
  );
}