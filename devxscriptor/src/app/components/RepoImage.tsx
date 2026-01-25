"use client";

interface RepoImageProps {
  repoName: string;
  readmeImage?: string | null;
  owner?: string;
}

export default function RepoImage({ repoName, readmeImage, owner = "xscriptor" }: RepoImageProps) {
  const fallback = `https://opengraph.githubassets.com/1/${owner}/${repoName}`;
  const defaultPreview = `https://raw.githubusercontent.com/${owner}/${repoName}/main/screenshots/preview.png`;

  // Prioridad: 1. Imagen del README, 2. Preview por defecto, 3. Fallback de GitHub
  const primarySrc = readmeImage || defaultPreview;

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={primarySrc}
      alt={`Preview de ${repoName}`}
      className="w-full h-full object-cover"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src === primarySrc && readmeImage) {
          // Si falló la imagen del README, intentar con el preview por defecto
          target.src = defaultPreview;
        } else if (target.src === defaultPreview || target.src === primarySrc) {
          // Si falló el preview por defecto o la imagen del README, usar fallback
          target.src = fallback;
        }
      }}
    />
  );
}
