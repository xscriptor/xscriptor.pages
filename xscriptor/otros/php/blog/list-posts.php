<?php
// blog/api/list-posts.php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
// Descomenta si necesitas CORS desde tu Next.js en otro dominio
// header('Access-Control-Allow-Origin: https://tudominio.com');
// header('Vary: Origin');

$baseDir   = realpath(__DIR__ );           // /public_html/blog
$postsDir  = $baseDir . '/posts';                 // /public_html/blog/posts
$indexJson = $baseDir . '/posts-index.json';      // /public_html/blog/posts-index.json

// --- Utilidades -----------------------------------------------

function readFrontMatter(string $content): array {
    $meta = [
        'title'   => null,
        'date'    => null,
        'tags'    => [],
        'excerpt' => null,
        'cover'   => null,
    ];
    if (preg_match('/^---\s*(.*?)\s*---/s', $content, $m)) {
        $yaml = $m[1];
        foreach (preg_split('/\R+/', $yaml) as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) continue;
            if (preg_match('/^([A-Za-z0-9_-]+):\s*(.*)$/', $line, $kv)) {
                $key = strtolower(trim($kv[1]));
                $val = trim($kv[2]);
                // arrays tipo [a, b, c]
                if (preg_match('/^\[(.*)\]$/', $val, $am)) {
                    $items = array_filter(array_map('trim', explode(',', $am[1])));
                    $val = array_map(function($x){
                        return trim($x, " '\"\t\n\r\0\x0B");
                    }, $items);
                } else {
                    $val = trim($val, " '\"\t\n\r\0\x0B");
                }
                $meta[$key] = $val;
            }
        }
    }
    return $meta;
}

function normalizePost(array $p): array {
    // Asegura claves y tipos del esquema final
    return [
        'slug'     => (string)($p['slug']     ?? ''),
        'title'    => (string)($p['title']    ?? ($p['slug'] ?? '')),
        'excerpt'  => $p['excerpt']  ?? null,
        'url'      => (string)($p['url']      ?? ''),
        'category' => $p['category'] ?? null,
        'tags'     => is_array($p['tags'] ?? null) ? array_values($p['tags']) : [],
        'date'     => $p['date']     ?? null,
        'cover'    => $p['cover']    ?? null,
        'filename' => $p['filename'] ?? null,
    ];
}

function deriveCategoryFromUrl(string $url): ?string {
    // Ej: /blog/entradas/literatura/mi-slug -> literatura
    $parts = array_values(array_filter(explode('/', $url)));
    // busca "entradas/{cat}/..."
    $i = array_search('entradas', $parts, true);
    if ($i !== false && isset($parts[$i+1])) return $parts[$i+1];
    return null;
}

function scanPosts(string $postsDir): array {
    $files = glob($postsDir . '/*.{mdx,md}', GLOB_BRACE) ?: [];
    $out = [];
    foreach ($files as $filePath) {
        $filename = basename($filePath);
        $slug = preg_replace('/\.(mdx|md)$/i', '', $filename);
        // Intentamos deducir url/categoría según tu patrón actual
        // Si no hay front matter con url, usa /blog/{slug}
        $content = @file_get_contents($filePath) ?: '';
        $meta = readFrontMatter($content);

        // URL: prioridad a front matter `url`, si no, a partir de categoría
        $category = $meta['category'] ?? null;
        $url = $meta['url'] ?? null;
        if (!$url) {
            if ($category) {
                $url = "/blog/entradas/{$category}/{$slug}";
            } else {
                $url = "/blog/{$slug}";
            }
        }
        // Si no viene categoría, la inferimos del url
        if (!$category) $category = deriveCategoryFromUrl($url);

        $out[] = normalizePost([
            'slug'     => $slug,
            'title'    => $meta['title'] ?: $slug,
            'excerpt'  => $meta['excerpt'] ?? null,
            'url'      => $url,
            'category' => $category,
            'tags'     => $meta['tags'] ?? [],
            'date'     => $meta['date'] ?? null,
            'cover'    => $meta['cover'] ?? null,
            'filename' => $filename,
        ]);
    }
    return $out;
}

function loadIndexJson(string $indexJsonPath): ?array {
    if (!is_file($indexJsonPath)) return null;
    $raw = @file_get_contents($indexJsonPath);
    if ($raw === false) return null;
    $data = json_decode($raw, true);
    if (!is_array($data)) return null;
    // Normalizamos estructura por si vienen claves omitidas
    return array_map('normalizePost', $data);
}

function sortPosts(array &$items): void {
    usort($items, function($a, $b) {
        $da = $a['date'] ?? '';
        $db = $b['date'] ?? '';
        if ($da && $db) {
            // Descendente por fecha
            return strcmp($db, $da);
        }
        // Si no hay fechas, por slug desc para estabilidad
        return strcmp($b['slug'], $a['slug']);
    });
}

function filterPosts(array $items): array {
    $q        = isset($_GET['q']) ? trim((string)$_GET['q']) : '';
    $category = isset($_GET['category']) ? trim((string)$_GET['category']) : '';
    $tag      = isset($_GET['tag']) ? trim((string)$_GET['tag']) : '';
    $limit    = isset($_GET['limit']) ? max(0, (int)$_GET['limit']) : 0;

    $filtered = array_values(array_filter($items, function($p) use ($q, $category, $tag) {
        if ($category !== '' && strcasecmp((string)($p['category'] ?? ''), $category) !== 0) return false;
        if ($tag !== '') {
            $tags = array_map('strtolower', $p['tags'] ?? []);
            if (!in_array(strtolower($tag), $tags, true)) return false;
        }
        if ($q !== '') {
            $hay = strtolower(
                ($p['title'] ?? '') . ' ' .
                ($p['excerpt'] ?? '') . ' ' .
                ($p['slug'] ?? '') . ' ' .
                implode(' ', $p['tags'] ?? [])
            );
            if (!str_contains($hay, strtolower($q))) return false;
        }
        return true;
    }));

    if ($limit > 0) {
        $filtered = array_slice($filtered, 0, $limit);
    }
    return $filtered;
}

// --- Carga de datos --------------------------------------------

$items = loadIndexJson($indexJson);
if ($items === null) {
    // Fallback: escanear carpeta de posts
    if (!is_dir($postsDir)) {
        http_response_code(500);
        echo json_encode(['error' => 'Carpeta de posts no encontrada', 'path' => $postsDir], JSON_UNESCAPED_UNICODE);
        exit;
    }
    $items = scanPosts($postsDir);
}

sortPosts($items);
$items = filterPosts($items);

// Cache control sencillo (ajusta a tu gusto)
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

echo json_encode($items, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
