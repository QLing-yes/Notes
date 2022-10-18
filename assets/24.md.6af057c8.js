import{_ as e}from"./chunks/image-20220525000703167.aef2167a.js";import{_ as o,c as l,o as n,a}from"./app.22f03cfc.js";const b=JSON.parse('{"title":"cmd","description":"","frontmatter":{},"headers":[{"level":2,"title":"package.json","slug":"package-json"},{"level":3,"title":"devtool\u8C03\u8BD5","slug":"devtool\u8C03\u8BD5"}],"relativePath":"23.md"}'),s={name:"23.md"},i=a('<h1 id="cmd" tabindex="-1">cmd <a class="header-anchor" href="#cmd" aria-hidden="true">#</a></h1><ul><li>\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939 <code>md \u76EE\u5F55\u540D</code></li><li>cd</li><li>\u5220\u9664\u4E00\u4E2A\u6587\u4EF6\u5939 <code>rmdir /s/q \u76EE\u5F55\u540D</code></li><li>\u5217\u51FA\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6 <code>dir</code></li></ul><h1 id="windows-\u73AF\u5883\u53D8\u91CF" tabindex="-1">windows \u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#windows-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u5C06\u4E00\u4E9B\u5E38\u7528\u7684\u6587\u4EF6\u6216\u7A0B\u5E8F\u7684\u8DEF\u5F84\u6DFB\u52A0\u5230path\u4E0B,\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u4F4D\u7F6E\u6765\u8BBF\u95EE\u8FD9\u4E9B\u6587\u4EF6\u4E86\u3002</p><h1 id="\u5E38\u7528git\u547D\u4EE4" tabindex="-1">\u5E38\u7528Git\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528git\u547D\u4EE4" aria-hidden="true">#</a></h1><img src="'+e+`" alt="image-20220525000703167"><ul><li><a href="https://docs.github.com/cn/get-started/using-git/pushing-commits-to-a-remote-repository" target="_blank" rel="noopener noreferrer">GitHub Doc</a></li></ul><p><a href="https://docs.github.com/cn/get-started/using-git/pushing-commits-to-a-remote-repository" target="_blank" rel="noopener noreferrer">\u64CD\u4F5C</a></p><ul><li><p><code>git fetch</code> - <strong>\u4EC5\u67E5\u770B\u8FDC\u7A0B\u53D8\u52A8</strong></p><ol><li><code>--all</code> - \u62C9\u53D6\u8986\u76D6\u672C\u5730</li></ol></li><li><p><code>git pull remote_name branch_name</code> - <strong>\u62C9\u53D6\u66F4\u6539</strong></p></li><li><p><code>git merge --abort</code> <strong>\u5C06\u5206\u652F\u6062\u590D\u5230\u60A8\u62C9\u53D6\u4E4B\u524D\u7684\u72B6\u6001</strong></p></li><li><p><code>git add [file | path]</code> - <strong>\u5EFA\u7ACB\u672C\u5730\u5386\u53F2\u5FEB\u7167</strong></p><ol><li><code>-A</code> \u63D0\u4EA4\u6240\u6709\u53D8\u5316</li><li><code>-u</code> \u63D0\u4EA4\u88AB \u4FEE\u6539/\u5220\u9664 \u7684\u6587\u4EF6\uFF0C\u4E0D\u5305\u62EC\u65B0\u6587\u4EF6</li><li><code>. </code> \u63D0\u4EA4 \u65B0\u6587\u4EF6/\u4FEE\u6539 \u7684\u6587\u4EF6\uFF0C\u4E0D\u5305\u62EC\u88AB\u5220\u9664\u7684\u6587\u4EF6</li></ol></li><li><p><code>git commit [file | path | null]</code> - <strong>\u6B63\u5F0F\u63D0\u4EA4</strong></p><ol><li><code>-v</code> - \u5982\u63D0\u4EA4\u65F6\u663E\u793Adiff\u4FE1\u606F</li><li><code>-m &quot;\u6CE8\u91CA&quot;</code> - \u6CE8\u91CA</li></ol></li><li><p><code>git push &lt;remote_name &gt; &lt;branch_name&gt; </code> - <strong>\u63A8\u9001\u6B63\u5F0F\u63D0\u4EA4</strong></p><ol><li><code>-u</code> \u540C\u6B65</li></ol><blockquote><p>git push -u origin master - \u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F</p><p>git push origin - \u63A8\u9001\u81F3\u5168\u90E8</p></blockquote></li><li><p><code>git push origin main --force</code> - \u8986\u76D6\u8FDC\u7A0B</p><ol><li><code>-f</code></li></ol></li><li><p><a href="https://zhuanlan.zhihu.com/p/137856034" target="_blank" rel="noopener noreferrer">\u56DE\u6EDA</a></p><ol><li><code>git reset --hard HEAD^</code> - \u4E0A\u4E00\u4E2A\u7248\u672C</li></ol></li></ul><p>\u63A8\u9001\u6D41\u7A0B</p><p>git add -A git commit -m &quot;&quot; git push -u origin main</p><p><a href="https://docs.github.com/cn/get-started/getting-started-with-git/managing-remote-repositories" target="_blank" rel="noopener noreferrer">\u4ED3\u5E93\u7BA1\u7406</a></p><ul><li><code>git init</code> - \u521D\u59CB\u5316</li><li><code>git clone [REPO URL]</code> - \u514B\u9686</li><li><code>git branch -a</code> - \u5217\u51FA\u5206\u652F</li><li><code>git branch -m &lt;new_name&gt;</code> - \u91CD\u547D\u540D<strong>\u672C\u5730</strong>\u5206\u652F</li><li><code>git origin &lt;\u672C\u5730\u5206\u652F&gt;:&lt;new_name&gt;</code> - \u91CD\u547D\u540D<strong>\u8FDC\u7A0B</strong>\u5206\u652F</li><li><code>rm -r .git</code> - \u53D6\u6D88\u672C\u5730\u5B58\u50A8\u5E93</li><li><code>git remote</code><ol><li><code>-v</code> - \u67E5\u770B\u5173\u8054\u72B6\u6001</li><li><code>add [any_remote_name] [REPO URL]</code> - \u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93</li><li><code>rm [name]</code> - \u53D6\u6D88\u5173\u8054\u4ED3\u5E93</li></ol></li></ul><p>\u914D\u7F6E</p><ul><li><code>git config --global --list</code> - \u5168\u5C40\u914D\u7F6E\u4FE1\u606F</li><li><code>git config [any]</code></li></ul><p>SSH</p><ul><li><code>ssh-keygen -t rsa</code> - \u751F\u6210</li><li><code>ssh -T git@github.com</code> - \u5728github\u9A8C\u8BC1\u662F\u5426\u5B58\u5728</li></ul><p>.gitignore</p><ul><li><code>touch .gitignore</code></li><li><code>git status</code></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">target          //\u5FFD\u7565\u8FD9\u4E2Atarget\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">angular.json    //\u5FFD\u7565\u8FD9\u4E2Aangular.json\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">log/*           //\u5FFD\u7565log\u4E0B\u7684\u6240\u6709\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">css/*.css       //\u5FFD\u7565css\u76EE\u5F55\u4E0B\u7684.css\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="npm" tabindex="-1"><a href="https://segmentfault.com/a/1190000012099112" target="_blank" rel="noopener noreferrer">npm</a> <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h1><ul><li>\u5220\u9664\u4F9D\u8D56 <code>uninstall</code></li><li>\u521D\u59CB\u5316 <code>init</code></li><li>\u66F4\u65B0\u5305 <code>update</code></li><li>\u5B89\u88C5 <code>&lt;install | i&gt;</code></li><li>\u5220\u9664 <code>r</code></li><li>\u6A21\u5757\u7248\u672C <code>version</code></li><li>\u7F51\u7EDC\u641C\u7D22\u5305<code>search</code></li><li>\u955C\u50CF\u5207\u6362 <code>config set registry=</code>\u5730\u5740</li></ul><blockquote><p>\u955C\u50CF</p></blockquote><ul><li><a href="https://registry.npmjs.org/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9</a></li><li><a href="https://developer.aliyun.com/mirror/?spm=a2c6h.13651102.0.0.5bbc1b11Doi1G6&amp;serviceType=mirror&amp;tag=%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">\u963F\u91CC\u955C\u50CF\u7AD9</a></li></ul><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h2><h1 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h1><ul><li>\u5B89\u88C5\u7C7B\u578B\u5B9A\u4E49<code>npm i --save-dev @types/node</code></li></ul><h3 id="devtool\u8C03\u8BD5" tabindex="-1"><a href="https://nodejs.org/en/docs/guides/debugging-getting-started/" target="_blank" rel="noopener noreferrer">devtool\u8C03\u8BD5</a> <a class="header-anchor" href="#devtool\u8C03\u8BD5" aria-hidden="true">#</a></h3><ul><li><p>node --inspect ts-node/register src/index.ts</p></li><li><p>\u8C37\u6B4C\u6D4F\u89C8\u5668\u8F93\u5165:</p><blockquote><p>chrome://inspect/</p></blockquote></li><li><p>\u914D\u5408<code>nodemon\u5DE5\u5177</code></p><ol><li>nodemon -e ts --exec node --inspect -r ts-node/register ./src</li></ol></li></ul><blockquote><p><a href="https://www.lmcc.top/articles/414.html" target="_blank" rel="noopener noreferrer">\u65E0\u6CD5\u52A0\u8F7D\u6765\u6E90\u6620\u5C04\u89E3\u51B3</a></p></blockquote><h1 id="electron" tabindex="-1">Electron <a class="header-anchor" href="#electron" aria-hidden="true">#</a></h1><ul><li>\u5B89\u88C5electron <code>npm install electron --save-dev</code></li></ul><h1 id="ts-node" tabindex="-1">ts-node <a class="header-anchor" href="#ts-node" aria-hidden="true">#</a></h1><ul><li>\u4F9D\u8D56<code>npm i -g typescript</code></li><li>\u5B89\u88C5<code>npm install -g ts-node</code></li><li>\u5B89\u88C5\u7C7B\u578B\u5B9A\u4E49<code>npm install -D tslib @types/node</code></li></ul><h4 id="\u4F7F\u7528esm\u6784\u5EFA" tabindex="-1"><a href="https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html" target="_blank" rel="noopener noreferrer">\u4F7F\u7528ESM\u6784\u5EFA</a> <a class="header-anchor" href="#\u4F7F\u7528esm\u6784\u5EFA" aria-hidden="true">#</a></h4><blockquote><p>package.json \u4E2D\u5DF2\u6DFB\u52A0 <code>&quot;type&quot;: &quot;module&quot;</code> tsconfig.json \u4E2D\u5DF2\u6DFB\u52A0 <code>&quot;module&quot;: &quot;ESNext&quot;</code></p></blockquote><p>\u81EA\u52A8\u641C\u5BFBtsconfig.json</p><blockquote><p>\u5B89\u88C5 <code>npm i tsconfig-paths -g</code><code>ts-node -r tsconfig-paths/register index.ts --files</code></p></blockquote><h1 id="ts-node-dev" tabindex="-1">ts-node-dev <a class="header-anchor" href="#ts-node-dev" aria-hidden="true">#</a></h1><p>\u7ED3\u5408<a href="https://github.com/fgnass/node-dev" target="_blank" rel="noopener noreferrer">node-dev</a>\u548C<a href="https://github.com/TypeStrong/ts-node" target="_blank" rel="noopener noreferrer">ts-node</a>\u7684\u9009\u9879</p><ul><li><code>npm install -g ts-node-dev</code></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tsnd --respawn index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="nodemon" tabindex="-1">nodemon <a class="header-anchor" href="#nodemon" aria-hidden="true">#</a></h1><ul><li>npm install -g nodemon</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nodemon --exec &quot; ts-node &quot; ./index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">nodemon -e ts --exec ts-node ./bin/www</span></span>
<span class="line"><span style="color:#A6ACCD;">nodemon -e ts --exec ts-node -r tsconfig-paths/register --files ./index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><code>-e</code>\uFF1A\u8868\u793A\u6307\u5B9A\u89C2\u5BDF\u5217\u8868 (Specifying extension watch list)</li><li><code>--exec</code>\uFF1A\u4EE3\u8868\u547D\u4EE4\u884C\u5F62\u5F0F\u6267\u884C\u547D\u4EE4</li></ul><h1 id="tsc" tabindex="-1">tsc <a class="header-anchor" href="#tsc" aria-hidden="true">#</a></h1><ul><li>npm i -g typescript</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tsc --init</span></span>
<span class="line"><span style="color:#A6ACCD;">tsc -w</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="express" tabindex="-1">Express <a class="header-anchor" href="#express" aria-hidden="true">#</a></h1><ul><li>npm i express</li><li>npm install @types/express --save-dev</li></ul><h1 id="mongoose" tabindex="-1">mongoose <a class="header-anchor" href="#mongoose" aria-hidden="true">#</a></h1><ul><li></li><li>npm i @types/mongoose</li></ul><h1 id="sass" tabindex="-1">sass <a class="header-anchor" href="#sass" aria-hidden="true">#</a></h1><p><code>npm i sass</code></p><ul><li>sass --watch --style compressed ./src:./dist</li></ul>`,56),t=[i];function r(d,c,p,h,g,u){return n(),l("div",null,t)}var _=o(s,[["render",r]]);export{b as __pageData,_ as default};
