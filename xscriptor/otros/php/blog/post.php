<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
ini_set('display_errors', 1); error_reporting(E_ALL);

function blog_send($code, $arr) {
  http_response_code($code);
  echo json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
  exit;
}

$baseDir   = __DIR__;                    // fuerza /php/blog
$postsDir  = $baseDir . '/posts';
$indexFile = $baseDir . '/post-index.json';
$libParsed = $baseDir . '/lib/Parsedown.php';

$slug = $_GET['slug'] ?? '';
if (!$slug || !preg_match('/^[A-Za-z0-9_-]+$/', $slug)) {
  blog_send(400, ['ok'=>false,'error'=>'slug inválido','slug'=>$slug,'debug'=>['__FILE__'=>__FILE__,'__DIR__'=>__DIR__,'baseDir'=>$baseDir,'indexFile'=>$indexFile]]);
}

if (!file_exists($indexFile)) {
  blog_send(500, ['ok'=>false,'error'=>'post-index.json no encontrado','path'=>$indexFile,'debug'=>['__FILE__'=>__FILE__,'__DIR__'=>__DIR__,'baseDir'=>$baseDir]]);
}

$rawIndex = file_get_contents($indexFile);
$index = json_decode($rawIndex, true);
if (!is_array($index)) {
  blog_send(500, ['ok'=>false,'error'=>'post-index.json corrupto','jsonError'=>json_last_error_msg()]);
}

$meta = null;
foreach ($index as $it) if (($it['slug'] ?? '') === $slug) { $meta = $it; break; }
if (!$meta) blog_send(404, ['ok'=>false,'error'=>'slug no está en el índice','slug'=>$slug]);

$candidates = [];
if (!empty($meta['filename'])) $candidates[] = $postsDir . '/' . $meta['filename'];
$candidates[] = $postsDir . '/' . $slug . '.md';
$candidates[] = $postsDir . '/' . $slug . '.html';
$candidates[] = $postsDir . '/' . $slug . '.mdx';

$path = null;
foreach ($candidates as $c) if (file_exists($c)) { $path = $c; break; }
if (!$path) blog_send(404, ['ok'=>false,'error'=>'archivo del post no encontrado','buscado'=>$candidates,'debug'=>['postsDir'=>$postsDir]]);

$ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
if ($ext === 'html') {
  $html = file_get_contents($path);
} else {
  $raw = file_get_contents($path);
  if (preg_match('/^---\R(.*?)\R---\R(.*)$/s', $raw, $m)) $raw = $m[2];
  if ($ext === 'mdx') {
    $raw = preg_replace('/^(?:import|export).*$\R?/m', '', $raw);
    $raw = preg_replace('/<[^>]+\/>\s*/', '', $raw);
    $raw = preg_replace('/<[^>]+>(.*?)<\/[^>]+>/s', '$1', $raw);
  }
  if (file_exists($libParsed)) require_once $libParsed;
  if (class_exists('Parsedown')) {
    $Parsedown = new Parsedown();
    $html = $Parsedown->text($raw);
  } else {
    $html = '<pre>'.htmlspecialchars($raw, ENT_NOQUOTES, 'UTF-8').'</pre>';
  }
}

blog_send(200, ['ok'=>true,'meta'=>$meta,'format'=>'html','content'=>$html,'debug'=>['__FILE__'=>__FILE__,'__DIR__'=>__DIR__,'baseDir'=>$baseDir,'indexFile'=>$indexFile,'used'=>$path]]);
