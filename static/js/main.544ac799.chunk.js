(this.webpackJsonppinterest=this.webpackJsonppinterest||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/heart.2d6e1dd6.svg"},24:function(e,t,a){e.exports=a.p+"static/media/pinterest.098da3c0.svg"},25:function(e,t,a){e.exports=a.p+"static/media/download.3f145989.svg"},31:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),r=a.n(o),l=(a(36),a(18)),s=a(10),i=a(23),m=function(e,t){return fetch("https://api.unsplash.com/search/photos?&page=".concat(e,"&query=").concat(t,"&client_id=").concat("d2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ","&per_page=30"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return 200===e.status?(console.log(t),e.json()):Promise.reject(console.log(e))}))},u=(a(19),a(24)),d=a.n(u),p=function(e){var t=e.search,a=e.getCategory,n=e.setcategory;return c.a.createElement("nav",{className:"nav-header"},c.a.createElement("li",null,c.a.createElement("img",{src:d.a,alt:"logo",className:"logo-header"})),c.a.createElement("li",null,c.a.createElement("button",{type:"submit",className:"button-inicio",onClick:function(){n("aesthetic"),t(),document.getElementById("searchbar").value=""}}," ","Inicio")),c.a.createElement("div",{className:"search"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t()}},c.a.createElement("input",{type:"text",placeholder:"Buscar",name:"search",onKeyPress:a,id:"searchbar"}))))},f=a(45),g=a(44),h=(a(37),a(20)),E=a.n(h),b=a(25),v=a.n(b),y=function(e){var t=e.photo,a=e.username,o=e.profileImage,r=e.description,l=e.imgDownload,i=e.altDescription,m=e.likes,u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],h=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"box"},c.a.createElement("img",{src:t,key:t,alt:"collection",className:"card-image",onClick:function(){return h(!0)},onKeyPress:function(){return h(!0)}})),c.a.createElement("div",{id:"modal-div"},c.a.createElement(f.a,{size:"lg",show:p,onHide:function(){return h(!1)}},c.a.createElement(f.a.Header,{closeButton:!0}),c.a.createElement(f.a.Body,{id:"pic-info",className:"modal-body"},c.a.createElement("div",{className:"body-img"},c.a.createElement(g.a,{src:t,fluid:!0,className:"container-img"})),c.a.createElement("div",{className:"body-info"},c.a.createElement("h2",{className:"title-photo"},i," "),c.a.createElement("p",null,r),c.a.createElement("p",{className:"modal-body"},c.a.createElement("img",{src:E.a,key:E.a,alt:"heart icon",className:"logo-heart"}),m,c.a.createElement("a",{href:l,title:"descargar imagen"},c.a.createElement("img",{alt:"descargar",src:v.a,className:"logo-dwn"}))),c.a.createElement("footer",{className:"footer"},"Subido por"," ",c.a.createElement(g.a,{src:o,fluid:!0,className:"profile_image"}),a))))))},N=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("aesthetic"),u=Object(s.a)(r,2),d=u[0],f=u[1],g=Object(n.useState)(1),h=Object(s.a)(g,2),E=h[0],b=h[1],v=Object(n.useState)(2),N=Object(s.a)(v,2),j=N[0],w=N[1],O=function(){return m(E,d).then((function(e){return o(e.results)}))};Object(n.useEffect)((function(){O()}),[]);return console.log(d),console.log(a),c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{setDataCollecion:o,search:O,getCategory:function(e){f(e.target.value)},setcategory:f,setPageNumber:b}),c.a.createElement("div",{className:"container-collection"},c.a.createElement(i.a,{dataLength:a.length,hasMore:!0,next:function(){return m(j,d).then((function(e){w(j+1),o((function(t){return Object(l.a)(new Set([].concat(Object(l.a)(t),Object(l.a)(e.results))))}))}))}}),a.map((function(e){return c.a.createElement(y,{key:e.id,photo:e.urls.small,username:e.user.username,profileImage:e.user.profile_image.small,description:e.description,imgDownload:e.links.download,altDescription:e.alt_description,likes:e.likes})}))),c.a.createElement("div",null))};a(40);var j=function(){return c.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.544ac799.chunk.js.map