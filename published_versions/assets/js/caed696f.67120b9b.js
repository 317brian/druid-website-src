"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),g=i,c=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return t?a.createElement(c,r(r({ref:n},p),{},{components:t})):a.createElement(c,r({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},20519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],s={id:"multi-value-dimensions",title:"Multi-value dimensions"},o=void 0,u={unversionedId:"querying/multi-value-dimensions",id:"querying/multi-value-dimensions",title:"Multi-value dimensions",description:"\x3c!--",source:"@site/docs/latest/querying/multi-value-dimensions.md",sourceDirName:"querying",slug:"/querying/multi-value-dimensions",permalink:"/docs/latest/querying/multi-value-dimensions",draft:!1,tags:[],version:"current",frontMatter:{id:"multi-value-dimensions",title:"Multi-value dimensions"},sidebar:"docs",previous:{title:"Apache Kafka Lookups",permalink:"/docs/latest/querying/kafka-extraction-namespace"},next:{title:"Arrays",permalink:"/docs/latest/querying/arrays"}},p={},m=[{value:"Ingestion",id:"ingestion",level:2},{value:"Native batch and streaming ingestion",id:"native-batch-and-streaming-ingestion",level:3},{value:"SQL-based ingestion",id:"sql-based-ingestion",level:3},{value:"SQL-based ingestion with rollup",id:"sql-based-ingestion-with-rollup",level:3},{value:"Querying multi-value dimensions",id:"querying-multi-value-dimensions",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Example: SQL grouping query with no filtering",id:"example-sql-grouping-query-with-no-filtering",level:4},{value:"Example: SQL grouping query with a filter",id:"example-sql-grouping-query-with-a-filter",level:4},{value:"Example: native GroupBy query with no filtering",id:"example-native-groupby-query-with-no-filtering",level:4},{value:"Example: native GroupBy query with a selector query filter",id:"example-native-groupby-query-with-a-selector-query-filter",level:4},{value:"Example: native GroupBy query with selector query and dimension filters",id:"example-native-groupby-query-with-selector-query-and-dimension-filters",level:4},{value:"Disable GroupBy on multi-value columns",id:"disable-groupby-on-multi-value-columns",level:2},{value:"Differences between arrays and multi-value dimensions",id:"differences-between-arrays-and-multi-value-dimensions",level:2}],d={toc:m},g="wrapper";function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)(g,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Apache Druid supports "multi-value" string dimensions. Multi-value string dimensions result from input fields that contain an\narray of values instead of a single value, such as the ',(0,l.kt)("inlineCode",{parentName:"p"},"tags")," values in the following JSON array example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"timestamp": "2011-01-12T00:00:00.000Z", "tags": ["t1","t2","t3"]} \n')),(0,l.kt)("p",null,"It is important to be aware that multi-value dimensions are distinct from ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/arrays"},"array types"),". While array types behave like standard SQL arrays, multi-value dimensions do not. This document describes the behavior of multi-value dimensions, and some additional details can be found in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-data-types#multi-value-strings-behavior"},"SQL data type documentation"),"."),(0,l.kt)("p",null,"This document describes inserting, filtering, and grouping behavior for multi-value dimensions. For information about the internal representation of multi-value dimensions, see\n",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/design/segments#multi-value-columns"},"segments documentation"),". Examples in this document\nare in the form of both ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"SQL")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native Druid queries"),". Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"Druid SQL documentation")," for details\nabout the functions available for using multi-value string dimensions in SQL."),(0,l.kt)("p",null,"The following sections describe inserting, filtering, and grouping behavior based on the following example data, which includes a multi-value dimension, ",(0,l.kt)("inlineCode",{parentName:"p"},"tags"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"timestamp": "2011-01-12T00:00:00.000Z", "label": "row1", "tags": ["t1","t2","t3"]}\n{"timestamp": "2011-01-13T00:00:00.000Z", "label": "row2", "tags": ["t3","t4","t5"]}\n{"timestamp": "2011-01-14T00:00:00.000Z", "label": "row3", "tags": ["t5","t6","t7"]}\n{"timestamp": "2011-01-14T00:00:00.000Z", "label": "row4", "tags": []}\n')),(0,l.kt)("h2",{id:"ingestion"},"Ingestion"),(0,l.kt)("h3",{id:"native-batch-and-streaming-ingestion"},"Native batch and streaming ingestion"),(0,l.kt)("p",null,"When using native ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"batch")," or streaming ingestion such as with ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kafka-ingestion"},"Apache Kafka"),", the Druid web console data loader can detect multi-value dimensions and configure the ",(0,l.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," accordingly."),(0,l.kt)("p",null,"For TSV or CSV data, you can specify the multi-value delimiters using the ",(0,l.kt)("inlineCode",{parentName:"p"},"listDelimiter")," field in the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputFormat"),". JSON data must be formatted as a JSON array to be ingested as a multi-value dimension. JSON data does not require ",(0,l.kt)("inlineCode",{parentName:"p"},"inputFormat")," configuration."),(0,l.kt)("p",null,"The following shows an example ",(0,l.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," for native ingestion of the data used in this document:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"dimensions": [\n  {\n    "type": "string",\n    "name": "label"\n  },\n  {\n    "type": "string",\n    "name": "tags",\n    "multiValueHandling": "SORTED_ARRAY",\n    "createBitmapIndex": true\n  }\n],\n')),(0,l.kt)("p",null,"By default, Druid sorts values in multi-value dimensions. This behavior is controlled by the ",(0,l.kt)("inlineCode",{parentName:"p"},"SORTED_ARRAY")," value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"multiValueHandling")," field. Alternatively, you can specify multi-value handling as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SORTED_SET"),": results in the removal of duplicate values"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ARRAY"),": retains the original order of the values")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#dimension-objects"},"Dimension Objects")," for information on configuring multi-value handling."),(0,l.kt)("h3",{id:"sql-based-ingestion"},"SQL-based ingestion"),(0,l.kt)("p",null,"Multi-value dimensions can also be inserted with ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/multi-stage-query/"},"SQL-based ingestion"),". The functions ",(0,l.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY_TO_MV")," can assist in converting ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR ARRAY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR ARRAY")," into ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR")," respectively. ",(0,l.kt)("inlineCode",{parentName:"p"},"multiValueHandling")," is not available when using the multi-stage query engine to insert data."),(0,l.kt)("p",null,"For example, to insert the data used in this document:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "mvd_example" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"timestamp\\": \\"2011-01-12T00:00:00.000Z\\", \\"label\\": \\"row1\\", \\"tags\\": [\\"t1\\",\\"t2\\",\\"t3\\"]}\\n{\\"timestamp\\": \\"2011-01-13T00:00:00.000Z\\", \\"label\\": \\"row2\\", \\"tags\\": [\\"t3\\",\\"t4\\",\\"t5\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row3\\", \\"tags\\": [\\"t5\\",\\"t6\\",\\"t7\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row4\\", \\"tags\\": []}"}\',\n      \'{"type":"json"}\',\n      \'[{"name":"timestamp", "type":"STRING"},{"name":"label", "type":"STRING"},{"name":"tags", "type":"ARRAY<STRING>"}]\'\n    )\n  )\n)\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "label",\n  ARRAY_TO_MV("tags") AS "tags"\nFROM "ext"\nPARTITIONED BY DAY\n')),(0,l.kt)("h3",{id:"sql-based-ingestion-with-rollup"},"SQL-based ingestion with rollup"),(0,l.kt)("p",null,"These input arrays can also be grouped prior to converting into a multi-value dimension:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "mvd_example_rollup" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"timestamp\\": \\"2011-01-12T00:00:00.000Z\\", \\"label\\": \\"row1\\", \\"tags\\": [\\"t1\\",\\"t2\\",\\"t3\\"]}\\n{\\"timestamp\\": \\"2011-01-13T00:00:00.000Z\\", \\"label\\": \\"row2\\", \\"tags\\": [\\"t3\\",\\"t4\\",\\"t5\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row3\\", \\"tags\\": [\\"t5\\",\\"t6\\",\\"t7\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row4\\", \\"tags\\": []}"}\',\n      \'{"type":"json"}\',\n      \'[{"name":"timestamp", "type":"STRING"},{"name":"label", "type":"STRING"},{"name":"tags", "type":"ARRAY<STRING>"}]\'\n    )\n  )\n)\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "label",\n  ARRAY_TO_MV("tags") AS "tags",\n  COUNT(*) AS "count"\nFROM "ext"\nGROUP BY 1, 2, "tags"\nPARTITIONED BY DAY\n')),(0,l.kt)("p",null,"Notice that ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY_TO_MV")," is not present in the ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause since we only wish to coerce the type ",(0,l.kt)("em",{parentName:"p"},"after")," grouping."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"EXTERN")," is also able to refer to the ",(0,l.kt)("inlineCode",{parentName:"p"},"tags")," input type as ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR"),", which is also how a query on a Druid table containing a multi-value dimension would specify the type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"tags")," column. If this is the case you must use ",(0,l.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY")," since the multi-stage query engine only supports grouping on multi-value dimensions as arrays. So, they must be coerced first. These arrays must then be coerced back into ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," part of the statement with ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY_TO_MV"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "mvd_example_rollup" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"timestamp\\": \\"2011-01-12T00:00:00.000Z\\", \\"label\\": \\"row1\\", \\"tags\\": [\\"t1\\",\\"t2\\",\\"t3\\"]}\\n{\\"timestamp\\": \\"2011-01-13T00:00:00.000Z\\", \\"label\\": \\"row2\\", \\"tags\\": [\\"t3\\",\\"t4\\",\\"t5\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row3\\", \\"tags\\": [\\"t5\\",\\"t6\\",\\"t7\\"]}\\n{\\"timestamp\\": \\"2011-01-14T00:00:00.000Z\\", \\"label\\": \\"row4\\", \\"tags\\": []}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("timestamp" VARCHAR, "label" VARCHAR, "tags" VARCHAR)\n)\nSELECT\n  TIME_PARSE("timestamp") AS "__time",\n  "label",\n  ARRAY_TO_MV(MV_TO_ARRAY("tags")) AS "tags",\n  COUNT(*) AS "count"\nFROM "ext"\nGROUP BY 1, 2, MV_TO_ARRAY("tags")\nPARTITIONED BY DAY\n')),(0,l.kt)("h2",{id:"querying-multi-value-dimensions"},"Querying multi-value dimensions"),(0,l.kt)("h3",{id:"filtering"},"Filtering"),(0,l.kt)("p",null,"All query types, as well as ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/aggregations#filtered-aggregator"},"filtered aggregators"),", can filter on multi-value\ndimensions. Filters follow these rules on multi-value dimensions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Value filters (like "selector", "bound", and "in") match a row if any of the values of a multi-value dimension match\nthe filter.'),(0,l.kt)("li",{parentName:"ul"},"The Column Comparison filter will match a row if the dimensions have any overlap."),(0,l.kt)("li",{parentName:"ul"},"Value filters that match ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"li"},'""')," (empty string) will match empty cells in a multi-value dimension."),(0,l.kt)("li",{parentName:"ul"},'Logical expression filters behave the same way they do on single-value dimensions: "and" matches a row if all\nunderlying filters match that row; "or" matches a row if any underlying filters match that row; "not" matches a row\nif the underlying filter does not match the row.')),(0,l.kt)("p",null,'The following example illustrates these rules. This query applies an "or" filter to match row1 and row2 of the dataset above, but not row3:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM \"mvd_example_rollup\"\nWHERE tags = 't1' OR tags = 't3'\n")),(0,l.kt)("p",null,"returns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"__time":"2011-01-12T00:00:00.000Z","label":"row1","tags":"[\\"t1\\",\\"t2\\",\\"t3\\"]","count":1}\n{"__time":"2011-01-13T00:00:00.000Z","label":"row2","tags":"[\\"t3\\",\\"t4\\",\\"t5\\"]","count":1}\n')),(0,l.kt)("p",null,'Native queries can also perform filtering that would be considered a "contradiction" in SQL, such as this "and" filter which would match only row1 of the dataset above:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "and",\n  "fields": [\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t1"\n    },\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t3"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"which returns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"__time":"2011-01-12T00:00:00.000Z","label":"row1","tags":"[\\"t1\\",\\"t2\\",\\"t3\\"]","count":1}\n')),(0,l.kt)("p",null,"Multi-value dimensions also consider an empty row as ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),", consider:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT *\nFROM "mvd_example_rollup"\nWHERE tags is null\n')),(0,l.kt)("p",null,"which results in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"__time":"2011-01-14T00:00:00.000Z","label":"row4","tags":null,"count":1}\n')),(0,l.kt)("h3",{id:"grouping"},"Grouping"),(0,l.kt)("p",null,"When grouping on a multi-value dimension with SQL or a native ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/topnquery"},"topN")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/groupbyquery"},"groupBy")," queries, ",(0,l.kt)("em",{parentName:"p"},"all")," values\nfrom matching rows will be used to generate one group per value. This behaves similarly to an implicit SQL ",(0,l.kt)("inlineCode",{parentName:"p"},"UNNEST"),"\noperation. This means it's possible for a query to return more groups than there are rows. For example, a topN on the\ndimension ",(0,l.kt)("inlineCode",{parentName:"p"},"tags")," with filter ",(0,l.kt)("inlineCode",{parentName:"p"},'"t1" AND "t3"')," would match only row1, and generate a result with three groups:\n",(0,l.kt)("inlineCode",{parentName:"p"},"t1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"t2"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"t3"),"."),(0,l.kt)("p",null,"If you only need to include values that match your filter, you can use the SQL functions ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},(0,l.kt)("inlineCode",{parentName:"a"},"MV_FILTER_ONLY"),"/",(0,l.kt)("inlineCode",{parentName:"a"},"MV_FILTER_NONE")),",\n",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/virtual-columns#list-filtered-virtual-column"},"filtered virtual column"),", or ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs#filtered-dimensionspecs"},"filtered dimensionSpec"),". This can also improve performance."),(0,l.kt)("h4",{id:"example-sql-grouping-query-with-no-filtering"},"Example: SQL grouping query with no filtering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT label, tags\nFROM "mvd_example_rollup"\nGROUP BY 1,2\n')),(0,l.kt)("p",null,"results in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"label":"row1","tags":"t1"}\n{"label":"row1","tags":"t2"}\n{"label":"row1","tags":"t3"}\n{"label":"row2","tags":"t3"}\n{"label":"row2","tags":"t4"}\n{"label":"row2","tags":"t5"}\n{"label":"row3","tags":"t5"}\n{"label":"row3","tags":"t6"}\n{"label":"row3","tags":"t7"}\n{"label":"row4","tags":null}\n')),(0,l.kt)("h4",{id:"example-sql-grouping-query-with-a-filter"},"Example: SQL grouping query with a filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT label, tags\nFROM \"mvd_example_rollup\"\nWHERE tags = 't3'\nGROUP BY 1,2\n")),(0,l.kt)("p",null,"results:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"label":"row1","tags":"t1"}\n{"label":"row1","tags":"t2"}\n{"label":"row1","tags":"t3"}\n{"label":"row2","tags":"t3"}\n{"label":"row2","tags":"t4"}\n{"label":"row2","tags":"t5"}\n')),(0,l.kt)("h4",{id:"example-native-groupby-query-with-no-filtering"},"Example: native GroupBy query with no filtering"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/groupbyquery"},"GroupBy querying")," for details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "default",\n      "dimension": "tags",\n      "outputName": "tags"\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"This query returns the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t1"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t2"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t4"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t5"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t6"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t7"\n    }\n  }\n]\n')),(0,l.kt)("p",null,'Notice that original rows are "exploded" into multiple rows and merged.'),(0,l.kt)("h4",{id:"example-native-groupby-query-with-a-selector-query-filter"},"Example: native GroupBy query with a selector query filter"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/filters"},"query filters")," for details of selector query filter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "filter": {\n    "type": "selector",\n    "dimension": "tags",\n    "value": "t3"\n  },\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "default",\n      "dimension": "tags",\n      "outputName": "tags"\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"This query returns the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t1"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t2"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t4"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t5"\n    }\n  }\n]\n')),(0,l.kt)("p",null,'You might be surprised to see "t1", "t2", "t4" and "t5" included in the results. This is because the query filter is\napplied on the row before explosion. For multi-value dimensions, a filter for value "t3" would match row1 and row2,\nafter which exploding is done. For multi-value dimensions, a query filter matches a row if any individual value inside\nthe multiple values matches the query filter.'),(0,l.kt)("h4",{id:"example-native-groupby-query-with-selector-query-and-dimension-filters"},"Example: native GroupBy query with selector query and dimension filters"),(0,l.kt)("p",null,'To solve the problem above and to get only rows for "t3", use a "filtered dimension spec", as in the query below.'),(0,l.kt)("p",null,"See filtered ",(0,l.kt)("inlineCode",{parentName:"p"},"dimensionSpecs")," in ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs#filtered-dimensionspecs"},"dimensionSpecs")," for details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "filter": {\n    "type": "selector",\n    "dimension": "tags",\n    "value": "t3"\n  },\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "listFiltered",\n      "delegate": {\n        "type": "default",\n        "dimension": "tags",\n        "outputName": "tags"\n      },\n      "values": ["t3"]\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"This query returns the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  }\n]\n')),(0,l.kt)("p",null,"Note that, for groupBy queries, you could get similar result with a ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/having"},"having spec")," but using a filtered\n",(0,l.kt)("inlineCode",{parentName:"p"},"dimensionSpec")," is much more efficient because that gets applied at the lowest level in the query processing pipeline.\nHaving specs are applied at the outermost level of groupBy query processing."),(0,l.kt)("h2",{id:"disable-groupby-on-multi-value-columns"},"Disable GroupBy on multi-value columns"),(0,l.kt)("p",null,"You can disable the implicit unnesting behavior for groupBy by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"groupByEnableMultiValueUnnesting: false")," in your\n",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/query-context"},"query context"),". In this mode, the groupBy engine will return an error instead of completing the query. This is a safety\nfeature for situations where you believe that all dimensions are singly-valued and want the engine to reject any\nmulti-valued dimensions that were inadvertently included."),(0,l.kt)("h2",{id:"differences-between-arrays-and-multi-value-dimensions"},"Differences between arrays and multi-value dimensions"),(0,l.kt)("p",null,"Avoid confusing string arrays with ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/multi-value-dimensions"},"multi-value dimensions"),". Arrays and multi-value dimensions are stored in different column types, and query behavior is different. You can use the functions ",(0,l.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY_TO_MV")," to convert between the two if needed. In general, we recommend using arrays whenever possible, since they are a newer and more powerful feature and have SQL compliant behavior."),(0,l.kt)("p",null,"Use care during ingestion to ensure you get the type you want."),(0,l.kt)("p",null,"To get arrays when performing an ingestion using JSON ingestion specs, such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"native batch")," or streaming ingestion such as with ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kafka-ingestion"},"Apache Kafka"),", use dimension type ",(0,l.kt)("inlineCode",{parentName:"p"},"auto")," or enable ",(0,l.kt)("inlineCode",{parentName:"p"},"useSchemaDiscovery"),". When performing a ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/multi-stage-query/"},"SQL-based ingestion"),", write a query that generates arrays. Arrays may contain strings or numbers."),(0,l.kt)("p",null,"To get multi-value dimensions when performing an ingestion using JSON ingestion specs, use dimension type ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," and do not enable ",(0,l.kt)("inlineCode",{parentName:"p"},"useSchemaDiscovery"),". When performing a ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/multi-stage-query/"},"SQL-based ingestion"),", wrap arrays in ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/multi-value-dimensions#sql-based-ingestion"},(0,l.kt)("inlineCode",{parentName:"a"},"ARRAY_TO_MV")),". Multi-value dimensions can only contain strings."),(0,l.kt)("p",null,"You can tell which type you have by checking the ",(0,l.kt)("inlineCode",{parentName:"p"},"INFORMATION_SCHEMA.COLUMNS")," table, using a query like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COLUMN_NAME, DATA_TYPE\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_NAME = 'mytable'\n")),(0,l.kt)("p",null,"Arrays are type ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY"),", multi-value strings are type ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR"),"."))}c.isMDXComponent=!0}}]);