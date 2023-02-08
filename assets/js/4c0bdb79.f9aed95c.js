"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2801],{35318:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){return function(t){var n=s(t.components);return a.createElement(e,i({},t,{components:n}))}},s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(l,".").concat(u)]||m[u]||b[u]||i;return n?a.createElement(c,d(d({ref:t},o),{},{components:n})):a.createElement(c,d({ref:t},o))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=n(25773),r=(n(27378),n(35318));const i={id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,d={unversionedId:"api/profile/subscriptions/inapp",id:"api/profile/subscriptions/inapp",title:"overwolf.profile.subscriptions.inapp API",description:"Provides functions and events to help with user profile subscription in-app management.",source:"@site/pages/docs/api/profile/subscriptions/inapp.mdx",sourceDirName:"api/profile/subscriptions",slug:"/api/profile/subscriptions/inapp",permalink:"/api/profile/subscriptions/inapp",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/profile/subscriptions/inapp.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1675769153,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.profile.subscriptions API",permalink:"/api/profile/subscriptions/"},next:{title:"overwolf.settings API",permalink:"/api/settings/"}},p={},o=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"show(planId, theme)",id:"showplanid-theme",level:2},{value:"Version added: 0.170",id:"version-added-0170",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription",level:4},{value:"hide(callback)",id:"hidecallback",level:2},{value:"Version added: 0.170",id:"version-added-0170-1",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription-1",level:4},{value:"onInAppSubModalOpened",id:"oninappsubmodalopened",level:2},{value:"Version added: 0.170",id:"version-added-0170-2",level:4},{value:"InAppSubModalOpenedEvent Object",id:"inappsubmodalopenedevent-object",level:2},{value:"onInAppSubModalClosed",id:"oninappsubmodalclosed",level:2},{value:"Version added: 0.170",id:"version-added-0170-3",level:4},{value:"InAppSubModalClosedEvent Object",id:"inappsubmodalclosedevent-object",level:2},{value:"Theme enum",id:"theme-enum",level:2},{value:"Version added: 0.174",id:"version-added-0174",level:4}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Provides functions and events to help with user profile subscription in-app management."),(0,r.mdx)("admonition",{type:"important"},(0,r.mdx)("p",{parentName:"admonition"},"Please check the ",(0,r.mdx)("a",{parentName:"p",href:"../subscriptions#sample-app"},"subscriptions API sample app")," that demonstrates a primary usage in the API.",(0,r.mdx)("br",{parentName:"p"}),"\n","Please read all the info about app subscriptions ",(0,r.mdx)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"here"),".")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Permissions required: Subscription"))),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#showplanid-theme"},"overwolf.profile.subscriptions.inapp.show()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#hidecallback"},"overwolf.profile.subscriptions.inapp.hide()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#oninappsubmodalopened"},"overwolf.profile.subscriptions.inapp.onInAppSubModalOpened")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#oninappsubmodalclosed"},"overwolf.profile.subscriptions.inapp.onInAppSubModalClosed"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#inappsubmodalopenedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalOpenedEvent")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#inappsubmodalclosedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalClosedEvent")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#theme-enum"},"overwolf.profile.subscriptions.inapp.enums.Theme")," Enum")),(0,r.mdx)("h2",{id:"showplanid-theme"},"show(planId, theme)"),(0,r.mdx)("h4",{id:"version-added-0170"},"Version added: 0.170"),(0,r.mdx)("h4",{id:"permissions-required-subscription"},"Permissions required: Subscription"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Shows the in-app subscription page as a modal window on top of the current window.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"planId"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"The plan Id to display")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"theme"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#theme-enum"},"Theme")," enum"),(0,r.mdx)("td",{parentName:"tr",align:null},'Optional. "Dark" or "Light. If not defined, the default is light')))),(0,r.mdx)("h2",{id:"hidecallback"},"hide(callback)"),(0,r.mdx)("h4",{id:"version-added-0170-1"},"Version added: 0.170"),(0,r.mdx)("h4",{id:"permissions-required-subscription-1"},"Permissions required: Subscription"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Hide the current active in-app subscription modal window.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"Result => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.mdx)("h2",{id:"oninappsubmodalopened"},"onInAppSubModalOpened"),(0,r.mdx)("h4",{id:"version-added-0170-2"},"Version added: 0.170"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is opened: with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent")," Object")),(0,r.mdx)("h2",{id:"inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"oninappsubmodalclosed"},"onInAppSubModalClosed"),(0,r.mdx)("h4",{id:"version-added-0170-3"},"Version added: 0.170"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is closed: with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent")," Object")),(0,r.mdx)("h2",{id:"inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"status"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"theme-enum"},"Theme enum"),(0,r.mdx)("h4",{id:"version-added-0174"},"Version added: 0.174"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Options"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Light"),(0,r.mdx)("td",{parentName:"tr",align:null},"Light")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Dark"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dark")))))}s.isMDXComponent=!0}}]);