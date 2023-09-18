"use strict";(self.webpackChunklease_wheels=self.webpackChunklease_wheels||[]).push([[496],{2267:function(e,s,n){n.d(s,{Z:function(){return f}});var c=n(9439),a=n(2791),r=n(9434),i=n(4164),t=n(3418),l=n(7609),d=n(3329),o=document.querySelector("#modal-root"),u=function(e){var s=e.onClose,n=e.children;(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(s(),document.body.style.overflow="visible")};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[s]);return document.body.style.overflow="hidden",(0,i.createPortal)((0,d.jsx)("div",{className:t.Z.overlay,onClick:function(e){e.currentTarget===e.target&&(s(),document.body.style.overflow="visible")},children:(0,d.jsxs)("div",{className:t.Z.modal,children:[(0,d.jsx)("div",{className:t.Z.closebtn,onClick:s,children:(0,d.jsx)("svg",{className:t.Z.icon,width:"18",height:"18",children:(0,d.jsx)("use",{className:"icon",href:l.Z+"#icon-close"})})}),n]})}),o)},h=n(6351),m=n(6129),x=function(e){var s=e.id,n=(0,r.I0)();(0,a.useEffect)((function(){n((0,m.lD)(s))}),[s,n]);var c=(0,r.v9)(h.kY),i=c.id,l=c.img,o=c.make,u=c.model,x=c.year,j=c.rentalPrice,f=c.address,p=c.type,Z=c.accessories,N=c.functionalities,v=c.fuelConsumption,C=c.engineSize,y=c.description,g=c.rentalConditions,b=c.mileage,w=f?f.split(","):[];w.shift();var k=g?g.split("\n"):[],D=b?Number(b).toLocaleString("en-US"):"";return(0,d.jsxs)("div",{className:t.Z.cardDetailsContainer,children:[(0,d.jsx)("div",{className:t.Z.cardPictureContainer,children:(0,d.jsx)("img",{className:t.Z.cardPicture,src:l,alt:o})}),(0,d.jsxs)("div",{className:t.Z.cardMetaWrapper,children:[(0,d.jsxs)("p",{className:t.Z.cardName,children:[o," ",(0,d.jsx)("span",{style:{color:"#3470FF"},children:u}),", ",x]}),f&&i&&x&&p&&(0,d.jsxs)("ul",{children:[w.map((function(e,s){return(0,d.jsx)("li",{className:t.Z.cardDescr,children:e},s)})),(0,d.jsx)("li",{className:t.Z.cardDescr,children:"Id: ".concat(i)}),(0,d.jsx)("li",{className:t.Z.cardDescr,children:"Year: ".concat(x)}),(0,d.jsx)("li",{className:"".concat(t.Z.cardDescr," ").concat(t.Z.cardCarType),children:"Type: ".concat(p.toLowerCase())})]}),v&&C&&(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:t.Z.cardDescr,children:"Fuel Consumption: ".concat(v)}),(0,d.jsx)("span",{className:t.Z.cardDescr,children:"Engine Size: ".concat(C)})]}),(0,d.jsx)("p",{className:t.Z.cardPromo,children:y}),(0,d.jsx)("p",{className:t.Z.cardAccesFunc,children:"Accessories and functionalities:"}),Z&&N&&(0,d.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,d.jsx)("ul",{children:Z.map((function(e){return(0,d.jsx)("li",{className:t.Z.cardDescr,children:e},e)}))}),(0,d.jsx)("ul",{children:N.map((function(e){return(0,d.jsx)("li",{className:t.Z.cardDescr,children:e},e)}))})]}),(0,d.jsx)("p",{className:t.Z.cardAccesFunc,children:"Rental Conditions:"}),D&&j&&(0,d.jsxs)("ul",{className:t.Z.cardConditionsContainer,children:[k.map((function(e,s){return(0,d.jsx)("li",{className:t.Z.cardConditions,children:e.startsWith("Minimum age")?(0,d.jsxs)(d.Fragment,{children:["Minimum age: ",(0,d.jsx)("span",{className:t.Z.cardConditionsAccent,children:e.split(":")[1]})]}):e},s)})),(0,d.jsxs)("li",{className:t.Z.cardConditions,children:["Mileage: ",(0,d.jsx)("span",{className:t.Z.cardConditionsAccent,children:D})]}),(0,d.jsxs)("li",{className:t.Z.cardConditions,children:["Price: ",(0,d.jsx)("span",{className:t.Z.cardConditionsAccent,children:j})]})]})]}),(0,d.jsx)("button",{type:"button",className:t.Z.rentalCarBtn,children:(0,d.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})})]})},j=n(8020),f=function(e){var s=e.car,n=s.id,i=s.img,o=s.make,m=s.model,f=s.year,p=s.rentalPrice,Z=s.address,N=s.rentalCompany,v=s.type,C=s.functionalities,y=(0,r.I0)(),g=(0,a.useState)(!1),b=(0,c.Z)(g,2),w=b[0],k=b[1],D=(0,r.v9)(h.$D);return(0,d.jsxs)("li",{className:t.Z.listCard,children:[(0,d.jsxs)("div",{className:t.Z.pictureContainer,children:[(0,d.jsx)("img",{className:t.Z.picture,src:i,alt:o}),(0,d.jsx)("button",{type:"button",className:t.Z.iconHeartBtn,"aria-label":"heart",onClick:function(){return function(e){D.some((function(s){return s.id===e.id}))?y((0,j.QJ)(e.id)):y((0,j.Jh)(e))}(s)},children:D.some((function(e){return e.id===s.id}))?(0,d.jsx)("svg",{width:"18",height:"18",fill:"#3470FF",stroke:"#3470FF",children:(0,d.jsx)("use",{href:l.Z+"#icon-heart"})}):(0,d.jsx)("svg",{width:"18",height:"18",fill:"transparent",stroke:"#fff",children:(0,d.jsx)("use",{href:l.Z+"#icon-heart"})})})]}),(0,d.jsxs)("div",{className:t.Z.cardHeaderPrice,children:[(0,d.jsxs)("p",{children:[o," ",(0,d.jsx)("span",{style:{color:"#3470FF"},children:function(e,s){return e.length+s.length>17?"".concat(s.slice(0,5),"..."):"".concat(s)}(o,m)}),", ",f]}),(0,d.jsx)("p",{children:p})]}),(0,d.jsx)("div",{className:t.Z.cardDesc,children:(0,d.jsxs)("p",{children:["".concat(function(e){var s=e.split(",").map((function(e){return e.trim()})).slice(-2),n=(0,c.Z)(s,2),a=n[0],r=n[1];return"".concat(a," | ").concat(r," |")}(Z)," ").concat(N," | ").concat(p.slice(1)>50?"Premium |":"Economy |"),(0,d.jsx)("span",{style:{textTransform:"capitalize"},children:" ".concat(v.toLowerCase()," |")})," ".concat(m," | ").concat(n," | ").concat(C[0])]})}),(0,d.jsx)("button",{type:"button",onClick:function(){k(!0)},className:t.Z.learnMoreBtn,children:"Learn more"}),w&&(0,d.jsx)(u,{onClose:function(){k(!1)},children:(0,d.jsx)(x,{id:n})})]})}},3496:function(e,s,n){n.r(s),n.d(s,{default:function(){return o}});var c=n(9434),a=n(1087),r=n(6351),i=n(3418),t=n(2267),l=n(3329),d=function(){var e=(0,c.v9)(r.$D);return(0,l.jsxs)("div",{className:i.Z.dashbordContainer,children:[(0,l.jsx)("div",{className:i.Z.dashbordBlank}),e.length>0?(0,l.jsx)("ul",{className:i.Z.dashbordList,children:e.map((function(e){return(0,l.jsx)(t.Z,{car:e},e.id)}))}):(0,l.jsx)("div",{className:i.Z.dashbordEmptyContainer,children:(0,l.jsxs)("div",{className:i.Z.dashbordEmptyOverlay,children:[(0,l.jsx)("div",{className:i.Z.dashbordEmptyNavigation,children:(0,l.jsx)("h1",{children:(0,l.jsx)(a.OL,{to:"/catalogue",children:"Cataloge"})})}),(0,l.jsx)("h3",{className:i.Z.dashbordNote,children:"Discover the handpicked gems from our catalogue \u2013 your next adventure awaits!"})]})})]})},o=function(){return(0,l.jsx)(d,{})}}}]);
//# sourceMappingURL=496.510d27c0.chunk.js.map