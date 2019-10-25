(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"be2d0dfe"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"2c67":function(t,e,n){"use strict";var r=n("2f26"),o=n.n(r);o.a},"2f26":function(t,e,n){},"32fd":function(t,e,n){},"3e8d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=n("f75e"),s=n.n(a),c={name:"App",mounted:function(){this.$store.dispatch("init");var t=new s.a({threshold:10});t.start(),window.addEventListener("shake",()=>{this.$store.dispatch("setRandomId")},!1)}},l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,null,null),p=d.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.id,expression:"$store.state.id"}],staticClass:"input",attrs:{type:"text",name:"layerId",placeholder:"Enter layer id"},domProps:{value:t.$store.state.id},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"id",e.target.value)}}}),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")]),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),n("h1",[t._v("Find your layer. Build a background.")]),t.style?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},m=[],b=(n("ac6a"),n("ade3")),g=n("2f62");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/128c/${t}.png`}function w(t){return`https://vikusviewer.fh-potsdam.de/layers/data/png/256c/${t}.png`}function j(t){return new Promise((e,n)=>{const r=O(t.id),o=new Image;o.onload=n=>e(y({},t,{image:o})),o.onerror=t=>e(null),o.crossOrigin="",o.src=r})}const P={};function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={name:"home",methods:{submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){console.log("random"),this.$store.dispatch("setRandomId"),t.preventDefault()}},computed:$({},Object(g["b"])(["data"]),{},Object(g["c"])(["id"]),{loaded:function(){return this.data.length>0},item:function(){return!!this.id&&this.data.find(t=>t.layerId===this.id)},image:function(){return!!this.item&&w(this.item.id)},style:function(){return this.item?`background-image: url(${w(this.item.id)});`:""}}),mounted:function(){}},x=k,C=(n("2c67"),Object(u["a"])(x,h,m,!1,null,"235f60fb",null)),S=C.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))]),t.loaded.data&&t.item?n("div",[n("settings"),n("lanvas",{key:t.id})],1):t._e()])},E=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas"})])},z=[],F=n("3835"),M=n("5698"),N=n("cfca");function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={name:"lanvas",methods:{download:function(t){},drawPoints:function(){window.devicePixelRatio;console.log(this.width),this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);const t=U*this.scale;if(console.log("draw"),this.points)for(const e of this.points)this.context.drawImage(e.image,e.px*T-t/2,e.py*T-t/2,t,t)},draw:function(){window.devicePixelRatio;console.log(this.width),this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);const t=U*this.scale;if(console.log("draw"),this.points)for(const e of this.points)this.context.drawImage(e.image,e.px*T-t/2,e.py*T-t/2,t,t)}},computed:B({},Object(g["b"])(["images","item","siblingsFiltered"]),{},Object(g["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")},points:function(){console.log(this.width);const t=q({items:this.siblingsFiltered,width:this.width,height:this.height});return this.images.map((e,n)=>B({},e,{px:t[n][0],py:t[n][1]}))}}),watch:{siblingsFiltered:{handler:function(t){this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},points:function(t){console.log(t),this.draw()}},mounted:function(){P.canvas=this.$refs.canvas}};const T=10,U=128;function q(t){let e=t.items,n=t.width,r=t.height;const o=[M["b"](e,t=>+t.x),M["b"](e,t=>+t.y)],i=M["e"]().domain(o[0]).range([0,n/T]),a=M["e"]().domain(o[1]).range([0,r/T]),s=M["c"](e.map(t=>[i(t.x),a(t.y)])),c=s.length;console.log(s);const l=new N["a"](s),u=1,d=e.map(t=>[0,0]);for(let p=0;p<1e3;++p){const t=l.voronoi([0,0,n/T,r/T]);for(let e=0;e<c;e+=2){const n=t.cellPolygon(e>>1);if(null===n)continue;const r=s[e],o=s[e+1],i=M["d"](n),a=Object(F["a"])(i,2),c=a[0],l=a[1];s[e]=r+(c-r)*u,s[e+1]=o+(l-o)*u,d[e>>1][0]=c,d[e>>1][1]=l}l.update()}return d}var A=L,H=(n("800b"),Object(u["a"])(A,I,z,!1,null,"91499858",null)),J=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"layerImg"},[n("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[n("img",{attrs:{src:t.layerUrl}})])]),n("div",[n("label",{attrs:{for:"id"}},[t._v("\n      Layer id\n      "),n("span",{staticClass:"dice",on:{click:t.random}},[t._v("🎲")])]),n("input",{attrs:{type:"number",name:"id"},domProps:{value:t.$store.state.id},on:{change:t.updateId}})]),n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:function(e){t.openColor=!t.openColor}}})]),t.openColor?n("div",{staticClass:"colorBox"},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"3000",name:"size"},domProps:{value:t.tooltipNum?t.tooltipNum:t.$store.state.size},on:{input:function(e){t.tooltipNum=e.target.value},change:function(e){t.tooltipNum=null,t.$store.state.size=e.target.value}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),n("div",[n("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),t._m(0)])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credits"},[t._v("\n    images by redditors of\n    "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    tooling by\n    "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],K=n("1da1"),Q=n("c345"),V=n("21a6");function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null}},components:{Chrome:Q["Chrome"]},methods:{inputSize:function(t){console.log(t.target.value)},download:function(){var t=Object(K["a"])((function*(t){const e=yield tt(P.canvas);Object(V["saveAs"])(e,"layer.png")}));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){const e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){const e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:Y({},Object(g["b"])(["data","item"]),{},Object(g["c"])(["loaded","size"]),{layerUrl:function(){return O(this.item.id)}})};function tt(t){return et.apply(this,arguments)}function et(){return et=Object(K["a"])((function*(t){return new Promise(e=>t.toBlob(e))})),et.apply(this,arguments)}var nt=Z,rt=(n("f521"),Object(u["a"])(nt,W,G,!1,null,"5c7cbaf1",null)),ot=rt.exports;function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var st={name:"container",components:{Lanvas:J,Settings:ot},methods:{},watch:{$route:{handler:function(t){const e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:at({},Object(g["b"])(["data","item","siblingsFiltered"]),{},Object(g["c"])(["loaded","size","id"])),mounted:function(){}},ct=st,lt=(n("914a"),Object(u["a"])(ct,D,E,!1,null,"49803502",null)),ut=lt.exports;r["a"].use(f["a"]);var dt=new f["a"]({routes:[{path:"/",name:"home",component:S},{path:"/:id",name:"container",component:ut},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]});n("55dd");function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}let ht=[],mt=[];r["a"].use(g["a"]);var bt=new g["a"].Store({state:{loaded:{data:!1,images:!1,number:0},id:null,size:200,width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(K["a"])((function*(t){let e=t.dispatch,n=(t.commit,t.getters,t.state);console.log("init"),ht=yield Object(M["a"])("dataBig.csv",t=>ft({},t,{x:+t.x,y:+t.y})),n.loaded.data=!0,n.id||e("setRandomId")}));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(K["a"])((function*(t){t.dispatch,t.commit;let e=t.getters,n=t.state;console.log("loadImages"),mt=[];const r=e.siblingsFiltered;n.loaded.images=!1;const o=20,i=e.siblingsFiltered.length;for(let a=0;a<i;a+=o){Math.min(i-a,o);const t=Math.min(i-a,o)+a,e=yield Promise.all(r.filter((e,n)=>n>=a&&n<t).map(j));e.forEach(t=>t?mt.push(t):""),n.loaded.number=a}return n.loaded.images=!0,mt}));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){let e=t.dispatch,n=t.getters;const r=n.data[parseInt(Math.random()*n.data.length)].layerId;e("setId",r)},setId:function(t,e){t.dispatch,t.commit,t.getters;let n=t.state;console.log("id",e),n.id=e}},getters:{data:function(t){return t.loaded.data?ht:[]},images:function(t){return t.loaded.data&&t.loaded.images?mt:[]},item:function(t,e){return e.data.find(e=>e.layerId===t.id)},siblingsFiltered:function(t,e){return e.siblings.filter((e,n)=>n<t.size).reverse()},siblings:function(t,e){const n=e.item,r=n.x,o=n.y;return e.data.map(t=>{const e=Math.hypot(t.x-r,t.y-o);return ft({},t,{distance:e})}).sort((t,e)=>t.distance-e.distance)}}});r["a"].config.productionTip=!1,window.store=bt,new r["a"]({router:dt,store:bt,render:t=>t(p)}).$mount("#app")},"64a9":function(t,e,n){},"800b":function(t,e,n){"use strict";var r=n("cc78"),o=n.n(r);o.a},"914a":function(t,e,n){"use strict";var r=n("3e8d"),o=n.n(r);o.a},cc78:function(t,e,n){},f521:function(t,e,n){"use strict";var r=n("32fd"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f3e7af06.js.map