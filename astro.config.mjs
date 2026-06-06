// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import compress from "@playform/compress";

// Conditionally load Sanity integration
const sanityProjectId = process.env.PUBLIC_SANITY_PROJECT_ID || "";

const sanityIntegration = sanityProjectId
  ? (await import("@sanity/astro")).default({
      projectId: sanityProjectId,
      dataset: process.env.PUBLIC_SANITY_DATASET || "production",
      useCdn: true,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    })
  : null;

// https://astro.build/config
export default defineConfig({
  site: "https://shalevdan.com",

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    ...(sanityIntegration ? [sanityIntegration] : []),
    react(),
    expressiveCode({
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ["material-theme-darker", "material-theme-lighter"],
    }),
    mdx(),
    icon(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      JSON: true,
      SVG: true,
    }),
  ],

  env: {
    schema: {
      UMAMI_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      UMAMI_WEBSITE_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      PUBLIC_SANITY_PROJECT_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      PUBLIC_SANITY_DATASET: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-display",
    },
  ],
});
