import fs from "fs";
import { parse } from "path";
import glob from "glob";

type item = { text: string, link: string }[]

let list: sidebar[] = [];
const Path = {
    root: "./docs/",
    path: "**/*.md"
}
console.log(__dirname);
build(Path.root + ".vitepress/sidebar.json");
function build(TargetPath:string) {
    glob(Path.root + Path.path, function (er, files) {
        if (er) {
            console.error("Error: " + er.message);
            return;
        };
        let paths = files.filter((path) => { return fs.statSync(path).isFile() });
        let d: { [key: string]: item } = {};
        paths.forEach(path => {
            let base = path.replace(Path.root, "");
            let { name, dir } = parse(base);
            let folder = dir.split("/").at(-1) as string;
            if (!d[dir]) d[dir] = [];
            d[dir].push({ text: name, link: `${dir}/${name}` });
        });
        Object.keys(d).forEach(key => list.unshift(sidebar(key, d[key])));
        console.log(JSON.stringify(list));
        fs.writeFileSync(TargetPath, JSON.stringify(list));
    })
}

type sidebar = { text: string; collapsible: boolean; collapsed: boolean; items: item; }
function sidebar(t1: string, items: item): sidebar {
    return {
        text: t1,
        collapsible: true,
        collapsed: false,
        items
    }
}