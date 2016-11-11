.. include:: ../../global.rst


Why Higher Order Functions
==============================

Before we start working with functions as inputs to other functions, let us try to answer the question "Why?"

There is no problem that we **need** to solve using this trick. But, it can make our solutions easier to read and understand and allow us to reuse common algorithms instead of constantly reinventing the wheel.


.. note::

  You do NOT need to build any of the scripts in this section. Just read on and watch the video to get the big picture idea of what our goals are.

This video introduces the idea:

.. youtube:: G7EHhPadls8
    :height: 315
    :width: 560




.. pseudo_h3:: Key "Why" Ideas

To recap the video, our reasons for using this technique:

#. It is silly to repeat basic recipes like "Make an index counter, repeat (length of list) times, do something to current item, increment counter". The only part that changes is the do something to current item part… one rule of good programming is if you have to say the same thing over and over, you are probably doing it wrong.

#. The code ends up much more readable. Which of these is easier to read and understand the intent of:

   .. image:: Images/BYOB61a.png
   OR

   .. image:: Images/BYOB61b.png

#.	Writing code in this fashion can help us write programs that can run in a parallel fashion (be split between multiple machines that cooperate to do a job… more on this later.


.. pseudo_h3:: Imperative vs Declarative

Reason #2 gets at the issue of programming style. **Imperative programming** is specifying exactly what to do. **Declarative programming** is describing the results you want to see.

.. code::

  Imperative add numbers in (list):
  	Set index to 1
  	Set total to 0
  	Repeat (length of list)
  		Change total by (item (index) of (list))
  		Change index by 1
  	Report total

  Declarative add numbers in (list):
  	Report (sum of all items in (list))


Sound too good to be true? Well, someone still needs to specify for the computer how to "sum of all items"… behind the scenes somewhere there has to be code to produce something like the imperative version. But, if we can come up with a list of declarative statements (like "sum of all items in") that are sufficiently general to be worthwhile, we can write the code for them once and then repeatedly make use of them. Some programming languages focus on this technique of identifying general recipes and defining algorithms in terms of applications of these recipes - of stating what you want done as opposed to exactly how to do it.

Most modern programming languages allow at least some use of this idea. BYOB does in the form of higher order functions… we can build recipes that take a function and apply it in a standard way to a list of data.
