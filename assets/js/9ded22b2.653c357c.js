"use strict";(self.webpackChunkts_generics=self.webpackChunkts_generics||[]).push([[850],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>N});var n=t(7294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=i(t),k=p,N=m["".concat(l,".").concat(k)]||m[k]||c[k]||s;return t?n.createElement(N,r(r({ref:a},d),{},{components:t})):n.createElement(N,r({ref:a},d))}));function N(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var s=t.length,r=new Array(s);r[0]=k;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:p,r[1]=o;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2798:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=t(7462),p=(t(7294),t(3905));const s={sidebar_position:1,tags:["easy","built-in"]},r="Pick",o={unversionedId:"easy/pick",id:"easy/pick",title:"Pick",description:"Implement the built-in Pick generic without using it.",source:"@site/docs/easy/pick.md",sourceDirName:"easy",slug:"/easy/pick",permalink:"/ts-generics/easy/pick",draft:!1,editUrl:"https://github.com/rawat9/ts-generics/tree/main/docs/easy/pick.md",tags:[{label:"easy",permalink:"/ts-generics/tags/easy"},{label:"built-in",permalink:"/ts-generics/tags/built-in"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["easy","built-in"]},sidebar:"tutorialSidebar",previous:{title:"Easy",permalink:"/ts-generics/category/easy"},next:{title:"Readonly",permalink:"/ts-generics/easy/readonly"}},l={},i=[],d={toc:i},m="wrapper";function c(e){let{components:a,...t}=e;return(0,p.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pick"},"Pick"),(0,p.kt)("p",null,"Implement the built-in ",(0,p.kt)("inlineCode",{parentName:"p"},"Pick<T, K>")," generic without using it.\nConstructs a type by picking the set of properties ",(0,p.kt)("inlineCode",{parentName:"p"},"K")," from ",(0,p.kt)("inlineCode",{parentName:"p"},"T"),"\nFor example:"),(0,p.kt)("div",{className:"shiki-twoslash-fragment"},(0,p.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"interface"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.description: string"},"description")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"boolean")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'type TodoPreview = MyPick<Todo, "title" | "completed">'},"TodoPreview")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-err",{parentName:"span"},(0,p.kt)("data-lsp",{parentName:"data-err",lsp:"type MyPick = /*unresolved*/ any"},"MyPick"))),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'title'"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'completed'"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("span",{parentName:"code",className:"error"},(0,p.kt)("span",{parentName:"span"},"Cannot find name 'MyPick'. Did you mean 'Pick'?"),(0,p.kt)("span",{parentName:"span",className:"code"},"2552")),(0,p.kt)("span",{parentName:"code",className:"error-behind"},"Cannot find name 'MyPick'. Did you mean 'Pick'?"),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'const todo: MyPick<Todo, "title" | "completed">'},"todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'type TodoPreview = MyPick<Todo, "title" | "completed">'},"TodoPreview")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'Clean room'"),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"false"),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,p.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"interface"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.description: string"},"description")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"boolean")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:'type TodoPreview = MyPick<Todo, "title" | "completed">'},"TodoPreview")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-err",{parentName:"span"},(0,p.kt)("data-lsp",{parentName:"data-err",lsp:"type MyPick = /*unresolved*/ any"},"MyPick"),"<",(0,p.kt)("data-lsp",{parentName:"data-err",lsp:"interface Todo"},"Todo"))),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'title'"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"|"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'completed'"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,p.kt)("span",{parentName:"code",className:"error"},(0,p.kt)("span",{parentName:"span"},"Cannot find name 'MyPick'. Did you mean 'Pick'?"),(0,p.kt)("span",{parentName:"span",className:"code"},"2552")),(0,p.kt)("span",{parentName:"code",className:"error-behind"},"Cannot find name 'MyPick'. Did you mean 'Pick'?"),(0,p.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:'const todo: MyPick<Todo, "title" | "completed">'},"todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:'type TodoPreview = MyPick<Todo, "title" | "completed">'},"TodoPreview")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'Clean room'"),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},",")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"false"),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},",")),(0,p.kt)("div",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,p.kt)("details",null,(0,p.kt)("summary",null,"Solution \u2705"),(0,p.kt)("div",{className:"shiki-twoslash-fragment"},(0,p.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"interface"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.description: string"},"description")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"boolean")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line highlight"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }"},"MyPick")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) K in type MyPick<T, K extends keyof T>"},"K")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"extends"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"keyof"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"> "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ["),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) P"},"P")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"in"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) K in type MyPick<T, K extends keyof T>"},"K")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"] "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"["),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) P"},"P")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"] }")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"type TodoPreview = {\n    title: string;\n    completed: boolean;\n}"},"TodoPreview")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }"},"MyPick")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'title'"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'completed'"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const todo: TodoPreview"},"todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"type TodoPreview = {\n    title: string;\n    completed: boolean;\n}"},"TodoPreview")),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'Clean room'"),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"false"),(0,p.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,p.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,p.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,p.kt)("div",{parentName:"pre",className:"code-container"},(0,p.kt)("code",{parentName:"div"},(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"interface"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")," {")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.description: string"},"description")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"string")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) Todo.completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"boolean")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line highlight"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }"},"MyPick"),"<",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T")),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) K in type MyPick<T, K extends keyof T>"},"K")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"extends"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"keyof"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T"),"> "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," { [",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) P"},"P")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"in"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) K in type MyPick<T, K extends keyof T>"},"K"),"] "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) T in type MyPick<T, K extends keyof T>"},"T"),"[",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(type parameter) P"},"P"),"] }")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"type"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"type TodoPreview = {\n    title: string;\n    completed: boolean;\n}"},"TodoPreview")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }"},"MyPick"),"<",(0,p.kt)("data-lsp",{parentName:"span",lsp:"interface Todo"},"Todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},","),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'title'"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"|"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'completed'"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,p.kt)("div",{parentName:"code",className:"line dim"},"\xa0"),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,p.kt)("data-lsp",{parentName:"span",lsp:"const todo: TodoPreview"},"todo")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"type TodoPreview = {\n    title: string;\n    completed: boolean;\n}"},"TodoPreview")," "),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'Clean room'"),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},",")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,p.kt)("data-lsp",{parentName:"span",lsp:"(property) completed: boolean"},"completed")),(0,p.kt)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,p.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"false"),(0,p.kt)("span",{parentName:"div",style:{color:"#BBBBBB"}},",")),(0,p.kt)("div",{parentName:"code",className:"line dim"},(0,p.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"}"))))))))}c.isMDXComponent=!0}}]);