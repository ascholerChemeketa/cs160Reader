.. include:: ../global.rst


.. index:: 
    pair: sort; merge

Merging
=================================

A problem solving method that is often utilized in computer science is called **divide-and-conquer**. In this paradigm, a problem is repeatedly divided into smaller and smaller sub-problems, until the solution to individual sub-problems becomes obvious. The solutions to these sub-problems are then combined to form a solution to the original problem.

The sorting algorithms we have learned to this point (Insertion sort and Selection sort) have been **quadratic** time algorithms: they require in the worst case :math:`O(n^2)` amount of time to sort **n** items. There are a number of sorting algorithms that perform much better than that - a common feature of most of them is some kind of reliance on a divide and conquer strategy. The algorithm we are going to examine is **Merge Sort**.

One of the keys to Merge Sort is an algorithm for merging two sorted lists into one big sorted list. We won't worry about computer pseudocode for this process, but here is human pseudocode:

.. faux_code::

    1   **How to Merge listA and listB into sortedList**
    1   repeat while until ``listA`` is empty AND ``listB`` is empty
    2       if ``listA`` is empty
    3           move first item from ``listB`` to end of ``sortedList``
    4       else if ``listB`` is empty
    5           move first item from ``listA`` to end of ``sortedList``
    6       else
    7           *Note: Items left in both A and B, pick smallest*
    8           if (first item from ``listA``) <= (first item from ``listB``)
    9               move first item from ``listA`` to end of ``sortedList``
    10          else
    11              move first item from ``listB`` to end of ``sortedList``

The video below demonstrates the process:

.. youtube:: EeQ8pwjQxTM?start=0&end=197
    :height: 315
    :width: 560

Think you have it? Give it a try below. Use the ListA and ListB buttons to move an item from the two sorted lists at the bottom to the new list at the top:

