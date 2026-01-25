'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PreviewX.module.css';

const Previewx: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = containerRef.current?.querySelectorAll(`.${styles.section}, .${styles.imageWrapper}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={containerRef} className={styles.previewsContainer}>
      {/* x gnome section*/}
      <section className={styles.section}>
        <a className={styles.linksline}
          href="https://github.com/xscriptor/x-linux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sectionTitle}>First look-&gt;Repo</h2>
        </a>

        <div className={styles.literaryGrid}>
          <div className={`${styles.imageWrapper} ${styles.literary1}`}>
            <Image
              src="/images/x/x00.png"
              alt="x first image on gnome"
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <section className={`${styles.installsnippet}`}>
          <pre>
            GNOME is one of the most complete desktop environments, ready for customization. If you need more, you can add extensions to achieve more profound results. It is very user-friendly, which makes it easier to learn how it works.
          </pre>
          <code>
            (This is especially helpful if this is your first time using it.)
          </code>
        </section>
      </section>

      <section className={styles.section}>
        <a className={styles.linksline}
          href="https://github.com/xscriptor/x-linux/blob/main/airootfs/root/x-postinstall.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sectionTitle}>Predefined Packages for developers-&gt;See the full script</h2>
        </a>

        <div className={styles.literaryGrid}>
          <div className={`${styles.imageWrapper} ${styles.literary1}`}>
            <Image
              src="/images/x/x01.png"
              alt="x first image on gnome"
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <section className={`${styles.installsnippet}`}>
          <h3>Developer Base Setup</h3>
          <pre><code>pacman -S --noconfirm --needed \
            git \
            kitty \
            curl \
            helix \
            ptyxis \
            zellij \
            yazi \
            starship \
            nodejs \
            npm \
            pnpm \
            btop \
            fastfetch \
            zsh \
            docker \
            docker-compose \
            base-devel \
            code</code></pre>
          <strong>This is a solid package base for any developer.</strong>
        </section>
      </section>

      <section className={styles.section}>
        <a className={styles.linksline}
          href="https://github.com/xscriptor/x-linux/tree/main/airootfs/root/x-assets/skel/.config"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sectionTitle}>Predefined customizations -&gt; Take a look at the files</h2>
        </a>

        <div className={styles.literaryGrid}>
          <div className={`${styles.imageWrapper} ${styles.literary1}`}>
            <Image
              src="/images/x/x04.png"
              alt="x fastfetch"
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <section className={`${styles.installsnippet}`}>
          <h3>XSync config files:</h3>
          <pre><code>
            CONFIG_DIRS=(&#34;kitty&#34; &#34;helix&#34; &#34;yazi&#34; &#34;zellij&#34; &#34;fastfetch&#34;)
            rsync -avh /root/x-assets/skel/.config/$dir/ &#34;$USER_DIR/.config/$dir/&#34;
          </code></pre>
          <strong>Automatic installation of customizations</strong>
        </section>
      </section>

      <section className={styles.section}>
        <a className={styles.linksline}
          href="https://github.com/xscriptordev/vscode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sectionTitle}>You can also install more customizations following the brand</h2>
        </a>

        <div className={styles.literaryGrid}>
          <div className={`${styles.imageWrapper} ${styles.literary1}`}>
            <Image
              src="/images/x/x03.png"
              alt="vscode with xcustomization on x"
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <a className={styles.linksline}
          href="https://github.com/xscriptordev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sectionTitle}>General view -&gt; Take a look of the source</h2>
        </a>

        <div className={styles.literaryGrid}>
          <div className={`${styles.imageWrapper} ${styles.literary1}`}>
            <Image
              src="/images/x/x02.png"
              alt="x first with obsidian"
              fill
              className={styles.previewImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Previewx;