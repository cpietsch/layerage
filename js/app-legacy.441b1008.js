(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"-legacy."+{about:"2372410e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/layerage/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},o=[],i={name:"App",mounted:function(){this.$store.dispatch("init")}},c=i,s=(n("034f"),n("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null),l=u.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.loaded.data?n("div",{staticClass:"home"},[n("button",{on:{click:function(t){return e.$store.dispatch("random")}}},[e._v("random")]),e._v("\n size "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.size,expression:"$store.state.size"}],staticClass:"slider",attrs:{type:"range",min:"10",max:"3000",value:"600"},domProps:{value:e.$store.state.size},on:{change:function(t){return e.$store.dispatch("loadImages")},__r:function(t){return e.$set(e.$store.state,"size",t.target.value)}}}),e._v("\n  "+e._s(e.siblingsFiltered.length)+" total\n  "+e._s(e.data.length)+"\n  "+e._s(e.item.url)+"\n  "+e._s(e.siblingsFiltered.length)+"\n  "+e._s(e.images.length)+"\n  \n  "),n("br"),n("canvas",{ref:"canvas"}),n("div",{staticClass:"credits"},e._l(e.siblingsFiltered,(function(t){return n("a",{key:t.id,attrs:{href:"https://www.reddit.com/r/Layer/comments/"+t.url,target:"_blank"}},[e._v(e._s(t.layerId))])})),0)]):e._e()},p=[],m=n("768b"),g=(n("96cf"),n("8e6e"),n("ac6a"),n("456d"),n("3b8d")),h=n("bd86"),b=n("2f62"),v=n("5698"),y=n("cfca");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(h["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"home",methods:{rangeSlide:function(e,t){console.log(e,t)},draw:function(){P(this.$refs.canvas,this.images)}},computed:O({},Object(b["b"])(["data","item","siblingsFiltered","images"])),watch:{images:function(e){e.length&&(console.log(e),this.draw())},$route:{handler:function(e){var t=e.params.id;if(!t)return this.$store.dispatch("random");console.log(t),this.$store.state.id=t,this.$store.dispatch("loadImages")},immediate:!0}}};function P(e,t){return x.apply(this,arguments)}function x(){return x=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c,s,u,l,f,d,p,g,h,b,w,O,j,P,x,k,$,S,I;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),r=[v["b"](n,(function(e){return+e.x})),v["b"](n,(function(e){return+e.y}))],a=1920,o=1080,i=v["e"]().domain(r[0]).range([0,a]),c=v["e"]().domain(r[1]).range([0,o]),s=v["c"](n.map((function(e){return[i(e.x),c(e.y)]}))),u=s.length,l=25.6,console.log(s),f=new y["a"](s),d=t.getContext("2d"),p=1,t.width=a,t.height=o,d.lineCap="square",g=0;case 17:if(!(g<400)){e.next=42;break}h=f.voronoi([0,0,a,o]),d.beginPath(),d.fillStyle="#ffffff",d.fillRect(0,0,a,o),b=0;case 23:if(!(b<u)){e.next=36;break}if(w=h.cellPolygon(b>>1),null!==w){e.next=27;break}return e.abrupt("continue",33);case 27:O=s[b],j=s[b+1],P=v["d"](w),x=Object(m["a"])(P,2),k=x[0],$=x[1],S=b>>1,I=n[S],I&&d.drawImage(I.image,k-l/2,$-l/2,l,l),s[b]=O+(k-O)*p,s[b+1]=j+($-j)*p;case 33:b+=2,e.next=23;break;case 36:return f.update(),e.next=39,_();case 39:++g,e.next=17;break;case 42:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function _(){var e=null,t=new Promise((function(t){return e=t}));return window.requestAnimationFrame(e),t}var k=j,$=(n("6694"),Object(s["a"])(k,d,p,!1,null,"450371c2",null)),S=$.exports;r["a"].use(f["a"]);var I=new f["a"]({routes:[{path:"/:id",name:"home",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("c7c6"),n("55dd"),n("7514"),n("5df3");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(h["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=[],C=[];r["a"].use(b["a"]);var F=new b["a"].Store({state:{loaded:{data:!1,images:!1},id:null,size:1e3},mutations:{},actions:{init:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,t.commit,t.getters,r=t.state,console.log("init"),e.next=4,Object(v["a"])("dataBig.csv",(function(e){return D({},e,{x:+e.x,y:+e.y})}));case 4:z=e.sent,r.loaded.data=!0,n("random");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),random:function(e){e.dispatch,e.commit;var t=e.getters,n=e.state,r=t.data[parseInt(Math.random()*t.data.length)].layerId;I.push("/"+r),console.log("random",n.id)},loadImages:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.dispatch,t.commit,n=t.getters,r=t.state,console.log("loadImages"),r.loaded.images=!1,Promise.all(n.siblingsFiltered.map(M)).then((function(e){C=e.filter((function(e){return e})),r.loaded.images=!0}));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{data:function(e){return e.loaded.data?z:[]},images:function(e){return e.loaded.images?C:[]},item:function(e,t){return t.data.find((function(t){return t.layerId===e.id}))},siblingsFiltered:function(e,t){return t.siblings.filter((function(t,n){return n<e.size}))},siblings:function(e,t){var n=t.item,r=n.x,a=n.y;return t.data.map((function(e){var t=Math.hypot(e.x-r,e.y-a);return D({},e,{distance:t})})).sort((function(e,t){return e.distance-t.distance}))}}});function R(e){return"https://vikusviewer.fh-potsdam.de/layer/data/png/128c/".concat(e,".png")}function M(e){return new Promise((function(t,n){var r=R(e.id),a=new Image;a.onload=function(n){return t(D({},e,{image:a}))},a.onerror=function(e){return t(null)},a.src=r}))}r["a"].config.productionTip=!1,new r["a"]({router:I,store:F,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},6694:function(e,t,n){"use strict";var r=n("dcea"),a=n.n(r);a.a},dcea:function(e,t,n){}});
//# sourceMappingURL=app-legacy.441b1008.js.map