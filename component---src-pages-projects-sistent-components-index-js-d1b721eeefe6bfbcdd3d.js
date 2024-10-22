(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1158],{36669:function(e,t,n){var a=n(75972).k5;e.exports.Z=function(e){return a({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}},68004:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(96540),r=n(66054),i=n(91580),c=n(66198),s=n(56304),o=n(14730),l=n(36669),u=n(64810);const m=[{id:1,name:"Button",description:"A button is an interactive element that triggers a specific action and also lets users know what will happen next.",url:"/projects/sistent/components/button"},{id:2,name:"Text Input",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/text-input"},{id:3,name:"Modal",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/modal"},{id:4,name:"Paper",description:"The Paper component offers an elevated surface with shadow effects, following Material Design’s elevation system.",url:"/projects/sistent/components/paper"}];var d=()=>{const{0:e,1:t}=(0,a.useState)(""),{queryResults:n,searchData:d}=(0,o.A)(m,t,e,["name"],"id"),f=n;return a.createElement(i.A,null,a.createElement("div",{className:"page-header-section"},a.createElement("h1",null,"Components")),a.createElement(c.A,null),a.createElement("div",{className:"page-section"},a.createElement(r.mc,{className:"components-container"},a.createElement("div",{className:"content"},a.createElement("a",{id:"Identity"},a.createElement("h2",null,"Components")),a.createElement("p",null,"Components are reusable elements that serve as the building blocks of the design system. They are curated using the established identity principles and can be combined to form various elements, patterns, and templates that can be used to design user interfaces.")),a.createElement("div",{className:"main-content"},a.createElement("div",{className:"search-container"},a.createElement(s.A,{searchQuery:e,searchData:d})),a.createElement("div",{className:"product_cards"},a.createElement("div",{className:"cards"},f.map((e=>a.createElement(u.Link,{key:e.id,to:e.url},a.createElement("div",{className:"card"},a.createElement("div",{className:"card_head"},a.createElement("div",{className:"title"},e.name),a.createElement("div",{className:"text"},e.description)),a.createElement("div",null,a.createElement("div",{className:"card_bottom"},a.createElement("a",{className:"learn",href:e.url},a.createElement("div",{className:"learn-more"},a.createElement("div",null,"Learn more"),a.createElement("div",{className:"icon"},a.createElement(l.Z,null))))))))))))))))};var f=()=>a.createElement(d,null)},20181:function(e,t,n){var a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,u=o||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var a,r,i,c,s,o,l=0,u=!1,m=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,i=r;return a=r=void 0,l=t,c=e.apply(i,n)}function y(e){var n=e-o;return void 0===o||n>=t||n<0||m&&e-l>=i}function g(){var e=p();if(y(e))return N(e);s=setTimeout(g,function(e){var n=t-(e-o);return m?f(n,i-(e-l)):n}(e))}function N(e){return s=void 0,E&&a?b(e):(a=r=void 0,c)}function x(){var e=p(),n=y(e);if(a=arguments,r=this,o=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(g,t),u?b(e):c}(o);if(m)return s=setTimeout(g,t),b(o)}return void 0===s&&(s=setTimeout(g,t)),c}return t=h(t)||0,v(n)&&(u=!!n.leading,i=(m="maxWait"in n)?d(h(n.maxWait)||0,t):i,E="trailing"in n?!!n.trailing:E),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,a=o=r=s=void 0},x.flush=function(){return void 0===s?c:N(p())},x}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-index-js-d1b721eeefe6bfbcdd3d.js.map