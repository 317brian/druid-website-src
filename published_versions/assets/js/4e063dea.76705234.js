"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5919],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(58168),r=n(98587),o=(n(96540),n(15680)),s=["components"],i={id:"datasketches-extension",title:"DataSketches extension"},c=void 0,l={unversionedId:"development/extensions-core/datasketches-extension",id:"development/extensions-core/datasketches-extension",title:"DataSketches extension",description:"\x3c!--",source:"@site/docs/29.0.0/development/extensions-core/datasketches-extension.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/datasketches-extension",permalink:"/docs/29.0.0/development/extensions-core/datasketches-extension",draft:!1,tags:[],version:"current",frontMatter:{id:"datasketches-extension",title:"DataSketches extension"}},p={},u=[],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,r.A)(e,s);return(0,o.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Apache Druid aggregators based on ",(0,o.yg)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library. Sketches are data structures implementing approximate streaming mergeable algorithms. Sketches can be ingested from the outside of Druid or built from raw data at ingestion time. Sketches can be stored in Druid segments as additive metrics."),(0,o.yg)("p",null,"To use the datasketches aggregators, make sure you ",(0,o.yg)("a",{parentName:"p",href:"/docs/29.0.0/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-datasketches"]\n')),(0,o.yg)("p",null,"The following modules are available:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/29.0.0/development/extensions-core/datasketches-theta"},"Theta sketch")," - approximate distinct counting with set operations (union, intersection and set difference)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/29.0.0/development/extensions-core/datasketches-tuple"},"Tuple sketch")," - extension of Theta sketch to support values associated with distinct keys (arrays of numeric values in this specialized implementation)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/29.0.0/development/extensions-core/datasketches-quantiles"},"Quantiles sketch")," - approximate distribution of comparable values to obtain ranks, quantiles and histograms. This is a specialized implementation for numeric values."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/29.0.0/development/extensions-core/datasketches-kll"},"KLL Quantiles sketch")," - approximate distribution of comparable values to obtain ranks, quantiles and histograms. This is a specialized implementation for numeric values. This is a more advanced algorithm compared to the classic quantiles above, sketches are more compact for the same accuracy, or more accurate for the same size."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/29.0.0/development/extensions-core/datasketches-hll"},"HLL sketch")," - approximate distinct counting using very compact HLL sketch.")))}h.isMDXComponent=!0}}]);