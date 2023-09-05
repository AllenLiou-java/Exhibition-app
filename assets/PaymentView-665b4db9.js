import{_ as N,p as q,b,c as f,d as e,n as x,F as g,g as w,f as s,h as r,t as d,x as I,j as p,q as k,s as C,v as T}from"./index-17ba43ee.js";const j={data(){return{cartDataInstance:q(),page:1,form:{email:"",name:"",tel:"",address:"",cardNumber:"",cardName:"",cvc:""}}},created(){this.cartDataInstance.initCartData()},methods:{onSubmit(n){n.preventDefault(),alert(JSON.stringify(this.form))},pageHandler(n){switch(n){case"add":this.page+=1;break;case"del":if(this.page===1)return;this.page-=1;break}},quantityHandler(n){const{index:t,cal:_}=n.target.dataset;if(this.cartDataInstance.cartData[t].quantity===1&&_==="del")return;const v={...this.cartDataInstance.cartData[t],tickType:{...this.cartDataInstance.cartData[t].tickType},quantity:_==="add"?this.cartDataInstance.cartData[t].quantity+1:_==="del"?this.cartDataInstance.cartData[t].quantity-1:1};this.cartDataInstance.updateCartItem(v,t)}},computed:{total(){return this.cartDataInstance.cartData.length>1?this.cartDataInstance.cartData.reduce((n,t)=>n.price*n.quantity+t.price*t.quantity):this.cartDataInstance.cartData.length===1?this.cartDataInstance.cartData[0].price*this.cartDataInstance.cartData[0].quantity:0},nextBtnDisable(){return this.page===1}}},o=n=>(C("data-v-9ce510f6"),n=n(),T(),n),H={class:"container"},S=I('<section class="my-5" data-v-9ce510f6><ul class="d-flex justify-content-between p-4 border rounded-4 bg-gray shadow-sm" data-v-9ce510f6><li class="border-black p-2 after-line" data-v-9ce510f6><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-9ce510f6> 1 </p><p class="text-center" data-v-9ce510f6>建立訂單</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-9ce510f6></li><li class="border-black p-2" data-v-9ce510f6><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-9ce510f6> 2 </p><p class="text-center" data-v-9ce510f6>填寫訂購資料</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-9ce510f6></li><li class="border-black p-2" data-v-9ce510f6><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-9ce510f6> 3 </p><p class="text-center" data-v-9ce510f6>填寫付款資料</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-9ce510f6></li><li class="border-black p-2" data-v-9ce510f6><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-9ce510f6> 4 </p><p class="text-center" data-v-9ce510f6>完成訂購</p></li></ul></section>',1),U={class:"row"},B={class:"border rounded-4 shadow-sm p-4 h-100"},F=o(()=>e("h2",{class:"mb-4 fs-4"},"建立訂單",-1)),L={class:"d-flex flex-column gap-4"},M={class:"d-flex gap-4"},P=["src","alt"],Y={class:"d-flex flex-column"},z={class:"fw-medium"},E={class:"d-flex gap-3 align-items-center"},G=["data-index"],J=["data-index"],O={class:"fs-6 fw-bold"},A=o(()=>e("div",null,null,-1)),K={class:"mt-4"},Q={class:"border p-3 rounded-4 shadow-sm"},R=o(()=>e("h2",{class:"fs-4 mb-3 fw-medium"},"訂購資料",-1)),W={class:"mt-4 d-flex gap-4"},X=o(()=>e("button",{class:"btn btn-dark w-100",type:"submit"}," 下一步 ",-1)),Z={class:"border p-3 rounded-4 shadow-sm"},$=o(()=>e("h2",{class:"fs-4 mb-3 fw-medium"},"付款資料",-1)),ee={class:"mt-4 d-flex gap-4"},te=o(()=>e("button",{class:"btn btn-dark w-100",type:"submit"}," 下一步 ",-1)),le={class:"border p-4 rounded-4"},ae=o(()=>e("h2",{class:"fs-4 fw-medium mb-3"},"完成訂單",-1)),se=o(()=>e("h3",{class:"pb-2 mb-4 border-bottom"},"購買明細",-1)),oe={class:"d-flex flex-column gap-4 mb-4"},de={class:"d-flex gap-4 align-items-center"},ne=["src","alt"],ce={class:"d-flex flex-column"},re={class:"fw-medium"},ie={class:"fs-6 fw-bold ms-auto"},ue=o(()=>e("div",null,null,-1)),me=o(()=>e("h3",{class:"pb-2 mb-3 border-bottom"},"訂購資訊",-1)),be={class:"d-flex flex-column gap-1"},fe={class:"mt-4 d-flex gap-4"},pe=o(()=>e("button",{type:"button",class:"btn btn-dark w-100"}," 完成訂單 ",-1)),_e={class:"col-4 flex-grow-1"},xe={class:"border rounded-4 shadow-sm p-4 d-flex flex-column justify-content-between"},he=o(()=>e("h2",{class:"fs-4 mb-3"},"訂單摘要",-1)),ve={class:"d-flex flex-column gap-2 mb-4"},ye={class:"d-flex justify-content-between fs-6"},ge=o(()=>e("p",null,"小計",-1)),we=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"今日節省總金額"),e("p",null,"$ 0 NTD")],-1)),ke=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"運送"),e("p",null,"$ 0 NTD")],-1)),De=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"稅款"),e("p",null,"$ 0 NTD")],-1)),Ve=o(()=>e("div",{class:"mb-4"},[e("label",{for:"cupon",class:"mb-2"}," 優惠碼(未開放) "),e("input",{id:"cupon",class:"w-100 border rounded-1 p-1",placeholder:"請輸入優惠碼",type:"text",disabled:"true"})],-1)),Ne={class:"d-flex justify-content-between align-items-center mb-4"},qe=o(()=>e("p",{class:"fs-5 fw-medium"},"總金額",-1)),Ie={class:"fs-5 fw-medium"};function Ce(n,t,_,v,a,c){const i=b("b-form-input"),D=b("b-form-invalid-feedback"),V=b("b-form-valid-feedback"),u=b("b-form-group"),y=b("b-form");return p(),f("div",H,[S,e("div",U,[e("section",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1 ${a.page===1?"d-block":"d-none"}`)},[e("div",B,[F,e("ul",L,[(p(!0),f(g,null,w(a.cartDataInstance.cartData,(l,m)=>(p(),f("li",{key:m},[e("div",M,[e("div",null,[e("img",{class:"img-box",src:l.coverImage,alt:l.name},null,8,P)]),e("div",Y,[e("p",z,d(l.name),1),e("small",null,d(l.date),1),e("small",null,d(l.tickType.tickType),1),e("div",E,[e("button",{onClick:t[0]||(t[0]=(...h)=>c.quantityHandler&&c.quantityHandler(...h)),"data-index":m,"data-cal":"del",type:"button",class:"btn border-0 btn-dark"}," - ",8,G),e("p",null,d(l.quantity),1),e("button",{onClick:t[1]||(t[1]=(...h)=>c.quantityHandler&&c.quantityHandler(...h)),"data-index":m,"data-cal":"add",type:"button",class:"btn border-0 btn-dark"}," + ",8,J)]),e("p",O,"NT$ "+d(l.price*l.quantity),1)]),A])]))),128))]),e("div",K,[e("button",{onClick:t[2]||(t[2]=l=>c.pageHandler("add")),class:"btn btn-dark w-100",type:"button"}," 下一步 ")])])],2),e("div",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1 ${a.page===2?"d-block":"d-none"}`)},[e("div",Q,[s(y,{class:"row",onSubmit:t[8]||(t[8]=l=>c.pageHandler("add"))},{default:r(()=>[R,s(u,{id:"name",class:"col-auto col-6 mb-2",label:"收件人","label-for":"name"},{default:r(()=>[s(i,{id:"username",modelValue:a.form.name,"onUpdate:modelValue":t[3]||(t[3]=l=>a.form.name=l),type:"name",placeholder:"請輸入收件人",required:""},null,8,["modelValue"]),s(D,{state:n.validationName},{default:r(()=>[k(" 請輸入收件人 ")]),_:1},8,["state"]),s(V,{state:n.validationName},{default:r(()=>[k(" Looks Good. ")]),_:1},8,["state"])]),_:1}),s(u,{class:"col-auto col-6",id:"tel",label:"電話","label-for":"tel"},{default:r(()=>[s(i,{id:"tel",modelValue:a.form.tel,"onUpdate:modelValue":t[4]||(t[4]=l=>a.form.tel=l),type:"tel",placeholder:"請輸入電話",required:""},null,8,["modelValue"])]),_:1}),s(u,{class:"col-12 mb-2",id:"address",label:"地址","label-for":"address"},{default:r(()=>[s(i,{id:"address",modelValue:a.form.address,"onUpdate:modelValue":t[5]||(t[5]=l=>a.form.address=l),type:"text",placeholder:"請輸入地址",required:""},null,8,["modelValue"])]),_:1}),s(u,{class:"col-12",id:"email",label:"信箱","label-for":"email"},{default:r(()=>[s(i,{id:"email",modelValue:a.form.email,"onUpdate:modelValue":t[6]||(t[6]=l=>a.form.email=l),type:"email",placeholder:"請輸入信箱",required:""},null,8,["modelValue"])]),_:1}),e("div",W,[e("button",{onClick:t[7]||(t[7]=l=>c.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),X])]),_:1})])],2),e("div",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1  ${a.page===3?"d-block":"d-none"}`)},[e("div",Z,[s(y,{class:"row",onSubmit:t[14]||(t[14]=l=>c.pageHandler("add"))},{default:r(()=>[$,s(u,{id:"cardName",class:"col-12 mb-2",label:"持卡人姓名","label-for":"cardName"},{default:r(()=>[s(i,{id:"card",modelValue:a.form.cardName,"onUpdate:modelValue":t[9]||(t[9]=l=>a.form.cardName=l),type:"card",placeholder:"請輸入持卡人姓名",required:""},null,8,["modelValue"])]),_:1}),s(u,{id:"cardNumber",class:"col-12 mb-2",label:"信用卡","label-for":"cardNumber"},{default:r(()=>[s(i,{id:"cardNumber",modelValue:a.form.cardNumber,"onUpdate:modelValue":t[10]||(t[10]=l=>a.form.cardNumber=l),type:"text",placeholder:"xxxx-xxxx-xxxx-xxxx",required:""},null,8,["modelValue"])]),_:1}),s(u,{id:"cardDate",class:"col-auto col-md-6",label:"有效期限","label-for":"cardDate"},{default:r(()=>[s(i,{id:"cardDate",modelValue:a.form.cardDate,"onUpdate:modelValue":t[11]||(t[11]=l=>a.form.cardDate=l),type:"text",placeholder:"MM/YY",required:""},null,8,["modelValue"])]),_:1}),s(u,{id:"cvc",class:"col-auto col-md-2",label:"CVC","label-for":"cvc"},{default:r(()=>[s(i,{id:"cvc",modelValue:a.form.cvc,"onUpdate:modelValue":t[12]||(t[12]=l=>a.form.cvc=l),type:"cvc",placeholder:"xxx",required:""},null,8,["modelValue"])]),_:1}),e("div",ee,[e("button",{onClick:t[13]||(t[13]=l=>c.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),te])]),_:1})])],2),e("div",{class:x(`col-auto col-md-8 flex-grow-1 order-1 order-md-0 ${a.page===4?"d-block":"d-none"}`)},[e("div",le,[ae,se,e("ul",oe,[(p(!0),f(g,null,w(a.cartDataInstance.cartData,(l,m)=>(p(),f("li",{key:m},[e("div",de,[e("div",null,[e("img",{class:"img-box-2",src:l.coverImage,alt:l.name},null,8,ne)]),e("div",ce,[e("p",re,d(l.name),1),e("small",null,d(l.date),1),e("small",null,d(l.tickType.tickType),1)]),e("p",null,"數量："+d(l.quantity),1),e("p",ie," NT$ "+d(l.price*l.quantity),1),ue])]))),128))]),me,e("ul",be,[e("li",null,"收件者： "+d(a.form.name),1),e("li",null,"信箱： "+d(a.form.email),1),e("li",null,"電話： "+d(a.form.tel),1),e("li",null,"地址： "+d(a.form.address),1),e("li",null," 信用卡："+d(a.form.cardNumber.split("").map((l,m)=>m<4?l:"*").join("")),1)]),e("div",fe,[e("button",{onClick:t[15]||(t[15]=l=>c.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),pe])])],2),e("section",_e,[e("div",xe,[he,e("ul",ve,[e("li",ye,[ge,e("p",null,"$ "+d(c.total)+" NTD",1)]),we,ke,De]),Ve,e("div",Ne,[qe,e("p",Ie,"NTD $ "+d(c.total),1)])])])])])}const je=N(j,[["render",Ce],["__scopeId","data-v-9ce510f6"]]);export{je as default};
