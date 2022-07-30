import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.json";

export default defineConfig({
    title: "notes",
    base: '/notes/',
    themeConfig: {
        outlineTitle: '',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/QLing-yes' }
        ],
        sidebar
    }
})
