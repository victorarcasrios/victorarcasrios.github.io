"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[621],{7715:function(e,t,r){r.r(t),r.d(t,{Head:function(){return p},default:function(){return h}});var l=r(7294),o=r(1883),a=r(656),n=r(4001),s=r(4842);let i=function(){function e(){}var t=e.prototype;return t.createCategoryUrl=function(e){return"/"+this.removeBoundsSlashes(e)},t.createFoodCategoryUrl=function(e){return"/tipus-de-menjar/"+this.removeBoundsSlashes(e)},t.createNeighbourhoodUrl=function(e){const t=this.removeBoundsSlashes(e);return"/barri/"+t.normalize().toLowerCase().replace(/\s/g,"-")},t.removeBoundsSlashes=function(e){let t=e;return"/"===t[0]&&(t=t.slice(1)),"/"===t[t.length-1]&&(t=t.slice(0,-1)),t},e}();const c=new Map([["gastro","🍴"],["llengua","👅"],["llibres","📖"],["software","👨🏻‍💻"],["burger","🍔"],["esmorzar","🥖"],["ramen","🍜"],["dolç","🍰"],["sa","🥦"],["pizza","🍕"],["valencià","🥘"],["brunch","🥞"],["sudamericà","🌮"],["fusió","🌍"],["espanyol","🇪🇸"],["per emportar","🚴"]]);function u(e){var t;return null!==(t=c.get(e))&&void 0!==t?t:e}var d=e=>{let{title:t,filters:r,urlBuilder:a}=e;return l.createElement("div",{className:"filters-list"},l.createElement("span",{className:"filters-list-title"},t,":"),l.createElement("div",{className:"filters"},r.map((e=>l.createElement(o.Link,{to:a(e),className:"filter category"},u(e))))))};var m=e=>{let{children:t,titles:r}=e;const[o,a]=l.useState(!1);return l.createElement("div",{className:"collapse"},l.createElement("span",{onClick:()=>a(!o),className:"collapse-title"},r[o?1:0]),o?t:null)};const f="per emportar",g=new i;var h=e=>{let{pageContext:t,data:r,location:n}=e;const{site:{siteMetadata:i},allMarkdownRemark:{nodes:c}}=r,h=null==i?void 0:i.title;if(!h)throw new Error("A title is mandatory for every post");const p=t.categoryFolder||t.foodCategory||t.neighbourhood,E={}.GATSBY_DEBUG?c:c.filter((e=>!e.fields.slug.includes("/drafts/"))),y=E.reduce(((e,t)=>{let{frontmatter:{foodCategory:r,neighbourhood:l}}=t;return r&&e.foodCategories.add(r),l&&e.neighbourhoods.add(l),e}),{foodCategories:new Set,neighbourhoods:new Set}),b=Array.from(y.neighbourhoods.values()).sort();return l.createElement(s.Z,{location:n,title:h},l.createElement(a.Z,null),p?l.createElement("div",{id:"filter-alert"},l.createElement("p",null,"☝️ Estas filtrant per"," ",l.createElement("strong",null,t.categoryFolder&&t.categoryFolder.slice(1,-1)||t.foodCategory||t.neighbourhood))):l.createElement(m,{titles:["➕ Mostra els filtres","➖ Amaga els filtres"]},l.createElement(d,{title:"Tipus de menjar",filters:Array.from(y.foodCategories.values()),urlBuilder:e=>g.createFoodCategoryUrl(e)}),l.createElement(d,{title:"Ubicació",filters:b,urlBuilder:e=>g.createNeighbourhoodUrl(e)}),l.createElement(d,{title:"Categories generals",filters:["gastro","llibres"],urlBuilder:e=>"/"+e}),l.createElement("br",null)),l.createElement("ol",{style:{listStyle:"none"}},E.map((e=>{let{frontmatter:r,fields:a,excerpt:n}=e;const{slug:s}=a,{title:i=s,foodCategory:c,neighbourhood:d,date:m,description:h}=r,E=function(e){return e.split("/").filter(Boolean)[0]}(s);return l.createElement("li",{key:s},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,p?null:l.createElement(o.Link,{to:g.createCategoryUrl(E),className:"filter category"},u(E)),t.foodCategory||!c?null:l.createElement(o.Link,{to:g.createFoodCategoryUrl(c),className:"filter food-category"},u(c)),t.neighbourhood||!d?null:l.createElement(o.Link,{to:g.createNeighbourhoodUrl(d),className:"filter "+(d===f?"take-away":"neighbourhood")},d===f?"🚴":d),l.createElement("h2",null,l.createElement(o.Link,{to:s,itemProp:"url"},l.createElement("span",{itemProp:"headline"},i))),l.createElement("small",null,m)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:h||n},itemProp:"description"}))))}))))};const p=()=>l.createElement(n.Z,{title:"Tots els articles"})}}]);
//# sourceMappingURL=component---src-templates-posts-list-tsx-a7a90e55deff37ec6632.js.map