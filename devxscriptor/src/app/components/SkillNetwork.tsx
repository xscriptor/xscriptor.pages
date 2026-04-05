"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  description: string;
  connections: number[]; // Indices of other connected skills
  category: "frontend" | "backend" | "tool" | "core";
}

const skillsData: Skill[] = [
  // Core (0–2)
  { name: "JavaScript", x: 50, y: 45, description: "The heart of modern web development", connections: [1, 3, 4, 9, 15, 34, 16], category: "core" },
  { name: "TypeScript", x: 62, y: 38, description: "JavaScript with syntax for types", connections: [0, 2, 3, 4, 5, 9, 20, 21, 34], category: "core" },
  { name: "Rust", x: 28, y: 45, description: "Systems programming for CLI tools & package managers", connections: [1, 13, 14, 19, 23, 24, 33, 34], category: "core" },

  // Frontend (3–8)
  { name: "React", x: 60, y: 25, description: "Library for web and native user interfaces", connections: [0, 1, 4, 5, 6, 9, 20, 28, 34], category: "frontend" },
  { name: "Tailwind", x: 48, y: 30, description: "Rapidly build modern websites", connections: [0, 1, 3, 7, 25, 28, 34], category: "frontend" },
  { name: "Next.js", x: 72, y: 20, description: "The React Framework for the Web", connections: [1, 3, 9, 15, 20, 34], category: "frontend" },
  { name: "React Native", x: 72, y: 10, description: "Create native apps for Android & iOS", connections: [1, 3, 29, 34], category: "frontend" },
  { name: "UI/UX", x: 38, y: 20, description: "Designing intuitive user experiences", connections: [4, 8, 25, 28, 34], category: "frontend" },
  { name: "Glassmorphism", x: 28, y: 22, description: "Frosted glass aesthetic principles", connections: [7, 25, 34], category: "frontend" },

  // Backend (9–12)
  { name: "Node.js", x: 55, y: 60, description: "JavaScript runtime built on Chrome's V8", connections: [0, 1, 5, 10, 11, 12, 15, 34], category: "backend" },
  { name: "PHP", x: 42, y: 65, description: "Server-side scripting language", connections: [0, 9, 12, 34], category: "backend" },
  { name: "NoSQL", x: 68, y: 70, description: "Flexible database schemas", connections: [0, 9, 34], category: "backend" },
  { name: "MySQL", x: 28, y: 62, description: "Relational open source database", connections: [9, 10, 22, 34], category: "backend" },

  // Systems / Tools (13–16)
  { name: "Linux", x: 18, y: 50, description: "Open source operating system & distro building", connections: [2, 14, 19, 22, 24, 26, 34], category: "tool" },
  { name: "Bash", x: 10, y: 42, description: "Shell command language & automation", connections: [2, 13, 19, 23, 26, 34], category: "tool" },
  { name: "Git", x: 50, y: 82, description: "Version control system", connections: [1, 5, 9, 21, 32, 34], category: "tool" },
  { name: "CyberSec", x: 10, y: 75, description: "Security principles & OSINT analysis", connections: [13, 14, 22, 27, 34], category: "tool" },

  // Soft / Other (17–18)
  { name: "Bilingual", x: 88, y: 55, description: "Fluent in English and Spanish", connections: [18, 34], category: "core" },
  { name: "Remote", x: 88, y: 75, description: "Effective distributed collaboration", connections: [17, 34], category: "core" },

  // Ecosystem skills (19–27)
  { name: "Arch/ISO", x: 10, y: 58, description: "Custom Arch Linux spin & mkarchiso builds", connections: [2, 13, 14, 26, 34], category: "tool" },
  { name: "Vite", x: 78, y: 32, description: "Fast frontend tooling for web apps", connections: [1, 3, 5, 34], category: "frontend" },
  { name: "CI/CD", x: 62, y: 88, description: "GitHub Actions, automated workflows", connections: [1, 15, 34], category: "tool" },
  { name: "Python", x: 35, y: 75, description: "Scripting, badge generation & automation", connections: [12, 13, 16, 27, 31, 34], category: "backend" },
  { name: "TUI/Ratatui", x: 18, y: 35, description: "Terminal UI frameworks for Rust CLI apps", connections: [2, 14, 24, 34], category: "tool" },
  { name: "Wayland", x: 10, y: 28, description: "Hyprland compositor & tiling window configs", connections: [13, 23, 33, 34], category: "tool" },
  { name: "CSS3", x: 40, y: 12, description: "Theme design for editors, terminals & web", connections: [4, 7, 8, 28, 31, 34], category: "frontend" },
  { name: "Zsh", x: 10, y: 65, description: "Advanced shell customization & plugins", connections: [13, 14, 19, 34], category: "tool" },
  { name: "OSINT", x: 22, y: 80, description: "Web analysis dashboards & security research", connections: [16, 22, 34], category: "tool" },

  // Additional skills (28–33)
  { name: "A11Y", x: 48, y: 15, description: "Accessibility & usability best practices", connections: [3, 4, 7, 25, 34], category: "frontend" },
  { name: "Dart/Flutter", x: 82, y: 42, description: "Cross-platform mobile apps & crypto libraries", connections: [1, 6, 30, 34], category: "core" },
  { name: "Kotlin", x: 78, y: 58, description: "JetBrains IDE plugin development", connections: [29, 34], category: "backend" },
  { name: "SVG", x: 30, y: 10, description: "Vector graphics for badges, icons & branding", connections: [22, 25, 34], category: "frontend" },
  { name: "Markdown", x: 40, y: 88, description: "Documentation across all projects", connections: [15, 34], category: "tool" },
  { name: "TOML/YAML", x: 22, y: 18, description: "Configuration formats for tools & compositors", connections: [2, 24, 34], category: "tool" },

  // Hub (34)
  { name: "X", x: 50, y: 50, description: "Development", connections: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33], category: "core" },
];

