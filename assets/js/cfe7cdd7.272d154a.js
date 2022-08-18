"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6318],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,g=s["".concat(o,".").concat(d)]||s[d]||c[d]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},57604:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:143,image:"/img/embed/api-docs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_position:143},m=void 0,p={unversionedId:"api/changelogs/2020/march/143",id:"api/changelogs/2020/march/143",title:"Version 0.143",description:"Game events",source:"@site/pages/docs/api/changelogs/2020/3-march/143.mdx",sourceDirName:"api/changelogs/2020/3-march",slug:"/api/changelogs/2020/march/143",permalink:"/api/changelogs/2020/march/143",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2020/3-march/143.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:143,frontMatter:{id:"143",image:"/img/embed/api-docs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_position:-143},sidebar:"api",previous:{title:"0.145",permalink:"/api/changelogs/2020/april/145"},next:{title:"0.142",permalink:"/api/changelogs/2020/february/142"}},s={},u=[{value:"Game events",id:"game-events",level:3},{value:"Game events",id:"game-events-1",level:3}],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"game-events"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Vulkan Graphics API is now supported."),(0,i.mdx)("li",{parentName:"ul"},"From now, whenever you try to use an obsolete API, the dev console will print a warning.",(0,i.mdx)("br",{parentName:"li"}),"Try: overwolf.setting.getCurrentOverwolfLanguage()."),(0,i.mdx)("li",{parentName:"ul"},"New API - ",(0,i.mdx)("a",{parentName:"li",href:"/api/settings/language"},"overwolf.settings.language"),".",(0,i.mdx)("br",{parentName:"li"}),"Returns an object with language methods and events.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/settings/language#getcallback"},"overwolf.settings.language.get()"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/settings/language#onlanguagechanged"},"overwolf.settings.language.onLanguageChanged")," event."))),(0,i.mdx)("li",{parentName:"ul"},"New event: ",(0,i.mdx)("a",{parentName:"li",href:"/api/windows#onscreenpropertychanged"},"overwolf.windows.onScreenPropertyChanged"),".",(0,i.mdx)("br",{parentName:"li"}),"Detect moving window to another monitor.",(0,i.mdx)("br",{parentName:"li"}),"Triggered if more than 50% of the window has been moved to another monitor.",(0,i.mdx)("br",{parentName:"li"}),"Returns the new monitor handle."),(0,i.mdx)("li",{parentName:"ul"},"Upgrade OBS to 24.0.5.  ",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Update FFMpeg version."),(0,i.mdx)("li",{parentName:"ul"},'Support new NVEC Encoders ("NVEC New").'))),(0,i.mdx)("li",{parentName:"ul"},"Allow overriding recording indication type and position in API:",(0,i.mdx)("br",{parentName:"li"}),"Now when calling ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},"overwolf.streaming.start()"),", ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming#indication_position-enum"},"indication_position")," and ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming#indication_type-enum"},"indication_type")," can be set under video settings. (Until now, you could do that only from the OW client UI)."),(0,i.mdx)("li",{parentName:"ul"},'HTTPS - "Referrers", "Origins", and "AncestorsOrigin" should now all be using HTTPS instead of HTTP.')),(0,i.mdx)("h3",{id:"game-events-1"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"PUBG Lite game events",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New supported game"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/legends-of-runeterra"},"Legends of Runeterra game events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New supported game"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/world-of-warcraft"},"World of Warcraft game events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New supported game"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/rocket-league"},"Rocket League game events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New info updates:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"server_info"),(0,i.mdx)("li",{parentName:"ul"},"mutator_settings"),(0,i.mdx)("li",{parentName:"ul"},"arena")))))))}c.isMDXComponent=!0}}]);