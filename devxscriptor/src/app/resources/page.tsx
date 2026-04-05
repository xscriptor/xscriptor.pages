"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const repos = [
  {
    name: "jetbrains",
    description: "Essential settings and customizations to improve accessibility and personalization of JetBrains IDEs using the Xscriptor ecosystem (themes, snippets...)"
  },
  {
    name: "fresh",
    description: "A collection of custom color themes for Fresh, the terminal text editor"
  },
  {
    name: "helix",
    description: "Xscriptor Themes for helix"
  },
  {
    name: "hyprland",
    description: "A clean, performance-oriented Hyprland configuration featuring a [X] aesthetic, optimized for productivity and seamless workflow on X and Arch Linux"
  },
  {
    name: "badges",
    description: "Badges Collection for documentation"
  },
  {
    name: "xclock",
    description: "A terminal-based clock application written in Rust, inspired by ttyclock. It features a digital clock with ASCII art, countdown timers, and various customi..."
  },
  {
    name: "xtop",
    description: "Xtop, a modern, cross-platform TUI (Text User Interface) system monitor written in Rust. Inspired by btop, it leverages ratatui and sysinfo to provide real-ti..."
  },
  {
    name: "vscode",
    description: "A complete collection of Xscriptor customizations for VSCode & Forks, including themes, code snippets, and UI mods."
  },
  {
    name: "xfetch",
    description: "A fast, lightweight, and highly customizable system information fetcher for the terminal, built in Rust. Display your system info with style and flexibility a..."
  },
  {
    name: "terminal",
    description: "Official Xscriptor Terminal themes"
  },
  {
    name: "x",
    description: "Scripts for x, including the main x.sh entrypoint and modular add-ons. The base script installs the x wrapper, applies required system configuration afte..."
  },
  {
    name: "obsidian",
    description: "An elegant Obsidian theme for coders and writers with beautiful EB Garamond typography and flexible customization."
  }
];

export default function ResourcesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="">

        <h1><span className="inline lg:block">Development <em>lab</em></span>
        </h1>
          <p className='pb-10'><span className="inline lg:block text-xl text-right">Engineering <em>Innovative Solutions </em></span>
           <span className="inline lg:block text-xl text-right"> & <em>Open Source Architectures</em></span>
          </p>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <Link
            href={`https://github.com/xscriptor/${repo.name}`}
            key={repo.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative h-48 rounded-2xl bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border)] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-[var(--primary)] transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background - Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--background)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                {/* Title */}
                <h2 className="text-2xl font-bold tracking-wide text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                  {repo.name}
                </h2>

                {/* Description (Revealed on Hover) */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center p-6 
                    bg-[var(--background)]/95 backdrop-blur-xl
                    transition-all duration-300 ease-in-out
                    ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}
                >
                  <p className="text-sm md:text-base text-[var(--foreground)] leading-relaxed font-medium">
                    {repo.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Icon (Optional) */}
              <div className="absolute top-4 right-4 text-[var(--text-muted)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--primary)] transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>

            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-[var(--text-muted)] text-sm">
          More resources for developers and writers available at <a href="https://github.com/xscriptor" className="text-[var(--primary)] hover:underline">github.com/xscriptor</a>
        </p>
      </motion.div>
    </div>
  );
}
