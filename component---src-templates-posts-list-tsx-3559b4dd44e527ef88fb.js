"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[621],{9539:function(e,t,r){r.r(t),r.d(t,{Head:function(){return g},default:function(){return d}});var o=r(7294),l=r(1883),n=r(656),a=r(4001),i=r(4842);let s=function(){function e(){}var t=e.prototype;return t.createCategoryUrl=function(e){return"/"+this.removeBoundsSlashes(e)},t.createFoodCategoryUrl=function(e){return"/tipus-de-menjar/"+this.removeBoundsSlashes(e)},t.createNeighbourhoodUrl=function(e){const t=this.removeBoundsSlashes(e);return"/barri/"+t.normalize().toLowerCase().replace(/\s/g,"-")},t.removeBoundsSlashes=function(e){let t=e;return"/"===t[0]&&(t=t.slice(1)),"/"===t[t.length-1]&&(t=t.slice(0,-1)),t},e}();const c=new Map([["gastro","🍴"],["llengua","👅"],["llibres","📖"],["software","👨🏻‍💻"],["burger","🍔"],["esmorzar","🥖"],["ramen","🍜"],["dolç","🍰"],["sa","🥦"],["pizza","🍕"],["valencià","🥘"]]);function u(e){var t;return null!==(t=c.get(e))&&void 0!==t?t:e}const m=new s;var d=e=>{let{pageContext:t,data:r,location:a}=e;const{site:{siteMetadata:s},allMarkdownRemark:{nodes:c}}=r,d=null==s?void 0:s.title;if(!d)throw new Error("A title is mandatory for every post");const g=t.categoryFolder||t.foodCategory||t.neighbourhood,f={}.GATSBY_DEBUG?c:c.filter((e=>!e.frontmatter.draft));return o.createElement(i.Z,{location:a,title:d},o.createElement(n.Z,null),g?o.createElement("div",{id:"filter-alert"},o.createElement("p",null,"☝️ Estas filtrant per"," ",o.createElement("strong",null,t.categoryFolder&&t.categoryFolder.slice(1,-1)||t.foodCategory||t.neighbourhood))):null,o.createElement("ol",{style:{listStyle:"none"}},f.map((e=>{let{frontmatter:r,fields:n,excerpt:a}=e;const{slug:i}=n,{title:s=i,foodCategory:c,neighbourhood:d,date:f,description:h}=r,p=function(e){return e.split("/").filter(Boolean)[0]}(i);return o.createElement("li",{key:i},o.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,g?null:o.createElement(l.Link,{to:m.createCategoryUrl(p),className:"filter category"},u(p)),t.foodCategory||!c?null:o.createElement(l.Link,{to:m.createFoodCategoryUrl(c),className:"filter food-category"},u(c)),t.neighbourhood||!d?null:o.createElement(l.Link,{to:m.createNeighbourhoodUrl(d),className:"filter neighbourhood"},d),o.createElement("h2",null,o.createElement(l.Link,{to:i,itemProp:"url"},o.createElement("span",{itemProp:"headline"},s))),o.createElement("small",null,f)),o.createElement("section",null,o.createElement("p",{dangerouslySetInnerHTML:{__html:h||a},itemProp:"description"}))))}))))};const g=()=>o.createElement(a.Z,{title:"Tots els articles"})}}]);
//# sourceMappingURL=component---src-templates-posts-list-tsx-3559b4dd44e527ef88fb.js.map