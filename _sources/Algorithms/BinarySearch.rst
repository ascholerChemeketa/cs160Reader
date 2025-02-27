.. include:: ../global.rst

.. add_script:: https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js
   :defer:

.. index::  
    pair: search; binary

Binary Search
=================================

If a list is sorted, we can describe a more efficient algorithm than linear search. For a sorted list, any value you check gives you some information about the relative location of the thing you are looking for. Imagine you pick up a phone book looking for "Davis, Sue". You flip to the middle somewhere and see "Jones" - oops you are too far in, so you jump way earlier in the book. Now you see "Evans" - still too far back - so you jump earlier again. Then you see "Clark" - that means you need to jump back partway to where "Evans" was...

This is essentially the strategy of **binary search**. To do a binary search for a particular value (``key``) in a list, check the middle item in the list. If it is not the key and the key is smaller than the middle item, the target must be in the first half of the list. If the target is larger than the middle item, the target must be in the last half of the list. Thus, one unsuccessful comparison reduces the number of items left to check by half!

To continue, if the item you are looking for is less than the value you just checked, throw out everything at or above the middle. If the value you are looking for is bigger, throw out everything from the middle value down. Then repeat the process but only using the values you have not thrown out. The splitting process continues until the target is located or there is nothing left in the list.

Try watching the algorithm run on various values. Note that items that have turned white have been "thrown out" and no longer need to be worried about. Gray items show the range of possible locations that still need to be checked:
    
