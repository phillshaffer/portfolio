!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={},r=[],i=[];function a(e,t){var n,a,s,l,c=i;for(l=arguments.length;l-- >2;)r.push(arguments[l]);for(t&&null!=t.children&&(r.length||r.push(t.children),delete t.children);r.length;)if((a=r.pop())&&void 0!==a.pop)for(l=a.length;l--;)r.push(a[l]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&n?c[c.length-1]+=a:c===i?c=[a]:c.push(a),n=s;var p=new function(){};return p.nodeName=e,p.children=c,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function s(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function c(e,t){return a(e.nodeName,s(s({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(o.debounceRendering||l)(h)}function h(){var e,t=u;for(u=[];e=t.pop();)e._dirty&&L(e)}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,a):e.removeEventListener(t,y,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var b=[],w=0,_=!1,x=!1;function C(){for(var e;e=b.pop();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){w++||(_=null!=r&&void 0!==r.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var a=H(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--w||(x=!1,i||C()),a}function H(e,t,n,o,r){var i=e,a=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),S(e,!0))),i.__preactattr_=!0,i;var s,l,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,l=s,c=m(t);for(;r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;r&&l&&(!o||r._component)?(P(r,c,3,n,o),e=r.base):(i&&!s&&(M(i),e=a=null),r=U(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,a=null),P(r,c,1,n,o),e=r.base,a&&e!==a&&(a._component=null,S(a,!1)));return e}(e,t,n,o);if(_="svg"===c||"foreignObject"!==c&&_,c=String(c),(!e||!f(e,c))&&(s=c,(l=_?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),S(e,!0)}var p=i.firstChild,u=i.__preactattr_,d=t.children;if(null==u){u=i.__preactattr_={};for(var h=i.attributes,y=h.length;y--;)u[h[y].name]=h[y].value}return!x&&d&&1===d.length&&"string"==typeof d[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=d[0]&&(p.nodeValue=d[0]):(d&&d.length||null!=p)&&function(e,t,n,o,r){var i,a,s,l,c,p=e.childNodes,u=[],d={},h=0,m=0,v=p.length,y=0,b=t?t.length:0;if(0!==v)for(var w=0;w<v;w++){var _=p[w],x=_.__preactattr_,C=b&&x?_._component?_._component.__key:x.key:null;null!=C?(h++,d[C]=_):(x||(void 0!==_.splitText?!r||_.nodeValue.trim():r))&&(u[y++]=_)}if(0!==b)for(var w=0;w<b;w++){l=t[w],c=null;var C=l.key;if(null!=C)h&&void 0!==d[C]&&(c=d[C],d[C]=void 0,h--);else if(!c&&m<y)for(i=m;i<y;i++)if(void 0!==u[i]&&(k=a=u[i],N=r,"string"==typeof(A=l)||"number"==typeof A?void 0!==k.splitText:"string"==typeof A.nodeName?!k._componentConstructor&&f(k,A.nodeName):N||k._componentConstructor===A.nodeName)){c=a,u[i]=void 0,i===y-1&&y--,i===m&&m++;break}c=H(c,l,n,o),s=p[w],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?g(s):e.insertBefore(c,s))}var k,A,N;if(h)for(var w in d)void 0!==d[w]&&S(d[w],!1);for(;m<=y;)void 0!==(c=u[y--])&&S(c,!1)}(i,d,n,o,x||null!=u.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,_);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],_)}(i,t.attributes,u),_=a,i}function S(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||g(e),A(e))}function A(e){for(e=e.lastChild;e;){var t=e.previousSibling;S(e,!0),e=t}}var N={};function U(e,t,n){var o,r=N[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):((o=new T(t,n)).constructor=e,o.render=W),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function W(e,t,n){return this.constructor(e,n)}function P(e,t,n,r,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):L(e,1,i)),e.__ref&&e.__ref(e))}function L(e,t,n,r){if(!e._disable){var i,a,l,c=e.props,p=e.state,u=e.context,d=e.prevProps||c,h=e.prevState||p,f=e.prevContext||u,g=e.base,v=e.nextBase,y=g||v,_=e._component,x=!1;if(g&&(e.props=d,e.state=h,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,p,u)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,u),e.props=c,e.state=p,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(c,p,u),e.getChildContext&&(u=s(s({},u),e.getChildContext()));var H,A,N=i&&i.nodeName;if("function"==typeof N){var W=m(i);(a=_)&&a.constructor===N&&W.key==a.__key?P(a,W,1,u,!1):(H=a,e._component=a=U(N,W,u),a.nextBase=a.nextBase||v,a._parentComponent=e,P(a,W,0,u,!1),L(a,1,n,!0)),A=a.base}else l=y,(H=_)&&(l=e._component=null),(y||1===t)&&(l&&(l._component=null),A=k(l,i,u,n||!g,y&&y.parentNode,!0));if(y&&A!==y&&a!==_){var T=y.parentNode;T&&A!==T&&(T.replaceChild(A,y),H||(y._component=null,S(y,!1)))}if(H&&M(H),e.base=A,A&&!r){for(var O=e,D=e;D=D._parentComponent;)(O=D).base=A;A._component=O,A._componentConstructor=O.constructor}}if(!g||n?b.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(d,h,f),o.afterUpdate&&o.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);w||r||C()}}function M(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,g(t),function(e){var t=e.constructor.name;(N[t]||(N[t]=[])).push(e)}(e),A(t)),e.__ref&&e.__ref(null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function O(e,t,n){return k(n,e,{},!1,t,!1)}s(T.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=s({},n)),s(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),d(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),L(this,2)},render:function(){}});var D={};function R(e,t){for(var n in t)e[n]=t[n];return e}function B(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function E(e,t){return e.index=t,e.rank=function(e){return e.attributes.default?0:(t=e.attributes.path,j(t).map(I).join(""));var t}(e),e.attributes}function j(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function I(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var q=null,z=[],G=[],$={};function V(){var e;return""+((e=q&&q.location?q.location:q&&q.getCurrentLocation?q.getCurrentLocation():"undefined"!=typeof location?location:$).pathname||"")+(e.search||"")}function K(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=z.length;t--;)if(z[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),q&&q[t]?q[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),Y(e)}function Y(e){for(var t=!1,n=0;n<z.length;n++)!0===z[n].routeTo(e)&&(t=!0);for(var o=G.length;o--;)G[o](e);return t}function F(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return K(t)}}function X(e){if(0==e.button)return F(e.currentTarget||e.target||this),J(e)}function J(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function Q(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t,n=e.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")&&(null!=(t=n).__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")])){if(n.hasAttribute("native"))return;if(F(n))return J(e)}}while(n=n.parentNode)}}var Z=!1;var ee=function(e){function t(t){e.call(this,t),t.history&&(q=t.history),this.state={url:t.url||V()},Z||("function"==typeof addEventListener&&(q||addEventListener("popstate",function(){Y(V())}),addEventListener("click",Q)),Z=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){z.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;q&&(this.unlisten=q.listen(function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),z.splice(z.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(E).sort(B).map(function(e){var o=function(e,t,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=e.match(r),a={};if(i&&i[1])for(var s=i[1].split("&"),l=0;l<s.length;l++){var c=s[l].split("=");a[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=j(e.replace(r,"")),t=j(t||"");for(var p=Math.max(e.length,t.length),u=0;u<p;u++)if(t[u]&&":"===t[u].charAt(0)){var d=t[u].replace(/(^\:|[+*?]+$)/g,""),h=(t[u].match(/[+*?]+$/)||D)[0]||"",f=~h.indexOf("+"),m=~h.indexOf("*"),g=e[u]||"";if(!g&&!m&&(h.indexOf("?")<0||f)){o=!1;break}if(a[d]=decodeURIComponent(g),f||m){a[d]=e.slice(u).map(decodeURIComponent).join("/");break}}else if(t[u]!==e[u]){o=!1;break}return(!0===n.default||!1!==o)&&a}(t,e.attributes.path,e.attributes);if(o){if(!1!==n){var r={url:t,matches:o};return R(r,o),delete r.ref,delete r.key,c(e,r)}return e}}).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,r=t.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var s=this.previousUrl;return r!==s&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:s,active:i,current:a})),a},t}(T);ee.subscribers=G,ee.getCurrentUrl=V,ee.route=K,ee.Router=ee,ee.Route=function(e){return a(e.component,e)},ee.Link=function(e){return a("a",R({onClick:X},e))};var te=ee;class ne extends T{constructor(e){super(e)}componentDidMount(e){}render(e,t){return a("div",{id:"masthead",style:{height:e.mastheadHeight+"px",width:"100%",position:"fixed","background-color":"blue","z-index":"-99",top:"0px"}},"masthead")}}class oe extends T{constructor(e){super(e),this.state={headerDisplaySticky:!1},this.onScroll=this.onScroll.bind(this)}componentDidMount(){window.addEventListener("scroll",this.onScroll,!1)}componentWillUnmount(){window.removeEventListener("scroll",this.onScroll,!1)}onScroll(){let e=window.scrollY;e<window.innerHeight&&this.setState({headerDisplaySticky:!1}),e>this.props.mastheadHeight&&e<this.props.mastheadHeight+this.props.height&&this.setState({headerDisplaySticky:!0})}render(e,t){const n={height:e.height+"px",width:"100%","background-color":"rgba(255, 255, 255, 1)"},o={position:"fixed",height:e.height+"px",width:"100%",top:"0px","z-index":"1000","background-color":"rgba(255, 255, 255, .70)"};return console.log("header rendered"),t.headerDisplaySticky?a("header",{style:o},"first"):a("header",{style:n},"first")}}class re extends T{constructor(e){super(e),this.state={componentHeight:" "},this.state={scrimDisplay:" "},this.state={scrimPosition:" "},this.state={scrimBackgroundColor:" "}}componentDidMount(e){let t=this;window.addEventListener("load",function(e){let n=t.section.offsetHeight;t.setState({componentHeight:n}),t.setState({scrimPosition:t.getOverlayPosition(n,t.props.scrimHeight)})}),window.addEventListener("scroll",function(e){let n=this.scrollY;const o=t.state.componentHeight,r=t.section.getBoundingClientRect().y+n,i=t.getOverlayPosition(o,t.props.scrimHeight);let a=t.getComponentScrollPosition(n,r);n>r&&n<r+o&&(a>t.state.scrimPosition?(t.setState({scrimDisplay:"block"}),t.setState({scrimBackgroundColor:"rgba(120, 120, 120, "+t.getOverlayOpacity(a,i,t.props.scrimHeight)+")"})):a<t.state.scrimPosition&&t.setState({scrimDisplay:"none"}))}),window.addEventListener("resize",function(){t.section.style.height="auto";let e=t.section.offsetHeight;t.setState({componentHeight:e}),t.setState({scrimPosition:t.getOverlayPosition(e,t.props.scrimHeight)})})}getComponentScrollPosition(e,t){return e-t}getOverlayPosition(e,t){return e-t}getOverlayOpacity(e,t,n){return(e-t)/n}render(e,t){const n={position:"relative",height:t.componentHeight+"px",display:"flex","flex-direction":"column","align-items":"center","background-color":e.backgroundColor},o={display:t.scrimDisplay,position:"absolute",top:t.scrimPosition+"px",width:"100%",height:e.scrimHeight+"px","background-color":t.scrimBackgroundColor,"z-index":"2"};return console.log("section rendered"),a("section",{ref:e=>this.section=e,style:n},e.children,a("div",{id:"scrim",style:o}))}}class ie extends T{constructor(e){super(e)}componentDidMount(e){}render(e,t){return a("div",{id:"contentArea",style:{width:"100%","max-width":e.width+"px",display:"flex","flex-direction":"column","align-items":"flex-start","margin-top":e.top+"px","margin-bottom":e.bottom+"px"}},e.children)}}class ae extends T{constructor(e){super(e),this.openTargetURL=this.openTargetURL.bind(this)}componentDidMount(e){}openTargetURL(e){window.open(e)}render(e,t){const n={"max-width":"100%",height:"auto","margin-top":e.top+"px","margin-bottom":e.bottom+"px"};return a("img",{src:"./images/"+e.image,style:n})}}const se=e=>{console.log("home redered");const t={position:"relative","margin-top":e.viewportHeight};return a("div",null,a(ne,{mastheadHeight:e.viewportHeight}),a("main",{style:t},a(oe,{height:56,mastheadHeight:e.viewportHeight}),a(re,{backgroundColor:"#ffffff",scrimHeight:"240"},a(ie,{width:"800"},a("p",null,"In October of 2017, Highspot had closed their B Round of funding and was closing in on an ever growing list of Fortune 500 clients. Unlike any other startup, the Highspot product was a mishmash of user experience patterns quickly implemented over time in a race to define a new market category. As a result when a major client made the request for the product to be WCAG 2.0 AA compliant, the task ahead would be met with many challenges.")),a(ie,{width:"1440"},a(ae,{image:"Create Spot _MacBookPro.png"}))),a(re,{backgroundColor:"#f5f5f5"},a(ie,{width:"800",top:"48",bottom:"48"},a("h4",null,"The Challenge"),a("h2",null,"Make The Product Accessible Over The Next 9 Months"),a("p",null,"Although members on the product team had been involved in accessibility efforts at past companies myself included, Highspot had never tackled a project of this scale. We first needed to familiarize ourselves with WCAG 2.0 AA compliance, the level of effort required along with industry standard techniques and best practices."),a("p",null,"Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible. Our high level goals were to answer:"),a("ol",null,a("li",null,"What does it mean to be compliant?"),a("li",null,"What is the current product compliance gap?"),a("li",null,"What strategy should we implement to become compliant?​​​​​​​")),a("h3",null,"My Role"),a("p",null,"I led the design of Highspot's accessibility project. I worked closely with product management and engineering to identify, design and implement all necessary accessibility updates."),a("p",null,"I was responsible for ensuring all designs met WCAG 2.0 AA compliance and documented as part of Highspot's style guide and component design system."))),a(re,{backgroundColor:"#ffffff",scrimHeight:"240"},a(ie,{width:"800",top:"48",bottom:"48"},a("h4",null,"Kickoff"),a("h2",null,"Highspot for Everyone"),a("p",null,"Before the project was too far alone, it was import to better understand and define the client's compliance expectations. We arranged a full day workshop at the client’s headquarters, where I led a discovery session with their compliance officer to learn first hand what accessibility meant to them."),a("p",null,"Compliance was defined as the core feature-set meeting WCAG 2.0 AA compliance within a year. This definition allowed us to cut system admin pages and additional power user tools from our initial scope. As a good faith commitment to our client and to help cement accessibility into Highspot's culture, we devised “Highspot for everyone”. This project code name was a play on words of Highspot’s company tagline “Highspot everywhere”."),a("h3",null,"What requirements need remediation?"),a("p",null,"The design team identified the current product compliance gap through an exhaustive internal audit of the product, using a combination of screen reader technology and browser accessibility tools. This approach helped us better understand the nuance of each accessibility requirement and gain more insight into required design changes."),a(ae,{image:"WCAG 2.0 AA Requirement Heatmap.png",top:"24",bottom:"24"}))),a(re,{backgroundColor:"#ffffff"},a(ie,{width:"800",top:"48",bottom:"48"},a("h4",null,"The path forward"),a("h2",null,"A Component Based Approach"),a("p",null,"Given the overlapping nature of many accessibility requirements within the product, it soon became apparent that the best way to remediate all WCAG 2.0 AA requirements in a repeatable and sustainable manner was to take a component based approach."),a("p",null,"To validate this strategy we chose components commonly found in dialogs and forms that failed our internal accessibility audit. The next stage of our project would involve defining design system foundations with new components pushing the product to feel more cohesive while ensuring new designs were not divorced from the current product's look and feel."),a(ae,{image:"Adobe XD Component Stickersheet.png",top:"24",bottom:"24",targetUrl:"https://xd.adobe.com/spec/aa9d6b3a-b880-4d15-6439-bf0cdf9f06ac-dcac/"})))))},le=e=>a("div",null,"about");O(a(class extends T{constructor(e){super(e),this.state={viewportHeight:" "},this.getWindowHeight=this.getWindowHeight.bind(this)}componentDidMount(e){window.addEventListener("load",this.getWindowHeight,!1),window.addEventListener("resize",this.getWindowHeight,!1)}componentWillUnmount(){window.removeEventListener("load",this.getWindowHeight,!1),window.addEventListener("resize",this.getWindowHeight,!1)}getWindowHeight(){let e=window.innerHeight;console.log(e),this.setState({viewportHeight:e})}render(e,t){return console.log("app redered"),a("div",{id:"app",style:{position:"absolute",height:"100%",width:"100%"}},a(te,null,a(se,{path:"/",viewportHeight:t.viewportHeight}),a(le,{path:"/about"})))}}),document.body)}]);