.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Aggregating Data
================

While making a query about the rides by members lasting more than an hour, all we really
care about is how many such rides there were. In that case, we don't need to get back all of
the data for each record - we just want a count of how many record there were that
match our ``WHERE`` clause. 

.. index::
    pair: SQL; COUNT

To do this in SQL, we can select ``COUNT(*)``. Recall that ``*`` means all, 
so this function counts the total number of rows - that count is what we are selecting,
not the data in those rows.

.. activecode:: bikeshare_count_star
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        COUNT (*) AS number_rides
    FROM
        trip_data

The ``AS`` keyword is used after ``COUNT(*)`` to give the data that is returned a name. If we
leave it off, the "column" of data will just be labeled ``COUNT(*)``. Calling it ``number_rides``
makes it much clearer what we are looking at.

.. activecode:: bikeshare_trips_starting_and_ending_at_31111
   :language: sql
   :dburl: /_static/bikeshare.db

   How many trips started and ended at station 31111?

   Hint: Build your way to the final query. Start by selecting all the data (``*``) for all the
   trips. Then write a ``WHERE`` to only select ones that start from 31111. Then add to the where
   so you are only getting the ones that both start and end at 31111. Finally, instead of selecting
   all of the columns, select just the count of the number of records.
   ~~~~

   ====
   assert 0,0 == 92

``COUNT`` is one of the aggregation functions provided by SQL. **Aggregation** is the process
of combining data and ``COUNT`` combines all the records and tells us how many there are. 
But there are other ways we can aggregate data with SQL:

-   ``COUNT`` counts the rows
-   ``SUM`` adds the values of a numeric column
-   ``MIN`` calculates the minimum of a numeric column
-   ``MAX`` calculates the maximum of a numeric column
-   ``AVG`` calculates the mean of a numeric column
-   ``MEDIAN`` calculates the median of a numeric column (only available in some
    SQL servers)

For example, the query below calculates the minimum and maximum trip duration
for each start station.

.. activecode:: bikeshare_min_and_max_trip_duration_by_start_station
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     MIN(duration) AS minimum_duration,
     MAX(duration) AS maximum_duration
   FROM
     trip_data


.. activecode:: bikeshare_station_with_earliest_start_date
   :language: sql
   :dburl: /_static/bikeshare.db

   Write a query to calculates the mean duration (average) of all trips.
   ~~~~

   ====
   assert 0,0 == 31620


You can of course use filtering and ordering with aggregating functions. The
query below calculates the longest trip duration just for trips with a casual
member type.

.. activecode:: bikeshare_mean_duration_for_casual_member_type
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     MAX(duration)
   FROM
     trip_data
   WHERE
     member_type = 'Casual'


.. activecode:: bikeshare_first_trip_from_station_31111
   :language: sql
   :dburl: /_static/bikeshare.db

   Write a query to get the total duration (sum) of all trips taken on bike W01274.
   ~~~~

   ====
   assert 0,0 == 5009


Counting Unique Values
---------------------------------

It is often helpful to not only count the number of rows, but count the number
of unique values of a column. You can do this using the ``DISTINCT`` keyword.

To count the distinct values of a column, you can simply use ``COUNT`` along
with ``DISTINCT``. For example, the query below counts the number of bike
numbers used.


.. activecode:: bikeshare_count_distinct_bikes
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        COUNT(DISTINCT bike_number) AS n_distinct_bikes
    FROM
        trip_data

.. activecode:: bikeshare_number_of_start_stations
    :language: sql
    :dburl: /_static/bikeshare.db

    Write a query to get the number of unique start locations there are in the table.
    ~~~~

    ====
    assert 0,0 == 140
