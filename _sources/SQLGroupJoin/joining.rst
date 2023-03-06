.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.

.. _joining_sql:

Joining
=======

It is frequently the case that the data we need is spread across multiple tables
in a database.  

Imagine that we write a query on the ``trip_data`` table to find
the station with the longest overall ride:

.. activecode:: sqlgroupjoin_joining1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_station
    FROM
        trip_data
    ORDER BY
        duration DESC
    LIMIT
        1

That query gives us the station id (31104), but what if we want its name?
The name of each station is in the :ref:`bike share stations table <bikesharestations>`. To get the name
of station 31104, we could query it (notice the ``FROM`` clause):

.. activecode:: sqlgroupjoin_joining2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        bikeshare_stations
    WHERE
        station_id == 31104

We need the name that is a part of that table, but to find the right station, we
need to use the duration that is a part of the other ``trip_data`` table. Rather
than do the first query and then write the second based on the answer we get, we would
like to write one query that works on both tables. In SQL, when you need to join data
across multiple spreadsheets, you use the ``JOIN`` keyword.
``JOIN`` is used to merge the columns in one table with the columns in another table.

However, when we want to join records from two tables, we don't want to join them randomly.
We want to make sure that records that talk about station 31104 in ``trip_data`` are
joined with the records that talk about that same station number in ``bikeshare_stations``.
To specify how to ``JOIN`` tables, we must use an ``ON`` clause that specifies which column
in the first table to match which which column in the second table. To name the columns, we
use **dot** syntax: ``table_name.column_name``. The full syntax for a ``JOIN`` looks like:

.. code:: sql

    SELECT
        *  -- or whatever
    FROM first_table
    JOIN second_table
    ON
        -- look for records where the value in column_A in the first_table
        -- match the value in column_B in the second table
        first_table.column_A == second_table.column_B
    -- WHERE or ORDER BY if we want

So to merge the two queries we did earlier, we will have ``trip_data`` as the first table
and ``bikeshare_stations`` as the second. In ``trip_data``, the station number is stored as
``start_station``. In ``bikeshare_stations`` those same values are stored in the ``station_id``
column.

.. activecode:: sqlgroupjoin_joining3
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM trip_data
    JOIN bikeshare_stations
    ON
        trip_data.start_station == bikeshare_stations.station_id
    ORDER BY
        duration DESC
    LIMIT
        1

Try the query - notice that it has all the columns from both tables. Which is really
more than we want. We just want the the station name. So change the ``*`` to ``name``
so that we just get that column. If we want to be really clear about what column we
are talking about (or if both tables had a column called ``name`` so we had to be
more specific), we could write it as ``bikeshare_stations.name`` because it is the
``name`` column from ``bikeshare_stations``. 

As another example, suppose you want to find the number of bikeshare trips that end at the
*Van Ness Metro / UDC* station. You can join the ``end_station`` field from
the ``trip_data`` table to the ``station_id`` field in the ``bikeshare_stations`` table.

.. activecode:: sqlgroupjoin_joining4
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        COUNT(*) AS num_trips
    FROM trip_data
    JOIN bikeshare_stations
    ON
        trip_data.end_station == bikeshare_stations.station_id
    WHERE
        bikeshare_stations.name = "Van Ness Metro / UDC"

Again, in the WHERE clause, we are being very specific. Because there is only
one ``name`` column in the two tables, we could just say ``name``. But it never hurts
to be clear about which table we are talking about once we start joining data.

.. activecode:: sqlgroupjoin_joining5
    :language: sql
    :autograde: unittest
    :dburl: /_static/bikeshare.db

    Write a query to find out how many trips were started at ``'Adams Mill & Columbia Rd NW'``?
    ~~~~

    ====
    0,0 == 9883

.. activecode:: sqlgroupjoin_joining6
    :language: sql   
    :autograde: unittest
    :dburl: /_static/bikeshare.db

    Write a query to find the average duration of trips that started at stations that are
    now listed as closed.

    Hints:

    * ``duration`` is in bikeshare_stations. You will want to use ``AVG()`` to find the
      average of all the values retrieved.
    * Open/closed is stored as ``status`` in ``bikeshare_stations``. It is stored as a
      string, so use ``'closed'`` as the value you search for.
    * Build your way to the final solution. Start by just joining the tables so that
      the start_station is being batched with the station_id and selecting
      all columns. 
      Then add a WHERE to get just closed stations.
      Then try to average the duration.
    ~~~~

    ====
    assert 0,0 == 1268.9547619047619
