..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.

Chapter Exercises
--------------------

The exercises for this chapter use a different database than the rest of the chapter. The 
**movies** database has two tables, ``movies`` and ``actors``. We will be using the ``movie``
table (so queries will look like ``SELECT * from movies``). It features the following 
columns of data:

.. list-table::
    :widths: 30 70 
    :header-rows: 1
    :align: left
    :name: movie_table

    * - Column Name
      - Description
    * - id
      - A unique number for each record
    * - imdb_id
      - The id of the movie in the Internet Movie DataBase (IMDB)
    * - title
      - Title fo  the movie
    * - director
      - Name of the director
    * - year
      - Year (number) the movie was released
    * - rating
      - Rating (R, PG, etc...)
    * - genre
      - Comma separated list of genres
    * - runtime
      - Length in minutes
    * - country
      - Comma separated list of countries it was released in
    * - language
      - Comma separated list of languages it was released in
    * - imdb_score
      - Score of movie (1-10) in IMDB
    * - imdb_votes
      - Number of ratings for the movie in the IMDB
    * - metacritic_score
      - Score of movie (1-100) on the Metacritic website


.. activecode:: sqlintro_exercises1
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select the year and title of each movie (put them in that order, so that
    the year appears first).
    ~~~~

    ====
    assert 0,0 == 1957
    assert 0,1 == 12 Angry Men
    assert 1,0 == 2013
    assert 1,1 == 12 Years a Slave
    assert 99,0 == 1995
    assert 99,1 == La Haine


.. activecode:: sqlintro_exercises2
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select all of the columns of the movies that were released in 2004.
    ~~~~

    ====
    assert 0,0 == 26
    assert 0,2 == Before Sunset
    assert 1,0 == 55
    assert 1,2 == Downfall


.. activecode:: sqlintro_exercises3
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select all of the columns of the movies that have a rating of "PG"
    or "PG-13".
    ~~~~

    ====
    assert 1,2 == Casablanca
    assert 4,2 == Inside Out


.. activecode:: sqlintro_exercises4
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select all of the columns of the movies that are in the genre 'Sci-Fi'.
    Many movies have multiple genres, we want to include every movie where Sci-Fi is anywhere
    in the list of genres.
    ~~~~

    ====
    assert 0,2 == 2001: A Space Odyssey
    assert 2,2 == Alien


.. activecode:: sqlintro_exercises5
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select all of the columns of the movies that have a runtime of between
    110 and  120 minutes. 
    ~~~~

    ====
    assert 0,2 == Alien
    assert 4,2 == Butch Cassidy and the Sundance Kid


.. activecode:: sqlintro_exercises6
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to select just the title, year, and IMDB score (in that order)
    of all the movies sorted so that the highest IMDB scores come first.
    ~~~~

    ====
    assert 0,0 == The Godfather
    assert 0,1 == 1972
    assert 0,0 == Schindler's List
    assert 3,1 == 1993

.. activecode:: sqlintro_exercises7
    :language: sql
    :dburl: /_static/movies.db
    :practice: T

    Write a query to find just the year of release for movies with a Metacritic score
    of 95 or above. Order the results so that the most recent movie comes first.
    ~~~~

    ====
    assert 0,0 == 2013
