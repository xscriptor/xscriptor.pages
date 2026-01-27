import { getSortedArticles } from '../lib/articles';
import ArticlesGrid from '../components/ArticlesGrid';

export const metadata = {
  title: "Blog — Xscriptor",
  description: "Artículos sobre literatura, poesía, arte y pensamiento creativo por Óscar Preciado",
};

export default function BlogPage() {
  const articles = getSortedArticles();

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1>Blog</h1>
          <p style={{ padding: '0 5vw', maxWidth: '800px', margin: '0 auto' }}>
            Reflexiones sobre literatura, poesía, arte y pensamiento creativo.
          </p>
        </header>

        {/* Grid de artículos */}
        <ArticlesGrid articles={articles} />
      </div>
    </div>
  );
}
