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


.. activecode:: sqlgroupjoin_exercises1
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db
    :practice: T

    Write a query to find the average IMDB score for all the movies.
    ~~~~

    ====
    assert 0,0 == 8.303999999999997


.. activecode:: sqlgroupjoin_exercises2
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db
    :practice: T

    Write a query to find the highest IMDB score for any movie that was 
    directed at least partially by Quentin Tarantino. (Hint: A movie can have
    multiple directors, so you will need to use ``director LIKE '%Quentin Tarantino%'``
    to identify movies where Quentin Tarantino is in the list of directors.)
    ~~~~

    ====
    assert 0,0 == 8.9


.. activecode:: sqlgroupjoin_exercises3
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Write a query to display the total number of movies with a ``rating`` of ``'PG-13'``
    in the database.
    ~~~~

    ====
    assert 0,0 == 32


.. activecode:: sqlgroupjoin_exercises4
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Use ``GROUP BY`` to write a query to display each ``rating`` category with the
    number of movies in that category.  Your output should look like:

    .. faux_code::

        ...
        PG    | 43
        PG-13 | 32
        ...

    ~~~~

    ====
    assert 1,0 == G
    assert 1,1 == 14

.. activecode:: sqlgroupjoin_exercises5
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Write a query to list each ``director`` with the highest (``MAX``) ``imdb_score`` that director's 
    movies have earned. Order the output so the directors with the highest ``imdb_score`` come first.

    Hint: You will need to use both ``GROUP BY`` and ``ORDER BY```.

    Your output should look like:

    .. faux_code::

        director              | score
        Frank Darabont	      | 9.3
        Francis Ford Coppola  | 9.2
        ...

    ~~~~

    ====
    assert 0,0 == Frank Darabont
    assert 0,1 == 9.3
    assert 1,0 == Francis Ford Coppola
    assert 1,1 == 9.2

.. activecode:: sqlgroupjoin_exercises6
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Write a query to list each ``director`` with the ``COUNT`` of the number of films they have made. 
    But **only** retrieve the data for directors with at least 2 films.

    The results should be sorted by director's name (but that should be the default,
    you should not have to use ``ORDER BY``).

    Hint: Remember that you have to use ``HAVING`` to filter grouped results.

    Your output should look like:

    .. faux_code::

        director              | num_films
        Akira Kurosawa        | 5
        Alfred Hitchcock      | 6
        ...

    ~~~~

    ====
    assert 0,0 == Akira Kurosawa
    assert 0,1 == 5
    assert 1,0 == Alfred Hitchcock
    assert 1,1 == 6

.. activecode:: sqlgroupjoin_exercises7
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Write a query to list each ``director`` with the number of movies they have made that
    have an ``imdb_score`` of 8.5 or higher.
    
    Sort the results so the directors with the greatest number of highly rated files 
    are first.
    
    Hint: Here you want to filter the movies by IMDB rating before they are aggregated,
    so you need a ``WHERE`` not a ``HAVING``.

    Your output should look like:

    .. faux_code::

        director              | high_rated_films
        Peter Jackson         | 3
        Christopher Nolan     | 3
        Steven Spielberg      | 2
        ...

    ~~~~

    ====
    assert 0,0 == Peter Jackson
    assert 0,1 == 3
    assert 1,0 == Christopher Nolan
    assert 1,1 == 3

The following problems will also make use of the ``actors`` table. It consists of records that
match a movie to a particular actor. If an actor appears in multiple movies, they will appear
in one record for each movie they appear in.

.. list-table::
    :widths: 30 70 
    :header-rows: 1
    :align: left
    :name: actor_table

    * - Column Name
      - Description
    * - id
      - A unique number for each record
    * - movie_id
      - The id of the movie the actor appears in. This will match the ``id`` field in the ``movies`` table.
    * - imdb_id
      - ID of the actor on the IMDB website
    * - name
      - Name of the actor


.. activecode:: sqlgroupjoin_exercises8
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    We would like to know the title of all the movies Marlon Brando acted in.

    Write a query that gets just the ``movies.title`` from the results of
    joining the ``actors`` table with the ``movies`` table 
    (so that ``actors.movie_id`` matches with ``movies.id``) and
    selecting rows in which the ``actors.name`` is ``"Marlon Brando"``.

    Your output should look like:

    .. faux_code::

        title
        Apocalypse Now
        On the Waterfront
        The Godfather

    ~~~~

    ====
    assert 0,0 == Apocalypse Now
    assert 1,0 == On the Waterfront
    assert 2,0 == The Godfather


.. activecode:: sqlgroupjoin_exercises9
    :language: sql
    :autograde: unittest
    :dburl: /_static/movies.db

    Write a query that displays each ``actor.name`` with the highest ``metacritic_score``
    of any movie that actor has been in (we won't know what movie the score is from).

    You will have to join ``actors`` and ``movies`` so that you have access to all the
    needed data. You will also have to use ``GROUP BY``. The ``GROUP BY`` should come after the
    ``JOIN``.

    Your output should look like:

    .. faux_code::

        name                     | max_metacritic
        A.B. Lane                | 0
        A.J. O'Connor            | 0
        A.K. Hangal              | 84
        A.R. Haysel              | 87
        A.S. Duggal              | 67
        ...

    ~~~~

    ====
    assert 0,0 == A.B. Lane
    assert 0,1 == 0
    assert 2,0 == A.K. Hangal
    assert 2,1 == 84
