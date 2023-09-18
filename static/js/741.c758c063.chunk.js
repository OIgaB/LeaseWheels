"use strict";(self.webpackChunklease_wheels=self.webpackChunklease_wheels||[]).push([[741],{7741:function(e,n,c){c.r(n),c.d(n,{default:function(){return v}});var s=c(3433),a=c(9439),r=c(2791),t=c(9434),i=c(6351),l=c(6129),o=c(4164),d=c(3418),u=c(7609),h=c(184),m=document.querySelector("#modal-root"),x=function(e){var n=e.onClose,c=e.children;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&(n(),document.body.style.overflow="visible")};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]);return document.body.style.overflow="hidden",(0,o.createPortal)((0,h.jsx)("div",{className:d.Z.overlay,onClick:function(e){e.currentTarget===e.target&&(n(),document.body.style.overflow="visible")},children:(0,h.jsxs)("div",{className:d.Z.modal,children:[(0,h.jsx)("div",{className:d.Z.closebtn,onClick:n,children:(0,h.jsx)("svg",{className:d.Z.icon,width:"18",height:"18",children:(0,h.jsx)("use",{className:"icon",href:u.Z+"#icon-close"})})}),c]})}),m)},j=function(e){var n=e.id,c=(0,t.I0)();(0,r.useEffect)((function(){c((0,l.l)(n))}),[n,c]);var s=(0,t.v9)(i.k),a=s.id,o=s.img,u=s.make,m=s.model,x=s.year,j=s.rentalPrice,f=s.address,Z=s.type,p=s.accessories,N=s.functionalities,v=s.fuelConsumption,g=s.engineSize,b=s.description,y=s.rentalConditions,C=s.mileage,w=f?f.split(","):[];w.shift();var k=y?y.split("\n"):[],L=C?Number(C).toLocaleString("en-US"):"";return(0,h.jsxs)("div",{className:d.Z.cardDetailsContainer,children:[(0,h.jsx)("div",{className:d.Z.cardPictureContainer,children:(0,h.jsx)("img",{className:d.Z.cardPicture,src:o,alt:u})}),(0,h.jsxs)("p",{className:d.Z.cardName,children:[u," ",(0,h.jsx)("span",{style:{color:"#3470FF"},children:m}),", ",x]}),f&&a&&x&&Z&&(0,h.jsxs)("ul",{children:[w.map((function(e,n){return(0,h.jsx)("li",{className:d.Z.cardDescr,children:e},n)})),(0,h.jsx)("li",{className:d.Z.cardDescr,children:"Id: ".concat(a)}),(0,h.jsx)("li",{className:d.Z.cardDescr,children:"Year: ".concat(x)}),(0,h.jsx)("li",{className:"".concat(d.Z.cardDescr," ").concat(d.Z.cardCarType),children:"Type: ".concat(Z.toLowerCase())})]}),v&&g&&(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:d.Z.cardDescr,children:"Fuel Consumption: ".concat(v)}),(0,h.jsx)("span",{className:d.Z.cardDescr,children:"Engine Size: ".concat(g)})]}),(0,h.jsx)("p",{className:d.Z.cardPromo,children:b}),(0,h.jsx)("p",{className:d.Z.cardAccesFunc,children:"Accessories and functionalities:"}),p&&N&&(0,h.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,h.jsx)("ul",{children:p.map((function(e){return(0,h.jsx)("li",{className:d.Z.cardDescr,children:e},e)}))}),(0,h.jsx)("ul",{children:N.map((function(e){return(0,h.jsx)("li",{className:d.Z.cardDescr,children:e},e)}))})]}),(0,h.jsx)("p",{className:d.Z.cardAccesFunc,children:"Rental Conditions:"}),L&&j&&(0,h.jsxs)("ul",{className:d.Z.cardConditionsContainer,children:[k.map((function(e,n){return(0,h.jsx)("li",{className:d.Z.cardConditions,children:e.startsWith("Minimum age")?(0,h.jsxs)(h.Fragment,{children:["Minimum age: ",(0,h.jsx)("span",{className:d.Z.cardConditionsAccent,children:e.split(":")[1]})]}):e},n)})),(0,h.jsxs)("li",{className:d.Z.cardConditions,children:["Mileage: ",(0,h.jsx)("span",{className:d.Z.cardConditionsAccent,children:L})]}),(0,h.jsxs)("li",{className:d.Z.cardConditions,children:["Price: ",(0,h.jsx)("span",{className:d.Z.cardConditionsAccent,children:j})]})]}),(0,h.jsx)("button",{type:"button",className:d.Z.rentalCarBtn,children:(0,h.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})})]})},f=function(e){var n=e.car,c=n.id,s=n.img,t=n.make,i=n.model,l=n.year,o=n.rentalPrice,m=n.address,f=n.rentalCompany,Z=n.type,p=n.functionalities,N=(0,r.useState)(!1),v=(0,a.Z)(N,2),g=v[0],b=v[1];return(0,h.jsx)("div",{children:(0,h.jsxs)("li",{className:d.Z.listCard,children:[(0,h.jsxs)("div",{className:d.Z.pictureContainer,children:[(0,h.jsx)("img",{className:d.Z.picture,src:s,alt:t}),(0,h.jsx)("button",{type:"button",className:d.Z.iconHeartBtn,"aria-label":"heart",children:(0,h.jsx)("svg",{width:"18",height:"18",children:(0,h.jsx)("use",{href:u.Z+"#icon-heart"})})})]}),(0,h.jsxs)("div",{className:d.Z.cardHeaderPrice,children:[(0,h.jsxs)("p",{children:[t," ",(0,h.jsx)("span",{style:{color:"#3470FF"},children:function(e,n){return e.length+n.length>17?"".concat(n.slice(0,5),"..."):"".concat(n)}(t,i)}),", ",l]}),(0,h.jsx)("p",{children:o})]}),(0,h.jsx)("div",{className:d.Z.cardDesc,children:(0,h.jsxs)("p",{children:["".concat(function(e){var n=e.split(",").map((function(e){return e.trim()})).slice(-2),c=(0,a.Z)(n,2),s=c[0],r=c[1];return"".concat(s," | ").concat(r," |")}(m)," ").concat(f," | ").concat(o.slice(1)>50?"Premium |":"Economy |"),(0,h.jsx)("span",{style:{textTransform:"capitalize"},children:" ".concat(Z.toLowerCase()," |")})," ".concat(i," | ").concat(c," | ").concat(p[0])]})}),(0,h.jsx)("button",{type:"button",onClick:function(){b(!0)},className:d.Z.learnMoreBtn,children:"Learn more"}),g&&(0,h.jsx)(x,{onClose:function(){b(!1)},children:(0,h.jsx)(j,{id:c})})]},c)})},Z=c(965),p=c(1087),N=function(){var e=(0,r.useState)([]),n=(0,a.Z)(e,2),c=n[0],o=n[1],m=(0,r.useState)(1),x=(0,a.Z)(m,2),j=x[0],N=x[1],v=(0,t.v9)(i.W),g=v.items,b=v.isLoading,y=v.error,C=(0,t.I0)();return(0,r.useEffect)((function(){C((0,l.x)(j))}),[j,C]),(0,r.useEffect)((function(){g.length>0&&o((function(e){var n=g.filter((function(n){return!e.some((function(e){return e.id===n.id}))}));return[].concat((0,s.Z)(e),(0,s.Z)(n))}))}),[g]),1!==j&&setTimeout((function(){window.scrollBy({top:510,behavior:"smooth"})}),150),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{type:"button",className:"".concat(d.Z.sidebarIcon," ").concat(d.Z.sidebarIconLeftBtn),"aria-label":"arrow-left",children:["Home",(0,h.jsx)(p.OL,{to:"/",children:(0,h.jsx)("svg",{width:"45",height:"45",children:(0,h.jsx)("use",{href:u.Z+"#icon-arrow-left"})})})]}),(0,h.jsxs)("button",{type:"button",className:"".concat(d.Z.sidebarIcon," ").concat(d.Z.sidebarIconRightBtn),"aria-label":"arrow-left",children:[(0,h.jsx)(p.OL,{to:"/favorites",children:(0,h.jsx)("svg",{width:"45",height:"45",children:(0,h.jsx)("use",{href:u.Z+"#icon-arrow-right"})})}),"Favorite"]}),b&&(0,h.jsx)(Z.a,{}),y&&(0,h.jsx)("p",{children:"Sorry, data has not loaded."}),(0,h.jsxs)("div",{className:d.Z.dashbordContainer,children:[(0,h.jsx)("ul",{className:d.Z.dashbordList,children:c.length>0&&c.map((function(e){return(0,h.jsx)(f,{car:e},e.id)}))}),0!==c.length&&4!==j&&(0,h.jsx)("button",{type:"button",onClick:function(){return N((function(e){return e+1}))},className:d.Z.loadMoreBtn,children:"Load more"}),4===j&&(0,h.jsx)("p",{className:d.Z.collectionEnd,children:"You've reached the end of search results."})]})]})},v=function(){return(0,h.jsx)(N,{})}}}]);
//# sourceMappingURL=741.c758c063.chunk.js.map