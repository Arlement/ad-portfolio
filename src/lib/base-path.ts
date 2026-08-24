/**
 * Base path for GitHub Pages deployments.
 *
 * Must match the `basePath` in `next.config.ts`. Empty outside the Pages
 * build (local dev), `/alemdev` when built for GitHub Pages.
 */
export const basePath =
  process.env.GITHUB_ACTIONS === "true" ? "/alemdev" : "";
