---
id: faq
title: "Ingestion troubleshooting FAQ"
sidebar_label: "Troubleshooting FAQ"
---

<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one
  ~ or more contributor license agreements.  See the NOTICE file
  ~ distributed with this work for additional information
  ~ regarding copyright ownership.  The ASF licenses this file
  ~ to you under the Apache License, Version 2.0 (the
  ~ "License"); you may not use this file except in compliance
  ~ with the License.  You may obtain a copy of the License at
  ~
  ~   http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing,
  ~ software distributed under the License is distributed on an
  ~ "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  ~ KIND, either express or implied.  See the License for the
  ~ specific language governing permissions and limitations
  ~ under the License.
  -->

## Batch Ingestion

If you are trying to batch load historical data but no events are being loaded, make sure the interval of your ingestion spec actually encapsulates the interval of your data. Events outside this interval are dropped.

## Druid ingested my events but they are not in my query results

If the number of ingested events seem correct, make sure your query is correctly formed. If you included a `count` aggregator in your ingestion spec, you will need to query for the results of this aggregate with a `longSum` aggregator. Issuing a query with a count aggregator will count the number of Druid rows, which includes [roll-up](../design/index.md).

## Where do my Druid segments end up after ingestion?

Depending on what `druid.storage.type` is set to, Druid will upload segments to some [Deep Storage](../dependencies/deep-storage.md). Local disk is used as the default deep storage.

## My stream ingest is not handing segments off

First, make sure there are no exceptions in the logs of the ingestion process. Also make sure that `druid.storage.type` is set to a deep storage that isn't `local` if you are running a distributed cluster.

Other common reasons that hand-off fails are as follows:

1) Druid is unable to write to the metadata storage. Make sure your configurations are correct.

2) Historical processes are out of capacity and cannot download any more segments. You'll see exceptions in the Coordinator logs if this occurs and the web console will show the Historicals are near capacity.

3) Segments are corrupt and cannot be downloaded. You'll see exceptions in your Historical processes if this occurs.

4) Deep storage is improperly configured. Make sure that your segment actually exists in deep storage and that the Coordinator logs have no errors.

## How do I get HDFS to work?

Make sure to include the `druid-hdfs-storage` and all the hadoop configuration, dependencies (that can be obtained by running command `hadoop classpath` on a machine where hadoop has been setup) in the classpath. And, provide necessary HDFS settings as described in [deep storage](../dependencies/deep-storage.md) .

## How do I know when I can make query to Druid after submitting batch ingestion task?

You can verify if segments created by a recent ingestion task are loaded onto historicals and available for querying using the following workflow.
1. Submit your ingestion task.
2. Repeatedly poll the [Overlord's tasks API](../operations/api-reference.md#tasks) ( `/druid/indexer/v1/task/{taskId}/status`) until your task is shown to be successfully completed.
3. Poll the [Segment Loading by Datasource API](../operations/api-reference.md#segment-loading-by-datasource) (`/druid/coordinator/v1/datasources/{dataSourceName}/loadstatus`) with 
`forceMetadataRefresh=true` and `interval=<INTERVAL_OF_INGESTED_DATA>` once. 
(Note: `forceMetadataRefresh=true` refreshes Coordinator's metadata cache of all datasources. This can be a heavy operation in terms of the load on the metadata store but is necessary to make sure that we verify all the latest segments' load status)
If there are segments not yet loaded, continue to step 4, otherwise you can now query the data.
4. Repeatedly poll the [Segment Loading by Datasource API](../operations/api-reference.md#segment-loading-by-datasource) (`/druid/coordinator/v1/datasources/{dataSourceName}/loadstatus`) with 
`forceMetadataRefresh=false` and `interval=<INTERVAL_OF_INGESTED_DATA>`. 
Continue polling until all segments are loaded. Once all segments are loaded you can now query the data. 
Note that this workflow only guarantees that the segments are available at the time of the [Segment Loading by Datasource API](../operations/api-reference.md#segment-loading-by-datasource) call. Segments can still become missing because of historical process failures or any other reasons afterward.

## I don't see my Druid segments on my Historical processes

You can check the [web console](../operations/web-console.md) to make sure that your segments have actually loaded on [Historical processes](../design/historical.md). If your segments are not present, check the Coordinator logs for messages about capacity of replication errors. One reason that segments are not downloaded is because Historical processes have maxSizes that are too small, making them incapable of downloading more data. You can change that with (for example):

```
-Ddruid.segmentCache.locations=[{"path":"/tmp/druid/storageLocation","maxSize":"500000000000"}]
 ```

## My queries are returning empty results

You can use a [segment metadata query](../querying/segmentmetadataquery.md) for the dimensions and metrics that have been created for your datasource. Make sure that the name of the aggregators you use in your query match one of these metrics. Also make sure that the query interval you specify match a valid time range where data exists.

## Real-time ingestion seems to be stuck

There are a few ways this can occur. Druid will throttle ingestion to prevent out of memory problems if the intermediate persists are taking too long or if hand-off is taking too long. If your process logs indicate certain columns are taking a very long time to build (for example, if your segment granularity is hourly, but creating a single column takes 30 minutes), you should re-evaluate your configuration or scale up your real-time ingestion.
