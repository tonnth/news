(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=(n(93),n(19)),i=n(15),o=n(22),l="/news",s="/history",u=n(28),f=n(3),m=n(86),E=n.n(m),d="NEWS_FETCHING",p="NEWS_FETCH_SUCCESS",O="NEWS_FETCH_ERROR",h="NEWS_LOAD_MORE_SUCCESS",b="OPEN_ARTICLE",g="HISTORY_FETCHING",w="HISTORY_FETCH_SUCCESS",y="HISTORY_FETCH_ERROR",v=n(6),j=n.n(v),N=new E.a("118acc3afa94409bb7d895fd9aa30825"),S=function(e){return function(t){return t({type:d}),N.v2.everything(Object(f.a)({},e,{sources:"cnn,the-new-york-times"})).then(function(e){t({type:p,articles:e.articles})}).catch(function(e){t({type:O,error:e})})}},C=(n(144),n(57)),H=n.n(C),T={fetchNews:S},_=Object(o.c)(c.g,Object(i.b)(null,T))(function(e){var t=e.history,n=e.fetchNews,c=e.location,i=Object(r.useRef)(j.a.debounce(n,300));return a.a.createElement("div",{className:"search-bar-container"},a.a.createElement("div",{className:"input-container"},a.a.createElement("input",{type:"text",className:"input input-width",onChange:function(e){var t=e.target.value;i.current({q:t})},placeholder:"Filter News..."})),a.a.createElement("div",{className:"button-container"},a.a.createElement("a",{className:H()("button",{focus:c.pathname.includes(l)}),onClick:function(){t.push(l)},"aria-current":"page"},"News"),a.a.createElement("a",{className:H()("button",{focus:c.pathname.includes(s)}),onClick:function(){t.push(s)},"aria-current":"page"},"History")))}),L=n(60),F=n.n(L),R=n(88),k=(n(148),function(e){var t=e.article,n=e.openArticle,r=t.title,c=t.source,i=t.url,o=t.urlToImage,l=t.description,s=function(){var e=Object(R.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n(t),window.open(i);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"article-container"},a.a.createElement("div",{onClick:s},a.a.createElement("img",{src:o,alt:r,className:"image"}),a.a.createElement("div",{className:"article-content"},a.a.createElement("div",{className:"article-title"},r),a.a.createElement("div",{className:"article-source"},c.name),a.a.createElement("p",{className:"article-description"},l))))}),x=(n(149),Object(r.memo)(function(){return a.a.createElement("div",{className:"list-loading"},"Loading...")})),A=Object(r.memo)(function(){return a.a.createElement("div",{className:"list-empty"},"Do not have any article")}),I=Object(r.memo)(function(){return a.a.createElement("div",{className:"list-error"},"Failed to load news")}),U=Object(r.memo)(function(e){var t=e.error,n=e.loadMore,c=e.articles,i=e.fetching,o=e.openArticle,l=e.endOfList,s=function(){window.innerHeight+window.scrollY+300>=document.body.offsetHeight&&(i||l||n())};return Object(r.useEffect)(function(){return"function"===typeof n&&window.addEventListener("scroll",s),function(){"function"===typeof n&&window.removeEventListener("scroll",s)}}),0!==c.length||i||t?a.a.createElement("div",null,a.a.createElement("div",null,c.map(function(e,t){return a.a.createElement(k,{key:e.url+t,article:e,openArticle:o})})),i&&a.a.createElement(x,null),t&&a.a.createElement(I,null)):a.a.createElement(A,null)}),J={fetchNews:S,loadMore:function(){return function(e,t){var n=t(),r={sources:"cnn,the-new-york-times",page:j.a.get(n,"news.page")+1},a=j.a.get(n,"news.keyword");return a&&(r.q=a),e({type:d}),N.v2.everything(r).then(function(t){e({type:h,articles:t.articles})})}},openArticle:function(e){return function(t,n){var r=j.a.get(n(),"history.articles"),a=[e].concat(Object(u.a)(r));localStorage.setItem("history",JSON.stringify(a)),t({type:b,article:e})}}},W=Object(i.b)(function(e){return{articles:j.a.get(e,"news.articles"),fetching:j.a.get(e,"news.fetching"),error:j.a.get(e,"news.error"),endOfList:j.a.get(e,"news.endOfList")}},J)(function(e){var t=e.fetchNews;return Object(r.useEffect)(function(){t()},[]),a.a.createElement("div",null,a.a.createElement(U,e))}),Y=(n(150),Object(i.b)(function(e){return{articles:j.a.get(e,"history.articles")}},{})(function(e){return a.a.createElement("div",null,a.a.createElement(U,e))})),B={fetchHistory:function(){return function(e){e({type:g});var t=JSON.parse(localStorage.getItem("history"))||[];e({type:w,articles:t})}}},D=Object(i.b)(null,B)(function(e){var t=e.fetchHistory;return Object(r.useEffect)(function(){t()},[]),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"col"},a.a.createElement(_,null),a.a.createElement(c.d,null,a.a.createElement(c.a,{exact:!0,from:"/",to:l}),a.a.createElement(c.b,{path:l,component:W}),a.a.createElement(c.b,{exact:!0,path:s,component:Y}))))}),G=n(41),M=n(40),q=n(89),P={news:{articles:[],page:0,keyword:"",fetching:!0,error:null,endOfList:!1},history:{articles:[],fetching:!0,error:null}},z=n(90),K=Object(z.createLogger)({colors:{title:function(e){if(e&&e.type){if(e.type.indexOf("FAIL")>=0)return"red";if(e.type.indexOf("SUCCESS")>=0)return"green";if(e.type.indexOf("UPDATE")>=0)return"orange";if(e.type.indexOf("GET")>=0)return"#EBB72C";if(e.type.indexOf("CONNECT")>=0)return"#972A93"}return"blue"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}}),Q=Object(o.a)(q.a,K),V=Object(o.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(f.a)({},e,{news:Object(f.a)({},e.news,{fetching:!0})});case p:return Object(f.a)({},e,{news:Object(f.a)({},e.news,{articles:t.articles,fetching:!1,page:1,endOfList:t.articles.length<20})});case O:return Object(f.a)({},e,{news:Object(f.a)({},e.news,{articles:[],fetching:!1,error:t.error})});case h:return Object(f.a)({},e,{news:Object(f.a)({},e.news,{articles:[].concat(Object(u.a)(e.news.articles),Object(u.a)(t.articles)),fetching:!1,page:e.news.page+1,error:t.error,endOfList:t.articles.length<20})});case b:return Object(f.a)({},e,{history:{articles:[t.article].concat(Object(u.a)(e.history.articles))}});case w:return Object(f.a)({},e,{history:{articles:t.articles}});case y:return Object(f.a)({},e,{history:Object(f.a)({},e.news,{articles:[],fetching:!1,error:t.error})});default:return e}},Q);Object(M.render)(a.a.createElement(i.a,{store:V},a.a.createElement(G.a,null,a.a.createElement(c.b,{component:D}))),document.getElementById("root"))},91:function(e,t,n){e.exports=n(151)},93:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.06bc7eaa.chunk.js.map