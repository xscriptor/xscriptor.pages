*Estructura básica:*
```shell
root
├─ app
│  ├─ (site)                         # Grupo de rutas principal
│  │  ├─ layout.tsx                  # Layout raíz (header+footer)
│  │  ├─ page.tsx                    # Inicio
│  │  ├─ libros
│  │  │  ├─ page.tsx                 # Listado de libros
│  │  │  └─ [slug]
│  │  │     └─ page.tsx              # Ficha de libro
│  │  ├─ proyectos
│  │  │  ├─ page.tsx                 # Listado de proyectos
│  │  │  └─ [slug]
│  │  │     └─ page.tsx              # Ficha de proyecto
│  │  └─ blog
│  │     ├─ page.tsx                 # Listado de posts
│  │     └─ [slug]
│  │        └─ page.tsx              # Post individual
│  ├─ (system)
│  │  ├─ 404/page.tsx                # Página 404
│  │  └─ sitemap.xml/route.ts        # Sitemap estático
│  └─ api                            # (opcional) solo si necesitas algo totalmente estático
│
├─ components
│  ├─ layout
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  └─ Container.tsx
│  ├─ ui                             # Componentes atómicos reutilizables
│  │  ├─ Button.tsx
│  │  ├─ Badge.tsx
│  │  ├─ Card.tsx
│  │  └─ Prose.tsx                   # estilos para contenido (MD/MDX)
│  ├─ cards
│  │  ├─ BookCard.tsx
│  │  ├─ ProjectCard.tsx
│  │  └─ PostCard.tsx
│  └─ lists
│     ├─ BooksGrid.tsx
│     ├─ ProjectsGrid.tsx
│     └─ PostsList.tsx
│
├─ content                           # Solo archivos de contenido (markdown/mdx + imágenes)
│  ├─ books
│  │  ├─ mi-primer-libro.mdx
│  │  └─ ... (uno por libro)
│  ├─ projects
│  │  ├─ proyecto-x.mdx
│  │  └─ ...
│  └─ blog
│     ├─ 2025-08-01-mi-post.mdx
│     └─ ...
│
├─ public                            # Assets públicos (favicons, imágenes globales)
│  ├─ images
│  │  ├─ books
│  │  ├─ projects
│  │  └─ blog
│  └─ og
│     ├─ default-og.png
│     └─ ...
│
├─ lib
│  ├─ content.ts                     # Lectura de MDX/MD, frontmatter, utilidades
│  ├─ mdx.ts                         # MDX options (rehype/remark), si usas MDX
│  ├─ seo.ts                         # helpers para metadata/OG
│  └─ utils.ts
│
├─ types
│  ├─ content.ts                     # Tipos para Book, Project, Post
│  └─ index.ts
│
├─ styles
│  ├─ globals.css
│  └─ prose.css                      # estilos para contenido
│
├─ config
│  └─ site.ts                        # Datos del sitio, redes, autor, etc.
│
├─ next.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json

```