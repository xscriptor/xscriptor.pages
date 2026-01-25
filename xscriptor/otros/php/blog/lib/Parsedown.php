<?php
// Minimal Parsedown-compatible class (quick drop-in)
// Not the official library. Good enough for headings/links/lists/code/quotes.
// API: new Parsedown()->setBreaksEnabled(true|false)->text($markdown)

class Parsedown {
  protected bool $breaksEnabled = false;

  public function setBreaksEnabled($bool): self {
    $this->breaksEnabled = (bool)$bool;
    return $this;
  }

  public function text(string $t): string {
    // Normalize line endings
    $t = str_replace(["\r\n", "\r"], "\n", $t);

    // Fenced code blocks ```lang\ncode```
    $t = preg_replace_callback('/```([\w-]+)?\n([\s\S]*?)```/m', function($m) {
      $code = htmlspecialchars($m[2], ENT_NOQUOTES, 'UTF-8');
      $lang = isset($m[1]) && $m[1] ? ' class="language-'.htmlspecialchars($m[1]).'"' : '';
      return "<pre><code{$lang}>{$code}</code></pre>";
    }, $t);

    // Images ![alt](url)
    $t = preg_replace('/!\[([^\]]*)\]\(([^)]+)\)/', '<img src="$2" alt="$1" />', $t);

    // Links [text](url)
    $t = preg_replace('/\[(.*?)\]\(([^)]+)\)/', '<a href="$2">$1</a>', $t);

    // Headings ######
    for ($i = 6; $i >= 1; $i--) {
      $re = '/^'.str_repeat('#', $i).'\s+(.+)$/m';
      $t  = preg_replace($re, "<h{$i}>$1</h{$i}>", $t);
    }

    // Horizontal rules --- or ***
    $t = preg_replace('/^\s*(?:-{3,}|\*{3,})\s*$/m', '<hr />', $t);

    // Blockquotes > text
    $t = preg_replace_callback('/^(?:>\s?.+\n?)+/m', function($m){
      $block = preg_replace('/^>\s?/', '', trim($m[0]));
      $block = $this->paragraphize($block);
      return "<blockquote>{$block}</blockquote>";
    }, $t);

    // Ordered lists 1. item
    $t = preg_replace_callback('/(?:^|\n)(?:\d+\.\s.+\n?)+/m', function($m){
      $lis = '';
      foreach (preg_split('/\n/', trim($m[0])) as $ln) {
        if (preg_match('/^\d+\.\s+(.+)/', $ln, $mm)) $lis .= '<li>'.$mm[1].'</li>';
      }
      return "\n<ol>{$lis}</ol>\n";
    }, $t);

    // Unordered lists - item / * item
    $t = preg_replace_callback('/(?:^|\n)(?:[-*]\s.+\n?)+/m', function($m){
      $lis = '';
      foreach (preg_split('/\n/', trim($m[0])) as $ln) {
        if (preg_match('/^[-*]\s+(.+)/', $ln, $mm)) $lis .= '<li>'.$mm[1].'</li>';
      }
      return "\n<ul>{$lis}</ul>\n";
    }, $t);

    // Inline code `code`
    $t = preg_replace_callback('/`([^`]+)`/', function($m){
      return '<code>'.htmlspecialchars($m[1], ENT_NOQUOTES, 'UTF-8').'</code>';
    }, $t);

    // Bold **text**
    $t = preg_replace('/\*\*(.+?)\*\*/s', '<strong>$1</strong>', $t);

    // Italic *text*
    $t = preg_replace('/\*(.+?)\*/s', '<em>$1</em>', $t);

    // Paragraphs
    return $this->paragraphize($t);
  }

  protected function paragraphize(string $t): string {
    // Split by blank lines -> paragraphs, but keep block-level tags intact
    $blocks = preg_split("/\n{2,}/", trim($t));
    $out = [];
    foreach ($blocks as $b) {
      $b = trim($b);
      if ($b === '') continue;
      if (preg_match('/^<(h[1-6]|ul|ol|pre|blockquote|hr|img|table|code)/', $b)) {
        // Already a block element
        $out[] = $b;
      } else {
        // Handle single-line breaks
        if ($this->breaksEnabled) {
          $b = nl2br($b);
        } else {
          $b = preg_replace('/\n+/', ' ', $b);
        }
        $out[] = "<p>{$b}</p>";
      }
    }
    return implode("\n", $out);
  }
}
