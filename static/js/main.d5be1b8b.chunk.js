(this["webpackJsonpsupa-dupa-chat"]=this["webpackJsonpsupa-dupa-chat"]||[]).push([[0],{114:function(e,t,a){},120:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),o=(a(114),a(24)),i=a(94),u=a(100),l=a(171),j=(a(120),a(18)),b=a(29),d=a(28),h=a(162),O=a(48),p="PROFILE::INIT_PROFILE_NAME",x="PROFILE::INIT_PROFILE_NAME_WITH_SAGA",m=function(){return{type:x}},f="idle",g="request",v="success",w="failure",S="/gbCourse5Hw",C=a(7);var N=function(e){return Object(C.jsxs)("div",{className:"main-container",children:[Object(C.jsx)("h1",{children:"Welcome to chat"}),Object(C.jsx)("div",{children:Object(C.jsx)(b.b,{to:"".concat(S,"/login"),children:"Sign In"})}),Object(C.jsx)("div",{children:Object(C.jsx)(b.b,{to:"".concat(S,"/signup"),children:"Sign Up"})})]})},y=a(165),k=a(96),A=a.n(k),E="CHATS::REMOVE_MESSAGE_WITH_SAGA",I=Object(h.a)((function(e){return{button:{position:"absolute",top:"0",right:"0"},message:{border:"1px solid black",borderRadius:"10px",marginBottom:"10px",position:"relative"},messageHeader:{textAlign:"left",margin:"10px 20px"},messageText:{textAlign:"left",margin:"10px 20px",whiteSpace:"pre-wrap"},messageAuthor:{textAlign:"right",margin:"10px 20px"},smallText:{fontSize:"14px",color:"#AAA",fontWeight:"normal"}}}));var T=function(e){var t=Object(o.c)(),a=Object(c.useCallback)((function(e,a){t(function(e,t){return{type:E,chatId:e,messageId:t}}(e,a))}),[t]),n=I();return e.messages.map((function(t,c){return Object(C.jsxs)("article",{className:n.message,id:t.id,children:[Object(C.jsxs)("h2",{className:n.messageHeader,children:[Object(C.jsxs)("span",{className:n.smallText,children:["Theme:",Object(C.jsx)("br",{})]}),t.header]}),Object(C.jsxs)("p",{className:n.messageText,children:[Object(C.jsxs)("span",{className:n.smallText,children:["Message:",Object(C.jsx)("br",{})]}),t.text]}),Object(C.jsx)("p",{className:n.messageAuthor,children:Object(C.jsxs)("cite",{children:[Object(C.jsx)("span",{className:n.smallText,children:"Author: "}),t.author]})}),Object(C.jsx)(y.a,{onClick:function(){return a(e.chatId,t.id)},"aria-label":"delete",className:n.button+" delete-button",children:Object(C.jsx)(A.a,{color:"secondary"})})]},t.id)}))},_=a(97),H=a.n(_),D=a(167),F=a(168),R=a(173);var W=function(e){return Object(C.jsx)(D.a,{component:"nav","aria-label":"main mailbox folders",children:Object.values(e.chats).map((function(t){return Object(C.jsx)(b.b,{to:"/gbCourse5Hw/chats/"+t.id,className:e.classes.link,children:Object(C.jsxs)(F.a,{button:!0,className:t.id===e.chatId?e.classes.active:e.classes.root,children:[Object(C.jsx)(R.a,{primary:t.name}),Object(C.jsx)(y.a,{"aria-label":"close",onClick:function(a){return e.handleRemoveChat(t.id,a)},children:Object(C.jsx)(H.a,{})})]})},t.id)}))})},L=a(169),M=a(172);var G=function(e){return Object(C.jsxs)("form",{onSubmit:function(t){return e.handleAddChat(e.chatName,t)},className:e.classes.addChatForm,children:[Object(C.jsx)(M.a,{className:e.classes.chatName,value:e.chatName,onChange:e.hanldeChatName,id:"outlined-basic",label:"Chat name",variant:"outlined",size:"small"}),Object(C.jsx)(L.a,{value:"Add",variant:"contained",color:"primary",className:e.classes.button,type:"submit",testid:"addChatBtn",role:"addChatBtn",children:"Add chat"})]})},P="CHATS::ADD_CHAT_WITH_SAGA",B="CHATS::REMOVE_CHAT_WITH_SAGA";function U(e){return e.chats}var q="CHATS::INIT_CHATS",X=function(e){return{type:q,chats:e}},z="CHATS::INIT_CHATS_WITH_SAGA",V=Object(h.a)((function(e){return{button:{color:"#fff",whiteSpace:"noWrap",height:"100%"},link:{textDecoration:"none",color:e.palette.primary.main},active:{color:e.palette.secondary.main,backgroundColor:"#ccc"},chatName:{marginRight:"10px"},root:{maxWidth:"300px",padding:"15px"},addChatForm:{display:"flex",alignItems:"center"}}}));var K=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(o.c)(),i=Object(o.d)(U,o.b),u=Object(c.useCallback)((function(e,t){t.preventDefault(),s(function(e){return{type:P,chatName:e}}(e)),r("")}),[s]),l=Object(c.useCallback)((function(e,t){t.preventDefault(),t.stopPropagation(),s(function(e){return{type:B,chatId:e}}(e))}),[s]),b=Object(c.useCallback)((function(e){r(e.target.value)}),[]);Object(c.useEffect)((function(){s({type:z})}),[]);var d=V();return Object(C.jsxs)("div",{className:d.root,children:[Object(C.jsx)(G,{handleAddChat:u,classes:d,chatName:n,hanldeChatName:b}),Object(C.jsx)(W,{chats:i,classes:d,handleRemoveChat:l,chatId:e.chatId})]})},J=a(170),Q="CHATS::ADD_MESSAGE_WITH_SAGA";function Z(e){return e.profile.name}function Y(e){return e.profile.wrongName}var $=Object(h.a)((function(e){return{root:{border:"1px solid black",borderRadius:"10px",display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)}},text:{height:"auto"},button:{alignSelf:"flex-end"}}}));var ee=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],b=Object(o.d)(Z),h=Object(o.d)(U),O=Object(c.useRef)(null),p=Object(d.g)().chatId,x=Object(o.c)(),m=$(),f=Object(c.useCallback)((function(e,t,a,c,n,r){w(),O.current.focus(),r&&r.preventDefault(),x(function(e,t,a,c,n){return{type:Q,chatId:e,chatName:t,messageTheme:a,messageText:c,messageAuthor:n}}(e,t,a,c,n))}),[x]),g=Object(c.useCallback)((function(e){r(e.target.value)}),[]),v=Object(c.useCallback)((function(e){l(e.target.value)}),[]),w=Object(c.useCallback)((function(){r(""),l("")}),[]);return Object(c.useEffect)((function(){p&&O.current.focus()}),[p]),Object(C.jsxs)("form",{action:"",onSubmit:function(e){return f(p,h[p].name,n,u,b,e)},className:m.root,noValidate:!0,autoComplete:"off",children:[Object(C.jsx)(M.a,{className:m.text,value:n,onChange:g,id:"outlined-basic",label:"Theme",variant:"outlined"}),Object(C.jsx)(M.a,{className:m.text,value:u,onChange:v,inputRef:O,multiline:!0,rows:"5",id:"outlined-basic",label:"Message",variant:"outlined"}),Object(C.jsx)(L.a,{type:"submit",value:"Send",variant:"contained",color:"primary",className:m.button,endIcon:Object(C.jsx)(J.a,{children:"send"}),children:"Send"})]})},te=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"space-around",backgroundColor:"#EEE"},chat:{maxWidth:"700px",display:"flex",flexDirection:"column",padding:"15px",flexGrow:1}}}));var ae=function(e){var t=te(),a=Object(d.g)().chatId,c=Object(o.d)(U),r=n.a.memo(T);return a&&!c[a]?Object(C.jsx)(d.a,{to:"/gbCourse5Hw/chats"}):Object(C.jsxs)("div",{className:t.root,children:[Object(C.jsx)(K,{chatList:c,active:a,chatId:a}),Object(C.jsxs)("div",{className:t.chat,children:[Object(C.jsx)(r,{messages:a&&c[a].messages?Object.values(c[a].messages):[],chatId:a}),!!a&&Object(C.jsx)(ee,{})]})]})},ce=a(21),ne="PROFILE::SET_PROFILE_NAME_WITH_SAGA",re=a(73),se=a(98),oe=(Object(se.a)({apiKey:"AIzaSyClSDFFfyZOzOpDTXS3pbqR4tpMuhrsXW0",authDomain:"supa-dupa-chat.firebaseapp.com",databaseURL:"https://supa-dupa-chat-default-rtdb.firebaseio.com",projectId:"supa-dupa-chat",storageBucket:"supa-dupa-chat.appspot.com",messagingSenderId:"656656094874",appId:"1:656656094874:web:247f40f1bae0857ad07123"}),Object(re.b)()),ie=Object(ce.a)(),ue=Object(h.a)((function(e){return{root:{display:"flex",backgroundColor:"#EEE",flexDirection:"column"},profileName:{position:"relative"},wrongName:{position:"absolute",top:"0",left:"calc(50% - 60px)",display:"block",padding:"10px",background:"#de2345"},hidden:{visibility:"hidden"}}}));var le=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],b=Object(o.c)(),d=Object(o.d)(Y);Object(c.useEffect)((function(){var e=Object(ce.c)(ie,"profile/".concat(oe.currentUser.uid,"/username"));return Object(ce.b)(e,(function(e){var t=e.val();l(t)}))}),[n]);var h=Object(c.useCallback)((function(){Object(O.d)(oe).then((function(){})).catch((function(e){}))}),[]),p=ue();return Object(C.jsxs)("div",{className:p.root,children:[Object(C.jsx)("h1",{children:"My Profile"}),Object(C.jsx)("div",{children:Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({type:ne,name:n}),r("")},className:p.profileName,children:[Object(C.jsx)(M.a,{required:!0,className:p.profileName,value:n,onChange:function(e){r(e.target.value)},id:"standard-basic",label:"Enter your name",variant:"standard"}),Object(C.jsx)("span",{className:(d?"":p.hidden)+" "+p.wrongName,children:"Wrong name!"})]})}),Object(C.jsxs)("p",{children:[Object(C.jsx)("span",{className:u?"":p.hidden,children:"Hi, "}),u,Object(C.jsx)("span",{className:u?"":p.hidden,children:"!"})]}),Object(C.jsx)("button",{onClick:h,children:"Sign Out"})]})};function je(e){return e.news.newsList}function be(e){return e.news.error.status}function de(e){return e.news.error.message}function he(e){return e.news.status}var Oe="NEWS::GET_NEWS_REQUEST",pe="NEWS::GET_NEWS_SUCCESS",xe="NEWS::GET_NEWS_FAILURE",me="NEWS::GET_NEWS_WITH_SAGA",fe=function(e){return{type:pe,news:e}},ge=Object(h.a)((function(e){return{root:{listStyle:"none"},newsItem:{display:"block",textDecoration:"none",color:e.palette.primary.main,marginBottom:"10px","&:visited":{color:e.palette.secondary.main}}}}));var ve=function(e){var t=ge(),a=Object(o.d)(je),n=Object(o.d)(be),r=Object(o.d)(de),s=Object(o.d)(he),i=Object(o.c)(),u=Object(c.useCallback)((function(){i({type:me})}),[]);Object(c.useEffect)((function(){u()}),[]);var l=Object(c.useCallback)((function(e){return Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:t.newsItem,children:e.title||"No description"})},e.id)}),[]);return n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("p",{children:r}),Object(C.jsx)("button",{onClick:u,children:"reload"})]}):s===g?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("p",{children:"Loading..."})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("ul",{className:t.root,children:a.map(l)})})},we=a(1),Se=a.n(we),Ce=a(5);var Ne=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),d=l[0],h=l[1],p=Object(c.useCallback)((function(e){i(e.target.value)}),[]),x=Object(c.useCallback)((function(e){n(e.target.value)}),[]),m=function(){var e=Object(Ce.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(""),e.prev=2,e.next=5,Object(O.a)(oe,a,o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),h(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{onSubmit:m,children:[Object(C.jsx)("p",{children:"Fill in the form below to register new account."}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:x,value:a})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{placeholder:"Password",name:"password",onChange:p,value:o,type:"password"})}),Object(C.jsxs)("div",{children:[d&&Object(C.jsx)("p",{children:d}),Object(C.jsx)("button",{type:"submit",children:"Login"})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("p",{children:["Already have an account? ",Object(C.jsx)(b.b,{to:"/gbCourse5Hw/login",children:"Sign in"})]})]})})};var ye=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),d=l[0],h=l[1],p=function(){var e=Object(Ce.a)(Se.a.mark((function e(t){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(""),e.prev=2,e.next=5,Object(O.c)(oe,a,o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),h(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{onSubmit:p,children:[Object(C.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:function(e){n(e.target.value)},value:a})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{placeholder:"Password",name:"password",onChange:function(e){i(e.target.value)},value:o,type:"password"})}),Object(C.jsxs)("div",{children:[d&&Object(C.jsx)("p",{children:d}),Object(C.jsx)("button",{type:"submit",children:"Login"})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("p",{children:["Don't have an account? ",Object(C.jsx)(b.b,{to:"/gbCourse5Hw/signup",children:"Sign up"})]})]})})},ke=a(31),Ae=a(80),Ee=["authenticated"];function Ie(e){var t=e.authenticated,a=Object(Ae.a)(e,Ee);return t?Object(C.jsx)(d.b,Object(ke.a)({},a)):Object(C.jsx)(d.a,{to:{pathname:"".concat(S,"/login")}})}var Te=["authenticated"];function _e(e){var t=e.authenticated,a=Object(Ae.a)(e,Te);return t?Object(C.jsx)(d.a,{to:"".concat(S,"/chats")}):Object(C.jsx)(d.b,Object(ke.a)({},a))}var He=Object(h.a)((function(e){return{header:{display:"flex",justifyContent:"space-around",minHeight:"50px",alignItems:"center","&>a":{display:"flex",alignItems:"center",height:"50px",textDecoration:"none",backgroundColor:"#ccc",color:"#708238",padding:"0 30px"}},message:{border:"1px solid black",borderRadius:"10px",marginBottom:"10px",position:"relative"},messageHeader:{textAlign:"left",margin:"10px 20px"},messageText:{textAlign:"left",margin:"10px 20px"},messageAuthor:{textAlign:"right",margin:"10px 20px"},smallText:{fontSize:"14px",color:"#AAA",fontWeight:"normal"}}}));var De=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(o.c)(),s=He();return Object(c.useEffect)((function(){return a&&r(m()),Object(O.b)(oe,(function(e){e?(r(m()),n(!0)):n(!1)}))}),[]),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("header",{className:s.header,children:[Object(C.jsx)(b.b,{to:"".concat(S,"/"),children:"Main"}),Object(C.jsx)(b.b,{to:"".concat(S,"/chats"),children:"Chats"}),Object(C.jsx)(b.b,{to:"".concat(S,"/profile"),children:"Profile"}),Object(C.jsx)(b.b,{to:"".concat(S,"/news"),children:"News"}),Object(C.jsx)(b.b,{to:"".concat(S,"/signup"),children:"Registration"}),Object(C.jsx)(b.b,{to:"".concat(S,"/login"),children:"Login"})]}),Object(C.jsxs)(d.d,{children:[Object(C.jsx)(Ie,{authenticated:a,path:"".concat(S,"/chats/:chatId?"),children:Object(C.jsx)(ae,{})}),Object(C.jsx)(Ie,{authenticated:a,path:"".concat(S,"/profile"),children:Object(C.jsx)(le,{})}),Object(C.jsx)(_e,{authenticated:a,path:"".concat(S,"/nochat"),children:Object(C.jsx)("h4",{children:"\u0417\u0434\u0435\u0441\u044c \u0440\u044b\u0431\u044b \u043d\u0435\u0442"})}),Object(C.jsx)(Ie,{authenticated:a,path:"".concat(S,"/news"),children:Object(C.jsx)(ve,{})}),Object(C.jsx)(_e,{authenticated:a,path:"".concat(S,"/signup"),children:Object(C.jsx)(Ne,{})}),Object(C.jsx)(_e,{authenticated:a,path:"".concat(S,"/login"),children:Object(C.jsx)(ye,{})}),Object(C.jsx)(_e,{exact:!0,authenticated:a,path:"".concat(S,"/"),children:Object(C.jsx)(N,{})}),Object(C.jsx)(d.b,{authenticated:a,children:Object(C.jsx)("h4",{children:"404"})})]})]})},Fe=a(43),Re=a(101),We=a(83),Le=a(99),Me=a.n(Le),Ge={profile:{name:"Name"},chats:{},news:{newsList:[],error:{status:!1,message:""},status:f}},Pe=Ge.profile;var Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type===p?Object(ke.a)(Object(ke.a)({},e),{},{name:t.name}):e},Ue=Ge.chats;var qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;return t.type===q?Object(ke.a)({},t.chats):e},Xe=Ge.news;var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(ke.a)(Object(ke.a)({},e),{},{error:Object(ke.a)(Object(ke.a)({},e.error),{},{status:!1}),status:g});case pe:return Object(ke.a)(Object(ke.a)({},e),{},{newsList:t.news,status:v});case xe:return Object(ke.a)(Object(ke.a)({},e),{},{error:Object(ke.a)(Object(ke.a)({},e.error),{},{status:!0,message:t.errorMessage}),status:w});default:return e}},Ve=a(35),Ke=a(65),Je=function(e){return fetch(e).then((function(e){if(!e.ok)throw Error(e.status+" "+e.statusText);return e.json()})).then((function(e){return e})).catch((function(e){throw e}))},Qe=Se.a.mark((function e(t){var a,c,n,r,s;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,"message-".concat(+new Date);case 3:return a=e.sent,e.next=6,Object(ce.c)(ie,"chats/".concat(t.chatId,"/messages/").concat(a));case 6:return c=e.sent,e.next=9,Object(ce.f)(c,{id:a,header:t.messageTheme,text:t.messageText,author:t.messageAuthor});case 9:if("Bot"===t.messageAuthor||"Bot"!==t.chatName){e.next=29;break}return e.prev=10,e.next=13,Object(Ke.b)(2e3);case 13:return e.next=15,Object(Ke.a)(Je,"https://api.openweathermap.org/data/2.5/weather?id=498817&appid=f0694cc740867c7440b3be0552c0bf8f");case 15:return n=e.sent,e.next=18,"message-".concat(+new Date);case 18:return r=e.sent,e.next=21,Object(ce.c)(ie,"chats/".concat(t.chatId,"/messages/").concat(r));case 21:return s=e.sent,e.next=24,Object(ce.f)(s,{id:r,header:"\u041f\u043e\u0433\u043e\u0434\u0430",text:"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u041f\u0438\u0442\u0435\u0440\u0435 ".concat(n.clouds.all>50?"\u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f":"\u0431\u0435\u0437\u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f","\n\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 ").concat((n.main.temp-273).toFixed(1)," \xb0C\n\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c ").concat(n.main.humidity," %\n\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 ").concat(n.wind.speed," \u043c/\u0441"),author:"Bot"});case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),console.log(e.t0.message);case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(0),console.log(e.t1);case 34:case 35:case"end":return e.stop()}}),e,null,[[0,31],[10,26]])})),Ze=Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ce.c)(ie,"chats/".concat(t.chatId,"/messages/").concat(t.messageId));case 3:return a=e.sent,e.next=6,Object(ce.d)(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})),Ye=Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(ce.c)(ie,"profile/".concat(oe.currentUser.uid)),e.next=4,Object(ce.e)(a,{username:t.name});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),$e=Se.a.mark((function e(){var t;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(ce.c)(ie,"profile/".concat(oe.currentUser.uid,"/username")),e.next=4,Object(ce.b)(t,(function(e){var t=e.val();ht.dispatch({type:p,name:t||""})}));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),et=function(e){return fetch(e).then((function(e){if(!e.ok)throw Error(e.status+" "+e.statusText);return e.json()})).then((function(e){return e})).catch((function(e){throw e}))},tt=Se.a.mark((function e(t){var a;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ve.b)({type:Oe});case 3:return e.next=5,Object(Ve.a)(et,"https://api.currentsapi.services/v1/latest-news?language=ru&apiKey=6qmiCnF5XcC6Zt8s4fj5gRg9kBKB58XFqw8Rw6QqsYOtD1M8");case 5:return a=e.sent,e.next=8,Object(Ve.b)(fe(a.news));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Ve.b)((t=e.t0.message,{type:xe,errorMessage:t}));case 14:case"end":return e.stop()}var t}),e,null,[[0,10]])})),at=Se.a.mark((function e(){var t;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ce.c)(ie,"chats");case 3:return t=e.sent,e.next=6,Object(ce.b)(t,(function(e){var t=e.val();ht.dispatch(X(t||{}))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),ct=Se.a.mark((function e(t){var a,c,n;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,"chatId".concat(+new Date);case 3:return a=e.sent,e.next=6,Object(ce.c)(ie,"chats/".concat(a));case 6:return c=e.sent,e.next=9,Object(ce.c)(ie,"profile/".concat(oe.currentUser.uid,"/myChats/").concat(a));case 9:return n=e.sent,e.next=12,Object(ce.e)(n,{chatName:t.chatName});case 12:return e.next=14,Object(ce.e)(c,{name:t.chatName,id:a,messages:"",users:oe.currentUser.uid});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case 20:case"end":return e.stop()}}),e,null,[[0,16]])})),nt=Se.a.mark((function e(t){var a,c;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ce.c)(ie,"chats/".concat(t.chatId));case 3:return a=e.sent,e.next=6,Object(ce.c)(ie,"profile/".concat(oe.currentUser.uid,"/myChats/").concat(t.chatId));case 6:return c=e.sent,e.next=9,Object(ce.d)(a);case 9:return e.next=11,Object(ce.d)(c);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})),rt=Se.a.mark(st);function st(){return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.c)(Q,Qe);case 2:return e.next=4,Object(Ve.c)(E,Ze);case 4:return e.next=6,Object(Ve.d)(me,tt);case 6:return e.next=8,Object(Ve.d)(ne,Ye);case 8:return e.next=10,Object(Ve.d)(x,$e);case 10:return e.next=12,Object(Ve.d)(z,at);case 12:return e.next=14,Object(Ve.d)(P,ct);case 14:return e.next=16,Object(Ve.d)(B,nt);case 16:case"end":return e.stop()}}),rt)}var ot=st,it=Object(Fe.b)({profile:Be,chats:qe,news:ze}),ut={onError:function(e,t){console.log("qqq"+e),console.log(t)}},lt=Object(Re.a)(ut),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Fe.c,bt={key:"root",storage:Me.a},dt=Object(We.a)(bt,it),ht=Object(Fe.d)(dt,Ge,jt(Object(Fe.a)(lt)));lt.run(ot);var Ot=Object(We.b)(ht),pt=Object(u.a)({palette:{primary:{main:"#708238"},secondary:{main:"#0098FF"}}});var xt=function(){return Object(C.jsx)(o.a,{store:ht,children:Object(C.jsx)(i.a,{persistor:Ot,children:Object(C.jsx)(l.a,{theme:pt,children:Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(De,{})})})})})},mt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(xt,{})}),document.getElementById("root")),mt()}},[[130,1,2]]]);
//# sourceMappingURL=main.d5be1b8b.chunk.js.map