.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.

Subqueries
==============================

It is sometimes the case that you can’t accomplish everything you want to within
one query. In these cases, in the same way that you can wrap one Sheets function
within another, you can wrap one query within another. The inner query is often
referred to as a subquery.

One use case for a subquery is within the ``WHERE`` clause. This can be used
instead of joining, and can often be more efficient. For example, the following
query calculates the mean duration of trips that start at an open station.


.. activecode:: sqlgroupjoin_subqueries1
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     COUNT(*) AS n_trips
   FROM
     trip_data
   WHERE
     start_station IN (
       SELECT
         station_id
       FROM
         bikeshare_stations
       WHERE
         status = 'open'
     )


This could equivalently be done by joining the ``trips`` table to the
``stations`` table on ``trips.start_station = stations.station_id``, then
filtering on ``WHERE stations.status = 'open'``. However, this involves joining
every row of both tables. While using the subquery means having two distinct
``SELECT`` steps, each step involves less data, since each ``WHERE`` clause
filters each table down to much fewer rows.

Another common use case for subqueries involves aggregating functions. For
example, suppose you want to calculate the percentage of trips that start at
each station. While you can calculate the number of trips that start at each
start station in a single query, and the the total number of trips in a single
query, it is complex to calculate both in a single ``SELECT`` statement.
However, a subquery can be used to simply and logically accomplish this.


.. activecode:: sqlgroupjoin_subqueries2
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     start_station,
     100.0 * n_trips / (SELECT COUNT(*) FROM trip_data) AS percentage_trips
   FROM (
     SELECT
       start_station,
       COUNT(*) AS n_trips
     FROM
       trip_data
     GROUP BY
       start_station
     )


The above query contains three ``SELECT`` statements. The “inner query” counts
the number of trips for each start station. There is also a one-line subquery
that sums the total number of trips. The “outer query” combines the two
subqueries to calculate the percentage of total trips that start at each start
station.
