import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: "https://www.mostafa-hashemi.com",
  assets: true,
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
   
})


export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
