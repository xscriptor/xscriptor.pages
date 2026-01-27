import type { ArticleMetadata } from '../lib/articles';
import ArticleCard from './blog/ArticleCard';

interface ArticlesGridProps {
    articles: ArticleMetadata[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
    if (articles.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg opacity-70" style={{ padding: 0 }}>
                    No hay artículos publicados aún.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
    );
}
