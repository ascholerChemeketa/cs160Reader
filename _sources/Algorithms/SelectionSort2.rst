.. include:: ../global.rst


.. index:: 
    pair: sort; selection

Selection Sort Code
=================================

Turning the selection sort into an algorithm for a computer requires a little more detail than the version a human can use to sort cards. The basic strategy is the same, but instead of a marker and two hands, we need to use variables to store locations in the list that we care about.

In the code below, ``i`` is equivalent to the black line - it marks the start of the unsorted portion of the list. ``j`` is the right hand - it stores the location we are at as we scan for the next smallest card. Finally, ``currentMinIndex`` is the left hand - it remembers where the smallest value we have seen is as we sweep through the unsorted part of the list. Also, recall that ``list[j]`` means "the value in the list at location j".

Don't worry about memorizing the algorithm, but do refer to it as you use the animation below.

.. faux_code::

    \     *Note: assume that list already exists*
    1   ``i`` = 1                                    *i marks start of unsorted cards*
    2   repeat (length of the ``list``) times:
    3       ``currentMinIndex`` = ``i``                 *curentMinIndex is the "left hand"*
    4       ``currentMin`` = ``list[currentMinIndex]``  *smallest value seen so far*
    5       ``j`` = ``i``                               *j is the "right hand"*
    6       
    7       *Note: find smallest remaining card*
    8       repeat while ``j`` <= (length of ``list``)
    9           if ``list[j]`` < ``currentMin``
    10              *Note: New smallest card - move "left hand"*
    11              ``currentMinIndex`` = ``j``
    12              ``currentMin`` = ``list[j]``
    13          ``j`` = ``j`` + 1                       *shift "right hand"*
    14       
    15      *Swap smallest unsorted with first unsorted*
    16      ``list[currentMinIndex]`` = ``list[i]``
    17      ``list[i]`` = ``currentMin``
    18  
    19      ``i`` = ``i`` + 1                           *move start of unsorted one to right*
    

The animation below allows you to step through a selection sort. Each step either advances the "right hand" or does a swap and then advances the "marker". Step through some sorts and refer to the algorithm above until you see how ``i``, ``j``, and ``currentMin`` are being used to keep track of locations in the list and can predict the outcome of steps before clicking the button.

.. _selectionSortAnimation:
    
