"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3729],{14137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),i=r(63366),a=(r(67294),r(14137)),o=["components"],s={id:"security",title:"SQL-based ingestion security",sidebar_label:"Security"},l=void 0,u={unversionedId:"multi-stage-query/security",id:"multi-stage-query/security",title:"SQL-based ingestion security",description:"\x3c!--",source:"@site/docs/31.0.0/multi-stage-query/security.md",sourceDirName:"multi-stage-query",slug:"/multi-stage-query/security",permalink:"/docs/31.0.0/multi-stage-query/security",draft:!1,tags:[],version:"current",frontMatter:{id:"security",title:"SQL-based ingestion security",sidebar_label:"Security"},sidebar:"docs",previous:{title:"Key concepts",permalink:"/docs/31.0.0/multi-stage-query/concepts"},next:{title:"Examples",permalink:"/docs/31.0.0/multi-stage-query/examples"}},c={},d=[{value:"Permissions for durable storage",id:"permissions-for-durable-storage",level:2},{value:"S3",id:"s3",level:3},{value:"Azure",id:"azure",level:3}],p={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/"},(0,a.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,a.kt)("p",null,"All authenticated users can use the multi-stage query task engine (MSQ task engine) through the UI and API if the\nextension is loaded. However, without additional permissions, users are not able to issue queries that read or write\nDruid datasources or external data. The permission needed depends on what the user is trying to do."),(0,a.kt)("p",null,"To submit a query:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SELECT from a Druid datasource requires the READ DATASOURCE permission on that datasource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/multi-stage-query/reference#insert"},"INSERT")," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/multi-stage-query/reference#replace"},"REPLACE")," into a Druid datasource requires the WRITE DATASOURCE\npermission on that datasource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/31.0.0/multi-stage-query/reference#extern-function"},"EXTERN"),' and the input-source-specific table functions require READ permission on a\nresource named "EXTERNAL" with type "EXTERNAL". Users without the correct\npermission encounter a 403 error when trying to run queries that include ',(0,a.kt)("inlineCode",{parentName:"li"},"EXTERN"),".")),(0,a.kt)("p",null,"Once a query is submitted, it executes as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/concepts#execution-flow"},(0,a.kt)("inlineCode",{parentName:"a"},"query_controller"))," task. Query tasks that\nusers submit to the MSQ task engine are Overlord tasks, so they follow the Overlord's security model. This means that\nusers with access to the Overlord API can perform some actions even if they didn't submit the query, including\nretrieving status or canceling a query. For more information about the Overlord API and the task API, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/31.0.0/api-reference/sql-ingestion-api"},"APIs for\nSQL-based ingestion"),". "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," Keep in mind that any user with access to Overlord APIs can submit ",(0,a.kt)("inlineCode",{parentName:"p"},"query_controller")," tasks with only the WRITE DATASOURCE permission.")),(0,a.kt)("p",null,"Depending on what a user is trying to do, they might also need the following permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INSERT")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"REPLACE")," queries: Users must have DATASOURCE READ permission on the output datasource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECT")," queries: Users must have READ permission on the ",(0,a.kt)("inlineCode",{parentName:"li"},"__query_select")," datasource, which is a stub datasource that gets created.")),(0,a.kt)("h2",{id:"permissions-for-durable-storage"},"Permissions for durable storage"),(0,a.kt)("p",null,"The MSQ task engine can use Amazon S3 or Azure Blog Storage to store intermediate files when running queries. To upload, read, move and delete these intermediate files, the MSQ task engine requires certain permissions specific to the storage provider. "),(0,a.kt)("h3",{id:"s3"},"S3"),(0,a.kt)("p",null,"The MSQ task engine needs the following permissions for pushing,  fetching, and removing intermediate stage results to and from S3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3:GetObject")," to retrieve files. Note that ",(0,a.kt)("inlineCode",{parentName:"li"},"GetObject")," also requires read permission on the object that gets retrieved. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3:PutObject")," to upload files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3:AbortMultipartUpload")," to cancel the upload of files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3:DeleteObject")," to delete files when they're no longer needed. ")),(0,a.kt)("h3",{id:"azure"},"Azure"),(0,a.kt)("p",null,"The MSQ task engine needs the following permissions for pushing, fetching, and removing intermediate stage results to and from Azure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read")," to read and list files in durable storage "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write")," to write files in durable storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft.Storage/storageAccounts/blobServices/containers/blobs/add/action")," to create files in durable storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete")," to delete files when they're no longer needed.")))}f.isMDXComponent=!0}}]);