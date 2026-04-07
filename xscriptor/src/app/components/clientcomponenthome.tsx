"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import styles from './ClientComponentHome.module.css';
import NewsletterFooter from "./newsletter/newslettercomponent";
import XSeparator from "./xcomponents/XSeparator/XSeparator";
import XInteractivePhrase, { WordConfig } from "./xcomponents/xinteractivephrase/XInteractivePhrase";
import XZigZagLayout from "./xcomponents/xzigzaglayout/XZigZagLayout";
import XNewsletter from "./xcomponents/xnewsletter/XNwesletter";
import XFooter from "./xcomponents/xfooter/XFooter";


export default function Clientcomponenthome() {
  const [loading, setLoading] = useState(true);

  const primerafrase: WordConfig[] = [
    { text: "Lo eterno", type: "underline", breakAfter: true },
    { text: "marchita", type: "blur2" },
    { text: "y lo efímero", type: "button", breakAfter: true },
    { text: "marca nuestras memorias.", type: "blur1" },
  ];

  const segundafrase: WordConfig[] = [
    { text: "Las palabras", type: "underline", bold: true },
    { text: "son el eco de", type: "normal" },
    { text: "nuestros pensamientos,", type: "blur1", italic: true, breakAfter: true },

    { text: "y cada frase", type: "normal" },
    { text: "escrita", type: "button", bold: true },
    { text: "es un trazo", type: "normal" },
    { text: "en el lienzo", type: "blur2", italic: true },
    { text: "de nuestras almas.", type: "blur2", breakAfter: true },

    { text: "", type: "normal", breakAfter: true },

    { text: "Las pinturas", type: "underline", bold: true },
    { text: "son los silencios", type: "normal" },
    { text: "llenos de color,", type: "blur1", italic: true, breakAfter: true },

    { text: "donde el corazón", type: "normal" },
    { text: "expresa", type: "button", bold: true },
    { text: "lo que las palabras", type: "normal" },
    { text: "no pueden explicar.", type: "blur2", italic: true }
  ];

  const tercerafrase: WordConfig[] = [
    { text: "Todo pasa", type: "underline", bold: true },
    { text: "y, sin importar la", type: "normal" },
    { text: "derivación de orden", type: "normal", italic: true },
    { text: "que se presente,", type: "normal", breakAfter: true },

    { text: "todo está", type: "normal" },
    { text: "predispuesto", type: "button", bold: true },
    { text: "desde un", type: "normal" },
    { text: "modelo inicial", type: "blur1", bold: true },
    { text: "en el que las mismas ocurren,", type: "blur1", italic: true, breakAfter: true },

    { text: "incluso,", type: "normal" },
    { text: "sin consideración alguna", type: "blur2" },
    { text: "de las coordenadas.", type: "blur2", bold: true }
  ];

  const cuartafrase: WordConfig[] = [
    { text: "Comprender el tiempo", type: "underline", bold: true, breakAfter: true },

    { text: "Como un", type: "normal" },
    { text: "déjà vu insostenible", type: "normal", italic: true, bold: true },
    { text: "del que no se puede", type: "normal", breakAfter: true },

    { text: "desacoplar", type: "button", bold: true },
    { text: "ni por un instante", type: "blur1", italic: true, breakAfter: true },

    { text: "sus", type: "normal" },
    { text: "miserias", type: "blur2", bold: true },
    { text: "y su", type: "normal" },
    { text: "grandeza.", type: "blur2", italic: true, bold: true }
  ];

  const quintafrase: WordConfig[] = [
    { text: "Tiro de gracia", type: "underline", bold: true, breakAfter: true },

    { text: "Eres mi", type: "normal" },
    { text: "ruleta rusa,", type: "normal", italic: true, bold: true, breakAfter: true },

    { text: "el arma", type: "button", bold: true },
    { text: "que me volaría los sesos…", type: "blur1", italic: true, breakAfter: true },

    { text: "o la bala", type: "blur2", bold: true },
    { text: "que redimiría mi existencia.", type: "blur2", italic: true }
  ];

  const sextafrase: WordConfig[] = [
    { text: "Me vi en su mirada,", type: "underline", bold: true, breakAfter: true },

    { text: "me costaba irme,", type: "normal" },
    { text: "más de lo que cualquier", type: "normal", italic: true },
    { text: "ser humano puede planear.", type: "blur1", italic: true, breakAfter: true },

    { text: "Sus ojos", type: "button", bold: true },
    { text: "emanaban un dolor", type: "blur2", bold: true },
    { text: "de magnitudes incalculables,", type: "blur2", italic: true, breakAfter: true },

    { text: "pero era tarde,", type: "normal", bold: true },
    { text: "siempre lo fue,", type: "normal", italic: true, bold: true }
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


      <div className="text-center">
        <XInteractivePhrase words={primerafrase} as="h1" />
      </div>

      <XZigZagLayout className="mt-8" startSide="left" gap={6} offset="clamp(1rem, 4vw, 4rem)" textAlign="side">
        <XInteractivePhrase words={segundafrase} as="p" />
        <XInteractivePhrase words={tercerafrase} as="p" />
        <XInteractivePhrase words={cuartafrase} as="p" />
        <XInteractivePhrase words={quintafrase} as="p" />
        <XInteractivePhrase words={sextafrase} as="p" />
      </XZigZagLayout>

      <XSeparator orientation="horizontal" variant="dashed" hasX color="var(--accent)" xColor="var(--accent)" thickness="1px" gap="2rem" isFaded={true} xBg="var(--bg)" className="my-8" />
      <section className={styles.section}>
        <div className={styles.containerInner}>
          {/* Bloque 1 */}
          <div className={styles.flexBlock}>
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
          </div>
          <XSeparator orientation="horizontal" variant="dashed" hasX color="var(--accent)" xColor="var(--accent)" thickness="1px" gap="2rem" isFaded={true} xBg="var(--bg)" className="my-8" />
        </div>
      </section>

      <XZigZagLayout className="mt-8" startSide="left" gap={6} offset="clamp(1rem, 4vw, 4rem)" textAlign="side">
        <XInteractivePhrase words={segundafrase} as="p" />
        <XInteractivePhrase words={tercerafrase} as="p" />
        <XInteractivePhrase words={cuartafrase} as="p" />
        <XInteractivePhrase words={quintafrase} as="p" />
        <XInteractivePhrase words={sextafrase} as="p" />
      </XZigZagLayout>

      <XSeparator orientation="horizontal" variant="dashed" hasX color="var(--accent)" xColor="var(--accent)" thickness="1px" gap="2rem" isFaded={true} xBg="var(--bg)" className="my-8" />

      <XNewsletter
        // API
        apiRoute="/php/guardar_email.php"
        method="POST"
        payloadType="formData"

        // Textos
        title="Suscríbete para recibir material literario exclusivo"
        placeholder="tu@email.com"
        buttonText="Suscribirme"
        termsText="Acepto"
        termsLinkText="términos"
        termsLink="/terminos-y-condiciones"

        // Mensajes
        successMessage="¡Bienvenido(a)!"
        errorMessage="Algo salió mal. Por favor, intenta de nuevo."
        termsErrorMessage="Debes aceptar los términos y condiciones para suscribirte..."

        // Aspecto (Tus variables CSS originales)
        layout="vertical"
        accentColor="var(--accent)"
        textColor="var(--text)"
        borderColor="var(--border)"
        buttonTextColor="var(--accent-text)"
      />

      

      <XSeparator orientation="horizontal" variant="dashed" hasX color="var(--accent)" xColor="var(--accent)" thickness="1px" gap="2rem" isFaded={true} xBg="var(--bg)" className="my-8" />
    </div>
  );
}
