"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2769],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>o,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>u});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),u=function(e){return function(a){var t=s(a.components);return n.createElement(e,r({},a,{components:t}))}},s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=l,c=u["".concat(d,".").concat(p)]||u[p]||g[p]||r;return t?n.createElement(c,m(m({ref:a},o),{},{components:t})):n.createElement(c,m({ref:a},o))}));function x(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,d=new Array(r);d[0]=b;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[c]="string"==typeof e?e:l,d[1]=m;for(var o=2;o<r;o++)d[o]=t[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99926:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var n=t(87462),l=(t(67294),t(3905));const r={id:"games",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.games API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},d=void 0,m={unversionedId:"api/settings/games",id:"api/settings/games",title:"overwolf.settings.games API",description:"Use this API to view the game-settings features functions.",source:"@site/pages/docs/api/settings/games.mdx",sourceDirName:"api/settings",slug:"/api/settings/games",permalink:"/api/settings/games",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/settings/games.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"games",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.games API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.settings API",permalink:"/api/settings/"},next:{title:"overwolf.settings.hotkeys API",permalink:"/api/settings/hotkeys"}},i={},o=[{value:"Special OW URL&#39;s",id:"special-ow-urls",level:2},{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getOverlayEnabled(gameClassId, callback)",id:"getoverlayenabledgameclassid-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112",level:4},{value:"getAutoLaunchEnabled(gameClassId, callback)",id:"getautolaunchenabledgameclassid-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112-1",level:4},{value:"setAutoLaunchEnabled(gameClassId, callback)",id:"setautolaunchenabledgameclassid-callback",level:2},{value:"Version added: 0.173",id:"version-added-0173",level:4},{value:"onOverlayEnablementChanged",id:"onoverlayenablementchanged",level:2},{value:"Version added: 0.124",id:"version-added-0124",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4},{value:"onAutoLaunchEnablementChanged",id:"onautolaunchenablementchanged",level:2},{value:"Version added: 0.124",id:"version-added-0124-1",level:4},{value:"OverlayEnabledResult Object",id:"overlayenabledresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"AutolaunchEnabledResult Object",id:"autolaunchenabledresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"OverlayEnablementChangedEvent Object",id:"overlayenablementchangedevent-object",level:2},{value:"Event data example",id:"event-data-example",level:4},{value:"AutoLaunchEnablementChangedEvent Object",id:"autolaunchenablementchangedevent-object",level:2},{value:"Event data example",id:"event-data-example-1",level:4}],u={toc:o};function s(e){let{components:a,...t}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API to view the game-settings features functions."),(0,l.mdx)("admonition",{type:"important"},(0,l.mdx)("p",{parentName:"admonition"},"Please read our best practices for using game settings can be found ",(0,l.mdx)("a",{parentName:"p",href:"/topics/best-practices/games-settings"},"here"),".")),(0,l.mdx)("h2",{id:"special-ow-urls"},"Special OW URL's"),(0,l.mdx)("p",null,"You can also use the following helpful URLs to open the relevant Overwolf game settings in the Appstore:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"overwolf://store/game-settings/game-id/[game-id]"),(0,l.mdx)("br",{parentName:"p"}),"\n","A clickable link that opens the Overwolf (game-id) game settings window from your app.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"overwolf://store/game-settings/appid-id/[extension-id]"),(0,l.mdx)("br",{parentName:"p"}),"\n","A clickable link that opens the Overwolf (targeted by your app) game settings window from your app."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getoverlayenabledgameclassid-callback"},"overwolf.settings.games.getOverlayEnabled()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getautolaunchenabledgameclassid-callback"},"overwolf.settings.games.getAutoLaunchEnabled()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setautolaunchenabledgameclassid-callback"},"overwolf.settings.games.setAutoLaunchEnabled()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onoverlayenablementchanged"},"overwolf.settings.games.onOverlayEnablementChanged")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onautolaunchenablementchanged"},"overwolf.settings.games.onAutoLaunchEnablementChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overlayenabledresult-object"},"OverlayEnabledResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#autolaunchenabledresult-object"},"AutolaunchEnabledResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent")," Object")),(0,l.mdx)("h2",{id:"getoverlayenabledgameclassid-callback"},"getOverlayEnabled(gameClassId, callback)"),(0,l.mdx)("h4",{id:"version-added-0112"},"Version added: 0.112"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Provides per-game settings as set by the user via the Overwolf store.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The game ID for which the flag is retrieved for")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#overlayenabledresult-object"},"Result: OverlayEnabledResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"getautolaunchenabledgameclassid-callback"},"getAutoLaunchEnabled(gameClassId, callback)"),(0,l.mdx)("h4",{id:"version-added-0112-1"},"Version added: 0.112"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns the current Auto-Launch enabled setting for the calling app in a given game (gameClassId).")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The game ID for which the flag is retrieved for")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#autolaunchenabledresult-object"},"Result: AutolaunchEnabledResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"setautolaunchenabledgameclassid-callback"},"setAutoLaunchEnabled(gameClassId, callback)"),(0,l.mdx)("h4",{id:"version-added-0173"},"Version added: 0.173"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Sets the current Auto-Launch enabled setting for the calling app in a given game (gameClassId).")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameClassId"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The game ID for which the flag is set")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"bool"),(0,l.mdx)("td",{parentName:"tr",align:null},"whether auto-launch should be enabled")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#autolaunchenabledresult-object"},"Result: AutolaunchEnabledResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"onoverlayenablementchanged"},"onOverlayEnablementChanged"),(0,l.mdx)("h4",{id:"version-added-0124"},"Version added: 0.124"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the overlay is enabled or disabled for a game, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent")," Object")),(0,l.mdx)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{ "gameId": 7764, "enabled": false}\n')),(0,l.mdx)("h2",{id:"onautolaunchenablementchanged"},"onAutoLaunchEnablementChanged"),(0,l.mdx)("h4",{id:"version-added-0124-1"},"Version added: 0.124"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when auto launch is enabled or disabled for a game, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent")," Object")),(0,l.mdx)("h2",{id:"overlayenabledresult-object"},"OverlayEnabledResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true\n}\n')),(0,l.mdx)("h2",{id:"autolaunchenabledresult-object"},"AutolaunchEnabledResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"autoLaunchEnabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "autoLaunchEnabled": true\n}\n')),(0,l.mdx)("h2",{id:"overlayenablementchangedevent-object"},"OverlayEnablementChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameId"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example"},"Event data example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'\n{ "gameId": 7764, "enabled": false }\n\n')),(0,l.mdx)("h2",{id:"autolaunchenablementchangedevent-object"},"AutoLaunchEnablementChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameId"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"appId"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"enabled"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-1"},"Event data example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'\n{ "gameId": 7764, "appId": "hffhbjnafafjnehejohpkfhjdenpifhihebpkhni", "enabled": false }\n\n')))}s.isMDXComponent=!0}}]);