import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import inline from "@playform/inline";
import compress from "astro-compress";
import robots from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://fawn.moe",
  integrations: [mdx(), sitemap(), robots(), inline(), compress()],
});
