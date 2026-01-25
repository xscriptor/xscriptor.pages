"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = { ok: boolean; msg: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot
    if ((fd.get("website") as string)?.length) {
      setStatus({ ok: true, msg: "Gracias." });
      form.reset();
      return;
    }

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject = String(fd.get("subject") || "Contacto desde xscriptor.com").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({ ok: false, msg: "Rellena nombre, email y mensaje." });
      return;
    }

    // Construimos el cuerpo del email
    const bodyLines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ];
    const body = bodyLines.join("\n");

    // mailto universal (abre cliente por defecto: Gmail app, Apple Mail, Outlook, etc.)
    const to = "x@xscriptor.com";
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirigimos
    window.location.href = mailto;

    // Mensaje de estado (opcional; algunos clientes abrirán en otra ventana/pestaña)
    setStatus({ ok: true, msg: "Abriendo tu aplicación de correo…" });

    // No reseteo inmediato por si el usuario vuelve a la pestaña
    // Si prefieres resetear:
    // form.reset();
  }

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      {/* Honeypot oculto */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Tu web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            required
            maxLength={80}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Asunto</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Tema del mensaje"
          required
          maxLength={120}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Cuéntame qué necesitas…"
          required
          maxLength={3000}
        />
      </div>
    <div className={styles.buttoncontainer}>
      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </div>
      <p
        className={`${styles.status} ${
          status?.ok ? styles.statusOk : status === null ? "" : styles.statusError
        }`}
        role="status"
        aria-live="polite"
      >
        {status?.msg}
      </p>
    </form>
  );
}
