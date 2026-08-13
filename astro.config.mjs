// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://nftlox.com",
	output: "static",
	trailingSlash: "never",
	vite: { plugins: [tailwindcss()] },
	build: { inlineStylesheets: "always" },
	integrations: [sitemap()],
})
