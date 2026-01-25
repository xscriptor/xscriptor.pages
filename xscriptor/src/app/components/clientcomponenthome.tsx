"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import InteractivePhrase from "./interactivephrases/InteractiveTextone";
import InteractivePhrase2 from "./interactivephrases/InteractiveTexttwo";
import styles from './ClientComponentHome.module.css';
import NewsletterFooter from "./newsletter/newslettercomponent";

export default function Clientcomponenthome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.container}>

      {loading && (
        <div className={styles.loadingOverlay}>
          <LoadingAnimation onDone={() => setLoading(false)} />
        </div>
      )}

      <section className={styles.section}>
        <div className={styles.containerInner}>
          {/* Bloque 1 */}
          <div className={styles.flexBlock}>
            <div className={styles.textBlock}>
              <InteractivePhrase />
            </div>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <video
                  src="/background01x.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className={styles.video}
                />
              </div>
            </div>
          </div>
          {/*Botón de ir a la colección*/}
          <div className={styles.buttonContainer}>
            <p>
              ---------------------------------------------------------
            </p>
          </div>
          {/* Bloque 2 */}
          <div className={styles.flexBlock}>
            
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <video
                  src="/background03x.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className={styles.video}
                />
              </div>
            </div>
            <div className={styles.textBlockRight}>
              <InteractivePhrase2 />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <NewsletterFooter />
        </div>
      </section>

      <div aria-hidden className={styles.spacer} />
    </div>
  );
}
