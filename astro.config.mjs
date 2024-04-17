import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    playformInline(),
    playformCompress({ images: false }),
  ],
});
