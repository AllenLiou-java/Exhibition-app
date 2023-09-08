import{u as F,a as G,v as L,e as V,r as u,x as w,o as N,d as _,f as e,n as R,t as o,F as $,h as j,y as q,c as p}from"./index-f88de99f.js";const z={class:"view-exhibition"},H={class:"cover-banner mb-4"},M=["src"],O={class:"p-2 container mx-auto row flex-column flex-md-row mb-4"},A={class:"col col-md-8"},J={class:"border-bottom pb-2 mb-4 d-flex flex-wrap justify-content-between"},K={class:"d-flex flex-column font-pathway"},P={class:"fs-2 fw-bold"},Q={class:"fs-4 fw-bold",datetime:"#"},U=e("span",null,"~",-1),W=e("div",null,null,-1),X={class:"mb-4"},Y={class:"col col-md-4"},Z=e("h2",{class:"text-center mb-2 border rounded-2 p-2"},"售票價格",-1),k={class:"border rounded-3 p-2 fs-5 shadow-sm mb-2"},ee={class:"ticket-choose"},ae=["id","value","data-tickgroupindex","checked","onClick"],se=["for"],te=["data-name","disabled"],re={__name:"ViewExhibition",setup(ne){var v,h;const C=F(),T=G(),d=L();V();const s=u(),l=u({...(h=(v=s.value)==null?void 0:v.tickGroup)==null?void 0:h[0]});u(!1);const m=w(()=>(console.log("[cart Data]",d.cartData),!!d.cartData.find(n=>{var r,c;return n.name===((r=s.value)==null?void 0:r.name)&&((c=n==null?void 0:n.ticketType)==null?void 0:c.ticketType)===l.value.ticketType}))),B=w(()=>m.value?"已加入購物車":"加入購物車"),E=async()=>{var n;const t=await q((n=C.params)==null?void 0:n.id);if(console.log(t),!t.data){T.push("/notFound");return}s.value=t.data,l.value=t.data.tickGroup[0]},I=t=>{l.value=t},S=()=>{var n;const t={name:s.value.name,startDate:s.value.startDate,endDate:s.value.endDate,image:s.value.image,ticketType:l.value,price:(n=l.value)==null?void 0:n.price,quantity:1};console.log("[buy]",t),d.addCartItem(t)};return N(async()=>{E()}),(t,n)=>{var r,c,b,f,y,x,g,D;return p(),_("main",z,[e("section",H,[e("img",{class:R(`${!((r=s.value)!=null&&r.image)&&"blinking"}`),src:(c=s.value)==null?void 0:c.image,alt:"exh-banner-cover"},null,10,M)]),e("section",O,[e("div",A,[e("div",J,[e("div",K,[e("h1",P,o((b=s.value)==null?void 0:b.name),1),e("time",Q,[e("span",null,o(new Date((f=s.value)==null?void 0:f.startDate).toLocaleDateString()),1),U,e("span",null,o(new Date((y=s.value)==null?void 0:y.endDate).toLocaleDateString()),1)])]),W]),e("p",X,o((x=s.value)==null?void 0:x.introduce),1)]),e("div",Y,[e("div",null,[Z,e("div",k,[e("ul",null,[(p(!0),_($,null,j((g=s.value)==null?void 0:g.tickGroup,(a,i)=>(p(),_("li",{key:i},[e("div",ee,[e("input",{class:"d-none",type:"radio",name:"售票選擇",id:a==null?void 0:a.ticketType,value:a==null?void 0:a.ticketType,"data-tickgroupindex":i,checked:i===0,onClick:oe=>I({ticketType:a==null?void 0:a.ticketType,price:a==null?void 0:a.price})},null,8,ae),e("label",{class:"text-center w-100",for:a==null?void 0:a.ticketType},[e("p",null,o(a==null?void 0:a.ticketType)+" "+o(a==null?void 0:a.price),1)],8,se)])]))),128))])]),e("button",{onClick:S,class:"btn btn-primary w-100 mb-2 addCartBtn",type:"button","data-name":(D=s.value)==null?void 0:D.name,disabled:m.value},o(B.value),9,te)])])])])}}};export{re as default};
