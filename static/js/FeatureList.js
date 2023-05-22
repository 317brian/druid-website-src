/*
Used by features.js in index.js to display the cards under the heading Key Druid Features. You can just add another more, and it'll keep adding cards in a 3 column pattern defined in index.css
*/

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /* Add copy-to-clipboard buttons to code blocks */

export const FeatureList = [
  {
    "title": "Interactive Query Engine",
    "description": "Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency",
  },
  {
    "title": "Tiering & QoS",
    "description": "Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency",
  },
  {
    "title": "Optimized Data Format",
    "description": "Ingested data is automatically columnarized, time indexed, dictionary encoded, bitmap indexed, and type-aware compressed",
  },
  {
    "title": "Elastic Architecture",
    "description": "Loosely coupled components for ingestion, queries and orchestration combined with a deep storage layer enable easy & quick scale-up & scale-out",
  },
  {
    "title": "True Stream Ingestion",
    "description": "A connector-free integration with streaming platforms enables query-on-arrival, high scalability, low latency, and guaranteed consistency",
  },
  {
    "title": "Non-stop Reliability",
    "description": "Automatic data services including continuous backup, automated recovery, and multi-node replication ensure high availability and durability",
  },
  ]