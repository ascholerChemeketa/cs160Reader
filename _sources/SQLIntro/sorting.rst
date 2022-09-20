.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Sorting
=======

.. index::
    pair: SQL; ORDER BY

We can use SQL to specify how to sort the records that are retrieved by a query using
an ``ORDER BY`` clause. For example, the following query returns bike trips ordered by
duration:

.. activecode:: sqlintro_sorting1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        trip_data
    ORDER BY
        duration

The column name after the ``ORDER BY`` clause specifies which column to use as
the sorting key, in this case ``duration``. The shortest trips are listed first and the longest
trips listed last. This increasing, or **ascending** order is the default.
To make the order go from largest to smallest (**descending** order), we need to
specify ``DESC`` after the column name we are ordering by. (If we want to be explicit
about ascending order, we can say ``ASC``, but do not need to since that is the default.)

.. activecode:: sqlintro_sorting2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        trip_data
    ORDER BY
        duration DESC


LIMIT
---------------

That query returns over 400,000 records (the environment we use will only show us 100
of those to prevent the web page from being overwhelmed with data). If we only want to
see the 10 longest trips, we can use ``LIMIT`` to specify the maximum number of rows to
return:

but to ``LIMIT`` the
output to the first 10 rows.

.. activecode:: sqlintro_sorting3
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        trip_data
    ORDER BY
        duration DESC
    LIMIT 10

We can combine ``ORDER BY`` and ``LIMIT`` with the other clauses we have learned about
to do something like selecting just the start date, station and the duration for only
trips starting from station 31111, sorting them from longest to shortest, and only
keeping the first (longest) 10:

.. activecode:: sqlintro_sorting4
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_date,
        start_station,
        duration
    FROM
        trip_data
    WHERE
        start_station = 31111
    ORDER BY
        duration DESC
    LIMIT 10

The ordering of the clauses is important. The ``WHERE`` must come before the ``ORDER BY``
which should come before the ``LIMIT``.

Multiple Sorts
---------------------------------

In SQL, you can also order by multiple columns. In this case, the resulting rows
will be ordered by the values in the specified columns, ordered by the first
specified column, then the second specified column, and so forth. For example,
if you ``ORDER BY start_station, end_station, duration``, the rows will first
be sorted by ``start_station``, then within each value of ``start_station`` the
rows will be ordered by ``end_station``, then within each pair of
``start_station`` and ``end_station`` values, the rows will be ordered by
``duration``.

.. activecode:: sqlintro_sorting5
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_station,
        end_station,
        duration
    FROM
        trip_data
    WHERE
        -- 1-2 minute trips 
        duration >= 60
        AND
        duration <= 120
    ORDER BY
        start_station ASC,  -- sort by starting location first
        end_station ASC,    -- then by ending
        duration DESC       -- then by duration

Now try to write SQL queries that will answer the following questions.

.. activecode:: sqlintro_sorting6
    :language: sql
    :dburl: /_static/bikeshare.db

    On what bike number was the most recent (by start date) trip?

    Select just the column that has the bike number, and sort the results so that
    the most recently started trip is first. It is easiest to begin by selecting all
    data (``*``) while you get the query logic correct so you can see if the data is
    sorted correctly. Once you get it working, select just the column with the bike number.
    and limit the results to one record.
    ~~~~

    ====
    assert 0,0 == W00042


.. activecode:: sqlintro_sorting7
    :language: sql
    :dburl: /_static/bikeshare.db

    Write a query using ``ORDER BY`` to find the starting station and duration of
    the longest ride that started and ended at the same station.

    Again, start simple and build your way to the correct query. Start by selecting
    all columns so you can see what data you are getting as you work on the ``WHERE`` and
    ``ORDER BY``.

    Hint: both sides of the WHERE's condition can be column names. If I wanted to find
    a record where the start and end date were the same I could do:
    ``WHERE start_date == end_date``
    ~~~~

    ====
    assert 0,0 == 31617
    assert 0,1 == 85666
