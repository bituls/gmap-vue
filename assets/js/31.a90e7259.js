(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{439:function(e,t,n){"use strict";n.r(t);var s=n(0),u={name:"eg-resize-bus",data:function(){return{currentStyle:{display:"none"},customBus:new s.a}},methods:{updateStyle:function(){this.currentStyle={display:"inline-block",width:"200px",height:"200px"},s.a.$gmapDefaultResizeBus.$emit("resize")},updateBus:function(){this.customBus.$emit("resize")}}},r=n(9),i=Object(r.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Resize Bus")]),e._v(" "),n("p",[e._v("\n    The first map is displayed correctly after clicking\n    the button.\n\n    The second and third are not (not bound to default resize bus).\n    "),n("button",{on:{click:e.updateStyle}},[e._v("\n      Click me first\n    ")])]),e._v(" "),n("p",[e._v("\n    However, the third map responds to the second button\n    (custom resize bus)\n\n    "),n("button",{on:{click:e.updateBus}},[e._v("\n      Click me second\n    ")])]),e._v(" "),n("gmap-map",{style:e.currentStyle,attrs:{center:{lat:1.38,lng:103.8},zoom:12}}),e._v(" "),n("gmap-map",{style:e.currentStyle,attrs:{center:{lat:1.38,lng:103.8},zoom:12,"resize-bus":null}}),e._v(" "),n("gmap-map",{style:e.currentStyle,attrs:{center:{lat:1.38,lng:103.8},zoom:12,"resize-bus":e.customBus}})],1)}),[],!1,null,"0517d068",null);t.default=i.exports}}]);