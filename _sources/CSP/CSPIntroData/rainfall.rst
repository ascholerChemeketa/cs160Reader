..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: csp-16-9-

Rainfall Problem
=========================

.. index:: Rainfall problem

Let's imagine that you have a list that contains amounts of rainfall for each day, collected by a meteorologist.  Her rain gathering equipment occasionally makes a mistake and reports a negative amount for that day.  We have to ignore those.  We need to write a program to (a) calculate the total rainfall by adding up all the positive integers (and only the positive integers), (b) count the number of positive integers (we will count with "1.0" so that our average can have a decimal point), and (c) print out the average rainfall at the end.  Only print the average if there was some rainfall, otherwise print "No rain".

.. parsonsprob:: 16_9_1_rainfall
  :numbered: left
  :adaptive:

  Construct a program that correctly solves the rainfall problem
  -----
  # initialize the variables
  rain = [0,5,1,0,-1,6,7,-2,0]
  sumRain = 0
  count = 0
  =====
  # loop through the values in the list
  for day in rain:
  =====
      # if the value of day is positive
      if day >= 0:
  =====
          # add day to the sum
          # also add one to count
          sumRain = sumRain + day
          count = count + 1.0
  =====
  # if count is positive
  if count > 0:
  =====
      # calculate and print the average
      ave = sumRain / count
      print("Average",ave)
  =====
  # otherwise
  else:
  =====
      # print no rain
      print("No rain")




Type the program here and try it.  Does it work like you thought it would?

.. activecode:: Rainfall_AC

    # initialize the variables
    rain = [0,5,1,0,-1,6,7,-2,0]
    sumRain = 0
    count = 0

    # Your code goes here


