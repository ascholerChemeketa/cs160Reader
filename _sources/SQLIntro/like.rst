.. Copyright (C)  Google, Runestone Interactive LLC
   This work is licensed under the Creative Commons Attribution-ShareAlike 4.0
   International License. To view a copy of this license, visit
   http://creativecommons.org/licenses/by-sa/4.0/.


Filtering with Like
============================

If the data that we are trying to filter is strings of text, we may need to search
inside the strings. Perhaps we are looking for all names that start with "Janice",
or all class descriptions that include the word "Chemistry" anywhere in the title.
To match part of a string using ``WHERE``, we can't rely on ``==``. If we ask for
``WHERE name == 'Janice'``, we will only get names that perfectly match 'Janice' -
which would not include 'Janice Jones'.

.. index::
    pair: SQL; LIKE

The ``LIKE`` comparison allows us to specify strings using **wildcards**. **Wildcards**
are symbols that can match anything. In SQL ``LIKE`` comparisons, ``%`` is a wildcards
that means "any text can go here". So ``'Janice%''`` says "Look for string that start with
Janice, and then have anything after that (including nothing else)". While ``'%Janice'``
says "look for string that end in Janice and may have anything before that". If we are
want to allow for extra text to be on either side of 'Janice', we would use use ``%`` on
both sides - ``'%Janice%'``

This sample pulls from the ``bikeshare_stations`` table to search for all station names
that include 'F St':

.. activecode:: bikeshare_like
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        bikeshare_stations
    WHERE
        name LIKE '%F St%'

We do have to be careful not to specify things that are too broad. Try changing the like
to look for anything that includes '7th' and examine the results.

The pattern ``'%7th%'`` matches way too many things. To get just 7th (and not 17th or 27th)
we would need to state something like *"where the name starts with 7th or the name has ' 7th'
in it"*. The space inside the string will make sure we don't match '17th'. This query
will perform that search. Notice that to check if the name begins with '7th', we make sure
not to put a ``%`` at the start of the string.

.. activecode:: bikeshare_like_2
    :language: sql
    :dburl: /_static/bikeshare.db

    SELECT
        *
    FROM
        bikeshare_stations
    WHERE
        name LIKE '7th%'  --7th at beginning of name
        OR
        name LIKE '% 7th%'  --space in front of 7th


.. fillintheblank:: like_fb

    Change the program above to find the number of records that end with NW. Write the number of records
    found in the box below.

    - :^62$: Correct!
      :71: That is the number that have 'NW' anywhere inside the string. Make sure to only get those that end with 'NW'
      :.*: No, make sure you are matching records that have 'NW' inside the name. For your answer just give the number of records found.
