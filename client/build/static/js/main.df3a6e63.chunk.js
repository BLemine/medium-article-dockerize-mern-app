(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},106:function(e,t,n){},135:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(0),r=n.n(o),a=n(9),c=n.n(a),s=(n(103),n(104),n(28)),l=n(12),d=n(36),u=n.n(d),h=n(44),b=n(15),j=(n(106),n(78)),g=n.n(j).a.create({baseURL:"https://medium-movies-trending-server.herokuapp.com",data:{}}),p=n(50),m=n.n(p),O=n(51),f=n.n(O),v=n(180),x=n(21),k=n(24),y={user:null!==localStorage.getItem("loggedUser")?JSON.parse(localStorage.getItem("loggedUser")):{bookMarks:[]},connection:null!==localStorage.getItem("loggedUser")},w=function(e){var t=!1,n=JSON.parse(localStorage.getItem("loggedUser"));for(var i in n.bookMarks)n.bookMarks[i].id===e&&(t=!0);return t},S=function(){g.get("/bookmarks").then((function(e){for(var t in e.data)N(e.data[t])})).catch((function(e){return console.log(e)}))},_=function(e){var t=JSON.parse(localStorage.getItem("loggedUser"));if(w(e)){for(var n in t.bookMarks)t.bookMarks[n].id===e&&t.bookMarks.splice(n,1);localStorage.setItem("loggedUser",JSON.stringify(t))}},N=function(e){var t=JSON.parse(localStorage.getItem("loggedUser"));w(e.id)||(t.bookMarks.push(e),localStorage.setItem("loggedUser",JSON.stringify(t)))},I=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==t.user.bookMarks.length?g.post("/reinit_bookmarks").then((function(e){g.post("/bookmarks",t.user.bookMarks).then((function(e){})).catch((function(e){}))})).catch((function(e){})):g.post("/reinit_bookmarks").then((function(e){})).catch((function(e){})),localStorage.removeItem("loggedUser");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=n(45),C=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return localStorage.setItem("loggedUser",JSON.stringify(t.user)),S(),{user:t.user,connection:!0};case"DISCONNECT":return I(e),{user:{bookMarks:[{}]},connection:!1};case"ADD_BOOKMARK":return N(t.movie),Object(k.a)(Object(k.a)({},e),{},{user:JSON.parse(localStorage.getItem("loggedUser"))});case"REMOVE_BOOKMARK":return _(t.movie_id),Object(k.a)(Object(k.a)({},e),{},{user:JSON.parse(localStorage.getItem("loggedUser"))});default:return e}})),R=n(81),E=n.n(R),T=function(e){var t=r.a.useState(e.marked||!1),n=Object(b.a)(t,2),o=n[0],a=n[1],c=r.a.useState(o?"yellow":"white"),s=Object(b.a)(c,2),l=s[0],d=s[1];return Object(i.jsx)(E.a,{style:{cursor:"pointer",position:"absolute",bottom:250,right:10,color:l},onClick:function(){a(!o),d(o?"yellow":"white"),o?e.add_bookmark(e.movie):e.remove_bookmark(e.movie.id)}})};var L=Object(x.b)((function(e){return{connection:e.connection}}),(function(e){return{disconnect:function(){return e({type:"DISCONNECT"})},add_bookmark:function(t){return e({type:"ADD_BOOKMARK",movie:t})},remove_bookmark:function(t){return e({type:"REMOVE_BOOKMARK",movie_id:t})}}}))((function(e){var t=r.a.useState([]),n=Object(b.a)(t,2),o=n[0],a=n[1],c=r.a.useState(!1),s=Object(b.a)(c,2),d=s[0],j=s[1],p=r.a.useState(!0),O=Object(b.a)(p,2),x=O[0],k=O[1],y=Object(l.f)();return r.a.useEffect((function(){g.get("/trending").then((function(e){a(e.data),k(!1)})).catch((function(e){return console.log(e)}))}),[C]),x?Object(i.jsx)("div",{style:{flex:1,textAlign:"center",marginTop:"15%"},children:Object(i.jsx)(v.a,{color:"secondary"})}):Object(i.jsxs)("div",{className:"Home",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search ..",style:{display:"inline-block",padding:5,width:"70%",height:30,borderRadius:12,marginTop:20}}),Object(i.jsxs)("div",{style:{display:"inline-block"},children:[Object(i.jsx)("a",{href:"/favoris",children:Object(i.jsx)(m.a,{style:{display:"inline-block",color:"white",width:40,height:40,position:"relative",top:15,left:20}})}),Object(i.jsxs)("div",{style:{display:"inline-block",position:"absolute",top:20,right:40},onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[Object(i.jsx)(f.a,{style:{color:"white",width:40,height:40}}),d&&Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",style:{width:50,fontSize:12,color:"white",top:10,position:"relative"},onClick:Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.disconnect();case 2:y.push("/login");case 3:case"end":return t.stop()}}),t)}))),children:e.connection?"Log out":"Log-in"})})]})]}),Object(i.jsx)("div",{style:{marginTop:20,width:"90%",marginLeft:"5%"},children:o.map((function(t){return Object(i.jsxs)("div",{style:{display:"inline-block",width:250,height:300,marginTop:20,marginRight:20,borderRadius:12,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)"},children:[Object(i.jsxs)("div",{style:{display:"inline-block",width:250,height:300},children:[Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+t.backdrop_path,alt:"Norway",style:{width:"100%",height:"85%"},onClick:function(){return y.push({pathname:e.connection?"/movie":"/login",state:e.connection?t:{error:"Not Signed In"}})}}),Object(i.jsx)("span",{style:{fontSize:12},children:t.title||t.name||"untitled"})]}),Object(i.jsx)("div",{style:{display:"inline-block",position:"relative"},children:Object(i.jsx)(T,{movie:t,marked:!1,add_bookmark:e.add_bookmark,remove_bookmark:e.remove_bookmark})})]},t.id)}))})]})})),A=n(191),D=n(187),U=n(184),K=n(188),B=n(186),J=n(190),F=n(181),z=n(185),q=n(189),P=n(183),V=n(87),W=n(182),H=n(83),G=n.n(H),Q=n(82),Y=n.n(Q);function X(){return Object(i.jsxs)(V.a,{variant:"body2",color:"textSecondary",align:"center",children:["No Copyright \ud83d\ude0a ",Object(i.jsx)(F.a,{color:"inherit",href:"https://material-ui.com/",children:"BLemine"})," ",(new Date).getFullYear(),"."]})}var Z=Object(W.a)((function(e){return{root:{height:"100vh"},image:{backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#4e343d"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#2d2e35"}}}));var $=Object(x.b)((function(e){return{connection:e.connection}}),(function(e){return{sign_In:function(t,n){e({type:"SIGN_IN",user:{login:t,password:n,bookMarks:[]}})}}}))((function(e){var t=Z(),n=Object(l.f)(),o=Object(l.g)(),a=r.a.useState("url(https://watchaholichome.files.wordpress.com/2018/11/popcorn.gif?w=371)"),c=Object(b.a)(a,2),s=c[0],d=c[1],u=r.a.useState({login:"",password:""}),h=Object(b.a)(u,2),j=h[0],p=h[1],m=r.a.useState(!1),O=Object(b.a)(m,2),f=O[0],x=O[1];return r.a.useEffect((function(){e.connection?n.push("/"):(void 0!==o.state&&alert(o.state.error),g.get("/images").then((function(e){d(e.data[Math.floor(e.data.length*Math.random())])})).catch((function(e){return console.log(e)})))}),[C]),Object(i.jsxs)(P.a,{container:!0,component:"main",className:t.root,children:[Object(i.jsx)(U.a,{}),Object(i.jsx)(P.a,{item:!0,xs:!1,sm:4,md:7,style:{backgroundImage:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),Object(i.jsx)(P.a,{item:!0,xs:12,sm:8,md:5,component:z.a,elevation:6,square:!0,children:Object(i.jsxs)("div",{className:t.paper,children:[Object(i.jsx)(A.a,{className:t.avatar,children:Object(i.jsx)(G.a,{})}),Object(i.jsx)(V.a,{component:"h1",variant:"h5",children:"Sign in"}),!f&&Object(i.jsxs)("form",{className:t.form,onSubmit:function(t){return t.preventDefault(),x(!0),void g.post("/user",{login:j.login,password:j.password}).then((function(t){x(!1),"OK"===t.data?(console.log("Welcome user"),e.sign_In(j.login,j.password),n.push("/")):(Y()("Oops!","Inputs don't match !","error"),console.log("Bad typing"))})).catch((function(e){return console.log(e)}))},children:[Object(i.jsx)(K.a,{onChange:function(e){return p(Object(k.a)(Object(k.a)({},j),{},{login:e.target.value}))},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"login",label:"Login",autoFocus:!0}),Object(i.jsx)(K.a,{onChange:function(e){return p(Object(k.a)(Object(k.a)({},j),{},{password:e.target.value}))},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(i.jsx)(B.a,{control:Object(i.jsx)(J.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(i.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(i.jsxs)(P.a,{container:!0,children:[Object(i.jsx)(P.a,{item:!0,xs:!0,children:Object(i.jsx)(F.a,{href:"/",variant:"body2",style:{color:"#2d2e35"},children:"Visit the public page ?"})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(F.a,{href:"#",variant:"body2",style:{color:"#2d2e35"},children:"Don't have an account? Sign Up"})})]}),Object(i.jsx)(q.a,{mt:5,children:Object(i.jsx)(X,{})})]}),f&&Object(i.jsx)("div",{style:{flex:1,textAlign:"center",marginTop:"15%"},children:Object(i.jsx)(v.a,{color:"secondary"})})]})})]})})),ee=(n(135),n(84)),te=n.n(ee);var ne=Object(x.b)((function(e){return{connection:e.connection,user:e.user}}),(function(e){return{remove_bookmark:function(t){return e({type:"REMOVE_BOOKMARK",movie_id:t})},add_bookmark:function(t){return e({type:"ADD_BOOKMARK",movie:t})},disconnect:function(){return e({type:"DISCONNECT"})}}}))((function(e){var t=r.a.useState(!1),n=Object(b.a)(t,2),o=n[0],a=n[1],c=Object(l.f)();return r.a.useEffect((function(){e.connection||c.push({pathname:"/login",state:{error:"Not signed in"}})}),[C]),Object(i.jsxs)("div",{className:"Favoris",children:[Object(i.jsx)("div",{style:{display:"inline-block"},children:Object(i.jsx)(te.a,{style:{color:"white",width:40,height:40,position:"relative",top:15,right:20,cursor:"pointer"},onClick:function(){return c.push("/")}})}),Object(i.jsx)("input",{type:"text",placeholder:"Search ..",style:{display:"inline-block",padding:5,width:"70%",height:30,borderRadius:12,marginTop:20}}),Object(i.jsxs)("div",{style:{display:"inline-block"},children:[Object(i.jsx)("a",{href:"/favoris",children:Object(i.jsx)(m.a,{style:{display:"inline-block",color:"white",width:40,height:40,position:"relative",top:15,left:20}})}),Object(i.jsxs)("div",{style:{display:"inline-block",position:"absolute",top:20,right:20},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[Object(i.jsx)(f.a,{style:{color:"white",width:40,height:40}}),o&&Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"/login",style:{width:50,fontSize:12,color:"white",top:10,position:"relative"},onClick:function(){return e.disconnect()},children:"Log out"})})]})]}),Object(i.jsxs)("div",{children:[0===e.user.bookMarks.length&&"Empty List !",e.user.bookMarks.map((function(t){return Object(i.jsxs)("div",{style:{display:"inline-block",width:250,height:300,marginTop:20,marginRight:20,borderRadius:12,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)"},children:[Object(i.jsxs)("div",{style:{display:"inline-block",width:250,height:300},children:[Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+t.backdrop_path,alt:"Norway",style:{width:"100%",height:"85%"},onClick:function(){return c.push({pathname:e.connection?"/movie":"/login",state:e.connection?t:{error:"Not Signed In"}})}}),Object(i.jsx)("span",{style:{fontSize:12},children:t.title||t.name||"untitled"})]}),Object(i.jsx)("div",{style:{display:"inline-block",position:"relative"},children:Object(i.jsx)(T,{marked:!0,movie:t,add_bookmark:e.add_bookmark,remove_bookmark:e.remove_bookmark})})]},t.id)}))]})]})})),ie=n(85),oe=n.n(ie),re=Object(x.b)((function(e){return{connection:e.connection}}))((function(e){var t=r.a.useState({id:"",title:"",name:"",release_date:"",first_air_date:"",media_type:"movie",overview:"Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",vote_average:"6.2",original_language:"en",poster_path:"/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",trailer:""}),n=Object(b.a)(t,2),o=n[0],a=n[1],c=Object(l.g)(),s=Object(l.f)(),d=r.a.useState(""),u=Object(b.a)(d,2),h=u[0],j=u[1],p=r.a.useState(!0),m=Object(b.a)(p,2),O=m[0],f=m[1];return r.a.useEffect((function(){var e;e=c.state.id,g.post("/movie_trailer",{movie_id:e}).then((function(e){var t=c.state;t.trailer=e.data,a(t),f(!1)})).catch((function(e){a(c.state),j("No trailer Available"),f(!1)}))}),[C]),e.connection?O?Object(i.jsx)("div",{style:{flex:1,textAlign:"center",marginTop:"15%"},children:Object(i.jsx)(v.a,{color:"secondary"})}):Object(i.jsxs)("div",{style:{backgroundColor:"#282c34"},children:[Object(i.jsxs)("div",{style:{marginBottom:"5%"},children:[Object(i.jsx)("div",{style:{display:"inline-block",position:"relative",top:10},children:Object(i.jsx)("img",{style:{width:300,height:350,marginLeft:20},src:"https://image.tmdb.org/t/p/original"+o.backdrop_path})}),Object(i.jsxs)("div",{style:{display:"inline-block",top:5,width:"60%",marginLeft:20,position:"relative",color:"white"},children:[Object(i.jsxs)("p",{children:["Title : ",o.title?o.title:o.name," "]}),Object(i.jsxs)("p",{children:["Release Date : ",o.release_date?o.release_date:o.first_air_date," "]}),Object(i.jsxs)("p",{children:["Type : ",o.media_type," "]}),Object(i.jsxs)("p",{children:["Rating : ",o.vote_average," "]}),Object(i.jsxs)("p",{children:["Original Language : ",o.original_language]}),Object(i.jsxs)("p",{style:{width:"100%",height:150,overflow:"auto"},children:["Overview : ",o.overview," "]})]})]}),Object(i.jsxs)("div",{style:{flex:1,textAlign:"center",minHeight:"60vh",marginLeft:20,marginTop:20,position:"relative"},children:[o.trailer&&Object(i.jsx)(oe.a,{width:"90%",url:"https://www.youtube.com/watch?v="+o.trailer}),!o.trailer&&Object(i.jsx)("h2",{style:{color:"white"},children:h})]})]}):(s.push("/login"),Object(i.jsx)($,{}))}));var ae=function(){return Object(i.jsx)(x.a,{store:C,children:Object(i.jsx)(s.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",children:Object(i.jsx)(L,{})}),Object(i.jsx)(l.a,{path:"/favoris",children:Object(i.jsx)(ne,{})}),Object(i.jsx)(l.a,{path:"/login",children:Object(i.jsx)($,{})}),Object(i.jsx)(l.a,{path:"/movie",children:Object(i.jsx)(re,{})})]})})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),r(e),a(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[143,1,2]]]);
//# sourceMappingURL=main.df3a6e63.chunk.js.map