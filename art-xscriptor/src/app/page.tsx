import { BlurFade } from "./components/blur-fade/blur-fade";
import DecryptedText from "./components/decrypttext/decrypttext";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
       <BlurFade>
            <p>
              <DecryptedText
                text="-------X-------"
                animateOn="view"
                sequential
                revealDirection="start"
                speed={60}
                maxIterations={10}
                encryptedClassName="animate-pulse"
                characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
                parentClassName="" />
            </p>
          </BlurFade>
   
    <div className={styles.pageContainer}>
      <div className={styles.textSection}>
        <div className={styles.textContent}>
          <BlurFade>
            <p>
              <em>
                <DecryptedText
                  text="Si me preguntas por mis obras, debo confesarte que no existen como objetos tangibles en un museo ni colgadas en muros de mármol. Son más bien emanaciones de un espíritu que juega con la luz, la sombra y el símbolo."
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={5}
                  maxIterations={10}
                  encryptedClassName="animate-pulse"
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
                  parentClassName="" />
              </em>
            </p>
          </BlurFade>
          
          <BlurFade>
            <p>
              <em>
                <DecryptedText
                  text="En mis fotografías busco atrapar no lo visible, sino lo invisible: ese instante en que una puerta entreabierta parece un umbral a otro mundo, o el reflejo en un charco se convierte en un cielo nuevo. Cada disparo es una pregunta suspendida: ¿qué hay más allá de la apariencia?"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={5}
                  maxIterations={10}
                  encryptedClassName="animate-pulse"
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
                  parentClassName="" />
              </em>
            </p>
          </BlurFade>
          
          <BlurFade>
            <p>
              <em>
                <DecryptedText
                  text="Mis pinturas digitales, en cambio, son jardines de signos: óleo imposible sobre pantallas que respiran. No imitan la realidad, sino que la reinventan. Son geometrías que se diluyen en atmósferas de color, rostros que nunca existieron pero que miran al espectador con la certeza de haber soñado antes."
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={5}
                  maxIterations={10}
                  encryptedClassName="animate-pulse"
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
                  parentClassName="" />
              </em>
            </p>
          </BlurFade>
          
          <BlurFade>
            <p>
              <em>
                <DecryptedText
                  text="Podría decirse que mis obras no buscan representar, sino invocar: el silencio, la nostalgia, la memoria, lo inasible. Son espejos en los que cada alma contempla su propio secreto."
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={5}
                  maxIterations={10}
                  encryptedClassName="animate-pulse"
                  characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'
                  parentClassName="" />
              </em>
            </p>
          </BlurFade>
        </div>
        
        {/* Botones para pantallas pequeñas */}
        <div className={styles.buttonContainerMobile}>
          <a href="https://xscriptor.com/obras" className={styles.actionButton}>
            Explorar Literatura
          </a>
          <a href="/galeria" className={styles.actionButton}>
            Ver Galería
          </a>
        </div>
      </div>
      
      <div className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <BlurFade>
            <video 
              src="/video/video01.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className={styles.video}
            >
              Tu navegador no soporta el elemento video.
            </video>
          </BlurFade>
        </div>
        <div className={styles.buttonContainer}>
          <a href="https://xscriptor.com/obras" className={styles.actionButton}>
            Explorar Literatura
          </a>
          <a href="/galeria" className={styles.actionButton}>
            Ver Galería
          </a>
        </div>
      </div>
    </div>
     </div>
  );
}
