(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"54946c71"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0d2e":function(t,e,n){"use strict";var r=n("7626"),a=n.n(r);a.a},"164a":function(t,e,n){t.exports=function(){return new Worker(n.p+"5911c828eb897ebd1b73.worker.js")}},"215c":function(t,e,n){},"2a4e":function(t,e,n){"use strict";var r=n("98f2"),a=n.n(r);a.a},4816:function(t,e,n){"use strict";var r=n("4ada"),a=n.n(r);a.a},"4ada":function(t,e,n){},"53b4":function(t,e,n){"use strict";var r=n("ce13"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.background},attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("f75e"),c=n.n(s),u=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"App",computed:d({},Object(u["c"])(["background"])),mounted:function(){var t=this;this.$store.dispatch("init");var e=new c.a({threshold:10});e.start(),window.addEventListener("shake",(function(){t.$store.dispatch("setRandomId")}),!1)}},f=p,h=(n("034f"),n("2877")),m=Object(h["a"])(f,a,o,!1,null,null,null),b=m.exports,g=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("div",{staticClass:"searchBox"},[n("multiselect",{attrs:{value:t.value,options:t.options,placeholder:"Layer name or id",label:"name","track-by":"lid",limit:100,"custom-label":t.customLabel,"options-limit":40,showLabels:!1},on:{input:t.inputSearch,open:t.openSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{staticClass:"option__desc"},[n("img",{staticClass:"option__image",attrs:{src:t.makeUrl(e.option.id),alt:e.option.name}}),n("span",{staticClass:"option__title"},[t._v(t._s(e.option.name))]),n("span",{staticClass:"option__id"},[t._v(t._s(e.option.lid))])])]}}],null,!1,987044702)})],1),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")]),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),t._m(0),t.style?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("Find a layer.")]),n("span",[t._v("Build a background.")])])}];n("28a5"),n("a481"),n("7f7f");function O(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/128c/".concat(t,".png")}function w(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/256c/".concat(t,".png")}function j(t){return new Promise((function(e,n){var r=O(t),a=new Image;a.onload=function(n){return e({id:t,image:a})},a.onerror=function(n){console.error("could not load",t),e({id:t,image:null})},a.crossOrigin="",a.src=r}))}var P={},_=n("8e5f"),k=n.n(_);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={name:"home",components:{Multiselect:k.a},methods:{makeUrl:O,submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){console.log("random");this.$store.dispatch("setRandomId");t.preventDefault()},inputSearch:function(t,e){t&&t.lid&&this.$store.dispatch("setId",t.lid)},openSearch:function(t){console.log(t)},customLabel:function(t){var e=t.name,n=t.lid;return"".concat(e," – ").concat(n)}},computed:C({},Object(u["b"])(["data","item"]),{},Object(u["c"])(["id"]),{options:function(){return this.data.map((function(t){return{name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}}))},value:function(){if(this.item){var t=this.item;return{name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}}return null},loaded:function(){return this.data.length>0},style:function(){return this.item?"background-image: url(".concat(w(this.item.id),");"):""}}),mounted:function(){}},S=$,D=(n("60bc"),n("4816"),Object(h["a"])(S,v,y,!1,null,"39c640de",null)),E=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data&&t.item?n("div",[n("loading"),n("settings"),n("lanvas",{key:t.id})],1):t._e()])},z=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas",on:{mousemove:t.mousemove,click:t.click}})])},M=[],F=(n("6c7b"),n("164a")),B=n.n(F);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T=null,U=128,q=[],A={name:"lanvas",methods:{click:function(t){this.$store.state.hover&&(this.$router.push("/"+this.$store.state.hover),t.preventDefault())},mousemove:function(t){var e=this.width/window.innerWidth,n=(this.height,window.innerHeight,Math.max(e,1)),r=parseInt(t.x*n),a=parseInt(t.y*n);T&&T.postMessage({type:"find",x:r,y:a})},draw:function(){this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);for(var t=U*this.scale,e=0;e<q.length;e++){var n=q[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],n[0]-t/2,n[1]-t/2,t,t):this.context.rect(n[0],n[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:N({},Object(u["b"])(["images","item","siblingsFiltered"]),{},Object(u["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){var e=this;T&&T.terminate(),T=new B.a,T.onmessage=function(t){if("points"===t.data.type&&(q=t.data.points,e.draw()),"find"===t.data.type){var n=t.data.index,r=e.siblingsFiltered[n].layerId;e.$store.state.hover=r}};var n=t.map((function(t){return[t.x,t.y]})),r=this.width,a=this.height;T.postMessage({type:"calculate",data:n,width:r,height:a}),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(t){this.draw()}},mounted:function(){P.canvas=this.$refs.canvas}},H=A,W=(n("53b4"),Object(h["a"])(H,R,M,!1,null,"c5da6fb2",null)),J=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:{closed:t.closed},on:{click:t.closeColor}},[n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:t.toggleClick}})]),t.openColor?n("div",{staticClass:"colorBox",on:{click:t.cancelClick}},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"100",step:"0.1",name:"size"},domProps:{value:t.numScale.invert(t.tooltipNum?t.tooltipNum:t.$store.state.size)},on:{input:function(e){t.tooltipNum=t.numScale(e.target.value)},change:function(e){t.tooltipNum=null,t.$store.state.size=t.numScale(e.target.value)}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),t._m(0),n("div",[n("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),n("div",{staticClass:"menu"},[n("div",{staticClass:"hamburger",class:{arrow:!t.closed},on:{click:function(e){t.closed=!t.closed}}},[n("div",{staticClass:"a"}),n("div",{staticClass:"b"}),n("div",{staticClass:"c"})]),n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"searchIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"}})])])],1)])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[t._v("\n    Images by redditors of\n    "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    Tooling by\n    "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],K=(n("7514"),n("96cf"),n("3b8d")),Q=n("c345"),V=n("21a6"),X=n("789b");function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var et={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null,closed:!1}},components:{Chrome:Q["Chrome"]},methods:{cancelClick:function(t){t.stopPropagation(),this.openColor=!0},toggleClick:function(t){t.stopPropagation(),this.openColor=!this.openColor},inputSize:function(t){console.log(t.target.value)},closeColor:function(t){this.openColor&&(this.openColor=!1)},download:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,nt(P.canvas);case 2:n=t.sent,Object(V["saveAs"])(n,"layer.png");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){var e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){var e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:tt({},Object(u["b"])(["data","siblingsFiltered"]),{},Object(u["c"])(["loaded","size","hover"]),{item:function(){var t=this;return this.siblingsFiltered.find((function(e){return e.layerId===t.hover}))},layerUrl:function(){return O(this.item.id)},numScale:function(){return Object(X["a"])().exponent(2).domain([1,100]).rangeRound([10,3e3]).nice()}})};function nt(t){return rt.apply(this,arguments)}function rt(){return rt=Object(K["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return e.toBlob(t)})));case 1:case"end":return t.stop()}}),t)}))),rt.apply(this,arguments)}var at=et,ot=(n("b41e"),Object(h["a"])(at,Y,G,!1,null,"4ddfbec9",null)),it=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))])])},ct=[];function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt={name:"container",computed:lt({},Object(u["c"])(["loaded","size"]))},pt=dt,ft=(n("0d2e"),Object(h["a"])(pt,st,ct,!1,null,"69638828",null)),ht=ft.exports;function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt={name:"container",components:{Lanvas:J,Settings:it,Loading:ht},methods:{},watch:{$route:{handler:function(t){var e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:bt({},Object(u["b"])(["data","item","siblingsFiltered"]),{},Object(u["c"])(["loaded","size","id"])),mounted:function(){}},vt=gt,yt=(n("2a4e"),Object(h["a"])(vt,I,z,!1,null,"381c3960",null)),Ot=yt.exports;r["a"].use(g["a"]);var wt=new g["a"]({routes:[{path:"/",name:"home",component:E},{path:"/:id",name:"container",component:Ot},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),jt=(n("c7c6"),n("55dd"),n("5df3"),n("b2e9"));function Pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Pt(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var kt=[],xt={};r["a"].use(u["a"]);var Ct=new u["a"].Store({state:{loaded:{data:!1,images:!1,number:0},hover:null,id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#000000",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,e.commit,e.getters,r=e.state,console.log("init"),t.next=4,Object(jt["a"])("dataBig.csv",(function(t){return _t({},t,{x:+t.x,y:+t.y})}));case 4:kt=t.sent,r.loaded.data=!0,r.id||n("setRandomId");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dispatch,e.commit,n=e.getters,r=e.state,console.log("loadImages"),xt={},r.images=[],a=n.siblingsFiltered,r.loaded.images=!1,o=20,i=n.siblingsFiltered.length,s=regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Math.min(i-e,o),n=Math.min(i-e,o)+e,t.next=4,Promise.all(a.filter((function(t,r){return r>=e&&r<n})).map((function(t){return j(t.id)})));case 4:s=t.sent,s.forEach((function(t){r.images.push(t.id),xt[t.id]=t.image})),r.loaded.number=e;case 7:case"end":return t.stop()}}),t)})),c=0;case 10:if(!(c<i)){t.next=15;break}return t.delegateYield(s(c),"t0",12);case 12:c+=o,t.next=10;break;case 15:r.loaded.images=!0;case 16:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){var e=t.dispatch,n=t.getters,r=n.data[parseInt(Math.random()*n.data.length)].layerId;return e("setId",r),r},setId:function(t,e){t.dispatch,t.commit,t.getters;var n=t.state;console.log("id",e),n.id=e}},getters:{data:function(t){return t.loaded.data?kt:[]},images:function(t){return t.images.map((function(t){return xt[t]}))},item:function(t,e){return e.data.find((function(e){return e.layerId===t.id}))},siblingsFiltered:function(t,e){return e.siblings.filter((function(e,n){return n<t.size})).reverse()},siblings:function(t,e){var n=e.item,r=n.x,a=n.y;return e.data.map((function(t){var e=Math.hypot(t.x-r,t.y-a);return _t({},t,{distance:e})})).sort((function(t,e){return t.distance-e.distance}))}}});r["a"].config.productionTip=!1,window.store=Ct,new r["a"]({router:wt,store:Ct,render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){},7626:function(t,e,n){},"98f2":function(t,e,n){},b41e:function(t,e,n){"use strict";var r=n("215c"),a=n.n(r);a.a},ce13:function(t,e,n){}});
//# sourceMappingURL=app-legacy.725b790d.js.map