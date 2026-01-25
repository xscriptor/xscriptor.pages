'use client'; // Aquí sí

import { Roboto_font } from "../fonts";
import DecryptedText from "../DecryptedText";
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        const subject = encodeURIComponent("Nuevo mensaje de contacto");
        const body = encodeURIComponent(
          `Nombre: ${name}\nEmail: ${email}\nNúmero: ${number}\nMensaje:\n${message}`
        );

        window.location.href = `mailto:x@xscriptor.com?subject=${subject}&body=${body}`;
      }}
      className={styles.contactForm}
    >
      <div className={styles.formHeader}>
        <span className={`${styles.dot} ${styles.dotRed}`}></span>
        <span className={`${styles.dot} ${styles.dotYellow}`}></span>
        <span className={`${styles.dot} ${styles.dotGreen}`}></span>
      </div>
      {[
        { label: "Name*://", name: "name", type: "text", required: true, placeholder: "Your name here" },
        { label: "Email*://", name: "email", type: "email", required: true, placeholder: "email" },
        { label: "Number://", name: "number", type: "text", placeholder: "phone(optional)" },
        { label: "Message*://", name: "message", type: "text", required: true, placeholder: "your message" },
      ].map((field, index) => (
        <div key={index} className={styles.fieldContainer}>
          <label htmlFor={field.name} className={`${styles.fieldLabel} ${Roboto_font.className}`}>
            <DecryptedText
              text={field.label}
              animateOn="view"
              sequential
              revealDirection="center"
              speed={90}
              maxIterations={60}
              encryptedClassName="text-blue-200 animate-pulse"
              parentClassName="tracking-wide"
            />
          </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
            className={styles.fieldInput}
          />
        </div>
      ))}

      <div className={styles.submitContainer}>
        <button
          type="submit"
          className={styles.submitButton}
        >
          Send ➤
        </button>
      </div>
    </form>
  );
}
