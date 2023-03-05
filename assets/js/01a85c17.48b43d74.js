"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4013],{92:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(9960),n=a(3102);function i(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function s(e){return l.createElement(n.Zo,{component:i,props:e})}},4524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),r=a(6010),n=a(5155),i=a(833),s=a(5281),c=a(6188),m=a(1960),o=a(197);function u(e){var t=e.tags,a=e.sidebar,u=(0,n.M)();return l.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagsListPage)},l.createElement(i.d,{title:u}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,u),l.createElement(m.Z,{tags:t})))}},231:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6010),n=a(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){var t=e.permalink,a=e.label,s=e.count;return l.createElement(n.Z,{href:t,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&l.createElement("span",null,s))}},1960:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(5155),n=a(231);const i={tag:"tag_Nnez"};function s(e){var t=e.letterEntry;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return l.createElement("li",{key:e.permalink,className:i.tag},l.createElement(n.Z,e))}))),l.createElement("hr",null))}function c(e){var t=e.tags,a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return l.createElement(s,{key:e.letter,letterEntry:e})})))}},5155:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(5999),r=function(){return(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function n(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],l=t[0];return a.localeCompare(l)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}},6188:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(3366),r=a(7294),n=a(6010),i=a(2208),s=a(7524),c=a(9960),m=a(5999);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function u(e){var t,a=e.sidebar,l=e.tagData;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l&&r.createElement(r.Fragment,null,r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},"Categories"),r.createElement("ul",{className:o.sidebarItemList},l&&(null==(t=l.filter((function(e){return e.is_featured})))?void 0:t.map((function(e,t){return e?r.createElement("li",{className:o.sidebarItem,key:t},r.createElement(c.Z,{isNavLink:!0,to:"/blog/tags/"+e.slug,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.display_title?e.display_title:e.name)):null}))))),r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},a.title),r.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title))})))))}var g=a(92);function d(e){var t=e.sidebar,a=e.tagData,l=(0,s.i)();return null!=t&&t.items.length?"mobile"===l?r.createElement(g.Z,{sidebar:t}):r.createElement(u,{sidebar:t,tagData:a}):null}var b=a(5742),p=a(8084),E=a(2263),v=["sidebar","toc","children","title","description","isBlogList","isBlogPost"];function N(e){var t=e.sidebar,a=e.toc,s=e.children,m=e.title,o=e.description,u=e.isBlogList,g=e.isBlogPost,N=(0,l.Z)(e,v),f=t&&t.items.length>0,h=(0,p.eZ)("docusaurus-build-global-data-plugin"),k=h.blogMeta,_=h.tagData,Z=(0,E.Z)().siteConfig.presets,I=Z&&Z.reduce((function(e,t){var a=null==t?void 0:t.find((function(e){return e.blog}));return a&&(e=a.blog),e}),{}),y=k.featured_image,L=k.show_title,T=k.show_description,C=k.hero_button_url,D=k.hero_button_text,w=k.hero_button_new_tab,B=void 0;m&&(B=m);var A=void 0;return u?A=I.blogTitle:B&&(A=B+" | Konpyutaika Developer Blog"),r.createElement(i.Z,N,y&&""!==y&&r.createElement(b.Z,null,r.createElement("meta",{property:"og:image",content:y}),r.createElement("meta",{property:"twitter:image",content:y})),A&&r.createElement(b.Z,null,r.createElement("title",null,A),r.createElement("meta",{property:"og:title",content:A})),o&&r.createElement(b.Z,null,r.createElement("meta",{name:"description",content:o}),r.createElement("meta",{property:"og:description",content:o})),u&&(L||T)&&((null==I?void 0:I.blogTitle)||(null==I?void 0:I.blogDescription))&&r.createElement("div",{className:"blog-index-header"},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"card large light blog-hero-card"},r.createElement("div",{className:"blog-hero-card-content"},I.blogTitle&&L&&r.createElement("h1",null,I.blogTitle),I.blogDescription&&T&&r.createElement("p",null,I.blogDescription),""!==D&&""!==D&&(w?r.createElement("a",{className:"button button--primary",href:C,title:D,target:"_blank",rel:"noopener noreferrer"},D):r.createElement(c.Z,{className:"button button--primary",to:C,title:D},D)))))),r.createElement("div",{className:"blog-breadcrumbs"},r.createElement("div",{className:"container"},r.createElement(c.Z,{to:"/",title:"Konpyutaika Docs"},"Konpyutaika Docs"),r.createElement(c.Z,{to:"/blog",title:"Blog"},"Developer Blog"),!u&&B&&r.createElement(c.Z,{to:"#",title:B},B))),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},!g&&r.createElement(d,{sidebar:t,tagData:_}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":f,"col--9":!f||g}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--3"},a))))}}}]);