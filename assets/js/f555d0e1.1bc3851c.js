"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6136],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>d});var r=t(27378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),d=function(e){return function(a){var t=s(a.components);return r.createElement(e,i({},a,{components:t}))}},s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(t),c=n,u=d["".concat(o,".").concat(c)]||d[c]||f[c]||i;return t?r.createElement(u,l(l({ref:a},p),{},{components:t})):r.createElement(u,l({ref:a},p))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43021:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(25773),n=(t(27378),t(35318));const i={id:208,image:"/img/embed/changelogs.jpg",title:"Version 0.208",sidebar_label:"0.208",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/september/208",id:"api/changelogs/overwolf-platform/2022/september/208",title:"Version 0.208",description:"* Note that iterations 205 to 208 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2022/september/208.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/september",slug:"/api/changelogs/overwolf-platform/2022/september/208",permalink:"/api/changelogs/overwolf-platform/2022/september/208",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2022/september/208.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1676384085,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"208",image:"/img/embed/changelogs.jpg",title:"Version 0.208",sidebar_label:"0.208",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.212",permalink:"/api/changelogs/overwolf-platform/2022/november/212"},next:{title:"0.204",permalink:"/api/changelogs/overwolf-platform/2022/august/204"}},m={},p=[{value:"Docs",id:"docs",level:3},{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],d={toc:p};function s(e){let{components:a,...t}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Note that iterations 205 to 208 were combined into a single iteration.")),(0,n.mdx)("h3",{id:"docs"},"Docs"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added more page preview images"),(0,n.mdx)("li",{parentName:"ul"},"New section on the website - ",(0,n.mdx)("inlineCode",{parentName:"li"},"Tools"),", documenting the different tools provided by Overwolf (ow-electron, ow-cli, Developer's console, etc)."),(0,n.mdx)("li",{parentName:"ul"},"Dev console docs have been updated to reflect the facelift, and can be found ",(0,n.mdx)("a",{parentName:"li",href:"/tools/developers-console"},"here"),".")),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"App ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#process_name"},(0,n.mdx)("inlineCode",{parentName:"a"},"process_name"))," now defaults to the app's ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#meta-name"},(0,n.mdx)("inlineCode",{parentName:"a"},"name")),"."),(0,n.mdx)("li",{parentName:"ul"},"Enabled the CSS property ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"},(0,n.mdx)("inlineCode",{parentName:"a"},"--aspect-ratio"))," as experimental."),(0,n.mdx)("li",{parentName:"ul"},"Added the ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},(0,n.mdx)("inlineCode",{parentName:"a"},"custom_modifier_key"))," property to ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},(0,n.mdx)("inlineCode",{parentName:"a"},"keybinds")),", allowing keybinds to utilize an extra, arbitrary, modifier key.")),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"New API - ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#updatehotkey-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.update()")),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Allows an app to update certain properties of keybinds during runtime. Specifically:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"isPassThrough")," - Whether or not this keybind should allow passthrough."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"customModifierKeyCode")," - This keybind's (optional) arbitrary modifier key."))))),(0,n.mdx)("li",{parentName:"ul"},"New API - ",(0,n.mdx)("a",{parentName:"li",href:"/api/os/tray#changeiconpath-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"changeIcon")),", ",(0,n.mdx)("a",{parentName:"li",href:"/api/os/tray#restoreicon-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"restoreIcon")),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Allows an app to temporarily change its tray icon (repeatedly). Using ",(0,n.mdx)("a",{parentName:"li",href:"/api/os/tray#restoreicon-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"restoreIcon"))," will restore it back to its original ",(0,n.mdx)("a",{parentName:"li",href:"/api/manifest#meta-tray_icon"},(0,n.mdx)("inlineCode",{parentName:"a"},"tray_icon")),"."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Requires a tray item to already be created (",(0,n.mdx)("a",{parentName:"strong",href:"/api/os/tray#setmenumenu-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.os.tray.setMenu()")),")!")))),(0,n.mdx)("li",{parentName:"ul"},"New API - ",(0,n.mdx)("a",{parentName:"li",href:"/api/io#watchfilefilepath-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"watchFile")),", ",(0,n.mdx)("a",{parentName:"li",href:"/api/io#stopwatchingfilefilepath-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.io.stopWatchingFile")),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Allows an app to listen to ",(0,n.mdx)("strong",{parentName:"li"},"changes")," occurring on a file, rather than just listening to additions/removals from its end."),(0,n.mdx)("li",{parentName:"ul"},"The listener will stop if the file is renamed or deleted, or if ",(0,n.mdx)("a",{parentName:"li",href:"/api/io#stopwatchingfilefilepath-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.io.stopWatchingFile"))," is called."))),(0,n.mdx)("li",{parentName:"ul"},"Updated API - Improved ",(0,n.mdx)("a",{parentName:"li",href:"/api/media/replays"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.media.replays"))," and ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming"))," error feedback:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/media/replays#capturepastduration-futureduration-capturefinishedcallback-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.media.replays.capture()"))," and ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.start()"))," will now return the new parameters ",(0,n.mdx)("inlineCode",{parentName:"li"},"errorCode")," and ",(0,n.mdx)("inlineCode",{parentName:"li"},"errorDescription"),"."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#streamResult-object"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamResult"))," now returns the ",(0,n.mdx)("inlineCode",{parentName:"li"},"streamId")," of the corresponding OBS stream."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/media/replays#capturepastduration-futureduration-capturefinishedcallback-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.media.replays.capture()"))," now returns ",(0,n.mdx)("a",{parentName:"li",href:"/api/media/replays#replayresult-object"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.media.replays.StartReplayResult"))," to its callback, with more information about the capture."),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#captureerrorcode-enum"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.enums.CaptureErrorCode")),", an enum of error codes returned when a capture fails. Of particular note is the ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#ransomwareprotection-note"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.enums.CaptureErrorCode.RansomwareProtection"))," code,\nwhich signals that Windows ransomware protection on folders is turned on and stopping Overwolf from writing to the capture folder. More information can be found ",(0,n.mdx)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/controlled-folders?view=o365-worldwide#windows-system-folders-are-protected-by-default"},"here"),".")))),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue affecting app tray icons on the first install of the app."),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where ",(0,n.mdx)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},(0,n.mdx)("inlineCode",{parentName:"a"},"overwolf.utils.openFilePicker()"))," would throw an error when passed an  ",(0,n.mdx)("inlineCode",{parentName:"li"},"initialPath"),"."),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where pressing a ",(0,n.mdx)("inlineCode",{parentName:"li"},"press")," hotkey would interrupt an active ",(0,n.mdx)("inlineCode",{parentName:"li"},"hold")," hotkey, resulting in ",(0,n.mdx)("inlineCode",{parentName:"li"},'state: "up"')," never firing."),(0,n.mdx)("li",{parentName:"ul"},"When an app is un-installed, its individual app channel setting will also get removed."),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue where lifting a held hotkey was not properly detected if its modifier key was released first.")))}s.isMDXComponent=!0}}]);