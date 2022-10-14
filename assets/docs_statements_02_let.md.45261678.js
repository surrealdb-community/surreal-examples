import{_ as s,c as a,o as e,a as n}from"./app.a6625134.js";const u=JSON.parse('{"title":"LET statement","description":"","frontmatter":{},"headers":[{"level":2,"title":"Statement syntax","slug":"statement-syntax","link":"#statement-syntax","children":[]},{"level":2,"title":"Example usage","slug":"example-usage","link":"#example-usage","children":[]}],"relativePath":"docs/statements/02_let.md"}'),l={name:"docs/statements/02_let.md"},t=n(`<h1 id="let-statement" tabindex="-1"><code>LET</code> statement <a class="header-anchor" href="#let-statement" aria-hidden="true">#</a></h1><p>The <code>LET</code> statement sets and stores a value which can then be used in a subsequent query. A parameter can store any value, including the result of a query.</p><h2 id="statement-syntax" tabindex="-1">Statement syntax <a class="header-anchor" href="#statement-syntax" aria-hidden="true">#</a></h2><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">LET</span><span style="color:#EEFFFF;"> $@</span><span style="color:#FFCB6B;">parameter</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> @</span><span style="color:#89DDFF;">value</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="example-usage" tabindex="-1">Example usage <a class="header-anchor" href="#example-usage" aria-hidden="true">#</a></h2><p>The following query shows example usage of this statement.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Define the parameter</span></span>
<span class="line"><span style="color:#89DDFF;">LET</span><span style="color:#EEFFFF;"> $name </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">&quot;tobie&quot;</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"><span style="color:#546E7A;">-- Use the parameter</span></span>
<span class="line"><span style="color:#89DDFF;">CREATE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">SET</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> $name;</span></span>
<span class="line"></span></code></pre></div><p>The following query shows the <code>LET</code> statement being used to store the result of a subquery.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Define the parameter</span></span>
<span class="line"><span style="color:#89DDFF;">LET</span><span style="color:#EEFFFF;"> $adults </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> (</span><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#EEFFFF;">);</span></span>
<span class="line"><span style="color:#546E7A;">-- Use the parameter</span></span>
<span class="line"><span style="color:#89DDFF;">UPDATE</span><span style="color:#EEFFFF;"> $adults </span><span style="color:#89DDFF;">SET</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">adult</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div>`,9),o=[t];function p(F,r,c,y,E,i){return e(),a("div",null,o)}const h=s(l,[["render",p]]);export{u as __pageData,h as default};