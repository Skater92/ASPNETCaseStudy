"use strict";(self["webpackChunkcasestudyquasar"]=self["webpackChunkcasestudyquasar"]||[]).push([[756],{5572:(e,t,a)=>{a.d(t,{C:()=>o,_:()=>l});const s="https://localhost:7029/api/",l=async e=>{let t,a=r();try{let l=await fetch(`${s}${e}`,{method:"GET",headers:a});t=await l.json()}catch(l){console.log(l),t={error:`Error has occured: ${l.message}`}}return t},o=async(e,t)=>{let a,l=r();try{let o=await fetch(`${s}${e}`,{method:"POST",headers:l,body:JSON.stringify(t)});a=await o.json()}catch(o){a=o}return a},r=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("user"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},9756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(9835),l=a(6970);const o={class:"text-center q-mt-lg"},r=(0,s._)("img",{src:"img/BoneHeadAudio.png",alt:"BoneHeadLogo",width:"200",style:{"margin-top":"10%","margin-bottom":"10%"}},null,-1),n=(0,s._)("div",{class:"text-h3"},"Brand",-1),c={class:"text-positive q-mt-lg"},i={key:1,class:"text-h6 text-bold text-center text-primary"},d=["src"],u=["src"],m={class:"text-h4 text-blue-9 text-center"},g={style:{"font-weight":"bold"}},p={class:"text-left q-ma-lg"},y={class:"row"},h={class:"col-2 q-mr-lg"},w={class:"row justify-center q-mb-md"},f={class:"row justify-center"};function q(e,t,a,q,v,_){const C=(0,s.up)("q-select"),S=(0,s.up)("q-avatar"),b=(0,s.up)("q-item-section"),I=(0,s.up)("q-item"),x=(0,s.up)("q-list"),k=(0,s.up)("q-card"),M=(0,s.up)("q-scroll-area"),W=(0,s.up)("q-btn"),$=(0,s.up)("q-card-actions"),Q=(0,s.up)("q-card-section"),Z=(0,s.up)("q-input"),T=(0,s.up)("q-dialog"),V=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[r,n,(0,s._)("div",c,(0,l.zw)(q.state.status),1),q.state.categories.length>0?((0,s.wg)(),(0,s.j4)(C,{key:0,class:"q-mt-lg q-ml-lg",style:{width:"50vw","margin-bottom":"4vh","background-color":"#fff"},"option-value":"id","option-label":"name",modelValue:q.state.selectedCategoryId,"onUpdate:modelValue":[t[0]||(t[0]=e=>q.state.selectedCategoryId=e),t[1]||(t[1]=e=>q.loadMenuitems())],options:q.state.categories,label:"Select a Category","emit-value":"","map-options":""},null,8,["modelValue","options"])):(0,s.kq)("",!0),q.state.menuitems.length>0?((0,s.wg)(),(0,s.iD)("div",i,(0,l.zw)(q.state.selectedCategory.name)+" Products ",1)):(0,s.kq)("",!0),(0,s.Wm)(M,{style:{height:"55vh"}},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"q-ma-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.state.menuitems,(e=>((0,s.wg)(),(0,s.j4)(I,{key:e.id,clickable:"",onClick:t=>q.selectMenuItem(e.id)},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{style:{height:"125px",width:"125px"},square:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`/img/${e.graphicName}`},null,8,d)])),_:2},1024)])),_:2},1024),(0,s.Wm)(b,{class:"text-left"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.productName),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})]),(0,s.Wm)(T,{modelValue:q.state.itemSelected,"onUpdate:modelValue":t[5]||(t[5]=e=>q.state.itemSelected=e),"transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)($,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(W,{flat:"",icon:"close",color:"primary",class:"text-h5"},null,512),[[V]])])),_:1}),(0,s.Wm)(Q,{class:"q-pa-none text-center"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`/img/${q.state.selectMenuItem.graphicName}`,style:{height:"200px",margin:"10%"}},null,8,u)])),_:1}),(0,s._)("div",m,[(0,s.Uk)((0,l.zw)(q.state.selectMenuItem.productName)+" - ",1),(0,s._)("span",g,(0,l.zw)(q.formatCurrency(q.state.selectMenuItem.msrp)),1)]),(0,s._)("div",p,(0,l.zw)(q.state.selectMenuItem.description),1),(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s._)("div",y,[(0,s._)("div",h,[(0,s.Wm)(Z,{modelValue:q.state.qty,"onUpdate:modelValue":t[2]||(t[2]=e=>q.state.qty=e),modelModifiers:{number:!0},type:"number",filled:"",style:{"max-width":"15vw"},placeholder:"qty",hint:"Qty",dense:""},null,8,["modelValue"])])]),(0,s._)("div",w,[(0,s.Wm)(W,{icon:"add_shopping_cart",color:"primary",label:"Add To Cart",disable:q.state.qty<0,onClick:t[3]||(t[3]=e=>q.addToTray())},null,8,["disable"])]),(0,s._)("div",f,[(0,s.Wm)(W,{icon:"shopping_cart",color:"primary",label:"View Cart",disable:q.state.tray.length<1,onClick:t[4]||(t[4]=e=>q.viewTray())},null,8,["disable"])])])),_:1}),(0,s.Wm)(Q,{class:"text-center text-positive"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(q.state.dialogStatus),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var v=a(8910);const _=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"});var C=a(499),S=a(5572);const b={setup(){const e=(0,v.tv)();(0,s.bv)((()=>{r()}));let t=(0,C.qj)({status:"",categories:[],menuitems:[],selectedCategoryId:"",selectedCategory:{},selectMenuItem:{},qty:0,tray:[],dialogStatus:"",itemSelected:!1});const a=()=>{let e=-1;t.tray.length>0&&(e=t.tray.findIndex((e=>e.id===t.selectMenuItem.id))),t.qty>0?(-1===e?t.tray.push({id:t.selectMenuItem.id,qty:t.qty,product:t.selectMenuItem}):t.tray[e]={id:t.selectMenuItem.id,qty:t.qty,product:t.selectMenuItem},t.dialogStatus=`${t.qty} item(s) added`):(-1!==e&&t.tray.splice(e,1),t.dialogStatus="item(s) removed"),sessionStorage.setItem("tray",JSON.stringify(t.tray)),t.qty=0},l=async()=>{try{t.selectedCategory=t.categories.find((e=>e.id===t.selectedCategoryId)),t.status=`finding products for brand ${t.selectedCategory}...`,t.menuitems=await(0,S._)(`Product/${t.selectedCategory.id}`),t.status=`loaded ${t.menuitems.length} products for\n${t.selectedCategory.name}`}catch(e){console.log(e),t.status=`Error has occured: ${e.message}`}},o=async e=>{try{t.selectMenuItem=t.menuitems.find((t=>t.id===e)),t.itemSelected=!0,t.dialogStatus="",sessionStorage.getItem("tray")&&(t.tray=JSON.parse(sessionStorage.getItem("tray")))}catch(a){console.log(a),t.status=`Error has occured: ${a.message}`}},r=async()=>{try{t.status="loading categories...";const e=await(0,S._)("Category");void 0===e.error?(t.categories=e,t.status=`loaded ${t.categories.length} brands`):t.status=e.error}catch(e){console.log(e),t.status=`Error has occured: ${e.message}`}},n=()=>{e.push("tray")};return{state:t,loadMenuitems:l,selectMenuItem:o,addToTray:a,formatCurrency:_,viewTray:n}}};var I=a(1639),x=a(4363),k=a(1019),M=a(4458),W=a(3246),$=a(490),Q=a(1233),Z=a(1357),T=a(7743),V=a(1821),j=a(4455),z=a(3190),N=a(6611),U=a(2146),A=a(9984),B=a.n(A);const D=(0,I.Z)(b,[["render",q]]),E=D;B()(b,"components",{QSelect:x.Z,QScrollArea:k.Z,QCard:M.Z,QList:W.Z,QItem:$.Z,QItemSection:Q.Z,QAvatar:Z.Z,QDialog:T.Z,QCardActions:V.Z,QBtn:j.Z,QCardSection:z.Z,QInput:N.Z}),B()(b,"directives",{ClosePopup:U.Z})}}]);