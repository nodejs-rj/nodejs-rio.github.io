(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"11tF":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("ORnI"),c=a("RD7I"),l=a("9eSz"),s=a.n(l),d=a("A2+M"),u=a("MAfW"),p=a("wd/R"),f=a.n(p),m=a("hlFM"),g=a("wx14"),b=a("Ff2n"),h=(a("17x9"),a("iuhU")),y=a("H2TA"),v=a("NqtD"),w=o.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.color,c=void 0===i?"inherit":i,l=e.component,s=void 0===l?"svg":l,d=e.fontSize,u=void 0===d?"default":d,p=e.htmlColor,f=e.titleAccess,m=e.viewBox,y=void 0===m?"0 0 24 24":m,w=Object(b.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.a.createElement(s,Object(g.a)({className:Object(h.a)(n.root,r,"inherit"!==c&&n["color".concat(Object(v.a)(c))],"default"!==u&&n["fontSize".concat(Object(v.a)(u))]),focusable:"false",viewBox:y,color:p,"aria-hidden":f?"false":"true",role:f?"img":"presentation",ref:t},w),a,f?o.a.createElement("title",null,f):null)}));w.muiName="SvgIcon";var S=Object(y.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(w);var O,C,j=(O=o.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),C=o.a.memo(o.a.forwardRef((function(e,t){return o.a.createElement(S,Object(g.a)({},e,{ref:t}),O)}))),C.muiName=S.muiName,C),k=a("ye/S"),E=a("bfFb"),x=a("VD++"),I=o.a.forwardRef((function(e,t){var a=e.avatar,n=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,s=e.component,d=e.deleteIcon,u=e.disabled,p=void 0!==u&&u,f=e.icon,m=e.label,y=e.onClick,w=e.onDelete,S=e.onKeyUp,O=e.size,C=void 0===O?"medium":O,k=e.variant,I=void 0===k?"default":k,R=Object(b.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),D=o.a.useRef(null),q=Object(E.a)(D,t),T=function(e){e.stopPropagation(),w&&w(e)},L=!(!1===i||!y)||i,N="small"===C,z=s||(L?x.a:"div"),M=z===x.a?{component:"div"}:{},P=null;if(w){var _=Object(h.a)("default"!==l&&("default"===I?n["deleteIconColor".concat(Object(v.a)(l))]:n["deleteIconOutlinedColor".concat(Object(v.a)(l))]),N&&n.deleteIconSmall);P=d&&o.a.isValidElement(d)?o.a.cloneElement(d,{className:Object(h.a)(d.props.className,n.deleteIcon,_),onClick:T}):o.a.createElement(j,{className:Object(h.a)(n.deleteIcon,_),onClick:T})}var F=null;a&&o.a.isValidElement(a)&&(F=o.a.cloneElement(a,{className:Object(h.a)(n.avatar,a.props.className,N&&n.avatarSmall,"default"!==l&&n["avatarColor".concat(Object(v.a)(l))])}));var U=null;return f&&o.a.isValidElement(f)&&(U=o.a.cloneElement(f,{className:Object(h.a)(n.icon,f.props.className,N&&n.iconSmall,"default"!==l&&n["iconColor".concat(Object(v.a)(l))])})),o.a.createElement(z,Object(g.a)({role:L||w?"button":void 0,className:Object(h.a)(n.root,r,"default"!==l&&[n["color".concat(Object(v.a)(l))],L&&n["clickableColor".concat(Object(v.a)(l))],w&&n["deletableColor".concat(Object(v.a)(l))]],"default"!==I&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[l]],p&&n.disabled,N&&n.sizeSmall,L&&n.clickable,w&&n.deletable),"aria-disabled":!!p||void 0,tabIndex:L||w?0:void 0,onClick:y,onKeyUp:function(e){if(S&&S(e),e.currentTarget===e.target){var t=e.key;!w||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&D.current&&D.current.blur():w(e)}},ref:q},M,R),F||U,o.a.createElement("span",{className:Object(h.a)(n.label,N&&n.labelSmall)},m),P)})),R=Object(y.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(k.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(k.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(k.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(k.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(k.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(k.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(k.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(k.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(k.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(k.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(k.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(k.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(k.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(k.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(k.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(I),D=a("ofer"),q=a("Z3vd"),T=a("Lnxd"),L=function(e){return Object(T.a)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}}]})(e)};L.displayName="FaChevronLeft";var N=function(e){return Object(T.a)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}}]})(e)};N.displayName="FaChevronRight";a.d(t,"default",(function(){return P})),a.d(t,"pageQuery",(function(){return _}));var z=Object(c.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Merriweather, Georgia, serif",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}},chip:{marginRight:4}}})),M=function(e){var t=e.tags,a=z();return o.a.createElement(m.a,{marginY:1},t.map((function(e){return o.a.createElement(R,{color:"primary",variant:"outlined",classes:{root:a.chip},label:e,key:e,component:r.Link,to:"/tag/"+e,onClick:function(){}})})))};function P(e){var t=e.data,a=e.pageContext,n=z(),c=t.mdx,l=t.site,p=c.frontmatter,g=p.featuredImage,b=p.title,h=p.tags,y=p.author,v=c.body,w=a.previousPath,S=a.nextPath,O=a.postDate,C=a.postId;console.log(a);var j={url:l.siteMetadata.siteUrl+"/posts/"+C,identifier:C,title:b};return console.log("disqusConfig",j),o.a.createElement(u.a,null,o.a.createElement(m.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},o.a.createElement(m.a,{padding:2},o.a.createElement(m.a,{marginBottom:1},o.a.createElement(D.a,{variant:"h4",style:{fontFamily:"Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"}},b),o.a.createElement(D.a,{variant:"body2"},f()(O).locale("pt-br").format("LL")," por ",y," / ",o.a.createElement(i.CommentCount,{config:j,placeholder:"..."})),o.a.createElement(M,{tags:h})),o.a.createElement(s.a,{fluid:g.childImageSharp.fluid,style:{borderRadius:2}}),o.a.createElement("article",{className:n.article},o.a.createElement(d.MDXRenderer,null,v)),o.a.createElement(i.Disqus,{config:j}),o.a.createElement(m.a,{display:"flex"},o.a.createElement(m.a,{flexGrow:1},w&&o.a.createElement(q.a,{component:r.Link,to:w,variant:"outlined",color:"secondary"},o.a.createElement(L,{size:8}),o.a.createElement(m.a,{marginLeft:.5},"Anterior"))),S&&o.a.createElement(q.a,{component:r.Link,to:S,variant:"outlined",color:"secondary"},o.a.createElement(m.a,{marginRight:.5},"Próximo"),o.a.createElement(N,{size:8}))))))}var _="2971272419"},"4M6O":function(e,t,a){"use strict";a("RW0V"),a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("T39b");var n=a("TqRt");t.__esModule=!0,t.insertScript=function(e,t,a){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,a.appendChild(n),n},t.removeScript=function(e,t){var a=window.document.getElementById(e);a&&t.removeChild(a)},t.debounce=function(e,t,a){var n;return function(){var o=this,r=arguments,i=function(){n=null,a||e.apply(o,r)},c=a&&!n;window.clearTimeout(n),n=setTimeout(i,t),c&&e.apply(o,r)}},t.isReactElement=r,t.shallowComparison=function(e,t){var a,n=new Set(Object.keys(e).concat(Object.keys(t)));return 0!==(a=[]).concat.apply(a,n).filter((function(a){return e[a]!==t[a]&&!r(e[a])})).length};var o=n(a("q1tI"));function r(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},"A2+M":function(e,t,a){var n=a("X8hv");e.exports={MDXRenderer:n}},I5cv:function(e,t,a){var n=a("XKFU"),o=a("Kuth"),r=a("2OiF"),i=a("y3w9"),c=a("0/R4"),l=a("eeVq"),s=a("8MEG"),d=(a("dyZX").Reflect||{}).construct,u=l((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),p=!l((function(){d((function(){}))}));n(n.S+n.F*(u||p),"Reflect",{construct:function(e,t){r(e),i(t);var a=arguments.length<3?e:r(arguments[2]);if(p&&!u)return d(e,t,a);if(e==a){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(s.apply(e,n))}var l=a.prototype,f=o(c(l)?l:Object.prototype),m=Function.apply.call(e,f,t);return c(m)?m:f}})},ORnI:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var o=n(a("VUT9"));t.Disqus=o.default;var r=n(a("qASQ"));t.CommentCount=r.default;var i=o.default;t.default=i},VUT9:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var o=n(a("pVnL")),r=n(a("8OQS")),i=n(a("VbXa")),c=n(a("q1tI")),l=n(a("17x9")),s=a("4M6O"),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="nodejsrio",t.config?a.config=t.config:a.config={identifier:t.identifier,url:t.url,title:t.title,language:t.language},a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url,this.language=e.language},(0,s.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},a.cleanInstance=function(){(0,s.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},a.render=function(){var e=this.props,t=(e.config,(0,r.default)(e,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:75,columnNumber:7}}))},t}(c.default.Component);t.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string}},X8hv:function(e,t,a){function n(e,t,a){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,a){var n=[null];n.push.apply(n,t);var r=new(Function.bind.apply(e,n));return a&&o(r,a.prototype),r}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("jm62"),a("yt8O"),a("RW0V"),a("XfO3"),a("HEwt"),a("rE2o"),a("ioFf"),a("rGqo"),a("/SS/"),a("a1Th"),a("Btvt"),a("I5cv"),a("I5cv"),a("/SS/"),a("XfO3"),a("HEwt"),a("a1Th"),a("rE2o"),a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var s=a("q1tI"),d=a("E/Ix"),u=d.useMDXComponents,p=d.mdx,f=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.components,o=e.children,i=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["scope","components","children"]),l=u(a),d=f(t),m=s.useMemo((function(){if(!o)return null;var e=c({React:s,mdx:p},d),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(r(t),[""+o])).apply(void 0,[{}].concat(r(a)))}),[o,t]);return s.createElement(m,c({components:l},i))}},qASQ:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var o=n(a("pVnL")),r=n(a("8OQS")),i=n(a("VbXa")),c=n(a("q1tI")),l=n(a("17x9")),s=a("4M6O"),d=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="nodejsrio",a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},a.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},a.render=function(){var e=this.props,t=e.config,a=e.placeholder,n=(0,r.default)(e,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},n,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),a)},t}(c.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}}}]);
//# sourceMappingURL=component---src-gatsby-theme-sky-lite-templates-post-js-22278e245a5d6020f659.js.map