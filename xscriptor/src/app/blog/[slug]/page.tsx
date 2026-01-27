import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleData, getAllArticleSlugs } from '../../lib/articles';
import type { Metadata } from 'next';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

// Generar rutas estáticas para todos los artículos
export async function generateStaticParams() {
    return getAllArticleSlugs().map(({ params }) => params);
}

// Generar metadata dinámico
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleData(slug);

    if (!article) {
        return { title: 'Artículo no encontrado' };
    }

    return {
        title: article.title,
        description: article.description || article.excerpt,
        openGraph: {
            title: article.title,
            description: article.description || article.excerpt,
            type: 'article',
            publishedTime: article.date,
            authors: article.author ? [article.author] : undefined,
            images: article.image ? [article.image] : undefined,
        },
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleData(slug);

    if (!article) {
        notFound();
    }

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
        <div>
            <article className="max-w-3xl mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm">
                    <Link href="/blog" className="opacity-70 hover:opacity-100">
                        ← Volver al Blog
                    </Link>
                </nav>

                {/* Header del artículo */}
                <header className="mb-8">
                    {/* Categorías */}
                    {article.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {article.categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="text-xs px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-medium"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="mb-4">{article.title}</h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm opacity-70 mb-6">
                        {article.author && <span>Por {article.author}</span>}
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        <span>{article.readingTime} min de lectura</span>
                    </div>

                    {/* Imagen de portada */}
                    {article.image && (
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                {/* Contenido del artículo */}
                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
                />

                {/* Footer del artículo */}
                <footer className="mt-12 pt-8 border-t border-[var(--border)]">
                    <Link href="/blog" className="text-[var(--accent)] hover:opacity-80">
                        ← Volver al Blog
                    </Link>
                </footer>
            </article>
        </div>
    );
}
