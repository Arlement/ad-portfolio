import type { NextConfig } from "next";

// GitHub Pages serves the site from a subpath matching the repo name.
// Only set the base path when building inside the Pages workflow.
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGithubPages && {
    basePath: "/alemdev",
    assetPrefix: "/alemdev/",
  }),
  // Static export can't run the Next.js image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
