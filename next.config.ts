import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (and any static host).
  output: "export",
  // Emit `/stories/index.html` so GitHub Pages can serve `/stories/` without
  // rewrite rules. Without this, Pages often 404s on clean URLs.
  trailingSlash: true,
  // next/image optimization needs a server; serve originals as-is.
  images: {
    unoptimized: true,
  },
  // Pin the workspace root to this project — there's an unrelated lockfile
  // higher up in ~/ that Next.js was otherwise guessing at.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
