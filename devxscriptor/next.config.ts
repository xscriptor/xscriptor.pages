import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // fuerza exportación estática
  trailingSlash: true,         // garantiza URLs con slash final
  images: {
    unoptimized: true          // evita procesado dinámico de imágenes
  }
};

export default nextConfig;
