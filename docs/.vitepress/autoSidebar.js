import path from 'node:path'
import fs from 'fs'

const DIR_PATH = path.resolve()
const WHITE_LIST = [
    "index.md",
    ".vitepress",
    "node_modules",
    ".idea",
    "asset"
]
function translate(name){
    const dictionary = {
        "configuration": "基础设置",
        "faq": "常见问题",
        "getting-started": "快速开始",
    }
    return dictionary[name] || name
}

const isDirectory = (path) => fs.lstatSync(path).isDirectory()

const interSection = (arr1, arr2) => Array.from(new Set(arr1.filter((value) => !new Set(arr2).has(value))))

function getList(params, path1, pathname) {
    const res = []
    for (let file in params) {
        const dir = path.join(path1, params[file])
        const isDir = isDirectory(dir)
        if (isDir) {
            const files = fs.readdirSync(dir)
            res.push({
                text: translate(params[file]),
                collapsed: true,
                items: getList(files, dir, `${pathname}/${params[file]}`)
            })
        } else {
            const name = path.basename(params[file])
            const suffix = path.extname(params[file])
            if (suffix !== ".md") {
                continue
            }
            res.push({
                text: translate(name.replace(/\.md$/, '')),
                link: `${pathname}/${name}`.replace(/^docs\//, ''),
            })
        }
    }
    return res
}

export const setSidebar = (pathname) => {
    const dirPath = path.join(DIR_PATH, pathname)
    const file = fs.readdirSync(dirPath)
    const items = interSection(file, WHITE_LIST)
    return getList(items, dirPath, pathname)
}