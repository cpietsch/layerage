(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8fbb72dc"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"164a":function(t,e,n){t.exports=function(){return new Worker(n.p+"c4796ef2aeb965edc81d.worker.js")}},"2fb4":function(t,e,n){"use strict";var r=n("a283"),a=n.n(r);a.a},"507b":function(t,e,n){"use strict";var r=n("b627"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("f75e"),s=n.n(i),c={name:"App",mounted:function(){this.$store.dispatch("init");var t=new s.a({threshold:10});t.start(),window.addEventListener("shake",()=>{this.$store.dispatch("setRandomId")},!1)}},l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,null,null),p=d.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("div",{staticClass:"searchBox"},[n("multiselect",{attrs:{value:t.value,options:t.options,placeholder:"Layer name or id",label:"name","track-by":"lid",limit:40,"custom-label":t.customLabel,"options-limit":40,showLabels:!1},on:{input:t.inputSearch,open:t.openSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{staticClass:"option__desc"},[n("img",{staticClass:"option__image",attrs:{src:t.makeUrl(e.option.id),alt:e.option.name}}),n("span",{staticClass:"option__title"},[t._v(t._s(e.option.name))]),n("span",{staticClass:"option__id"},[t._v(t._s(e.option.lid))])])]}}],null,!1,987044702)})],1),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")]),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),t._m(0),t.style?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("Find a layer.")]),n("span",[t._v("Build a background.")])])}],b=(n("ac6a"),n("28a5"),n("a481"),n("ade3")),g=n("2f62");function v(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/128c/${t}.png`}function y(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/256c/${t}.png`}function O(t){return new Promise((e,n)=>{const r=v(t),a=new Image;a.onload=n=>e({id:t,image:a}),a.onerror=n=>{console.error("could not load",t),e(null)},a.crossOrigin="",a.src=r})}const w={};var j=n("8e5f"),_=n.n(j);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={name:"home",components:{Multiselect:_.a},methods:{makeUrl:v,submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){console.log("random");this.$store.dispatch("setRandomId");t.preventDefault()},inputSearch(t,e){t&&t.lid&&this.$store.dispatch("setId",t.lid)},openSearch(t){console.log(t)},customLabel(t){let e=t.name,n=t.lid;return`${e} – ${n}`}},computed:$({},Object(g["b"])(["data","item"]),{},Object(g["c"])(["id"]),{options:function(){return this.data.map(t=>({name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}))},value:function(){if(this.item){const t=this.item;return{name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}}return null},loaded:function(){return this.data.length>0},style:function(){return this.item?`background-image: url(${y(this.item.id)});`:""}}),mounted:function(){}},C=k,x=(n("60bc"),n("e8de"),Object(u["a"])(C,m,h,!1,null,"6e138ef4",null)),S=x.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data&&t.item?n("div",[n("loading"),n("settings"),n("lanvas",{key:t.id})],1):t._e()])},E=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas"})])},z=[],F=(n("b548"),n("cfca"),n("164a")),L=n.n(F);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}let N=null;const R=128;let U=[];var T={name:"lanvas",methods:{draw:function(){this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);const t=R*this.scale;for(let e=0;e<U.length;e++){const n=U[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],n[0]-t/2,n[1]-t/2,t,t):this.context.rect(n[0],n[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:B({},Object(g["b"])(["images","item","siblingsFiltered"]),{},Object(g["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){N&&N.terminate(),N=new L.a,N.onmessage=t=>{U=t.data,this.draw()};const e=t.map(t=>[t.x,t.y]),n=this.width,r=this.height;N.postMessage({type:"calculate",data:e,width:n,height:r}),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(t){this.draw()}},mounted:function(){w.canvas=this.$refs.canvas}},q=T,A=(n("2fb4"),Object(u["a"])(q,I,z,!1,null,"16f0bcd6",null)),H=A.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"layerImg"},[n("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[n("img",{attrs:{src:t.layerUrl}})])]),n("div",[n("label",{attrs:{for:"id"}},[t._v("\n      Layer id\n      "),n("span",{staticClass:"dice",on:{click:t.random}},[t._v("🎲")])]),n("input",{attrs:{type:"number",name:"id"},domProps:{value:t.$store.state.id},on:{change:t.updateId}})]),n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:function(e){t.openColor=!t.openColor}}})]),t.openColor?n("div",{staticClass:"colorBox"},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"3000",name:"size"},domProps:{value:t.tooltipNum?t.tooltipNum:t.$store.state.size},on:{input:function(e){t.tooltipNum=e.target.value},change:function(e){t.tooltipNum=null,t.$store.state.size=e.target.value}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),n("div",[n("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),t._m(0)])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[t._v("\n    images by redditors of\n    "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    tooling by\n    "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],G=n("1da1"),K=n("c345"),Q=n("21a6");function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Y={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null}},components:{Chrome:K["Chrome"]},methods:{inputSize:function(t){console.log(t.target.value)},download:function(){var t=Object(G["a"])((function*(t){const e=yield Z(w.canvas);Object(Q["saveAs"])(e,"layer.png")}));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){const e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){const e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:X({},Object(g["b"])(["data","item"]),{},Object(g["c"])(["loaded","size"]),{layerUrl:function(){return v(this.item.id)}})};function Z(t){return tt.apply(this,arguments)}function tt(){return tt=Object(G["a"])((function*(t){return new Promise(e=>t.toBlob(e))})),tt.apply(this,arguments)}var et=Y,nt=(n("507b"),Object(u["a"])(et,J,W,!1,null,"562a3026",null)),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))])])},ot=[];function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ct={name:"container",computed:st({},Object(g["c"])(["loaded","size"]))},lt=ct,ut=(n("797e"),Object(u["a"])(lt,at,ot,!1,null,"45d73512",null)),dt=ut.exports;function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var mt={name:"container",components:{Lanvas:H,Settings:rt,Loading:dt},methods:{},watch:{$route:{handler:function(t){const e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:ft({},Object(g["b"])(["data","item","siblingsFiltered"]),{},Object(g["c"])(["loaded","size","id"])),mounted:function(){}},ht=mt,bt=(n("812e"),Object(u["a"])(ht,D,E,!1,null,"44cf5a28",null)),gt=bt.exports;r["a"].use(f["a"]);var vt=new f["a"]({routes:[{path:"/",name:"home",component:S},{path:"/:id",name:"container",component:gt},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),yt=(n("55dd"),n("b2e9"));function Ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ot(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}let jt=[],_t={};r["a"].use(g["a"]);var Pt=new g["a"].Store({state:{loaded:{data:!1,images:!1,number:0},id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(G["a"])((function*(t){let e=t.dispatch,n=(t.commit,t.getters,t.state);console.log("init"),jt=yield Object(yt["a"])("dataBig.csv",t=>wt({},t,{x:+t.x,y:+t.y})),n.loaded.data=!0,n.id||e("setRandomId")}));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(G["a"])((function*(t){t.dispatch,t.commit;let e=t.getters,n=t.state;console.log("loadImages"),_t={},n.images=[];const r=e.siblingsFiltered;n.loaded.images=!1;const a=20,o=e.siblingsFiltered.length;for(let i=0;i<o;i+=a){Math.min(o-i,a);const t=Math.min(o-i,a)+i,e=yield Promise.all(r.filter((e,n)=>n>=i&&n<t).map(t=>O(t.id)));e.filter(t=>t).forEach(t=>{n.images.push(t.id),_t[t.id]=t.image}),n.loaded.number=i}n.loaded.images=!0}));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){let e=t.dispatch,n=t.getters;const r=n.data[parseInt(Math.random()*n.data.length)].layerId;return e("setId",r),r},setId:function(t,e){t.dispatch,t.commit,t.getters;let n=t.state;console.log("id",e),n.id=e}},getters:{data:function(t){return t.loaded.data?jt:[]},images:function(t){return t.images.map(t=>_t[t])},item:function(t,e){return e.data.find(e=>e.layerId===t.id)},siblingsFiltered:function(t,e){return e.siblings.filter((e,n)=>n<t.size).reverse()},siblings:function(t,e){const n=e.item,r=n.x,a=n.y;return e.data.map(t=>{const e=Math.hypot(t.x-r,t.y-a);return wt({},t,{distance:e})}).sort((t,e)=>t.distance-e.distance)}}});r["a"].config.productionTip=!1,window.store=Pt,new r["a"]({router:vt,store:Pt,render:t=>t(p)}).$mount("#app")},"64a9":function(t,e,n){},"797e":function(t,e,n){"use strict";var r=n("b23f"),a=n.n(r);a.a},"812e":function(t,e,n){"use strict";var r=n("ed9b"),a=n.n(r);a.a},a283:function(t,e,n){},b23f:function(t,e,n){},b627:function(t,e,n){},d8f9:function(t,e,n){},e8de:function(t,e,n){"use strict";var r=n("d8f9"),a=n.n(r);a.a},ed9b:function(t,e,n){}});
//# sourceMappingURL=app.b80d4035.js.map