.. raw:: html

    <div align="center">
    <canvas id="Merge" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="Merge">
        int[] list = new int[8];
        int[] tempList = new int[list.length];

        int groupSize = list.length;
        int mergeStart;
        int mergeMid;
        int mergeEnd;
        int mergeI;
        int mergeJ;
        int mergeTarget;

        String error = "";

        boolean isSplitting;
        boolean isCopying;
        boolean startMergeStage;
        boolean startMergeLevel;



        // Setup the Processing Canvas
        void setup() {
          textAlign(CENTER, TOP);
          size(600, 400);
          strokeWeight(2);

          for (int i = 0; i < list.length; i++) {
            list[i] = i + 1;
          }

          reset();
          //noLoop();
          
        }


        boolean stepL() {
          if( mergeJ > mergeEnd && mergeI > mergeMid) 
              return true;
          
            
            if(mergeJ > mergeEnd || (mergeI <= mergeMid && list[mergeI] <= list[mergeJ])) {
              tempList[mergeTarget] = list[mergeI];
              mergeTarget++;
              mergeI++;
              error = "";
            } else {
              error = "Wrong list";
            }
            
            
          if( mergeJ > mergeEnd && mergeI > mergeMid) 
              return true;
          else
              return false;
        }

        boolean stepR() {
          if( mergeJ > mergeEnd && mergeI > mergeMid) 
              return true;
          
            if(mergeI > mergeMid || (mergeJ <= mergeEnd && list[mergeJ] <= list[mergeI])) {
              tempList[mergeTarget] = list[mergeJ];
              mergeTarget++;
              mergeJ++;
              error = "";
            } else {
              error = "Wrong list";
            }
            
          if( mergeJ > mergeEnd && mergeI > mergeMid) 
              return true;
          else
              return false;
        }

        // Main draw loop
        void draw() {
          // Fill canvas grey
          background(#ffffff);

          stroke(#000000);
          fill(#677915);
          int starth = 0;
          
          drawBars();
          drawMergeBars();

          if(error != "") {
            fill(#ee2222);
            text("Wrong list!", width / 2, 15); 
          }
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
          int h = (int)(height * 0.35);
          float starth = height - 20;
          float w = width - 60;
          int unitWidth = (int)(w * 1.0 / (list.length + 1));
          float xstart = (width - unitWidth * (list.length + 1)) / 2;

          int max = getMax(list);
          stroke(#000000);


          
          int i = 0;
          for (; i < list.length; i++) {
            if(i == mergeMid + 1)
                xstart += unitWidth;

            if( groupSize > list.length || (i >= mergeI && i <= mergeMid) || (i >= mergeJ)  ) {
                int boxSize = (int)(h * (list[i]) / max);
                //fill(#C0C0C0); // Color dim gray
                if(isSplitting)
                    int colorVal = (int)(i / groupSize) % 2 * 43.0 + 192;
                else
                    int colorVal = (int)(i / groupSize *2) % 2 * 43.0 + 192;

                fill(colorVal, colorVal, colorVal);
                //rect(i * unitWidth + xstart, height - ((list[i]) / max) * h, unitWidth, ((list[i]) / max) * h + 20);
                rect(i * unitWidth + xstart, starth - boxSize, unitWidth, boxSize + 1) ;
                fill(0, 102, 153);
                text(list[i], xstart + (i + 0.5) * unitWidth, starth - boxSize - 15); 
            }
          }

          fill(0, 102, 153);
          textAlign(CENTER, TOP);
            text("ListA", xstart + 1 *unitWidth, starth +5); 
            text("ListB", xstart + 6 *unitWidth, starth +5); 



        }


        void drawSplits() {
          int h = (int)(height * 0.35);
          float starth = height - 39;
          float w = width - 60;
          int unitWidth = (int)(w * 1.0 / list.length);
          float xstart = (width - unitWidth * list.length) / 2;
          int max = getMax(list);
          stroke(#ee2222);
            noFill();

          if( isSplitting ) {
            if( groupSize < list.length) {
                  int boxSize = (int)(h * (max) / max);
                  fill(0, 102, 153);
                  text("Splitting into groups of " + groupSize, width/2, 5);
                  noFill();
                  for (int i = 0; i < list.length / groupSize; i++) {
                    rect((groupSize * i * unitWidth) + xstart, starth - boxSize, (groupSize * unitWidth), boxSize+ 20 ) ;
                  }
            }
          } else {
                int boxSize = (int)(h * (max) / max);
                fill(0, 102, 153);
                text("Merging groups of " + (groupSize / 2) + " into groups of " + groupSize + " in temporary list", width/2, 5);
                noFill();
                
              rect((mergeStart * unitWidth) + xstart, starth - boxSize, ((groupSize/2) * unitWidth), boxSize + 20 ) ;
              rect(((mergeMid+1) * unitWidth) + xstart, starth - boxSize, ((groupSize/2) * unitWidth), boxSize + 20) ;
              
          } 

        }

        void drawMergeBars() {
          int h = (int)(height * 0.35);
          float starth = height * .50;
          float w = width - 60;
          int unitWidth = (int)(w * 1.0 / list.length);
          float xstart = (width - unitWidth * list.length) / 2;
          int max = getMax(list);
          stroke(#000000);

          for (int i = 0; i < list.length; i++) {
                int boxSize = (int)(h * (tempList[i]) / max);
              fill(#C0C0C0); // Color dim gray
            int colorVal = (int)(i / groupSize ) % 2 * 43.0 + 192;
              fill(colorVal, colorVal, colorVal);
              //rect(i * unitWidth + xstart, height - boxSize, unitWidth, ((list[i]) / max) * h + 20);
              rect(i * unitWidth + xstart, starth - boxSize - 20, unitWidth, boxSize) ;
              fill(0, 102, 153);
              if(tempList[i]> 0)
                text(tempList[i],  (i + .5) * unitWidth + xstart, starth - boxSize - 35); 
              //text((i+1), (i + .5) * unitWidth + xstart, starth - 15); 
          }


          //drawSingleBars();
        }

        void reset() {
          list = new int[list.length];
          tempList = new int[list.length];
          
          shuffleList();
          groupSize = 8;
          
          mergeI = 0;
          mergeEnd = 0;
          mergeStart = 0;
          mergeEnd = list.length - 1;
          int mid = (int)((mergeStart + mergeEnd)/2);
          mergeJ = mid + 1;
          mergeMid = mid;
          mergeTarget = mergeStart;

          isSplitting = false;
          isCopying = false;
          startMergeStage = false;
          startMergeLevel = false;
        }

        void shuffleList() {
          int i = 1;
          int j = 0;
          int k = (list.length / 2);
          while (j < list.length / 2 || k < list.length) {
            if(j >= list.length / 2) {
              list[k++] = i++;
            }
            else if( k >= list.length) {
              list[j++] = i++;
            }
            else {
              if((int)random(2) == 0) 
                list[k++] = i++;
              else
                list[j++] = i++;
            }
          }
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
      function resetLarge(id) {
          var pjs = Processing.getInstanceById(id);
          pjs.resetLarge();
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
      <button type="button" onclick="stepL('Merge')">Merge from List A</button>
      <button type="button" onclick="stepR('Merge')">Merge from List B</button>
      <button type="button" onclick="reset('Merge')">Reset</button>
    <div style="font-size: 80%">Animation based on work by <a href="http://cs.armstrong.edu/liang/animation/animation.html">Y. Daniel Liang</a></div>
    </div>
    <br/>

Once you have merging down, move on to Merge Sort on the next page. Remember for later what was mentioned at the end of the video - merging **n** items is a **linear algorithm** - it takes :math:`O(n)` time.