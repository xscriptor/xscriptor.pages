"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import InteractivePhrase from "./interactivephrases/InteractiveTextone";
import InteractivePhrase2 from "./interactivephrases/InteractiveTexttwo";
import styles from './ClientComponentHome.module.css';
import NewsletterFooter from "./newsletter/newslettercomponent";
import XSeparator from "./xcomponents/XSeparator/XSeparator";
import XInteractivePhrase, { WordConfig } from "./xcomponents/xinteractivephrase/XInteractivePhrase";


export default function Clientcomponenthome() {
  const [loading, setLoading] = useState(true);

  const primerafrase: WordConfig[] = [
  { text: "Lo eterno", type: "underline", breakAfter: true },
  { text: "marchita", type: "blur2" },
  { text: "y lo efímero", type: "button", breakAfter: true },
  { text: "marca nuestras memorias.", type: "blur1" },
];

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
              <XInteractivePhrase words={primerafrase} as="h2" />
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
            
            <div className="flex justify-center mt-8 gap-4">
              <XSeparator variant="dashed" />
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
