(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(16),s=n.n(a),r=n(9),o=n(2),d=n(1),u=function(){return Object(d.jsx)("div",{children:"StreamCreate"})},j=function(){return Object(d.jsx)("div",{children:"StreamEdit"})},O=function(){return Object(d.jsx)("div",{children:"StreamDelete"})},h=function(){return Object(d.jsx)("div",{children:"StreamList"})},l=function(){return Object(d.jsx)("div",{children:"StreamShow"})},b=n(17),m=n(18),p=n(21),x=n(20);n(27).config();var E={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:""}).ENVIRONMENT,GOOGLE_OAUTH_CLIENT_ID:"",GOOGLE_OAUTH_CLIENT_SECRET:""},_=function(e){Object(p.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isSignedIn:null},e.onAuthChange=function(){e.setState({isSignedIn:e.auth.isSignedIn.get()})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:E.GOOGLE_OAUTH_CLIENT_ID,scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.state.isSignedIn?Object(d.jsx)("div",{children:"I don't know if we are signed in"}):this.state.isSignedIn?Object(d.jsx)("div",{children:"I'm signed in!"}):Object(d.jsx)("div",{children:"I'm not signed in"})}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderAuthButton()})}}]),n}(c.a.Component),S=function(){return Object(d.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(d.jsx)(r.b,{to:"/",className:"item",children:"Streamer"}),Object(d.jsxs)("div",{className:"right menu",children:[Object(d.jsx)(r.b,{to:"/",className:"item",children:"All Streams"}),Object(d.jsx)(_,{})]})]})},v=function(){return Object(d.jsx)("div",{className:"ui container",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsx)(o.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(o.a,{path:"/streams/new",exact:!0,component:u}),Object(d.jsx)(o.a,{path:"/streams/edit",exact:!0,component:j}),Object(d.jsx)(o.a,{path:"/streams/delete",exact:!0,component:O}),Object(d.jsx)(o.a,{path:"/streams/show",exact:!0,component:l})]})})})};s.a.render(Object(d.jsx)(v,{}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.12139b46.chunk.js.map