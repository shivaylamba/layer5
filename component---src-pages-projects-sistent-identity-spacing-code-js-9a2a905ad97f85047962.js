"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[481],{22514:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(96540);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"}];var s=n(96044);var c=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var o=()=>{var e,t;const{0:n,1:o}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));o(t)}),[]),i.createElement(c,null,n>0?i.createElement(s.default,{$secondary:!0,$url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(s.default,{$primary:!0,$url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},41654:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var i=n(96540),a=n(64810),s=n(86462),c=n(9184),o=n(96044);const r=()=>{const e=(0,s.useLocation)();return i.createElement(c.p,{title:"Spacing"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Spacing")),i.createElement("p",null,"Space is the unseen component in designed solutions that enables clear, concise, and consistent arrangement of interface elements across a screen."),i.createElement("div",{className:"filterBtns"},i.createElement(o.default,{className:"/projects/sistent/identity/spacing"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/identity/spacing"),title:"Overview"}),i.createElement(o.default,{className:"/projects/sistent/identity/spacing/guidance"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/identity/spacing/guidance"),title:"Guidance"}),i.createElement(o.default,{className:"/projects/sistent/identity/spacing/code"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/identity/spacing/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Sorry, this page is still under work"))))};var l=()=>i.createElement(r,null)},9184:function(e,t,n){n.d(t,{p:function(){return p}});var i=n(96540),a=n(91580),s=n(66198),c=n(66054),o=n(22514),r=n(64810);const l=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:a}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;a(e)}),[]),i.createElement(l,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(r.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const p=e=>{let{title:t,children:n}=e;return i.createElement(a.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(s.A,null),i.createElement("div",{className:"page-section"},i.createElement(c.mc,null,n," ",i.createElement(o.A,null)),i.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-identity-spacing-code-js-9a2a905ad97f85047962.js.map