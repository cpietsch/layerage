(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"54946c71"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"0d2e":function(t,e,n){"use strict";var r=n("7626"),i=n.n(r);i.a},"164a":function(t,e,n){t.exports=function(){return new Worker(n.p+"d38e1aa2501b36437f78.worker.js")}},"1df9":function(t,e,n){},2255:function(t,e,n){"use strict";var r=n("b6ae"),i=n.n(r);i.a},"2a4e":function(t,e,n){"use strict";var r=n("98f2"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.background},attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("ac6a"),n("ade3")),s=n("f75e"),c=n.n(s),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"App",computed:d({},Object(l["c"])(["background"]),{},Object(l["b"])(["isMobile"])),mounted:function(){if(this.$store.dispatch("init"),this.isMobile){var t=new c.a({threshold:10});t.start(),window.addEventListener("shake",()=>{this.$store.dispatch("setRandomId")},!1)}}},h=p,f=(n("034f"),n("2877")),m=Object(f["a"])(h,i,a,!1,null,null,null),b=m.exports,g=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("div",{staticClass:"searchBox"},[n("multiselect",{attrs:{value:t.item,options:t.data,placeholder:"Layer name or id",label:"name","track-by":"id",limit:100,"custom-label":t.customLabel,"options-limit":40,showLabels:!1},on:{input:t.inputSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{staticClass:"option__desc"},[n("img",{staticClass:"option__image",attrs:{src:t.makeUrl(e.option.id),alt:e.option.title}}),n("span",{staticClass:"option__title"},[t._v(t._s(e.option.title))]),n("span",{staticClass:"option__id"},[t._v(t._s(e.option.layerId))])])]}}],null,!1,959183025)})],1),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")]),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),t._m(0),t.item?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("Find a layer.")]),n("span",[t._v("Build a background.")])])}];function O(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/128c/${t}.png`}function w(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/256c/${t}.png`}function j(t){return new Promise((e,n)=>{const r=O(t),i=new Image;i.onload=n=>e({id:t,image:i}),i.onerror=n=>{console.error("could not load",t),e({id:t,image:null})},i.crossOrigin="",i.src=r})}const _={};var P=n("8e5f"),k=n.n(P);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"home",components:{Multiselect:k.a},methods:{makeUrl:O,submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){this.$store.dispatch("setRandomId"),t.preventDefault()},inputSearch(t,e){t&&t.id&&this.$store.dispatch("setId",t.layerId)},customLabel(t){let e=t.title,n=t.layerId;return`${e} – ${n}`}},computed:$({},Object(l["b"])(["data","item"]),{},Object(l["c"])(["id"]),{loaded:function(){return this.data.length>0},style:function(){return`background-image: url(${w(this.item.id)});`}}),mounted:function(){}},S=x,D=(n("60bc"),n("6d2c"),Object(f["a"])(S,v,y,!1,null,"38c2d990",null)),I=D.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data&&t.item?n("div",[n("loading"),n("settings"),n("lanvas",{key:t.id})],1):t._e()])},E=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas",on:{click:t.click}})])},B=[],F=n("164a"),L=n.n(F);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}let T=null;const U=128;let H=[];var q={name:"lanvas",methods:{calculate:function(t){T&&T.terminate(),T=new L.a,T.onmessage=t=>{if("points"===t.data.type&&(H=t.data.points,this.draw()),"find"===t.data.type){const e=t.data.index,n=this.siblingsFiltered[e].layerId;this.$store.state.hover=n}};const e=this.siblingsFiltered.map(t=>[t.x,t.y]),n=this.width,r=this.height;T.postMessage({type:"calculate",data:e,width:n,height:r})},click:function(t){const e=this.width/window.innerWidth,n=(this.height,window.innerHeight,Math.max(e,1)),r=parseInt(t.x*n),i=parseInt(t.y*n);T&&T.postMessage({type:"find",x:r,y:i})},draw:function(){console.log("draw"),this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);const t=U*this.scale;for(let e=0;e<H.length;e++){const n=H[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],n[0]-t/2,n[1]-t/2,t,t):this.context.rect(n[0],n[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:R({},Object(l["b"])(["images","item","siblingsFiltered"]),{},Object(l["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){this.calculate(),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(){this.draw()},width:function(){this.calculate()},height:function(){this.calculate()}},mounted:function(){_.canvas=this.$refs.canvas}},A=q,W=(n("8a6e"),Object(f["a"])(A,M,B,!1,null,"06693ee3",null)),J=W.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:{closed:t.closed},on:{click:t.closeColor}},[t.hover?n("div",{staticClass:"layerInfo"},[n("div",{staticClass:"left"},[n("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[n("img",{attrs:{src:t.layerUrl}})])]),n("div",{staticClass:"right"},[n("div",[t._v(t._s(t.item.url.split("/")[1].replace(/_/g," ")))]),n("div",[t._v(t._s(t.item.author))]),n("router-link",{attrs:{to:"/"+t.item.layerId}},[t._v(t._s(t.item.layerId))])],1)]):t._e(),n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:t.toggleClick}})]),t.openColor?n("div",{staticClass:"colorBox",on:{click:t.cancelClick}},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"100",step:"0.1",name:"size"},domProps:{value:t.numScale.invert(t.tooltipNum?t.tooltipNum:t.$store.state.size)},on:{input:function(e){t.tooltipNum=t.numScale(e.target.value)},change:function(e){t.tooltipNum=null,t.$store.state.size=t.numScale(e.target.value)}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),t._m(0),n("div",{staticClass:"menu"},[n("div",{staticClass:"hamburger",class:{arrow:!t.closed},on:{click:function(e){t.closed=!t.closed}}},[n("div",{staticClass:"a"}),n("div",{staticClass:"b"}),n("div",{staticClass:"c"})]),n("svg",{staticClass:"saveIcon",attrs:{viewBox:"0 0 24 24",alt:"Download Background"},on:{click:t.download}},[n("path",{attrs:{d:"M8 6h-5v15h18v-15h-5v-3h8v21h-24v-21h8v3zm5 6h4l-5 6-5-6h4v-12h2v12z"}})]),n("svg",{staticClass:"randomIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:t.random}},[n("path",{attrs:{d:"M10.848 15.932c-.399.781-.732 1.599-1.003 2.447-1.14-2.552-3.109-4.676-5.912-6.267l-1.463 2.656-2.47-5.881 6.33-1.126-1.433 2.601c2.606 1.472 4.593 3.349 5.951 5.57zm9.219-3.819l1.463 2.655 2.47-5.881-6.33-1.126 1.433 2.601c-5.339 3.017-8.103 7.72-8.103 13.638h2c0-5.144 2.405-9.241 7.067-11.887zm-8.025-12.113l-4.042 5h3v7.762c.352.409.684.831.991 1.269.312-.443.65-.87 1.009-1.286v-7.745h3l-3.958-5z"}})]),n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"searchIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"}})])])],1)])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[n("div",{staticClass:"mobileHint"},[t._v("Shake ya phone for a random layer")]),n("div",[t._v("\n        Images by redditors of\n        "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")])]),n("div",[t._v("\n        Tooling by\n        "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])])}],Q=n("1da1"),V=n("c345"),X=n("21a6"),Y=n("789b");function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var et={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null,closed:!1}},components:{Chrome:V["Chrome"]},methods:{cancelClick:function(t){t.stopPropagation(),this.openColor=!0},toggleClick:function(t){t.stopPropagation(),this.openColor=!this.openColor},inputSize:function(t){console.log(t.target.value)},closeColor:function(t){this.openColor&&(this.openColor=!1)},download:function(){var t=Object(Q["a"])((function*(t){const e=yield nt(_.canvas);Object(X["saveAs"])(e,"layer.png")}));function e(e){return t.apply(this,arguments)}return e}(),updateBackground:function(t){this.$store.state.background=t.hex},random:function(t){const e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:tt({},Object(l["b"])(["data","siblingsFiltered"]),{},Object(l["c"])(["loaded","size","hover"]),{item:function(){return this.siblingsFiltered.find(t=>t.layerId===this.hover)},layerUrl:function(){return O(this.item.id)},numScale:function(){return Object(Y["a"])().exponent(2).domain([1,100]).rangeRound([10,3e3]).nice()}})};function nt(t){return rt.apply(this,arguments)}function rt(){return rt=Object(Q["a"])((function*(t){return new Promise(e=>t.toBlob(e))})),rt.apply(this,arguments)}var it=et,at=(n("2255"),Object(f["a"])(it,G,K,!1,null,"2d407a0a",null)),ot=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))])])},ct=[];function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt={name:"container",computed:ut({},Object(l["c"])(["loaded","size"]))},pt=dt,ht=(n("0d2e"),Object(f["a"])(pt,st,ct,!1,null,"69638828",null)),ft=ht.exports;function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt={name:"container",components:{Lanvas:J,Settings:ot,Loading:ft},methods:{},watch:{$route:{handler:function(t){const e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:bt({},Object(l["b"])(["data","item","siblingsFiltered"]),{},Object(l["c"])(["loaded","size","id"])),mounted:function(){}},vt=gt,yt=(n("2a4e"),Object(f["a"])(vt,z,E,!1,null,"381c3960",null)),Ot=yt.exports;r["a"].use(g["a"]);var wt=new g["a"]({routes:[{path:"/",name:"home",component:I},{path:"/:id",name:"container",component:Ot},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),jt=(n("55dd"),n("28a5"),n("a481"),n("b2e9"));function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}let kt=[],Ct={};r["a"].use(l["a"]);var $t=new l["a"].Store({state:{loaded:{data:!1,images:!1,number:0},hover:null,id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#000000",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(Q["a"])((function*(t){let e=t.dispatch,n=(t.commit,t.getters,t.state);console.log("init"),n.loaded.data=!1,kt=yield Object(jt["a"])("dataBig.csv",t=>Pt({},t,{x:+t.x,y:+t.y,title:t.url.split("/")[1].replace(/_/g," ")})),n.loaded.data=!0,n.id||e("setRandomId")}));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(Q["a"])((function*(t){t.dispatch,t.commit;let e=t.getters,n=t.state;console.log("loadImages"),Ct={},n.images=[];const r=e.siblingsFiltered;n.loaded.images=!1;const i=20,a=e.siblingsFiltered.length;for(let o=0;o<a;o+=i){Math.min(a-o,i);const t=Math.min(a-o,i)+o,e=yield Promise.all(r.filter((e,n)=>n>=o&&n<t).map(t=>j(t.id)));e.forEach(t=>{n.images.push(t.id),Ct[t.id]=t.image}),n.loaded.number=o}n.loaded.images=!0}));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){let e=t.dispatch,n=t.getters;const r=n.data[parseInt(Math.random()*n.data.length)].layerId;return e("setId",r),r},setId:function(t,e){t.dispatch,t.commit,t.getters;let n=t.state;console.log("id",e),n.id=e}},getters:{isMobile:function(t){return t.width/window.devicePixelRatio<700},data:function(t){return t.loaded.data?kt:[]},images:function(t){return t.images.map(t=>Ct[t])},item:function(t,e){return e.data.find(e=>e.layerId===t.id)},siblingsFiltered:function(t,e){return e.siblings.filter((e,n)=>n<t.size).reverse()},siblings:function(t,e){const n=e.item,r=n.x,i=n.y;return e.data.map(t=>{const e=Math.hypot(t.x-r,t.y-i);return Pt({},t,{distance:e})}).sort((t,e)=>t.distance-e.distance)}}});r["a"].config.productionTip=!1,window.store=$t,new r["a"]({router:wt,store:$t,render:t=>t(b)}).$mount("#app")},"64a9":function(t,e,n){},"6d2c":function(t,e,n){"use strict";var r=n("1df9"),i=n.n(r);i.a},7626:function(t,e,n){},"80bf":function(t,e,n){},"8a6e":function(t,e,n){"use strict";var r=n("80bf"),i=n.n(r);i.a},"98f2":function(t,e,n){},b6ae:function(t,e,n){}});
//# sourceMappingURL=app.89f35e6e.js.map