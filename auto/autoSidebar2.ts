import fs from "fs-extra";
import { parse } from "path";
let list: sidebar[] = [];
let dirList: string[] = [];

/* 自动构建侧边栏 并 解决中文文件编译不通过问题 */

//配置
const P = {
    from: "./notes/",//复制
    to: "./docs/",//粘贴
    target: "docs/.vitepress/sidebar.json",//导出侧边栏
    root: "docs",//根目录名称
    ext: ".md"//对这个后缀的文件进行重命名
}
//复制
fs.copy(P.from, P.to, {
    filter: (src, dest) => {
        let file = fs.statSync(src).isFile();
        let p = parse(src);
        if (file && p.ext === P.ext) {
            dirList.push(dest);
        }
        return true;
    }
}, CopyRes);

function CopyRes(e: Error) {
    if (e) return;

    const similar: { [key: string]: item } = {};
    for (let i = 0; i < dirList.length; i++) {
        let { dir, name, ext } = parse(dirList[i]);
        let path = dir + "/" + i + ext;
        // 重命名
        try {
            fs.rename(dirList[i], path);
        } catch (e) {
            fs.rename(dirList[i], path);
        }
        //构建模型
        dir = dir == P.root ? '其他' : dir.split("\\").at(-1) as string;
        if (!similar[dir]) similar[dir] = [];
        similar[dir].push({ text: name, link: path.replace(P.root, "") });
    }
    dirList = [];
    Object.keys(similar).forEach(key => list.unshift(sidebar(key, similar[key])));
    // console.log(list);
    //输出模型
    fs.writeFileSync(P.target, JSON.stringify(list));
}
//样板
type item = { text: string, link: string }[]
type sidebar = { text: string; collapsible: boolean; collapsed: boolean; items: item; }
function sidebar(t1: string, items: item): sidebar {
    return {
        text: t1,
        collapsible: true,
        collapsed: false,
        items
    }
}