(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{243:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),i=n.n(c),s=n(14),o=n(12),u=n(107),l=n(11),d=n(2),p=n(3),h=n(9),m=n(8),j=n(25),O=n.n(j),b=n(13),E=n(39),S=n(108),f=n.n(S);n(137).config();var v="develop"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/",REACT_APP_RTMP_SERVER_BASE_URL:"https://streams-rtmp-server.eastus2.cloudapp.azure.com/"}).ENVIRONMENT,_={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",REACT_APP_STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/",REACT_APP_RTMP_SERVER_BASE_URL:"https://streams-rtmp-server.eastus2.cloudapp.azure.com/"}).ENVIRONMENT,DEVELOP:v,GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS",STREAMS_API_BASE_URL:"https://streams-api-six.vercel.app/",RTMP_SERVER_BASE_URL:"https://streams-rtmp-server.eastus2.cloudapp.azure.com/"},T=f.a.create({baseURL:_.STREAMS_API_BASE_URL}),x={SIGN_IN:"SIGN_IN",SIGN_OUT:"SIGN_OUT",CREATE_STREAM:"CREATE_STREAM",FETCH_STREAMS:"FETCH_STREAMS",FETCH_STREAM:"FETCH_STREAM",DELETE_STREAM:"DELETE_STREAM",EDIT_STREAM:"EDIT_STREAM"},A=n(19),g=Object(A.a)(),y=function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("/streams/".concat(e));case 2:r=t.sent,n({type:x.FETCH_STREAM,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=n(245),I=n(244),C=n(1),N=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var n=t.input,r=t.label,a=t.meta,c="field ".concat(a.error&&a.touched?"error":"");return Object(C.jsxs)("div",{className:c,children:[Object(C.jsx)("label",{children:r}),Object(C.jsx)("input",Object(b.a)(Object(b.a)({},n),{},{autoComplete:"off"})),e.renderError(a)]})},e.onSubmit=function(t){e.props.onSubmit(t)},e}return Object(p.a)(n,[{key:"renderError",value:function(e){var t=e.error;return e.touched&&t&&Object(C.jsx)("div",{className:"ui error message",children:Object(C.jsx)("div",{className:"header",children:t})})}},{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error",children:[Object(C.jsx)(R.a,{name:"title",component:this.renderInput,label:"Enter Title"}),Object(C.jsx)(R.a,{name:"description",component:this.renderInput,label:"Enter Description"}),Object(C.jsx)("button",{className:"ui button positive",children:"Submit"})]})}}]),n}(a.a.Component),k=Object(I.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="\u26d4\ufe0f You must enter a title"),e.description||(t.description="\u26d4\ufe0f You must enter a description"),t}})(N),L=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.createStream(t)},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Create a Stream"}),Object(C.jsx)(k,{onSubmit:this.onSubmit})]})}}]),n}(a.a.Component),M=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n,r){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,T.post("/streams",Object(b.a)(Object(b.a)({},e),{},{userId:a}));case 3:c=t.sent,n({type:x.CREATE_STREAM,payload:c.data}),g.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(L),P=n(46),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.editStream(e.props.match.params.id,t)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Edit a Stream"}),Object(C.jsx)(k,{initialValues:Object(P.pick)(this.props.stream,"title","description"),onSubmit:this.onSubmit})]}):Object(C.jsx)("div",{children:"Loading..."})}}]),n}(a.a.Component),D=Object(s.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:y,editStream:function(e,t){return function(){var n=Object(E.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.patch("/streams/".concat(e),t);case 2:a=n.sent,r({type:x.EDIT_STREAM,payload:a.data}),g.push("/");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(w),U=n(24),G=function(e){return i.a.createPortal(Object(C.jsx)("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active",children:Object(C.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active",children:[Object(C.jsx)("div",{className:"header",children:e.title}),Object(C.jsx)("div",{className:"content",children:e.content}),Object(C.jsx)("div",{className:"actions",children:e.actions})]})}),document.querySelector("#modal"))},H=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui primary button negative",children:"Delete"}),Object(C.jsx)(U.a,{to:"/",className:"ui button",children:"Cancel"})]})}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream with title: ".concat(this.props.stream.title):"Are you sure you want to delete this stream? \ud83e\udd14"}},{key:"render",value:function(){return this.props.stream?Object(C.jsx)(G,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return g.push("/")}}):Object(C.jsx)("div",{children:"Loading..."})}}]),n}(a.a.Component),F=Object(s.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:y,deleteStream:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.delete("/streams/".concat(e));case 2:n({type:x.DELETE_STREAM,payload:e}),g.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(H),B=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId&&e.userId===this.props.currentUserId)return Object(C.jsxs)("div",{className:"right floated content",children:[Object(C.jsx)(U.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary",children:"Edit"}),Object(C.jsx)(U.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative",children:"Delete"})]})}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return Object(C.jsxs)("div",{className:"item",children:[e.renderAdmin(t),Object(C.jsx)("i",{className:"large middle aligned icon camera"}),Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)(U.a,{to:"/streams/".concat(t.id),className:"header",children:t.title}),Object(C.jsx)("div",{className:"description",children:t.description})]})]},t.id)}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return Object(C.jsx)("div",{style:{textAlign:"right"},children:Object(C.jsx)(U.a,{to:"/streams/new",className:"ui button positive",children:"Create Stream"})})}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Streams"}),Object(C.jsx)("div",{className:"ui celled list",children:this.renderList()}),this.renderCreate()]})}}]),n}(a.a.Component),V=Object(s.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(E.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/streams");case 2:n=e.sent,t({type:x.FETCH_STREAMS,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(B),q=n(110),K=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).videoRef=a.a.createRef(),r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=q.a.createPlayer({type:"flv",url:"".concat(_.RTMP_SERVER_BASE_URL,"live/").concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){if(this.props.stream){var e=this.props.stream,t=e.title,n=e.description;return Object(C.jsxs)("div",{children:[Object(C.jsx)("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),Object(C.jsx)("h1",{children:t}),Object(C.jsx)("h5",{children:n})]})}return Object(C.jsx)("div",{children:"Loading..."})}}]),n}(a.a.Component),Q=Object(s.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:y})(K),W=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:_.GOOGLE_OAUTH_CLIENT_ID,scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(C.jsxs)("button",{onClick:this.onSignOutClick,className:"ui red google button",children:[Object(C.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(C.jsxs)("button",{onClick:this.onSignInClick,className:"ui red google button",children:[Object(C.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(C.jsx)("div",{children:this.renderAuthButton()})}}]),n}(a.a.Component),z=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:x.SIGN_IN,payload:e}},signOut:function(){return{type:x.SIGN_OUT}}})(W),J=function(){return Object(C.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(C.jsx)(U.a,{to:"/",className:"item",children:"Streamer"}),Object(C.jsxs)("div",{className:"right menu",children:[Object(C.jsx)(U.a,{to:"/",className:"item",children:"All Streams"}),Object(C.jsx)(z,{})]})]})},X=function(){return Object(C.jsx)("div",{className:"ui container",children:Object(C.jsx)(l.b,{history:g,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(J,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/",exact:!0,component:V}),Object(C.jsx)(l.a,{path:"/streams/new",exact:!0,component:M}),Object(C.jsx)(l.a,{path:"/streams/edit/:id",exact:!0,component:D}),Object(C.jsx)(l.a,{path:"/streams/delete/:id",exact:!0,component:F}),Object(C.jsx)(l.a,{path:"/streams/:id",exact:!0,component:Q})]})]})})})},Y=n(246),Z={isSignedIn:null,userId:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.SIGN_IN:return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!0,userId:t.payload});case x.SIGN_OUT:return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},ee=n(38),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.FETCH_STREAMS:return Object(b.a)(Object(b.a)({},e),Object(P.mapKeys)(t.payload,"id"));case x.FETCH_STREAM:case x.CREATE_STREAM:case x.EDIT_STREAM:return Object(b.a)(Object(b.a)({},e),{},Object(ee.a)({},t.payload.id,t.payload));case x.DELETE_STREAM:return Object(P.omit)(e,t.payload);default:return e}},ne=Object(o.c)({auth:$,form:Y.a,streams:te}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,ae=Object(o.e)(ne,re(Object(o.a)(u.a)));i.a.render(Object(C.jsx)(s.a,{store:ae,children:Object(C.jsx)(X,{})}),document.querySelector("#root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.543b1fef.chunk.js.map