"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2337],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return o},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var d=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d])}return e},l.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,d,n=function(e,t){if(null==e)return{};var a,d,n={},l=Object.keys(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=d.createContext({}),s=function(e){return function(t){var a=p(t.components);return d.createElement(e,l({},t,{components:a}))}},p=function(e){var t=d.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return d.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},x=d.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,x=s["".concat(r,".").concat(u)]||s[u]||c[u]||l;return a?d.createElement(x,i(i({ref:t},o),{},{components:a})):d.createElement(x,i({ref:t},o))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=x;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var o=2;o<l;o++)r[o]=a[o];return d.createElement.apply(null,r)}return d.createElement.apply(null,a)}x.displayName="MDXCreateElement"},43155:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var d=a(87462),n=a(63366),l=(a(67294),a(3905)),r=["components"],i={id:"videos",image:"/img/embed/api-docs.jpg",title:"overwolf.media.videos API"},m=void 0,o={unversionedId:"api/media/videos",id:"api/media/videos",title:"overwolf.media.videos API",description:"Use this API to create video composition, delete video files, and get details of video files that were created by the app.",source:"@site/pages/docs/api/media/videos.mdx",sourceDirName:"api/media",slug:"/api/media/videos",permalink:"/api/media/videos",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/media/videos.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"videos",image:"/img/embed/api-docs.jpg",title:"overwolf.media.videos API",sidebar_position:0,sidebar_label:"Videos"},sidebar:"api",previous:{title:"Media",permalink:"/api/media/"},next:{title:"Replays",permalink:"/api/media/replays/"}},s={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"createVideoComposition(sourceVideoUrl, segments, callback)",id:"createvideocompositionsourcevideourl-segments-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"<code>segments</code> notes",id:"segments-notes",level:4},{value:"createVideoCompositionFiles(files, outputFile, callback)",id:"createvideocompositionfilesfiles-outputfile-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112",level:4},{value:"getVideos(callback)",id:"getvideoscallback",level:2},{value:"Version added: 0.89",id:"version-added-089",level:4},{value:"getVideosSize(callback)",id:"getvideossizecallback",level:2},{value:"Version added: 0.91",id:"version-added-091",level:4},{value:"deleteOldVideos(keepNewestXGbs, callback)",id:"deleteoldvideoskeepnewestxgbs-callback",level:2},{value:"Version added: 0.89",id:"version-added-089-1",level:4},{value:"deleteVideo(videoUrl, callback)",id:"deletevideovideourl-callback",level:2},{value:"Version added: 0.89",id:"version-added-089-2",level:4},{value:"addWatermark(sourceVideoUrl, watermarkUrl, watermarkParams, callback)",id:"addwatermarksourcevideourl-watermarkurl-watermarkparams-callback",level:2},{value:"Version added: 0.157",id:"version-added-0157",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"WatermarkParams Object",id:"watermarkparams-object",level:2},{value:"Version added: 0.157",id:"version-added-0157-1",level:4},{value:"WatermarkLocation enum",id:"watermarklocation-enum",level:2},{value:"Version added: 0.157",id:"version-added-0157-2",level:4},{value:"VideoCompositionSegment Object",id:"videocompositionsegment-object",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"GetVideosResult Object",id:"getvideosresult-object",level:2},{value:"Version added: 0.89",id:"version-added-089-3",level:4},{value:"GetVideosSizeResult Object",id:"getvideossizeresult-object",level:2},{value:"Version added: 0.91",id:"version-added-091-1",level:4}],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.mdx)("wrapper",(0,d.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API to create video composition, delete video files, and get details of video files that were created by the app."),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Please read all the info about video capture usage and options on our ",(0,l.mdx)("a",{parentName:"p",href:"/topics/best-practices/video-capture"},"video capture best practices")," guide."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#createvideocompositionsourcevideourl-segments-callback"},"overwolf.media.videos.createVideoComposition()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#createvideocompositionfilesfiles-outputfile-callback"},"overwolf.media.videos.createVideoCompositionFiles()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getvideoscallback"},"overwolf.media.videos.getVideos()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getvideossizecallback"},"overwolf.media.videos.getVideosSize()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#deleteoldvideoskeepnewestxgbs-callback"},"overwolf.media.videos.deleteOldVideos()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#deletevideovideourl-callback"},"overwolf.media.videos.deleteVideo()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#addwatermarksourcevideourl-watermarkurl-watermarkparams-callback"},"overwolf.media.videos.addWatermark ()"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#videocompositionsegment-object"},"VideoCompositionSegment")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#watermarkparams-object"},"WatermarkParams")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#watermarklocation-enum"},"WatermarkLocation")," Enum"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getvideosresult-object"},"overwolf.media.GetVideosResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getvideossizeresult-object"},"overwolf.media.GetVideosSizeResult")," Object")),(0,l.mdx)("h2",{id:"createvideocompositionsourcevideourl-segments-callback"},"createVideoComposition(sourceVideoUrl, segments, callback)"),(0,l.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Creates a compilation video out of a source video and a list of segments. Listen to the event to determine when the compilation video is ready.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sourceVideoUrl"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The url of the source video in an ",(0,l.mdx)("inlineCode",{parentName:"td"},"overwolf://media")," form")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"segments"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#videocompositionsegment-object"},"VideoCompositionSegment[]")),(0,l.mdx)("td",{parentName:"tr",align:null},"A JSON containing a list of segments. See ",(0,l.mdx)("a",{parentName:"td",href:"#segments-notes"},"notes below"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the target video")))),(0,l.mdx)("h4",{id:"segments-notes"},(0,l.mdx)("inlineCode",{parentName:"h4"},"segments")," notes"),(0,l.mdx)("p",null,"The JSON containing a list of segments, each segment has a start time and an end time in milliseconds. The segments must be sorted in acsending order. Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "segments": [\n        { "startTime": 2000, "endTime": 4000 },\n        { "startTime": 8000, "endTime": 10000 },\n        { "startTime": 14000, "endTime": 18000 }\n    ]\n}\n')),(0,l.mdx)("h2",{id:"createvideocompositionfilesfiles-outputfile-callback"},"createVideoCompositionFiles(files, outputFile, callback)"),(0,l.mdx)("h4",{id:"version-added-0112"},"Version added: 0.112"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Creates a compilation video out of a list of video files.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"files"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"List of video files (the url of each video is  in the form of ",(0,l.mdx)("inlineCode",{parentName:"td"},"overwolf://media or file://"),")")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"outputFile"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The name of the output video file")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the output video")))),(0,l.mdx)("h2",{id:"getvideoscallback"},"getVideos(callback)"),(0,l.mdx)("h4",{id:"version-added-089"},"Version added: 0.89"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Gets a list of all of the videos created by this app.")),(0,l.mdx)("p",null,"Note that getVideos() returns only the files located in the current OW video folder, without files from different/past locations, if they exist. "),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#getvideosresult-object"},"(Result: GetVideosResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the status of the request")))),(0,l.mdx)("h2",{id:"getvideossizecallback"},"getVideosSize(callback)"),(0,l.mdx)("h4",{id:"version-added-091"},"Version added: 0.91"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns the total size of the video files created by this app in gigabytes.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#getvideossizeresult-object"},"(Result: GetVideosSizeResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the status of the request  and the videos size")))),(0,l.mdx)("h2",{id:"deleteoldvideoskeepnewestxgbs-callback"},"deleteOldVideos(keepNewestXGbs, callback)"),(0,l.mdx)("h4",{id:"version-added-089-1"},"Version added: 0.89"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Deletes all videos created by this app with an option to keep the newest X GBs (use with care).")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"keepNewestXGbs"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Keep the newest X GBs of videos. Pass 0 to delete all videos")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"To delete old gifs you can use ",(0,l.mdx)("a",{parentName:"p",href:"../media#deleteoldgifskeepnewestxgbs-callback"},"overwolf.media.videos.deleteOldGifs()"),", and to delete old screenshots you can use ",(0,l.mdx)("a",{parentName:"p",href:"../extensions/io#deletespace-path-callback"},"overwolf.extensions.io.delete()"),"."))),(0,l.mdx)("h2",{id:"deletevideovideourl-callback"},"deleteVideo(videoUrl, callback)"),(0,l.mdx)("h4",{id:"version-added-089-2"},"Version added: 0.89"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Deletes a specific video created by this app.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"videoUrl"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The Overwolf URL of the video to delete")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("p",null,"NOTE: If you are trying to delete a video which was already loaded into a video DOM element, deletion will fail since the file is locked by the Overwolf process. To avoid this error, set the video element's source to an empty string before trying to delete. See example below:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const url = "overwolf://media/videos/video.mp4"; // Sample URL\nconst videoElement = document.querySelector("#my-video");\nif (!videoElement.paused) { // Optional, pause the video before deleting\n  videoElement.pause();\n}\nvideoElement.src = ""; // Set the video element source to an empty string\noverwolf.media.videos.deleteVideo(url);\n')),(0,l.mdx)("h2",{id:"addwatermarksourcevideourl-watermarkurl-watermarkparams-callback"},"addWatermark(sourceVideoUrl, watermarkUrl, watermarkParams, callback)"),(0,l.mdx)("h4",{id:"version-added-0157"},"Version added: 0.157"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Adds a video/image watermark to a video.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sourceVideoUrl"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The url of the source video in an overwolf://media form.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"watermarkUrl"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The url of the watermark video/image. Supports absolute/local path to a file in the extension directory (or an overwolf://media form).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"watermarkParams"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#watermarkparams-object"},"WatermarkParams")," object"),(0,l.mdx)("td",{parentName:"tr",align:null},"use this object to mark the watermark")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the output video")))),(0,l.mdx)("h4",{id:"usage-example"},"Usage example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"const sourceVideoUrl = 'overwolf://media/videos/Settings/test.mp4'; // 'overwolf://media' scheme\nconst watermarkUrl = 'giphy.gif'; // relative path to a file in the extension directory\nconst params = {\n    location: overwolf.media.videos.enums.WatermarkLocation.BottomLeft,\n        scaleHeight: 300\n};\n\noverwolf.media.videos.addWatermark(sourceVideoUrl ,watermarkUrl, params ,console.log);\n")),(0,l.mdx)("h2",{id:"watermarkparams-object"},"WatermarkParams Object"),(0,l.mdx)("h4",{id:"version-added-0157-1"},"Version added: 0.157"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"A helper structure to describe watermark parameters.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"startTime"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Segment start time (in milliseconds)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"endTime"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Segment end time (in milliseconds)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"location"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#watermarklocation-enum"},"WatermarkLocation")," enum"),(0,l.mdx)("td",{parentName:"tr",align:null},"The location of the watermark (in pixles)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"scaleHeight"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"scale height in pixels")))),(0,l.mdx)("h2",{id:"watermarklocation-enum"},"WatermarkLocation enum"),(0,l.mdx)("h4",{id:"version-added-0157-2"},"Version added: 0.157"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Watermark location to use.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"topLeft"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"topCenter"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"topRight"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"midLeft"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"center"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"midRight"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"bottomLeft"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"bottomCenter"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"bottomRight"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"videocompositionsegment-object"},"VideoCompositionSegment Object"),(0,l.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"A helper structure to describe video segments.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"startTime"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Segment start time (in milliseconds)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"endTime"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Segment end time (in milliseconds)")))),(0,l.mdx)("h2",{id:"getvideosresult-object"},"GetVideosResult Object"),(0,l.mdx)("h4",{id:"version-added-089-3"},"Version added: 0.89"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for get videos result.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"videos"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"getvideossizeresult-object"},"GetVideosSizeResult Object"),(0,l.mdx)("h4",{id:"version-added-091-1"},"Version added: 0.91"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for get videos size result.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"totalSizeGbs"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);