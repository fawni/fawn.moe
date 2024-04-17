import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import playformCompress from "@playform/compress";

export default defineConfig({
  integrations: [mdx(), sitemap(), playformCompress()],
});
