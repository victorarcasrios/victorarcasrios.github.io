"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[486],{6057:function(e,t,r){var l=r(7294),n=r(1883),a=r(8771),i=r(8678);t.Z=e=>{var t;let{data:r,location:o}=e;const s=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=r.allMarkdownRemark.nodes;if(0===c.length)throw new Error("No posts found.");return l.createElement(i.Z,{location:o,title:s},l.createElement(a.Z,null),l.createElement("ol",{style:{listStyle:"none"}},c.filter((e=>!e.frontmatter.draft)).map((e=>{const t=e.frontmatter.title||e.fields.slug,r=function(e){if(!e||"string"!=typeof e||0===e.trim().length)return null;return e.split("/")[1]}(e.fields.slug);return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement(n.Link,{to:r,className:"category"},r),l.createElement("h2",null,l.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},88:function(e,t,r){var l=r(6057);t.Z=e=>{let{category:t,data:r,...n}=e;if(!t)throw new Error("Missing category to filter by");return r.allMarkdownRemark.nodes=function(e,t){return e.filter((e=>e.fields.slug.includes(t)))}(r.allMarkdownRemark.nodes,t),(0,l.Z)({data:r,...n})}},9061:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i}});var l=r(7294),n=r(9357),a=r(88);t.default=e=>(0,a.Z)({category:"gastro",...e});const i=()=>l.createElement(n.Z,{title:"Experiències gastronòmiques"})}}]);
//# sourceMappingURL=component---src-pages-gastro-js-9ea0f7afef9589b96b18.js.map