(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(c){if(c.ep)return;c.ep=!0;const l=a(c);fetch(c.href,l)}})();const scriptRel="modulepreload",assetsURL=function(e){return"/eVis2D/"+e},seen={},__vitePreload=function(n,a,i){let c=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),u=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));c=Promise.allSettled(a.map(m=>{if(m=assetsURL(m),m in seen)return;seen[m]=!0;const d=m.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${h}`))return;const b=document.createElement("link");if(b.rel=d?"stylesheet":scriptRel,d||(b.as="script"),b.crossOrigin="",b.href=m,u&&b.setAttribute("nonce",u),document.head.appendChild(b),d)return new Promise((v,_)=>{b.addEventListener("load",v),b.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(f){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=f,window.dispatchEvent(u),!u.defaultPrevented)throw f}return c.then(f=>{for(const u of f||[])u.status==="rejected"&&l(u.reason);return n().catch(l)})};let nanoid=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,a)=>(a&=63,a<36?n+=a.toString(36):a<62?n+=(a-26).toString(36).toUpperCase():a>62?n+="-":n+="_",n),"");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function _defineProperty(e,n,a){return(n=_toPropertyKey(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function ownKeys(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),a.push.apply(a,i)}return a}function _objectSpread2(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?ownKeys(Object(a),!0).forEach(function(i){_defineProperty(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function _toPrimitive(e,n){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,n);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function _toPropertyKey(e){var n=_toPrimitive(e,"string");return typeof n=="symbol"?n:n+""}const noop=()=>{};let _WINDOW={},_DOCUMENT={},_MUTATION_OBSERVER=null,_PERFORMANCE={mark:noop,measure:noop};try{typeof window<"u"&&(_WINDOW=window),typeof document<"u"&&(_DOCUMENT=document),typeof MutationObserver<"u"&&(_MUTATION_OBSERVER=MutationObserver),typeof performance<"u"&&(_PERFORMANCE=performance)}catch{}const{userAgent=""}=_WINDOW.navigator||{},WINDOW=_WINDOW,DOCUMENT=_DOCUMENT,MUTATION_OBSERVER=_MUTATION_OBSERVER,PERFORMANCE=_PERFORMANCE;WINDOW.document;const IS_DOM=!!DOCUMENT.documentElement&&!!DOCUMENT.head&&typeof DOCUMENT.addEventListener=="function"&&typeof DOCUMENT.createElement=="function",IS_IE=~userAgent.indexOf("MSIE")||~userAgent.indexOf("Trident/");var p=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,g=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,S={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},A={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},P=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],s="classic",t="duotone",r="sharp",o="sharp-duotone",L=[s,t,r,o],G={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},lt={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},pt=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),xt={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ft=["fak","fa-kit","fakd","fa-kit-duotone"],St={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},At=["kit"],Ct={kit:{"fa-kit":"fak"}},Lt=["fak","fakd"],Wt={kit:{fak:"fa-kit"}},Et={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},t$1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r$1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bt$1=["fak","fa-kit","fakd","fa-kit-duotone"],Yt={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ua={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},I$1={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ga={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},x=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ia=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...r$1,...x],m$1=["solid","regular","light","thin","duotone","brands"],c$1=[1,2,3,4,5,6,7,8,9,10],F$1=c$1.concat([11,12,13,14,15,16,17,18,19,20]),ma=[...Object.keys(I$1),...m$1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",t$1.GROUP,t$1.SWAP_OPACITY,t$1.PRIMARY,t$1.SECONDARY].concat(c$1.map(e=>"".concat(e,"x"))).concat(F$1.map(e=>"w-".concat(e))),wa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const NAMESPACE_IDENTIFIER="___FONT_AWESOME___",UNITS_IN_GRID=16,DEFAULT_CSS_PREFIX="fa",DEFAULT_REPLACEMENT_CLASS="svg-inline--fa",DATA_FA_I2SVG="data-fa-i2svg",DATA_FA_PSEUDO_ELEMENT="data-fa-pseudo-element",DATA_FA_PSEUDO_ELEMENT_PENDING="data-fa-pseudo-element-pending",DATA_PREFIX="data-prefix",DATA_ICON="data-icon",HTML_CLASS_I2SVG_BASE_CLASS="fontawesome-i2svg",MUTATION_APPROACH_ASYNC="async",TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS=["HTML","HEAD","STYLE","SCRIPT"],PRODUCTION=(()=>{try{return!0}catch{return!1}})();function familyProxy(e){return new Proxy(e,{get(n,a){return a in n?n[a]:n[s]}})}const _PREFIX_TO_STYLE=_objectSpread2({},S);_PREFIX_TO_STYLE[s]=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},{"fa-duotone":"duotone"}),S[s]),St.kit),St["kit-duotone"]);const PREFIX_TO_STYLE=familyProxy(_PREFIX_TO_STYLE),_STYLE_TO_PREFIX=_objectSpread2({},xt);_STYLE_TO_PREFIX[s]=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},{duotone:"fad"}),_STYLE_TO_PREFIX[s]),Et.kit),Et["kit-duotone"]);const STYLE_TO_PREFIX=familyProxy(_STYLE_TO_PREFIX),_PREFIX_TO_LONG_STYLE=_objectSpread2({},ga);_PREFIX_TO_LONG_STYLE[s]=_objectSpread2(_objectSpread2({},_PREFIX_TO_LONG_STYLE[s]),Wt.kit);const PREFIX_TO_LONG_STYLE=familyProxy(_PREFIX_TO_LONG_STYLE),_LONG_STYLE_TO_PREFIX=_objectSpread2({},ua);_LONG_STYLE_TO_PREFIX[s]=_objectSpread2(_objectSpread2({},_LONG_STYLE_TO_PREFIX[s]),Ct.kit);familyProxy(_LONG_STYLE_TO_PREFIX);const ICON_SELECTION_SYNTAX_PATTERN=p,LAYERS_TEXT_CLASSNAME="fa-layers-text",FONT_FAMILY_PATTERN=g,_FONT_WEIGHT_TO_PREFIX=_objectSpread2({},G);familyProxy(_FONT_WEIGHT_TO_PREFIX);const ATTRIBUTES_WATCHED_FOR_MUTATION=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],DUOTONE_CLASSES=A,RESERVED_CLASSES=[...At,...ma],initial=WINDOW.FontAwesomeConfig||{};function getAttrConfig(e){var n=DOCUMENT.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function coerce(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}DOCUMENT&&typeof DOCUMENT.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[a,i]=n;const c=coerce(getAttrConfig(a));c!=null&&(initial[i]=c)});const _default={styleDefault:"solid",familyDefault:s,cssPrefix:DEFAULT_CSS_PREFIX,replacementClass:DEFAULT_REPLACEMENT_CLASS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};initial.familyPrefix&&(initial.cssPrefix=initial.familyPrefix);const _config=_objectSpread2(_objectSpread2({},_default),initial);_config.autoReplaceSvg||(_config.observeMutations=!1);const config={};Object.keys(_default).forEach(e=>{Object.defineProperty(config,e,{enumerable:!0,set:function(n){_config[e]=n,_onChangeCb.forEach(a=>a(config))},get:function(){return _config[e]}})});Object.defineProperty(config,"familyPrefix",{enumerable:!0,set:function(e){_config.cssPrefix=e,_onChangeCb.forEach(n=>n(config))},get:function(){return _config.cssPrefix}});WINDOW.FontAwesomeConfig=config;const _onChangeCb=[];function onChange(e){return _onChangeCb.push(e),()=>{_onChangeCb.splice(_onChangeCb.indexOf(e),1)}}const d$2=UNITS_IN_GRID,meaninglessTransform={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function insertCss(e){if(!e||!IS_DOM)return;const n=DOCUMENT.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;const a=DOCUMENT.head.childNodes;let i=null;for(let c=a.length-1;c>-1;c--){const l=a[c],f=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(i=l)}return DOCUMENT.head.insertBefore(n,i),e}const idPool="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nextUniqueId(){let e=12,n="";for(;e-- >0;)n+=idPool[Math.random()*62|0];return n}function toArray(e){const n=[];for(let a=(e||[]).length>>>0;a--;)n[a]=e[a];return n}function classArray(e){return e.classList?toArray(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function htmlEscape(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function joinAttributes(e){return Object.keys(e||{}).reduce((n,a)=>n+"".concat(a,'="').concat(htmlEscape(e[a]),'" '),"").trim()}function joinStyles(e){return Object.keys(e||{}).reduce((n,a)=>n+"".concat(a,": ").concat(e[a].trim(),";"),"")}function transformIsMeaningful(e){return e.size!==meaninglessTransform.size||e.x!==meaninglessTransform.x||e.y!==meaninglessTransform.y||e.rotate!==meaninglessTransform.rotate||e.flipX||e.flipY}function transformForSvg(e){let{transform:n,containerWidth:a,iconWidth:i}=e;const c={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")};return{outer:c,inner:m,path:d}}function transformForCss(e){let{transform:n,width:a=UNITS_IN_GRID,height:i=UNITS_IN_GRID,startCentered:c=!1}=e,l="";return c&&IS_IE?l+="translate(".concat(n.x/d$2-a/2,"em, ").concat(n.y/d$2-i/2,"em) "):c?l+="translate(calc(-50% + ".concat(n.x/d$2,"em), calc(-50% + ").concat(n.y/d$2,"em)) "):l+="translate(".concat(n.x/d$2,"em, ").concat(n.y/d$2,"em) "),l+="scale(".concat(n.size/d$2*(n.flipX?-1:1),", ").concat(n.size/d$2*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var baseStyles=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function css(){const e=DEFAULT_CSS_PREFIX,n=DEFAULT_REPLACEMENT_CLASS,a=config.cssPrefix,i=config.replacementClass;let c=baseStyles;if(a!==e||i!==n){const l=new RegExp("\\.".concat(e,"\\-"),"g"),f=new RegExp("\\--".concat(e,"\\-"),"g"),u=new RegExp("\\.".concat(n),"g");c=c.replace(l,".".concat(a,"-")).replace(f,"--".concat(a,"-")).replace(u,".".concat(i))}return c}let _cssInserted=!1;function ensureCss(){config.autoAddCss&&!_cssInserted&&(insertCss(css()),_cssInserted=!0)}var InjectCSS={mixout(){return{dom:{css,insertCss:ensureCss}}},hooks(){return{beforeDOMElementCreation(){ensureCss()},beforeI2svg(){ensureCss()}}}};const w=WINDOW||{};w[NAMESPACE_IDENTIFIER]||(w[NAMESPACE_IDENTIFIER]={});w[NAMESPACE_IDENTIFIER].styles||(w[NAMESPACE_IDENTIFIER].styles={});w[NAMESPACE_IDENTIFIER].hooks||(w[NAMESPACE_IDENTIFIER].hooks={});w[NAMESPACE_IDENTIFIER].shims||(w[NAMESPACE_IDENTIFIER].shims=[]);var namespace=w[NAMESPACE_IDENTIFIER];const functions=[],listener=function(){DOCUMENT.removeEventListener("DOMContentLoaded",listener),loaded=1,functions.map(e=>e())};let loaded=!1;IS_DOM&&(loaded=(DOCUMENT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(DOCUMENT.readyState),loaded||DOCUMENT.addEventListener("DOMContentLoaded",listener));function domready(e){IS_DOM&&(loaded?setTimeout(e,0):functions.push(e))}function toHtml(e){const{tag:n,attributes:a={},children:i=[]}=e;return typeof e=="string"?htmlEscape(e):"<".concat(n," ").concat(joinAttributes(a),">").concat(i.map(toHtml).join(""),"</").concat(n,">")}function iconFromMapping(e,n,a){if(e&&e[n]&&e[n][a])return{prefix:n,iconName:a,icon:e[n][a]}}var reduce=function(n,a,i,c){var l=Object.keys(n),f=l.length,u=a,m,d,h;for(i===void 0?(m=1,h=n[l[0]]):(m=0,h=i);m<f;m++)d=l[m],h=u(h,n[d],d,n);return h};function ucs2decode(e){const n=[];let a=0;const i=e.length;for(;a<i;){const c=e.charCodeAt(a++);if(c>=55296&&c<=56319&&a<i){const l=e.charCodeAt(a++);(l&64512)==56320?n.push(((c&1023)<<10)+(l&1023)+65536):(n.push(c),a--)}else n.push(c)}return n}function toHex(e){const n=ucs2decode(e);return n.length===1?n[0].toString(16):null}function codePointAt(e,n){const a=e.length;let i=e.charCodeAt(n),c;return i>=55296&&i<=56319&&a>n+1&&(c=e.charCodeAt(n+1),c>=56320&&c<=57343)?(i-55296)*1024+c-56320+65536:i}function normalizeIcons(e){return Object.keys(e).reduce((n,a)=>{const i=e[a];return!!i.icon?n[i.iconName]=i.icon:n[a]=i,n},{})}function defineIcons(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=a,c=normalizeIcons(n);typeof namespace.hooks.addPack=="function"&&!i?namespace.hooks.addPack(e,normalizeIcons(n)):namespace.styles[e]=_objectSpread2(_objectSpread2({},namespace.styles[e]||{}),c),e==="fas"&&defineIcons("fa",n)}const{styles,shims}=namespace,FAMILY_NAMES=Object.keys(PREFIX_TO_LONG_STYLE),PREFIXES_FOR_FAMILY=FAMILY_NAMES.reduce((e,n)=>(e[n]=Object.keys(PREFIX_TO_LONG_STYLE[n]),e),{});let _defaultUsablePrefix=null,_byUnicode={},_byLigature={},_byOldName={},_byOldUnicode={},_byAlias={};function isReserved(e){return~RESERVED_CLASSES.indexOf(e)}function getIconName(e,n){const a=n.split("-"),i=a[0],c=a.slice(1).join("-");return i===e&&c!==""&&!isReserved(c)?c:null}const build=()=>{const e=i=>reduce(styles,(c,l,f)=>(c[f]=reduce(l,i,{}),c),{});_byUnicode=e((i,c,l)=>(c[3]&&(i[c[3]]=l),c[2]&&c[2].filter(u=>typeof u=="number").forEach(u=>{i[u.toString(16)]=l}),i)),_byLigature=e((i,c,l)=>(i[l]=l,c[2]&&c[2].filter(u=>typeof u=="string").forEach(u=>{i[u]=l}),i)),_byAlias=e((i,c,l)=>{const f=c[2];return i[l]=l,f.forEach(u=>{i[u]=l}),i});const n="far"in styles||config.autoFetchSvg,a=reduce(shims,(i,c)=>{const l=c[0];let f=c[1];const u=c[2];return f==="far"&&!n&&(f="fas"),typeof l=="string"&&(i.names[l]={prefix:f,iconName:u}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:f,iconName:u}),i},{names:{},unicodes:{}});_byOldName=a.names,_byOldUnicode=a.unicodes,_defaultUsablePrefix=getCanonicalPrefix(config.styleDefault,{family:config.familyDefault})};onChange(e=>{_defaultUsablePrefix=getCanonicalPrefix(e.styleDefault,{family:config.familyDefault})});build();function byUnicode(e,n){return(_byUnicode[e]||{})[n]}function byLigature(e,n){return(_byLigature[e]||{})[n]}function byAlias(e,n){return(_byAlias[e]||{})[n]}function byOldName(e){return _byOldName[e]||{prefix:null,iconName:null}}function byOldUnicode(e){const n=_byOldUnicode[e],a=byUnicode("fas",e);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function getDefaultUsablePrefix(){return _defaultUsablePrefix}const emptyCanonicalIcon=()=>({prefix:null,iconName:null,rest:[]});function getFamilyId(e){let n=s;const a=FAMILY_NAMES.reduce((i,c)=>(i[c]="".concat(config.cssPrefix,"-").concat(c),i),{});return L.forEach(i=>{(e.includes(a[i])||e.some(c=>PREFIXES_FOR_FAMILY[i].includes(c)))&&(n=i)}),n}function getCanonicalPrefix(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:a=s}=n,i=PREFIX_TO_STYLE[a][e];if(a===t&&!e)return"fad";const c=STYLE_TO_PREFIX[a][e]||STYLE_TO_PREFIX[a][i],l=e in namespace.styles?e:null;return c||l||null}function moveNonFaClassesToRest(e){let n=[],a=null;return e.forEach(i=>{const c=getIconName(config.cssPrefix,i);c?a=c:i&&n.push(i)}),{iconName:a,rest:n}}function sortedUniqueValues(e){return e.sort().filter((n,a,i)=>i.indexOf(n)===a)}function getCanonicalIcon(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:a=!1}=n;let i=null;const c=Ia.concat(bt$1),l=sortedUniqueValues(e.filter(b=>c.includes(b))),f=sortedUniqueValues(e.filter(b=>!Ia.includes(b))),u=l.filter(b=>(i=b,!P.includes(b))),[m=null]=u,d=getFamilyId(l),h=_objectSpread2(_objectSpread2({},moveNonFaClassesToRest(f)),{},{prefix:getCanonicalPrefix(m,{family:d})});return _objectSpread2(_objectSpread2(_objectSpread2({},h),getDefaultCanonicalPrefix({values:e,family:d,styles,config,canonical:h,givenPrefix:i})),applyShimAndAlias(a,i,h))}function applyShimAndAlias(e,n,a){let{prefix:i,iconName:c}=a;if(e||!i||!c)return{prefix:i,iconName:c};const l=n==="fa"?byOldName(c):{},f=byAlias(i,c);return c=l.iconName||f||c,i=l.prefix||i,i==="far"&&!styles.far&&styles.fas&&!config.autoFetchSvg&&(i="fas"),{prefix:i,iconName:c}}const newCanonicalFamilies=L.filter(e=>e!==s||e!==t),newCanonicalStyles=Object.keys(ga).filter(e=>e!==s).map(e=>Object.keys(ga[e])).flat();function getDefaultCanonicalPrefix(e){const{values:n,family:a,canonical:i,givenPrefix:c="",styles:l={},config:f={}}=e,u=a===t,m=n.includes("fa-duotone")||n.includes("fad"),d=f.familyDefault==="duotone",h=i.prefix==="fad"||i.prefix==="fa-duotone";if(!u&&(m||d||h)&&(i.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(i.prefix="fab"),!i.prefix&&newCanonicalFamilies.includes(a)&&(Object.keys(l).find(v=>newCanonicalStyles.includes(v))||f.autoFetchSvg)){const v=pt.get(a).defaultShortPrefixId;i.prefix=v,i.iconName=byAlias(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||c==="fa")&&(i.prefix=getDefaultUsablePrefix()||"fas"),i}class Library{constructor(){this.definitions={}}add(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];const c=a.reduce(this._pullDefinitions,{});Object.keys(c).forEach(l=>{this.definitions[l]=_objectSpread2(_objectSpread2({},this.definitions[l]||{}),c[l]),defineIcons(l,c[l]);const f=PREFIX_TO_LONG_STYLE[s][l];f&&defineIcons(f,c[l]),build()})}reset(){this.definitions={}}_pullDefinitions(n,a){const i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(c=>{const{prefix:l,iconName:f,icon:u}=i[c],m=u[2];n[l]||(n[l]={}),m.length>0&&m.forEach(d=>{typeof d=="string"&&(n[l][d]=u)}),n[l][f]=u}),n}}let _plugins=[],_hooks={};const providers={},defaultProviderKeys=Object.keys(providers);function registerPlugins(e,n){let{mixoutsTo:a}=n;return _plugins=e,_hooks={},Object.keys(providers).forEach(i=>{defaultProviderKeys.indexOf(i)===-1&&delete providers[i]}),_plugins.forEach(i=>{const c=i.mixout?i.mixout():{};if(Object.keys(c).forEach(l=>{typeof c[l]=="function"&&(a[l]=c[l]),typeof c[l]=="object"&&Object.keys(c[l]).forEach(f=>{a[l]||(a[l]={}),a[l][f]=c[l][f]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(f=>{_hooks[f]||(_hooks[f]=[]),_hooks[f].push(l[f])})}i.provides&&i.provides(providers)}),a}function chainHooks(e,n){for(var a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];return(_hooks[e]||[]).forEach(f=>{n=f.apply(null,[n,...i])}),n}function callHooks(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];(_hooks[e]||[]).forEach(l=>{l.apply(null,a)})}function callProvided(){const e=arguments[0],n=Array.prototype.slice.call(arguments,1);return providers[e]?providers[e].apply(null,n):void 0}function findIconDefinition(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e;const a=e.prefix||getDefaultUsablePrefix();if(n)return n=byAlias(a,n)||n,iconFromMapping(library.definitions,a,n)||iconFromMapping(namespace.styles,a,n)}const library=new Library,noAuto=()=>{config.autoReplaceSvg=!1,config.observeMutations=!1,callHooks("noAuto")},dom={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return IS_DOM?(callHooks("beforeI2svg",e),callProvided("pseudoElements2svg",e),callProvided("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=e;config.autoReplaceSvg===!1&&(config.autoReplaceSvg=!0),config.observeMutations=!0,domready(()=>{autoReplace({autoReplaceSvgRoot:n}),callHooks("watch",e)})}},parse={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:byAlias(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=getCanonicalPrefix(e[0]);return{prefix:a,iconName:byAlias(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(config.cssPrefix,"-"))>-1||e.match(ICON_SELECTION_SYNTAX_PATTERN))){const n=getCanonicalIcon(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||getDefaultUsablePrefix(),iconName:byAlias(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){const n=getDefaultUsablePrefix();return{prefix:n,iconName:byAlias(n,e)||e}}}},api={noAuto,config,dom,parse,library,findIconDefinition,toHtml},autoReplace=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=DOCUMENT}=e;(Object.keys(namespace.styles).length>0||config.autoFetchSvg)&&IS_DOM&&config.autoReplaceSvg&&api.dom.i2svg({node:n})};function domVariants(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(a=>toHtml(a))}}),Object.defineProperty(e,"node",{get:function(){if(!IS_DOM)return;const a=DOCUMENT.createElement("div");return a.innerHTML=e.html,a.children}}),e}function asIcon(e){let{children:n,main:a,mask:i,attributes:c,styles:l,transform:f}=e;if(transformIsMeaningful(f)&&a.found&&!i.found){const{width:u,height:m}=a,d={x:u/m/2,y:.5};c.style=joinStyles(_objectSpread2(_objectSpread2({},l),{},{"transform-origin":"".concat(d.x+f.x/16,"em ").concat(d.y+f.y/16,"em")}))}return[{tag:"svg",attributes:c,children:n}]}function asSymbol(e){let{prefix:n,iconName:a,children:i,attributes:c,symbol:l}=e;const f=l===!0?"".concat(n,"-").concat(config.cssPrefix,"-").concat(a):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_objectSpread2(_objectSpread2({},c),{},{id:f}),children:i}]}]}function makeInlineSvgAbstract(e){const{icons:{main:n,mask:a},prefix:i,iconName:c,transform:l,symbol:f,title:u,maskId:m,titleId:d,extra:h,watchable:b=!1}=e,{width:v,height:_}=a.found?a:n,O=Lt.includes(i),N=[config.replacementClass,c?"".concat(config.cssPrefix,"-").concat(c):""].filter(k=>h.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(h.classes).join(" ");let I={children:[],attributes:_objectSpread2(_objectSpread2({},h.attributes),{},{"data-prefix":i,"data-icon":c,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(_)})};const T=O&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/_*16*.0625,"em")}:{};b&&(I.attributes[DATA_FA_I2SVG]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||nextUniqueId())},children:[u]}),delete I.attributes.title);const E=_objectSpread2(_objectSpread2({},I),{},{prefix:i,iconName:c,main:n,mask:a,maskId:m,transform:l,symbol:f,styles:_objectSpread2(_objectSpread2({},T),h.styles)}),{children:C,attributes:M}=a.found&&n.found?callProvided("generateAbstractMask",E)||{children:[],attributes:{}}:callProvided("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=C,E.attributes=M,f?asSymbol(E):asIcon(E)}function makeLayersTextAbstract(e){const{content:n,width:a,height:i,transform:c,title:l,extra:f,watchable:u=!1}=e,m=_objectSpread2(_objectSpread2(_objectSpread2({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")});u&&(m[DATA_FA_I2SVG]="");const d=_objectSpread2({},f.styles);transformIsMeaningful(c)&&(d.transform=transformForCss({transform:c,startCentered:!0,width:a,height:i}),d["-webkit-transform"]=d.transform);const h=joinStyles(d);h.length>0&&(m.style=h);const b=[];return b.push({tag:"span",attributes:m,children:[n]}),l&&b.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),b}function makeLayersCounterAbstract(e){const{content:n,title:a,extra:i}=e,c=_objectSpread2(_objectSpread2(_objectSpread2({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")}),l=joinStyles(i.styles);l.length>0&&(c.style=l);const f=[];return f.push({tag:"span",attributes:c,children:[n]}),a&&f.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),f}const{styles:styles$1}=namespace;function asFoundIcon(e){const n=e[0],a=e[1],[i]=e.slice(4);let c=null;return Array.isArray(i)?c={tag:"g",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.GROUP)},children:[{tag:"path",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.PRIMARY),fill:"currentColor",d:i[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:c}}const missingIconResolutionMixin={found:!1,width:512,height:512};function maybeNotifyMissing(e,n){!PRODUCTION&&!config.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function findIcon(e,n){let a=n;return n==="fa"&&config.styleDefault!==null&&(n=getDefaultUsablePrefix()),new Promise((i,c)=>{if(a==="fa"){const l=byOldName(e)||{};e=l.iconName||e,n=l.prefix||n}if(e&&n&&styles$1[n]&&styles$1[n][e]){const l=styles$1[n][e];return i(asFoundIcon(l))}maybeNotifyMissing(e,n),i(_objectSpread2(_objectSpread2({},missingIconResolutionMixin),{},{icon:config.showMissingIcons&&e?callProvided("missingIconAbstract")||{}:{}}))})}const noop$1=()=>{},p$2=config.measurePerformance&&PERFORMANCE&&PERFORMANCE.mark&&PERFORMANCE.measure?PERFORMANCE:{mark:noop$1,measure:noop$1},preamble='FA "6.7.2"',begin=e=>(p$2.mark("".concat(preamble," ").concat(e," begins")),()=>end(e)),end=e=>{p$2.mark("".concat(preamble," ").concat(e," ends")),p$2.measure("".concat(preamble," ").concat(e),"".concat(preamble," ").concat(e," begins"),"".concat(preamble," ").concat(e," ends"))};var perf={begin,end};const noop$2=()=>{};function isWatched(e){return typeof(e.getAttribute?e.getAttribute(DATA_FA_I2SVG):null)=="string"}function hasPrefixAndIcon(e){const n=e.getAttribute?e.getAttribute(DATA_PREFIX):null,a=e.getAttribute?e.getAttribute(DATA_ICON):null;return n&&a}function hasBeenReplaced(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(config.replacementClass)}function getMutator(){return config.autoReplaceSvg===!0?mutators.replace:mutators[config.autoReplaceSvg]||mutators.replace}function createElementNS(e){return DOCUMENT.createElementNS("http://www.w3.org/2000/svg",e)}function createElement(e){return DOCUMENT.createElement(e)}function convertSVG(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:a=e.tag==="svg"?createElementNS:createElement}=n;if(typeof e=="string")return DOCUMENT.createTextNode(e);const i=a(e.tag);return Object.keys(e.attributes||[]).forEach(function(l){i.setAttribute(l,e.attributes[l])}),(e.children||[]).forEach(function(l){i.appendChild(convertSVG(l,{ceFn:a}))}),i}function nodeAsComment(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const mutators={replace:function(e){const n=e[0];if(n.parentNode)if(e[1].forEach(a=>{n.parentNode.insertBefore(convertSVG(a),n)}),n.getAttribute(DATA_FA_I2SVG)===null&&config.keepOriginalSource){let a=DOCUMENT.createComment(nodeAsComment(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){const n=e[0],a=e[1];if(~classArray(n).indexOf(config.replacementClass))return mutators.replace(e);const i=new RegExp("".concat(config.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){const l=a[0].attributes.class.split(" ").reduce((f,u)=>(u===config.replacementClass||u.match(i)?f.toSvg.push(u):f.toNode.push(u),f),{toNode:[],toSvg:[]});a[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",l.toNode.join(" "))}const c=a.map(l=>toHtml(l)).join(`
`);n.setAttribute(DATA_FA_I2SVG,""),n.innerHTML=c}};function performOperationSync(e){e()}function perform(e,n){const a=typeof n=="function"?n:noop$2;if(e.length===0)a();else{let i=performOperationSync;config.mutateApproach===MUTATION_APPROACH_ASYNC&&(i=WINDOW.requestAnimationFrame||performOperationSync),i(()=>{const c=getMutator(),l=perf.begin("mutate");e.map(c),l(),a()})}}let disabled=!1;function disableObservation(){disabled=!0}function enableObservation(){disabled=!1}let mo=null;function observe(e){if(!MUTATION_OBSERVER||!config.observeMutations)return;const{treeCallback:n=noop$2,nodeCallback:a=noop$2,pseudoElementsCallback:i=noop$2,observeMutationsRoot:c=DOCUMENT}=e;mo=new MUTATION_OBSERVER(l=>{if(disabled)return;const f=getDefaultUsablePrefix();toArray(l).forEach(u=>{if(u.type==="childList"&&u.addedNodes.length>0&&!isWatched(u.addedNodes[0])&&(config.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&config.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&isWatched(u.target)&&~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(u.attributeName))if(u.attributeName==="class"&&hasPrefixAndIcon(u.target)){const{prefix:m,iconName:d}=getCanonicalIcon(classArray(u.target));u.target.setAttribute(DATA_PREFIX,m||f),d&&u.target.setAttribute(DATA_ICON,d)}else hasBeenReplaced(u.target)&&a(u.target)})}),IS_DOM&&mo.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function disconnect(){mo&&mo.disconnect()}function styleParser(e){const n=e.getAttribute("style");let a=[];return n&&(a=n.split(";").reduce((i,c)=>{const l=c.split(":"),f=l[0],u=l.slice(1);return f&&u.length>0&&(i[f]=u.join(":").trim()),i},{})),a}function classParser(e){const n=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"";let c=getCanonicalIcon(classArray(e));return c.prefix||(c.prefix=getDefaultUsablePrefix()),n&&a&&(c.prefix=n,c.iconName=a),c.iconName&&c.prefix||(c.prefix&&i.length>0&&(c.iconName=byLigature(c.prefix,e.innerText)||byUnicode(c.prefix,toHex(e.innerText))),!c.iconName&&config.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(c.iconName=e.firstChild.data)),c}function attributesParser(e){const n=toArray(e.attributes).reduce((c,l)=>(c.name!=="class"&&c.name!=="style"&&(c[l.name]=l.value),c),{}),a=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return config.autoA11y&&(a?n["aria-labelledby"]="".concat(config.replacementClass,"-title-").concat(i||nextUniqueId()):(n["aria-hidden"]="true",n.focusable="false")),n}function blankMeta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:meaninglessTransform,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function parseMeta(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:a,prefix:i,rest:c}=classParser(e),l=attributesParser(e),f=chainHooks("parseNodeAttributes",{},e);let u=n.styleParser?styleParser(e):[];return _objectSpread2({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:meaninglessTransform,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:u,attributes:l}},f)}const{styles:styles$2}=namespace;function generateMutation(e){const n=config.autoReplaceSvg==="nest"?parseMeta(e,{styleParser:!1}):parseMeta(e);return~n.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)?callProvided("generateLayersText",e,n):callProvided("generateSvgReplacementMutation",e,n)}function getKnownPrefixes(){return[...Ft,...Ia]}function onTree(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!IS_DOM)return Promise.resolve();const a=DOCUMENT.documentElement.classList,i=h=>a.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS,"-").concat(h)),c=h=>a.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS,"-").concat(h)),l=config.autoFetchSvg?getKnownPrefixes():P.concat(Object.keys(styles$2));l.includes("fa")||l.push("fa");const f=[".".concat(LAYERS_TEXT_CLASSNAME,":not([").concat(DATA_FA_I2SVG,"])")].concat(l.map(h=>".".concat(h,":not([").concat(DATA_FA_I2SVG,"])"))).join(", ");if(f.length===0)return Promise.resolve();let u=[];try{u=toArray(e.querySelectorAll(f))}catch{}if(u.length>0)i("pending"),c("complete");else return Promise.resolve();const m=perf.begin("onTree"),d=u.reduce((h,b)=>{try{const v=generateMutation(b);v&&h.push(v)}catch(v){PRODUCTION||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise((h,b)=>{Promise.all(d).then(v=>{perform(v,()=>{i("active"),i("complete"),c("pending"),typeof n=="function"&&n(),m(),h()})}).catch(v=>{m(),b(v)})})}function onNode(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;generateMutation(e).then(a=>{a&&perform([a],n)})}function resolveIcons(e){return function(n){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(n||{}).icon?n:findIconDefinition(n||{});let{mask:c}=a;return c&&(c=(c||{}).icon?c:findIconDefinition(c||{})),e(i,_objectSpread2(_objectSpread2({},a),{},{mask:c}))}}const render=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=meaninglessTransform,symbol:i=!1,mask:c=null,maskId:l=null,title:f=null,titleId:u=null,classes:m=[],attributes:d={},styles:h={}}=n;if(!e)return;const{prefix:b,iconName:v,icon:_}=e;return domVariants(_objectSpread2({type:"icon"},e),()=>(callHooks("beforeDOMElementCreation",{iconDefinition:e,params:n}),config.autoA11y&&(f?d["aria-labelledby"]="".concat(config.replacementClass,"-title-").concat(u||nextUniqueId()):(d["aria-hidden"]="true",d.focusable="false")),makeInlineSvgAbstract({icons:{main:asFoundIcon(_),mask:c?asFoundIcon(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:v,transform:_objectSpread2(_objectSpread2({},meaninglessTransform),a),symbol:i,title:f,maskId:l,titleId:u,extra:{attributes:d,styles:h,classes:m}})))};var ReplaceElements={mixout(){return{icon:resolveIcons(render)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=onTree,e.nodeCallback=onNode,e}}},provides(e){e.i2svg=function(n){const{node:a=DOCUMENT,callback:i=()=>{}}=n;return onTree(a,i)},e.generateSvgReplacementMutation=function(n,a){const{iconName:i,title:c,titleId:l,prefix:f,transform:u,symbol:m,mask:d,maskId:h,extra:b}=a;return new Promise((v,_)=>{Promise.all([findIcon(i,f),d.iconName?findIcon(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[N,I]=O;v([n,makeInlineSvgAbstract({icons:{main:N,mask:I},prefix:f,iconName:i,transform:u,symbol:m,maskId:h,title:c,titleId:l,extra:b,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){let{children:a,attributes:i,main:c,transform:l,styles:f}=n;const u=joinStyles(f);u.length>0&&(i.style=u);let m;return transformIsMeaningful(l)&&(m=callProvided("generateAbstractTransformGrouping",{main:c,transform:l,containerWidth:c.width,iconWidth:c.width})),a.push(m||c.icon),{children:a,attributes:i}}}},Layers={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:a=[]}=n;return domVariants({type:"layer"},()=>{callHooks("beforeDOMElementCreation",{assembler:e,params:n});let i=[];return e(c=>{Array.isArray(c)?c.map(l=>{i=i.concat(l.abstract)}):i=i.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(config.cssPrefix,"-layers"),...a].join(" ")},children:i}]})}}}},LayersCounter={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:a=null,classes:i=[],attributes:c={},styles:l={}}=n;return domVariants({type:"counter",content:e},()=>(callHooks("beforeDOMElementCreation",{content:e,params:n}),makeLayersCounterAbstract({content:e.toString(),title:a,extra:{attributes:c,styles:l,classes:["".concat(config.cssPrefix,"-layers-counter"),...i]}})))}}}},LayersText={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=meaninglessTransform,title:i=null,classes:c=[],attributes:l={},styles:f={}}=n;return domVariants({type:"text",content:e},()=>(callHooks("beforeDOMElementCreation",{content:e,params:n}),makeLayersTextAbstract({content:e,transform:_objectSpread2(_objectSpread2({},meaninglessTransform),a),title:i,extra:{attributes:l,styles:f,classes:["".concat(config.cssPrefix,"-layers-text"),...c]}})))}}},provides(e){e.generateLayersText=function(n,a){const{title:i,transform:c,extra:l}=a;let f=null,u=null;if(IS_IE){const m=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();f=d.width/m,u=d.height/m}return config.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([n,makeLayersTextAbstract({content:n.innerHTML,width:f,height:u,transform:c,title:i,extra:l,watchable:!0})])}}};const CLEAN_CONTENT_PATTERN=new RegExp('"',"ug"),SECONDARY_UNICODE_RANGE=[1105920,1112319],_FONT_FAMILY_WEIGHT_TO_PREFIX=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},{FontAwesome:{normal:"fas",400:"fas"}}),lt),wa),Yt),FONT_FAMILY_WEIGHT_TO_PREFIX=Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((e,n)=>(e[n.toLowerCase()]=_FONT_FAMILY_WEIGHT_TO_PREFIX[n],e),{}),FONT_FAMILY_WEIGHT_FALLBACK=Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((e,n)=>{const a=FONT_FAMILY_WEIGHT_TO_PREFIX[n];return e[n]=a[900]||[...Object.entries(a)][0][1],e},{});function hexValueFromContent(e){const n=e.replace(CLEAN_CONTENT_PATTERN,""),a=codePointAt(n,0),i=a>=SECONDARY_UNICODE_RANGE[0]&&a<=SECONDARY_UNICODE_RANGE[1],c=n.length===2?n[0]===n[1]:!1;return{value:toHex(c?n[0]:n),isSecondary:i||c}}function getPrefix(e,n){const a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(n),c=isNaN(i)?"normal":i;return(FONT_FAMILY_WEIGHT_TO_PREFIX[a]||{})[c]||FONT_FAMILY_WEIGHT_FALLBACK[a]}function replaceForPosition(e,n){const a="".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(n.replace(":","-"));return new Promise((i,c)=>{if(e.getAttribute(a)!==null)return i();const f=toArray(e.children).filter(v=>v.getAttribute(DATA_FA_PSEUDO_ELEMENT)===n)[0],u=WINDOW.getComputedStyle(e,n),m=u.getPropertyValue("font-family"),d=m.match(FONT_FAMILY_PATTERN),h=u.getPropertyValue("font-weight"),b=u.getPropertyValue("content");if(f&&!d)return e.removeChild(f),i();if(d&&b!=="none"&&b!==""){const v=u.getPropertyValue("content");let _=getPrefix(m,h);const{value:O,isSecondary:N}=hexValueFromContent(v),I=d[0].startsWith("FontAwesome");let T=byUnicode(_,O),E=T;if(I){const C=byOldUnicode(O);C.iconName&&C.prefix&&(T=C.iconName,_=C.prefix)}if(T&&!N&&(!f||f.getAttribute(DATA_PREFIX)!==_||f.getAttribute(DATA_ICON)!==E)){e.setAttribute(a,E),f&&e.removeChild(f);const C=blankMeta(),{extra:M}=C;M.attributes[DATA_FA_PSEUDO_ELEMENT]=n,findIcon(T,_).then(k=>{const D=makeInlineSvgAbstract(_objectSpread2(_objectSpread2({},C),{},{icons:{main:k,mask:emptyCanonicalIcon()},prefix:_,iconName:E,extra:M,watchable:!0})),F=DOCUMENT.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=D.map(R=>toHtml(R)).join(`
`),e.removeAttribute(a),i()}).catch(c)}else i()}else i()})}function replace(e){return Promise.all([replaceForPosition(e,"::before"),replaceForPosition(e,"::after")])}function processable(e){return e.parentNode!==document.head&&!~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(DATA_FA_PSEUDO_ELEMENT)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function searchPseudoElements(e){if(IS_DOM)return new Promise((n,a)=>{const i=toArray(e.querySelectorAll("*")).filter(processable).map(replace),c=perf.begin("searchPseudoElements");disableObservation(),Promise.all(i).then(()=>{c(),enableObservation(),n()}).catch(()=>{c(),enableObservation(),a()})})}var PseudoElements={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=searchPseudoElements,e}}},provides(e){e.pseudoElements2svg=function(n){const{node:a=DOCUMENT}=n;config.searchPseudoElements&&searchPseudoElements(a)}}};let _unwatched=!1;var MutationObserver$1={mixout(){return{dom:{unwatch(){disableObservation(),_unwatched=!0}}}},hooks(){return{bootstrap(){observe(chainHooks("mutationObserverCallbacks",{}))},noAuto(){disconnect()},watch(e){const{observeMutationsRoot:n}=e;_unwatched?enableObservation():observe(chainHooks("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const parseTransformString=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((a,i)=>{const c=i.toLowerCase().split("-"),l=c[0];let f=c.slice(1).join("-");if(l&&f==="h")return a.flipX=!0,a;if(l&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(l){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},n)};var PowerTransforms={mixout(){return{parse:{transform:e=>parseTransformString(e)}}},hooks(){return{parseNodeAttributes(e,n){const a=n.getAttribute("data-fa-transform");return a&&(e.transform=parseTransformString(a)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:a,transform:i,containerWidth:c,iconWidth:l}=n;const f={transform:"translate(".concat(c/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(u," ").concat(m," ").concat(d)},b={transform:"translate(".concat(l/2*-1," -256)")},v={outer:f,inner:h,path:b};return{tag:"g",attributes:_objectSpread2({},v.outer),children:[{tag:"g",attributes:_objectSpread2({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:_objectSpread2(_objectSpread2({},a.icon.attributes),v.path)}]}]}}}};const ALL_SPACE={x:0,y:0,width:"100%",height:"100%"};function fillBlack(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function deGroup(e){return e.tag==="g"?e.children:[e]}var Masks={hooks(){return{parseNodeAttributes(e,n){const a=n.getAttribute("data-fa-mask"),i=a?getCanonicalIcon(a.split(" ").map(c=>c.trim())):emptyCanonicalIcon();return i.prefix||(i.prefix=getDefaultUsablePrefix()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:a,attributes:i,main:c,mask:l,maskId:f,transform:u}=n;const{width:m,icon:d}=c,{width:h,icon:b}=l,v=transformForSvg({transform:u,containerWidth:h,iconWidth:m}),_={tag:"rect",attributes:_objectSpread2(_objectSpread2({},ALL_SPACE),{},{fill:"white"})},O=d.children?{children:d.children.map(fillBlack)}:{},N={tag:"g",attributes:_objectSpread2({},v.inner),children:[fillBlack(_objectSpread2({tag:d.tag,attributes:_objectSpread2(_objectSpread2({},d.attributes),v.path)},O))]},I={tag:"g",attributes:_objectSpread2({},v.outer),children:[N]},T="mask-".concat(f||nextUniqueId()),E="clip-".concat(f||nextUniqueId()),C={tag:"mask",attributes:_objectSpread2(_objectSpread2({},ALL_SPACE),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,I]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:deGroup(b)},C]};return a.push(M,{tag:"rect",attributes:_objectSpread2({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(T,")")},ALL_SPACE)}),{children:a,attributes:i}}}},MissingIconIndicator={provides(e){let n=!1;WINDOW.matchMedia&&(n=WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const a=[],i={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=_objectSpread2(_objectSpread2({},c),{},{attributeName:"opacity"}),f={tag:"circle",attributes:_objectSpread2(_objectSpread2({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||f.children.push({tag:"animate",attributes:_objectSpread2(_objectSpread2({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_objectSpread2(_objectSpread2({},l),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_objectSpread2(_objectSpread2({},l),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_objectSpread2(_objectSpread2({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},SvgSymbols={hooks(){return{parseNodeAttributes(e,n){const a=n.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return e.symbol=i,e}}}},plugins=[InjectCSS,ReplaceElements,Layers,LayersCounter,LayersText,PseudoElements,MutationObserver$1,PowerTransforms,Masks,MissingIconIndicator,SvgSymbols];registerPlugins(plugins,{mixoutsTo:api});api.noAuto;api.config;const library$1=api.library;api.dom;api.parse;api.findIconDefinition;api.toHtml;const icon=api.icon;api.layer;api.text;api.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const faChevronUp={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},faMinus={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},faGear={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},faChevronDown={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},faPlus={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const faTrashCan={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const faDiscord={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},faItchIo={prefix:"fab",iconName:"itch-io",icon:[512,512,[],"f83a","M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"]},faBluesky={prefix:"fab",iconName:"bluesky",icon:[512,512,[],"e671","M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"]},faGithub={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};library$1.add(faChevronDown,faChevronUp,faGear,faTrashCan,faPlus,faMinus,faGithub,faItchIo,faDiscord,faBluesky);icon(faChevronDown);icon(faChevronUp);const gear=icon(faGear);icon(faTrashCan);const plugPlus=icon(faPlus),plugMinus=icon(faMinus);icon(faGithub);icon(faItchIo);icon(faDiscord);icon(faBluesky);const fontIcons={gear,plugPlus,plugMinus};function addVarline(){const e=String(nanoid(10)),n=document.createElement("div"),a=document.createElement("input"),i=document.createElement("input"),c=document.createElement("button"),l=document.createElement("button");return n.id="vLine-"+e,n.classList.add("grid-container","varLine"),console.log("Adding",n.id),a.setAttribute("data-name",e),a.name="vName-"+e,a.type="text",a.placeholder="varName",a.required=!0,i.setAttribute("data-value",e),i.name="vVal-"+e,i.type="number",i.placeholder="varValue",i.required=!0,c.appendChild(fontIcons.plugMinus.node[0]),c.title="Remove variable",c.className="delVarBtn",c.onclick=()=>{removeVarline(n)},l.appendChild(fontIcons.plugPlus.node[0]),l.title="Add new variable",l.className="addVarBtn",l.onclick=()=>{var u;const f=document.getElementById(n.id);f&&f.classList.contains("varLine")&&((u=f.parentElement)==null||u.insertBefore(addVarline(),f.nextSibling))},n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(l),n}function removeVarline(e){const n=e.parentElement,a=document.querySelectorAll(".varLine").length||0;if(a){if(a<=1)return;n&&n.removeChild(e)}}const canvas=document.getElementById("graphCanvas"),ctx=canvas.getContext("2d"),defaultColor="#C0C0C0";function graphEquation(equation){var e;const lineColor=((e=document.getElementById("lineColor"))==null?void 0:e.value)??defaultColor;getVars(),ctx.clearRect(0,0,canvas.width,canvas.height),drawAxes(),ctx.beginPath(),ctx.strokeStyle=lineColor;const xStep=.1;for(let x=-10;x<=10;x+=xStep){const y=eval(equation.replace(/x/g,`(${x})`)),canvasX=x*20+canvas.width/2,canvasY=y*-20+canvas.height/2;x===-10?ctx.moveTo(canvasX,canvasY):ctx.lineTo(canvasX,canvasY)}ctx.stroke()}function drawAxes(){var a,i;const e=((a=document.getElementById("xColor"))==null?void 0:a.value)??defaultColor,n=((i=document.getElementById("yColor"))==null?void 0:i.value)??defaultColor;ctx.beginPath(),ctx.strokeStyle=e,ctx.moveTo(0,canvas.height/2),ctx.lineTo(canvas.width,canvas.height/2),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle=n,ctx.moveTo(canvas.width/2,0),ctx.lineTo(canvas.width/2,canvas.height),ctx.stroke()}function resizeCanvas(){var a;const e=(a=document.getElementById("app"))==null?void 0:a.getBoundingClientRect().width,n=3;e?canvas.width=e-n*2:canvas.width=500-n*2,canvas.height=canvas.width*.5625}function getVars(){const e=document.querySelectorAll(".varLine"),n={};return e.forEach(a=>{const i=a.querySelector('input[type="text"]'),c=a.querySelector('input[type="number"]'),l=i.value,f=Number(c.value);n[l]=f}),console.log(n),n}const customVars=document.getElementById("customVars"),graphBtn=document.getElementById("graphBtn"),graphSettingsBtn=document.getElementById("graphSettingsBtn"),pageFooter=document.getElementById("pageFooter");async function fetchTimestamp(){const e=(await __vitePreload(async()=>{const{BUILD_TIMESTAMP:n}=await import("./timestamp-CrAOOX44.js");return{BUILD_TIMESTAMP:n}},[])).BUILD_TIMESTAMP;e&&(pageFooter.innerText="Last built: "+e+" (US/Central)")}customVars.appendChild(addVarline());const expressionInput=document.getElementById("expressionInput");graphBtn.addEventListener("click",()=>{const e=expressionInput.value;graphEquation(e)});window.onload=()=>{graphSettingsBtn.appendChild(fontIcons.gear.node[0]),fetchTimestamp(),resizeCanvas(),drawAxes()};window.onresize=()=>{resizeCanvas(),drawAxes()};
