.. include:: ../global.rst

.. index:: nearest neighbor

Pattern Recognition (Ch 6) 
=========================================

.. pseudo_h3:: Nearest Neighbor
    :class: underlined

.. pseudo_h4:: Nearest Single Neighbor

A nearest neighbor coloring tries to mark each uncolored square with the sample that is closest to it. We will count diagonal 
squares as 1.5 distance. When there for nearest neighbor tie between two colors, leave the square blank. The example below walks through the process.

.. |text1| replace:: Starting, off we know the value of these 6 squares:
.. |text2| replace:: Anything right next to only one known cell is easy - distance of 1 can't be beat (remember diagonal is distance 1.5): |br| |br| *I have colored the new squares light blue/pink so we do not lose track of which squares are the known samples. We will never color a new square based on one we have "guessed" (a pink/light blue one), only based on the known squares (red/blue).*
.. |text3| replace:: The two white squares in the upper right are 1 away from both red and blue. They are a tie. Now let us look at the other two squares. The middle left white square is 1.5 away from blue and from red (diagonal). That is a tie, so it stays white:
.. |text4| replace:: Now the lower right white square. It is 1.5 away from a red and 2.5 away from a blue (sideways = 1, diagonal = 1.5). Red wins, giving us the final coloring shown below.
.. |text5| replace:: Final nearest neighbor coloring. Pink/Blue show squares we can make an educated guess about. White ones we are too unsure about to guess at.

========================================================================    ===========================
|text1|                                                                     .. image:: Images/nn1.png
|text2|                                                                     .. image:: Images/nn2.png
|text3|                                                                     .. image:: Images/nn3.png
|text4|                                                                     .. image:: Images/nn4.png
|text5|                                                                     .. image:: Images/nn5.png
========================================================================    ===========================


   
.. pseudo_h4:: Nearest 3 Neighbors 

Nearest three neighbors is the same idea, but we look at the closest three known values to color each cell. If 2 of the closest known ones are one color and 1 is the other, we chose the color that has 2 "votes". This prevents say one red square in a sea of blue from having much influence.

.. |text6| replace:: Starting from the same known squares:
.. |text7| replace:: The two in the top row are closest to the 2 blue and one red squares… they all become blue:
.. |text8| replace:: These next two cells have these three as "nearest three neighbors:
.. |text9| replace:: This next cell is pink. It is closest to 2 red and 1 blue:
.. |text10| replace:: These all become pink as well. Each is pretty easy to determine visually:
.. |text11| replace:: Now the square above the bottom blue. It is 1 away from the blue below it, 2 away from the blue above it, 2 away from the red below it and 2.5 away from the red above and to the right. 2 blues and one red are closest, so it is blue:
.. |text12| replace:: Those bottom two are closest to the two bottom reds and the one bottom blue… they must be pink:
.. |text13| replace:: Finally, the last square. It is 1.5 from a red and blue (the diagonal neighbors). It is 2.5 away from the upper left blue and lower left red and lower right red. We have a tie for 3rd closest value and the first two closest were split. We will call this a tie. (We could take votes for the most common 3rd closest color, but we will not complicate things by doing so).
.. |text14| replace:: The final result with 3-nearest neighbors. |br| Notice that compared to Nearest Single Neighbor, we have fewer tied squares and that some of the squares have switched from the nearest neighbor map. The 3-nearest tends to smooth out the pattern and favor contiguous regions of blue and red.

========================================================================    ===========================
|text6|                                                                     .. image:: Images/nn6.png
|text7|                                                                     .. image:: Images/nn7.png
|text8|                                                                     .. image:: Images/nn8.png
|text9|                                                                     .. image:: Images/nn9.png
|text10|                                                                    .. image:: Images/nn10.png
|text11|                                                                    .. image:: Images/nn11.png
|text12|                                                                    .. image:: Images/nn12.png
|text13|                                                                    .. image:: Images/nn13.png
|text14|                                                                    .. image:: Images/nn14.png
========================================================================    ===========================