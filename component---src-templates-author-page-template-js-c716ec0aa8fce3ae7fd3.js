(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l}),n.d(e,"pageQuery",function(){return d});n(165);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(164),c=n(162),M=n(174),s=n(175),g={pageContext:o.a.shape({author:o.a.string.isRequired}),data:o.a.shape({allMarkdownRemark:o.a.shape({posts:o.a.arrayOf(o.a.shape({node:o.a.shape({fields:o.a.shape({slug:o.a.string.isRequired}),frontmatter:o.a.shape({date:o.a.string.isRequired,title:o.a.string.isRequired,author:o.a.shape({id:o.a.string.isRequired}).isRequired})})}).isRequired)})})};function l(t){var e=t.data,n=t.location;return r.a.createElement(u.a,{location:n,title:e.site.siteMetadata.title},r.a.createElement(c.a,{title:e.authorsJson.name,keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(M.a,{author:e.authorsJson,mTop:32}),r.a.createElement(s.a,{posts:e.allMarkdownRemark.posts,mTop:40}))}l.propTypes=g;var d="3555631889"},156:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(33),c=n.n(u);n.d(e,"a",function(){return c.a});n(158);var M=r.a.createContext({}),s=function(t){return r.a.createElement(M.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(t,e,n){var a;t.exports=(a=n(161))&&a.default||a},160:function(t,e){t.exports={mainColor:"#005882"}},161:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(55),c=n(2),M=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json)):null};M.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=M},162:function(t,e,n){"use strict";var a=n(163),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(173),M=n.n(c),s=n(156),g={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},l=function(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,u=t.title;return i.a.createElement(s.b,{query:d,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(M.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.authors},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};l.propTypes=g,l.defaultProps={lang:"en",meta:[],keywords:[]},e.a=l;var d="1794625727"},163:function(t){t.exports={data:{site:{siteMetadata:{title:"Expecto Frontendum",description:"A blog about all things frontend",authors:"Kasia Zadurska & Robert Kirsz"}}}}},164:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(155),c=n(156),M=n(157),s=n.n(M),g=n(159),l=n.n(g),d=n(160);function y(){var t=l()(["\n  body {\n    font: 14px/1.5 Merriweather, Georgia, serif;\n    margin: 0;\n    box-sizing: border-box;\n    color: #333;\n  }\n\n  *, *::after, *::before {\n    box-sizing: inherit;\n  }\n\n  h1, h2, h3, h4, h5 {\n    font-family: Cinzel, serif;\n    font-weight: 100;\n    line-height: 0.9;\n\n    a {\n      text-decoration: none;\n    }\n  }\n\n  a {\n    color: ",";\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    border-left: 5px solid rgba(0, 88, 130, .3);\n    padding: 0 1em;\n\n    font-style: italic;\n    font-weight: 300;\n  }\n\n  .gatsby-highlight {\n    overflow: auto;\n    font-size: 12px;\n  }\n"]);return y=function(){return t},t}var m=Object(u.createGlobalStyle)(y(),d.mainColor),p=Object(u.default)(c.a).withConfig({displayName:"Layout__HomeLink",componentId:"si7jzc-0"})(["flex:none;display:block;padding:32px 16px;font:35px/0.6 Cinzel,serif;text-decoration:none;"]),I=u.default.main.withConfig({displayName:"Layout__Main",componentId:"si7jzc-1"})(["display:flex;flex-direction:column;margin:0 auto;padding:16px;width:100%;max-width:1024px;overflow:auto;"]),f={title:o.a.string,children:o.a.node},j=function(t){var e=t.title,n=t.children;return r.a.createElement(s.a,{column:!0},r.a.createElement(m,null),r.a.createElement(p,{to:"/"},e),r.a.createElement(I,null,n))};j.propTypes=f;e.a=j},165:function(t,e,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(20)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},166:function(t,e,n){"use strict";n(167)("link",function(t){return function(e){return t(this,"a","href",e)}})},167:function(t,e,n){var a=n(11),r=n(18),i=n(21),o=/"/g,u=function(t,e,n,a){var r=String(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),u+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(u),a(a.P+a.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},168:function(t,e,n){var a=n(26),r=n(35);n(169)("keys",function(){return function(t){return r(a(t))}})},169:function(t,e,n){var a=n(11),r=n(19),i=n(18);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},170:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjQ0Ij4KICAgIDxwYXRoIGZpbGw9IiMxZGExZjIiIGQ9Ik05NSAyNDNBMTczIDE3MyAwIDAgMCAyNjkgNjFjMTEtOCAyMi0xOSAzMC0zMS0xMSA1LTIzIDgtMzUgOSAxMy03IDIyLTE5IDI3LTM0LTEyIDctMjUgMTMtMzkgMTVhNjEgNjEgMCAwIDAtMTA0IDU2Qzk3IDc0IDUyIDQ5IDIyIDEyYTYxIDYxIDAgMCAwIDE5IDgyYy0xMCAwLTIwLTMtMjgtOHYxYzAgMzAgMjEgNTQgNDkgNjBhNjEgNjEgMCAwIDEtMjggMWM4IDI0IDMxIDQyIDU4IDQyYTEyMyAxMjMgMCAwIDEtOTEgMjZjMjcgMTcgNTkgMjcgOTQgMjciLz4KPC9zdmc+Cg=="},171:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMyIgdmlld0JveD0iMjAgMCAyNiAyNiI+CiAgICA8cGF0aCBkPSJNMjIgMTYuN0wzMyAyNGwxMS03LjNWOS4zTDMzIDJMMjIgOS4zVjE2Ljd6IE00NCAxNi43TDMzIDkuM2wtMTEgNy40IE0yMiA5LjNsMTEgNy4zIGwxMS03LjMgTTMzIDJ2Ny4zIE0zMyAxNi43VjI0Ii8+Cjwvc3ZnPgo="},172:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPHBhdGggZmlsbD0iIzFCMUYyMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzMuNTggMCAwIDMuNTggMCA4QzAgMTEuNTQgMi4yOSAxNC41MyA1LjQ3IDE1LjU5QzUuODcgMTUuNjYgNi4wMiAxNS40MiA2LjAyIDE1LjIxQzYuMDIgMTUuMDIgNi4wMSAxNC4zOSA2LjAxIDEzLjcyQzQgMTQuMDkgMy40OCAxMy4yMyAzLjMyIDEyLjc4QzMuMjMgMTIuNTUgMi44NCAxMS44NCAyLjUgMTEuNjVDMi4yMiAxMS41IDEuODIgMTEuMTMgMi40OSAxMS4xMkMzLjEyIDExLjExIDMuNTcgMTEuNyAzLjcyIDExLjk0QzQuNDQgMTMuMTUgNS41OSAxMi44MSA2LjA1IDEyLjZDNi4xMiAxMi4wOCA2LjMzIDExLjczIDYuNTYgMTEuNTNDNC43OCAxMS4zMyAyLjkyIDEwLjY0IDIuOTIgNy41OEMyLjkyIDYuNzEgMy4yMyA1Ljk5IDMuNzQgNS40M0MzLjY2IDUuMjMgMy4zOCA0LjQxIDMuODIgMy4zMUMzLjgyIDMuMzEgNC40OSAzLjEgNi4wMiA0LjEzQzYuNjYgMy45NSA3LjM0IDMuODYgOC4wMiAzLjg2QzguNyAzLjg2IDkuMzggMy45NSAxMC4wMiA0LjEzQzExLjU1IDMuMDkgMTIuMjIgMy4zMSAxMi4yMiAzLjMxQzEyLjY2IDQuNDEgMTIuMzggNS4yMyAxMi4zIDUuNDNDMTIuODEgNS45OSAxMy4xMiA2LjcgMTMuMTIgNy41OEMxMy4xMiAxMC42NSAxMS4yNSAxMS4zMyA5LjQ3IDExLjUzQzkuNzYgMTEuNzggMTAuMDEgMTIuMjYgMTAuMDEgMTMuMDFDMTAuMDEgMTQuMDggMTAgMTQuOTQgMTAgMTUuMjFDMTAgMTUuNDIgMTAuMTUgMTUuNjcgMTAuNTUgMTUuNTlDMTMuNzEgMTQuNTMgMTYgMTEuNTMgMTYgOEMxNiAzLjU4IDEyLjQyIDAgOCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InNjYWxlKDY0KSIvPgo8L3N2Zz4K"},174:function(t,e,n){"use strict";var a=n(159),r=n.n(a),i=(n(34),n(166),n(75),n(56),n(36),n(168),n(155)),o=(n(165),n(74)),u=n.n(o),c=n(0),M=n.n(c),s=n(4),g=n.n(s),l=n(156),d=n(157),y=n.n(d),m=n(170),p=n.n(m),I=n(171),f=n.n(I),j=n(172),A=n.n(j),x=i.default.img.attrs({draggable:!1}).withConfig({displayName:"Avatar",componentId:"sc-1dpitbq-0"})(["flex:none;width:50px;height:50px;border-radius:50%;object-fit:cover;"]);function D(){var t=r()(["margin: 0 0 0 16px;"]);return D=function(){return t},t}n.d(e,"a",function(){return N});var T={twitter:M.a.createElement("img",{src:p.a,alt:"Twitter logo",width:"24"}),codepen:M.a.createElement("img",{src:f.a,alt:"Codepen logo",width:"24"}),github:M.a.createElement("img",{src:A.a,alt:"GitHub logo",width:"24"})},E={author:g.a.shape({id:g.a.string.isRequired,name:g.a.string.isRequired,bio:g.a.string,avatar:g.a.shape({publicURL:g.a.string.isRequired}),links:g.a.shape({twitter:g.a.string,codepen:g.a.string,github:g.a.string}).isRequired}).isRequired};function N(t){var e=t.author,n=u()(t,["author"]);return M.a.createElement(y.a,Object.assign({column:!0,listTop:24},n),M.a.createElement(l.a,{to:"/authors/"+e.id},M.a.createElement(y.a,{itemsCenter:!0},M.a.createElement(x,{src:e.avatar.publicURL,alt:e.name}),M.a.createElement(z,null,e.name))),M.a.createElement("span",null,e.bio),M.a.createElement(y.a,{listLeft:!0,itemsCenter:!0,mLeft:12},Object.keys(e.links).filter(function(t){return e.links[t]}).map(function(t){return M.a.createElement("a",{key:t,href:e.links[t],target:"_blank"},T[t])})))}N.propTypes=E;var z=Object(i.default)("h4")(D())},175:function(t,e,n){"use strict";n(34);var a=n(74),r=n.n(a),i=n(0),o=n.n(i),u=n(157),c=n.n(u),M=n(159),s=n.n(M),g=n(155),l=n(4),d=n.n(l),y=n(156);function m(){var t=s()(["margin: 0;"]);return m=function(){return t},t}var p={post:d.a.shape({fields:d.a.shape({slug:d.a.string.isRequired}),frontmatter:d.a.shape({date:d.a.string.isRequired,title:d.a.string.isRequired,summary:d.a.string})})};function I(t){var e=t.post,n=r()(t,["post"]);return o.a.createElement(c.a,Object.assign({column:!0},n),o.a.createElement(f,null,o.a.createElement(y.a,{to:e.fields.slug},e.frontmatter.title)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.summary}}))}I.propTypes=p;var f=Object(g.default)("h2")(m());e.a=function(t){var e=t.posts,n=r()(t,["posts"]);return o.a.createElement(c.a,Object.assign({column:!0,listTop:32},n),e.map(function(t){return o.a.createElement(I,{key:t.node.fields.slug,post:t.node})}))}}}]);
//# sourceMappingURL=component---src-templates-author-page-template-js-c716ec0aa8fce3ae7fd3.js.map