import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.json";

export default defineConfig({
    title: "notes",
    base: '/Notes/',
    themeConfig: {
        outlineTitle: '',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/QLing-yes' }
        ],
        sidebar
    }
})
