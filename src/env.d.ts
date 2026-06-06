// src/env.d.ts

/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface Window {
  showToast: (
    message: string,
    type?: "success" | "error" | "warning" | "info",
  ) => void;
}
