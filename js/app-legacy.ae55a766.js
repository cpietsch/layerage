(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"89de93c9"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}a[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/layerage/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"32fd":function(t,e,r){},"34e4":function(t,e,r){},"3e8d":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o={name:"App",mounted:function(){this.$store.dispatch("init")}},s=o,c=(r("034f"),r("2877")),u=Object(c["a"])(s,a,i,!1,null,null,null),l=u.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t.loaded?r("div",{staticClass:"welcome"},[r("form",{on:{submit:t.submit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"input",attrs:{type:"text",name:"layerId",placeholder:"Enter layer id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),r("button",{staticClass:"button lucky",on:{click:t.random}},[t._v("🎲")]),r("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Build")])])]):t._e(),t.loaded?t._e():r("div",{staticClass:"welcome"},[t._v("loading")]),r("h1",[t._v("Find your layer. Build a background.")]),t.style?r("div",{staticClass:"qube-perspective spin"},[r("ul",{staticClass:"qube no-shading layercube"},[r("li",{staticClass:"front",style:t.style}),r("li",{staticClass:"left",style:t.style}),r("li",{staticClass:"back",style:t.style}),r("li",{staticClass:"right",style:t.style}),r("li",{staticClass:"top",style:t.style}),r("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?r("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},f=[],h=(r("8e6e"),r("ac6a"),r("456d"),r("7514"),r("bd86")),m=r("2f62");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/128c/".concat(t,".png")}function y(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/256c/".concat(t,".png")}function w(t){return new Promise((function(e,r){var n=b(t.id),a=new Image;a.onload=function(r){return e(g({},t,{image:a}))},a.onerror=function(t){return e(null)},a.crossOrigin="",a.src=n}))}var O={};function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"home",methods:{submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){this.$store.dispatch("setRandomId"),t.preventDefault()}},computed:P({},Object(m["b"])(["data"]),{},Object(m["c"])(["id"]),{loaded:function(){return this.data.length>0},item:function(){var t=this;return!!this.id&&this.data.find((function(e){return e.layerId===t.id}))},image:function(){return!!this.item&&y(this.item.id)},style:function(){return this.item?"background-image: url(".concat(y(this.item.id),");"):""}}),mounted:function(){}},x=_,k=(r("bd9d"),Object(c["a"])(x,p,f,!1,null,"5771d983",null)),$=k.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.loaded.data?t._e():r("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():r("div",{staticClass:"loading"},[t._v("loading images "+t._s(t.loaded.number)+" / "+t._s(t.size))]),t.loaded.data&&t.item?r("div",[r("settings"),r("lanvas",{key:t.id})],1):t._e()])},S=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"canvas"},[r("canvas",{ref:"canvas"})])},E=[],z=r("768b"),I=(r("ac4d"),r("8a81"),r("5698")),R=r("cfca");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var N={name:"lanvas",methods:{download:function(t){},draw:function(){window.devicePixelRatio;console.log(this.width),this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);var t=L*this.scale;if(console.log("draw"),this.points){var e=!0,r=!1,n=void 0;try{for(var a,i=this.points[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var o=a.value;this.context.drawImage(o.image,o.px*B-t/2,o.py*B-t/2,t,t)}}catch(s){r=!0,n=s}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}}}},computed:M({},Object(m["b"])(["images","item","siblingsFiltered"]),{},Object(m["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")},points:function(){console.log(this.width);var t=T({images:this.images,width:this.width,height:this.height});return this.images.map((function(e,r){return M({},e,{px:t[r][0],py:t[r][1]})}))}}),watch:{siblingsFiltered:{handler:function(t){this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},points:function(t){console.log(t),this.draw()}},mounted:function(){O.canvas=this.$refs.canvas}},B=10,L=128;function T(t){var e=t.images,r=t.width,n=t.height,a=[I["b"](e,(function(t){return+t.x})),I["b"](e,(function(t){return+t.y}))],i=I["e"]().domain(a[0]).range([0,r/B]),o=I["e"]().domain(a[1]).range([0,n/B]),s=I["c"](e.map((function(t){return[i(t.x),o(t.y)]}))),c=s.length;console.log(s);for(var u=new R["a"](s),l=1,d=e.map((function(t){return[0,0]})),p=0;p<1e3;++p){for(var f=u.voronoi([0,0,r/B,n/B]),h=0;h<c;h+=2){var m=f.cellPolygon(h>>1);if(null!==m){var v=s[h],g=s[h+1],b=I["d"](m),y=Object(z["a"])(b,2),w=y[0],O=y[1];s[h]=v+(w-v)*l,s[h+1]=g+(O-g)*l,d[h>>1][0]=w,d[h>>1][1]=O}}u.update()}return d}var U=N,q=(r("e60c"),Object(c["a"])(U,D,E,!1,null,"2669aef0",null)),A=q.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"layerImg"},[r("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[r("img",{attrs:{src:t.layerUrl}})])]),r("div",[r("label",{attrs:{for:"id"}},[t._v("\n      Layer id\n      "),r("span",{staticClass:"dice",on:{click:t.random}},[t._v("🎲")])]),r("input",{attrs:{type:"number",name:"id"},domProps:{value:t.$store.state.id},on:{change:t.updateId}})]),r("div",[r("label",{attrs:{for:"width"}},[t._v("Width")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),r("div",[r("label",{attrs:{for:"height"}},[t._v("Height")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),r("div",[r("label",{attrs:{for:"background"}},[t._v("Background")]),r("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:function(e){t.openColor=!t.openColor}}})]),t.openColor?r("div",{staticClass:"colorBox"},[r("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),r("div",[r("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),r("input",{attrs:{type:"range",min:"1",max:"3000",name:"size"},domProps:{value:t.tooltipNum?t.tooltipNum:t.$store.state.size},on:{input:function(e){t.tooltipNum=e.target.value},change:function(e){t.tooltipNum=null,t.$store.state.size=e.target.value}}})]),r("div",[r("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),r("div",[r("button",{staticClass:"download",attrs:{type:"button"},on:{click:t.download}},[t._v("Save Background")])]),t._m(0)])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"credits"},[t._v("\n    images by redditors of\n    "),r("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")]),t._v(",\n    tooling by\n    "),r("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],W=(r("96cf"),r("3b8d")),Y=r("c345"),G=r("21a6");function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var V={name:"settings",data:function(){return{dataUrl:"",openColor:!1,tooltipSize:"Size",tooltipNum:null}},components:{Chrome:Y["Chrome"]},methods:{inputSize:function(t){console.log(t.target.value)},download:function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(O.canvas);case 2:r=t.sent,Object(G["saveAs"])(r,"layer.png");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateId:function(t){var e=t.target.value;this.$router.push("/"+e)},updateBackground:function(t){this.$store.state.background=t.hex},submit:function(t){console.log("submit",this.id),t.preventDefault()},random:function(t){var e=this.data[parseInt(Math.random()*this.data.length)].layerId;this.$router.push("/"+e),t.preventDefault()}},computed:Q({},Object(m["b"])(["data","item"]),{},Object(m["c"])(["loaded","size"]),{layerUrl:function(){return b(this.item.id)}})};function X(t){return Z.apply(this,arguments)}function Z(){return Z=Object(W["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return e.toBlob(t)})));case 1:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}var tt=V,et=(r("f521"),Object(c["a"])(tt,H,J,!1,null,"5c7cbaf1",null)),rt=et.exports;function nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?nt(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var it={name:"container",components:{Lanvas:A,Settings:rt},methods:{},watch:{$route:{handler:function(t){var e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:at({},Object(m["b"])(["data","item","siblingsFiltered"]),{},Object(m["c"])(["loaded","size","id"])),mounted:function(){}},ot=it,st=(r("914a"),Object(c["a"])(ot,C,S,!1,null,"49803502",null)),ct=st.exports;n["a"].use(d["a"]);var ut=new d["a"]({routes:[{path:"/",name:"home",component:$},{path:"/:id",name:"container",component:ct},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});r("c7c6"),r("55dd"),r("5df3");function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(r,!0).forEach((function(e){Object(h["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var pt=[],ft=[];n["a"].use(m["a"]);var ht=new m["a"].Store({state:{loaded:{data:!1,images:!1,number:0},id:null,size:200,width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.3,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,e.commit,e.getters,n=e.state,console.log("init"),t.next=4,Object(I["a"])("dataBig.csv",(function(t){return dt({},t,{x:+t.x,y:+t.y})}));case 4:pt=t.sent,n.loaded.data=!0,n.id||r("setRandomId");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dispatch,e.commit,r=e.getters,n=e.state,console.log("loadImages"),ft=[],a=r.siblingsFiltered,n.loaded.images=!1,i=20,o=r.siblingsFiltered.length,s=regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Math.min(o-e,i),r=Math.min(o-e,i)+e,t.next=4,Promise.all(a.filter((function(t,n){return n>=e&&n<r})).map(w));case 4:s=t.sent,s.forEach((function(t){return t?ft.push(t):""})),n.loaded.number=e;case 7:case"end":return t.stop()}}),t)})),c=0;case 9:if(!(c<o)){t.next=14;break}return t.delegateYield(s(c),"t0",11);case 11:c+=i,t.next=9;break;case 14:return n.loaded.images=!0,t.abrupt("return",ft);case 16:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){var e=t.dispatch,r=t.getters,n=r.data[parseInt(Math.random()*r.data.length)].layerId;e("setId",n)},setId:function(t,e){t.dispatch,t.commit,t.getters;var r=t.state;console.log("id",e),r.id=e}},getters:{data:function(t){return t.loaded.data?pt:[]},images:function(t){return t.loaded.data&&t.loaded.images?ft:[]},item:function(t,e){return e.data.find((function(e){return e.layerId===t.id}))},siblingsFiltered:function(t,e){return e.siblings.filter((function(e,r){return r<t.size})).reverse()},siblings:function(t,e){var r=e.item,n=r.x,a=r.y;return e.data.map((function(t){var e=Math.hypot(t.x-n,t.y-a);return dt({},t,{distance:e})})).sort((function(t,e){return t.distance-e.distance}))}}});n["a"].config.productionTip=!1,window.store=ht,new n["a"]({router:ut,store:ht,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,r){},"914a":function(t,e,r){"use strict";var n=r("3e8d"),a=r.n(n);a.a},"9d05":function(t,e,r){},bd9d:function(t,e,r){"use strict";var n=r("9d05"),a=r.n(n);a.a},e60c:function(t,e,r){"use strict";var n=r("34e4"),a=r.n(n);a.a},f521:function(t,e,r){"use strict";var n=r("32fd"),a=r.n(n);a.a}});
//# sourceMappingURL=app-legacy.ae55a766.js.map