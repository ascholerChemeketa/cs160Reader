.. include:: ../global.rst


.. index:: moore's law

Moore's Law
=================================
    
.. sidebar:: Gordon Moore

    .. figure:: Images/Moore.jpg

        Image © Intel Corporation
    
    
In the 1960s, Gordon Moore, one of the co-founders of Intel, noticed that integrated circuits were becoming more complex at an exponential rate. He predicted that this growth would continue - that the number of transistors on a circuit would double every two years. This prediction came to be called **Moore's Law**. Although Moore was focused on the number of transistors on a chip, others have expanded his idea into a prediction for overall performance increases. The combined benefits of increased complexity and speed in chips have resulted in processing power doubling every 18 months. Thus the term "Moore's Law" is used to refer to this idea that overall processing power doubles every year and a half.

Based on this idea that processing power doubles every 1.5 years, a processor that comes out today is roughly 4x more powerful than one from 3 years ago and 16x more powerful than one from six years ago. (This helps explain why computers need to be upgraded so frequently.) 

================    ========    ========    ========    ========    ========    ========    ======== 
Years               1.5         3           4.5         6           7.5         ...         15          
Doublings           1           2           3           4           5           ...         10          
Relative Power      x2          x4          x8          x16         x32         ...         x1024           
================    ========    ========    ========    ========    ========    ========    ========   
    

This continuous doubling and redoubling of computing power in chips has held steady for the past 40+ years. To put this kind of growth into perspective: If Moore’s Law applied to the air travel industry, a flight from New York to Paris that took 7 hours and cost $900 in 1978 would now require about 1/10th of a second and cost under a penny.

    
.. figure:: Images/TransistorCounts.png

   `Wikimedia Commons <http://en.wikipedia.org/wiki/Moore's_law#mediaviewer/File:Transistor_Count_and_Moore%27s_Law_-_2011.svg>`__ - `CC-BY-SA-3.0 <http://creativecommons.org/licenses/by-sa/3.0>`__
   
   Transistor count of various processors over the past 40 years. Note that the y-axis is a logarithmic scale - the straight line represents exponential growth.
   
Unfortunately, the "free ride" of increased power that computer programmers and users have enjoyed has hit some speed bumps. Partly, this is the necessity of squeezing transistors into ever-smaller spaces. Currently, features on chips occupy ~20 nanometers, a span of fewer than 100 atoms, we do not have too much longer before the size of atoms becomes a barrier to making chips smaller.

Equally importantly, making chips run faster requires more power. Power running through a chip results in waste heat that must be dissipated - only so much power can be used (and thus heat generated) before a chip becomes uncontrollably hot. The image below shows the path chip designers were on in the early 2000s... an unsustainable path in terms of how much power draw was being packed into ever-smaller spaces.

.. figure:: Images/power.png

   Image from `Beauty and Joy of Computing by University of California <http://bjc.berkeley.edu/>`__ - `CC-BY-SA-3.0 <http://creativecommons.org/licenses/by-sa/3.0>`__
   
   Projected power density growth through the early 2000s. Red dots show the predicted path.