.. raw:: html

    <div align="center">
    <canvas id="SelectionSort" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="SelectionSort">
        int[] list = new int[10];

        int curi = 0;
        int curj = 0;
        int currentMin = 0;
        int currentMinIndex = list[curi];
        boolean swapping = false;

        // Setup the Processing Canvas
        void setup() {
          size(580, 400);
          strokeWeight(2);
          noLoop();

          for (int i = 0; i < list.length; i++) {
            list[i] = i + 1;
          }

          reset();
        }

        // Main draw loop
        void draw() {
          // Fill canvas grey
          background(new color("white"));

          

          drawBars();
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

        void drawBars() {
          double h = height * 0.6;
          double w = width - 60;
          double unitWidth = w * 1.0 / list.length;
          int max = getMax(list);

          for (int i = 0; i < list.length; i++) {
            if(i < curi || curi == list.length - 1)
                fill(#ffffff);
            else
                fill(#C0C0C0); // Color dim gray
            rect(i * unitWidth + 30, height
              - ((list[i] + 1) / max) * h, unitWidth, ((list[i] + 1) / max) * h - 20);
            fill(0, 102, 153); 
            text(list[i], (i + .5) * unitWidth + 22,
              height - ((list[i] + 1) / max) * h - 7); 
            text((i+1), (i + .5) * unitWidth + 22, height - 5); 
          }

          text("index", 5, height - 5); 
          
          drawSingleBars();
                    fill(#b1841d);
           text("i = " + (curi + 1) , 10, 15); 
                    fill(#ee2222);
           text("j = " + (curj + 1) , 10, 30); 
                    fill(#677915);
           text("currentMin = " + currentMin , 10, 45); 
           text("currentMinIndex = " + (currentMinIndex + 1) , 10, 60); 
        }

        void drawSingleBars() {
          double h = height * 0.6;
          double w = width - 60;
          double unitWidth = w * 1.0 / list.length;
          int max = getMax(list);
          
          if(curj == list.length - 1 && curi < list.length - 1) {
                text("Smallest value is = " + currentMin + " Swap it to location " + (curi + 1), 200, 15); 
                  stroke(#b1841d); 
                  noFill();
                    rect(curi * unitWidth + 30, height
                      - (list[curi] + 1) / max * h, unitWidth, ((list[curi] + 1) / max) * h - 20);
                stroke(#000000); 
            }

          if(swapping) {
              stroke(#b1841d); // Color green
              fill(#C0C0C0); // Color green

                rect(currentMinIndex * unitWidth + 30, height
                  - (list[currentMinIndex] + 1) / max * h, unitWidth, ((list[currentMinIndex] + 1) / max) * h - 20);
              
              stroke(#000000); // Color green
              fill(#96c170); // Color green
              rect(curi * unitWidth + 30, height
                  - (list[curi] + 1) / max * h, unitWidth, ((list[curi] + 1) / max) * h - 20);
          }
          else {
              if(curi < list.length - 1) {
                  fill(#96c170);
                  if (currentMinIndex >= 0) {
                    rect(currentMinIndex * unitWidth + 30, height
                      - (list[currentMinIndex] + 1) / max * h, unitWidth, ((list[currentMinIndex] + 1) / max) * h - 20);
                  }
                  stroke(#ee2222); 
                  noFill();
                  if (curj >= 0) {
                    rect(curj * unitWidth + 30, height
                      - (list[curj] + 1) / max * h, unitWidth, ((list[curj] + 1) / max) * h - 20);
                  }
                  stroke(#b1841d); 
                  noFill();
                    rect(curi * unitWidth + 30, height
                      - (list[curi] + 1) / max * h, unitWidth, ((list[curi] + 1) / max) * h - 20);
                stroke(#000000); 
              }
          }
        }


        void reset() {
          shuffleList();
          curi = 0;
          curj = 0;
          currentMinIndex = 0;
          currentMin = list[curi];
          swapping = false;

          // Fill canvas grey
          background(new color("white"));

         }

        void resetMostlySorted() {

          list = {1, 3, 4, 2, 5, 7, 8, 6, 9, 10};
          curi = 0;
          curj = 0;
          currentMinIndex = 0;
          currentMin = list[curi];
          swapping = false;

          // Fill canvas grey
          background(new color("white"));
            
        }

        void shuffleList() {
          for (int i = 0; i < list.length; i++) {
            int index = int(random(list.length));
            int temp = list[index];
            list[index] = list[i];
            list[i] = temp;
          }
        }

        boolean step() {
          if (curi == -1) i = 0;   //start it
          if (curi > list.length - 2) return true; // Now the list is sorted

          if(swapping) {
                curi++; // Increase step
                currentMin = list[curi];
                currentMinIndex = curi;
                curj = curi;
                swapping = false;

                draw();

                if (curi > list.length - 2) return true; // Now the list is sorted
                
                return false;
          }


          if(curj < list.length - 1) {
                //not at end
                curj++;
                if (currentMin > list[curj]) {
                  currentMin = list[curj];
                  currentMinIndex = curj;
                }
          } else {
                //reached end
                // Swap list[i] with list[currentMinIndex] if necessary;
                if (currentMinIndex != curi) {
                    int temp = list[curi];
                    list[curi] = list[currentMinIndex];
                    list[currentMinIndex] = temp;
                }
                swapping = true;
          }


          
          draw();
          return false; // Not sorted yet
        }
    </script>
    <script>
      function step(id) {
        var pjs = Processing.getInstanceById(id);    
        var isSorted = pjs.step();
        if (isSorted) {
          alert("The list is now sorted.\nClick Reset to start over" );        
        }; 
      }
      
      function reset(id) {
        var pjs = Processing.getInstanceById(id);
        pjs.reset();
        pjs.draw();
      }  
      function resetMostlySorted(id) {
          var pjs = Processing.getInstanceById(id);
          pjs.resetMostlySorted();
          pjs.draw();
      }
      //this is needed to prevent processing rendering bug seen in chrome
      (function() {
        setTimeout(function() {
            $("span:last-of-type:contains('AAAAAAAA')").css("display","none");}, 50);
      })();
    </script>
    <p></p> 
    <div align="center">
    <button type="button" onclick="step('SelectionSort')">Step</button>
    <button type="button" onclick="reset('SelectionSort')">Reset</button>
    <button type="button" onclick="resetMostlySorted('SelectionSort')">Reset - Partial Sorted</button>
    <div style="font-size: 80%">Animation based on work by <a href="http://cs.armstrong.edu/liang/animation/animation.html">Y. Daniel Liang</a></div>
    </div>
    <br/>

