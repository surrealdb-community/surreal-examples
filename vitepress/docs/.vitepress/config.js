import { defineConfig } from "vitepress";
import { getHighlighter } from "shiki";
import { readFileSync } from "fs";
import { join } from "path";

const surrealQL = JSON.parse(readFileSync(join(__dirname, "./surrealql.json"), 'utf-8'))

const surrealQLLang = {
  id: 'surrealql',
  scopeName: 'source.surealql',
  grammar: surrealQL
}

const highlighter_shiki = await getHighlighter({theme: 'material-default'})
await highlighter_shiki.loadLanguage(surrealQLLang)  

const highlighter = (str, lang) => {
  return highlighter_shiki.codeToHtml(str, { lang, theme: 'material-default' })
} 

export default defineConfig({
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/surreal-examples/',
  markdown: {
    highlight: highlighter
  }
})

