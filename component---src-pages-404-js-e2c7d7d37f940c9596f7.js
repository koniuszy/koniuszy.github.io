(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(230),o=n(252),c=n(224),s=n(232),l=n(242);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement(s.a,null,i.a.createElement(c.a,null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."),i.a.createElement(l.e,{firstName:"home",secondName:"projects",thirdName:"realty",to:"/myProjects/"})))}},218:function(e,t,n){"use strict";var a=n(262),i=Object(a.a)({xLarge:"1400px",large:"1024px",medium:"768px",small:"600px"});t.a=i},224:function(e,t,n){"use strict";var a=n(241),i=n.n(a),r=n(194),o=n(218);function c(){var e=i()(["\n    width: 100%;\n    letter-spacing: 10px;\n  "]);return c=function(){return e},e}var s=r.b.h1.withConfig({displayName:"title__Title",componentId:"sc-1mc9oy7-0"})(["width:100%;text-align:center;display:flex;justify-content:center;letter-spacing:18px;margin:30px;line-height:50px;user-select:none;",""],o.a.lessThan("small")(c()));t.a=s},230:function(e,t,n){"use strict";var a=n(231),i=n(0),r=n.n(i),o=n(1),c=n.n(o),s=n(84),l=(n(176),function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement("main",null,t)},data:a})});l.propTypes={children:c.a.node.isRequired},t.a=l},231:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV"}}}}},232:function(e,t,n){"use strict";var a=n(194).b.div.withConfig({displayName:"container__Container",componentId:"hzpodn-0"})(["position:relative;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-between;align-items:center;width:100vw;min-height:100vh;min-height:calc(var(--vh,1vh) * 100);user-select:none;"]);t.a=a},240:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(264),o=n.n(r),c=(n(176),n(194)),s={particles:{number:{value:28,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000000",opacity:1,width:1},move:{enable:!0,speed:3,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["grab","repulse"]},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:.5}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},l=Object(c.b)(o.a).withConfig({displayName:"backgroundParticle__Background",componentId:"sc-156gywt-0"})(["position:fixed;width:100vw;height:100vh;bottom:0;z-index:2;"]);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{params:s}))}},242:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h}),n.d(t,"d",function(){return g}),n.d(t,"c",function(){return y}),n.d(t,"e",function(){return b});var a=n(6),i=n.n(a),r=n(0),o=n.n(r),c=n(194),s=n(263),l=n.n(s),p=n(240),d=c.b.button.withConfig({displayName:"buttons__Button",componentId:"fw59f7-0"})(["background-color:black;color:white;display:flex;justify-content:flex-start;align-items:center;margin-bottom:100px;border-radius:3px;opacity:0.9;user-select:none;width:150px;&:hover{opacity:1;cursor:pointer;}&:focus{outline:none;}"]),u=Object(c.b)(l.a).withConfig({displayName:"buttons__Link",componentId:"fw59f7-1"})(["z-index:3;"]),m=c.b.div.withConfig({displayName:"buttons__ButtonsContainer",componentId:"fw59f7-2"})(["width:100%;z-index:3;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center;order:100;"]),h=c.b.div.withConfig({displayName:"buttons__Arrow",componentId:"fw59f7-3"})(["transform:rotate(45deg);display:inline-block;width:15px;height:15px;border-width:2px 2px 0 0;border-style:solid;margin-left:",";transition:margin 150ms;"],function(e){return e.margin}),f=Object(c.b)(d).withConfig({displayName:"buttons__RealtyButton",componentId:"fw59f7-4"})(["opacity:0.6;&:hover{opacity:0.6;}"]),g=c.b.span.withConfig({displayName:"buttons__ButtonTextFront",componentId:"fw59f7-5"})(["margin-left:10px;letter-spacing:3px;"]),y=Object(c.b)(g).withConfig({displayName:"buttons__ButtonTextBack",componentId:"fw59f7-6"})(["margin-left:0;margin-right:10px;"]),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={home:"10px",me:"0",realty:"10px"},t.handleClick=function(e){e===t.props.firstName?t.setState({home:"45px"}):e===t.props.secondName?t.setState({me:"15px"}):t.state.setState({realty:"45px"})},t}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(m,null,o.a.createElement(u,{"aria-label":"home",style:{textDecoration:"none"},duration:.75,fade:!0,to:"/"},o.a.createElement(d,{onClick:function(){return e.handleClick(e.props.firstName)}},o.a.createElement(g,null,this.props.firstName),o.a.createElement(h,{margin:this.state.home}))),o.a.createElement(u,{style:{textDecoration:"none"},duration:.75,fade:!0,to:this.props.to,"aria-label":"main"},o.a.createElement(d,{onClick:function(){return e.handleClick(e.props.secondName)}},o.a.createElement(g,null,this.props.secondName),o.a.createElement(h,{margin:this.state.me}))),o.a.createElement(f,{onClick:function(){return e.handleClick(e.props.thirdName)},disabled:!0},o.a.createElement(g,null,this.props.thirdName),o.a.createElement(h,{margin:this.state.realty})),o.a.createElement(p.a,null))},t}(o.a.Component)},252:function(e,t,n){"use strict";var a=n(253),i=n(0),r=n.n(i),o=n(1),c=n.n(o),s=n(282),l=n.n(s);function p(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,c=e.title,s=a.data.site,p=t||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:c},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=p},253:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV",description:"hire me",author:"koniuszy"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-e2c7d7d37f940c9596f7.js.map