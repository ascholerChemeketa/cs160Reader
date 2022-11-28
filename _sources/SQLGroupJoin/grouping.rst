.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Grouping
===========

In the last chapter, we learned how to aggregate data across all of the records
retrieved by a query - to find the last (MAX) date of a ride taken, or the
total number (COUNT) of rides taken at a particular station. As a refresher,
here are the common aggregations:

-   ``COUNT`` counts the rows. We can also do COUNT(DISTINCT column_name) to get the number of different value that appear in a column.
-   ``SUM`` adds the values of a numeric column
-   ``MIN`` calculates the minimum of a numeric column
-   ``MAX`` calculates the maximum of a numeric column
-   ``AVG`` calculates the mean of a numeric column
-   ``MEDIAN`` calculates the median (middle value) of a numeric column
-   ``MODE`` calculates the mode (most common value) of a numeric column

Sometimes while aggregating data, you want to aggregate records in groups. Maybe
you want to find the longest trip that was taken at each individual station. Or
maybe you want to find the number of trips taken on each bike.

The ``GROUP BY`` statement allows you to group data as you aggregate it.
The following query counts the number of trips (``COUNT(*)``) for each member
type (``GROUP BY member_type``).

.. activecode:: sqlgroupjoin_grouping1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        member_type,
        COUNT(*) AS n_trips
    FROM
        trip_data
    GROUP BY
        member_type
    ORDER BY
        n_trips DESC

The result of this query has one rows for each distinct ``member_type``, and the
column named ``n_trips`` counts the number of rows for each type. Recall that
``AS _______`` gives a name to a calculated value - any time we do an aggregation,
it will be helpful to name the result so we know what we are seeing in the output.
By giving the aggregated value a name, we can use it in the ``ORDER BY`` to sort
by the total number of trips we calculated.

Once you start grouping records, it only makes sense to talk about aggregated data.
You can't group the records by ``member_type`` and try to select the ``start_date``.
There is no one start date for all of those records. You would instead have to ask
about the ``MIN(start_station)`` or ``MODE(start_station)`` or ``COUNT(DISTINCT start_station)``.

.. warning::

    You must include the ``GROUP BY`` column(s) in your ``SELECT`` clause.
    
    All columns that are not in the ``GROUP BY`` clause must be selected using an
    aggregating function.

The query below calculates the minimum and maximum trip duration
for each start station. Because we are grouping on ``start_station``, we ``SELECT``
``start_station``. All the other columns we are selecting data from (``duration``
which is selected from twice) have an aggregation function (``MAX`` or ``MIN`` in
this case).

.. activecode:: sqlgroupjoin_grouping2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_station,
        MIN(duration) AS minimum_duration,
        MAX(duration) AS maximum_duration
    FROM
        trip_data 
    GROUP BY
        start_station

You can still use other columns that you are not selecting to filter the data that
gets used to calculate the aggregated value. You just need to make sure to put the
``WHERE`` before teh ``GROUP BY``. For example, you can calculate the number
of trips started from each station for just the bike 'W000001' with this query:

.. activecode:: sqlgroupjoin_grouping3
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_station,
        COUNT(*) AS trips_started
    FROM
        trip_data
    WHERE
        bike_number = 'W00001'
    GROUP BY
        start_station

.. parsonsprob:: sqlgroupjoin_grouping4
    :numbered: left
    :adaptive:

    The following code will calculate the mean trip duration for trips by each
    member type and sort the results so that the member type with longest average
    trip is displayed first. 

    Put the instructions in the right order and indentation. You will use all of the blocks.
    -----
    SELECT
    =====
        member_type,
        AVG(duration) AS average_time
    =====
    FROM
    =====
        trip_data
    =====
    GROUP BY
    =====
        member_type
    =====
    ORDER BY
    =====
        average_time DESC

.. activecode:: sqlgroupjoin_grouping5
    :language: sql
    :autograde: unittest
    :dburl: /_static/bikeshare.db

    Display the bike number and the total trip count for each of the bikes. Display
    the results so that the most used bikes come first.

    Hints:
    
    * You need to group the data by bikes.
    * You need to find the count of trips made.
    * You need to order the results.

    ~~~~

    ====
    assert 0,0 == W00069
    assert 0,1 == 705

