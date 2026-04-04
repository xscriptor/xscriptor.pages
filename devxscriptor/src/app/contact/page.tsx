import DecryptedText from "../components/DecryptedText";
import ContactForm from "../components/contactform/ContactForm";
import TelegramIcon from "../components/contacticons/TelegramIcon";
import WhatsappIcon from "../components/contacticons/WhatsappIcon";
import InstagramIcon from "../components/contacticons/Instagram";
import GithubIcon from "../components/contacticons/githubicon";
import styles from './contact.module.css';

export const metadata = {
  title: "Contact - xscriptor",
  description: "Here you will find the means to contact with me.",
};

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={`${styles.contactMain} ${styles.fadeInUp}`}>
        <div className={styles.contactHeader}>
          <h1>
            <DecryptedText
              text="Contact"
              animateOn="view"
              sequential
              revealDirection="center"
              speed={90}
              maxIterations={60}
              encryptedClassName="text-red-500 animate-pulse"
            />
          </h1>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
        <div className={styles.socialSection}>
          <h2 className={styles.socialTitle}>
            <DecryptedText
              text="You can also find me on:"
              animateOn="view"
              sequential
              revealDirection="center"
              speed={30}
              maxIterations={30}
              encryptedClassName="text-red-500 animate-pulse"
              parentClassName={styles.socialTitle}
            />
          </h2>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://t.me/xscriptor"
            target="_blank"
            className={styles.socialLink}
          >
            Telegram <TelegramIcon />
          </a>

          <a
            href="https://instagram.com/dev.xscriptor"
            target="_blank"
            className={styles.socialLink}
          >
            Instagram (X-Dev) <InstagramIcon />
          </a>

          <a
            href="https://wa.me/34666938748?text=Hello!"
            target="_blank"
            className={styles.socialLink}
          >
            WhatsApp <WhatsappIcon />
          </a>

          <a
            href="https://instagram.com/xscriptor"
            target="_blank"
            className={styles.socialLink}
          >
            Instagram (Xscriptor) <InstagramIcon />
          </a>

          <a
            href="https://github.com/xscriptor"
            target="_blank"
            className={styles.socialLink}
          >
            GitHub <GithubIcon />
          </a>
        </div>
        
      </div>
    </div>

  );
}
