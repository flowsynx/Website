"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[6630],{7750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var i=s(4848),l=s(8453);const t={slug:"flowsynx-v0.2.0-is-now-available",title:"FlowSynx v0.2.0 is now available",authors:"maintainers",tags:["Release"]},o=void 0,r={permalink:"/blog/flowsynx-v0.2.0-is-now-available",source:"@site/blog/2024-06-19-introducing-the-flowsynx-blog copy.md",title:"FlowSynx v0.2.0 is now available",description:"We are super excited to announce the latest release of FlowSynx, v0.2.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.2.0.",date:"2024-06-19T00:00:00.000Z",formattedDate:"June 19, 2024",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:.94,hasTruncateMarker:!1,authors:[{name:"Maintainers",title:"FlowSynx project maintainers",imageURL:"/img/maintainer.png",key:"maintainers"}],frontMatter:{slug:"flowsynx-v0.2.0-is-now-available",title:"FlowSynx v0.2.0 is now available",authors:"maintainers",tags:["Release"]},unlisted:!1,nextItem:{title:"Introducing the FlowSynx blog",permalink:"/blog/introducing-the-flowsynx-blog"}},a={authorsImageUrls:[void 0]},h=[{value:"Release highlights",id:"release-highlights",level:2},{value:"FlowSynx",id:"flowsynx",level:3},{value:"FlowSynx CLI",id:"flowsynx-cli",level:3},{value:"FlowSynx Dashboard",id:"flowsynx-dashboard",level:3},{value:"FlowSynx C# SDK",id:"flowsynx-c-sdk",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We are super excited to announce the latest release of FlowSynx, v0.2.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.2.0."}),"\n",(0,i.jsx)(n.h2,{id:"release-highlights",children:"Release highlights"}),"\n",(0,i.jsxs)(n.p,{children:["If you\u2019re new to FlowSynx, familiarize yourself by visiting the ",(0,i.jsx)(n.a,{href:"/docs/category/getting-started",children:"getting started"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"flowsynx",children:"FlowSynx"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ADDED] Add Microsoft Azure Blob storage plugin ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/1",children:"1"})]}),"\n",(0,i.jsxs)(n.li,{children:["[ADDED] Add OpenAPI specifications to the flowsynx ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/4",children:"4"})]}),"\n",(0,i.jsx)(n.li,{children:"[ADDED] Pushing FlowSynx to the Docker hub"}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Refactoring ",(0,i.jsx)(n.strong,{children:"SpecificationsParser"})," class in order to check require member's value ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/7",children:"7"})]}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Change throw exception to logging message for DeleteAsync method in plugins #11 ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/12",children:"12"})]}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Add ContentType to the ReadAsync API endpoint ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/13",children:"13"})]}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Make CopyFile, CopyDirectory, MoveFile, and  MoveDirectory methods in EntityCopier and EntityMover as asynchronous ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/14",children:"14"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/15",children:"15"})]}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Fix issue regarding FlowSynx build and publish workflow action ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/16",children:"16"})]}),"\n",(0,i.jsxs)(n.li,{children:["[FIXED] Fix warning messages in FlowSynx.Plugin.Storage.Azure.Blobs plugin ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/flowsynx/issues/18",children:"18"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"flowsynx-cli",children:"FlowSynx CLI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ADDED] Add OpenApi option to the run arguments for running FlowSynx ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/cli/issues/3",children:"3"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"flowsynx-dashboard",children:"FlowSynx Dashboard"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[ADDED] Pushing FlowSynx Dashboard to the Docker hub"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"flowsynx-c-sdk",children:"FlowSynx C# SDK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[ADDED] Adding License to the SDK NuGet package ",(0,i.jsx)(n.a,{href:"https://github.com/flowsynx/csharp-sdk/issues/1",children:"1"})]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const l={},t=i.createContext(l);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);