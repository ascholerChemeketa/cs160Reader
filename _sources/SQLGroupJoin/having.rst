.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Filtering with Aggregated Results
========================================

If we want to answer the question *"which stations were the starting point for
10,000 or more rides?"*, it would seem like we want to write something like:

.. code:: sql

   SELECT
     start_station,
     COUNT(*) AS n_trips
   FROM
     trip_data
   WHERE
     n_trips > 10000
   GROUP BY
     start_station

Unfortunately, you can never include an aggregating function or result within the ``WHERE`` clause. 
Trying to do so will give an error. However, there is a ``HAVING`` clause that can be used
just like a ``WHERE`` to filter data, only it works with aggregations. To ask about the
stations with over 10000 trips we would write:

.. activecode:: sqlgroupjoin_having1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_station,
        COUNT(*) AS n_trips     -- call results of aggregation n_trips
    FROM
        trip_data
    GROUP BY
        start_station
    HAVING
        n_trips > 10000         -- filter the results using the COUNTs calculated
    ORDER BY n_trips DESC

As with the ``ORDER BY`` clause, ``HAVING`` is an operation on the results.
While ``WHERE`` filters the data being queried, ``HAVING`` filters the results
based on the value of an aggregating function. The ``HAVING`` clause can only be
used immediately following the ``GROUP BY`` clause.

.. activecode:: sqlgroupjoin_having2
    :language: sql
    :autograde: unittest
    :dburl: /_static/bikeshare.db
    :autograde: unittest

    Below is a query to find the total time each bike was ridden. Add a ``HAVING``
    clause to select only the bikes that were used for less than 1000 minutes.
    ~~~~

    SELECT
        start_station,
        SUM(duration) AS total_time
    FROM
        trip_data
    GROUP BY
        bike_number
    ORDER BY total_time DESC
    ====
    assert 0,0 == W01236
    assert 0,1 == 925
    assert 1,0 == W00053
    assert 1,1 == 537
