"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5418],{14137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(14137)),i=["components"],l={id:"azure",title:"Microsoft Azure"},u=void 0,d={unversionedId:"development/extensions-core/azure",id:"development/extensions-core/azure",title:"Microsoft Azure",description:"\x3c!--",source:"@site/docs/31.0.0/development/extensions-core/azure.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/azure",permalink:"/docs/31.0.0/development/extensions-core/azure",draft:!1,tags:[],version:"current",frontMatter:{id:"azure",title:"Microsoft Azure"}},s={},p=[{value:"Azure extension",id:"azure-extension",level:2},{value:"Ingest data from Azure",id:"ingest-data-from-azure",level:3},{value:"Store segments in Azure",id:"store-segments-in-azure",level:3},{value:"Configure location",id:"configure-location",level:4},{value:"Configure authentication",id:"configure-authentication",level:4},{value:"Persist task logs in Azure",id:"persist-task-logs-in-azure",level:3}],m={toc:p},c="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"azure-extension"},"Azure extension"),(0,o.kt)("p",null,"This extension allows you to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ingest-data-from-azure"},"Ingest data")," from objects stored in Azure Blob Storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#store-segments-in-azure"},"Write segments")," to Azure Blob Storage for deep storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#persist-task-logs-in-azure"},"Persist task logs")," to Azure Blob Storage for long-term storage.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use this Apache Druid extension, ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-azure-extensions")," in the extensions load list.")),(0,o.kt)("h3",{id:"ingest-data-from-azure"},"Ingest data from Azure"),(0,o.kt)("p",null,"Ingest data using either ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/"},"MSQ")," or a native batch ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/native-batch"},"parallel task")," with an ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/ingestion/input-sources#azure-input-source"},"Azure input source")," (",(0,o.kt)("inlineCode",{parentName:"p"},"azureStorage"),") to read objects directly from Azure Blob Storage."),(0,o.kt)("h3",{id:"store-segments-in-azure"},"Store segments in Azure"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use Azure for deep storage, set ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.storage.type=azure"),".")),(0,o.kt)("h4",{id:"configure-location"},"Configure location"),(0,o.kt)("p",null,"Configure where to store segments using the following properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.account")),(0,o.kt)("td",{parentName:"tr",align:null},"The Azure Storage account name."),(0,o.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.container")),(0,o.kt)("td",{parentName:"tr",align:null},"The Azure Storage container name."),(0,o.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.prefix")),(0,o.kt)("td",{parentName:"tr",align:null},"A prefix string that will be prepended to the blob names for the segments published."),(0,o.kt)("td",{parentName:"tr",align:null},'""')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.maxTries")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of tries before canceling an Azure operation."),(0,o.kt)("td",{parentName:"tr",align:null},"3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.protocol")),(0,o.kt)("td",{parentName:"tr",align:null},"The protocol to use to connect to the Azure Storage account. Either ",(0,o.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"https"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.storageAccountEndpointSuffix")),(0,o.kt)("td",{parentName:"tr",align:null},"The Storage account endpoint to use. Override the default value to connect to ",(0,o.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/azure-government/documentation-government-get-started-connect-to-storage#getting-started-with-storage-api"},"Azure Government")," or storage accounts with ",(0,o.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview#azure-dns-zone-endpoints-preview"},"Azure DNS zone endpoints"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"Do ",(0,o.kt)("em",{parentName:"td"},"not")," include the storage account name prefix in this config value.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Examples: ",(0,o.kt)("inlineCode",{parentName:"td"},"ABCD1234.blob.storage.azure.net"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"blob.core.usgovcloudapi.net"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"blob.core.windows.net"))))),(0,o.kt)("h4",{id:"configure-authentication"},"Configure authentication"),(0,o.kt)("p",null,"Authenticate access to Azure Blob Storage using one of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview"},"SAS token")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key"},"Shared Key")),(0,o.kt)("li",{parentName:"ul"},"Default Azure credentials chain (",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/java/api/overview/azure/identity-readme#defaultazurecredential"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultAzureCredential")),").")),(0,o.kt)("p",null,"Configure authentication using the following properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.sharedAccessStorageToken")),(0,o.kt)("td",{parentName:"tr",align:null},"The SAS (Shared Storage Access) token."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.key")),(0,o.kt)("td",{parentName:"tr",align:null},"The Shared Key."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.useAzureCredentialsChain")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", use ",(0,o.kt)("inlineCode",{parentName:"td"},"DefaultAzureCredential")," for authentication."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.azure.managedIdentityClientId")),(0,o.kt)("td",{parentName:"tr",align:null},"To use managed identity authentication in the ",(0,o.kt)("inlineCode",{parentName:"td"},"DefaultAzureCredential"),", set ",(0,o.kt)("inlineCode",{parentName:"td"},"useAzureCredentialsChain")," to ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," and provide the client ID here."),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"persist-task-logs-in-azure"},"Persist task logs in Azure"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To persist task logs in Azure Blob Storage, set ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.logs.type=azure"),".")),(0,o.kt)("p",null,"Druid stores task logs using the storage account and authentication method configured for storing segments. Use the following configuration to set up where to store the task logs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.indexer.logs.container")),(0,o.kt)("td",{parentName:"tr",align:null},"The Azure Blob Store container to write logs to."),(0,o.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"druid.indexer.logs.prefix")),(0,o.kt)("td",{parentName:"tr",align:null},"The path to prepend to logs."),(0,o.kt)("td",{parentName:"tr",align:null},"Must be set.")))),(0,o.kt)("p",null,"For general options regarding task retention, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/configuration/#log-retention-policy"},"Log retention policy"),"."))}g.isMDXComponent=!0}}]);