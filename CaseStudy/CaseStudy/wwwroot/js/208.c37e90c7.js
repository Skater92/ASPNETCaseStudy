"use strict";(self["webpackChunkcasestudyquasar"]=self["webpackChunkcasestudyquasar"]||[]).push([[208],{5572:(e,t,a)=>{a.d(t,{C:()=>n,_:()=>o});const s="https://localhost:7029/api/",o=async e=>{let t,a=r();try{let o=await fetch(`${s}${e}`,{method:"GET",headers:a});t=await o.json()}catch(o){console.log(o),t={error:`Error has occured: ${o.message}`}}return t},n=async(e,t)=>{let a,o=r();try{let n=await fetch(`${s}${e}`,{method:"POST",headers:o,body:JSON.stringify(t)});a=await n.json()}catch(n){a=n}return a},r=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("user"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},4208:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(9835),o=a(1957);const n={class:"text-center q-mt-md"},r=(0,s._)("div",{class:"text-h4"},"TomTom Map Ex3",-1),l=(0,s._)("div",{class:"text-h6"},"show map with marker",-1),c=(0,s._)("br",null,null,-1),d={style:{height:"50vh",width:"90vw","margin-left":"5vw",border:"solid"},ref:"mapRef"};function i(e,t,a,i,p,u){const h=(0,s.up)("q-input"),m=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",n,[r,l,(0,s._)("div",null,[(0,s.Wm)(h,{class:"q-ma-lg text-h5",placeholder:"Enter search Postal Code",id:"address",modelValue:i.state.address,"onUpdate:modelValue":t[0]||(t[0]=e=>i.state.address=e)},null,8,["modelValue"]),c]),(0,s.Wm)(m,{icon:"map",label:"Search",color:"primary",onClick:i.genMap,class:"q-mb-md",style:{width:"30vw"}},null,8,["onClick"]),(0,s.wy)((0,s._)("div",d,null,512),[[o.F8,!0===i.state.showmap]])])}var p=a(499),u=a(5572);const h={name:"branch_map",setup(){const e=(0,p.iH)(null);let t=(0,p.qj)({status:"",address:"",showmap:!1});const a=async()=>{try{t.showmap=!0;const s=window.tt;let o=`https://api.tomtom.com/search/2/geocode/${t.address}.json?key=ILBxYk9IKgYvFxgGvcBVSmeyxXzLs0g2`,n=await fetch(o),r=await n.json(),l=r.results[0].position.lat,c=r.results[0].position.lon;try{let t=await(0,u._)(`Branch/${l}/${c}`),a=t.slice(0,3),o=s.map({key:"ILBxYk9IKgYvFxgGvcBVSmeyxXzLs0g2",container:e.value,source:"vector/1/basic-main",center:[c,l],zoom:12});o.addControl(new s.FullscreenControl),o.addControl(new s.NavigationControl),a.forEach((e=>{console.log(e.latitude,e.longitude,e.street);let t=(new s.Marker).setLngLat([e.longitude,e.latitude]).addTo(o),a=25,n=new s.Popup({offset:a});n.setHTML(`<div id="popup">Store#: ${e.id}</div><div>${e.street}, ${e.city}\n            <br/>${e.distance.toFixed(2)} Km</div>`),t.setPopup(n)}))}catch(a){console.log(a)}}catch(a){t.status=a.message}};return{mapRef:e,state:t,genMap:a}}};var m=a(1639),w=a(6611),g=a(4455),v=a(9984),y=a.n(v);const f=(0,m.Z)(h,[["render",i]]),k=f;y()(h,"components",{QInput:w.Z,QBtn:g.Z})}}]);