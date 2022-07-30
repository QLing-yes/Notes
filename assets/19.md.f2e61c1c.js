import{_ as s,c as n,o as a,a as l}from"./app.23ffac0b.js";const C=JSON.parse('{"title":"tip","description":"","frontmatter":{},"headers":[{"level":2,"title":"tip","slug":"tip"},{"level":2,"title":"\u63A7\u5236\u5668","slug":"\u63A7\u5236\u5668"},{"level":2,"title":"Provide / Injec","slug":"provide-injec"}],"relativePath":"19.md"}'),p={name:"19.md"},o=l(`<h2 id="tip" tabindex="-1">tip <a class="header-anchor" href="#tip" aria-hidden="true">#</a></h2><ul><li><p><strong>\u8DEF\u7531\u901A\u914D\u7B26</strong><code>?</code>, <code>+</code>, <code>*</code>, \u548C<code>()</code></p></li><li><p><a href="https://docs.nestjs.com/controllers#redirection" target="_blank" rel="noopener noreferrer">\u91CD\u5B9A\u5411</a></p></li><li><p><a href="https://docs.nestjs.com/recipes/crud-generator" target="_blank" rel="noopener noreferrer">RECIPES\u5DE5\u5177</a></p></li></ul><h2 id="\u63A7\u5236\u5668" tabindex="-1">\u63A7\u5236\u5668 <a class="header-anchor" href="#\u63A7\u5236\u5668" aria-hidden="true">#</a></h2><ul><li><p><a href="https://docs.nestjs.com/controllers#route-parameters" target="_blank" rel="noopener noreferrer">\u8DEF\u7531\u53C2\u6570</a></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//url: http://127.0.0.1:3000/e/w</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:id/:xx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">getTest</span><span style="color:#A6ACCD;">(@</span><span style="color:#82AAFF;">Param</span><span style="color:#A6ACCD;">() params): string </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//{ id: &#39;e&#39;, xx: &#39;w&#39; }</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OK</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5B50\u57DF\u8DEF\u7531<code>@Controller({ host: &#39;www.ling-in.top&#39; })</code>(Fastify\u4E0D\u652F\u6301)</p><ol><li><code>@HostParam(&#39;www&#39;)</code></li></ol></li><li><p>\u8DEF\u5F84\u524D\u7F00<code>@Controller(&#39;cats&#39;)</code></p></li><li><p><a href="https://docs.nestjs.com/controllers#request-payloads" target="_blank" rel="noopener noreferrer">\u8BF7\u6C42\u6709\u6548\u8F7D\u8377</a></p><ol><li><code>ValidationPipe</code>\u4F1A\u8FC7\u6EE4\u6389\u4E0D\u89C4\u8303\u8377\u8F7D</li></ol><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreateCatDto</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">//\u5B98\u65B9\u5EFA\u8BAE\u4F7F\u7528\u7C7B</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u8377\u8F7D\u767D\u540D\u5355</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Post</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">async </span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(@</span><span style="color:#82AAFF;">Body</span><span style="color:#A6ACCD;">() createCatDto: CreateCatDto) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This action adds a new cat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>@Res</p><blockquote><p><code>@Res()</code>\u6216<code>@Response()</code>\u5904\u7406\u7A0B\u5E8F\u65F6\uFF0C\u5C06\u7F6E\u4E8E<strong>\u5E93\u7279\u5B9A\u6A21\u5F0F</strong>\uFF0C\u5E76\u4E14<strong>\u60A8\u5C06\u8D1F\u8D23\u7BA1\u7406\u54CD\u5E94</strong>\uFF08\u4F8B\u5982\uFF0C<code>res.json(...)</code>\u6216\uFF09\u6765\u53D1\u51FA\u67D0\u79CD\u54CD\u5E94<code>res.send(...)</code>\uFF0C\u5426\u5219 HTTP \u670D\u52A1\u5668\u5C06\u6302\u8D77\u3002 \u5931\u53BB\u4F9D\u8D56\u4E8ENest\u6807\u51C6\u54CD\u5E94\u5904\u7406\u7684Nest\u529F\u80FD\u7684\u517C\u5BB9\u6027\uFF0C\u4F8B\u5982\u62E6\u622A\u5668\u548C<code>@HttpCode()</code>/<code>@Header()</code>\u88C5\u9970\u5668\u3002\u8981\u89E3\u51B3\u6B64\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u5C06<code>passthrough</code>\u9009\u9879\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p></blockquote><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">findAll</span><span style="color:#A6ACCD;">(@</span><span style="color:#82AAFF;">Res</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">passthrough</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) res: Response) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">status</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">HttpStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OK</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="provide-injec" tabindex="-1">Provide / Injec <a class="header-anchor" href="#provide-injec" aria-hidden="true">#</a></h2><p><strong>@Inject</strong></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Injectable</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Optional</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Inject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nestjs/common</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Injectable</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HttpService</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Inject</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HTTP_OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">httpClient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//or</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(@</span><span style="color:#82AAFF;">Optional</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Inject</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HTTP_OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> httpClient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u518C</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//app.module.ts</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Module</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">providers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [HttpService] </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppModule</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://docs.nestjs.com/providers#manual-instantiation" target="_blank" rel="noopener noreferrer">\u624B\u52A8\u5B9E\u4F8B\u5316</a></p>`,10),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
