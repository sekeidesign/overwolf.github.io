"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3558],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>w,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=t(27378);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){return function(a){var t=m(a.components);return n.createElement(e,r({},a,{components:t}))}},m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(t),c=o,u=d["".concat(p,".").concat(c)]||d[c]||f[c]||r;return t?n.createElement(u,i(i({ref:a},s),{},{components:t})):n.createElement(u,i({ref:a},s))}));function w(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40938:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(25773),o=(t(27378),t(35318));const r={id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},p=void 0,i={unversionedId:"start/basic-app/basic-app",id:"start/basic-app/basic-app",title:"Creating a basic one window app",description:"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window.",source:"@site/pages/docs/start/basic-app/basic-app.mdx",sourceDirName:"start/basic-app",slug:"/start/basic-app/",permalink:"/start/basic-app/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/basic-app/basic-app.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1677078094,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{id:"basic-app",image:"/img/embed/getting-started.jpg",title:"Creating a basic one window app",sidebar_label:"Basic App Creation",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Using The Dev Tools",permalink:"/start/getting-started/using-dev-tools"},next:{title:"Components",permalink:"/start/basic-app/components"}},l={},s=[{value:"Get the Overwolf client",id:"get-the-overwolf-client",level:2},{value:"Building a demo app from scratch",id:"building-a-demo-app-from-scratch",level:2},{value:"Real world Sample app",id:"real-world-sample-app",level:2}],d=(m="SkipMe",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const c={toc:s};function u(e){let{components:a,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To give you a feel for Overwolf's development platform, here's a short explanation on how to create a simple app that displays a single basic Overwolf app window."),(0,o.mdx)("p",null,"In this example, we will develop a one-window app from scratch. This sample window will not interact with game events and not even get injected into any game, it's just a demonstration of how to build and pack a window as an Overwolf app that can be launched from the Overwolf dock."),(0,o.mdx)("admonition",{type:"important"},(0,o.mdx)("p",{parentName:"admonition"},"To learn how a modern, real-world Overwolf app should look like, refer to ",(0,o.mdx)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),".")),(0,o.mdx)("h2",{id:"get-the-overwolf-client"},"Get the Overwolf client"),(0,o.mdx)("p",null,"To build Overwolf apps, you first need to download the Overwolf client.\nYou can find the latest version ",(0,o.mdx)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download?Channel=developers"},"Here"),"."),(0,o.mdx)("h2",{id:"building-a-demo-app-from-scratch"},"Building a demo app from scratch"),(0,o.mdx)("p",null,"This example details the steps in creating a simple, single window Overwolf app. The source code and files that used in this example can be found in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,o.mdx)("p",null,"Let's get to it! To build a one-window app:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create a folder, name it whatever you like.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},'Create a file named "manifest.json" in that folder.')),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},'Copy and paste the manifest code snippet found below into the "manifest.json" file.\nYou can read the ',(0,o.mdx)("a",{parentName:"p",href:"/api/manifest"},"Manifest.json")," section to learn about additional features you can use to make your app even more awesome."))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version":1,\n    "type":"WebApp",\n    "meta":{\n        "name":"Demo App",\n        "version":"1.0.0",\n        "minimum-overwolf-version":"0.199.0.15",\n        "author":"Developer Name",\n        "icon":"IconMouseOver.png",\n        "icon_gray":"IconMouseNormal.png",\n        "description":"Demo App"\n    },\n    "data": {\n        "start_window":"MainWindow",\n        "windows":{\n            "MainWindow":{\n                    "file":"index.html",\n                    "transparent": false,\n                    "resizable": true,\n                    "use_os_windowing": true,\n                    "size": {\n                        "width":700,\n                        "height":400\n                        },\n                    "min_size": {\n                        "width":400,\n                        "height":400\n                    }\n                }\n        }\n    }\n}\n')),(0,o.mdx)("ol",{start:4},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},'Choose icons for your app and place them in the folder you created. Remember to reference it in the "icon" field of your app\'s manifest.json.\nFor this example you can download sample icons from the ',(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create an ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.html")," file in the main folder and paste this snippet there:  "))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Basic sample app</h1>\n<p>This is a native desktop window that cannot be injected into the game.</p>\n\n</body>\n</html>\n")),(0,o.mdx)("ol",{start:6},(0,o.mdx)("li",{parentName:"ol"},"Load the app as an ",(0,o.mdx)("a",{parentName:"li",href:"/start/basic-app/sample-app#5-load-the-app-as-unpacked-extension"},'"unpacked" extension'),".")),(0,o.mdx)(d,{mdxType:"SkipMe"},(0,o.mdx)("ol",{start:6},(0,o.mdx)("li",{parentName:"ol"},"Pack all the files and icons in the folder as an Overwolf app installer A.K.A ",(0,o.mdx)("a",{parentName:"li",href:"https://discuss.overwolf.com/t/what-is-an-opk-package/23"},'"OPK" package'),":",(0,o.mdx)("br",{parentName:"li"}),"basically zip everything, and change the file extension from ZIP to OPK after you're done."))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Your Overwolf app can now run in development mode!"),(0,o.mdx)("br",{parentName:"p"}),"\n","To check your app, launch it from the dock, it should show:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:t(98591).Z,width:"727",height:"400"})),(0,o.mdx)("p",null,"Congratulations! You can now use standard web development techniques to create, debug, and complete your application. The source code and files that used in this example can be found in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/demo-app"},"app's repository"),"."),(0,o.mdx)("h2",{id:"real-world-sample-app"},"Real world Sample app"),(0,o.mdx)("p",null,"As mentioned, the app you built is technically working, but does nothing. To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please continue to study our official sample app showcasing what you can do and how.\nContinue to the ",(0,o.mdx)("a",{parentName:"p",href:"basic-app/sample-app"},"sample app guide"),"."))}u.isMDXComponent=!0},98591:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/basic-sample-app-994aa773203629a59262fc517d755874.png"}}]);