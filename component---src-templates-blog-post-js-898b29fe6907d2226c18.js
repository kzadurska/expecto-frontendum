(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return A});var a=n(151),r=n.n(a),i=n(148),o=n(0),u=n.n(o),c=n(150),l=n(152),s=n.n(l),d=n(163),m=n(158),f=n(156);function g(){var t=r()(["font-size: 14px;"]);return g=function(){return t},t}function p(){var t=r()(["margin-top: 80px;"]);return p=function(){return t},t}function y(){var t=r()(["margin-top: 40px;"]);return y=function(){return t},t}function M(){var t=r()(["text-align: center;"]);return M=function(){return t},t}function h(){var t=r()(["text-align: center; margin: 32px 0 0; color: #005882;"]);return h=function(){return t},t}e.default=function(t){var e=t.data,n=t.pageContext,a=t.location,r=e.markdownRemark,i=e.site.siteMetadata.title,o=n.previous,l=n.next;return u.a.createElement(m.a,{location:a,title:i},u.a.createElement(f.a,{title:r.frontmatter.title,description:r.excerpt}),u.a.createElement(w,null,r.frontmatter.title),u.a.createElement(x,null,r.frontmatter.date),u.a.createElement(I,{dangerouslySetInnerHTML:{__html:r.html}}),u.a.createElement(v,{author:r.frontmatter.author}),u.a.createElement(C,{wraps:!0,mTop:"auto",pTop:80},o&&u.a.createElement(c.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title),l&&u.a.createElement(c.Link,{to:l.fields.slug,rel:"next",style:{marginLeft:"auto"}},l.frontmatter.title," →")))};var A="175140521",w=Object(i.default)("h2")(h()),x=Object(i.default)("small")(M()),I=Object(i.default)("div")(y()),v=Object(i.default)(d.a)(p()),C=Object(i.default)(s.a)(g())},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(149),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var l=n(153),s=n.n(l);n.d(e,"PageRenderer",function(){return s.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},155:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(52),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},156:function(t,e,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(159),l=n.n(c),s=n(150),d={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},m=function(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,u=t.title;return i.a.createElement(s.StaticQuery,{query:f,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.authors},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};m.propTypes=d,m.defaultProps={lang:"en",meta:[],keywords:[]},e.a=m;var f="1794625727"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Expecto Frontendum",description:"A blog about all things frontend",authors:"Kasia Zadurska & Robert Kirsz"}}}}},158:function(t,e,n){"use strict";var a=n(151),r=n.n(a),i=n(148),o=n(0),u=n.n(o),c=n(150),l=n(152),s=n.n(l);function d(){var t=r()(["\n  body {\n    font: 16px/1.5 Montserrat, sans-serif;\n    margin: 0;\n  }\n\n  h1, h2, h3, h4, h5 {\n    font-family: Cinzel, serif;\n    font-weight: 100;\n    line-height: 0.9;\n\n    a {\n      text-decoration: none;\n    }\n  }\n\n  a {\n    color: #005882;\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return d=function(){return t},t}var m=Object(i.createGlobalStyle)(d());function f(){var t=r()(["min-height: 100vh;"]);return f=function(){return t},t}var g=Object(i.default)(c.Link).withConfig({displayName:"Layout__HomeLink",componentId:"si7jzc-0"})(["flex:none;display:block;padding:32px 16px;font:35px/0.6 Cinzel,serif;text-align:center;text-decoration:none;"]),p=(e.a=function(t){var e=t.title,n=t.children;return u.a.createElement(p,{column:!0},u.a.createElement(m,null),u.a.createElement(g,{to:"/"},e),u.a.createElement(s.a,{as:"main",column:!0,pBottom:24,flex:1,maxWidth:630,padding:"0 16px",margin:"0 auto"},n))},Object(i.default)(s.a)(f()))},160:function(t,e,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},161:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4NCiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDQwMHY0MDBIMHoiLz4NCiAgICA8cGF0aCBmaWxsPSIjMWRhMWYyIiBkPSJNMTUzLjYgMzAxLjZjOTQuNCAwIDE0Ni03OC4yIDE0Ni0xNDYgMC0yLjIgMC00LjQtLjItNi42YTEwNC40IDEwNC40IDAgMCAwIDI1LjYtMjYuNSAxMDIuNCAxMDIuNCAwIDAgMS0yOS41IDggNTEuNSA1MS41IDAgMCAwIDIyLjYtMjguMyAxMDIuOCAxMDIuOCAwIDAgMS0zMi42IDEyLjQgNTEuMyA1MS4zIDAgMCAwLTg3LjQgNDYuOCAxNDUuNiAxNDUuNiAwIDAgMS0xMDUuNy01My42IDUxLjMgNTEuMyAwIDAgMCAxNS45IDY4LjUgNTEgNTEgMCAwIDEtMjMuMy02LjR2LjZhNTEuMyA1MS4zIDAgMCAwIDQxLjEgNTAuMyA1MS4yIDUxLjIgMCAwIDEtMjMuMS45IDUxLjQgNTEuNCAwIDAgMCA0OCAzNS42IDEwMyAxMDMgMCAwIDEtNjMuOCAyMiAxMDQuNCAxMDQuNCAwIDAgMS0xMi4yLS44IDE0NS4yIDE0NS4yIDAgMCAwIDc4LjYgMjMiLz4NCjwvc3ZnPg0K"},163:function(t,e,n){"use strict";var a=n(151),r=n.n(a),i=(n(32),n(148)),o=(n(160),n(154)),u=n.n(o),c=n(0),l=n.n(c),s=n(152),d=n.n(s),m=i.default.img.attrs({draggable:!1}).withConfig({displayName:"Avatar",componentId:"sc-1dpitbq-0"})(["flex:none;width:50px;height:50px;border-radius:50%;object-fit:cover;"]),f=n(161),g=n.n(f);function p(){var t=r()(["display: block;"]);return p=function(){return t},t}e.a=function(t){var e=t.author,n=u()(t,["author"]);return l.a.createElement(d.a,Object.assign({column:!0,itemsCenter:!0,listTop:16},n),l.a.createElement(m,{src:e.avatar.publicURL,alt:e.name}),l.a.createElement(d.a,{column:!0,listTop:4,itemsCenter:!0},l.a.createElement("span",null,"Written by ",l.a.createElement("strong",null,e.name)),l.a.createElement("span",null,e.bio),l.a.createElement(y,{href:"https://twitter.com/"+e.twitter},l.a.createElement("img",{src:g.a,alt:"Twitter logo",width:"40"}))))};var y=Object(i.default)("a")(p())}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-898b29fe6907d2226c18.js.map