.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Filtering
=========

Filtering data is the process of restricting a query to a subset of rows
based on some column condition. Maybe we only want to consider trips that start
from a particular location. Or rides the have a certain duration.

.. index::
    pair: SQL; WHERE

To filter data with SQL, we use the ``WHERE`` keyword. You can
append ``WHERE column_condition`` to any SQL query, and the result will be
filtered only to rows that satisfy the column condition. For example, you might
want to look only at bike trips which are at least one hour (3600 seconds):

.. activecode:: sqlintro_filtering1
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        member_type,
        start_date,
        duration
    FROM
        trip_data
    WHERE
        duration >= 3600;

Try running this and examining the duration column... the records that are
returned by the ``SELECT`` should now all be ones with a duration of at least 3600.

When writing ``WHERE`` clauses, we use the same kinds of comparison operators that
we do in Python: ``==``, ``!=``, ``>``, ``>=``, ... Just like in Python, we write numbers
without commas like ``3600``. Also like in Python, if we want to write something that
is a string, we have to put quotes around it (either single ``'`` or double ``"`` quotes
work). To select the records where ``member_type`` was **Member** we would write:

.. code:: sql

    ...
    WHERE
        member_type == "Member"
        --Use quotes around Member because it is a string 

Finally, notice that the ``WHERE`` clause is part of the query as the ``;`` does not
appear until after the WHERE. If there was a ``;`` at the end of the ``FROM trip_data``,
the statement would end there and the ``WHERE`` would not be considered to
be part of the rest of the query. Try putting a ``;`` after ``trip_data`` and
running the program. In the modified program, the ``SELECT`` is still valid and returns the 3 desired
columns, but does it for trips of all durations. Then, SQL tries to interpret
``WHERE duration >= 3600`` on its own, which makes no sense (what does it apply to???)
and we get an error about the ``WHERE``.

.. warning::

    For the simple programs we write, there will always just be one query. You should
    only ever have one ``;`` at the end of your program. You also can just leave off
    the ``;`` entirely in which case your program is assumed to be all one statement.

It is also possible to filter by multiple criteria by using ``AND`` or ``OR``. 
For example to look at bike trips which are 60 minutes or more and the 
``member_type`` is ``MEMBER``, the query would be as below.


.. activecode:: sqlintro_filtering2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        member_type,
        start_date,
        duration
    FROM
        trip_data
    WHERE
        duration >= 3600 
        AND
        member_type == 'Member'


.. activecode:: sqlintro_filtering3
    :language: sql
    :dburl: /_static/bikeshare.db

    Write a query to find the ending station and duration of all of trips by bike
    number W00153 that lasted over 8 hours (remember that duration is measured in
    seconds, you will have to figure out how many seconds are in 8 hours).

    The bike number W00153 is a string, so make sure to use quotes around it in your query.
    ~~~~

    ====
    assert 0,0 == 31606
    assert 0,1 == 40791
    assert 2,0 == 31703
    assert 2,1 == 40820
