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
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Layout horizontal */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        {/* Título */}
        <span className="text-sm text-[var(--text)] whitespace-nowrap">
          X Recibe poesía y reflexiones
        </span>

        {/* Input */}
        <input
          type="email"
          placeholder="tu@email.com"
          className="
            w-full md:w-64
            px-4 py-2
            text-sm
            rounded-lg
            border border-[var(--border)]
            bg-transparent
            outline-none
            focus:border-[var(--accent)]
            transition-colors
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

        {/* Checkbox inline */}
        <label className="flex items-center gap-2 text-xs whitespace-nowrap cursor-pointer">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded-sm cursor-pointer"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            style={{ accentColor: "var(--accent)" }}
          />
          <span className="opacity-70">
            Acepto{" "}
            <Link
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--accent)" }}
            >
              términos
            </Link>
          </span>
        </label>

        {/* Botón */}
        <button
          type="submit"
          className="
            px-4 py-2
            text-sm
            rounded-lg
            border border-[var(--accent)]
            text-[var(--accent)]
            hover:bg-[var(--accent)] hover:text-[var(--accent-text)]
            transition-all duration-200
            whitespace-nowrap
          "
        >
          Suscribirse
        </button>
      </form>

      {/* Mensaje de feedback */}
      {message && (
        <p className="mt-3 text-center text-xs" style={{ color: "var(--accent)" }}>
          {message}
        </p>
      )}
    </div>
  );
}
