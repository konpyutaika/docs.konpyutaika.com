"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9924],{491:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),r=a(6010),n=a(9960),c=a(8824),o=a(833),s=a(5281),u=a(5999),i=a(2208),g=a(197);function m(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function d(e){var t,a=e.tag,d=(t=(0,c.c)().selectMessage,function(e){return t(e,(0,u.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),p=(0,u.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:d(a.count),tagName:a.label});return l.createElement(o.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagDocListPage)},l.createElement(o.d,{title:p}),l.createElement(g.Z,{tag:"doc_tag_doc_list"}),l.createElement(i.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,p),l.createElement(n.Z,{href:a.allTagsPath},l.createElement(u.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.items.map((function(e){return l.createElement(m,{key:e.id,doc:e})}))))))))}},8824:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(7294),r=a(2263),n=a(5108),c=["zero","one","two","few","many","other"];function o(e){return c.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,r.Z)().i18n.currentLocale;return(0,l.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(l){return n.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+l.message+"\n"),s}var t,a}),[e])}function i(){var e=u();return{selectMessage:function(t,a){return function(e,t,a){var l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&n.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);var r=a.select(t),c=a.pluralForms.indexOf(r);return l[Math.min(c,l.length-1)]}(a,t,e)}}}}}]);