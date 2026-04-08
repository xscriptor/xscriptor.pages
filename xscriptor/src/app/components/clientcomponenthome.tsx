"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import styles from "./ClientComponentHome.module.css";

import {
  XInteractivePhrase,
  XNewsletter,
  XSeparator,
  XZigZagLayout,
} from "@xscriptor/xcomponents";
import type { WordConfig } from "@xscriptor/xcomponents/content";

import "@xscriptor/xcomponents/styles.css";


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

  const septimafrase: WordConfig[] = [
    { text: "hazme olvidar", type: "underline", bold: true },
    { text: "la escencia efímera", type: "blur1", italic: true },
    { text: "de todas las cosas", type: "button", bold: true },
    { text: "de todas las cosas", type: "blur2", italic: true }
  ];

  const octavafrase: WordConfig[] = [
    { text: "Sométeme", type: "underline", bold: true },
    { text: "al silencio", type: "button", italic: true },
    { text: "mutilador.", type: "blur2", bold: true }
  ];

  const novenafrase: WordConfig[] = [
    { text: "Entonces vendrá", type: "normal" },
    { text: "la soledad", type: "underline", bold: true },
    { text: "y con ella aprenderé", type: "normal", breakAfter: true },

    { text: "que no sólo", type: "normal" },
    { text: "las rosas marchitan,", type: "blur1", italic: true },
    { text: "lo que late", type: "button", bold: true },
    { text: "en nosotros también.", type: "blur2", italic: true, bold: true }
  ];

  const decimafrase: WordConfig[] = [
    { text: "Florecen los almendros", type: "underline", bold: true },
    { text: "a la vista de los", type: "normal" },
    { text: "anhelos", type: "button", italic: true, bold: true },
    { text: "insatisfechos.", type: "blur2", italic: true }
  ];

  const onceavafrase: WordConfig[] = [
    { text: "Y sentir", type: "normal" },
    { text: "que lo desmedido", type: "underline", bold: true },
    { text: "era", type: "button", italic: true },
    { text: "bidireccional.", type: "blur2", bold: true }
  ];

  const doceavafrase: WordConfig[] = [
    { text: "Te sucedía", type: "normal" },
    { text: "una intensidad", type: "underline", bold: true },
    { text: "de longitudes absurdas,", type: "blur1", italic: true, breakAfter: true },

    { text: "amoldada", type: "normal" },
    { text: "a todos y cada uno", type: "button", bold: true },
    { text: "de tus abismos,", type: "blur2", italic: true, breakAfter: true },

    { text: "como si la suma", type: "normal" },
    { text: "de recorridos", type: "normal", italic: true },
    { text: "llenase de aire", type: "normal" },
    { text: "el espacio", type: "blur1", bold: true },
    { text: "en el que más tarde", type: "normal", breakAfter: true },

    { text: "la liquidez de su fruto", type: "blur2", italic: true },
    { text: "se fusionaría.", type: "blur2", bold: true }
  ];

  const treceavafrase: WordConfig[] = [
    { text: "Dolerá lo que tenga que doler", type: "underline", bold: true, breakAfter: true },

    { text: "arrancarse de la piel", type: "normal" },
    { text: "eso a lo que", type: "normal", italic: true, breakAfter: true},
    { text: "fugazmente", type: "button", bold: true },
    { text: "se pertenece", type: "blur2", italic: true, breakAfter: true },

    { text: "y se sentirá levemente,", type: "normal" },
    { text: "pero recalcitrante,", type: "blur1", italic: true },
    { text: "un alfiler punzante", type: "blur1", bold: true, breakAfter: true },

    { text: "fertilizando la piel", type: "normal" },
    { text: "para que alguien más", type: "button", bold: true },
    { text: "habite lo que perdimos", type: "blur2", italic: true },
    { text: "en el ayer.", type: "blur2", bold: true }
  ];

  const catorceavafrase: WordConfig[] = [
    { text: "A cuatro horas de un beso", type: "underline", bold: true, breakAfter: true },

    { text: "me percaté de que llevo", type: "normal" },
    { text: "media vida escapándome", type: "normal", italic: true, breakAfter: true },

    { text: "con los cigarrillos", type: "button", bold: true },
    { text: "y el whisky", type: "button", bold: true },
    { text: "perforándome el pulmón", type: "blur2", italic: true },
    { text: "y las entrañas,", type: "blur2", breakAfter: true },

    { text: "pero también", type: "normal" },
    { text: "me he percatado", type: "normal", italic: true },
    { text: "de que más entrañables", type: "normal" },
    { text: "son tus labios", type: "blur1", bold: true, breakAfter: true },

    { text: "que sin violencia", type: "normal" },
    { text: "transgreden mi cuello", type: "blur1", italic: true },
    { text: "y me invitan a quedarme.", type: "blur1", bold: true }
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

      <XZigZagLayout className="mt-8" startSide="left" gap={6} offset="clamp(1rem, 4vw, 4rem)" textAlign="side" showLine={true} lineColor="var(--accent)" lineThickness={0.2}>
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
      <div className="text-center">
        <XInteractivePhrase words={septimafrase} as="h2" />
      </div>
      <XZigZagLayout className="mt-8" startSide="left" gap={6} offset="clamp(1rem, 4vw, 4rem)" textAlign="side" showLine={true} lineColor="var(--accent)" lineThickness={0.2}>
        <XInteractivePhrase words={doceavafrase} as="p" />
        <XInteractivePhrase words={treceavafrase} as="p" />
        <XInteractivePhrase words={novenafrase} as="p" />
        <XInteractivePhrase words={decimafrase} as="p" />
        <XInteractivePhrase words={onceavafrase} as="p" />
        <XInteractivePhrase words={catorceavafrase} as="p" />
      </XZigZagLayout>
      <div className="text-center">
        <XInteractivePhrase words={octavafrase} as="p" />
      </div>
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

        // Estilos
        layout="vertical"
        accentColor="var(--accent)"
        textColor="var(--text)"
        borderColor="var(--border)"
        buttonTextColor="var(--accent-text)"
      />



      
    </div>
  );
}
