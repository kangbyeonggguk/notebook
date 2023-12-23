"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[805],{4805:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(2791),s=a(3885);const c="REQUIRE",l="MINLENGTH",r="MAXLENGTH",o="EMAIL",i="BIRTHDATE",p="PHONE",h="PASSWORD",m=e=>({type:l,val:e}),u=()=>({type:p}),d=(e,t)=>{let a=!0;for(const n of t)if(n.type===c&&(a=a&&e.trim().length>0),n.type===l&&(a=a&&e.trim().length>=n.val),n.type===r&&(a=a&&e.trim().length<=n.val),"MIN"===n.type&&(a=a&&+e>=n.val),"MAX"===n.type&&(a=a&&+e<=n.val),n.type===o&&(a=a&&/^\S+@\S+\.\S+$/.test(e)),n.type===i&&(a=a&&/^\d{4}\.\d{2}\.\d{2}$/.test(e)),n.type===p&&(a=a&&/^\d{11}$/.test(e)),n.type===h){const t=[/[A-Z]/.test(e),/[a-z]/.test(e),/\d/.test(e),/[@$!%*?&]/.test(e)].filter((e=>e)).length;a=a&&t>=2&&/^[A-Za-z\d@$!%*?&]{8,16}$/.test(e)}return a};var y=a(9508),g=a(3329);const _=e=>{const{isLoading:t,error:a,sendRequest:s,clearError:c}=(0,y.x)(),[l,r]=(0,n.useState)(!0),[o,i]=(0,n.useState)(!0),[p,h]=(0,n.useState)({number:!1,auth:!1}),[_,j]=(0,n.useState)({number:"",phone:""}),x=(e,t,a)=>{const n=e.target.value;a(d(n,[t]))};return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)("span",{className:"mypage-auth_title",children:"\ubcf8\uc778 \uc778\uc99d\ud558\uae30"}),(0,g.jsxs)("div",{className:"mypage-auth_contentcontain",children:[(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\ud734\ub300\uc804\ud654 \uc778\uc99d"}),(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("input",{className:"mypage-auth_content_input2",onChange:e=>{x(e,u(),r),j({..._,phone:e.target.value})},style:{borderColor:l?"":"#FF4848"}}),(0,g.jsx)("button",{className:"mypage-auth_content_btn",onClick:async()=>{try{await s("".concat("http://refurlab.site:8000","/send"),"POST",JSON.stringify({phone:_.phone}),{"Content-Type":"application/json",token:"".concat(localStorage.getItem("accessToken"))});h({...p,number:!0,auth:!1}),alert("\uc778\uc99d\ubc88\ud638\uac00 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}catch(e){alert("\ud734\ub300\ud3f0\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."),r(!1)}},children:"\uc778\uc99d\uc694\uccad"})]}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:l?"":"#FF4848"},children:"\u2018-\u2019\uc5c6\uc774 \ud734\ub300\ud3f0\ubc88\ud638 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\uc778\uc99d\ubc88\ud638"}),(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("input",{className:"mypage-auth_content_input2",onChange:e=>{x(e,m(6),i),j({..._,number:e.target.value})},style:{borderColor:o?"":"#FF4848"},readOnly:p.auth}),(0,g.jsx)("button",{className:"mypage-auth_content_btn",onClick:e=>{(async()=>{try{await s("".concat("http://refurlab.site:8000","/verify"),"POST",JSON.stringify({phone:_.phone,auth_num:_.number}),{"Content-Type":"application/json"}),h({...p,auth:!0}),alert("\uc778\uc99d\ubc88\ud638\uac00 \ud655\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}catch(e){h({...p,auth:!1}),alert("\uc778\uc99d\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694."),i(!1)}})()},children:"\ud655\uc778"})]}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:o?"":"#FF4848"},children:"\uc778\uc99d\ubc88\ud638 6\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})]}),(0,g.jsxs)("div",{className:"mypage-auth_btncontain",children:[(0,g.jsx)("button",{className:"mypage-auth_btn",onClick:()=>window.history.back(),children:"\ucde8\uc18c\ud558\uae30"}),(0,g.jsx)("button",{className:"mypage-auth_btn",style:{marginLeft:"0.5rem",background:"#4F80FF",border:"none",color:"#ffffff"},onClick:()=>{Object.values(p).every((e=>!0===e))&&Object.values(_).every((e=>""!==e))&&e.setAuthCheck(!0)},children:"\ub0b4 \uc815\ubcf4 \uc218\uc815\ud558\uae30"})]})]})};var j=a(7689);const x=()=>{const{isLoading:e,error:t,sendRequest:a,clearError:s}=(0,y.x)(),l=(0,j.s0)(),[r,i]=(0,n.useState)(!1),[p,_]=(0,n.useState)(1),[x,N]=(0,n.useState)(!0),[b,v]=(0,n.useState)(!0),[f,F]=(0,n.useState)(!0),[k,w]=(0,n.useState)(!0),[C,S]=(0,n.useState)(!0),[E,T]=(0,n.useState)(!0),[O,A]=(0,n.useState)({name:!1,pw:!1,pwcheck:!1,id:!1,email:!1,phone:!1}),[L,I]=(0,n.useState)({name:"",pw:"",pwcheck:"",id:"",email:"",phone:""}),[R,$]=(0,n.useState)();(0,n.useEffect)((()=>{function e(){window.innerWidth<768?i(!0):i(!1)}return(async()=>{try{const e=await a("".concat("http://refurlab.site:8000","/accounts"),"GET",null,{token:"".concat(localStorage.getItem("accessToken"))});await $(e.response)}catch(e){}})(),e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const H=(e,t,a)=>{const n=e.target.value;a(d(n,[t]))};(0,n.useEffect)((()=>{F(L.pw===L.pwcheck)}),[L]);return(0,n.useEffect)((()=>{R&&I({name:R.nickname,pw:"",pwcheck:"",id:R.id,email:R.email,phone:R.phonenumber})}),[R]),(0,n.useEffect)((()=>{if(r&&1===p&&O.id&&O.pw&&O.pwcheck&&""!==L.id&&""!==L.pw&&""!==L.pwcheck)_(2);else if(Object.values(O).every((e=>!0===e))&&Object.values(L).every((e=>""!==e))){(async()=>{try{await a("".concat("http://refurlab.site:8000","/accounts"),"PATCH",JSON.stringify({password:L.pw,nickname:L.name,email:L.email,phonenumber:L.phone,update_date:"2023-11-05T05:57:16.839Z"}),{"Content-Type":"application/json",token:"".concat(localStorage.getItem("accessToken"))});await l("/")}catch(e){}})()}}),[O]),(0,g.jsx)(n.Fragment,{children:!e&&R&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{className:"mypage-edit_img",src:"/img/mypage/Default.png",alt:"mypageimg"}),(0,g.jsxs)("div",{className:"mypage-auth_contentcontain",children:[(0,g.jsxs)("div",{className:"mobile-page1",style:{display:r&&1!==p?"none":"block"},children:[(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\uc544\uc774\ub514"}),(0,g.jsx)("input",{className:"mypage-auth_content_input",style:{borderColor:x?"":"#FF4848"},onChange:e=>{H(e,m(4),N),I({...L,id:e.target.value})},placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:L.id}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:x?"":"#FF4848"},children:!x&&"\uc544\uc774\ub514\ub97c 4\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\ube44\ubc00\ubc88\ud638"}),(0,g.jsx)("input",{type:"password",className:"mypage-auth_content_input",style:{borderColor:b?"":"#FF4848"},onChange:e=>{H(e,{type:h},v),I({...L,pw:e.target.value})},placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:b?"":"#FF4848"},children:!b&&"\ube44\ubc00\ubc88\ud638\ub97c \uc601\ubb38\ub300/\uc18c\ubb38\uc790,\uc22b\uc790,\ud2b9\uc218\ubb38\uc790 \uc911 2\uac00\uc9c0 \uc774\uc0c1 \uc870\ud569\ud558\uc5ec 8~16\uc790 \uc0ac\uc774\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,g.jsx)("input",{type:"password",className:"mypage-auth_content_input",style:{borderColor:f?"":"#FF4848"},onChange:e=>{I({...L,pwcheck:e.target.value})},placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:f?"":"#FF4848"},children:!f&&"\ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4."})]})]}),(0,g.jsxs)("div",{className:"mobile-page2",style:{display:r&&2!==p?"none":"block"},children:[(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\uc774\ub984"}),(0,g.jsx)("input",{className:"mypage-auth_content_input",style:{borderColor:k?"":"#FF4848"},onChange:e=>{H(e,{type:c},w),I({...L,name:e.target.value})},placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:L.name}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:k?"":"#FF4848"},children:!k&&"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\uc774\uba54\uc77c"}),(0,g.jsx)("input",{className:"mypage-auth_content_input",style:{borderColor:C?"":"#FF4848"},onChange:e=>{H(e,{type:o},S),I({...L,email:e.target.value})},placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:L.email}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:C?"":"#FF4848"},children:!C&&"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."})]}),(0,g.jsxs)("div",{className:"mypage-auth_content",children:[(0,g.jsx)("span",{className:"mypage-auth_content_name",children:"\ud734\ub300\uc804\ud654"}),(0,g.jsx)("input",{className:"mypage-auth_content_input",style:{borderColor:E?"":"#FF4848"},onChange:e=>{H(e,u(),T),I({...L,phone:e.target.value})},placeholder:"\ud734\ub300\uc804\ud654\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:L.phone}),(0,g.jsx)("span",{className:"mypage-auth_content_err",style:{color:E?"":"#FF4848"},children:!E&&"\u2018-\u2019\uc5c6\uc774 \ud734\ub300\ud3f0\ubc88\ud638 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})]})]}),(0,g.jsxs)("div",{className:"mypage-auth_btncontain",children:[(0,g.jsx)("button",{className:"mypage-auth_btn",onClick:()=>window.history.back(),children:"\ucde8\uc18c\ud558\uae30"}),(0,g.jsx)("button",{className:"mypage-auth_btn",style:{display:r&&1===p?"block":"none",marginLeft:"0.5rem",background:"#4F80FF",border:"none",color:"#ffffff"},onClick:()=>{A({...O,id:x,pw:b,pwcheck:f})},children:"\ub2e4\uc74c\uc73c\ub85c"}),(0,g.jsx)("button",{className:"mypage-auth_btn",style:{display:r?2===p?"block":"none":"block",marginLeft:"0.5rem",marginBottom:"11.5rem",background:"#4F80FF",border:"none",color:"#ffffff"},onClick:()=>{A({...O,name:k,pw:b,pwcheck:f,id:x,email:C,phone:E})},children:"\ub0b4 \uc815\ubcf4 \uc218\uc815\ud558\uae30"})]})]})})},N=()=>{const[e,t]=(0,n.useState)(!1);return(0,g.jsxs)("div",{className:"mypage-auth",children:[(0,g.jsx)(s.Z,{title:"\ub0b4 \uc815\ubcf4 \uc218\uc815",children:"\uacc4\uc815 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uace0 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),e?(0,g.jsx)(x,{}):(0,g.jsx)(_,{setAuthCheck:t})]})}},3885:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(2791),s=a(3329);const c=e=>(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)("div",{className:"pagetitle_title center ".concat(e.className),children:e.title}),(0,s.jsx)("div",{className:"pagetitle_guide center ".concat(e.className),children:e.children})]})}}]);
//# sourceMappingURL=805.542e554a.chunk.js.map