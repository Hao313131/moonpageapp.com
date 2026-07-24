import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — there's an unrelated lockfile
  // higher up in ~/ that Next.js was otherwise guessing at.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
