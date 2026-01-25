"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!acceptedTerms) {
      setMessage("Debes aceptar los términos y condiciones para suscribirte...");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch("/php/guardar_email.php", {
        method: "POST",
        body: formData,
        cache: "no-store",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage(data.message || "¡Bienvenido(a)!");
        setEmail("");
      } else {
        setMessage(data.error || "Algo salió mal. Por favor, intenta de nuevo.");
      }
    } catch {
      setMessage("Error al suscribirte. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div
      className="
        w-full max-w-lg mx-auto
        p-6 md:p-7
        text-(--text)
        items-center
        text-center
      "
    >
      <h2 className="mb-2 text-2sm text-center">
        Suscríbete a nuestro boletín
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Ingresa tu email"
            className="
              newsletter w-full rounded-xl
              px-3 py-2.5
              outline-none transition
              border bg-transparent
              focus:ring-2
            "
            aria-label="email"
            style={{
              fontFamily: "EB Garamond",
              color: "var(--text)",
              caretColor: "var(--accent)",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label className="flex items-start gap-2 text-sm leading-6">
          <input
            type="checkbox"
            className="mt-1.5 h-4 w-4 rounded-sm"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            style={{ accentColor: "var(--accent)" }}
          />
          <span>
            Acepto los{" "}
            <Link
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--accent)" }}
            >
              términos y condiciones
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="
            underline
            hover:text-(--text)
            w- rounded-xl px-4 py-2.5
            focus:outline-none focus:ring-2 focus:ring-offset-2
          "
          style={{
            alignContent: "center",
            alignItems: "center",
            color: "var(--accent)",
            background: "var(--bg)",
            borderColor: "color-mix(in srgb, var(--bg) 60%, transparent)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.95";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          }}
        >
          Suscribirse
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm" style={{ color: "var(--accent)" }}>
          {message}
        </p>
      )}
    </div>
  );
}
