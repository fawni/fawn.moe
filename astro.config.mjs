import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    (await import("@playform/compress")).default(),
  ],
});
