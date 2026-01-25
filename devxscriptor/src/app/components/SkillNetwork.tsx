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
  // Core
  { name: "JavaScript", x: 50, y: 50, description: "The heart of modern web development", connections: [1, 2, 4, 8, 14], category: "core" },
  { name: "TypeScript", x: 65, y: 45, description: "JavaScript with syntax for types", connections: [0, 2, 4, 11, 14], category: "core" },

  // Frontend Main
  { name: "React", x: 60, y: 30, description: "Library for web and native user interfaces", connections: [0, 1, 3, 4, 11, 15], category: "frontend" },
  { name: "Next.js", x: 75, y: 25, description: "The React Framework for the Web", connections: [2, 1, 11], category: "frontend" },
  { name: "Tailwind", x: 45, y: 35, description: "Rapidly build modern websites", connections: [2, 11], category: "frontend" },

  // Frontend Specialized
  { name: "React Native", x: 70, y: 15, description: "Create native apps for Android & iOS", connections: [2, 1], category: "frontend" },
  { name: "UI/UX", x: 35, y: 25, description: "Designing intuitive user experiences", connections: [4, 7], category: "frontend" },
  { name: "Glassmorphism", x: 25, y: 30, description: "Frosted glass aesthetic principles", connections: [6, 4], category: "frontend" },
  { name: "Accessibility", x: 40, y: 15, description: "Inclusive design for all users", connections: [6, 2], category: "frontend" },

  // Backend
  { name: "Node.js", x: 55, y: 65, description: "JavaScript runtime built on Chrome's V8", connections: [0, 1, 9, 10, 12], category: "backend" },
  { name: "PHP", x: 40, y: 70, description: "Server-side scripting language", connections: [0, 12], category: "backend" },
  { name: "NoSQL", x: 70, y: 75, description: "Flexible database schemas", connections: [8, 0], category: "backend" },
  { name: "MySQL", x: 25, y: 65, description: "Relational open source database", connections: [8, 9], category: "backend" },

  // Systems / Tools
  { name: "Linux", x: 30, y: 55, description: "Open source operating system", connections: [8, 9, 14], category: "tool" },
  { name: "Bash", x: 20, y: 50, description: "Shell command language", connections: [12], category: "tool" },
  { name: "Git", x: 50, y: 85, description: "Version control system", connections: [1, 8, 3], category: "tool" },

  // Soft / Other
  { name: "CyberSec", x: 15, y: 80, description: "Security principles and practices", connections: [12, 13], category: "tool" },
  { name: "Bilingual", x: 85, y: 60, description: "Fluent in English and Spanish", connections: [], category: "core" },
  { name: "Remote", x: 85, y: 80, description: "Effective distributed collaboration", connections: [16, 17], category: "core" },
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
          constellation_view: interactive
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
