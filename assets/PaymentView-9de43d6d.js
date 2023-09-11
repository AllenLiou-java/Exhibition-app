import{_ as N,s as q,b as f,d as p,f as e,n as x,F as g,h as w,g as s,i as c,t as d,z as I,c as m,y as k,p as C,k as T}from"./index-8ab318cb.js";const j={data(){return{cartDataInstance:q(),page:1,form:{email:"",name:"",tel:"",address:"",cardNumber:"",cardName:"",cvc:""}}},created(){this.cartDataInstance.initCartData()},methods:{onSubmit(n){n.preventDefault(),alert(JSON.stringify(this.form))},pageHandler(n){switch(n){case"add":this.page+=1;break;case"del":if(this.page===1)return;this.page-=1;break}},quantityHandler(n){const{index:a,cal:_}=n.target.dataset;if(this.cartDataInstance.cartData[a].quantity===1&&_==="del")return;const v={...this.cartDataInstance.cartData[a],tickType:{...this.cartDataInstance.cartData[a].tickType},quantity:_==="add"?this.cartDataInstance.cartData[a].quantity+1:_==="del"?this.cartDataInstance.cartData[a].quantity-1:1};this.cartDataInstance.updateCartItem(v,a)}},computed:{total(){return this.cartDataInstance.cartData.length>1?this.cartDataInstance.cartData.reduce((n,a)=>n.price*n.quantity+a.price*a.quantity):this.cartDataInstance.cartData.length===1?this.cartDataInstance.cartData[0].price*this.cartDataInstance.cartData[0].quantity:0},nextBtnDisable(){return this.page===1}}},o=n=>(C("data-v-1eed7373"),n=n(),T(),n),H={class:"container mb-5"},S=I('<section class="my-5" data-v-1eed7373><ul class="d-flex justify-content-between p-4 border rounded-4 bg-gray shadow-sm" data-v-1eed7373><li class="border-black p-2 after-line" data-v-1eed7373><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-1eed7373> 1 </p><p class="text-center" data-v-1eed7373>建立訂單</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-1eed7373></li><li class="border-black p-2" data-v-1eed7373><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-1eed7373> 2 </p><p class="text-center" data-v-1eed7373>填寫訂購資料</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-1eed7373></li><li class="border-black p-2" data-v-1eed7373><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-1eed7373> 3 </p><p class="text-center" data-v-1eed7373>填寫付款資料</p></li><li class="flex-grow-1 border-bottom border-2 h-0 mt-4" data-v-1eed7373></li><li class="border-black p-2" data-v-1eed7373><p class="border border-black p-2 fw-bold box d-flex align-items-center justify-content-center mx-auto mb-2" data-v-1eed7373> 4 </p><p class="text-center" data-v-1eed7373>完成訂購</p></li></ul></section>',1),U={class:"row"},B={class:"border rounded-4 shadow-sm p-4 h-100 d-flex flex-column"},z=o(()=>e("h2",{class:"mb-4 fs-4"},"建立訂單",-1)),F={class:"d-flex flex-column gap-4"},L={class:"d-flex gap-4"},M=["src","alt"],P={class:"d-flex flex-column"},Y={class:"fw-medium"},E={class:"d-flex gap-3 align-items-center"},G=["data-index"],J=["data-index"],O={class:"fs-6 fw-bold"},A=o(()=>e("div",null,null,-1)),K={class:"flex-grow-1 d-flex"},Q={class:"border p-3 rounded-4 shadow-sm"},R=o(()=>e("h2",{class:"fs-4 mb-3 fw-medium"},"訂購資料",-1)),W={class:"mt-4 d-flex gap-4"},X=o(()=>e("button",{class:"btn btn-dark w-100",type:"submit"}," 下一步 ",-1)),Z={class:"border p-3 rounded-4 shadow-sm"},$=o(()=>e("h2",{class:"fs-4 mb-3 fw-medium"},"付款資料",-1)),ee={class:"mt-4 d-flex gap-4"},le=o(()=>e("button",{class:"btn btn-dark w-100",type:"submit"}," 下一步 ",-1)),ae={class:"border p-4 rounded-4"},te=o(()=>e("h2",{class:"fs-4 fw-medium mb-3"},"完成訂單",-1)),se=o(()=>e("h3",{class:"pb-2 mb-4 border-bottom"},"購買明細",-1)),oe={class:"d-flex flex-column gap-4 mb-4"},de={class:"d-flex gap-4 align-items-center"},ne=["src","alt"],re={class:"d-flex flex-column"},ce={class:"fw-medium"},ue={class:"fs-6 fw-bold ms-auto"},ie=o(()=>e("div",null,null,-1)),be=o(()=>e("h3",{class:"pb-2 mb-3 border-bottom"},"訂購資訊",-1)),fe={class:"d-flex flex-column gap-1"},pe={class:"mt-4 d-flex gap-4"},me=o(()=>e("button",{type:"button",class:"btn btn-dark w-100"}," 完成訂單 ",-1)),_e={class:"col-4 flex-grow-1"},xe={class:"border rounded-4 shadow-sm p-4 d-flex flex-column justify-content-between"},he=o(()=>e("h2",{class:"fs-4 mb-3"},"訂單摘要",-1)),ve={class:"d-flex flex-column gap-2 mb-4"},ye={class:"d-flex justify-content-between fs-6"},ge=o(()=>e("p",null,"小計",-1)),we=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"今日節省總金額"),e("p",null,"$ 0 NTD")],-1)),ke=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"運送"),e("p",null,"$ 0 NTD")],-1)),De=o(()=>e("li",{class:"d-flex justify-content-between fs-6"},[e("p",null,"稅款"),e("p",null,"$ 0 NTD")],-1)),Ve=o(()=>e("div",{class:"mb-4"},[e("label",{for:"cupon",class:"mb-2"}," 優惠碼(未開放) "),e("input",{id:"cupon",class:"w-100 border rounded-1 p-1",placeholder:"請輸入優惠碼",type:"text",disabled:"true"})],-1)),Ne={class:"d-flex justify-content-between align-items-center mb-4"},qe=o(()=>e("p",{class:"fs-5 fw-medium"},"總金額",-1)),Ie={class:"fs-5 fw-medium"};function Ce(n,a,_,v,t,r){const u=f("b-form-input"),D=f("b-form-invalid-feedback"),V=f("b-form-valid-feedback"),i=f("b-form-group"),y=f("b-form");return m(),p("div",H,[S,e("div",U,[e("section",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1 ${t.page===1?"d-block":"d-none"}`)},[e("div",B,[z,e("ul",F,[(m(!0),p(g,null,w(t.cartDataInstance.cartData,(l,b)=>(m(),p("li",{key:b},[e("div",L,[e("div",null,[e("img",{class:"img-box",src:l==null?void 0:l.image,alt:l==null?void 0:l.name},null,8,M)]),e("div",P,[e("p",Y,d(l==null?void 0:l.name),1),e("small",null,d(l==null?void 0:l.date),1),e("small",null,d(l==null?void 0:l.ticketType.ticketType),1),e("div",E,[e("button",{onClick:a[0]||(a[0]=(...h)=>r.quantityHandler&&r.quantityHandler(...h)),"data-index":b,"data-cal":"del",type:"button",class:"btn border-0 btn-dark"}," - ",8,G),e("p",null,d(l==null?void 0:l.quantity),1),e("button",{onClick:a[1]||(a[1]=(...h)=>r.quantityHandler&&r.quantityHandler(...h)),"data-index":b,"data-cal":"add",type:"button",class:"btn border-0 btn-dark"}," + ",8,J)]),e("p",O," NT$ "+d((l==null?void 0:l.price)*(l==null?void 0:l.quantity)),1)]),A])]))),128))]),e("div",K,[e("button",{onClick:a[2]||(a[2]=l=>r.pageHandler("add")),class:"btn btn-dark w-100 border mt-auto",type:"button"}," 下一步 ")])])],2),e("div",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1 ${t.page===2?"d-block":"d-none"}`)},[e("div",Q,[s(y,{class:"row",onSubmit:a[8]||(a[8]=l=>r.pageHandler("add"))},{default:c(()=>[R,s(i,{id:"name",class:"col-auto col-6 mb-2",label:"收件人","label-for":"name"},{default:c(()=>[s(u,{id:"username",modelValue:t.form.name,"onUpdate:modelValue":a[3]||(a[3]=l=>t.form.name=l),type:"name",placeholder:"請輸入收件人",required:""},null,8,["modelValue"]),s(D,{state:n.validationName},{default:c(()=>[k(" 請輸入收件人 ")]),_:1},8,["state"]),s(V,{state:n.validationName},{default:c(()=>[k(" Looks Good. ")]),_:1},8,["state"])]),_:1}),s(i,{class:"col-auto col-6",id:"tel",label:"電話","label-for":"tel"},{default:c(()=>[s(u,{id:"tel",modelValue:t.form.tel,"onUpdate:modelValue":a[4]||(a[4]=l=>t.form.tel=l),type:"tel",placeholder:"請輸入電話",required:""},null,8,["modelValue"])]),_:1}),s(i,{class:"col-12 mb-2",id:"address",label:"地址","label-for":"address"},{default:c(()=>[s(u,{id:"address",modelValue:t.form.address,"onUpdate:modelValue":a[5]||(a[5]=l=>t.form.address=l),type:"text",placeholder:"請輸入地址",required:""},null,8,["modelValue"])]),_:1}),s(i,{class:"col-12",id:"email",label:"信箱","label-for":"email"},{default:c(()=>[s(u,{id:"email",modelValue:t.form.email,"onUpdate:modelValue":a[6]||(a[6]=l=>t.form.email=l),type:"email",placeholder:"請輸入信箱",required:""},null,8,["modelValue"])]),_:1}),e("div",W,[e("button",{onClick:a[7]||(a[7]=l=>r.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),X])]),_:1})])],2),e("div",{class:x(`col-auto col-md-8 mb-4 mb-md-0  flex-grow-1  ${t.page===3?"d-block":"d-none"}`)},[e("div",Z,[s(y,{class:"row",onSubmit:a[14]||(a[14]=l=>r.pageHandler("add"))},{default:c(()=>[$,s(i,{id:"cardName",class:"col-12 mb-2",label:"持卡人姓名","label-for":"cardName"},{default:c(()=>[s(u,{id:"card",modelValue:t.form.cardName,"onUpdate:modelValue":a[9]||(a[9]=l=>t.form.cardName=l),type:"card",placeholder:"請輸入持卡人姓名",required:""},null,8,["modelValue"])]),_:1}),s(i,{id:"cardNumber",class:"col-12 mb-2",label:"信用卡","label-for":"cardNumber"},{default:c(()=>[s(u,{id:"cardNumber",modelValue:t.form.cardNumber,"onUpdate:modelValue":a[10]||(a[10]=l=>t.form.cardNumber=l),type:"text",placeholder:"xxxx-xxxx-xxxx-xxxx",required:""},null,8,["modelValue"])]),_:1}),s(i,{id:"cardDate",class:"col-auto col-md-6",label:"有效期限","label-for":"cardDate"},{default:c(()=>[s(u,{id:"cardDate",modelValue:t.form.cardDate,"onUpdate:modelValue":a[11]||(a[11]=l=>t.form.cardDate=l),type:"text",placeholder:"MM/YY",required:""},null,8,["modelValue"])]),_:1}),s(i,{id:"cvc",class:"col-auto col-md-2",label:"CVC","label-for":"cvc"},{default:c(()=>[s(u,{id:"cvc",modelValue:t.form.cvc,"onUpdate:modelValue":a[12]||(a[12]=l=>t.form.cvc=l),type:"cvc",placeholder:"xxx",required:""},null,8,["modelValue"])]),_:1}),e("div",ee,[e("button",{onClick:a[13]||(a[13]=l=>r.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),le])]),_:1})])],2),e("div",{class:x(`col-auto col-md-8 flex-grow-1 order-1 order-md-0 ${t.page===4?"d-block":"d-none"}`)},[e("div",ae,[te,se,e("ul",oe,[(m(!0),p(g,null,w(t.cartDataInstance.cartData,(l,b)=>(m(),p("li",{key:b},[e("div",de,[e("div",null,[e("img",{class:"img-box-2",src:l==null?void 0:l.image,alt:l==null?void 0:l.name},null,8,ne)]),e("div",re,[e("p",ce,d(l==null?void 0:l.name),1),e("small",null,d(l==null?void 0:l.date),1),e("small",null,d(l==null?void 0:l.ticketType.ticketType),1)]),e("p",null,"數量："+d(l==null?void 0:l.quantity),1),e("p",ue," NT$ "+d((l==null?void 0:l.price)*(l==null?void 0:l.quantity)),1),ie])]))),128))]),be,e("ul",fe,[e("li",null,"收件者： "+d(t.form.name),1),e("li",null,"信箱： "+d(t.form.email),1),e("li",null,"電話： "+d(t.form.tel),1),e("li",null,"地址： "+d(t.form.address),1),e("li",null," 信用卡："+d(t.form.cardNumber.split("").map((l,b)=>b<4?l:"*").join("")),1)]),e("div",pe,[e("button",{onClick:a[15]||(a[15]=l=>r.pageHandler("del")),class:"btn btn-dark w-100",type:"button"}," 上一步 "),me])])],2),e("section",_e,[e("div",xe,[he,e("ul",ve,[e("li",ye,[ge,e("p",null,"$ "+d(r.total)+" NTD",1)]),we,ke,De]),Ve,e("div",Ne,[qe,e("p",Ie,"NTD $ "+d(r.total),1)])])])])])}const je=N(j,[["render",Ce],["__scopeId","data-v-1eed7373"]]);export{je as default};
