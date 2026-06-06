import { createClient } from "@sanity/client";

function getConfig() {
  // Try import.meta.env first (astro.config), then process.env (build time)
  const projectId =
    (import.meta as any).env?.PUBLIC_SANITY_PROJECT_ID ||
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    "";
  const dataset =
    (import.meta as any).env?.PUBLIC_SANITY_DATASET ||
    process.env.PUBLIC_SANITY_DATASET ||
    "production";

  return { projectId, dataset };
}

const { projectId, dataset } = getConfig();

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: "2025-01-28",
    })
  : null;

export const isConfigured = Boolean(projectId);
