(this.webpackJsonpgameedit=this.webpackJsonpgameedit||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),i=(a(67),a(11)),o=a.n(i),s=a(10),u=a(15),m=a(4),p=a(5),b=a(7),f=a(6),d=a(8),h=(a(69),a(52)),g=a.n(h),E=a(21),O=a.n(E);var v=function(e){var t=e.gameInf;return r.a.createElement("div",{style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(".concat(t.Url,")")},className:O.a.container},r.a.createElement("div",{className:O.a.description},r.a.createElement("h1",null,r.a.createElement("span",null,t.header)),r.a.createElement("p",null,t.text),r.a.createElement("br",null),r.a.createElement("i",{className:"fab fa-windows"}),r.a.createElement("i",{className:"fab fa-playstation"}),r.a.createElement("i",{className:"fab fa-xbox"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"",className:O.a.btnHalf},"PRE ORDER NOW"),r.a.createElement("a",{href:"",className:O.a.btnFull},"MORE GAMES FROM DICE")))},y=a(53),j=(a(77),a(2)),w=Object(j.a)([function(e){return e.shop}],(function(e){return e.collections})),_=Object(j.a)([w],(function(e){return e?e.mainslider.items:null})),N=Object(j.a)([w],(function(e){return e?e.games.items:null})),k=Object(j.a)([w],(function(e){return e?e.news.items:null})),S=a(3),P=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.collection;return r.a.createElement(y.Carousel,{className:O.a.carousel,showThumbs:!1,infiniteLoop:!0,showIndicators:!1,showStatus:!1,emulateTouch:!0},e.map((function(e){return r.a.createElement(v,{key:e.id,gameInf:e})})))}}]),t}(n.Component),L=Object(j.b)({collection:_}),C=Object(S.b)(L)(P),x=a(25),D=a.n(x),I=function(e){var t=e.lastNewsInfo;return r.a.createElement("div",null,r.a.createElement("div",{className:D.a.izo,style:{backgroundImage:"url(".concat(t.Url,")")}}),r.a.createElement("div",{className:D.a.text},r.a.createElement("h3",null,t.header),r.a.createElement("p",null,t.text),r.a.createElement("a",{href:""},"READ MORE")))},A=a(55),U=a.n(A),G=(a(92),function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.news;return r.a.createElement("div",{className:D.a.news},r.a.createElement("div",{className:D.a.head},r.a.createElement("h1",null,"LAST NEWS")),r.a.createElement(U.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0},e.filter((function(e,t){return t<8})).map((function(e){return r.a.createElement(I,{key:e.id,lastNewsInfo:e})}))))}}]),t}(n.Component)),T=Object(j.b)({news:k}),W=Object(S.b)(T)(G),R=(a(49),a(56)),M=a.n(R),F=function(e){var t=e.price,a=100*t;return r.a.createElement(M.a,{label:"BUY NOW",name:"Payment operation",billingAdress:!0,shippingAdress:!0,description:"Your total $".concat(t),amount:a,panelLabel:"BUY NOW",token:function(e){console.log(e),alert("Payment succesfull")},bitcoin:!0})},z=function(e){var t=e.lastGamesPeace;return r.a.createElement("div",null,r.a.createElement("div",{className:"limg",style:{backgroundImage:"url(".concat(t.Url,")")}}),r.a.createElement("div",{className:"feature"},r.a.createElement("h4",null,t.header),r.a.createElement("p",null,t.text.substr(0,50),"..."),r.a.createElement("h4",null,t.price,"$"),r.a.createElement("div",{className:"lastGameButtons"},r.a.createElement(F,{className:"pay",price:t.price}),r.a.createElement("button",{className:"details"},"DETAILS"))))},q=a(26),B=a.n(q),H=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){B()(document).ready((function(){B()(".li-library li .limg").mouseover((function(){var e=B()(this).css("background-image");B()(".library").css("background-image","linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),"+e)}))}));var e=this.props.collection;return r.a.createElement("div",{className:"library",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(".concat(e.Url,")")}},r.a.createElement("div",{className:"li-head"},r.a.createElement("h1",null,"new games")),r.a.createElement("ul",{className:"li-library"},e.filter((function(e,t){return t<8})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(z,{lastGamesPeace:e}))}))))}}]),t}(n.Component),K=Object(j.b)({collection:N}),Y=Object(S.b)(K)(H),J=a(27),$=a.n(J);a(93),a(97);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}$.a.initializeApp({apiKey:"AIzaSyAWxdJE6ga1Kk5wid3JmFW4kSfPChRTKs4",authDomain:"gameedit-6f816.firebaseapp.com",databaseURL:"https://gameedit-6f816.firebaseio.com",projectId:"gameedit-6f816",storageBucket:"gameedit-6f816.appspot.com",messagingSenderId:"953806501255",appId:"1:953806501255:web:6d767264efa011151c0f22",measurementId:"G-MYKK0GEZT9"});var X=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n,r,c,l,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=te.doc("users/".concat(t.uid)),r=te.collection("users"),e.next=6,n.get();case 6:return c=e.sent,e.next=9,r.get();case 9:if(e.sent,c.exists){e.next=21;break}return l=t.displayName,i=t.email,s=new Date,e.prev=13,e.next=16,n.set(V({displayName:l,email:i,createdAt:s},a));case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),console.log("error creating user",e.t0.message);case 21:return e.abrupt("return",n);case 22:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t,a){return e.apply(this,arguments)}}(),Q=function(e){return e.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),id:e.id,title:a,items:n}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},ee=$.a.auth(),te=$.a.firestore(),ae=new $.a.auth.GoogleAuthProvider;ae.setCustomParameters({prompt:"select_account"});var ne=function(){return ee.signInWithPopup(ae)},re=($.a,{UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"}),ce=function(e){return{type:re.UPDATE_COLLECTIONS,payload:e}},le=a(24),ie=a(38),oe=a.n(ie),se=function(e){return function(t){var a=t.isLoading,n=Object(le.a)(t,["isLoading"]);return a?r.a.createElement("div",{className:oe.a.SpinnerOverlay},r.a.createElement("div",{className:oe.a.SpinnerContainer})):r.a.createElement(e,n)}},ue={TOGGLE_LOAD:"TOGGLE_LOAD"},me=function(e){return{type:ue.TOGGLE_LOAD,payload:e}},pe=Object(j.a)([function(e){return e.spinner}],(function(e){return e.loading})),be=se(C),fe=se(Y),de=se(W),he=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromSnapshot=null,a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateCollection,a=e.toggleLoading,n=te.collection("collections");this.unsubscribeFromSnapshot=n.get().then((function(e){var n=Q(e);t(n),a(!1)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:g.a.homepage},r.a.createElement(be,{isLoading:this.props.isLoading}),r.a.createElement(de,{isLoading:this.props.isLoading}),r.a.createElement(fe,{isLoading:this.props.isLoading}))}}]),t}(n.Component),ge=Object(j.b)({isLoading:pe}),Ee=Object(S.b)(ge,(function(e){return{updateCollection:function(t){return e(ce(t))},toggleLoading:function(t){return e(me(t))}}}))(he),Oe=a(19),ve=a(57),ye=a.n(ve),je=a(32),we=a.n(je),_e=a(16),Ne=Object(j.a)([function(e){return e.user}],(function(e){return e.currentUser})),ke=Object(j.b)({currentUser:Ne}),Se=Object(S.b)(ke)(Object(Oe.f)((function(e){var t=null;return"/auth"==e.location.pathname?t=!0:"/news"==e.location.pathname&&(t=!0),r.a.createElement("header",{className:t?we.a.header:null},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:we.a.logo},r.a.createElement("div",null," ",r.a.createElement(_e.b,{to:"/"},r.a.createElement("img",{src:ye.a,className:we.a.img}))))),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement(_e.b,{to:"/games"},"GAMES"))),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement(_e.b,{to:"/news"},"NEWS"))),e.currentUser?r.a.createElement("li",{onClick:function(){return ee.signOut()}},r.a.createElement("a",{href:""},"SIGN OUT")):r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement(_e.b,{to:"/auth"},"SIGN IN"))))))}))),Pe=(a(100),a(59)),Le=a.n(Pe),Ce=a(41),xe=a.n(Ce),De=(a(101),function(e){var t=e.handleChange,a=e.label,n=Object(le.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Ie=(a(102),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(le.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),Ae=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).handleSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.email,c=n.password,t.prev=2,t.next=5,ee.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(s.a)({},r,n))},e.state={email:"",password:""},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:xe.a.signIn},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(De,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(De,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:xe.a.buttons},r.a.createElement(Ie,{type:"submit"}," Sign in "),r.a.createElement(Ie,{onClick:ne,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(n.Component),Ue=a(33),Ge=a.n(Ue),Te=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c,l,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.displayName,c=n.email,l=n.password,i=n.confirmPassword,l==i){e.next=5;break}return alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"),e.abrupt("return");case 5:return e.prev=5,e.next=8,ee.createUserWithEmailAndPassword(c,l);case 8:s=e.sent,u=s.user,X(u,{displayName:r}),a.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.state={displayName:"",email:"",password:"",confirmPassword:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:Ge.a.signUp},r.a.createElement("h2",{className:Ge.a.title},"I don't have the account"),r.a.createElement("span",null,"Sign up with email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:Ge.a.signUpForm},r.a.createElement(De,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(De,{type:"text",name:"email",value:a,onChange:this.handleChange,label:"email",required:!0}),r.a.createElement(De,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"password",required:!0}),r.a.createElement(De,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"confirmPassword",required:!0}),r.a.createElement(Ie,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component),We=function(){return r.a.createElement("div",{className:Le.a.authPage},r.a.createElement(Ae,null),r.a.createElement(Te,null))},Re=(a(103),Object(Oe.f)((function(e){var t=null;return"/auth"==e.location.pathname&&(t=!0),r.a.createElement("footer",{className:t?"noFooter":"footer"},r.a.createElement("ul",{className:t?"noUl":""},r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fab fa-facebook-square"})),r.a.createElement("div",{className:"descr"},"follow us in facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("div",{className:"descr"},"follow us in twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fab fa-vk"})),r.a.createElement("div",{className:"descr"},"follow us vkontakte")),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fab fa-telegram-plane"})),r.a.createElement("div",{className:"descr"},"follow us in telegram"))))}))),Me="SET_CURRENT_USER",Fe=a(18),ze=a.n(Fe),qe=function(e){var t=e.Games;return r.a.createElement("div",null,r.a.createElement("div",{className:ze.a.limg,style:{backgroundImage:"url(".concat(t.Url,")")}}),r.a.createElement("div",{className:ze.a.feature},r.a.createElement("h4",null,t.header),r.a.createElement("p",null,t.text.substr(0,50),"..."),r.a.createElement("h4",null,t.price,"$"),r.a.createElement("div",{className:ze.a.buttons},r.a.createElement(F,{className:ze.a.pay,price:t.price}),r.a.createElement("button",{className:ze.a.details},"DETAILS"))))},Be=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.collection;return console.log(e),r.a.createElement("div",{className:ze.a.library,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(".concat(e[6].Url,")")}},r.a.createElement("ul",{className:ze.a.liLibrary},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(qe,{Games:e}))}))))}}]),t}(n.Component),He=Object(j.b)({collection:N}),Ke=Object(S.b)(He)(Be),Ye=(a(104),se(Ke)),Je=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromSnapshot=null,a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateCollection,a=e.toggleLoading,n=te.collection("collections");this.unsubscribeFromSnapshot=n.get().then((function(e){var n=Q(e);t(n),a(!1)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ye,{isLoading:this.props.isLoading}))}}]),t}(n.Component),$e=Object(j.b)({isLoading:pe}),Ze=Object(S.b)($e,(function(e){return{updateCollection:function(t){return e(ce(t))},toggleLoading:function(t){return e(me(t))}}}))(Je),Ve=(a(105),a(22)),Xe=a.n(Ve),Qe=function(e){var t=e.NewsInfo;return r.a.createElement("div",{className:Xe.a.peace},r.a.createElement("div",{className:Xe.a.izo,style:{backgroundImage:"url(".concat(t.Url,")")}}),r.a.createElement("div",{className:Xe.a.text},r.a.createElement("h3",null,t.header),r.a.createElement("p",null,t.text.substr(0,100)),r.a.createElement("a",{href:""},"READ MORE")))},et=Object(j.b)({news:k}),tt=se(Object(S.b)(et)((function(e){var t=e.news;return r.a.createElement("div",{className:Xe.a.news},r.a.createElement("div",{className:Xe.a.block},t.map((function(e){return r.a.createElement(Qe,{key:e.id,NewsInfo:e})}))))}))),at=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromSnapshot=null,a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateCollection,a=e.toggleLoading,n=te.collection("collections");this.unsubscribeFromSnapshot=n.get().then((function(e){var n=Q(e);t(n),a(!1)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(tt,{isLoading:this.props.isLoading}))}}]),t}(n.Component),nt=Object(j.b)({isLoading:pe}),rt=Object(S.b)(nt,(function(e){return{updateCollection:function(t){return e(ce(t))},toggleLoading:function(t){return e(me(t))}}}))(at);function ct(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function lt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ct(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ct(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var it=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ee.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,X(a);case 3:t.sent.onSnapshot((function(t){e(lt({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Se,null),r.a.createElement(Oe.c,null,r.a.createElement(Oe.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(Oe.a,{exact:!0,path:"/auth",render:function(){return r.a.createElement(We,null)}}),r.a.createElement(Oe.a,{path:"/games",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(Oe.a,{path:"/news",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(Oe.a,{path:"*",render:function(){return r.a.createElement(Ee,null)}})),r.a.createElement(Re,null))}}]),t}(n.Component),ot=Object(j.b)({currentUser:Ne}),st=Object(S.b)(ot,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Me,payload:e}}(t))}}}))(it);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ut=a(14);function mt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?mt(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):mt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var bt={currentUser:null},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return pt({},e,{currentUser:t.payload});default:return e}},dt=a(60),ht=a.n(dt),gt=a(30);function Et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ot(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Et(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Et(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var vt={collections:null},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.UPDATE_COLLECTIONS:return Ot({},e,{collections:t.payload});default:return e}};function jt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function wt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?jt(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):jt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _t={loading:!0},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.TOGGLE_LOAD:return wt({},e,{loading:t.payload});default:return e}},kt={key:"root",storage:ht.a,whitelist:["cart"]},St=Object(ut.c)({user:ft,shop:yt,spinner:Nt}),Pt=Object(gt.a)(kt,St);a(108);var Lt=Object(ut.d)(Pt,ut.a.apply(void 0,[])),Ct=Object(gt.b)(Lt),xt=(gt.b,a(61));l.a.render(r.a.createElement(S.a,{store:Lt},r.a.createElement(_e.a,null,r.a.createElement(xt.a,{persistor:Ct},r.a.createElement(st,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t,a){e.exports={library:"GameLibrary_library__1fmYi",details:"GameLibrary_details__3NUn0",buttons:"GameLibrary_buttons__27yBN",liLibrary:"GameLibrary_liLibrary__23NW1",feature:"GameLibrary_feature__10Axe",limg:"GameLibrary_limg__27cEb"}},21:function(e,t,a){e.exports={container:"MainSlider_container__29enk",carousel:"MainSlider_carousel__KnCjf",description:"MainSlider_description__2pm0O",btnHalf:"MainSlider_btnHalf__14okH",btnFull:"MainSlider_btnFull__3DuAV"}},22:function(e,t,a){e.exports={news:"NewsLibrary_news__z_7Rg",block:"NewsLibrary_block__3Arnf",peace:"NewsLibrary_peace__3Be8n",izo:"NewsLibrary_izo__3WAM4",text:"NewsLibrary_text__27k3D",head:"NewsLibrary_head__1yzwe"}},25:function(e,t,a){e.exports={news:"LastNews_news__2Z2bX",izo:"LastNews_izo__2bkvl",text:"LastNews_text__1WE1b",head:"LastNews_head__3jPj5"}},32:function(e,t,a){e.exports={logo:"Header_logo__35CT7",img:"Header_img__27ahp",header:"Header_header__3oj9p"}},33:function(e,t,a){e.exports={signUp:"SignUp_signUp__299zr",title:"SignUp_title__3AsJq"}},38:function(e,t,a){e.exports={SpinnerOverlay:"WithSpinner_SpinnerOverlay__3ENRm",SpinnerContainer:"WithSpinner_SpinnerContainer__vevqx",spin:"WithSpinner_spin__3EAPt"}},41:function(e,t,a){e.exports={signIn:"SignIn_signIn__2jkCr",title:"SignIn_title__2p8sE"}},49:function(e,t,a){},52:function(e,t,a){e.exports={homepage:"Homepage_homepage__2Y4O7"}},57:function(e,t,a){e.exports=a.p+"static/media/new_logo.1c559bdb.png"},59:function(e,t,a){e.exports={authPage:"AuthPage_authPage__2ludR"}},62:function(e,t,a){e.exports=a(109)},67:function(e,t,a){},69:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.dddd4814.chunk.js.map