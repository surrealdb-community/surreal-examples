import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
const block = "```"
const folders = ['docs', 'unorderd']

for (const folder of folders) {
  await handleFolder('./' + folder, './vitepress/docs/' + folder)
}
/**
 * @param {string} input
 * @param {string} out 
 */
async function handleFolder(input, output) {
  if(!existsSync(output)) {
    mkdirSync(output)
  }
  
  const objects = readdirSync(input)

  for (const f of objects) {
    const realPath = join(input, f)

    if(statSync(realPath).isDirectory()) {
      await handleFolder(join(input, f), join(output, f))
    } else {
      if(f.endsWith('.srqlnb')) {
        handleFile(join(input, f), join(output, f.slice(0, f.length - '.srqlnb'.length) + '.md'))
      }
    }
  }
}

/**
 * @param {string} input
 * @param {string} out 
 */
function handleFile(input, output) {
  /**
   * @type {{kind: 1|2, language: 'markdown'|'surealql', value: string}[]}
   */
  const content = JSON.parse(readFileSync(input, 'utf-8'))

  const md = content.map(el => {
    if(el.kind === 1) {
      return el.value
    }

    if(el.kind === 2) {
      return `${block}surrealql\n${el.value}\n${block}`
    }
  }).join('\n')

  writeFileSync(output, md)
}