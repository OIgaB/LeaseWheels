"use strict";(self.webpackChunklease_wheels=self.webpackChunklease_wheels||[]).push([[999],{2267:function(e,n,c){c.d(n,{Z:function(){return j}});var s=c(9439),r=c(2791),a=c(9434),i=c(89),t=c(4164),l=c(3418),o=c(7609),d=c(3329),u=document.querySelector("#modal-root"),h=function(e){var n=e.onClose,c=e.children;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&(n(),document.body.style.overflow="visible")};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]);return document.body.style.overflow="hidden",(0,t.createPortal)((0,d.jsx)("div",{className:l.Z.overlay,onClick:function(e){e.currentTarget===e.target&&(n(),document.body.style.overflow="visible")},children:(0,d.jsxs)("div",{className:l.Z.modal,children:[(0,d.jsx)("div",{className:l.Z.closebtn,onClick:n,children:(0,d.jsx)("svg",{className:l.Z.icon,width:"18",height:"18",children:(0,d.jsx)("use",{className:"icon",href:o.Z+"#icon-close"})})}),c]})}),u)},m=c(6129),f=function(e){var n=e.id,c=(0,a.I0)(),s=(0,i.n)().carById;(0,r.useEffect)((function(){c((0,m.lD)(n))}),[n,c]);var t=s.id,o=s.img,u=s.make,h=s.model,f=s.year,x=s.rentalPrice,j=s.address,p=s.type,Z=s.accessories,v=s.functionalities,N=s.fuelConsumption,g=s.engineSize,C=s.description,y=s.rentalConditions,b=s.mileage,w=j?j.split(","):[];w.shift();var k=y?y.split("\n"):[],F=b?Number(b).toLocaleString("en-US"):"";return(0,d.jsxs)("div",{className:l.Z.cardDetailsContainer,children:[(0,d.jsx)("div",{className:l.Z.cardPictureContainer,children:(0,d.jsx)("img",{className:l.Z.cardPicture,src:o,alt:u})}),(0,d.jsxs)("div",{className:l.Z.cardMetaWrapper,children:[(0,d.jsxs)("p",{className:l.Z.cardName,children:[u," ",(0,d.jsx)("span",{style:{color:"#3470FF"},children:h}),", ",f]}),j&&t&&f&&p&&(0,d.jsxs)("ul",{children:[w.map((function(e,n){return(0,d.jsx)("li",{className:l.Z.cardDescr,children:e},n)})),(0,d.jsx)("li",{className:l.Z.cardDescr,children:"Id: ".concat(t)}),(0,d.jsx)("li",{className:l.Z.cardDescr,children:"Year: ".concat(f)}),(0,d.jsx)("li",{className:"".concat(l.Z.cardDescr," ").concat(l.Z.cardCarType),children:"Type: ".concat(p.toLowerCase())})]}),N&&g&&(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:l.Z.cardDescr,children:"Fuel Consumption: ".concat(N)}),(0,d.jsx)("span",{className:l.Z.cardDescr,children:"Engine Size: ".concat(g)})]}),(0,d.jsx)("p",{className:l.Z.cardPromo,children:C}),(0,d.jsx)("p",{className:l.Z.cardAccesFunc,children:"Accessories and functionalities:"}),Z&&v&&(0,d.jsxs)("div",{style:{marginBottom:"24px"},children:[(0,d.jsx)("ul",{children:Z.map((function(e){return(0,d.jsx)("li",{className:l.Z.cardDescr,children:e},e)}))}),(0,d.jsx)("ul",{children:v.map((function(e){return(0,d.jsx)("li",{className:l.Z.cardDescr,children:e},e)}))})]}),(0,d.jsx)("p",{className:l.Z.cardAccesFunc,children:"Rental Conditions:"}),F&&x&&(0,d.jsxs)("ul",{className:l.Z.cardConditionsContainer,children:[k.map((function(e,n){return(0,d.jsx)("li",{className:l.Z.cardConditions,children:e.startsWith("Minimum age")?(0,d.jsxs)(d.Fragment,{children:["Minimum age: ",(0,d.jsx)("span",{className:l.Z.cardConditionsAccent,children:e.split(":")[1]})]}):e},n)})),(0,d.jsxs)("li",{className:l.Z.cardConditions,children:["Mileage: ",(0,d.jsx)("span",{className:l.Z.cardConditionsAccent,children:F})]}),(0,d.jsxs)("li",{className:l.Z.cardConditions,children:["Price: ",(0,d.jsx)("span",{className:l.Z.cardConditionsAccent,children:x})]})]})]}),(0,d.jsx)("button",{type:"button",className:l.Z.rentalCarBtn,children:(0,d.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})})]})},x=c(8020),j=function(e){var n=e.car,c=n.id,t=n.img,u=n.make,m=n.model,j=n.year,p=n.rentalPrice,Z=n.address,v=n.rentalCompany,N=n.type,g=n.functionalities,C=(0,a.I0)(),y=(0,r.useState)(!1),b=(0,s.Z)(y,2),w=b[0],k=b[1],F=(0,i.n)().favoriteCars;return(0,d.jsxs)("li",{className:l.Z.listCard,children:[(0,d.jsxs)("div",{className:l.Z.pictureContainer,children:[(0,d.jsx)("img",{className:l.Z.picture,src:t,alt:u}),(0,d.jsx)("button",{type:"button",className:l.Z.iconHeartBtn,"aria-label":"heart",onClick:function(){return function(e){F.some((function(n){return n.id===e.id}))?C((0,x.QJ)(e.id)):C((0,x.Jh)(e))}(n)},children:F.some((function(e){return e.id===n.id}))?(0,d.jsx)("svg",{width:"18",height:"18",fill:"#3470FF",stroke:"#3470FF",children:(0,d.jsx)("use",{href:o.Z+"#icon-heart"})}):(0,d.jsx)("svg",{width:"18",height:"18",fill:"transparent",stroke:"#fff",children:(0,d.jsx)("use",{href:o.Z+"#icon-heart"})})})]}),(0,d.jsxs)("div",{className:l.Z.cardHeaderPrice,children:[(0,d.jsxs)("p",{children:[u," ",(0,d.jsx)("span",{style:{color:"#3470FF"},children:function(e,n){return e.length+n.length>17?"".concat(n.slice(0,5),"..."):"".concat(n)}(u,m)}),", ",j]}),(0,d.jsx)("p",{children:p})]}),(0,d.jsx)("div",{className:l.Z.cardDesc,children:(0,d.jsxs)("p",{children:["".concat(function(e){var n=e.split(",").map((function(e){return e.trim()})).slice(-2),c=(0,s.Z)(n,2),r=c[0],a=c[1];return"".concat(r," | ").concat(a," |")}(Z)," ").concat(v," | ").concat(p.slice(1)>50?"Premium |":"Economy |"),(0,d.jsx)("span",{style:{textTransform:"capitalize"},children:" ".concat(N.toLowerCase()," |")})," ".concat(m," | ").concat(c," | ").concat(g[0])]})}),(0,d.jsx)("button",{type:"button",onClick:function(){k(!0)},className:l.Z.learnMoreBtn,children:"Learn more"}),w&&(0,d.jsx)(h,{onClose:function(){k(!1)},children:(0,d.jsx)(f,{id:c})})]})}},6999:function(e,n,c){c.r(n),c.d(n,{default:function(){return x}});var s=c(7762),r=c(3433),a=c(9439),i=c(2791),t=c(9434),l=c(6129),o=c(89),d=c(2267),u=c(965),h=c(3418),m=c(3329),f=function(){var e=(0,t.I0)(),n=(0,o.n)(),c=n.allCars,f=n.carsForPage,x=n.isLoading,j=n.error,p=n.brand,Z=n.price,v=n.mileageFrom,N=n.mileageTo,g=(0,i.useState)([]),C=(0,a.Z)(g,2),y=C[0],b=C[1],w=(0,i.useState)(1),k=(0,a.Z)(w,2),F=k[0],D=k[1];(0,i.useEffect)((function(){e((0,l.RZ)(F))}),[F,e]),(0,i.useEffect)((function(){f.length>0&&b((function(e){var n,c=(0,r.Z)(e),a=(0,s.Z)(f);try{var i=function(){var e=n.value;-1===c.findIndex((function(n){return n.id===e.id}))&&c.push(e)};for(a.s();!(n=a.n()).done;)i()}catch(t){a.e(t)}finally{a.f()}return c}))}),[f]),(0,i.useEffect)((function(){b([])}),[c]),1!==F&&setTimeout((function(){window.scrollBy({top:510,behavior:"smooth"})}),150);var E=c.filter((function(e){return(!p||e.make===p)&&(!(Z&&e.rentalPrice.slice(1)>Z)&&(!(v&&e.mileage<v)&&!(N&&e.mileage>N)))}));return(0,m.jsxs)(m.Fragment,{children:[x&&!j&&(0,m.jsx)(u.a,{}),(0,m.jsxs)("div",{className:h.Z.dashbordContainer,children:[(0,m.jsx)("ul",{className:h.Z.dashbordList,children:E.length>0?E.map((function(e){return(0,m.jsx)(d.Z,{car:e},e.id)})):y.length>0&&y.map((function(e){return(0,m.jsx)(d.Z,{car:e},e.id)}))}),0===E.length&&y.length>0&&4!==F&&(0,m.jsx)("button",{type:"button",onClick:function(){return D((function(e){return e+1}))},className:h.Z.loadMoreBtn,children:"Load more"}),0===E.length&&4===F&&(0,m.jsx)("p",{className:h.Z.collectionEnd,children:"You've reached the end of search results."})]})]})},x=function(){return(0,m.jsx)(f,{})}}}]);
//# sourceMappingURL=999.5da17d61.chunk.js.map