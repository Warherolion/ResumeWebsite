import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Only apply basePath on production (GitHub Pages). Remove if you add a custom domain.
  basePath: isProd ? "/ResumeWebsite" : "",
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "cdn.pixabay.com" }],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;