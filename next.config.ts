import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  // Remove basePath if you set up a custom domain in GitHub Pages settings
  basePath: "/ResumeWebsite",
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "cdn.pixabay.com" }],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;