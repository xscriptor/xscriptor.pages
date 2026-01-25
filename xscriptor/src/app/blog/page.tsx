"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BlogPage.module.css";

type Post = {
  slug: string;
  title: string;
  excerpt?: string | null;
  url: string;
  category?: string | null;
  tags?: string[];
  date?: string | null;
  cover?: string | null;
  filename?: string | null;
};

const API_URL =
  process.env.NEXT_PUBLIC_BLOG_API_URL ?? "/php/blog/list-posts.php";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const ac = new AbortController();
    fetch(API_URL, { cache: "no-store", signal: ac.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Post[]) => setPosts(data))
      .catch((e: any) => {
        if (e.name !== "AbortError") setErr(e.message || "Error de carga");
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <h2>Entradas:</h2>

      <div className="p-4">
        {loading && <p>Cargando…</p>}

        {err && (
          <p style={{ opacity: 0.8 }}>
            No se pudo cargar el listado ({err}). Revisa la ruta {API_URL}.
          </p>
        )}

        {!loading && !err && posts.length === 0 && <p>No hay entradas aún.</p>}

        {!loading && !err && (
          <div className={styles.list}>
            {posts.map((entry) => (
              <motion.div
                key={entry.slug}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={`/blog/post?slug=${encodeURIComponent(entry.slug)}`}
                  className={styles.card}
                >
                  <h3 className={styles.cardTitle}>{entry.title}</h3>
                  {entry.excerpt && (
                    <p className={styles.cardExcerpt}>{entry.excerpt}</p>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
