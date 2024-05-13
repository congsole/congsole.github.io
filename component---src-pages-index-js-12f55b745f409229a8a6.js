"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),s=new RegExp(i.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,l=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,s=l,l=!0,o++):l&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=l,l=!1,i=!0):(i=n(c)===c&&r(c)!==c,s=l,l=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return s},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),i=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return n.createElement(n.Fragment,null,n.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:o}=e,c=s(e,h);return n.createElement("img",l({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=s(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,l({},i,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,w);return t?n.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,l({},e)),n.createElement("noscript",null,n.createElement(b,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},z={image:i().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],I=new Set;let _,R;const j=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=s(e,T);const{width:y,height:b,layout:v}=r,w=c(y,b,v),{style:E,className:x}=w,C=s(w,N),k=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const L=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S);if(R&&I.has(S))return;let t,n;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:I.has(S),image:r},f)),I.has(S)||(t=requestAnimationFrame((()=>{k.current&&(n=s(k.current,S,I,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{I.has(S)&&R&&(k.current.innerHTML=R(l({isLoading:I.has(S),isLoaded:I.has(S),image:r},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,l({},C,{style:l({},E,i,{backgroundColor:d}),className:x+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));O.propTypes=z,O.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:r,__error:i}=t,o=s(t,P);return i&&console.warn(i),r?n.createElement(e,l({image:r},o)):(console.warn("Image not loaded",a),null)}}const M=q((function(e){let{as:t="div",className:a,class:r,style:i,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=s(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=l({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:w,height:L,layout:z,images:T,placeholder:N,backgroundColor:I}=o,_=c(w,L,z),{style:R,className:j}=_,O=s(_,k),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,l({},O,{style:l({},R,i,{backgroundColor:f}),className:j+(a?" "+a:"")}),n.createElement(g,{layout:z,width:w,height:L},n.createElement(E,l({},u(N,!1,z,w,L,I,y,b))),n.createElement(x,l({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,P,m,h)))))})),A=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:L,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=F;const H=q(O);H.displayName="StaticImage",H.propTypes=F},5592:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(1883);const i=e=>n.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},n.createElement(r.Link,{to:e.to},e.children));var l=e=>{let{siteTitle:t}=e;return n.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.createElement(r.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none"}},t),n.createElement("ul",{style:{listStyle:"none",float:"right"}},n.createElement(i,{to:"/"},"Home"),n.createElement(i,{to:"/about/"},"About"),n.createElement(i,{to:"/contact/"},"Contact")),n.createElement("img",{alt:"Gatsby logo",height:20,style:{margin:0},src:"data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"}))};var s=e=>{var t;let{children:a}=e;const i=(0,r.useStaticQuery)("256249292");return n.createElement(n.Fragment,null,n.createElement(l,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},n.createElement("main",null,a),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:i,title:l,children:s}=e;const{site:o}=(0,r.useStaticQuery)("63159454"),c=i||o.siteMetadata.description,d=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?l+" | "+d:l),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=o.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:c}),s)}},278:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s},default:function(){return o}});var n=a(7294),r=a(8032),i=a(5592),l=a(9357);const s=()=>n.createElement(l.Z,{title:"Home"});var o=e=>{let{data:t}=e;return n.createElement(i.Z,null,n.createElement("div",{className:"index-module--textCenter--4ece3"},n.createElement(r.S,{src:"../images/example.png",loading:"eager",width:64,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(9283)}),n.createElement("h1",null,"Welcome to ",n.createElement("b",null,"Gatsby!!!")),n.createElement("h1",{style:{display:"inline-block",borderBottom:"1px solid"}},"Amazing Pandas Eating Things"),n.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return n.createElement("div",{key:t.id},n.createElement("h3",{style:{marginBottom:"5px"}},t.frontmatter.title," ",n.createElement("span",{style:{color:"#bbb"}},"— ",t.frontmatter.date)),n.createElement("p",null,t.excerpt))}))))}},9283:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/705185e5354a42a4570368356f29b7e5/215bb/example.png","srcSet":"/static/705185e5354a42a4570368356f29b7e5/134eb/example.png 16w,\\n/static/705185e5354a42a4570368356f29b7e5/0f9f8/example.png 32w,\\n/static/705185e5354a42a4570368356f29b7e5/215bb/example.png 64w,\\n/static/705185e5354a42a4570368356f29b7e5/bab23/example.png 128w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/705185e5354a42a4570368356f29b7e5/e515b/example.avif 16w,\\n/static/705185e5354a42a4570368356f29b7e5/ddf23/example.avif 32w,\\n/static/705185e5354a42a4570368356f29b7e5/dfaf6/example.avif 64w,\\n/static/705185e5354a42a4570368356f29b7e5/ad936/example.avif 128w","type":"image/avif","sizes":"(min-width: 64px) 64px, 100vw"},{"srcSet":"/static/705185e5354a42a4570368356f29b7e5/69fd1/example.webp 16w,\\n/static/705185e5354a42a4570368356f29b7e5/64762/example.webp 32w,\\n/static/705185e5354a42a4570368356f29b7e5/555b2/example.webp 64w,\\n/static/705185e5354a42a4570368356f29b7e5/72378/example.webp 128w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":54}')}}]);
//# sourceMappingURL=component---src-pages-index-js-12f55b745f409229a8a6.js.map