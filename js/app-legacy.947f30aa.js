(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/layerage/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0b4c":function(t,e,n){},1597:function(t,e,n){},"164a":function(t,e,n){t.exports=function(){return new Worker(n.p+"a44fbf20bbef16c1f65d.worker.js")}},"1df9":function(t,e,n){},"2b3c":function(t,e,n){},"31cf":function(t,e,n){"use strict";var r=n("89d7"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.background},attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("f75e"),c=n.n(s),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={name:"App",computed:d({},Object(l["c"])(["background"]),{},Object(l["b"])(["isMobile"])),mounted:function(){var t=this;if(this.$store.dispatch("init"),this.isMobile){var e=new c.a({threshold:10});e.start(),window.addEventListener("shake",(function(){t.$store.dispatch("setRandomId")}),!1)}}},p=h,f=(n("034f"),n("2877")),m=Object(f["a"])(p,a,i,!1,null,null,null),b=m.exports,v=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loaded?n("div",{staticClass:"welcome"},[n("form",{on:{submit:t.submit}},[n("div",{staticClass:"searchBox"},[n("multiselect",{attrs:{value:t.item,options:t.data,placeholder:"Layer name or id",label:"name","track-by":"id",limit:100,"custom-label":t.customLabel,"options-limit":40,showLabels:!1},on:{input:t.inputSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{staticClass:"option__desc"},[n("img",{staticClass:"option__image",attrs:{src:t.makeUrl(e.option.id),alt:e.option.title}}),n("span",{staticClass:"option__title"},[t._v(t._s(e.option.title))]),n("span",{staticClass:"option__id"},[t._v(t._s(e.option.layerId))])])]}}],null,!1,959183025)})],1),n("button",{staticClass:"button",attrs:{autofocus:"",type:"submit"}},[t._v("Build")]),n("button",{staticClass:"button lucky",attrs:{type:"button"},on:{click:t.random}},[t._v("🎲")])])]):t._e(),t.loaded?t._e():n("div",{staticClass:"welcome"},[t._v("loading")]),t._m(0),t.item?n("div",{staticClass:"qube-perspective spin"},[n("ul",{staticClass:"qube no-shading layercube"},[n("li",{staticClass:"front",style:t.style}),n("li",{staticClass:"left",style:t.style}),n("li",{staticClass:"back",style:t.style}),n("li",{staticClass:"right",style:t.style}),n("li",{staticClass:"top",style:t.style}),n("li",{staticClass:"bottom",style:t.style})])]):t._e(),t.item?n("a",{staticClass:"credit",attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.item.url}},[t._v("by "+t._s(t.item.url))]):t._e()])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",[t._v("Find a layer.")]),n("span",[t._v("Build a background.")])])}];function w(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/128c/".concat(t,".png")}function O(t){return"https://vikusviewer.fh-potsdam.de/layers/data/png/256c/".concat(t,".png")}function _(t){return new Promise((function(e,n){var r=w(t),a=new Image;a.onload=function(n){return e({id:t,image:a})},a.onerror=function(n){console.error("could not load",t),e({id:t,image:null})},a.crossOrigin="",a.src=r}))}var j={},k=n("8e5f"),P=n.n(k);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S={name:"home",components:{Multiselect:P.a},methods:{makeUrl:w,submit:function(t){console.log("submit",this.id),t.preventDefault(),this.id&&this.$router.push("/"+this.id)},random:function(t){this.$store.dispatch("setRandomId"),t.preventDefault()},inputSearch:function(t,e){t&&t.id&&this.$store.dispatch("setId",t.layerId)},customLabel:function(t){var e=t.title,n=t.layerId;return"".concat(e," – ").concat(n)}},computed:C({},Object(l["b"])(["data","item"]),{},Object(l["c"])(["id"]),{loaded:function(){return this.data.length>0},style:function(){return"background-image: url(".concat(O(this.item.id),");")}}),mounted:function(){}},$=S,I=(n("60bc"),n("6d2c"),Object(f["a"])($,g,y,!1,null,"38c2d990",null)),D=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded.data&&t.item?n("div",[n("loading"),n("settings"),n("background-canvas")],1):t._e()])},E=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{ref:"canvas",on:{click:t.click}})])},R=[],L=(n("6c7b"),n("164a")),F=n.n(L);function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N=null,H=128,q=[],T={name:"background-canvas",methods:{startLayoutWorker:function(t){this.makeWorker();var e=this.siblingsFiltered.map((function(t){return[t.x,t.y]})),n=this.width,r=this.height;N.postMessage({type:"calculate",data:e,width:n,height:r})},click:function(t){var e=this.width/window.innerWidth,n=(this.height,window.innerHeight,Math.max(e,1)),r=parseInt(t.x*n),a=parseInt(t.y*n);N&&N.postMessage({type:"find",x:r,y:a})},makeWorker:function(){N&&N.terminate(),N=new F.a,N.onmessage=this.workerMessage},workerMessage:function(t){if("points"===t.data.type&&(q=t.data.points,this.draw()),"find"===t.data.type){var e=t.data.index,n=this.siblingsFiltered[e].layerId;this.$store.state.idSelected=n}},draw:function(){this.$refs.canvas.width=this.width,this.$refs.canvas.height=this.height,this.context.fillStyle=this.background,this.context.fillRect(0,0,this.width,this.height);for(var t=H*this.scale,e=0;e<q.length;e++){var n=q[e];this.images.length&&this.images[e]?this.context.drawImage(this.images[e],n[0]-t/2,n[1]-t/2,t,t):this.context.rect(n[0],n[1],4,4)}this.context.fillStyle="black",this.context.fill()}},computed:W({},Object(l["b"])(["images","item","siblingsFiltered"]),{},Object(l["c"])(["width","height","background","scale"]),{context:function(){return this.$refs.canvas.getContext("2d")}}),watch:{siblingsFiltered:{handler:function(t){this.startLayoutWorker(),this.$store.dispatch("loadImages")},immediate:!0},background:function(){this.draw()},scale:function(){this.draw()},images:function(){this.draw()},width:function(){this.startLayoutWorker()},height:function(){this.startLayoutWorker()}},mounted:function(){j.canvas=this.$refs.canvas},beforeDestroy:function(){N&&N.terminate()}},U=T,A=(n("31cf"),Object(f["a"])(U,M,R,!1,null,"b3b08cca",null)),Y=A.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:{closed:t.closed},on:{click:t.closeColor}},[t.itemSelected?n("div",{staticClass:"layerInfo"},[n("div",{staticClass:"left"},[n("a",{attrs:{target:"blank",href:"https://www.reddit.com/r/Layer/comments/"+t.itemSelected.url}},[n("img",{attrs:{src:t.layerUrl}})])]),n("div",{staticClass:"right"},[n("div",[t._v(t._s(t.itemSelected.title))]),n("div",[t._v(t._s(t.itemSelected.author))]),n("router-link",{attrs:{to:"/"+t.itemSelected.layerId}},[t._v(t._s(t.itemSelected.layerId))])],1)]):t._e(),n("div",[n("label",{attrs:{for:"width"}},[t._v("Width")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.width,expression:"$store.state.width",modifiers:{lazy:!0}}],attrs:{type:"number",name:"width"},domProps:{value:t.$store.state.width},on:{change:function(e){return t.$set(t.$store.state,"width",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"height"}},[t._v("Height")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$store.state.height,expression:"$store.state.height",modifiers:{lazy:!0}}],attrs:{type:"number",name:"height"},domProps:{value:t.$store.state.height},on:{change:function(e){return t.$set(t.$store.state,"height",e.target.value)}}})]),n("div",[n("label",{attrs:{for:"background"}},[t._v("Background")]),n("div",{staticClass:"colorField",style:{background:t.$store.state.background},on:{click:t.toggleClick}})]),t.openColor?n("div",{staticClass:"colorBox",on:{click:t.cancelClick}},[n("chrome",{attrs:{value:t.$store.state.background,disableFields:!0},on:{input:t.updateBackground}})],1):t._e(),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipNum?t.tooltipNum+" Layers":"How many"))]),n("input",{attrs:{type:"range",min:"1",max:"100",step:"0.1",name:"size"},domProps:{value:t.numScale.invert(t.tooltipNum?t.tooltipNum:t.$store.state.size)},on:{input:function(e){t.tooltipNum=t.numScale(e.target.value)},change:function(e){t.tooltipNum=null,t.$store.state.size=t.numScale(e.target.value)}}})]),n("div",[n("label",{attrs:{for:"size"}},[t._v(t._s(t.tooltipSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.scale,expression:"$store.state.scale"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.01",name:"scale"},domProps:{value:t.$store.state.scale},on:{input:function(e){t.tooltipSize=e.target.value},change:function(e){t.tooltipSize="Size"},__r:function(e){return t.$set(t.$store.state,"scale",e.target.value)}}})]),n("div",{staticClass:"credits"},[n("div",{staticClass:"mobileHint"},[t._v("Shake ya phone for a random layer")]),t._m(0),t._m(1),n("div",[n("router-link",{attrs:{to:"/about"}},[t._v(" About")]),t._v(" this project")],1),n("div")]),n("div",{staticClass:"menu"},[n("div",{staticClass:"hamburger",class:{arrow:!t.closed},on:{click:function(e){t.closed=!t.closed}}},[n("div",{staticClass:"a"}),n("div",{staticClass:"b"}),n("div",{staticClass:"c"})]),n("svg",{staticClass:"saveIcon",attrs:{viewBox:"0 0 24 24",alt:"Download Background"},on:{click:t.download}},[n("path",{attrs:{d:"M8 6h-5v15h18v-15h-5v-3h8v21h-24v-21h8v3zm5 6h4l-5 6-5-6h4v-12h2v12z"}})]),n("svg",{staticClass:"randomIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:t.random}},[n("path",{attrs:{d:"M10.848 15.932c-.399.781-.732 1.599-1.003 2.447-1.14-2.552-3.109-4.676-5.912-6.267l-1.463 2.656-2.47-5.881 6.33-1.126-1.433 2.601c2.606 1.472 4.593 3.349 5.951 5.57zm9.219-3.819l1.463 2.655 2.47-5.881-6.33-1.126 1.433 2.601c-5.339 3.017-8.103 7.72-8.103 13.638h2c0-5.144 2.405-9.241 7.067-11.887zm-8.025-12.113l-4.042 5h3v7.762c.352.409.684.831.991 1.269.312-.443.65-.87 1.009-1.286v-7.745h3l-3.958-5z"}})]),n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"searchIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"}})])])],1)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n      Images by redditors of\n      "),n("a",{attrs:{href:"https://reddit.com/r/layer",target:"_blank"}},[t._v("/r/layer")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n      Tooling by\n      "),n("a",{attrs:{href:"https://twitter.com/chrispiecom",target:"_blank"}},[t._v("chrispie")])])}],Q=(n("7514"),n("96cf"),n("3b8d")),V=n("c345"),X=n("21a6"),K=n("789b");function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var et={name:"settings",data:function(){return{openColor:!1,tooltipSize:"Size",tooltipNum:null,closed:!1}},components:{Chrome:V["Chrome"]},methods:{cancelClick:function(t){t.stopPropagation(),this.openColor=!0},toggleClick:function(t){t.stopPropagation(),this.openColor=!this.openColor},closeColor:function(t){this.openColor&&(this.openColor=!1)},download:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,nt(j.canvas);case 2:n=t.sent,Object(X["saveAs"])(n,"layer.png");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateBackground:function(t){this.$store.state.background=t.hex},random:function(t){this.$store.dispatch("setRandomId");t.preventDefault()}},computed:tt({},Object(l["b"])(["data","siblingsFiltered","isMobile"]),{},Object(l["c"])(["loaded","size","idSelected"]),{itemSelected:function(){var t=this;return this.siblingsFiltered.find((function(e){return e.layerId===t.idSelected}))},layerUrl:function(){return w(this.itemSelected.id)},numScale:function(){return Object(K["a"])().exponent(2).domain([1,100]).rangeRound([10,3e3]).nice()}}),created:function(){this.closed=this.isMobile}};function nt(t){return rt.apply(this,arguments)}function rt(){return rt=Object(Q["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return e.toBlob(t)})));case 1:case"end":return t.stop()}}),t)}))),rt.apply(this,arguments)}var at=et,it=(n("71c6"),Object(f["a"])(at,G,J,!1,null,"57ccb29f",null)),ot=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded.data?t._e():n("div",{staticClass:"loading"},[t._v("loading data")]),t.loaded.images?t._e():n("div",{staticClass:"loading images",style:t.style})])},ct=[];function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var dt={name:"container",computed:ut({},Object(l["c"])(["loaded","size"]),{style:function(){var t=parseInt(this.loaded.number/this.size*100);return"width: ".concat(t,"%")}})},ht=dt,pt=(n("7455"),Object(f["a"])(ht,st,ct,!1,null,"021cb5d8",null)),ft=pt.exports;function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var vt={name:"container",components:{BackgroundCanvas:Y,Settings:ot,Loading:ft},methods:{},watch:{$route:{handler:function(t){var e=t.params.id;this.$store.dispatch("setId",e)},immediate:!0}},computed:bt({},Object(l["b"])(["item"]),{},Object(l["c"])(["loaded"])),mounted:function(){}},gt=vt,yt=(n("ee93"),Object(f["a"])(gt,z,E,!1,null,"6d8e6927",null)),wt=yt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"inner"},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/D2BqYwQVLXk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("h2",[t._v("So what is this thing")]),n("p",[t._v("\n      Layerage lets you create collages of r/Layer which are similar to each\n      other.\n    ")]),n("h2",[t._v("What is r/layer")]),n("p",[n("a",{attrs:{target:"_blank",href:"https://www.reddit.com/r/Layer/"}},[t._v("r/Layer")]),t._v(" was a community canvas for creative exploration open to everyone\n      to create and contribute similar to r/place. Built by Reddit in\n      partnership with Adobe.\n    ")]),n("h2",[t._v("Why")]),n("p",[t._v("\n      I was just so intrigued by the creativity and granularity of the layers that I had to experiment on it on my free time.\n      Initially I built a tool to explore all those layers by zooming in and out (video) but then switched to fiddling on this tool which could be more accessible for everyone.\n    ")]),n("h2",[t._v("What can you do here")]),n("p",[t._v("\n      You can search for your / a layer and hit build to create a fancy\n      looking collage of similar layers. The size of the canvas will be\n      automatically adjusted to you screen dimension and scaled to fit your\n      browser window. So if you want to create a desktop or mobile background\n      you are already set. There are some options to tweak the collage in the\n      menu, like the canvas dimension, size and number of the layers. If you\n      feel lucky you can hit the random button which will select a random set.\n      On mobile you can just shake your phone to do that.\n    ")]),n("h2",[t._v("\n      How does it work\n    ")]),n("p",[t._v("\n      Let’s say you have all the layers which are public and you run some\n      neural nets over them to calculate a similarity. Now look for a layer in\n      this pool and select x amount of similar layers, distribute them to fit\n      the canvas dimensions and voila you have a collage.\n    ")]),n("h2",[t._v("\n      Moar details\n    ")]),n("p",[n("ul",[n("li",[t._v("scrape all the metadata and layers run a neural net (inception /\n      mobilenet) on each layer to get an "),n("a",{attrs:{target:"_blank",href:"https://observablehq.com/@cpietsch/imagenet-activation-logit"}},[t._v('"imprint"')]),t._v(" of it")]),n("li",[t._v("run dimensionality\n      reduction on all those imprints ("),n("a",{attrs:{target:"_blank",href:"https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations"}},[t._v("tSNE")]),t._v(" / "),n("a",{attrs:{target:"_blank",href:"https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations/2"}},[t._v("UMAP")]),t._v(") to distribute the layers\n      by similarity in 2D")]),n("li",[t._v("prototype on\n      "),n("a",{attrs:{target:"_blank",href:"https://observablehq.com/d/6dcb7448c060af1c"}},[t._v("observable notebook")])]),n("li",[t._v("\n      build a frontend tool with vuejs and fiddle around a lot")])])]),n("h2",[t._v("\n      Wouldn’t it be cool to…\n    ")]),n("p",[t._v("\n      Sure thing! The code is on "),n("a",{attrs:{target:"_blank",href:"https://github.com/cpietsch/layerage"}},[t._v("GitHub")]),t._v(" and is open source, so you can\n      contribute by adding a feature or suggest something in a ticket.\n    ")]),n("h2",[t._v("\n      What else\n    ")]),n("p",[t._v("\n      Initially I did a timelapse while r/layer was running\n    ")]),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/MtW1U5d6zHI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("p",[t._v("\n      Shout out to u/youngluck for the support\n    ")]),n("p",[t._v("\n      You can buy me a virtual coffee by beeing a "),n("a",{attrs:{target:"_blank",href:"https://github.com/sponsors/cpietsch"}},[t._v("GitHub Sponsor")])])])])}],jt=(n("e76e"),{}),kt=Object(f["a"])(jt,Ot,_t,!1,null,null,null),Pt=kt.exports;r["a"].use(v["a"]);var xt=new v["a"]({routes:[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:Pt},{path:"/:id",name:"container",component:wt}]}),Ct=(n("c7c6"),n("55dd"),n("5df3"),n("28a5"),n("a481"),n("b2e9"));function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var It=[],Dt={};r["a"].use(l["a"]);var zt=new l["a"].Store({state:{loaded:{data:!1,images:!1,number:0},idSelected:null,id:null,size:200,images:[],width:Math.floor(window.screen.width*window.devicePixelRatio),height:Math.floor(window.screen.height*window.devicePixelRatio),background:"#FFFFFF",scale:.9,dataUrl:null},mutations:{},actions:{init:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,e.commit,e.getters,r=e.state,console.log("init"),r.loaded.data=!1,t.next=5,Object(Ct["a"])("dataBig.csv",(function(t){return $t({},t,{x:+t.x,y:+t.y,title:t.url.split("/")[1].replace(/_/g," ")})}));case 5:It=t.sent,r.loaded.data=!0,r.id||n("setRandomId");case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),loadImages:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dispatch,e.commit,n=e.getters,r=e.state,console.log("loadImages"),Dt={},r.images=[],a=n.siblingsFiltered,r.loaded.images=!1,r.loaded.number=0,i=20,o=n.siblingsFiltered.length,s=regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Math.min(o-e,i),n=Math.min(o-e,i)+e,t.next=4,Promise.all(a.filter((function(t,r){return r>=e&&r<n})).map((function(t){return _(t.id)})));case 4:s=t.sent,s.forEach((function(t){r.images.push(t.id),Dt[t.id]=t.image})),r.loaded.number=e;case 7:case"end":return t.stop()}}),t)})),c=0;case 11:if(!(c<o)){t.next=16;break}return t.delegateYield(s(c),"t0",13);case 13:c+=i,t.next=11;break;case 16:r.loaded.images=!0;case 17:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setRandomId:function(t){var e=t.dispatch,n=t.getters,r=n.data[parseInt(Math.random()*n.data.length)].layerId;return e("setId",r),r},setId:function(t,e){t.dispatch,t.commit,t.getters;var n=t.state;console.log("id",e),n.id=e}},getters:{isMobile:function(t){return t.width/window.devicePixelRatio<700},data:function(t){return t.loaded.data?It:[]},images:function(t){return t.images.map((function(t){return Dt[t]}))},item:function(t,e){return e.data.find((function(e){return e.layerId===t.id}))},siblingsFiltered:function(t,e){return e.siblings.filter((function(e,n){return n<t.size})).reverse()},siblings:function(t,e){var n=e.item,r=n.x,a=n.y;return e.data.map((function(t){var e=Math.hypot(t.x-r,t.y-a);return $t({},t,{distance:e})})).sort((function(t,e){return t.distance-e.distance}))}}});r["a"].config.productionTip=!1,window.store=zt,new r["a"]({router:xt,store:zt,render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){},"6d2c":function(t,e,n){"use strict";var r=n("1df9"),a=n.n(r);a.a},"71c6":function(t,e,n){"use strict";var r=n("f6e1"),a=n.n(r);a.a},7455:function(t,e,n){"use strict";var r=n("0b4c"),a=n.n(r);a.a},"89d7":function(t,e,n){},e76e:function(t,e,n){"use strict";var r=n("2b3c"),a=n.n(r);a.a},ee93:function(t,e,n){"use strict";var r=n("1597"),a=n.n(r);a.a},f6e1:function(t,e,n){}});
//# sourceMappingURL=app-legacy.947f30aa.js.map