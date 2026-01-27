import styles from './ContactPage.module.css';
import ContactForm from "../components/contact/contactForm";
import Socialcontact from "../components/contact/socialcontact";

export const metadata = {
  title: "Contacto — Xscriptor",
  description: "Comunícate con Óscar Preciado — Formulario de contacto y redes sociales",
}

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <h2>Déjame un mensaje</h2>
        <ContactForm />
        <h3>Encuéntrame en redes</h3>
        <Socialcontact />
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

