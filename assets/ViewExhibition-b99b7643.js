import{_ as y,g as l,f as r,c as d,h as _,i as k,j as x,n as T,u as v,R as C,a as t,t as o,k as h,w as b,F as I,b as L,d as B}from"./index-c66c4fb1.js";const w={props:{className:String,data:Object,isLike:Boolean,handler:Function}};function H(i,e,c,f,a,s){const m=l("HeartOutlineIcon"),u=l("HeartIcon");return r(),d("button",{class:T(c.className),onClick:e[0]||(e[0]=(...n)=>c.handler&&c.handler(...n))},[c.isLike===!1?(r(),_(m,{key:0})):k("",!0),c.isLike===!0?(r(),_(u,{key:1})):k("",!0),x(i.$slots,"content")],2)}const D=y(w,[["render",H]]);const N={data(){return{cartDataInstance:v(),isHeartClick:!1,data:{},tickType:{},price:"0"}},computed:{cartBtnName(){return this.cartBtnDisable?"已加入購物車":"加入購物車"},cartBtnDisable(){return!!this.cartDataInstance.cartData.find(e=>e.name===this.data.name&&e.tickType.tickType===this.data.tickType.tickType)}},async created(){this.data={name:"高雄駁二展覽｜人生紀念品",date:"2023/12/31 ~ 2024/01/01",type:"藝術",coverImage:"https://pier2.org/upload/others/files/NVT6218.jpg",introduce:"人生中有許多珍貴的回憶，這些回憶可能透過一些際遇留存下來。在斷捨離的潮流趨勢下，我們開始思考自己真正需要保留的東西是什麼。對於許多人來說，重要的紀念品不一定是價值昂貴的物品，而是那些充滿情感和回憶的物品。可能是在某個重要的日子收到的花，讓你想起了某些時刻；可能是和寵物陪伴，在人生裡的一段時光；可能是在樹下一起望著天空的那天下午；可能是在獲得獎項被肯定的時刻，也可能是依舊想念的家鄉味道，這些物品不僅讓你回憶起過去的美好時光，也能夠讓你更感受到那些經歷真實性和重要。重要的是，留下這些紀念品並不是要填滿你的家，而是讓你在未來的某一天拿起它們時，能夠感受到那份特別的情感和回憶。你人生中最重要的紀念品是什麼？「人生紀念品」展覽邀請各領域設計師重新詮釋自身或受訪者的人生故事，透過設計手法將故事濃縮淬煉成一件件紀念品，引領觀者從設計作品中品味各種人生故事的酸甜滋味，展覽也邀請知名設計師及文字工作者分享影響他們人生的重要紀念品，期待民眾從第三者角度閱讀他人故事的同時，也回想起一些人生值得紀念的片段，讓記憶中的故事因為展覽有新一層的體會及滋味。",tickGroup:[{tickType:"單展票",price:80},{tickType:"套票",price:150}],address:"高雄市駁二藝術中心",position:{lat:25.0338,lng:121.5645},tickType:{tickType:"單展票",price:80}}},components:{RouterLink:C,LikeButton:D},methods:{addCartItemHandler(){const i={name:this.data.name,date:this.data.date,coverImage:this.data.coverImage,tickType:this.data.tickType,price:this.data.tickType.price,quantity:1};this.cartDataInstance.addCartItem(i)},changeTickDate(i){const e=i.target.dataset.tickgroupindex;this.data.tickType=this.data.tickGroup[e]},handleLike(){this.isHeartClick=!this.isHeartClick,console.log("[Like btn]",this.isHeartClick,this.data,"feature: 等待開發Like FireBase 資料 及 新增 pinia store使用")}}},V={class:"view-exhibition"},j={class:"cover-banner mb-4"},F=["src"],G={class:"p-2 container mx-auto row flex-column flex-md-row mb-4"},R={class:"col col-md-8"},S={class:"border-bottom pb-2 mb-4 d-flex flex-wrap justify-content-between"},E={class:"d-flex flex-column"},O={class:"fs-4 fw-bold",datetime:"#"},q=t("p",null,"搜藏",-1),z={class:"mb-4"},A={class:"col col-md-4"},J=t("h2",{class:"text-center mb-2 border rounded-2 p-2"},"售票價格",-1),K={class:"border rounded-3 p-2 fs-5 shadow-sm mb-2"},M={class:"ticket-choose"},P=["id","value","data-tickgroupindex","checked"],Q=["for"],U=["data-name","disabled"];function W(i,e,c,f,a,s){const m=l("LikeButton"),u=l("RouterLink");return r(),d("main",V,[t("section",j,[t("img",{src:a.data.coverImage,alt:"exh-banner-cover"},null,8,F)]),t("section",G,[t("div",R,[t("div",S,[t("div",E,[t("h1",null,o(a.data.name),1),t("time",O,o(a.data.date),1)]),t("div",null,[h(m,{className:`btn d-flex p-2 gap-2 ${a.isHeartClick?"btn-primary":"btn-outline-primary"}`,data:a.data,isLike:a.isHeartClick,handler:s.handleLike},{content:b(()=>[q]),_:1},8,["className","data","isLike","handler"])])]),t("p",z,o(a.data.introduce),1)]),t("div",A,[t("div",null,[J,t("div",K,[t("ul",null,[(r(!0),d(I,null,L(a.data.tickGroup,(n,p)=>(r(),d("li",{key:p},[t("div",M,[t("input",{class:"d-none",type:"radio",name:"售票選擇",id:n.tickType,value:n.tickType,"data-tickgroupindex":p,checked:p===0,onClick:e[0]||(e[0]=(...g)=>s.changeTickDate&&s.changeTickDate(...g))},null,8,P),t("label",{class:"text-center w-100",for:n.tickType},[t("p",null,o(n.tickType)+" "+o(n.price),1)],8,Q)])]))),128))])]),t("button",{onClick:e[1]||(e[1]=(...n)=>s.addCartItemHandler&&s.addCartItemHandler(...n)),class:"btn btn-primary w-100 mb-2 addCartBtn",type:"button","data-name":a.data.name,disabled:s.cartBtnDisable},o(s.cartBtnName),9,U),h(u,{class:"btn btn-primary w-100 mb-2",to:"/payment"},{default:b(()=>[B("前往結賬")]),_:1})])])])])}const Y=y(N,[["render",W]]);export{Y as default};
