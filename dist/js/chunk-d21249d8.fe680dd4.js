(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d21249d8"],{"179a":function(t,n,r){"use strict";var e=r("8f95"),o=r.n(e);o.a},"1dde":function(t,n,r){var e=r("d039"),o=r("b622"),i=r("60ae"),a=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[],r=n.constructor={};return r[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},8418:function(t,n,r){"use strict";var e=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,n,r){var a=e(n);a in t?o.f(t,a,i(0,r)):t[a]=r}},"8f95":function(t,n,r){},a327:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h3",[t._v("X组件")]),r("div",t._l(t.pros,(function(n,e){return r("div",{key:e},[r("h4",[t._v(t._s(n.name))]),r("img",{staticClass:"auto-img",attrs:{src:n.url,alt:""}})])})),0)])},o=[],i=(r("fb6a"),r("d3b7"),{name:"x",data:function(){return{pros:null}},created:function(){var t=this,n=this.$route.query;this.http(n).then((function(n){t.pros=n}))},methods:{http:function(t){return new Promise((function(n,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===this.readyState&&200===this.status&&n(this.response)};var o="";for(var i in t)o+=i+"="+t[i]+"&";o=o.slice(0,-1),e.open("GET","http://api.kangliuyong.com:9002/pros?"+o,!0),e.responseType="json",e.send(null)}))}}}),a=i,s=(r("179a"),r("2877")),c=Object(s["a"])(a,e,o,!1,null,"07f1e272",null);n["default"]=c.exports},e8b5:function(t,n,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fb6a:function(t,n,r){"use strict";var e=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("1dde"),p=r("b622"),d=p("species"),l=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,n){var r,e,f,p=c(this),h=s(p.length),y=a(t,h),b=a(void 0===n?h:n,h);if(i(p)&&(r=p.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[d],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return l.call(p,y,b);for(e=new(void 0===r?Array:r)(v(b-y,0)),f=0;y<b;y++,f++)y in p&&u(e,f,p[y]);return e.length=f,e}})}}]);
//# sourceMappingURL=chunk-d21249d8.fe680dd4.js.map