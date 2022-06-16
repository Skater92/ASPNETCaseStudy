"use strict";(self["webpackChunkcasestudyquasar"]=self["webpackChunkcasestudyquasar"]||[]).push([[666],{5572:(e,t,a)=>{a.d(t,{C:()=>l,_:()=>s});const r="https://localhost:7029/api/",s=async e=>{let t,a=o();try{let s=await fetch(`${r}${e}`,{method:"GET",headers:a});t=await s.json()}catch(s){console.log(s),t={error:`Error has occured: ${s.message}`}}return t},l=async(e,t)=>{let a,s=o();try{let l=await fetch(`${r}${e}`,{method:"POST",headers:s,body:JSON.stringify(t)});a=await l.json()}catch(l){a=l}return a},o=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("user"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},1666:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var r=a(9835),s=a(6970);const l={class:"text-center"},o=(0,r._)("div",{class:"text-h5 q-mt-md"},"Order History",-1),d={class:"text-positive text-h6 q-mt-lg q-mb-lg"},c=(0,r.Uk)("Order #"),n=(0,r.Uk)("OrderDate"),u={class:"text-h5 text-center"},i=["src"],m=(0,r.Uk)("Name"),w=(0,r.Uk)("Quantities"),f=(0,r.Uk)("Extended"),g=(0,r.Uk)(" S "),p=(0,r.Uk)(" O "),x=(0,r.Uk)(" B "),_=(0,r._)("div",{style:{"font-weight":"bold","font-size":"larger"}},"SubTotal:",-1),y={class:"q-mx-xl"},q=(0,r._)("div",{style:{"font-weight":"bold","font-size":"larger"}},"HST(13%):",-1),h={class:"q-mx-xl"},W=(0,r._)("div",{style:{"font-weight":"bold","font-size":"larger"}},"Total:",-1),S={class:"q-mx-xl"};function k(e,t,a,k,v,D){const b=(0,r.up)("q-item-label"),O=(0,r.up)("q-item-section"),U=(0,r.up)("q-item"),z=(0,r.up)("q-list"),C=(0,r.up)("q-card"),Q=(0,r.up)("q-btn"),Z=(0,r.up)("q-card-actions"),j=(0,r.up)("q-card-section"),$=(0,r.up)("q-avatar"),I=(0,r.up)("q-dialog"),B=(0,r.Q2)("ripple"),A=(0,r.Q2)("close-popup");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",l,[o,(0,r._)("div",d,(0,s.zw)(k.state.status),1)]),(0,r.Wm)(C,{class:"q-ma-sm"},{default:(0,r.w5)((()=>[(0,r.Wm)(z,{highlight:"",bordered:"",separator:""},{default:(0,r.w5)((()=>[(0,r.Wm)(U,null,{default:(0,r.w5)((()=>[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"q-mx-lg"},{default:(0,r.w5)((()=>[c])),_:1})])),_:1}),(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[n])),_:1})])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(k.state.orders,(t=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(U,{clickable:"",active:e.active,color:"primary",key:t.id,onClick:e=>k.selectOrder(t.id)},{default:(0,r.w5)((()=>[(0,r.Wm)(O,{class:"text-weight-bold q-mx-lg"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(t.id),1)])),_:2},1024),(0,r.Wm)(O,{class:"text-weight-bold q-mx-xl"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(k.formatDate(t.orderdate)),1)])),_:2},1024)])),_:2},1032,["active","onClick"])),[[B]]))),128))])),_:1})])),_:1}),(0,r.Wm)(I,{modelValue:k.state.selectedAnOrder,"onUpdate:modelValue":t[0]||(t[0]=e=>k.state.selectedAnOrder=e),"transition-show":"scale","transition-hide":"scale"},{default:(0,r.w5)((()=>[(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r.Wm)(Z,{align:"right"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r.Wm)(Q,{flat:"",icon:"close",color:"negative",class:"text-h5"},null,512),[[A]])])),_:1}),(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r._)("div",u," Order: #"+(0,s.zw)(k.state.orderDetails[0].cartID),1)])),_:1}),(0,r.Wm)(j,{class:"row justify-center text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)($,{square:"",size:"150px"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:"img/BoneHeadAudio.png"},null,8,i)])),_:1})])),_:1}),(0,r.Wm)(j,{class:"q-mb-none"},{default:(0,r.w5)((()=>[(0,r.Wm)(j,{class:"row text-center text-weight-bold text-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"q-mx-lg"},{default:(0,r.w5)((()=>[m])),_:1})])),_:1}),(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"q-mx-lg"},{default:(0,r.w5)((()=>[w])),_:1})])),_:1}),(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"q-mx-lg"},{default:(0,r.w5)((()=>[f])),_:1})])),_:1})])),_:1}),(0,r.Wm)(j,{class:"q-mt-none"},{default:(0,r.w5)((()=>[(0,r.Wm)(j,{class:"row justify-center text-weight-bold text-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[g])),_:1}),(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[p])),_:1}),(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[x])),_:1})])),_:1})])),_:1}),(0,r.Wm)(z,{bordered:"",separator:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(k.state.orderDetails,(e=>((0,r.wg)(),(0,r.j4)(U,{key:e.cartID},{default:(0,r.w5)((()=>[(0,r.Wm)(O,{class:"text-left col-4 text-weight-bold"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.prodName),1)])),_:2},1024),(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.qtySo),1)])),_:2},1024),(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.qtyOr),1)])),_:2},1024),(0,r.Wm)(O,{class:"text-center col-1"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.qtyBa),1)])),_:2},1024),(0,r.Wm)(O,{class:"text-center col-3"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(k.formatCurrency(e.ext)),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(j,{class:"row justify-end"},{default:(0,r.w5)((()=>[_,(0,r._)("div",y,(0,s.zw)(k.formatCurrency(k.state.orderDetails.reduce(((e,t)=>e+t.ext*t.qtySo+t.ext*t.qtyBa),0))),1)])),_:1}),(0,r.Wm)(j,{class:"row justify-end"},{default:(0,r.w5)((()=>[q,(0,r._)("div",h,(0,s.zw)(k.formatCurrency(k.state.orderDetails.reduce(((e,t)=>e+.13*(t.ext*t.qtySo+t.ext*t.qtyBa)),0))),1)])),_:1}),(0,r.Wm)(j,{class:"row justify-end"},{default:(0,r.w5)((()=>[W,(0,r._)("div",S,(0,s.zw)(k.formatCurrency(k.state.orderDetails.reduce(((e,t)=>e+(t.ext*t.qtySo+t.ext*t.qtyBa-.13*(t.ext*t.qtySo+t.ext*t.qtyBa))),0))),1)])),_:1}),(0,r.Wm)(j,{class:"text-center text-positive text-h6 q-mb-xs q-mt-lg q-pa-none"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(k.state.dialogStatus),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var v=a(499),D=a(5572);const b={setup(){let e=(0,v.qj)({status:"",orders:[],dialogStatus:"",selectedAnOrder:!1,orderDetails:[],orderSelected:{id:"",orderdate:"",cartId:0,prodId:"",CustomerID:0,ProdName:"",QtySo:0,QtyOr:0,QtyBa:0,Ext:0}});(0,r.bv)((()=>{t()}));const t=async()=>{try{let t=JSON.parse(sessionStorage.getItem("user"));const a=await(0,D._)(`order/${t.email}`);void 0===a.error?(e.orders=a,e.status=`Loaded ${e.orders.length} Order(s)`):e.status=a.error}catch(t){console.log(t),e.status=`Error has occured: ${t.message}`}},a=async t=>{try{let a=JSON.parse(sessionStorage.getItem("user"));const r=await(0,D._)(`order/${t}/${a.email}`);e.orderDetails=r,e.dialogStatus=`Details for Order #${t}`,e.selectedAnOrder=!0,e.orderSelected=e.orders.find((e=>e.id===t))}catch(a){console.log(a),e.status=`Error has occured: ${a.message}`}},s=e=>{let t;t=void 0===e?new Date:new Date(Date.parse(e));let a=t.getDate(),r=t.getMonth()+1,s=t.getFullYear(),l=t.getHours(),o=t.getMinutes();return o<10&&(o="0"+o),s+"-"+r+"-"+a+", "+l+":"+o},l=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"});return{state:e,formatDate:s,selectOrder:a,formatCurrency:l}}};var O=a(1639),U=a(4458),z=a(3246),C=a(490),Q=a(1233),Z=a(3115),j=a(7743),$=a(1821),I=a(4455),B=a(3190),A=a(1357),H=a(1136),N=a(2146),T=a(9984),E=a.n(T);const J=(0,O.Z)(b,[["render",k]]),L=J;E()(b,"components",{QCard:U.Z,QList:z.Z,QItem:C.Z,QItemSection:Q.Z,QItemLabel:Z.Z,QDialog:j.Z,QCardActions:$.Z,QBtn:I.Z,QCardSection:B.Z,QAvatar:A.Z}),E()(b,"directives",{Ripple:H.Z,ClosePopup:N.Z})}}]);