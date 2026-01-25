import Image from "next/image";
import styles from "./InfoPage.module.css";

export const metadata = {
  title: "Info - Xscriptor",
  description: "Información relativa a X, Bio, trayectoria, enlaces",
};

export default function InfoPage() {
  return (
    <div>
      {/* Contenedor de biografía */}
      <div>
        <h2>Bio</h2>
        <p>
          Óscar Preciado es un poeta y letrista colombiano reconocido por su
          habilidad para tejer palabras con gran sensibilidad y profundidad
          emocional. Nacido en Colombia, Preciado ha logrado destacar en el
          panorama literario gracias a su estilo único que combina la poesía con
          la música, creando letras que resuenan tanto en el ámbito literario
          como en el musical.
        </p>
        <div className={`${styles["phrases-container"]}`}>
          <p>&quot;un pensamiento eclipsa lo que escapa a tu mirada.&quot;</p>
          <p>&quot;Sométeme al silencio mutilador.&quot;</p>
          <p>&quot;Me hierve la sangre como a cualquier otro.&quot;</p>
          <p>&quot;El espacio que ya no habitas.&quot;</p>
          <p>&quot;Las mareas en los ojos se han avivado.&quot;</p>
          <p>
            &quot;La soledad intrínseca es a mi parecer la más sutil y violenta.&quot;
          </p>
          <p>&quot;Me vi en su mirada, me costaba irme.&quot;</p>
          <p>&quot;Y sentir que lo desmedido era bidireccional.&quot;</p>
          <p>
            &quot;El mundo puede estar lleno de primeras veces y segundas
            oportunidades.&quot;
          </p>
          <p>
            &quot;Florecen los almendros a la vista de los anhelos insatisfechos.&quot;
          </p>
        </div>
        <p>
          Breves pistas que, quizás superficialmente, dan forma a lo que más
          tarde se materializará en cada obra. Estructura del pensamiento.
        </p>
      </div>
      <div>
        {/* Bio aspecto personal */}
        <p
          className={`${styles.typewriter} ${styles["blurry-text"]} ${styles.p}`}
        >
          Desde el cruce de la autoconsciencia con otros aspectos fundamentales
          para el desarrollo de la razón, me surgió el interés espontáneo de
          absorber conocimiento de diversas materias y así mismo emergió también
          el deseo de expresar mediante el lenguaje y la pintura. Ya a una edad
          menos temprana estudié mecatrónica e informática y terminé dándome una
          segunda oportunidad, para dedicarme a lo que me invadió primero, el
          conjunto de elementos que se vinculan a la esencia del propósito
          personal. En los últimos años he hecho múltiples publicaciones de
          manera tradicional, como Cielos de alquitrán, Primavera en el desierto
          o Colaterales, cuyas orientaciones van todas en una misma dirección,
          el ámbito autoconfesional, la redacción como método de catarsis para
          atravesar la otra cara de las experiencias.
        </p>
        {/* Firma */}
        <div className={styles.firma}>
          <Image
            src="/fop.png"
            alt="Firma"
            width={185}
            height={77}
            className={styles.firma}
          />
        </div>
      </div>
      <div className="">
        {/* Contenedor de enlaces */}
        <h2>Prensa y enlaces:</h2>
        <div className={styles["card-container"]}>
          <a
            href="https://elescritor.es/entrevista/charlamos-con-el-escritor-oscar-preciado-autor-de-cielos-de-alquitran/"
            className={styles["card"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Entrevista en Elescritor.es</h3>
            <p>
              Charlamos con el escritor Óscar Preciado, autor de &quot;Cielos de
              alquitrán&quot;.
            </p>
          </a>
          <a
            href="https://editorialcirculorojo.com/autores/oscar-preciado/"
            className={styles["card"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Bio Círculo Rojo</h3>
            <p>
              &quot;Artista polifacético, en los últimos años dedicado al ámbito
              literario y a la pintura.&quot;
            </p>
          </a>
          <a
            href="https://www.europapress.es/andalucia/almeria-00350/noticia-autor-colombiano-oscar-preciado-publica-cielos-alquitran-conjunto-textos-aroma-nostalgia-20230201105437.html"
            className={styles["card"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>EuropaPress</h3>
            <p>
              &quot;Las palabras conectan incluso en contextos lejanos,
              convergen en una misma conclusión...&quot;
            </p>
          </a>
          <a
            href="https://www.palabraquedormia.com/post/conocer-la-morfolog%C3%ADa-de-lo-indeterminado-y-tres-poemas-de-%C3%B3scar-preciado"
            className={styles["card"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Palabra que dormía</h3>
            <p>&quot;Conocer la morfología de lo indeterminado...&quot;</p>
          </a>

          <a
            href="https://autores-revista.com/oscar-preciado-colaterales/"
            className={styles["card"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Autores-revista</h3>
            <p>&quot;Colaterales...&quot;</p>
          </a>
        </div>
        {/* Contenedor de trayectoria */}
        <div>
        <h2>Trayectoria</h2>
        <ul className={`${styles["timeline"]} ${styles.p}`}>
          <li>
            <strong>Agosto 2022</strong> — Publicación de{" "}
            <em>Cielos de alquitrán</em>.
          </li>
          <li>
            <strong>Octubre 2022</strong> — Publicación de{" "}
            <em>Primavera en el desierto</em>.
          </li>
          <li>
            <strong>15 Sep 2023</strong> — Publicación de <em>Colaterales</em>.
          </li>
          <li>
            <strong>Dic 2024 – 2025</strong> — Participación en la publicación
            de <em>Poemas a la deriva</em>, presentado en la Feria del Libro de
            Buenos Aires.
          </li>
          <li>
            <strong>2025</strong> — Creación de blog literario <em>Reseñas, perspectivas, publicaciones</em>.
          </li>
          <li>
            <strong>Septiembre 2025</strong> — Traducción y publicación de{" "}
            <em>Asíntota</em>.
          </li>
          <li>
            <strong>Actualidad</strong> — Administración y desarrollo de papers
            y librerías en <em>Ciencia, tecnología y literatura (Xscriptor, Xscriptorcode, Xliterato)</em>.
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
