"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[628],{9628:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var t=a(2791),o=a(7689),n=a(1087),c=a(9508),r=a(8687),l=a(3437);const i="https://kauth.kakao.com/oauth/authorize?client_id=".concat("3a8a581619662b5a126943e55dfda42f","&redirect_uri=").concat("http://localhost:3000/auth","&response_type=code"),p="http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=".concat("VVPjzaZLMHYFfBStGKMf","&state=").concat("false","&redirect_uri=").concat("http://localhost:3000/authnaver");var d=a(9165),h=a(3329);new URL(window.location.href).searchParams.get("code");const m=()=>{const{isLoading:e,sendRequest:s,clearError:a}=(0,c.x)(),[m,g]=(0,t.useState)(""),[u,f]=(0,t.useState)(""),[x,k]=(0,t.useState)(""),j=(0,o.s0)(),y=(0,r.I0)(),{code:_}=(0,o.UO)(),N=e=>{"Enter"===e.key&&w()},w=async()=>{if(m&&u)try{const e=new FormData;e.append("username",m),e.append("password",u);const a=await s("".concat("http://50.19.61.187:8000","/accounts/login"),"POST",e),{access_token:t,refresh_token:o,platform_type:n,admin:c}=a,r=9,i=Date.now()*r;y((0,l.pH)(t,o,n,1===c)),y({type:"LOGIN_USER",payload:{platformType:n,isAdmin:!0===c}}),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("accessToken",t),localStorage.setItem("refreshToken",o),localStorage.setItem("accessTokenExpiration",i),console.log(a.admin),k(null),j("/")}catch(x){k("\uc798\ubabb\ub41c \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694.")}else k("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.")};return setInterval((async function(){var e;e=localStorage.getItem("accessToken"),(0,d.o)(e).exp<Math.floor(Date.now()/1e3)&&await async function(){try{const e=localStorage.getItem("refreshToken");if(!e)return void console.error("\ub9ac\ud504\ub808\uc2dc \ud1a0\ud070\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");const s=new URL("".concat("http://50.19.61.187:8000","/accounts/refresh-token"));s.searchParams.append("refresh_token_key",e);const a=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token_key:e})});if(a.ok){const e=(await a.json()).access_token;localStorage.setItem("accessToken",e),console.log("\ud1a0\ud070 \uc7ac\ubc1c\uae09 \uc131\uacf5!",e)}else console.error("\ud1a0\ud070 \uc7ac\ubc1c\uae09 \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."),console.error("\uc751\ub2f5 \uc0c1\ud0dc:",a.status)}catch(x){console.error("\ud1a0\ud070 \uc7ac\ubc1c\uae09 \uc694\uccad \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",x)}}()}),6e4),(0,t.useEffect)((()=>{localStorage.getItem("accessToken")&&j("/")}),[j]),(0,h.jsxs)("div",{className:"login-page",children:[(0,h.jsx)("img",{className:"welcome",src:"/img/loginimg/Welcome.png",alt:"Welcome"}),(0,h.jsx)("p",{className:"text_welcome",children:"\ud658\uc601\ud569\ub2c8\ub2e4!"}),(0,h.jsxs)("form",{className:"login-form",children:[(0,h.jsx)("input",{type:"text",value:m,onChange:e=>g(e.target.value),className:"login-input",onKeyPress:N}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"password",value:u,onChange:e=>f(e.target.value),className:x?"error-input":"login-input",onKeyPress:N}),x&&(0,h.jsx)("p",{className:"error-message",children:x}),(0,h.jsx)("button",{type:"button",onKeyPress:N,className:"login-button",onClick:w,children:"\ub85c\uadf8\uc778\ud558\uae30"}),(0,h.jsxs)("div",{className:"nosignup",children:[(0,h.jsx)("p",{children:"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uc138\uc694?"}),(0,h.jsx)("p",{children:(0,h.jsx)(n.rU,{to:"/Signup",className:"signup",children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})})]})]}),(0,h.jsxs)("div",{className:"icon_content",children:[(0,h.jsx)("div",{className:"icon_wrapper",children:(0,h.jsxs)("a",{href:i,className:"icon_text",children:[(0,h.jsx)("img",{className:"icons",src:"/img/loginimg/Kakao.png",alt:"kakao"}),(0,h.jsx)("p",{children:"\uce74\uce74\uc624\ud1a1\uc73c\ub85c \uc2dc\uc791"})]})}),(0,h.jsx)("div",{className:"icon_wrapper",children:(0,h.jsxs)("a",{href:p,className:"icon_text",children:[(0,h.jsx)("img",{className:"icons",src:"/img/loginimg/Naver.png",alt:"naver"}),(0,h.jsx)("p",{children:"\ub124\uc774\ubc84\ub85c \uc2dc\uc791"})]})})]})]})}}}]);
//# sourceMappingURL=628.f0748d90.chunk.js.map