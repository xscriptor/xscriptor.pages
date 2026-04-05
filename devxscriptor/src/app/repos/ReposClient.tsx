'use client';

import { useEffect, useState } from 'react';
import Burbujas from '../components/bubbles';
import styles from './repos.module.css';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  default_branch: string;
  owner: {
    login: string;
  };
}

interface ReposClientProps {
  repos: GitHubRepo[];
  isStaticFallback: boolean;
}

const LANGUAGE_COLORS: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#239120',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#F18E33',
  HTML: '#e34c26',
  CSS: '#1572B6',
  Vue: '#4FC08D',
  React: '#61DAFB',
  C: '#555555',
  Dart: '#00B4AB',
  Shell: '#89e051',
  PowerShell: '#012456',
  Dockerfile: '#384d54',
  SCSS: '#c6538c',
  Less: '#1d365d',
  Sass: '#a53b70',
  Lua: '#000080',
  Perl: '#0298c3',
  R: '#198ce7',
  Scala: '#c22d40',
  Haskell: '#5e5086',
  Clojure: '#db5855',
  Elixir: '#6e4a7e',
  Erlang: '#B83998',
  'F#': '#b845fc',
  'Objective-C': '#438eff',
  Assembly: '#6E4C13',
  MATLAB: '#e16737',
  'Jupyter Notebook': '#DA5B0B',
  Makefile: '#427819',
  CMake: '#DA3434',
  'Vim script': '#199f4b',
  'Emacs Lisp': '#c065db',
  TeX: '#3D6117',
  Batchfile: '#C1F12E',
  JSON: '#292929',
  XML: '#0060ac',
  YAML: '#cb171e',
  TOML: '#9c4221',
  Markdown: '#083fa1',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getLanguageColor = (language: string | null) => {
  return LANGUAGE_COLORS[language || ''] || '#6c757d';
};

export default function ReposClient({ repos: initialRepos, isStaticFallback }: ReposClientProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos);
  const [loading, setLoading] = useState(isStaticFallback);

  useEffect(() => {
    if (!isStaticFallback) {
      return;
    }

    const fetchReposClient = async () => {
      try {
        const [xscriptorRes, xscriptordevRes] = await Promise.all([
          fetch('https://api.github.com/users/xscriptor/repos'),
          fetch('https://api.github.com/users/xscriptordev/repos'),
        ]);

        if (!xscriptorRes.ok || !xscriptordevRes.ok) {
          throw new Error('Error fetching repositories');
        }

        const [xscriptorData, xscriptordevData] = await Promise.all([
          xscriptorRes.json(),
          xscriptordevRes.json(),
        ]);

        const allRepos = [...xscriptorData, ...xscriptordevData];
        const sortedRepos = allRepos.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching repos on client:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReposClient();
  }, [isStaticFallback]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const sections = document.querySelectorAll(`.${styles.repoSection}`);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [repos]);

  return (
    <main className={styles.container}>
      <Burbujas />

      {loading ? (
        <div className={styles.loading}>
          <p>Loading repositories...</p>
        </div>
      ) : (
        <div className={styles.reposGrid}>
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              className={`${styles.repoSection} ${styles.repoCard}`}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${repo.name} on GitHub`}
              style={{ ['--index' as string]: index }}
            >
              <div className={styles.repoInfo}>
                <div className={styles.repoOwner}>@{repo.owner.login}</div>
                <h2 className={styles.repoTitle}>{repo.name}</h2>
                <p className={styles.repoDescription}>
                  {repo.description || 'No description available.'}
                </p>

                <div className={styles.repoMeta}>
                  <div className={styles.repoStats}>
                    <span className={styles.stat}>Stars: {repo.stargazers_count}</span>
                    <span className={styles.stat}>Forks: {repo.forks_count}</span>
                  </div>

                  {repo.language && (
                    <div className={styles.repoLanguage}>
                      <span
                        className={styles.languageDot}
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </div>
                  )}
                </div>

                <div className={styles.repoDates}>
                  <span className={styles.dateLabel}>Created:</span>
                  <span className={styles.dateValue}>{formatDate(repo.created_at)}</span>
                  <span className={styles.dateLabel}>Updated:</span>
                  <span className={styles.dateValue}>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
