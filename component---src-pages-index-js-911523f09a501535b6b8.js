(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(235),r=n(237),c=n(198),s=(n(181),n(182),n(223)),l=Object(c.c)(["0%{opacity:0;}100%{opacity:1;}"]),u=Object(c.b)(s.a).withConfig({displayName:"header__FadeTitle",componentId:"sc-1sm0z1t-0"})(["margin-top:50px;animation:3s ",";"],l),m=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];if(!1===t&&setTimeout(function(){n(!0)},250),!0===t)return i.a.createElement(u,null,"MICHAL KONCZAK")},p=function(){return i.a.createElement(i.a.Fragment,null," ",m()," ")},d=n(248),f=n.n(d),g=n(501),h=n(224);function y(){var e=f()(["\n    font-size: 100px;\n    margin-bottom: 200px;\n    margin-left: 160px;\n    letter-spacing: 140px;\n  "]);return y=function(){return e},e}function v(){var e=f()(["\n    font-size: 74px;\n    margin-bottom: 200px;\n    margin-left: 130px;\n    letter-spacing: 100px;\n  "]);return v=function(){return e},e}function b(){var e=f()(["\n    font-size: 54px;\n    margin-bottom: 200px;\n    margin-left: 100px;\n    letter-spacing: 70px;\n  "]);return b=function(){return e},e}function x(){var e=f()(["\n    font-size: 50px;\n    margin-bottom: 150px;\n    margin-left: 50px;\n    letter-spacing: 20px;\n  "]);return x=function(){return e},e}function w(){var e=f()(["\n    font-size: 44px;\n    margin-bottom: 150px;\n    margin-left: 50px;\n    letter-spacing: 20px;\n  "]);return w=function(){return e},e}var _=Object(c.c)(["0%{opacity:0;}100%{opacity:1;}"]),T=Object(c.b)(s.a).withConfig({displayName:"explore__FadeTitle",componentId:"s6tzfr-0"})(["animation:3s ",";"," "," "," "," ",""],_,h.a.lessThan("small")(w()),h.a.between("small","medium")(x()),h.a.between("medium","large")(b()),h.a.between("large","xLarge")(v()),h.a.greaterThan("xLarge")(y())),k=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];if(Object(g.setTimeout)(function(){n(!0)},500),!0===t)return i.a.createElement(T,null,"EXPLORE")},E=function(){return i.a.createElement(i.a.Fragment,null,k())},I=n(6),C=n.n(I),j=n(270),O=n.n(j),z=n(247),M=Object(c.c)(["0%{opacity:0;}100%{opacity:0.8;}"]),A=c.b.div.withConfig({displayName:"button__Container",componentId:"hiv7ct-0"})(["width:100%;display:flex;justify-content:center;"]),F=c.b.button.withConfig({displayName:"button__Button",componentId:"hiv7ct-1"})(["display:",";justify-content:center;align-items:center;color:white;width:100px;height:50px;background-color:black;border-radius:15px;user-select:none;animation:"," 2s ease-in;cursor:pointer;border:none;padding:0;margin-bottom:30px;opacity:",";transition:opacity 750ms;z-index:3;&:focus{outline:none;}&:hover{opacity:",";}"],function(e){return e.displayAnimation},M,function(e){return e.opacity},function(e){return e.hover}),N=Object(c.b)(O.a).withConfig({displayName:"button__Link",componentId:"hiv7ct-2"})(["position:absolute;z-index:100;width:100px;height:50px;"]),L=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.setState({opacity:"0",hover:"0"}),setTimeout(function(){n.setState({displayAnimation:"none"})},750)},n.state={opacity:"0.8",hover:"1",displayAnimation:"none"},n}C()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({displayAnimation:"flex"})},750)},n.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null,i.a.createElement(z.a,null),i.a.createElement(F,{onClick:this.handleClick,opacity:this.state.opacity,hover:this.state.hover,displayAnimation:this.state.displayAnimation},"go",i.a.createElement(N,{fade:!0,duration:.75,to:"/myProjects/"}))))},t}(i.a.Component),S=n(239),P=Object(c.b)(S.a).withConfig({displayName:"pages__Container",componentId:"sc-6kvjaa-0"})(["align-content:space-between;"]);t.default=function(){return Object(a.useEffect)(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")},[]),i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"Explore",keywords:["developer","CV","Oslo","Michal","Konczak"]}),i.a.createElement(P,null,i.a.createElement(p,null),i.a.createElement(L,null),i.a.createElement(E,null)))}},223:function(e,t,n){"use strict";var a=n(248),i=n.n(a),o=n(198),r=n(224);function c(){var e=i()(["\n    width: 100%;\n    letter-spacing: 10px;\n  "]);return c=function(){return e},e}var s=o.b.h1.withConfig({displayName:"title__Title",componentId:"sc-1mc9oy7-0"})(["width:50%;text-align:center;display:flex;justify-content:center;letter-spacing:18px;line-height:50px;user-select:none;margin-bottom:10px;padding-bottom:0;",""],r.a.lessThan("small")(c()));t.a=s},224:function(e,t,n){"use strict";var a=n(268),i=Object(a.a)({xLarge:"1400px",large:"1024px",medium:"768px",small:"600px"});t.a=i},235:function(e,t,n){"use strict";var a=n(236),i=n(0),o=n.n(i),r=n(1),c=n.n(r),s=n(43),l=(n(179),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("main",null,t)},data:a})});l.propTypes={children:c.a.node.isRequired},t.a=l},236:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV"}}}}},237:function(e,t,n){"use strict";var a=n(238),i=n(0),o=n.n(i),r=n(1),c=n.n(r),s=n(267),l=n.n(s);function u(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,c=e.title,s=a.data.site,u=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},238:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV",description:"hire me",author:"koniuszy"}}}}},239:function(e,t,n){"use strict";var a=n(198).b.div.withConfig({displayName:"container__Container",componentId:"hzpodn-0"})(["position:relative;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:flex-start;align-items:center;width:100vw;min-height:100vh;min-height:calc(var(--vh,1vh) * 100);user-select:none;"]);t.a=a},247:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(269),r=n.n(o),c=(n(179),n(198)),s={particles:{number:{value:28,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000000",opacity:1,width:1},move:{enable:!0,speed:3,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["grab","repulse"]},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:.5}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},l=Object(c.b)(r.a).withConfig({displayName:"backgroundParticle__Background",componentId:"sc-156gywt-0"})(["position:fixed;width:100vw;height:100vh;bottom:0;z-index:2;"]);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{params:s}))}},501:function(e,t,n){(function(e){var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(502),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(63))},502:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var a,i,o,r,c,s=1,l={},u=!1,m=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?a=function(e){t.nextTick(function(){f(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){f(e.data)},a=function(e){o.port2.postMessage(e)}):m&&"onreadystatechange"in m.createElement("script")?(i=m.documentElement,a=function(e){var t=m.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):a=function(e){setTimeout(f,0,e)}:(r="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&f(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),a=function(t){e.postMessage(r+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[s]=i,a(s),s++},p.clearImmediate=d}function d(e){delete l[e]}function f(e){if(u)setTimeout(f,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a)}}(t)}finally{d(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(63),n(87))}}]);
//# sourceMappingURL=component---src-pages-index-js-911523f09a501535b6b8.js.map