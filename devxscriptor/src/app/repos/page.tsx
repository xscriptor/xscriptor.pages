import ReposClient from "./ReposClient";
import { reposCache } from "./reposCache";

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
  readme_image?: string;
}

// Función para extraer la primera imagen del README
const extractImageFromReadme = (readmeContent: string): string | null => {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const match = readmeContent.match(imageRegex);
  return match ? match[2] : null;
};

// Función para resolver rutas relativas
const resolveImageUrl = (imageUrl: string, owner: string, repo: string, defaultBranch: string): string => {
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Si es una ruta relativa, construir la URL completa
  const cleanUrl = imageUrl.startsWith('./') ? imageUrl.slice(2) : imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
  return `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${cleanUrl}`;
};

// Función para obtener el README y extraer la imagen
const getReadmeImage = async (owner: string, repo: string, defaultBranch: string): Promise<string | null> => {
  try {
    const readmeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
    if (!readmeRes.ok) return null;
    
    const readmeData = await readmeRes.json();
    const readmeContent = atob(readmeData.content);
    
    const imageUrl = extractImageFromReadme(readmeContent);
    if (!imageUrl) return null;
    
    return resolveImageUrl(imageUrl, owner, repo, defaultBranch);
  } catch (error) {
    console.error(`Error fetching README for ${owner}/${repo}:`, error);
    return null;
  }
};

// Función para hacer fetch con reintentos y manejo de rate limit
const fetchWithRetry = async (url: string, options: RequestInit = {}, maxRetries = 3): Promise<Response> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 403 && response.statusText.includes('rate limit')) {
        const resetTime = response.headers.get('X-RateLimit-Reset');
        const waitTime = resetTime ? (parseInt(resetTime) * 1000 - Date.now()) : 60000; // Default 1 minute
        
        if (attempt < maxRetries && waitTime > 0 && waitTime < 300000) { // Max 5 minutes wait
          console.log(`Rate limit hit, waiting ${Math.ceil(waitTime / 1000)} seconds before retry ${attempt + 1}/${maxRetries}`);
          await new Promise(resolve => setTimeout(resolve, Math.min(waitTime, 60000))); // Max 1 minute wait per retry
          continue;
        }
      }
      
      return response;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`Fetch attempt ${attempt} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
    }
  }
  
  throw new Error('Max retries exceeded');
};

async function fetchRepos(): Promise<{ repos: GitHubRepo[], isStaticFallback: boolean }> {
  // Check cache first
  const cacheKey = 'github-repos';
  const cachedData = reposCache.get(cacheKey);
  
  if (cachedData) {
    console.log('Using cached repos data');
    return { repos: cachedData as GitHubRepo[], isStaticFallback: false };
  }

  try {
    // Fetch repos from both users with retry logic
    const [xscriptorRes, xscriptordevRes] = await Promise.all([
      fetchWithRetry("https://api.github.com/users/xscriptor/repos", { 
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'User-Agent': 'DevXscriptor-Portfolio',
          'Accept': 'application/vnd.github.v3+json'
        }
      }),
      fetchWithRetry("https://api.github.com/users/xscriptordev/repos", { 
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'User-Agent': 'DevXscriptor-Portfolio',
          'Accept': 'application/vnd.github.v3+json'
        }
      })
    ]);

    console.log('Response status:', {
      xscriptor: xscriptorRes.status,
      xscriptordev: xscriptordevRes.status
    });

    if (!xscriptorRes.ok || !xscriptordevRes.ok) {
      console.error('API Error details:', {
        xscriptor: { status: xscriptorRes.status, statusText: xscriptorRes.statusText },
        xscriptordev: { status: xscriptordevRes.status, statusText: xscriptordevRes.statusText }
      });
      
      // If it's a rate limit error, trigger client-side fallback
      if (xscriptorRes.status === 403 || xscriptordevRes.status === 403) {
        console.log('Rate limit detected, falling back to client-side fetch');
        return { repos: [], isStaticFallback: true };
      }
      
      throw new Error(`Error al obtener repos: ${xscriptorRes.status}/${xscriptordevRes.status}`);
    }

    const [xscriptorData, xscriptordevData] = await Promise.all([
      xscriptorRes.json(),
      xscriptordevRes.json()
    ]);

    console.log('Repos fetched:', {
      xscriptor: xscriptorData.length,
      xscriptordev: xscriptordevData.length
    });

    // Combine and sort repos by updated_at (most recent first)
    const allRepos = [...xscriptorData, ...xscriptordevData];
    const sortedRepos = allRepos.sort((a, b) => 
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    // Fetch README images for each repository (with timeout)
    const reposWithImages = await Promise.all(
      sortedRepos.map(async (repo) => {
        try {
          const readmeImage = await Promise.race([
            getReadmeImage(repo.owner.login, repo.name, repo.default_branch),
            new Promise<null>((_, reject) => 
              setTimeout(() => reject(new Error('Timeout')), 5000)
            )
          ]);
          return {
            ...repo,
            readme_image: readmeImage
          };
        } catch {
          return {
            ...repo,
            readme_image: null
          };
        }
      })
    );

    // Cache the successful result
    reposCache.set(cacheKey, reposWithImages, 1800000); // Cache for 30 minutes
    console.log('Repos cached successfully');

    return { repos: reposWithImages, isStaticFallback: false };
  } catch (error) {
    console.error('Error fetching repos:', error);
    // Return empty array for static export, client will handle the fetch
    return { repos: [], isStaticFallback: true };
  }
}

export default async function ReposPage() {
  const { repos, isStaticFallback } = await fetchRepos();

  return (
    <ReposClient repos={repos} isStaticFallback={isStaticFallback} />
  );
}
