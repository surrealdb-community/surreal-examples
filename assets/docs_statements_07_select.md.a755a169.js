import{_ as s,c as a,o as n,d as l}from"./app.7feb2ddc.js";const d=JSON.parse('{"title":"SELECT statement","description":"","frontmatter":{},"headers":[{"level":2,"title":"Statement syntax","slug":"statement-syntax","link":"#statement-syntax","children":[]},{"level":2,"title":"Example usage","slug":"example-usage","link":"#example-usage","children":[]}],"relativePath":"docs/statements/07_select.md"}'),F={name:"docs/statements/07_select.md"},p=l(`<h1 id="select-statement" tabindex="-1"><code>SELECT</code> statement <a class="header-anchor" href="#select-statement" aria-hidden="true">#</a></h1><p>The <code>SELECT</code> statement can be used for selecting and querying data in a database. Each <code>SELECT</code> statement supports selecting from multiple targets, which can include tables, records, edges, subqueries, paramaters, arrays, objects, and other values.</p><h2 id="statement-syntax" tabindex="-1">Statement syntax <a class="header-anchor" href="#statement-syntax" aria-hidden="true">#</a></h2><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> @</span><span style="color:#FFCB6B;">projections</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> @</span><span style="color:#FFCB6B;">targets</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> @</span><span style="color:#FFCB6B;">condition</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">SPLIT</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">AT</span><span style="color:#EEFFFF;"> ] @</span><span style="color:#89DDFF;">field</span><span style="color:#EEFFFF;"> ... ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">GROUP</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> ] @</span><span style="color:#89DDFF;">field</span><span style="color:#EEFFFF;"> ... ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">		@</span><span style="color:#89DDFF;">field</span><span style="color:#EEFFFF;"> [</span></span>
<span class="line"><span style="color:#EEFFFF;">			</span><span style="color:#89DDFF;">RAND</span><span style="color:#EEFFFF;">()</span></span>
<span class="line"><span style="color:#EEFFFF;">			| </span><span style="color:#89DDFF;">COLLATE</span></span>
<span class="line"><span style="color:#EEFFFF;">			| </span><span style="color:#89DDFF;">NUMERIC</span></span>
<span class="line"><span style="color:#EEFFFF;">		] [ </span><span style="color:#89DDFF;">ASC</span><span style="color:#EEFFFF;"> | </span><span style="color:#FFCB6B;">DESC</span><span style="color:#EEFFFF;"> ] ...</span></span>
<span class="line"><span style="color:#EEFFFF;">	] ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">LIMIT</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> ] @</span><span style="color:#89DDFF;">limit</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">START</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">AT</span><span style="color:#EEFFFF;"> ] @</span><span style="color:#89DDFF;">start</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">FETCH</span><span style="color:#EEFFFF;"> @</span><span style="color:#89DDFF;">field</span><span style="color:#EEFFFF;"> ... ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">TIMEOUT</span><span style="color:#EEFFFF;"> @</span><span style="color:#FFCB6B;">duration</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">	[ </span><span style="color:#89DDFF;">PARALLEL</span><span style="color:#EEFFFF;"> ]</span></span>
<span class="line"><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="example-usage" tabindex="-1">Example usage <a class="header-anchor" href="#example-usage" aria-hidden="true">#</a></h2><p>The following query shows example usage of this statement.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">name</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">email</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>SELECT queries support advanced expression in the field projections.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Use an expression as an alias</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">adult</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select nested array values only</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;">, tags.</span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;">.value </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">tags</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">article</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select filtered nested array values</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">addresses</span><span style="color:#EEFFFF;">[</span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">active</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">] </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">customer</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select a remote field from connected out graph edges</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> -&gt;like-&gt;friend.name </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">friends</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person:</span><span style="color:#C792EA;">tobie</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Use mathematical calculations in a select expression</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> ( ( </span><span style="color:#FFCB6B;">celsius</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#EEFFFF;"> ) </span><span style="color:#89DDFF;">+</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">30</span><span style="color:#EEFFFF;"> ) </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">fahrenheit</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">temperatue</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select manually generated object structure</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> { </span><span style="color:#FFCB6B;">weekly</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">false</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">monthly</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;"> } </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">\`marketing settings\`</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Use the result of a subquery as a returned field</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;">, (</span><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">events</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">type</span><span style="color:#EEFFFF;"> = </span><span style="color:#C3E88D;">&#39;activity&#39;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">LIMIT</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">history</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>SurrealDB supports selecting from multiple targets including tables, records, edges, parameters, subqueries, arrays, objects, values.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Select from multiple tables</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">admin</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select data from a parameter</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> $parameter </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">admin</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select from multiple specific records</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user:</span><span style="color:#C792EA;">tobie</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">user:</span><span style="color:#C792EA;">jaime</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">company:</span><span style="color:#C792EA;">surrealdb</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select from an array of values and records</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> [</span><span style="color:#F78C6C;">3648937</span><span style="color:#EEFFFF;">, </span><span style="color:#C3E88D;">&quot;test&quot;</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">person:</span><span style="color:#C792EA;">lrym5gur8hzws72ux5fa</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">person:</span><span style="color:#C792EA;">4luro9170uwcv1xrfvby</span><span style="color:#EEFFFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select from an object with nested values</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> { </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;">: </span><span style="color:#FFCB6B;">person:</span><span style="color:#C792EA;">lrym5gur8hzws72ux5fa</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">embedded</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Select and filter records from a subquery</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> (</span><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">adult</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">adult</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>As with traditional SQL queries, the SurrealDB <code>SELECT</code> queries support conditional filtering using a <code>WHERE</code> clause. If the expression in the <code>WHERE</code> clause evaluates to true, then the respective record will be returned.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Simple conditional filtering</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">article</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">published</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Conditional filtering based on graph edges</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">profile</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#EEFFFF;">count</span><span style="color:#EEFFFF;">(-&gt;experience-&gt;organisation) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Conditional filtering with boolean logic</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> (</span><span style="color:#FFCB6B;">admin</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">AND</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">active</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">OR</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">owner</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>As SurrealDB supports arrays and nested fields within arrays, it is possible to split the result on a specific field name, returning each value in an array as a separate value, along with the record content itself. This is useful in data analysis contexts.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Split the results by each value in an array</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">SPLIT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">emails</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Split the results by each value in a nested array</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">SPLIT</span><span style="color:#EEFFFF;"> locations.cities;</span></span>
<span class="line"></span></code></pre></div><p>SurrealDB supports data aggregation and grouping, with support for multiple fields, nested fields, and aggregate functions. In SurrealDB, every field which appears in the field projections of the select statement (and which is not an aggregate function), must also be present in the <code>GROUP BY</code> clause.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Group records by a single field</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">GROUP</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Group results by a nested field</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> settings.published </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">article</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">GROUP</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> settings.published;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Group results by multiple fields</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">gender</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">city</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">GROUP</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">gender</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">city</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Group results with aggregate functions</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#EEFFFF;">count</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">AS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">total</span><span style="color:#EEFFFF;">, </span><span style="color:#82AAFF;">math::sum(</span><span style="color:#EEFFFF;">age</span><span style="color:#82AAFF;">)</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">gender</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">GROUP</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">gender</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">country</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>To sort records, SurrealDB allows ordering on multiple fields and nested fields. Use the <code>ORDER BY</code> clause to specify a comma-separated list of field names which should be used to order the resulting records. The <code>ASC</code> and <code>DESC</code> keywords can be used to specify whether results should be sorted in an ascending or descending manner. The <code>COLLATE</code> keyword can be used to use unicode collation when ordering text in string values, ensuring that different cases, and different languages are sorted in a consistent manner. Finally the <code>NUMERIC</code> can be used to correctly sort text which contains numeric values.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#546E7A;">-- Order records randomly</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">RAND</span><span style="color:#EEFFFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Order records descending by a single field</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">song</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">rating</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">DESC</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Order records by multiple fields independently</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">song</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">By</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">artist</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ASC</span><span style="color:#EEFFFF;">, </span><span style="color:#FFCB6B;">rating</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">DESC</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Order text fields with unicode collation</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">article</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">title</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">COLLATE</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ASC</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#546E7A;">-- Order text fields with which include numeric values</span></span>
<span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">article</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ORDER</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">BY</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">title</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">NUMERIC</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">ASC</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>To limit the number of records returned, use the <code>LIMIT</code> clause.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">LIMIT</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">50</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div><p>One of the most powerful functions in SurrealDB is the related records and graph connections. Instead of pulling data from multiple tables and merging that data together, SurrealDB allows you to traverse related records efficiently without needing to use <code>JOIN</code>s. To fetch and replace records with the remote record data, use the <code>FETCH</code> clause to specify the fields and nested fields which should be fetched in-place, and returned in the final statement response output.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">user:</span><span style="color:#C792EA;">tobie</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FETCH</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">account</span><span style="color:#EEFFFF;">, account.users;</span></span>
<span class="line"></span></code></pre></div><p>When processing a large result set with many interconnected records, it is possible to use the <code>TIMEOUT</code> keyword to specify a timeout duration for the statement. If the statement continues beyond this duration, then the transaction will fail, and the statement will return an error.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> -&gt;knows-&gt;person</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#EEFFFF;">(</span><span style="color:#FFCB6B;">knows</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">WHERE</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">influencer</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">true</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">TIMEOUT</span><span style="color:#EEFFFF;"> 5s;</span></span>
<span class="line"></span></code></pre></div><p>When processing a large result set with many interconnected records, it is possible to specify the <code>PARALLEL</code> keyword to signify that edges and remote records should be fetched and processed in parallel.</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">SELECT</span><span style="color:#EEFFFF;"> -&gt;purchased-&gt;product&lt;-purchased&lt;-person-&gt;purchased-&gt;product </span><span style="color:#89DDFF;">FROM</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">person:</span><span style="color:#C792EA;">tobie</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">PARALLEL</span><span style="color:#EEFFFF;">;</span></span>
<span class="line"></span></code></pre></div>`,27),o=[p];function e(t,r,c,E,y,i){return n(),a("div",null,o)}const u=s(F,[["render",e]]);export{d as __pageData,u as default};