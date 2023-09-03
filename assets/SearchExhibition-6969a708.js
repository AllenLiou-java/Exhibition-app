import{o as f,r,e as h,c,a as e,n as s,F as m,b as x,t as d,d as g,f as u}from"./index-c66c4fb1.js";const w={class:s("d-flex ")},k=e("div",{class:"d-flex gap-2 align-items-center border-bottom pb-4 mb-4 px-3"},[e("input",{id:"date-valid",class:"",type:"checkbox",name:"checkbox"}),e("label",{for:"date-valid",class:"pb-1"},"顯示已結束展覽")],-1),D=e("p",{class:"fw-bold mb-2"},"類型",-1),S={class:"type-list rounded-3 border mb-1"},Q=e("li",{class:"border-bottom p-2"},[e("div",null,[e("input",{class:"me-2",id:"type-all",type:"radio",name:"type",value:"all",checked:"true"}),e("label",{for:"type-all"},"全部")])],-1),A=["id","value"],$=["for"],F={class:"d-flex px-1"},B={class:"w-75 flex-grow-1"},L={__name:"SearchExhibition",setup(C){f(async()=>{o.value.exhibitionList.length===0&&await o.value.getAllExhibitionData(),y(),console.log("[BeforeMount]",o.value.exhibitionList)});const o=r(h()),t=r({typeArr:[],typeQuantity:5}),b=r({dateValid:!1,type:"all",startDate:0,endDate:new Date().getTime()+90*24*60*60*100,minPrice:0,maxPrice:3e3,location:"all"}),y=()=>{t.value.typeArr=Array.from(new Set(o.value.exhibitionList.map(n=>n.type)))},l=r(!1),v=()=>{l.value=!l.value},p=n=>{switch(n){case"add":t.value.typeQuantity+=5;break;case"reset":t.value.typeQuantity=5;break}};return(n,i)=>(u(),c("div",w,[e("div",{class:s(`side border-end ${l.value?"w-20 ":"border-none"}`)},[e("div",{class:s(`m-4 ${l.value&&"d-none"}`)},[k,e("div",null,[D,e("ul",S,[Q,(u(!0),c(m,null,x(t.value.typeArr.slice(0,t.value.typeQuantity),(a,_)=>(u(),c("li",{class:"p-2 border-bottom",key:_},[e("div",null,[e("input",{class:"me-2",id:a,type:"radio",name:"type",value:a},null,8,A),e("label",{class:"",for:a},d(a),9,$)])]))),128))]),e("div",F,[e("button",{class:s(`border-0 bg-transparent fw-bold ${t.value.typeQuantity<6&&"d-none"}`),type:"button",onClick:i[0]||(i[0]=a=>p("reset"))}," 收回 ",2),e("button",{onClick:i[1]||(i[1]=a=>p("add")),class:s(`border-0 bg-transparent fw-bold ms-auto ${t.value.typeArr.length<5&&"d-none"}`),type:"button"}," 顯示更多 ",2)])])],2)],2),e("div",B,[e("button",{type:"button",onClick:v}," Filter "+d(l.value),1),g(" "+d(new Date(b.value.endDate))+" "+d(t.value.typeQuantity)+" ",1)])]))}};export{L as default};
