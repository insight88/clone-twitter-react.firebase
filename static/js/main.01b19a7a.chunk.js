(this["webpackJsonpclone-twitter-react.firebase"]=this["webpackJsonpclone-twitter-react.firebase"]||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=a(4),u=a(16),o=a(2),s=a(5),m=a.n(s),p=a(10),f=a(6),d=a(17),b=a(18);a(42),a(44),a(51);b.initializeApp({apiKey:"AIzaSyD266xJppTBQOk1YZlAapJRWVXXQpyPlJM",authDomain:"clone-twitter-react-firebase.firebaseapp.com",databaseURL:"https://clone-twitter-react-firebase.firebaseio.com",projectId:"clone-twitter-react-firebase",storageBucket:"clone-twitter-react-firebase.appspot.com",messagingSenderId:"578524401515",appId:"1:578524401515:web:7cf3c857456fb8d7eb062e"});var E=b,h=b.auth(),v=b.firestore(),g=b.storage(),y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),o=u[0],s=u[1],f=Object(n.useState)(!0),d=Object(i.a)(f,2),b=d[0],E=d[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Log In"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))},className:"authSwitch"},b?"Sign in":"Create Account"))},w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new E.auth.GoogleAuthProvider:"github"===a&&(n=new E.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{name:"google",onClick:e,className:"authBtns"},"Continue with Google ",r.a.createElement(f.a,{icon:d.b})),r.a.createElement("button",{name:"github",onClick:e,className:"authBtns"},"Continue with Github ",r.a.createElement(f.a,{icon:d.a}))))},O=a(31),j=a(12),x=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],o=l[1],s=Object(n.useState)(t.text),d=Object(i.a)(s,2),b=d[0],E=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure? Delete?")){e.next=6;break}return e.next=4,v.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return o((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("tweets/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"tweet"},u?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container tweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your tweet",value:b,required:!0,onChange:function(e){var t=e.target.value;E(t)}}),r.a.createElement("input",{type:"submit",value:"Update Tweet",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(f.a,{icon:j.d})),r.a.createElement("span",{onClick:y},r.a.createElement(f.a,{icon:j.a})))))},N=a(53),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),d=s[0],b=s[1],E=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),""===n){e.next=11;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=7,r.putString(d,"data_url");case 7:return c=e.sent,e.next=10,c.ref.getDownloadURL();case 10:n=e.sent;case 11:return i={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentURL:n},e.next=14,v.collection("tweets").add(i);case 14:u(""),b("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)};return r.a.createElement("form",{onSubmit:E,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(f.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:h,style:{opacity:0}}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:h}),r.a.createElement("input",{type:"submit",value:"Tweet"}),d&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:d,style:{backgroundImage:d},alt:""}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return b("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(f.a,{icon:j.c}))))},C=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){v.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));u(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,tweetObj:e,isOwner:e.creatorId===t.uid})}))))},S=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",style:{marginRight:10}},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(f.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},I=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),l=Object(n.useState)(a.displayName),u=Object(i.a)(l,2),s=u[0],f=u[1],d=function(){h.signOut(),c.push("/")},b=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:b,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}}),r.a.createElement("input",{type:"submit",value:"Update Profile"})),r.a.createElement("button",{onClick:d},"Log Out"),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:d},"Log Out"))},A=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(u.a,null,a&&r.a.createElement(S,{userObj:n}),r.a.createElement(o.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(C,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(w,null)))))};var F=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),u=Object(i.a)(l,2),o=u[0],s=u[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=h.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Twitter Clone"))};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.01b19a7a.chunk.js.map