# Art.Xscriptor.com

## 📋 Descripción

Sitio web artístico personal que presenta una colección de obras digitales organizadas por temporadas. El proyecto utiliza Next.js con TypeScript y está optimizado para exportación estática.

## 🚀 Tecnologías

- **Framework**: Next.js 15.5.0
- **Lenguaje**: TypeScript 5
- **UI**: React 19.1.0
- **Estilos**: CSS Modules + Tailwind CSS 4
- **Animaciones**: Motion (Framer Motion) 12.23.12
- **Linting**: ESLint 9

## 📁 Estructura del Proyecto

```
art-xscriptor/
├── public/
│   ├── arte/
│   │   ├── digitalpaint/     # 23 obras digitales (JPG/WebP)
│   │   ├── primavera/        # 19 obras de primavera
│   │   ├── otonio/           # 7 obras de otoño
│   │   └── verano/           # 8 obras de verano
│   ├── fonts/
│   │   ├── EBGaramond-Italic.ttf
│   │   └── EBGaramond-Regular.ttf
│   └── video/
│       └── video01.mp4       # Video principal
├── src/
│   └── app/
│       ├── components/
│       │   ├── blur-fade/    # Componente de animación de entrada
│       │   ├── decrypttext/  # Efecto de texto encriptado
│       │   ├── footer/       # Pie de página
│       │   ├── navbar/       # Barra de navegación
│       │   └── icons/        # Iconos personalizados
│       ├── galeria/          # Página de galería de arte
│       ├── contacto/         # Página de contacto
│       ├── globals.css       # Estilos globales
│       ├── layout.tsx        # Layout principal
│       ├── page.tsx          # Página de inicio
│       └── page.module.css   # Estilos de la página principal
├── next.config.ts            # Configuración de Next.js
├── package.json              # Dependencias y scripts
└── tsconfig.json             # Configuración de TypeScript
```

## 🎨 Características Principales

### Componentes Personalizados

1. **DecryptedText**: Efecto de texto que simula desencriptación con animaciones personalizables
   - Velocidad ajustable
   - Dirección de revelado (inicio, fin, centro)
   - Caracteres personalizables
   - Activación por hover o vista

2. **BlurFade**: Componente de animación de entrada con efecto blur

3. **Navbar**: Navegación responsive

4. **Footer**: Pie de página con información de contacto

### Páginas

- **Inicio** (`/`): Presentación artística con video y texto animado
- **Galería** (`/galeria`): Colección de obras organizadas por temporadas
- **Contacto** (`/contacto`): Información de contacto

## 🖼️ Colección de Arte

### Inventario de Obras

- **Arte Digital**: 23 obras (formato JPG/WebP)
- **Colección Primavera**: 19 obras
- **Colección Otoño**: 7 obras
- **Colección Verano**: 8 obras
- **Total**: 57 obras de arte

### Formatos Soportados
- JPG (alta calidad)
- WebP (optimizado para web)

## ⚙️ Configuración

### Next.js Config
```typescript
{
  output: 'export',           // Exportación estática
  trailingSlash: true,        // URLs con slash final
  images: {
    unoptimized: true         // Imágenes sin optimización
  }
}
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Inicio en producción
npm run start

# Vista previa del sitio exportado
npm run preview

# Linting
npm run lint
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd art-xscriptor
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

5. **Vista previa del sitio estático**
```bash
npm run preview
```

## 🎯 Características Técnicas

### Responsive Design
- Diseño adaptativo para móviles, tablets y desktop
- Breakpoints optimizados: 480px, 768px, 1024px
- Layout flexible con CSS Grid y Flexbox

### Optimizaciones
- Exportación estática para mejor rendimiento
- Imágenes optimizadas en múltiples formatos
- Lazy loading de componentes
- CSS Modules para estilos encapsulados

### Animaciones
- Efectos de entrada suaves con Motion
- Texto con efecto de desencriptación
- Transiciones fluidas entre páginas
- Hover effects interactivos

## 🌐 Despliegue

El proyecto está configurado para exportación estática (`output: 'export'`), lo que permite desplegarlo en:

- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor de archivos estáticos

## 📝 Metadatos

- **Título**: Art - Xscriptor
- **Descripción**: Descubre las colecciones artísticas de X
- **Idioma**: Español (es)
- **Versión**: 0.1.0

## 🔧 Desarrollo

### Estructura de Componentes
- Componentes reutilizables en `/components`
- CSS Modules para estilos específicos
- TypeScript para type safety
- Props interfaces bien definidas

### Convenciones de Código
- ESLint para calidad de código
- Nombres de archivos en kebab-case
- Componentes en PascalCase
- CSS classes en camelCase

---
