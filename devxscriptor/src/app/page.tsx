'use client';
import DecryptedText from "./components/DecryptedText";
import SkillNetwork from "./components/SkillNetwork";
import TypeWriter from "./components/typewriter/typewrite";
import PreviewsHome from "./components/previewshome/PreviewsHome";
import HeroImageSlider from "./components/HeroImageSlider";

export default function Home() {
  const heroSliderImages = [
    { src: '/images/previews/preview0001.webp', alt: 'Vista previa de proyecto 1' },
    { src: '/images/previews/preview0003.webp', alt: 'Vista previa de proyecto 2' },
    { src: '/images/previews/preview0005.webp', alt: 'Vista previa de proyecto 3' },
    { src: '/images/previews/preview0007.webp', alt: 'Vista previa de proyecto 4' },
  ];

  return (
    <div className={`animate-fade-in-up min-h-screen flex flex-col items-center justify-center px-4`}>

      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Main Content Section - Side by Side */}
        <h1><span className="inline lg:block">Discover the <em>depth</em></span>
          <span className="inline lg:block">and <em>finesse</em></span>
          of our work</h1>
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-16 mb-16 pt-2 lg:pt-3">
          <div className="w-full flex-[1.1] lg:max-w-2xl">
            <HeroImageSlider images={heroSliderImages} />
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-50"></div>

          <div className="flex-1 text-right">
            <p className="description-container">
              <DecryptedText
                text="Developer and writer, currently exploring areas such as design, cryptography, and security within computing. The focus lies on clean architecture, UI/UX consistency, and interactive design."
                animateOn="view"
                sequential
                revealDirection="center"
                speed={1}
                maxIterations={10}
                encryptedClassName="encrypted-text"
                className="description-text"
                parentClassName="tracking-wide"
              />
            </p>
            <h2 className="font-bold leading-tight">
              <span className="inline-block text-3xl md:text-4xl lg:text-5xl align-middle">
               X <TypeWriter data={["scriptor", "Cypher", "Developer", "Designer"]} />
              </span>
            </h2>
            <p className="description-container">Responsive web applications are the main craft, with occasional collaborations on software development. Component-based architecture, performance, and scalable code across different languages are always prioritized, while adapting to the needs of each project. The previews below highlight work with TypeScript, JavaScript, CSS3, Tailwind, PHP, static exports, and hands-on API integration.</p>
          </div>
        </div>
        {/* Horizontal Separator */}
        <div className="w-full flex justify-center my-16">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
        </div>
        <div>
          <PreviewsHome />
        </div>
        
        {/* Horizontal Separator */}
        <div className="w-full flex justify-center my-16">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
        </div>
        
        {/* Skills Network Section */}
        <h2 className="text-3xl font-bold mb-8 text-right">Skills</h2>
        <div className="w-full flex justify-center">
          <SkillNetwork />
        </div>

        <div className="space-y-4">
          <em className="block">
            Building the web one pixel at a time, from anywhere.
          </em>
          <p>
            Pushing boundaries through design, code, and collaboration.
          </p>

          <button
            onClick={() => window.location.href = '/contact'}
            className="home-contact-button mt-6"
          >
            Let&rsquo;s talk
          </button>
        </div>
      </div>
    </div>

  );
}
