(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"8fbb72dc"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"164a":function(t,e,n){t.exports=function(){return new Worker(n.p+"ddeb6f513b9aca160333.worker.js")}},"2fb4":function(t,e,n){"use strict";var r=n("a283"),a=n.n(r);a.a},4882:function(t,e,n){},"507b":function(t,e,n){"use strict";var r=n("b627"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("f75e"),s=n.n(o),c={name:"App",mounted:function(){var t=this;this.$store.dispatch("init");var e=new s.a({threshold:10});e.start(),window.addEventListener("shake",(function(){t.$store.dispatch("setRandomId")}),!1)}},u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,null,null),p=d.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("div",{staticClass:"searchBox"},[n("multiselect",{attrs:{value:t.value,options:t.options,placeholder:"Layer name or id",label:"name","track-by":"lid",limit:40,"custom-label":t.customLabel,"options-limit":40,showLabels:!1},on:{input:t.inputSearch,open:t.openSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{staticClass:"option__desc"},[n("img",{staticClass:"option__image",attrs:{src:t.makeUrl(e.option.id),alt:e.option.name}}),n("span",{staticClass:"option__title"},[t._v(t._s(e.option.name))]),n("span",{staticClass:"option__id"},[t._v(t._s(e.option.lid))])])]}}],null,!1,987044702)})],1),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")]),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),t._m(0),t.style?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("Find a layer.")]),n("span",[t._v("Build a background.")])])}],b=(n("8e6e"),n("ac6a"),n("456d"),n("28a5"),n("a481"),n("bd86")),v=(n("7f7f"),n("2f62"));function g(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/128c/".concat(t,".png")}function y(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/256c/".concat(t,".png")}function O(t){return new Promise((function(e,n){var r=g(t),a=new Image;a.onload=function(n){return e({id:t,image:a})},a.onerror=function(n){console.error("could not load",t),e(null)},a.crossOrigin="",a.src=r}))}var w={},j=n("8e5f"),_=n.n(j);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"home",components:{Multiselect:_.a},methods:{makeUrl:g,submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){console.log("random");this.$store.dispatch("setRandomId");t.preventDefault()},inputSearch:function(t,e){t&&t.lid&&this.$store.dispatch("setId",t.lid)},openSearch:function(t){console.log(t)},customLabel:function(t){var e=t.name,n=t.lid;return"".concat(e," – ").concat(n)}},computed:k({},Object(v["b"])(["data","item"]),{},Object(v["c"])(["id"]),{options:function(){return this.data.map((function(t){return{name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}}))},value:function(){if(this.item){var t=this.item;return{name:t.url.split("/")[1].replace(/_/g," "),lid:t.layerId,id:t.id}}return null},loaded:function(){return this.data.length>0},style:function(){return this.item?"background-image: url(".concat(y(this.item.id),");"):""}}),mounted:function(){}},$=x,C=(n("60bc"),n("80f6"),Object(l["a"])($,m,h,!1,null,"97cb8d5c",null)),S=C.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data&&t.item?n("div",[n("loading"),n("settings"),n("lanvas",{key:t.id})],1):t._e()])},E=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas"})])},z=[],R=(n("6c7b"),n("b548"),n("cfca"),n("164a")),F=n.n(R);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B=null,N=128,U=[],T={name:"lanvas",methods:{draw:function(){this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);for(var t=N*this.scale,e=0;e<U.length;e++){var n=U[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],n[0]-t/2,n[1]-t/2,t,t):this.context.rect(n[0],n[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:M({},Object(v["b"])(["images","item","siblingsFiltered"]),{},Object(v["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){var e=this;B&&B.terminate(),B=new F.a,B.onmessage=function(t){U=t.data,e.draw()};var n=t.map((function(t){return[t.x,t.y]})),r=this.width,a=this.height;B.postMessage({type:"calculate",data:n,width:r,height:a}),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(t){this.draw()}},mounted:function(){w.canvas=this.$refs.canvas}},q=T,A=(n("2fb4"),Object(l["a"])(q,I,z,!1,null,"16f0bcd6",null)),H=A.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"layerImg"},[n("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[n("img",{attrs:{src:t.layerUrl}})])]),n("div",[n("label",{attrs:{for:"id"}},[t._v("\n      Layer id\n      "),n("span",{staticClass:"dice",on:{click:t.random}},[t._v("🎲")])]),n("input",{attrs:{type:"number",name:"id"},domProps:{value:t.$store.state.id},on:{change:t.updateId}})]),n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:function(e){t.openColor=!t.openColor}}})]),t.openColor?n("div",{staticClass:"colorBox"},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"3000",name:"size"},domProps:{value:t.tooltipNum?t.tooltipNum:t.$store.state.size},on:{input:function(e){t.tooltipNum=e.target.value},change:function(e){t.tooltipNum=null,t.$store.state.size=e.target.value}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),n("div",[n("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),t._m(0)])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[t._v("\n    images by redditors of\n    "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    tooling by\n    "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],Y=(n("96cf"),n("3b8d")),G=n("c345"),K=n("21a6");function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null}},components:{Chrome:G["Chrome"]},methods:{inputSize:function(t){console.log(t.target.value)},download:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z(w.canvas);case 2:n=t.sent,Object(K["saveAs"])(n,"layer.png");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){var e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){var e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:V({},Object(v["b"])(["data","item"]),{},Object(v["c"])(["loaded","size"]),{layerUrl:function(){return g(this.item.id)}})};function Z(t){return tt.apply(this,arguments)}function tt(){return tt=Object(Y["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return e.toBlob(t)})));case 1:case"end":return t.stop()}}),t)}))),tt.apply(this,arguments)}var et=X,nt=(n("507b"),Object(l["a"])(et,J,W,!1,null,"562a3026",null)),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))])])},it=[];function ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ot(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ct={name:"container",computed:st({},Object(v["c"])(["loaded","size"]))},ut=ct,lt=(n("797e"),Object(l["a"])(ut,at,it,!1,null,"45d73512",null)),dt=lt.exports;function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var mt={name:"container",components:{Lanvas:H,Settings:rt,Loading:dt},methods:{},watch:{$route:{handler:function(t){var e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:ft({},Object(v["b"])(["data","item","siblingsFiltered"]),{},Object(v["c"])(["loaded","size","id"])),mounted:function(){}},ht=mt,bt=(n("812e"),Object(l["a"])(ht,D,E,!1,null,"44cf5a28",null)),vt=bt.exports;r["a"].use(f["a"]);var gt=new f["a"]({routes:[{path:"/",name:"home",component:S},{path:"/:id",name:"container",component:vt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),yt=(n("c7c6"),n("55dd"),n("7514"),n("5df3"),n("b2e9"));function Ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ot(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var jt=[],_t={};r["a"].use(v["a"]);var Pt=new v["a"].Store({state:{loaded:{data:!1,images:!1,number:0},id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,e.commit,e.getters,r=e.state,console.log("init"),t.next=4,Object(yt["a"])("dataBig.csv",(function(t){return wt({},t,{x:+t.x,y:+t.y})}));case 4:jt=t.sent,r.loaded.data=!0,r.id||n("setRandomId");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dispatch,e.commit,n=e.getters,r=e.state,console.log("loadImages"),_t={},r.images=[],a=n.siblingsFiltered,r.loaded.images=!1,i=20,o=n.siblingsFiltered.length,s=regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Math.min(o-e,i),n=Math.min(o-e,i)+e,t.next=4,Promise.all(a.filter((function(t,r){return r>=e&&r<n})).map((function(t){return O(t.id)})));case 4:s=t.sent,s.filter((function(t){return t})).forEach((function(t){r.images.push(t.id),_t[t.id]=t.image})),r.loaded.number=e;case 7:case"end":return t.stop()}}),t)})),c=0;case 10:if(!(c<o)){t.next=15;break}return t.delegateYield(s(c),"t0",12);case 12:c+=i,t.next=10;break;case 15:r.loaded.images=!0;case 16:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){var e=t.dispatch,n=t.getters,r=n.data[parseInt(Math.random()*n.data.length)].layerId;return e("setId",r),r},setId:function(t,e){t.dispatch,t.commit,t.getters;var n=t.state;console.log("id",e),n.id=e}},getters:{data:function(t){return t.loaded.data?jt:[]},images:function(t){return t.images.map((function(t){return _t[t]}))},item:function(t,e){return e.data.find((function(e){return e.layerId===t.id}))},siblingsFiltered:function(t,e){return e.siblings.filter((function(e,n){return n<t.size})).reverse()},siblings:function(t,e){var n=e.item,r=n.x,a=n.y;return e.data.map((function(t){var e=Math.hypot(t.x-r,t.y-a);return wt({},t,{distance:e})})).sort((function(t,e){return t.distance-e.distance}))}}});r["a"].config.productionTip=!1,window.store=Pt,new r["a"]({router:gt,store:Pt,render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,n){},"797e":function(t,e,n){"use strict";var r=n("b23f"),a=n.n(r);a.a},"80f6":function(t,e,n){"use strict";var r=n("4882"),a=n.n(r);a.a},"812e":function(t,e,n){"use strict";var r=n("ed9b"),a=n.n(r);a.a},a283:function(t,e,n){},b23f:function(t,e,n){},b627:function(t,e,n){},ed9b:function(t,e,n){}});
//# sourceMappingURL=app-legacy.ddc07bf1.js.map