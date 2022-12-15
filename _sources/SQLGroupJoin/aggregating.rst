.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Aggregating Data
================

.. index::
    pair: SQL; COUNT

Say we want data about how many rides lasted longer than an hour. At this point we 
don't care about where they started, or which bike they were on, we just want to
know how many such rides there were. 
To ask for the total number of records a query finds, we can select ``COUNT(*)``.

.. activecode:: sqlgroupjoin_aggregating1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        COUNT (*) AS number_rides
    FROM
        trip_data

The ``AS`` keyword is used after ``COUNT(*)`` to give the data that is returned a name. If we
leave it off, the "column" of data will just be labeled ``COUNT(*)``. Calling it ``number_rides``
makes it much clearer what we are looking at.

.. activecode:: sqlgroupjoin_aggregating2
  :language: sql
  :dburl: /_static/bikeshare.db
  :autograde: unittest

  How many trips started at station 31111?

  Hint: Build your way to the final query. Start by selecting all the data (``*``) for all the
  trips. Then write a ``WHERE`` to only select ones that start from 31111. Finally, instead of selecting
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
-   ``MEDIAN`` calculates the median (middle value) of a numeric column
-   ``MODE`` calculates the mode (most common value) of a numeric column

For example, the query below calculates the minimum and maximum trip duration:

.. activecode:: sqlgroupjoin_aggregating3
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     MIN(duration) AS minimum_duration,
     MAX(duration) AS maximum_duration
   FROM
     trip_data


.. activecode:: sqlgroupjoin_aggregating4
  :language: sql
  :dburl: /_static/bikeshare.db
  :autograde: unittest


  Write a query to calculates the mean duration (average) of all trips.
  ~~~~

  ====
  assert 0,0 == 31620


You use ``WHERE`` filtering with aggregating functions. The
query below calculates the longest trip duration just for trips made by Casual
member type users.

.. activecode:: sqlgroupjoin_aggregating5
   :language: sql
   :dburl: /_static/bikeshare.db

   SELECT
     MAX(duration)
   FROM
     trip_data
   WHERE
     member_type = 'Casual'


.. activecode:: sqlgroupjoin_aggregating6
  :language: sql
  :dburl: /_static/bikeshare.db
  :autograde: unittest


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


.. activecode:: sqlgroupjoin_aggregating7
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        COUNT(DISTINCT bike_number) AS n_distinct_bikes
    FROM
        trip_data

.. activecode:: sqlgroupjoin_aggregating8
    :language: sql
    :autograde: unittest
    :dburl: /_static/bikeshare.db
    :autograde: unittest


    Write a query to get the number of unique start locations there are in the table.
    ~~~~

    ====
    assert 0,0 == 140
