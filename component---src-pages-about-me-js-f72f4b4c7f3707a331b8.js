(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(233),o=n(227),c=n(245),l=n(235);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,null,i.a.createElement(o.a,null,"Elo"),i.a.createElement(c.e,{firstName:"home",secondName:"projects",thirdName:"realty",to:"/myProjects/"})))}},221:function(e,t,n){"use strict";var a=n(265),i=Object(a.a)({xLarge:"1400px",large:"1024px",medium:"768px",small:"600px"});t.a=i},227:function(e,t,n){"use strict";var a=n(244),i=n.n(a),r=n(197),o=n(221);function c(){var e=i()(["\n    width: 100%;\n    letter-spacing: 10px;\n  "]);return c=function(){return e},e}var l=r.b.h1.withConfig({displayName:"title__Title",componentId:"sc-1mc9oy7-0"})(["width:100%;text-align:center;display:flex;justify-content:center;letter-spacing:18px;margin:30px;line-height:50px;user-select:none;",""],o.a.lessThan("small")(c()));t.a=l},233:function(e,t,n){"use strict";var a=n(234),i=n(0),r=n.n(i),o=n(1),c=n.n(o),l=n(43),s=(n(179),function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement("main",null,t)},data:a})});s.propTypes={children:c.a.node.isRequired},t.a=s},234:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV"}}}}},235:function(e,t,n){"use strict";var a=n(197).b.div.withConfig({displayName:"container__Container",componentId:"hzpodn-0"})(["position:relative;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-between;align-items:center;width:100vw;min-height:100vh;min-height:calc(var(--vh,1vh) * 100);user-select:none;"]);t.a=a},243:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(267),o=n.n(r),c=(n(179),n(197)),l={particles:{number:{value:28,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000000",opacity:1,width:1},move:{enable:!0,speed:3,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["grab","repulse"]},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:.5}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},s=Object(c.b)(o.a).withConfig({displayName:"backgroundParticle__Background",componentId:"sc-156gywt-0"})(["position:fixed;width:100vw;height:100vh;bottom:0;z-index:2;"]);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{params:l}))}},245:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return y});var a=n(6),i=n.n(a),r=n(0),o=n.n(r),c=n(197),l=n(266),s=n.n(l),p=n(243),d=c.b.button.withConfig({displayName:"buttons__Button",componentId:"fw59f7-0"})(["background-color:black;color:white;display:flex;justify-content:flex-start;align-items:center;margin-bottom:100px;border-radius:3px;opacity:0.9;user-select:none;width:150px;overflow:hidden;&:hover{opacity:1;cursor:pointer;}&:focus{outline:none;}"]),u=Object(c.b)(s.a).withConfig({displayName:"buttons__Link",componentId:"fw59f7-1"})(["z-index:3;"]),m=c.b.div.withConfig({displayName:"buttons__ButtonsContainer",componentId:"fw59f7-2"})(["width:100%;z-index:3;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center;order:100;"]),h=c.b.div.withConfig({displayName:"buttons__Arrow",componentId:"fw59f7-3"})(["transform:rotate(45deg);display:inline-block;width:15px;height:15px;border-width:2px 2px 0 0;border-style:solid;margin-left:",";transition:margin 150ms;"],function(e){return e.margin}),f=Object(c.b)(d).withConfig({displayName:"buttons__RealtyButton",componentId:"fw59f7-4"})(["opacity:0.6;&:hover{opacity:0.6;}"]),b=c.b.span.withConfig({displayName:"buttons__ButtonTextFront",componentId:"fw59f7-5"})(["margin-left:10px;letter-spacing:3px;"]),g=Object(c.b)(b).withConfig({displayName:"buttons__ButtonTextBack",componentId:"fw59f7-6"})(["margin-left:0;margin-right:10px;"]),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={home:"10px",me:"0",realty:"10px"},t.handleClick=function(e){e===t.props.firstName?t.setState({home:"45px"}):e===t.props.thirdName&&t.setState({realty:"45px"})},t}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(m,null,o.a.createElement(u,{"aria-label":"home",style:{textDecoration:"none"},duration:.75,fade:!0,to:"/"},o.a.createElement(d,{onClick:function(){return e.handleClick(e.props.firstName)}},o.a.createElement(b,null,this.props.firstName),o.a.createElement(h,{margin:this.state.home}))),o.a.createElement(u,{style:{textDecoration:"none"},duration:.75,fade:!0,to:this.props.to,"aria-label":"main"},o.a.createElement(d,{onClick:function(){return e.handleClick(e.props.secondName)}},o.a.createElement(b,null,this.props.secondName),o.a.createElement(h,{margin:"0"}))),o.a.createElement(f,{onClick:function(){return e.handleClick(e.props.thirdName)},disabled:!0},o.a.createElement(b,null,this.props.thirdName),o.a.createElement(h,{margin:this.state.realty})),o.a.createElement(p.a,null))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-about-me-js-f72f4b4c7f3707a331b8.js.map