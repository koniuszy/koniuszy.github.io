(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(241),o=n(243),c=n(6),l=n.n(c),u=n(219),s=n.n(u),g=n(555),M=n(201),m=n(43),p=n(297),N=n.n(p),j=n(982),d=n(556),I=n.n(d),y=(n(86),n(87),n(557)),T=n.n(y),h=n(558),D=n.n(h),x=M.b.div.withConfig({displayName:"display__TopContainer",componentId:"y6ow8p-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;align-items:center;width:135px;height:35px;margin-top:10px;background-color:white;border-radius:10px;margin-bottom:10px;margin-right:12px;margin-left:12px;overflow:hidden;white-space:noWrap;"]),L=M.b.div.withConfig({displayName:"display__DisplayContainer",componentId:"y6ow8p-1"})(["max-width:125px;max-height:32px;text-align:left;font-size:24px;margin-left:9px;"]),A=function(e){var t=e.display,n=e.displayZero;return i.a.createElement(x,null,i.a.createElement(L,null," ",t.length>0?t:n," "))},f=M.b.div.withConfig({displayName:"Button__ButtonContainer",componentId:"sc-172w179-0"})(["width:38px;height:38px;border-radius:19px;margin-bottom:13px;background-color:",";transition:background-color 1s;padding:1px;cursor:pointer;text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;align-content:center;&:hover{box-shadow:0px 0px 2px 5px rgba(255,255,255,0.75);}"],function(e){return e.color}),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={color:t.Color},t.Color="#a91548",t.DarkColor="#660c2b",t.time=void 0,t.changeColor=function(){t.time=setTimeout(function(){t.getDarker(),t.changeColor()},5e3)},t.getDarker=function(){t.setState({color:t.DarkColor}),setTimeout(t.getLighter,450)},t.getLighter=function(){t.setState({color:t.Color})},t.handleClick=function(e){t.props.onClick(e),t.getDarker()},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({color:this.Color}),this.changeColor()},n.componentWillUnmount=function(){clearTimeout(this.time)},n.render=function(){return i.a.createElement(f,{onClick:this.handleClick,"data-value":this.props.value,color:this.state.color},i.a.createElement(i.a.Fragment,null,this.props.value))},t}(a.Component),E=M.b.div.withConfig({displayName:"Buttons__ButtonsContainers",componentId:"yu8ws6-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin-right:14px;margin-left:14px;margin-top:5px;color:white;align-items:center;align-content:center;"]),b=function(e){return i.a.createElement(E,null," ",e.children," ")},w=(n(189),M.b.div.withConfig({displayName:"App__PageContainer",componentId:"ue15h4-0"})(['display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;margin:0;font-family:"Nothing You Could Do",cursive;user-select:none;margin-top:20px;'])),k=M.b.div.withConfig({displayName:"App__CalculatorContainer",componentId:"ue15h4-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:flex-start;align-content:flex-start;width:170px;height:262px;background-color:#0095b8;border-radius:10px;"]),z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={number:[],start:["0"]},t.calculateOperations=function(e){var n=t.state.number.join("");return"+"===n.charAt(n.length-1)&&(n+="0"),n&&(n=D.a.eval(n),(n=String(n)).length<=12?(e&&(n+="+"),t.setState({number:[n]})):t.setState({number:["Too much !!! "]})),n.length},t.handleClick=function(e){var n=e.target.getAttribute("data-value"),a=T()(t.state.number,{$push:[n]}),i="Too much !!!";switch(n){case"=":if(a.includes(i))break;t.calculateOperations();break;default:if("+"===n&&(console.log(t.state.number),t.state.number.includes("+")||0===t.state.number.length||t.state.number[0].includes("+"))){if(console.log("ok"),"+"===a[-2])break;1===t.state.number.length&&t.state.number[0].includes("+")&&(a[-1]="="),t.calculateOperations(!0);break}if(a.includes(i)){t.setState({number:[i]});break}if(a.length<=12){if(1===a.length&&"0"===n)break;t.setState({number:a});break}t.setState({number:[i]})}},t.getButtons=function(){return["7","8","9","4","5","6","1","2","3","+","0","="].map(function(e){return i.a.createElement(C,{onClick:t.handleClick,value:e,key:e})})},t}return l()(t,e),t.prototype.render=function(){return i.a.createElement(w,null,i.a.createElement(k,null,i.a.createElement(A,{display:this.state.number,displayZero:this.state.start}),i.a.createElement(b,null,this.getButtons())))},t}(a.Component),O=M.b.form.withConfig({displayName:"Books__Form",componentId:"sc-122ki2v-0"})(["margin-bottom:5px;"]),S=M.b.div.withConfig({displayName:"Books__Container",componentId:"sc-122ki2v-1"})(["margin:0 20px;"]),v=M.b.div.withConfig({displayName:"Books__BooksWrapper",componentId:"sc-122ki2v-2"})(["display:flex;justify-content:center;align-items:flex-start;overflow:scroll;height:303px;flex-wrap:wrap;"]),Y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={missingWord:"",isLoading:!0,books:[],startIndex:0},n.titleImgDescription=[],n.time=void 0,n.inputChange=function(e){clearTimeout(n.time),n.setState({missingWord:e.target.value}),n.time=setTimeout(function(){n.titleImgDescription=[],n.fetchBooks()},500)},n.submit=function(e){e.preventDefault(),n.titleImgDescription=[],n.fetchBooks()},n.fetchBooks=function(){fetch("https://www.googleapis.com/books/v1/volumes?q="+n.state.missingWord+"+intitle&startIndex="+n.state.startIndex).then(function(e){return e.json()}).then(function(e){return n.setState({books:e.items},n.checkFetch)})},n.checkFetch=function(){void 0!==n.state.books&&n.setState({isLoading:!1})},n.printBooks=function(){return void 0===n.state.books?n.titleImgDescription:n.titleImgDescription.map(function(e){return e.key===n.state.books[0].id}).includes(!0)?n.titleImgDescription:(n.state.books.map(function(e){var t=e.volumeInfo.description;return void 0===t?t="missing description":t.length>100&&(t=t.substr(0,t.lastIndexOf(" ",100)),t+="..."),n.titleImgDescription.push(i.a.createElement("div",{className:"bookContainer",key:e.id},i.a.createElement("h4",null,"Title:",i.a.createElement("span",{className:"title"}," ",e.volumeInfo.title)),n.getImg(e),i.a.createElement("h4",{className:"description"},t))),1}),i.a.createElement("div",null,n.titleImgDescription))},n.getImg=function(e){return void 0===e.volumeInfo.imageLinks?i.a.createElement("h4",null,"Missing img"):i.a.createElement("img",{alt:"missing img",src:e.volumeInfo.imageLinks.thumbnail})},n.trackScrolling=function(){var e=document.getElementById("footer");if(n.isBottom(e)){var t=n.state.startIndex;t+=10,n.setState({startIndex:t},n.fetchBooks),n.containerRef.current.removeEventListener("scroll",n.trackScrolling),setTimeout(function(){n.containerRef.current.addEventListener("scroll",n.trackScrolling)},300)}},n.containerRef=i.a.createRef(),n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.containerRef.current.addEventListener("scroll",this.trackScrolling)},n.componentWillUnmount=function(){this.containerRef.current.removeEventListener("scroll",this.trackScrolling)},n.isBottom=function(e){return!(this.state.books.length<10)&&e.getBoundingClientRect().bottom<=window.innerHeight},n.render=function(){return i.a.createElement(S,null,i.a.createElement(v,{ref:this.containerRef},i.a.createElement(O,{className:"input",onSubmit:this.submit},i.a.createElement("label",{htmlFor:"title"},"enter the title of a book"),i.a.createElement("input",{id:"title",type:"text",autoFocus:!0,placeholder:"Title",onChange:this.inputChange})),this.state.isLoading?this.titleImgDescription:this.printBooks(),i.a.createElement("span",{id:"footer"})))},t}(i.a.Component),Q=M.b.h3.withConfig({displayName:"App__Title",componentId:"sc-1lgrtzp-0"})(["font-size:26px;margin-bottom:5px;margin-top:20px;margin-right:2px;"]),_=function(){return i.a.createElement("div",null,i.a.createElement(Q,null,"search Google's"," ",i.a.createElement("a",{className:"link",href:"https://developers.google.com/books/docs/v1/using#WorkingVolumes"},"database")),i.a.createElement(Y,null))},U=n(209),B=n(254);function F(){var e=s()(["\n    width: 300px;\n  "]);return F=function(){return e},e}function P(){var e=s()(["\n    width: 40px;\n  "]);return P=function(){return e},e}function Z(){var e=s()(["\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  "]);return Z=function(){return e},e}function G(){var e=s()(["\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  "]);return G=function(){return e},e}function W(){var e=s()(["\n    order: 0;\n  "]);return W=function(){return e},e}function R(){var e=s()(["\n    order: 1;\n  "]);return R=function(){return e},e}function H(){var e=s()(["\n    margin-top: 0;\n  "]);return H=function(){return e},e}var X=M.b.div.withConfig({displayName:"myProjects__Container",componentId:"sc-1mj6vop-0"})(["display:flex;width:100%;flex-wrap:wrap;justify-content:space-around;margin-top:60px;",""],U.a.lessThan("large")(H())),J=M.b.div.withConfig({displayName:"myProjects__CardContainer",componentId:"sc-1mj6vop-1"})(["z-index:5;margin:50px;"]),K=Object(M.b)(J).withConfig({displayName:"myProjects__GlacialContainer",componentId:"sc-1mj6vop-2"})([""," ",""],U.a.lessThan("xLarge")(R()),U.a.greaterThan("xLarge")(W())),V=Object(M.b)(j.b).withConfig({displayName:"myProjects__Front",componentId:"sc-1mj6vop-3"})(["padding:0 !important;box-shadow:none !important;"]),q=Object(M.b)(j.a).withConfig({displayName:"myProjects__Back",componentId:"sc-1mj6vop-4"})(["padding:0 !important;box-shadow:none !important;"]),$=M.b.div.withConfig({displayName:"myProjects__FrontSideCard",componentId:"sc-1mj6vop-5"})(["color:black;border-radius:3px;width:300px;height:450px;background-color:transparent;opacity:1;z-index:100;text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-content:space-between;"]),ee=Object(M.b)($).withConfig({displayName:"myProjects__BackSideCard",componentId:"sc-1mj6vop-6"})(["background-color:black;align-content:space-between;"]),te=Object(M.b)($).withConfig({displayName:"myProjects__SuperFrontSide",componentId:"sc-1mj6vop-7"})(["width:500px;height:450px;",""],U.a.lessThan("large")(G())),ne=Object(M.b)(ee).withConfig({displayName:"myProjects__SuperBackSide",componentId:"sc-1mj6vop-8"})(["width:500px;height:450px;",""],U.a.lessThan("large")(Z())),ae=Object(M.b)(N.a).withConfig({displayName:"myProjects__Picture",componentId:"sc-1mj6vop-9"})(["margin-top:10px;width:250px;border-radius:5px;cursor:pointer;"]),ie=Object(M.b)(B.b).withConfig({displayName:"myProjects__FrontButton",componentId:"sc-1mj6vop-10"})(["margin-bottom:30px;"]),re=Object(M.b)(ie).withConfig({displayName:"myProjects__BackButton",componentId:"sc-1mj6vop-11"})(["justify-content:flex-end;background-color:black;color:white;"]),oe=Object(M.b)(B.a).withConfig({displayName:"myProjects__ArrowBack",componentId:"sc-1mj6vop-12"})(["margin-left:0;margin-right:",";transform:rotate(-135deg);"],function(e){return e.margin}),ce=M.b.span.withConfig({displayName:"myProjects__TextBack",componentId:"sc-1mj6vop-13"})(["margin-top:20px;letter-spacing:2px;margin-bottom:0;width:100%;color:white;width:90%;line-height:24px;"]),le=Object(M.b)(ce).withConfig({displayName:"myProjects__TextFront",componentId:"sc-1mj6vop-14"})(["margin-top:0;color:black;"]),ue=M.b.a.withConfig({displayName:"myProjects__ExternalA",componentId:"sc-1mj6vop-15"})(["color:white;"]),se=M.b.img.withConfig({displayName:"myProjects__GlacialLogo",componentId:"sc-1mj6vop-16"})(["width:100px;"]),ge=M.b.img.withConfig({displayName:"myProjects__LogoOnPicture",componentId:"sc-1mj6vop-17"})(["width:75px;position:absolute;",""],U.a.lessThan("small")(P())),Me=Object(M.b)(ae).withConfig({displayName:"myProjects__PictureGlacial",componentId:"sc-1mj6vop-18"})(["width:500px;margin:0;"]),me=M.b.div.withConfig({displayName:"myProjects__GlacialWrapper",componentId:"sc-1mj6vop-19"})(["position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;",""],U.a.lessThan("small")(F())),pe=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={API:!1,Glacial:!1,Calculator:!1,marginFirst:"10px",marginSecond:"0",GlacialMarginFront:"10px",GlacialMarginBack:"0",marginThird:"10px",marginFourth:"0"},t.getPictureGlacial=function(e){return i.a.createElement("a",{"aria-label":"GSAS",rel:"noopener noreferrer",target:"_blank",href:"https://glacialscript.com"},i.a.createElement(me,null,i.a.createElement(Me,{alt:"glacial",fluid:e.glacial.childImageSharp.fluid}),i.a.createElement(ge,{alt:"logo",src:I.a})))},t.handleClick=function(e,n,a){var i,r;n.preventDefault(),1===a?(i="45px",r="10px"):2===a&&(i="10px",r="45px"),1===e?t.setState(function(e){return{API:!e.API,marginFirst:i,marginSecond:r}}):2===e?t.setState(function(e){return{Glacial:!e.Glacial,GlacialMarginFront:i,GlacialMarginBack:r}}):3===e&&t.setState(function(e){return{Calculator:!e.Calculator,marginThird:i,marginFourth:r}})},t}return l()(t,e),t.prototype.render=function(){var e,t=this;return i.a.createElement(X,null,i.a.createElement(J,null,i.a.createElement(j.c,{flipOnClick:!1,isFlipped:this.state.API,flipDirection:"horizontal"},i.a.createElement(V,null,i.a.createElement($,null,i.a.createElement(_,null),i.a.createElement(ie,{onClick:function(e){return t.handleClick(1,e,1)}},i.a.createElement(B.d,null,"about "),i.a.createElement(B.a,{margin:this.state.marginFirst})))),i.a.createElement(q,null,i.a.createElement(ee,null,i.a.createElement(ce,null,i.a.createElement("h4",null,"May 2019"),i.a.createElement("br",null),i.a.createElement("p",null,"Type the title of a book to search Google's"," ",i.a.createElement(ue,{"aria-label":"API",href:"https://developers.google.com/books/docs/v1/using#WorkingVolumes"},"database"),"."),i.a.createElement("p",null,"Recruitment task for"," ",i.a.createElement(ue,{"aria-label":"STXNEXT",href:"https://stxnext.com/"},"STXNEXT")," ","company as a part of my practice."),i.a.createElement("p",null,"Through this"," ",i.a.createElement(ue,{"aria-label":"Github",href:"https://github.com/koniuszy/Api-stx"},"exercise")," ","I have developed fetching skills.")),i.a.createElement(re,{onClick:function(e){return t.handleClick(1,e,2)}},i.a.createElement(oe,{margin:this.state.marginSecond}),i.a.createElement(B.c,null,"back")))))),i.a.createElement(K,null,i.a.createElement(j.c,{flipOnClick:!1,isFlipped:this.state.Glacial,flipDirection:"horizontal"},i.a.createElement(V,null,i.a.createElement(te,null,(e=this.getPictureGlacial,i.a.createElement(m.StaticQuery,{query:"2888903324",render:e,data:g})),i.a.createElement(le,null,"Glacial Script AS "),i.a.createElement(ie,{onClick:function(e){return t.handleClick(2,e,1)}},i.a.createElement(B.d,null,"about "),i.a.createElement(B.a,{margin:this.state.GlacialMarginFront})))),i.a.createElement(q,null,i.a.createElement(ne,{key:"back"},i.a.createElement(ce,null,i.a.createElement("h4",null,"April 2019"),i.a.createElement(ue,{"aria-label":"React",rel:"noopener noreferrer",target:"_blank",href:"https://reactjs.org"},"React"),"&",i.a.createElement(ue,{"aria-label":"Gatsbsy",rel:"noopener noreferrer",target:"_blank",href:"https://www.gatsbyjs.org"},"Gatsby"),i.a.createElement("br",null),i.a.createElement("br",null),"A company's website ",i.a.createElement("br",null)," for my first ",i.a.createElement("br",null)," entrepreneurial attempt.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(se,{alt:"logo",src:I.a})),i.a.createElement(re,{onClick:function(e){return t.handleClick(2,e,2)}},i.a.createElement(oe,{margin:this.state.GlacialMarginBack}),i.a.createElement(B.c,null,"back")))))),i.a.createElement(J,null,i.a.createElement(j.c,{flipDirection:"horizontal",flipOnClick:!1,isFlipped:this.state.Calculator},i.a.createElement(V,null,i.a.createElement($,null,i.a.createElement(z,null),i.a.createElement(le,null,"Mini calculator"),i.a.createElement(ie,{onClick:function(e){return t.handleClick(3,e,1)}},i.a.createElement(B.d,null,"about "),i.a.createElement(B.a,{margin:this.state.marginThird})))),i.a.createElement(q,null,i.a.createElement(ee,null,i.a.createElement(ce,null,i.a.createElement("h4",null,"February 2019")," ",i.a.createElement("br",null),"My first app in React. ",i.a.createElement("br",null)," ",i.a.createElement("br",null)," ",i.a.createElement("br",null)," A challenge to create ",i.a.createElement("br",null)," an app that looks ",i.a.createElement("br",null),"and works exactly ",i.a.createElement("br",null),"as the given model."),i.a.createElement(re,{onClick:function(e){return t.handleClick(3,e,2)}},i.a.createElement(oe,{margin:this.state.marginFourth}),i.a.createElement(B.c,null,"back ")))))))},t}(i.a.Component),Ne=n(245);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"My Projects"}),i.a.createElement(Ne.a,null,i.a.createElement(B.e,{firstName:"home",secondName:"about me",title:"My projects",to:"/aboutMe/"}),i.a.createElement(pe,null)))}},209:function(e,t,n){"use strict";var a=n(273),i=Object(a.a)({xLarge:"1400px",large:"1024px",medium:"768px",small:"600px"});t.a=i},230:function(e,t,n){"use strict";var a=n(219),i=n.n(a),r=n(201),o=n(209);function c(){var e=i()(["\n    width: 100%;\n    letter-spacing: 10px;\n  "]);return c=function(){return e},e}var l=r.b.h1.withConfig({displayName:"title__Title",componentId:"sc-1mhye38-0"})(["font-weight:500;width:50%;text-align:center;display:flex;justify-content:center;letter-spacing:18px;line-height:50px;user-select:none;margin-bottom:10px;padding-bottom:0;",""],o.a.lessThan("small")(c()));t.a=l},241:function(e,t,n){"use strict";var a=n(242),i=n(0),r=n.n(i),o=n(1),c=n.n(o),l=n(43),u=(n(179),function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement("main",null,t)},data:a})});u.propTypes={children:c.a.node.isRequired},t.a=u},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV"}}}}},243:function(e,t,n){"use strict";var a=n(244),i=n(0),r=n.n(i),o=n(1),c=n.n(o),l=n(272),u=n.n(l);function s(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,c=e.title,l=a.data.site,s=t||l.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},244:function(e){e.exports={data:{site:{siteMetadata:{title:"Michal Konczak CV",description:"hire me",author:"koniuszy"}}}}},245:function(e,t,n){"use strict";var a=n(201).b.div.withConfig({displayName:"container__Container",componentId:"ljg5f-0"})(["position:relative;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:flex-start;align-items:center;width:100vw;min-height:100vh;min-height:calc(var(--vh,1vh) * 100);user-select:none;"]);t.a=a},253:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(274),o=n.n(r),c=(n(179),n(201)),l={particles:{number:{value:28,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000000",opacity:1,width:1},move:{enable:!0,speed:3,direction:"top-right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["grab","repulse"]},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:.5}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},u=Object(c.b)(o.a).withConfig({displayName:"backgroundParticle__Background",componentId:"sc-1x26e63-0"})(["position:fixed;width:100vw;height:100vh;bottom:0;z-index:2;"]);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{params:l}))}},254:function(e,t,n){"use strict";n.d(t,"b",function(){return j}),n.d(t,"a",function(){return y}),n.d(t,"d",function(){return T}),n.d(t,"c",function(){return h}),n.d(t,"e",function(){return D});var a=n(6),i=n.n(a),r=n(219),o=n.n(r),c=n(0),l=n.n(c),u=n(201),s=n(253),g=n(230),M=n(275),m=n.n(M),p=n(209);function N(){var e=o()(["\n    order: 5\n    margin-top: 20px;\n  "]);return N=function(){return e},e}var j=u.b.button.withConfig({displayName:"buttons__Button",componentId:"sc-1a0adxz-0"})(["background-color:black;color:white;display:flex;justify-content:center;align-items:center;border-radius:3px;opacity:0.9;user-select:none;width:150px;height:32px;overflow:hidden;&:hover{opacity:1;cursor:pointer;}&:focus{outline:none;}"]),d=Object(u.b)(m.a).withConfig({displayName:"buttons__Link",componentId:"sc-1a0adxz-1"})(["z-index:3;height:32px;",""],p.a.lessThan("small")(N())),I=u.b.div.withConfig({displayName:"buttons__ButtonsContainer",componentId:"sc-1a0adxz-2"})(["width:100%;z-index:3;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center;order:-10;margin-top:50px;margin-bottom:50px;"]),y=u.b.div.withConfig({displayName:"buttons__Arrow",componentId:"sc-1a0adxz-3"})(["transform:rotate(45deg);display:inline-block;width:15px;height:15px;border-width:2px 2px 0 0;border-style:solid;margin-left:",";transition:margin 150ms;"],function(e){return e.margin}),T=u.b.span.withConfig({displayName:"buttons__ButtonTextFront",componentId:"sc-1a0adxz-4"})(["margin-left:10px;letter-spacing:3px;"]),h=Object(u.b)(T).withConfig({displayName:"buttons__ButtonTextBack",componentId:"sc-1a0adxz-5"})(["margin-left:0;margin-right:10px;"]),D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={home:"10px",me:"0",realty:"10px"},t.handleClick=function(e){e===t.props.firstName?t.setState({home:"45px"}):e===t.props.thirdName&&t.setState({realty:"45px"})},t}return i()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(I,null,l.a.createElement(d,{fade:!0,"aria-label":"home",style:{textDecoration:"none"},duration:.75,to:"/"},l.a.createElement(j,{onClick:function(){return e.handleClick(e.props.firstName)}},l.a.createElement(T,null,this.props.firstName))),l.a.createElement(g.a,null," ",this.props.title," "),l.a.createElement(d,{style:{textDecoration:"none"},fade:!0,duration:.75,to:this.props.to,"aria-label":"main"},l.a.createElement(j,{onClick:function(){return e.handleClick(e.props.secondName)}},l.a.createElement(T,null,this.props.secondName))),l.a.createElement(s.a,null))},t}(l.a.Component)},555:function(e){e.exports={data:{glacial:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACWElEQVQoz0WR609TQRDFZ/fetiKCFj6YiCAKtCkClra3LRAUkQDBGFHBmGCMz5QIShTxg8ZHlCBvAqUtKmikIn/m8ey2xg8nc3fu7m/OzEjt8CGMTgwUUX2liODQIWoGD1Az9Meqqv8X8/s2Hundhb/nm5XTOQ+dzEKnClDJnJV425Bg+XHQPO7bRUXXOoKDBnaA2jLU6N/30b6fFqhaMtDRz3C6v8NJF6DTO4TmIcdZvfLSHiovF+GPfYI0Z6wTcw70/kDFxT3r7lj/PiqYD/TswOetQJ29CxV5ASeVg68rB8fbhIpvQKp40TiqHvgNJ5SB1I9Bt85Cn38FHZmBbnkM1Ux1fIC0fyRkFir0FNI4AWFU0QXoxAZU5xJ0bAmiYqtwk1twE6tQDTcJvAFlVHcVcmoYwmjPrXNQbW8hLZPs4gnk3EO6nIAKP4fQmXGnvCxEwjOQyBwv3Iecvg515jakYZzwWwSNlmCNd6AuzFugMsDQVMm1KdpEcPs7SFtZtr3IS8KulVRvXI5auNSN0OVIyUkH5xt+RsAjCzWF5GSfva9MPjRt5y+B7gL86aydmWp6QLFieOq/QpOcKf9FjcM3bP0189PsYJydjLHYPTs/FefIol8gbmqTM9ywc9SJdSs3tc3N5akC3HSe5xxjzm5Ue1t8vE7IIlSM2+ZCtNlwwmx5DeLz1riQZbixBTiJFbg8+1jAisV8KS6sHB2PBT0CjJvYcsmZAXPT9ps5ceOL8NONG1+yEDe5Cd3xHj6T7/nKImu2iJFDkOnAOjMQsyQuxLRacryMvyT/d1aSI/dZAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/reponame/static/2f006b44d1c11e40089500e49f940f7f/c28cd/banner.png",srcSet:"/reponame/static/2f006b44d1c11e40089500e49f940f7f/c2e90/banner.png 480w,\n/reponame/static/2f006b44d1c11e40089500e49f940f7f/dbb77/banner.png 960w,\n/reponame/static/2f006b44d1c11e40089500e49f940f7f/c28cd/banner.png 1440w",sizes:"(max-width: 1440px) 100vw, 1440px"}}}}}},556:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTY1IiBoZWlnaHQ9IjEzNjciIHZpZXdCb3g9IjAgMCA5NjUgMTM2NyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgLjA5MWg4Mi43ODRWMTIySDB6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImMiIGQ9Ik0wIDEzNjcuMDJoOTY0LjczN1YuMDAySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTI0NS4wMikiPgogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTY4Ljk1OCA0MS4yMzFjMC0xNS4zNDQtMTIuMzA1LTI3LjY1Mi0yNy40OC0yNy42NTItMTUuNTEyIDAtMjcuNjUyIDEyLjMwOC0yNy42NTIgMjcuNjUyIDAgMTUuMTc4IDEyLjE0IDI3LjY1NiAyNy42NTMgMjcuNjU2IDE1LjE3NCAwIDI3LjQ3OS0xMi40NzggMjcuNDc5LTI3LjY1NnpNODIuNzg0IDEuNjA5djc5LjI0OGMwIDIyLjkzMS0xOC41NDcgNDEuMTQzLTQxLjQ3OCA0MS4xNDMtMTYuMTg0IDAtMzAuMzQ4LTkuMjc0LTM3LjI2MS0yMi43NjVsMTEuMTMtNy43NTZjNC41NDkgOS45NDcgMTQuMzMgMTcuMDMgMjYuMTMgMTcuMDMgMTUuMTc1IDAgMjcuNDg3LTEyLjMwOCAyNy40ODctMjcuNjUyVjcwLjU3Yy02LjIzNSA3LjI1Mi0xNS41MTMgMTEuODA1LTI3LjY1MiAxMS44MDVDMTguMzc1IDgyLjM3NSAwIDYzLjk5NiAwIDQxLjIzMSAwIDE4LjMgMTguMzc1LjA5MSA0MS4xNC4wOTFjMTIuMTM5IDAgMjEuNDE3IDQuNTUyIDI3LjY1MiAxMS44MDFWMS42MDloMTMuOTkyeiIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwNi4zNjYgMTMyNS44NzdoMTMuODI2di0xMjYuNDYxaC0xMy44MjZ6TTIwOC41MzUgMTI4Ni4yNTFjMC0xNS4zNDQtMTIuMTQtMjcuNjUyLTI3LjQ4LTI3LjY1MmEyNy41NTggMjcuNTU4IDAgMCAwLTI3LjY1MiAyNy42NTIgMjcuNTYgMjcuNTYgMCAwIDAgMjcuNjUzIDI3LjY1NmMxNS4zMzkgMCAyNy40NzktMTIuMzA5IDI3LjQ3OS0yNy42NTZ6bTEzLjgyNi0zOS42MjJ2NzkuMjQ4aC0xMy44MjZ2LTExLjI5NmMtNi43NCA3LjkyMi0xNi44NjEgMTIuODE0LTI5LjM0IDEyLjgxNC0yMS4yNDMgMC0zOS42MTgtMTguMzc5LTM5LjYxOC00MS4xNDQgMC0yMi43NjIgMTguMzc1LTQxLjE0IDM5LjYxOS00MS4xNCAxMi40NzggMCAyMi41OTkgNC44ODggMjkuMzM5IDEyLjgxNHYtMTEuMjk2aDEzLjgyNnpNMjQxLjczMiAxMjg2LjI1MWMwLTIyLjkzMSAxOC4zNzUtNDEuMTQgNDEuNDgtNDEuMTQgMTYuODYgMCAzMS4xOSA5LjYxIDM3LjYgMjMuOTQ0bC0xMi42NTIgNS43MzFjLTQuMzgzLTkuNjA5LTEzLjQ4OC0xNi4xODctMjQuOTQ5LTE2LjE4Ny0xNS44NTIgMC0yNy42NTMgMTEuOTczLTI3LjY1MyAyNy42NTIgMCAxNS42ODMgMTEuODAxIDI3LjY1NiAyNy42NTMgMjcuNjU2IDExLjQ2MSAwIDIwLjU2Ni02LjU3OCAyNC45NS0xNi4xODdsMTIuNjUgNS43MzFjLTYuNDA5IDE0LjMzLTIwLjczOSAyMy45NDQtMzcuNiAyMy45NDQtMjMuMTA0IDAtNDEuNDc5LTE4LjIwOS00MS40NzktNDEuMTQ0TTM0MC4zNDEgMTMyNS44NzdoMTMuNjUzdi03OS4yNDhoLTEzLjY1M3Y3OS4yNDh6bS0yLjM2NC0xMDMuMDIyYzAtNS4yMyA0LjIxNy05LjEwOCA5LjI3OC05LjEwOCA0Ljg4NyAwIDkuMTA0IDMuODc4IDkuMTA0IDkuMTA4IDAgNS4wNTYtNC4yMTcgOS4xMDQtOS4xMDQgOS4xMDQtNS4wNjEgMC05LjI3OC00LjA0OC05LjI3OC05LjEwNHpNNDQ0LjcwMiAxMjg2LjI1MWMwLTE1LjM0NC0xMi4xNC0yNy42NTItMjcuNDgtMjcuNjUyYTI3LjU1OSAyNy41NTkgMCAwIDAtMjcuNjUyIDI3LjY1MiAyNy41NiAyNy41NiAwIDAgMCAyNy42NTMgMjcuNjU2YzE1LjMzOSAwIDI3LjQ3OS0xMi4zMDkgMjcuNDc5LTI3LjY1NnptMTMuODI2LTM5LjYyMnY3OS4yNDhoLTEzLjgyNnYtMTEuMjk2Yy02Ljc0IDcuOTIyLTE2Ljg2MSAxMi44MTQtMjkuMzQgMTIuODE0LTIxLjI0MyAwLTM5LjYxOC0xOC4zNzktMzkuNjE4LTQxLjE0NCAwLTIyLjc2MiAxOC4zNzUtNDEuMTQgMzkuNjE5LTQxLjE0IDEyLjQ3OCAwIDIyLjU5OSA0Ljg4OCAyOS4zMzkgMTIuODE0di0xMS4yOTZoMTMuODI2ek00ODIuMTA5IDEzMjUuODc3aDEzLjgyNnYtMTI2LjQ2MWgtMTMuODI2ek01NTQuOTMyIDEzMTcuMTA4bDcuNzU3LTExLjI5NmM1LjIyNiA0LjcyMiAxMy40ODcgOS4xMDUgMjIuNzU4IDkuMTA1IDkuMjc3IDAgMTUuMzQ2LTQuMzgzIDE1LjM0Ni0xMS42MzUgMC04LjA5Mi04LjI2LTEwLjExNy0xNy4xOTktMTIuNjQ0LTExLjYzNS0zLjIwNC0yNS4yODgtNi41NzgtMjUuMjg4LTIyLjI1NyAwLTE1LjAwOSAxMi45ODItMjMuMjcgMjguNDk1LTIzLjI3IDkuMjcxIDAgMTguNTQ4IDMuMDM1IDI1LjI5IDcuNzU3bC03LjkyNCAxMC42MjFjLTYuNTc0LTQuNzItMTIuOTgyLTYuMjM3LTE4LjU0OC02LjIzNy04Ljc3MiAwLTE0LjMzIDMuNzA4LTE0LjMzIDkuNzc4IDAgNy43NTYgOS42MSA5LjYxMSAxOS43MjMgMTIuMzA4IDExLjI5NiAzLjAzNSAyMy4xMDQgNy40MiAyMy4xMDQgMjIuOTM1IDAgMTUuODQ4LTExLjYzNSAyNS4xMjItMjkuMzQgMjUuMTIyLTEzLjQ4OCAwLTIyLjkzLTUuMjI2LTI5Ljg0NC0xMC4yODdNNjI4LjkzOCAxMjg2LjI1MWMwLTIyLjkzMSAxOC4zNzUtNDEuMTQgNDEuNDgtNDEuMTQgMTYuODYgMCAzMS4xOSA5LjYxIDM3LjU5OCAyMy45NDRsLTEyLjY1IDUuNzMxYy00LjM4My05LjYwOS0xMy40ODgtMTYuMTg3LTI0Ljk0OS0xNi4xODctMTUuODUyIDAtMjcuNjUzIDExLjk3My0yNy42NTMgMjcuNjUyIDAgMTUuNjgzIDExLjgwMSAyNy42NTYgMjcuNjUzIDI3LjY1NiAxMS40NjEgMCAyMC41NjYtNi41NzggMjQuOTUtMTYuMTg3bDEyLjY1IDUuNzMxYy02LjQwOSAxNC4zMy0yMC43NCAyMy45NDQtMzcuNiAyMy45NDQtMjMuMTA0IDAtNDEuNDc5LTE4LjIwOS00MS40NzktNDEuMTQ0TTc3MC44ODUgMTI0OC4xNDdsLTQuNzIyIDExLjgwM2MtMi4wMTktLjg0My00LjM4Mi0xLjM1MS02LjQwOC0xLjM1MS0xMS44IDAtMjAuNzM5IDEwLjc5LTIwLjczOSAyNS4yOTJ2NDEuOTg2SDcyNS4xOXYtNzkuMjQ4aDEzLjgyNnYxMi4zMDljNC4yMTctOC40MzIgMTAuOTY0LTEzLjgyNyAyMC40MDctMTMuODI3IDQuNzIxIDAgOC43NjYgMS4zNDggMTEuNDYyIDMuMDM1TTc4My42ODIgMTMyNS44NzdoMTMuNjUzdi03OS4yNDhoLTEzLjY1M3Y3OS4yNDh6bS0yLjM2NC0xMDMuMDIyYzAtNS4yMyA0LjIxNy05LjEwOCA5LjI3Ny05LjEwOCA0Ljg4OCAwIDkuMTA1IDMuODc4IDkuMTA1IDkuMTA4IDAgNS4wNTYtNC4yMTcgOS4xMDQtOS4xMDUgOS4xMDQtNS4wNiAwLTkuMjc3LTQuMDQ4LTkuMjc3LTkuMTA0ek04OTIuMjYgMTI4Ni4yNTFhMjcuNTU5IDI3LjU1OSAwIDAgMC0yNy42NTMtMjcuNjUyYy0xNS4zNCAwLTI3LjQ4NiAxMi4zMDgtMjcuNDg2IDI3LjY1MiAwIDE1LjM0NyAxMi4xNDUgMjcuNjU2IDI3LjQ4NiAyNy42NTZhMjcuNTYgMjcuNTYgMCAwIDAgMjcuNjUzLTI3LjY1Nm0xMy44MjYgMGMwIDIyLjc2NS0xOC4zNzUgNDEuMTQ0LTM5LjYyNiA0MS4xNDQtMTIuNDc5IDAtMjIuNTkzLTQuODkyLTI5LjM0LTEyLjgxNHY1MS43NjVoLTEzLjgyNnYtMTE5LjcxN2gxMy44Mjd2MTEuMjk2YzYuNzQ2LTcuOTI2IDE2Ljg2LTEyLjgxNCAyOS4zMzktMTIuODE0IDIxLjI1IDAgMzkuNjI1IDE4LjM3OCAzOS42MjUgNDEuMTRNOTY0LjczNyAxMjU5LjI3M2gtMTYuNTIydjY2LjYwNGgtMTMuOTkzdi02Ni42MDRoLTE2LjY5NXYtMTIuNjQ0aDE2LjY5NXYtMjguNDk2aDEzLjk5M3YyOC40OTVoMTYuNTIyek04NDcuMzg3IDMyYy0zMC45MDMgMC01Ni4wNDIgMjUuMTQyLTU2LjA0MiA1Ni4wNDUgMCAzMC45MDQgMjUuMTQgNTYuMDQyIDU2LjA0MiA1Ni4wNDIgMzAuOTAzIDAgNTYuMDQyLTI1LjEzOCA1Ni4wNDItNTYuMDQyQzkwMy40MyA1Ny4xNDIgODc4LjI5IDMyIDg0Ny4zODcgMzJtMCAxNDQuMDg0Yy00OC41NDIgMC04OC4wMzktMzkuNDkyLTg4LjAzOS04OC4wNCAwLTQ4LjU0NSAzOS40OTctODguMDQxIDg4LjA0LTg4LjA0MSA0OC41NDEgMCA4OC4wMzggMzkuNDk2IDg4LjAzOCA4OC4wNDIgMCA0OC41NDctMzkuNDk3IDg4LjAzOS04OC4wMzkgODguMDM5TTczNy43IDQ4MS45MjhWNDI4LjdjMC0xNDIuMTk2LTExNS42OS0yNTcuODg2LTI1Ny44OS0yNTcuODg2LTE0Mi4xOTggMC0yNTcuODg1IDExNS42OS0yNTcuODg1IDI1Ny44ODZ2NTMuMjI5aDExNi45NzlsMjgyLjM0NCAyNjUuMDY3Yy02Ljc4NSA3Mi4wOTYtNjcuNiAxNDQuNzA3LTE0MS40MzggMTQ0LjcwNy03OC4zNjEgMC0xNDIuMTE0LTYzLjc1My0xNDIuMTE0LTE0Mi4xMmwuMjE1LTQ5LjQzOEgyMjEuOTI1djQ5LjQzN2MwIDE0Mi4yMDIgMTE1LjY4NyAyNTcuODkyIDI1Ny44ODUgMjU3Ljg5MiAxNDIuMiAwIDI1Ny44OS0xMzEuNjg4IDI1Ny44OS0yNzMuODl2LTk2LjkyNUg1NDMuNTA5TDMzOS4yNTggNDQ0LjY5NWwuMjA3LTM4LjMyYzEwLjc0NC02Ny43OTMgNjkuNTc5LTExOS43OSAxNDAuMzQ1LTExOS43OSA3OC4zNjYgMCAxNDIuMTE4IDYzLjc1MiAxNDIuMTE4IDE0Mi4xMTR2NTMuMjNINzM3Ljd6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-my-projects-js-3173642341d51f1fa3e1.js.map