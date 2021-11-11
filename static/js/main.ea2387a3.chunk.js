(this["webpackJsonpmovies-library"]=this["webpackJsonpmovies-library"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(10),i=r.n(n),s=(r(22),r(23),r(8)),o=r(2),l=r(6),b=r(5),d=r(15),j=r(11),h=Object(j.b)({name:"myLibrary",initialState:{myLibrary:[]},reducers:{addToMyLibrary:function(e,t){e.myLibrary=[].concat(Object(d.a)(e.myLibrary),[t.payload]),localStorage.setItem("myLIbrary",JSON.stringify(e.myLibrary))},checkLocalStorage:function(e){var t=localStorage.getItem("myLIbrary"),r=JSON.parse(t);t&&(e.myLibrary=r)},toggleIsWatched:function(e,t){e.myLibrary[t.payload].isWatched=!e.myLibrary[t.payload].isWatched,localStorage.setItem("myLIbrary",JSON.stringify(e.myLibrary))},removeFromLibrary:function(e,t){var r=Object(d.a)(e.myLibrary);r.splice(t.payload,1),e.myLibrary=r,localStorage.setItem("myLIbrary",JSON.stringify(e.myLibrary))},rateMovie:function(e,t){var r=t.payload.index,a=t.payload.rate;e.myLibrary[r].rating=a,localStorage.setItem("myLIbrary",JSON.stringify(e.myLibrary))}}}),u=h.actions,y=u.addToMyLibrary,m=u.checkLocalStorage,O=u.toggleIsWatched,p=u.removeFromLibrary,v=u.rateMovie,f=h.reducer,x=function(){return{ratings:[1,2,3,4,5,6,7,8,9,10]}},g=r(1),L=function(e){var t=e.poster,r=e.title,c=e.index,n=e.isWatched,i=e.rating,s=Object(a.useState)(5),o=Object(b.a)(s,2),d=o[0],j=o[1],h=Object(l.b)(),u=x().ratings;return Object(g.jsxs)("div",{className:"card favorite",children:[Object(g.jsx)("img",{className:"poster",src:t,alt:"movie poster"}),Object(g.jsx)("h2",{children:r}),Object(g.jsxs)("div",{className:"checkWrapper",children:[Object(g.jsx)("input",{className:"isWatchedCheckbox",type:"checkbox",name:"isWatched",id:c,checked:n,onChange:function(){return h(O(c))}})," ",Object(g.jsx)("label",{htmlFor:c,className:"isWatchedLabel",children:n?"Watched":"To watched"})]}),0===i?Object(g.jsxs)("div",{className:"checkWrapper",children:[Object(g.jsx)("p",{className:"rating",children:"Rate movie"}),Object(g.jsx)("select",{defaultValue:5,className:"ratingSelect",onChange:function(e){return j(e.target.value)},children:u.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))}),Object(g.jsx)("button",{className:"ratingBtn",onClick:function(){return h(v({rate:d,index:c}))},children:"ok"})]}):Object(g.jsxs)("p",{className:"rating",children:["Your rating:"," ",Object(g.jsx)("span",{className:"rating-bold",style:{color:"".concat(i<4?"red":i>6?"green":"")},children:i})," "]}),Object(g.jsx)("button",{className:"searchBtn addBtn",onClick:function(){return h(p(c))},children:"remove from my library"})]})},N=function(){var e=Object(l.c)((function(e){return e.myLibrary.myLibrary}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{className:"title_header",children:"My Library"}),Object(g.jsx)(s.b,{to:"/",className:"routeLink",children:"Back to search"}),Object(g.jsxs)("div",{className:"moviesWrapper",children:[" ",null===e||void 0===e?void 0:e.map((function(e,t){return Object(g.jsx)(L,{poster:e.poster,title:e.title,index:t,rating:e.rating,isWatched:e.isWatched},t)}))]})]})},S=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.myLibrary.myLibrary}));return{addMovieToLibrary:function(r,a,c){var n={title:r,poster:a,id:c,isWatched:!1,rating:0};t.some((function(e){return e.id===c}))?alert("This is already in Your library"):e(y(n))}}},k=function(e){var t=e.title,r=e.poster,a=e.id,c=S().addMovieToLibrary;return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{className:"poster",src:r,alt:"movie poster"}),Object(g.jsx)("h2",{children:t}),Object(g.jsx)("button",{className:"searchBtn addBtn",onClick:function(){return c(t,r,a)},children:"Add to My Library"})]})},M=function(e){var t=e.setSearchedTitle,r=e.findMovies,a=e.searchedTitle,c=e.tooShort;return Object(g.jsxs)("div",{className:"searchBar_wrapper",children:[c&&Object(g.jsx)("p",{className:"alert",style:{color:"red"},children:"At least 3 characters are required."}),Object(g.jsx)("input",{className:"searchBar",type:"text",placeholder:"search movie...",minLength:3,style:c?{border:"2px solid red"}:{},onChange:function(e){return t(e.target.value)},onKeyPress:function(e){13===e.charCode&&r(a)}}),Object(g.jsx)("button",{type:"button",className:"searchBtn",onClick:function(){return r(a)},children:"search"})]})},T=r(14),W=r.n(T),I=r(17),C=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)([]),i=Object(b.a)(n,2),s=i[0],o=i[1],l=Object(a.useState)(!1),d=Object(b.a)(l,2),j=d[0],h=d[1],u=function(){var e=Object(I.a)(W.a.mark((function e(t){var r,a,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<3)){e.next=4;break}h(!0),e.next=19;break;case 4:return e.prev=4,h(!1),r="https://www.omdbapi.com/?apikey=".concat("7771911","&s=").concat(t,"&plot=full"),e.next=9,fetch(r);case 9:return a=e.sent,e.next=12,a.json();case 12:c=e.sent,o(c.Search),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}();return{findMovies:u,setSearchedTitle:c,searchedTitle:r,tooShort:j,searchedMovies:s}},B=function(){var e=C(),t=e.findMovies,r=e.setSearchedTitle,a=e.searchedTitle,c=e.tooShort,n=e.searchedMovies;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"title_header",children:"Movies Library"}),Object(g.jsxs)(s.b,{to:"/mylibrary",className:"routeLink",children:[" ","My Library"]}),Object(g.jsx)(M,{setSearchedTitle:r,findMovies:t,searchedTitle:a,tooShort:c}),Object(g.jsxs)("div",{className:"moviesWrapper",children:[!n&&Object(g.jsx)("p",{children:"Sorry, we couldn't find this in our library. Please try again."}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(g.jsx)(k,{title:e.Title,poster:e.Poster,id:e.imdbID},t)}))]})]})};var w=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){e(m())}),[e]),Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(s.a,{basename:"/movies-library",children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/",element:Object(g.jsx)(B,{})}),Object(g.jsx)(o.a,{path:"/mylibrary",element:Object(g.jsx)(N,{})})]})})})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,33)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))},J=Object(j.a)({reducer:{myLibrary:f}});i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(l.a,{store:J,children:Object(g.jsx)(w,{})})}),document.getElementById("root")),F()}},[[32,1,2]]]);
//# sourceMappingURL=main.ea2387a3.chunk.js.map