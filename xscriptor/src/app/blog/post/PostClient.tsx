"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./PostPage.module.css";

type Meta = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date?: string;
  tags?: string[];
};

type ApiOk = { ok: true; meta: Meta; format: "html"; content: string };
type ApiErr = { ok: false; error: string; [k: string]: any };

const POST_API_BASE =
  process.env.NEXT_PUBLIC_BLOG_POST_API_BASE ?? "/php/blog/post.php";

// Tipado de MathJax para TS (evita errores con window.MathJax)
declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: (elements?: Element[]) => Promise<void>;
      startup?: any;
      tex?: any;
      options?: any;
    };
  }
}

export default function PostClient() {
  const q = useSearchParams();
  const router = useRouter();

  // Hook siempre al mismo nivel
  const slug = useMemo(() => q.get("slug") ?? "", [q]);

  const [data, setData] = useState<ApiOk | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // Contenedor del HTML para que MathJax procese solo este nodo
  const contentRef = useRef<HTMLDivElement>(null);

  // Carga/config de MathJax SIN inline script (CSP-friendly)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.MathJax) return; // ya cargado anteriormente

    // Configuración por JS (no inline)
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$','$$'], ['\\[','\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script','noscript','style','textarea','pre','code'],
        processHtmlClass: 'mathjax-process'
      }
    };

    const s = document.createElement("script");
    s.id = "mathjax-script";
    s.async = true;
    s.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
    s.onload = () => {
      // Primer typeset al cargar
      if (contentRef.current) {
        window.MathJax?.typesetPromise?.([contentRef.current]).catch(() => {});
      }
    };
    document.head.appendChild(s);
  }, []);

  // Fetch del post (tal cual lo tenías)
  useEffect(() => {
    if (!slug) {
      setErr("Falta ?slug");
      return;
    }
    setErr(null);
    setData(null);

    const ac = new AbortController();
    (async () => {
      try {
        const r = await fetch(`${POST_API_BASE}?slug=${encodeURIComponent(slug)}`, {
          signal: ac.signal,
          cache: "no-store",
        });
        const json = (await r.json().catch(() => null)) as ApiOk | ApiErr | null;

        if (!r.ok) throw new Error((json as ApiErr)?.error ?? `HTTP ${r.status}`);
        if (json && "ok" in json && json.ok === false) {
          throw new Error((json as ApiErr).error || "Error del servidor");
        }
        if (!json || !("meta" in json) || !("content" in json)) {
          throw new Error("Respuesta inesperada del servidor");
        }

        setData(json as ApiOk);
        if (json.meta?.title) document.title = json.meta.title;
      } catch (e: any) {
        if (e.name !== "AbortError") setErr(e.message || "Error cargando el post");
      }
    })();

    return () => ac.abort();
  }, [slug]);

  // Re-procesa MathJax cuando cambia el contenido
  const meta = data?.meta;
  const content = data?.content ?? "";
  useEffect(() => {
    if (!contentRef.current) return;
    window.MathJax?.typesetPromise?.([contentRef.current]).catch(() => {});
  }, [content]);

  const contentHasH1 = useMemo(() => /<h1(\s|>)/i.test(content), [content]);

  if (err) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p style={{ opacity: 0.9 }}>⚠️ {err}</p>
        <div className="mt-6 flex gap-4">
          <button className="underline" onClick={() => router.back()}>
            Volver
          </button>
          <Link href="/blog" className="underline">
            Ir al blog
          </Link>
        </div>
      </main>
    );
  }

  if (!data || !meta) {
    return <main className="mx-auto max-w-3xl px-4 py-10">Cargando…</main>;
  }

  return (
    <article className={`mx-auto max-w-3xl px-4 py-10 prose prose-neutral dark:prose-invert ${styles.content}`}>
      <header className="mb-8" style={{ textAlign: "center" }}>
        {!contentHasH1 && <h1 className="mb-2">{meta.title ?? meta.slug}</h1>}
        {meta.date && (
          <time className="opacity-70">
            {new Date(meta.date).toLocaleDateString("es-ES")}
          </time>
        )}
        {!!meta.tags?.length && (
          <div className="mt-2 flex gap-2 flex-wrap justify-center">
            {meta.tags.map((t) => (
              <span key={t} className="text-xs opacity-70">
                #{t}
              </span>
            ))}
          </div>
        )}
        {meta.cover && (
          <div className="mt-6">
            <img
              src={meta.cover}
              alt={meta.title ?? meta.slug}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
          </div>
        )}
      </header>

      {/* HTML servido por PHP (MathJax procesará este nodo) */}
      <div
        ref={contentRef}
        className="mathjax-process"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-12 flex items-center justify-between">
        <Link href="/blog" className="underline">
          ← Volver al blog
        </Link>
        <button
          className="underline"
          onClick={async () => {
            const url = typeof window !== "undefined" ? window.location.href : "";
            if (navigator.share) {
              try {
                await navigator.share({ title: meta.title, url });
              } catch {}
            } else {
              try {
                await navigator.clipboard.writeText(url);
              } catch {}
            }
          }}
        >
          Compartir
        </button>
      </footer>
    </article>
  );
}
