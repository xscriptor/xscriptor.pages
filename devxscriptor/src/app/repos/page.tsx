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
}
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
  const cacheKey = 'github-repos';
  const cachedData = reposCache.get(cacheKey);
  
  if (cachedData) {
    console.log('Using cached repos data');
    return { repos: cachedData as GitHubRepo[], isStaticFallback: false };
  }

  try {
    const [xscriptorRes, xscriptordevRes] = await Promise.all([
      fetchWithRetry("https://api.github.com/users/xscriptor/repos", { 
        next: { revalidate: 3600 },
        headers: {
          'User-Agent': 'DevXscriptor-Portfolio',
          'Accept': 'application/vnd.github.v3+json'
        }
      }),
      fetchWithRetry("https://api.github.com/users/xscriptordev/repos", { 
        next: { revalidate: 3600 },
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
      
      if (xscriptorRes.status === 403 || xscriptordevRes.status === 403) {
        console.log('Rate limit detected, falling back to client-side fetch');
        return { repos: [], isStaticFallback: true };
      }
      
      throw new Error(`Error fetching repos: ${xscriptorRes.status}/${xscriptordevRes.status}`);
    }

    const [xscriptorData, xscriptordevData] = await Promise.all([
      xscriptorRes.json(),
      xscriptordevRes.json()
    ]);

    console.log('Repos fetched:', {
      xscriptor: xscriptorData.length,
      xscriptordev: xscriptordevData.length
    });

    const allRepos = [...xscriptorData, ...xscriptordevData];
    const sortedRepos = allRepos.sort((a, b) => 
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    reposCache.set(cacheKey, sortedRepos, 1800000);
    console.log('Repos cached successfully');

    return { repos: sortedRepos, isStaticFallback: false };
  } catch (error) {
    console.error('Error fetching repos:', error);
    return { repos: [], isStaticFallback: true };
  }
}

export default async function ReposPage() {
  const { repos, isStaticFallback } = await fetchRepos();

  return (
    <div>

      <h1>
        <span className="inline lg:block">Resource <em>vault</em></span>
      </h1>
          <p className='pb-10'><span className="inline lg:block text-xl text-right">Compendium of <em>technical artifacts </em></span>
           <span className="inline lg:block text-xl text-right"> & <em>engineering essentials</em></span>
          </p>

    <ReposClient repos={repos} isStaticFallback={isStaticFallback} />
    </div>
  );
}
