(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{238:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(52),c=n.n(i),s=n(11),o=n(8),u=n(105),d=n(7),l=n(9),p=n(22),O=n(23),j=n(26),h=n(25),b=n(240),m=n(239),E=n(18),S=n.n(E),_=n(36),T=n(106),f=n.n(T);n(134).config();var v="develop"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"}).ENVIRONMENT,g={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"}).ENVIRONMENT,DEVELOP:v,GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/"},I=f.a.create({baseURL:g.STREAMS_API_BASE_URL}),A={SIGN_IN:"SIGN_IN",SIGN_OUT:"SIGN_OUT",CREATE_STREAM:"CREATE_STREAM",FETCH_STREAMS:"FETCH_STREAMS",FETCH_STREAM:"FETCH_STREAM",DELETE_STREAM:"DELETE_STREAM",EDIT_STREAM:"EDIT_STREAM"},x=n(13),N=Object(x.a)(),C=n(2),R=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var n=t.input,r=t.label,a=t.meta,i="field ".concat(a.error&&a.touched?"error":"");return Object(C.jsxs)("div",{className:i,children:[Object(C.jsx)("label",{children:r}),Object(C.jsx)("input",Object(l.a)(Object(l.a)({},n),{},{autoComplete:"off"})),e.renderError(a)]})},e.onSubmit=function(t){e.props.createStream(t)},e}return Object(O.a)(n,[{key:"renderError",value:function(e){var t=e.error;return e.touched&&t&&Object(C.jsx)("div",{className:"ui error message",children:Object(C.jsx)("div",{className:"header",children:t})})}},{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error",children:[Object(C.jsx)(b.a,{name:"title",component:this.renderInput,label:"Enter Title"}),Object(C.jsx)(b.a,{name:"description",component:this.renderInput,label:"Enter Description"}),Object(C.jsx)("button",{className:"ui button positive",children:"Submit"})]})}}]),n}(a.a.Component),y=Object(m.a)({form:"streamCreate",validate:function(e){var t={};return e.title||(t.title="\u26d4\ufe0f You must enter a title"),e.description||(t.description="\u26d4\ufe0f You must enter a description"),t}})(R),k=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(_.a)(S.a.mark((function t(n,r){var a,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,I.post("/streams",Object(l.a)(Object(l.a)({},e),{},{userId:a}));case 3:i=t.sent,n({type:A.CREATE_STREAM,payload:i.data}),N.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(y),L=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?Object(C.jsx)("div",{children:this.props.stream.title}):Object(C.jsx)("div",{children:"Loading..."})}}]),n}(a.a.Component),M=Object(s.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:function(e){return function(){var t=Object(_.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.get("/streams/".concat(e));case 2:r=t.sent,n({type:A.FETCH_STREAM,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(L),w=function(){return Object(C.jsx)("div",{children:"StreamDelete"})},D=n(30),U=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId&&e.userId===this.props.currentUserId)return Object(C.jsxs)("div",{className:"right floated content",children:[Object(C.jsx)(D.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary",children:"Edit"}),Object(C.jsx)("button",{className:"ui button negative",children:"Delete"})]})}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return Object(C.jsxs)("div",{className:"item",children:[e.renderAdmin(t),Object(C.jsx)("i",{className:"large middle aligned icon camera"}),Object(C.jsxs)("div",{className:"content",children:[t.title,Object(C.jsx)("div",{className:"description",children:t.description})]})]},t.id)}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return Object(C.jsx)("div",{style:{textAlign:"right"},children:Object(C.jsx)(D.a,{to:"/streams/new",className:"ui button positive",children:"Create Stream"})})}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Streams"}),Object(C.jsx)("div",{className:"ui celled list",children:this.renderList()}),this.renderCreate()]})}}]),n}(a.a.Component),G=Object(s.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(_.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/streams");case 2:n=e.sent,t({type:A.FETCH_STREAMS,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(U),P=function(){return Object(C.jsx)("div",{children:"StreamShow"})},H=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:g.GOOGLE_OAUTH_CLIENT_ID,scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(C.jsxs)("button",{onClick:this.onSignOutClick,className:"ui red google button",children:[Object(C.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(C.jsxs)("button",{onClick:this.onSignInClick,className:"ui red google button",children:[Object(C.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(C.jsx)("div",{children:this.renderAuthButton()})}}]),n}(a.a.Component),F=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:A.SIGN_IN,payload:e}},signOut:function(){return{type:A.SIGN_OUT}}})(H),B=function(){return Object(C.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(C.jsx)(D.a,{to:"/",className:"item",children:"Streamer"}),Object(C.jsxs)("div",{className:"right menu",children:[Object(C.jsx)(D.a,{to:"/",className:"item",children:"All Streams"}),Object(C.jsx)(F,{})]})]})},q=function(){return Object(C.jsx)("div",{className:"ui container",children:Object(C.jsx)(d.b,{history:N,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(B,{}),Object(C.jsx)(d.a,{path:"/",exact:!0,component:G}),Object(C.jsx)(d.a,{path:"/streams/new",exact:!0,component:k}),Object(C.jsx)(d.a,{path:"/streams/edit/:id",exact:!0,component:M}),Object(C.jsx)(d.a,{path:"/streams/delete",exact:!0,component:w}),Object(C.jsx)(d.a,{path:"/streams/show",exact:!0,component:P})]})})})},K=n(241),V={isSignedIn:null,userId:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.SIGN_IN:return Object(l.a)(Object(l.a)({},e),{},{isSignedIn:!0,userId:t.payload});case A.SIGN_OUT:return Object(l.a)(Object(l.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},W=n(35),J=n(76),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.FETCH_STREAMS:return Object(l.a)(Object(l.a)({},e),Object(J.mapKeys)(t.payload,"id"));case A.FETCH_STREAM:case A.CREATE_STREAM:case A.EDIT_STREAM:return Object(l.a)(Object(l.a)({},e),{},Object(W.a)({},t.payload.id,t.payload));case A.DELETE_STREAM:return Object(J.omit)(e,t.payload);default:return e}},Y=Object(o.c)({auth:Q,form:K.a,streams:X}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Z=Object(o.e)(Y,z(Object(o.a)(u.a)));c.a.render(Object(C.jsx)(s.a,{store:Z,children:Object(C.jsx)(q,{})}),document.querySelector("#root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.33c6b0b9.chunk.js.map