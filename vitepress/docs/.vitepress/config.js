import { defineConfig } from "vitepress";
import { getHighlighter } from "shiki";
import { readFileSync, readdirSync, statSync } from "fs";
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

const folder = ['docs', 'unorderd']
const nav = []
const sidebar = {}

for (const f of folder) {
  console.log(f)
  nav.push({text: f, link: `/${f}/`})
  const rootList = []
  const lists = []
  for (const ff of readdirSync('./docs/' + f)) {
    if(ff.endsWith('.md')) {
      rootList.push({text: ff.slice(0, ff.length - 3), link: '/' + f + '/' + ff.slice(0, ff.length - 3)})
    } else {
      const currentList = []
      for (const fff of readdirSync('./docs/' + f + '/' + ff)) {
        if(fff.endsWith('.md')) {
          currentList.push({text: fff.slice(0, fff.length - 3), link: '/' + f + '/' + ff + '/' + fff.slice(0, fff.length - 3)})
        } else {
          console.warn('DETECTED FOLDERS 3 LEVELS DEEP NOT INDEXED')
        }
      }
      lists.push({text: ff, items: currentList})
    }
  }
  sidebar[f] = [
    ...(rootList.length <=1 ? [] : [{
      text: 'Root',
      items: rootList
    }]),
    ...lists
  ]
}

export default defineConfig({
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/surreal-examples/',
  markdown: {
    highlight: highlighter
  },
  themeConfig: {
    nav,
    sidebar
  }
})