.. raw:: html

    <script>
      function step(id) {
        var pjs = Processing.getInstanceById(id);
        var key = document.getElementById('key').value;
        
        var index = pjs.step(key);
        if (index == -2) {
          alert("Key " + pjs.getKey() + " is not in the list\nClick Reset to start over" );        
        }
        else if (index >= 0) {
          alert("Key " + pjs.getKey() + " is at index " + (index+1) + "\nClick Reset to start over");        
        }; 
      }
      
      function reset(id) {
        var pjs = Processing.getInstanceById(id);
        var key = document.getElementById('key').value;
        pjs.reset();
        pjs.draw();
      }
      
    </script>
    <div align="center">
    <canvas id="BinarySearch" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="BinarySearch">
        int[] list = new int[20];
        boolean isKeySet = false;
        int keyInUse;
        boolean done = false;
        int coloredBarIndex = -1;

        int low = 0;
        int high = list.length - 1;
        int mid = int((low + high) / 2);

        // Setup the Processing Canvas
        void setup() {
          size(580, 400);
          strokeWeight(2);
          //noLoop();
          //randomSeed(0);
          
          for (int i = 0; i < list.length; i++) {
            list[i] = 5*(i) + (int)random(5);
          }

          reset();
        }

        int getMax(int[] list) {
          // Find maximum integer
          int max = list[0];
          for (int i = 1; i < list.length; i++) {
            if (max < list[i]) {
              max = list[i];
            }
          }
          return max;
        }

        void draw() {
            background(255,255,255);
          double h = height * 0.80;
          double w = width - 60;
          double unitWidth = w * 1.0 / list.length;
          int max = getMax(list);

          for (int i = 0; i < list.length; i++) {
            fill(new color("white")); // Color dim gray
            rect(i * unitWidth + 30, height - 20
              - ((list[i] + 1) / max) * h, unitWidth, ((list[i] + 1) / max) * h);
            fill(0, 102, 153); 
            text(list[i], (i +0.5) * unitWidth+ 22, height - 22 - ((list[i] + 1) / max) * h); 
            text((i), (i +0.5) * unitWidth+ 22, height - 5); 
          }

          text("index", 5, height - 5); 

          for (int i = low; i <= high; i++) {
            fill(#C0C0C0); // Color dim gray
            rect(i * unitWidth + 30, height - 20
              - ((list[i] + 1) / max) * h, unitWidth, ((list[i] + 1) / max) * h);
          }

          
          if (isKeySet) {
            fill(#677915);
            text("Search for key " + keyInUse, 10, 15); 
            text("Current low index:  " + (low), 10, 30); 
            text("Current high index: " + (high), 10, 45); 
            text("Current mid index:  (" + (low) + " + " + (high) + ") / 2 rounded down = " + (mid), 10, 75); 
            if(low > high)
                text("Low index is higher than high index - value is not present!", 10, 90); 
            else {
                if(list[mid] < keyInUse)
                    text("Middle value = " + list[mid] + " throw out it and everything below", 10, 90); 
                if(list[mid] > keyInUse)
                    text("Middle value = " + list[mid] + " throw out it and everything above", 10, 90); 
                if(list[mid] == keyInUse)
                    text("Value found at middle index", 10, 90); 
                fill(#96c170); 
                rect(mid * unitWidth + 30, height - 20
                  - ((list[mid] + 1) / max) * h, unitWidth, ((list[mid] + 1) / max) * h);
            }
          }
        }

        int getKey() {
          return keyInUse;
        }

        void reset() {
          isKeySet = false;
          coloredBarIndex = -1;
          done = false;

          low = 0;
          high = list.length - 1;
          mid = int((low + high) / 2);

          // Fill canvas grey
          background(new color("white"));
        }

        int step(int key) {
          if (!isKeySet) {
            isKeySet = true;
            keyInUse = key; // Set key in the first step
          }
          else {
              if (done) return 1;

              if (low > high)
                return -2;

              if (keyInUse == list[mid]) {
                done = true;
                return mid;
              }
              else if (keyInUse > list[mid]) {
                low = mid + 1; // Continue to search the second half
                mid = int((low + high) / 2);
                
                if (low > high)
                    return -2;
                    
                return -1;
              }      
              else { // keyInUse < list[mid] 
                high = mid - 1; // Continue to search the first half
                mid = int((low + high) / 2);
              
                if (low > high)
                    return -2;
                return -1;
              }  
          }
        }
    </script>
    <p></p> 
    <div align="center">
      Value to search for (key): <input type="text" value="39" id="key" style="text-align: right">
    <button type="button" onclick="step('BinarySearch')">Step</button>
    <button type="button" onclick="reset('BinarySearch')">Reset</button>
    <div style="font-size: 80%">Animation based on work by <a href="http://cs.armstrong.edu/liang/animation/animation.html">Y. Daniel Liang</a></div>
    </div>
    <br/>


Below are the main steps of the binary search algorithm, expressed in pseudocode. To do a binary search you need to keep track of the ``lowIndex``, the lowest possible location the number could be at, and the ``highIndex``, the highest possible location. Each time at each step of the loop you calculate the middle between those two locations and check that ``middleIndex``. If you do not find what you are looking for, you change either the low or high boundary to "throw out" half of the remaining items. Try running the algorithm by hand and make sure you can predict the values the animation above shows.

.. faux_code::

    \     *Note: assume that list and key are already set*
    1   set ``lowIndex`` = 0
    2   set ``highIndex`` = length of ``list`` - 1
    3   repeat until ``lowIndex`` is larger than ``highIndex``
    4       set ``middleIndex`` = (``lowIndex`` + ``highIndex``)/2   *round down*
    5       set ``middleValue`` = ``list[middleIndex]``
    6       if ``middleValue`` == ``key``
    7           print "Found at " + ``middleIndex``
    8           end program
    9       
    10      *Note: We didn't find, it check to see if too high or too low:*
    11      if ``middleValue`` > ``key`` then
    12          *Note: Too high, change the upper bound*
    13          ``highIndex`` = ``middleIndex`` - 1
    14      else 
    15          *Note: Too low, change the lower bound*
    16          ``lowIndex`` = ``middleIndex`` + 1
    17
    18  print "Value not found"
   
Although binary search is more complex than linear search and depends on the items being in order, it can be substantially more efficient. The 20 items above never take more than 6 steps to check. If the list was 100 items it would never take more than 8 steps. 100,000 items could be searched in just 19 steps! We will take a closer look at just how efficient this algorithm is later.
   
