.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Selecting
=========

.. index::
    pair: SQL; SELECT
    pair: SQL; query

Instructions to retrieve information from a database are known as **queries**.
To make a query using SQL, we generally write a **SELECT** statement (recall that a complete
instruction in programming is known as a statement). The general format of a ``SELECT`` is:

.. code:: sql

    SELECT columns FROM table;

In SQL **keywords** like ``SELECT`` are generally written using all **upper case**, while
**column names and table names** use **lower case**. This is a convention to make statements
easier for  people to read - it is also valid to use lower case for the keywords.

It is also common to break the statement up across multiple lines - as statements get
more and more complex, this too makes them easier to read:

.. code:: sql

    --Still all one statement:
    SELECT 
        columns 
    FROM 
        table;

In Python, each statement goes on its own line and must be indented in a particular way.
SQL does not care about indentation. You are free to indent lines however you like. And a 
statement does not automatically end at the end of a line. It ends at the ``;`` symbol.
A final difference is how we make a comment. In Python, we use ``#`` to make a comment in
the code. In SQL, we use ``--`` to tell the computer to ignore the rest of the line.

Let's use a ``SELECT`` to get all the data from the ``trip_data`` table. The following SQL query is
an example of how to do so. It asks the database to ``SELECT`` all columns (``*`` is a shorthand
that means "all columns") ``FROM`` the table named ``trip_data``.

.. activecode:: sqlintro_selecting1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        trip_data;


As we do a ``SELECT``, it might not make sense to ask for all of the columns in a
table. If we want to answer a question about the length of rides, we probably do not need
the information about station numbers or bike numbers. To simplify the data we get,
and reduce the amount of information that must be sent from the database to our program,
we would want to specify a list of columns we actually care about instead of using ``*``.
To select just the ``start_date``, ``end_date``, and ``duration`` columns, the query
would look like the following:

.. activecode:: sqlintro_selecting2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        start_date,
        end_date,
        duration
    FROM
        trip_data;

The column names must match the names of the columns in the data table and be separated
by commas. Because SQL does not care about line breaks, it would be
fine to list all the columns on one line like: ``start_date, end_date, duration``.

Notice that we can specify the columns in any order - the order we ask for them does
not have to match the order in the original table. Try changing the query so that
duration is the first row that is returned.

.. activecode:: sqlintro_selecting3
    :language: sql
    :autograde: unittest
    :dburl: /_static/bikeshare.db

    Write a query to select the start and end stations for all trips. 
    Make sure that the start station is the first column retrieved and end
    station is the second.

    Hint: check the previous page to check the column names you need to use
    of first select ``*`` and look at the returned data to find the column
    names you care about.
    ~~~~

    ====
    assert 0,0 == 31104
    assert 0,1 == 31200
    assert 1,0 == 31230
    assert 1,1 == 31620
    assert 99,0 == 31224
    assert 99,1 == 31221
