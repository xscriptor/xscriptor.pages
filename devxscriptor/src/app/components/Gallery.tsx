"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    // Root previews
    "/images/resources/preview.png",
    "/images/resources/preview2.png",
    "/images/resources/preview-obsidian-xscriptor-theme.png",
    "/images/resources/preview.jpg",

    // VSCode
    "/images/resources/vscode/vscode00.jpg",
    "/images/resources/vscode/vscode01.jpg",
    "/images/resources/vscode/vscode02.jpg",
    "/images/resources/vscode/vscode03.jpg",
    "/images/resources/vscode/vscode04.jpg",
    "/images/resources/vscode/vscode05.jpg",

    // Helix
    "/images/resources/helix/helix01.png",
    "/images/resources/helix/helix02.png",
    "/images/resources/helix/helix03.png",

    // JetBrains
    "/images/resources/jetbrains/preview0.png",
    "/images/resources/jetbrains/preview1.png",
    "/images/resources/jetbrains/preview2.png",

    // Obsidian
    "/images/resources/obsidian/preview01.jpg",
    "/images/resources/obsidian/preview02.jpg",
    "/images/resources/obsidian/preview03.jpg",
    "/images/resources/obsidian/preview04.jpg",

    // OXT
    "/images/resources/oxt/oxt01.jpg",
    "/images/resources/oxt/oxt02.jpg",
    "/images/resources/oxt/oxt03.jpg",

    // XGlass
    "/images/resources/xglass/xglass01.png",
    "/images/resources/xglass/xglass02.png",
    "/images/resources/xglass/xglass03.png",

    // Others
    "/images/resources/kitty/kitty.webp",
    "/images/resources/kitty/kitty1.png",
    "/images/resources/gnometerminalxtt/gnometerminalxtt.webp",
    "/images/resources/powershell/powershell.png",
];

export default function Gallery() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-['EB_Garamond'] text-right text-[var(--primary)] mb-12 opacity-80">
                Gallery
            </h2>

            <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="relative w-full overflow-hidden rounded-2xl">
                            <Image
                                src={src}
                                alt={`Resource preview ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                loading="lazy"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
