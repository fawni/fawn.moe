import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import inline from "@playform/inline";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://fawn.moe",
  integrations: [mdx(), sitemap(), inline(), compress()],
});
