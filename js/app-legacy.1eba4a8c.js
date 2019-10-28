(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"83d07980"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}a[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"0b42":function(t,e,r){},"0d2e":function(t,e,r){"use strict";var n=r("7626"),a=r.n(n);a.a},"164a":function(t,e,r){t.exports=function(){return new Worker(r.p+"6e3b82a760edb33b5f36.worker.js")}},"2a4e":function(t,e,r){"use strict";var n=r("98f2"),a=r.n(n);a.a},"2c67":function(t,e,r){"use strict";var n=r("2f26"),a=r.n(n);a.a},"2f26":function(t,e,r){},"32fd":function(t,e,r){},4139:function(t,e,r){"use strict";var n=r("0b42"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o=r("f75e"),s=r.n(o),c={name:"App",mounted:function(){var t=this;this.$store.dispatch("init");var e=new s.a({threshold:10});e.start(),window.addEventListener("shake",(function(){t.$store.dispatch("setRandomId")}),!1)}},u=c,l=(r("034f"),r("2877")),d=Object(l["a"])(u,a,i,!1,null,null,null),f=d.exports,p=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t.loaded?r("div",{staticClass:"welcome"},[r("form",{on:{submit:t.submit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.id,expression:"$store.state.id"}],staticClass:"input",attrs:{type:"text",name:"layerId",placeholder:"Enter layer id"},domProps:{value:t.$store.state.id},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"id",e.target.value)}}}),r("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")]),r("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")])])]):t._e(),t.loaded?t._e():r("div",{staticClass:"welcome"},[t._v("loading")]),r("h1",[t._v("Find your layer. Build a background.")]),t.style?r("div",{staticClass:"qube-perspective spin"},[r("ul",{staticClass:"qube no-shading layercube"},[r("li",{staticClass:"front",style:t.style}),r("li",{staticClass:"left",style:t.style}),r("li",{staticClass:"back",style:t.style}),r("li",{staticClass:"right",style:t.style}),r("li",{staticClass:"top",style:t.style}),r("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?r("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},h=[],b=(r("8e6e"),r("ac6a"),r("456d"),r("7514"),r("bd86")),g=r("2f62");function v(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/128c/".concat(t,".png")}function y(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/256c/".concat(t,".png")}function O(t){return new Promise((function(e,r){var n=v(t),a=new Image;a.onload=function(r){return e({id:t,image:a})},a.onerror=function(r){console.error("could not load",t),e(null)},a.crossOrigin="",a.src=n}))}var w={};function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"home",methods:{submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){console.log("random"),this.$store.dispatch("setRandomId"),t.preventDefault()}},computed:P({},Object(g["b"])(["data"]),{},Object(g["c"])(["id"]),{loaded:function(){return this.data.length>0},item:function(){var t=this;return!!this.id&&this.data.find((function(e){return e.layerId===t.id}))},image:function(){return!!this.item&&y(this.item.id)},style:function(){return this.item?"background-image: url(".concat(y(this.item.id),");"):""}}),mounted:function(){}},k=_,x=(r("2c67"),Object(l["a"])(k,m,h,!1,null,"235f60fb",null)),$=x.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.loaded.data&&t.item?r("div",[r("loading"),r("settings"),r("lanvas",{key:t.id})],1):t._e()])},S=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"canvas"},[r("canvas",{ref:"canvas"})])},E=[],z=(r("6c7b"),r("b548"),r("cfca"),r("164a")),I=r.n(z);function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M=null,N=128,B=[],L={name:"lanvas",methods:{draw:function(){this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);for(var t=N*this.scale,e=0;e<B.length;e++){var r=B[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],r[0]-t/2,r[1]-t/2,t,t):this.context.rect(r[0],r[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:F({},Object(g["b"])(["images","item","siblingsFiltered"]),{},Object(g["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){var e=this;M&&M.terminate(),M=new I.a,M.onmessage=function(t){B=t.data,e.draw()};var r=t.map((function(t){return[t.x,t.y]})),n=this.width,a=this.height;M.postMessage({type:"calculate",data:r,width:n,height:a}),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(t){this.draw()}},mounted:function(){w.canvas=this.$refs.canvas}},T=L,U=(r("4139"),Object(l["a"])(T,D,E,!1,null,"0bacdbfa",null)),q=U.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"layerImg"},[r("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[r("img",{attrs:{src:t.layerUrl}})])]),r("div",[r("label",{attrs:{for:"id"}},[t._v("\n      Layer id\n      "),r("span",{staticClass:"dice",on:{click:t.random}},[t._v("🎲")])]),r("input",{attrs:{type:"number",name:"id"},domProps:{value:t.$store.state.id},on:{change:t.updateId}})]),r("div",[r("label",{attrs:{for:"width"}},[t._v("Width")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),r("div",[r("label",{attrs:{for:"height"}},[t._v("Height")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),r("div",[r("label",{attrs:{for:"background"}},[t._v("Background")]),r("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:function(e){t.openColor=!t.openColor}}})]),t.openColor?r("div",{staticClass:"colorBox"},[r("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),r("div",[r("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),r("input",{attrs:{type:"range",min:"1",max:"3000",name:"size"},domProps:{value:t.tooltipNum?t.tooltipNum:t.$store.state.size},on:{input:function(e){t.tooltipNum=e.target.value},change:function(e){t.tooltipNum=null,t.$store.state.size=e.target.value}}})]),r("div",[r("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),r("div",[r("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),t._m(0)])},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"credits"},[t._v("\n    images by redditors of\n    "),r("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    tooling by\n    "),r("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],J=(r("96cf"),r("3b8d")),W=r("c345"),Y=r("21a6");function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null}},components:{Chrome:W["Chrome"]},methods:{inputSize:function(t){console.log(t.target.value)},download:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V(w.canvas);case 2:r=t.sent,Object(Y["saveAs"])(r,"layer.png");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){var e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){var e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:K({},Object(g["b"])(["data","item"]),{},Object(g["c"])(["loaded","size"]),{layerUrl:function(){return v(this.item.id)}})};function V(t){return X.apply(this,arguments)}function X(){return X=Object(J["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return e.toBlob(t)})));case 1:case"end":return t.stop()}}),t)}))),X.apply(this,arguments)}var Z=Q,tt=(r("f521"),Object(l["a"])(Z,A,H,!1,null,"5c7cbaf1",null)),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loaded.data?t._e():r("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():r("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))])])},nt=[];function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?at(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ot={name:"container",computed:it({},Object(g["c"])(["loaded","size"]))},st=ot,ct=(r("0d2e"),Object(l["a"])(st,rt,nt,!1,null,"69638828",null)),ut=ct.exports;function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ft={name:"container",components:{Lanvas:q,Settings:et,Loading:ut},methods:{},watch:{$route:{handler:function(t){var e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:dt({},Object(g["b"])(["data","item","siblingsFiltered"]),{},Object(g["c"])(["loaded","size","id"])),mounted:function(){}},pt=ft,mt=(r("2a4e"),Object(l["a"])(pt,C,S,!1,null,"381c3960",null)),ht=mt.exports;n["a"].use(p["a"]);var bt=new p["a"]({routes:[{path:"/",name:"home",component:$},{path:"/:id",name:"container",component:ht},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),gt=(r("c7c6"),r("55dd"),r("5df3"),r("b2e9"));function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(r,!0).forEach((function(e){Object(b["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ot=[],wt={};n["a"].use(g["a"]);var jt=new g["a"].Store({state:{loaded:{data:!1,images:!1,number:0},id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,e.commit,e.getters,n=e.state,console.log("init"),t.next=4,Object(gt["a"])("dataBig.csv",(function(t){return yt({},t,{x:+t.x,y:+t.y})}));case 4:Ot=t.sent,n.loaded.data=!0,n.id||r("setRandomId");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dispatch,e.commit,r=e.getters,n=e.state,console.log("loadImages"),wt={},n.images=[],a=r.siblingsFiltered,n.loaded.images=!1,i=20,o=r.siblingsFiltered.length,s=regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Math.min(o-e,i),r=Math.min(o-e,i)+e,t.next=4,Promise.all(a.filter((function(t,n){return n>=e&&n<r})).map((function(t){return O(t.id)})));case 4:s=t.sent,s.filter((function(t){return t})).forEach((function(t){n.images.push(t.id),wt[t.id]=t.image})),n.loaded.number=e;case 7:case"end":return t.stop()}}),t)})),c=0;case 10:if(!(c<o)){t.next=15;break}return t.delegateYield(s(c),"t0",12);case 12:c+=i,t.next=10;break;case 15:n.loaded.images=!0;case 16:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){var e=t.dispatch,r=t.getters,n=r.data[parseInt(Math.random()*r.data.length)].layerId;e("setId",n)},setId:function(t,e){t.dispatch,t.commit,t.getters;var r=t.state;console.log("id",e),r.id=e}},getters:{data:function(t){return t.loaded.data?Ot:[]},images:function(t){return t.images.map((function(t){return wt[t]}))},item:function(t,e){return e.data.find((function(e){return e.layerId===t.id}))},siblingsFiltered:function(t,e){return e.siblings.filter((function(e,r){return r<t.size})).reverse()},siblings:function(t,e){var r=e.item,n=r.x,a=r.y;return e.data.map((function(t){var e=Math.hypot(t.x-n,t.y-a);return yt({},t,{distance:e})})).sort((function(t,e){return t.distance-e.distance}))}}});n["a"].config.productionTip=!1,window.store=jt,new n["a"]({router:bt,store:jt,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,r){},7626:function(t,e,r){},"98f2":function(t,e,r){},f521:function(t,e,r){"use strict";var n=r("32fd"),a=r.n(n);a.a}});
//# sourceMappingURL=app-legacy.1eba4a8c.js.map