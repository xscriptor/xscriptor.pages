import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// Directorio de artículos - aquí irán los archivos .md
const articlesDirectory = path.join(process.cwd(), 'src/app/content/articulos');

export interface ArticleMetadata {
    slug: string;
    title: string;
    description?: string;
    date: string;
    categories: string[];
    tags?: string[];
    keywords?: string[];
    excerpt?: string;
    readingTime: number;
    image?: string;
    author?: string;
    contentHtml?: string;
}

function toStringArray(value: unknown): string[] {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(v => String(v).trim()).filter(Boolean);
    if (typeof value === 'string') return [value.trim()].filter(Boolean);
    return [];
}

function stripDuplicateLeadMeta(content: string, title?: string): string {
    const lines = content.split(/\r?\n/);
    let start = 0;

    while (start < lines.length && !lines[start].trim()) start++;

    if (title && start < lines.length) {
        const m = lines[start].match(/^#\s+(.+)$/);
        if (m && m[1].trim().toLowerCase() === title.trim().toLowerCase()) {
            lines.splice(start, 1);
            while (start < lines.length && !lines[start].trim()) lines.splice(start, 1);
        }
    }

    start = 0;
    while (start < lines.length && !lines[start].trim()) start++;
    if (start < lines.length && /^\*\*Publicado por\b/i.test(lines[start].trim())) {
        lines.splice(start, 1);
        while (start < lines.length && lines[start].trim()) lines.splice(start, 1);
        while (start < lines.length && !lines[start].trim()) lines.splice(start, 1);
    }

    return lines.join('\n').trim();
}

/**
 * Obtiene todos los artículos ordenados por fecha (más recientes primero)
 */
export function getSortedArticles(): ArticleMetadata[] {
    // Verificar si el directorio existe
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory).filter(f => f.endsWith('.md'));

    const allArticles: ArticleMetadata[] = fileNames.map(fileName => {
        // Quitar ".md" del nombre para obtener el slug
        const slug = fileName.replace(/\.md$/, '');

        // Leer archivo markdown
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parsear frontmatter con gray-matter
        const matterResult = matter(fileContents);

        // Estimar tiempo de lectura (aprox 200 palabras por minuto)
        const wordCount = matterResult.content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        // Extraer excerpt del contenido si no está en frontmatter
        let excerpt = matterResult.data.excerpt || matterResult.data.description;
        if (!excerpt) {
            // Tomar las primeras 150 caracteres del contenido
            excerpt = matterResult.content
                .replace(/^#.*$/gm, '') // Quitar títulos
                .replace(/\n/g, ' ')
                .trim()
                .slice(0, 150) + '...';
        }

        // Normalizar arrays
        const categories = toStringArray(matterResult.data.categories);
        const tags = toStringArray(matterResult.data.tags);
        const keywords = toStringArray(matterResult.data.keywords);

        return {
            slug,
            title: matterResult.data.title || slug,
            description: matterResult.data.description,
            date: matterResult.data.date || new Date().toISOString().split('T')[0],
            categories,
            tags,
            keywords,
            excerpt,
            readingTime,
            image: matterResult.data.image,
            author: matterResult.data.author,
        };
    });

    // Ordenar por fecha (más recientes primero)
    return allArticles.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    });
}

/**
 * Obtiene todos los slugs para generar rutas estáticas
 */
export function getAllArticleSlugs(): { params: { slug: string } }[] {
    const articles = getSortedArticles();
    return articles.map(article => ({
        params: { slug: article.slug },
    }));
}

/**
 * Obtiene un artículo completo con su contenido HTML
 */
export async function getArticleData(slug: string): Promise<ArticleMetadata | null> {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const cleanMarkdown = stripDuplicateLeadMeta(
        matterResult.content,
        matterResult.data.title
    );

    // Convertir markdown a HTML con soporte para fórmulas matemáticas (KaTeX)
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(cleanMarkdown);
    const contentHtml = processedContent.toString();

    const wordCount = cleanMarkdown.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const categories = toStringArray(matterResult.data.categories);
    const tags = toStringArray(matterResult.data.tags);
    const keywords = toStringArray(matterResult.data.keywords);

    return {
        slug,
        title: matterResult.data.title || slug,
        description: matterResult.data.description,
        date: matterResult.data.date || new Date().toISOString().split('T')[0],
        categories,
        tags,
        keywords,
        excerpt: matterResult.data.excerpt || matterResult.data.description,
        readingTime,
        image: matterResult.data.image,
        author: matterResult.data.author,
        contentHtml,
    };
}

/**
 * Obtiene artículos filtrados por categoría
 */
export function getArticlesByCategory(category: string): ArticleMetadata[] {
    const allArticles = getSortedArticles();
    return allArticles.filter(article =>
        article.categories.some(cat =>
            cat.toLowerCase() === category.toLowerCase()
        )
    );
}