export default function SkillNetwork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'bg-blue-400';
      case 'backend': return 'bg-green-400';
      case 'tool': return 'bg-amber-400';
      case 'core': return 'bg-purple-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
      {/* Desktop / Large Screen View - Constellation Graph */}
      <div className="hidden lg:block relative w-full h-[600px] xl:h-[700px] bg-[var(--card-bg)]/50 backdrop-blur-2xl rounded-3xl border border-[var(--border)] overflow-hidden shadow-2xl transition-colors duration-500">

        {/* SVG Layer for Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {skillsData.map((skill, i) =>
            skill.connections.map(targetIndex => {
              if (targetIndex < i) return null; // Avoid double drawing
              const target = skillsData[targetIndex];
              const isConnected = hoveredIndex === i || hoveredIndex === targetIndex;
              const isDimmed = hoveredIndex !== null && !isConnected;

              return (
                <motion.line
                  key={`${i}-${targetIndex}`}
                  x1={`${skill.x}%`}
                  y1={`${skill.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="currentColor"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: isDimmed ? 0.05 : 0.2 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`
                    transition-all duration-300
                    ${isConnected ? 'stroke-[var(--primary)] opacity-80 stroke-2' : 'stroke-[var(--muted)] opacity-20 stroke-1'}
                  `}
                />
              );
            })
          )}
        </svg>

        {/* Nodes */}
        {skillsData.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          const isConnected = hoveredIndex !== null && skill.connections.includes(hoveredIndex);
          const isDimmed = hoveredIndex !== null && !isHovered && !isConnected;

          return (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10`}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative flex items-center justify-center 
                  w-4 h-4 rounded-full 
                  ${getCategoryColor(skill.category)} 
                  ${isHovered ? 'scale-150 shadow-[0_0_20px_rgba(var(--primary),0.6)]' : 'scale-100'}
                  ${isDimmed ? 'opacity-20 grayscale' : 'opacity-100'}
                  transition-all duration-300
                `}
              >
                {isHovered && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 p-3 bg-[var(--background)]/90 backdrop-blur-md rounded-xl border border-[var(--border)] text-center z-20 pointer-events-none shadow-xl">
                    <h3 className="text-[var(--primary)] font-bold text-sm mb-1">{skill.name}</h3>
                    <p className="text-[var(--text-muted)] text-xs leading-tight">{skill.description}</p>
                  </div>
                )}
              </div>
              {/* Permanent Label when not hovered */}
              <span className={`
                absolute top-5 left-1/2 -translate-x-1/2 
                text-xs font-medium tracking-wide whitespace-nowrap
                transition-all duration-300
                text-[var(--text-muted)]
                ${isHovered ? 'opacity-0' : 'opacity-70'}
                ${isDimmed ? 'opacity-10' : 'opacity-70'}
              `}>
                {skill.name}
              </span>
            </div>
          );
        })}

        <div className="absolute bottom-6 left-6 text-xs text-[var(--text-muted)] font-mono">
          X-constellation_view: interactive
        </div>
      </div>

      {/* Mobile / Tablet View - Organized Grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-4 p-4 bg-[var(--card-bg)]/80 backdrop-blur-lg border border-[var(--border)] rounded-xl hover:bg-[var(--card-bg)] transition-colors shadow-sm"
          >
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${getCategoryColor(skill.category)} shadow-lg`} />
            <div>
              <h3 className="text-[var(--foreground)] font-medium text-sm leading-none mb-1">{skill.name}</h3>
              <p className="text-[var(--text-muted)] text-xs leading-snug">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
