import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"


// https://astro.build/config
export default defineConfig({
  site: "https://seyed-mostafa-portoflio-git-main-seyedmhs-projects.vercel.app",
  assets: true,
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
    output: 'static',
    vite: {
      build: {
        rollupOptions: {
          // هنا يمكنك تخصيص إعدادات Rollup إذا لزم الأمر
        }
      }
    },
   
    
});
