(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__3Xodk",overlayVisible:"Drawer_overlayVisible__7J5ao",drawer:"Drawer_drawer__ZJrAH",items:"Drawer_items__QrHk-"}},20:function(e,t,c){e.exports={card:"Card_card__3Z0XM",plus:"Card_plus__k8jww",favorite:"Card_favorite__ZIR_Z"}},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(14),s=c(34),i=c.n(s),o=(c(41),c(42),c(11)),d=c(12),l=c(7),j=c.n(l),u=c(13),b=c(4),x=c(2),m=c(5),h=c.n(m),O=a.a.createContext({}),f=function(){var e=a.a.useContext(O),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},p=c(1);var v=function(e){var t=f().totalPrice;return Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(p.jsx)(n.b,{to:"",children:Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"Logotype"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsx)("li",{className:"mr-20 cu-p",children:Object(p.jsx)(n.b,{to:"favorites",children:Object(p.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"orders",children:Object(p.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},g=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(O).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb-20",width:"120px",src:c,alt:"Empty"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6",children:r}),Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=c(19),w=c.n(k),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=f(),o=i.cartItems,d=i.setCartItems,l=i.totalPrice,x=a.a.useState(null),m=Object(b.a)(x,2),O=m[0],v=m[1],k=a.a.useState(!1),C=Object(b.a)(k,2),y=C[0],I=C[1],_=a.a.useState(!1),S=Object(b.a)(_,2),A=S[0],T=S[1],F=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,h.a.post("https://60dec4a4abbdd9001722d024.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,v(c.id),I(!0),d([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,h.a.delete("/cart/"+a.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=23;break;case 21:e.prev=21,e.t0=e.catch(0);case 23:T(!1);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(w.a.overlay," ").concat(s?w.a.overlayVisible:""),children:Object(p.jsxs)("div",{className:w.a.drawer,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(p.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(p.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(p.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[l," \u0440\u0443\u0431. "]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[5*Math.round(l/100)," \u0440\u0443\u0431. "]})]})]}),Object(p.jsxs)("button",{disabled:A,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(g,{title:y?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:y?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:y?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},y=c(36),I=c(20),_=c.n(I);var S=function(e){var t=e.id,c=e.title,r=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,d=void 0!==o&&o,l=e.loading,j=void 0!==l&&l,u=a.a.useContext(O).isItemAdded,x=a.a.useState(d),m=Object(b.a)(x,2),h=m[0],f=m[1],v={id:t,parentId:t,title:c,imageUrl:r,price:n};return Object(p.jsx)("div",{className:_.a.card,children:j?Object(p.jsxs)(y.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(p.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[s&&Object(p.jsx)("div",{className:_.a.favorite,onClick:function(){s(v),f(!h)},children:Object(p.jsx)("img",{src:h?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(p.jsx)("img",{width:"100%",height:135,src:r,alt:"Sneakers"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(p.jsx)("img",{className:_.a.plus,onClick:function(){i(v)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var A=function(){var e=Object(r.useContext)(O),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),c=Object(b.a)(t,2),n=c[0],s=c[1],i=a.a.useState(!0),l=Object(b.a)(i,2),x=l[0],m=l[1];return Object(r.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://60dec4a4abbdd9001722d024.mockapi.io/orders");case 3:t=e.sent,c=t.data,s(c.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),m(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(x?Object(d.a)(Array(8)):n).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({loading:x},e),t)}))})]})};var T=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(p.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(p.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(p.jsx)("input",{onChange:a,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(d.a)(Array(8)):e).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var F=function(){var e=a.a.useContext(O),t=e.favorites,c=e.onAddToFavorite;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(p.jsx)(S,Object(o.a)({favorited:!0,onFavorite:c},e),t)}))})]})};var P=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([]),i=Object(b.a)(s,2),l=i[0],m=i[1],f=Object(r.useState)([]),g=Object(b.a)(f,2),k=g[0],w=g[1],N=Object(r.useState)(""),y=Object(b.a)(N,2),I=y[0],_=y[1],S=Object(r.useState)(!1),P=Object(b.a)(S,2),V=P[0],B=P[1],E=Object(r.useState)(!0),L=Object(b.a)(E,2),R=L[0],D=L[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,r,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://60dec4a4abbdd9001722d024.mockapi.io/cart"),h.a.get("https://60dec4a4abbdd9001722d024.mockapi.io/favorites"),h.a.get("https://60dec4a4abbdd9001722d024.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),r=c[0],a=c[1],s=c[2],D(!1),m(r.data),w(a.data),n(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ;("),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var J=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=l.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return m((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://60dec4a4abbdd9001722d024.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return m((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,h.a.post("https://60dec4a4abbdd9001722d024.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,m((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}h.a.delete("https://60dec4a4abbdd9001722d024.mockapi.io/favorites/".concat(t.id)),w((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,h.a.post("https://60dec4a4abbdd9001722d024.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,w((function(e){return[].concat(Object(d.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(O.Provider,{value:{items:c,cartItems:l,favorites:k,isItemAdded:function(e){return l.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,setCartOpened:B,setCartItems:m,onAddToCart:J},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(C,{items:l,onClose:function(){return B(!1)},onRemove:function(e){try{h.a.delete("https://60dec4a4abbdd9001722d024.mockapi.io/cart/".concat(e)),m((function(t){return t.filter((function(t){return t.id!==e}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:V}),Object(p.jsx)(v,{onClickCart:function(){return B(!0)}}),Object(p.jsx)(x.a,{path:"/",exact:!0,children:Object(p.jsx)(T,{items:c,cartItems:l,searchValue:I,setSearchValue:_,onChangeSearchInput:function(e){_(e.target.value)},onAddToFavorite:U,onAddToCart:J,isLoading:R})}),Object(p.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(p.jsx)(F,{})}),Object(p.jsx)(x.a,{path:"/orders",exact:!0,children:Object(p.jsx)(A,{})})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e1e21039.chunk.js.map