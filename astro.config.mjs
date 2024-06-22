import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import playformCompress from "@playform/compress";
import inline from "@playform/inline";
import robots from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://fawn.moe",
  integrations: [svelte(), mdx(), sitemap(), robots(), inline(), playformCompress()],
});

