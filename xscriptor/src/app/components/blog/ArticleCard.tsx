'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ArticleMetadata } from '../../lib/articles';

interface ArticleCardProps {
    article: ArticleMetadata;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    // Formatear fecha
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group"
        >
            <Link
                href={`/blog/${article.slug}`}
                className="block h-full rounded-lg border border-[var(--border)] bg-[var(--bg)] overflow-hidden transition-shadow hover:shadow-lg"
            >
                {/* Imagen de portada */}
                {article.image && (
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}

                {/* Contenido */}
                <div className="p-5">
                    {/* Categorías */}
                    {article.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {article.categories.slice(0, 2).map((cat) => (
                                <span
                                    key={cat}
                                    className="text-xs px-2 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-medium"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Título */}
                    <h3 className="text-xl font-semibold mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    {article.excerpt && (
                        <p className="text-sm text-[var(--text)] opacity-70 mb-4 line-clamp-3" style={{ padding: 0, textAlign: 'left' }}>
                            {article.excerpt}
                        </p>
                    )}

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-[var(--text)] opacity-50">
                        <time dateTime={article.date}>
                            {formatDate(article.date)}
                        </time>
                        <span>{article.readingTime} min lectura</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
