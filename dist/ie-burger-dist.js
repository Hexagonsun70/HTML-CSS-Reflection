!function(){var t=[,function(t,n,r){var e=r(2),o=r(5);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(20).f})},function(t,n,r){var e=r(3),o=r(4).f,i=r(19),c=r(22),u=r(23),a=r(33),f=r(45);t.exports=function(t,n){var r,s,l,p,v,h=t.target,d=t.global,b=t.stat;if(r=d?e:b?e[h]||u(h,{}):(e[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(d?s:h+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},function(t,n,r){var e=r(5),o=r(7),i=r(8),c=r(9),u=r(13),a=r(15),f=r(17),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(6);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(10),o=r(12);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(6),o=r(11),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(14);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},function(t,n,r){var e=r(12);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(5),o=r(6),i=r(18);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(3),o=r(14),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(5),o=r(20),i=r(8);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(5),o=r(17),i=r(21),c=r(13),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(14);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(3),o=r(19),i=r(15),c=r(23),u=r(24),a=r(26),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,r){var e=r(3),o=r(19);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(25),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(3),o=r(23),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},function(t,n,r){var e,o,i,c=r(27),u=r(3),a=r(14),f=r(19),s=r(15),l=r(25),p=r(28),v=r(32),h="Object already initialized",d=u.WeakMap;if(c||l.state){var b=l.state||(l.state=new d),y=b.get,g=b.has,m=b.set;e=function(t,n){if(g.call(b,t))throw new TypeError(h);return n.facade=t,m.call(b,t,n),n},o=function(t){return y.call(b,t)||{}},i=function(t){return g.call(b,t)}}else{var x=p("state");v[x]=!0,e=function(t,n){if(s(t,x))throw new TypeError(h);return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(3),o=r(24),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(29),o=r(31),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(30),o=r(25);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.15.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t){t.exports=!1},function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t){t.exports={}},function(t,n,r){var e=r(15),o=r(34),i=r(4),c=r(20);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(35),o=r(37),i=r(44),c=r(21);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(36),o=r(3),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(3);t.exports=e},function(t,n,r){var e=r(38),o=r(43).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(15),o=r(9),i=r(39).indexOf,c=r(32);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(9),o=r(40),i=r(42),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(41),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,n,r){var e=r(41),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(6),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i}],n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};!function(){"use strict";r.r(e);r(1);function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var n=new(function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.scrollBarWidth=0,this.measureScrollbarWidth()}var r,e,o;return r=n,(e=[{key:"measureScrollbarWidth",value:function(){var t=document.createElement("div");t.style.overflow="scroll",document.body.appendChild(t),this.scrollBarWidth=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}},{key:"width",get:function(){return this.scrollBarWidth}}])&&t(r.prototype,e),o&&t(r,o),n}()),o="translateX(".concat(n.width,"px + 257px)");console.log(n.width),console.log(o);var i=$("#nav, main, footer");$(".hamburger").click((function(){$(".hamburger").addClass("is-active"),i.css("transition","transform 0.4s"),i.css("transition-timing-function","ease-in"),$(".carousel").slick("slickNext"),$(".sb").css("transition","transform 0.4s"),$(".sb").css("transition-timing-function","ease-in"),i.removeClass("burger-shift-right"),i.addClass("burger-shift-left"),$(".mask-click").addClass("hamburger-mask"),$("body").addClass("no-scroll"),$(".sb").css("transform","".concat("translateX(0)"))})),$(".mask-click").click((function(){$(".hamburger").removeClass("is-active"),i.removeClass("burger-shift-left"),i.addClass("burger-shift-right"),$(".mask-click").removeClass("hamburger-mask"),$("body").removeClass("no-scroll"),$(".sb").css("transform","0")})),$(".sb--ul").hover((function(){$(this).siblings().children().css("background-color","rgba(102,102,102, 0.15)")}),(function(){$(this).siblings().children().css("background-color","#2333645")}))}()}();
//# sourceMappingURL=ie-burger-dist.js.map