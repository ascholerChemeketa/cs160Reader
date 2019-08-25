.. include:: ../global.rst


.. index:: 
    pair: sort; merge

Merge Sort
=================================


So how does merging help us sort? Well, with it we can define Merge Sort (for a human) as the following:
    
.. faux_code::

    1   **How to MergeSort a list**
    2       if ``list`` has length = 1
    3           *A list of one thing is already sorted!*
    4           Do nothing
    5       else 
    6           ``listA`` = first half of ``list``
    7           ``listB`` = second half of ``list``
    8           *We split the lists, now sort each half by doing MergeSort on them*
    9           Do MergeSort on ``listA``
    10          Do MergeSort on ``listB``
    11          Do **Merge** on ``listA``, ``listB`` back into ``list``
      

.. index:: recursive
      
It looks almost like cheating... *How do you sort a list? You cut it in half and sort each half, then merge the halves together!* Note that the definition for **MergeSort** calls **MergeSort** on the halves of the list - that means it is a **recursive** definition, a function that is defined in terms of itself. So your initial list gets split into 2 halves. Each half gets split into 2 halves. Each of those gets split into half again... Until finally, we have lists of size 1. A list of size 1 is always sorted, so then we start merging the sorted lists of length 1 back into a sorted list of length 2. Then we merge the sorted lists of length 2 back into a sorted list of length 4... 

The video below demonstrates the process:

.. youtube:: EeQ8pwjQxTM
    :height: 315
    :width: 560
    :start: 198
    :end: 354
    
.. note:: 

    *A point of accuracy you can feel free to ignore...*
    
    The video and animation below merge lists in a slightly different order than the pseudocode. According to the pseudocode (and real implementations of Merge Sort), we would merge indexes 1 and 2, then 3 and 4, then {1, 2} and {3, 4}, then 5 and 6, then 7 and 8, then {5, 6} and {7, 8}, then finally {1, 2, 3, 4} and {5, 6, 7, 8}. Basically, we always go do as much as we can on the left half of the list we are working on, then backtrack to the right side. This order does not change anything about the efficiency or general process, but know that if you run the pseudocode algorithm by hand you will notice differences from the video/animation.

The animation below allows you to step through the process on a randomly generated list. 
    
.. raw:: html

    <div align="center">
    <canvas id="MergeSort" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="MergeSort">
        //Modified mergesort - only works on lists that are powers of 2 - processes levels at a time instead of normal
        //recursive order

        int[] list = new int[8];
        int[] tempList = new int[list.length];

        int groupSize = list.length;
        int mergeStart;
        int mergeMid;
        int mergeEnd;
        int mergeI;
        int mergeJ;
        int mergeTarget;

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

        void mousePressed() {
          //step();  
        }


        // Main draw loop
        void draw() {
          // Fill canvas grey
          background(#ffffff);

          stroke(#000000);
          fill(#677915);
          int starth = 0;
          
          /*
          text("mergeI:" + mergeI, 5, starth + 15); 
          text("mergeJ:" + mergeJ, 5, starth + 30); 
          text("mergeMid:" + mergeMid, 5, starth + 45); 
          text("mergeEnd:" + mergeEnd, 5, starth + 60); 
          text("groupSize:" + groupSize, 5, starth + 75); 
          */
          drawBars();
          if(!isCopying && groupSize <= list.length)
            drawSplits();
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
          int unitWidth = (int)(w * 1.0 / list.length);
          float xstart = (width - unitWidth * list.length) / 2;

          int max = getMax(list);
          stroke(#000000);


          
          int i = 0;
          for (; i < list.length; i++) {
            if( isSplitting || groupSize > list.length || (i >= mergeI && i <= mergeMid) || (i >= mergeJ)  ) {
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
            text((i+1), xstart+ (i + 0.5 ) * unitWidth, starth + 5); 
            }
          }
          text("index", xstart - 10, starth + 5); 

          if( !isSplitting && groupSize <= list.length)
            drawMergeBars();

          if( isCopying) {
              fill(0, 102, 153);
              text("Copying merged values back into list", width/2, 5);
          }
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
              text((i+1), (i + .5) * unitWidth + xstart, starth - 15); 
          }
          text("index", xstart - 10, starth - 15); 
          if(! isSplitting && !isCopying) {
          stroke(#ee2222);
            noFill();
              rect((mergeStart * unitWidth) + xstart, starth - h - 40 , ((groupSize) * unitWidth), h + 20 ) ; 
          }

          //drawSingleBars();
        }



        void drawSingleBars() {
          double h = height * 0.6;
          double w = width - 60;
          double unitWidth = w * 1.0 / list.length;
          int max = getMax(list);
          /*
          if(curj == 0 || list[curj] >= list[curj-1]) {
            text("Current item sorted, move to next item", 300, 15); 
            stroke(#000000); // Color green
            fill(#96c170); // Color 
            rect(curj * unitWidth + 30, height
            - (list[curj] + 1) / max * h, unitWidth, ((list[curj] + 1) / max) * h - 20);
          }
          if(curj != 0 && list[curj] < list[curj-1]) {
            text("Current item needs to swap to the left", 300, 15); 
            stroke(#eeee00); 
            fill(#ffffff); // Color green
            rect((curj-1) * unitWidth + 30, height
            - (list[(curj-1)] + 1) / max * h, unitWidth, ((list[(curj-1)] + 1) / max) * h - 20);
            stroke(#000000);

            stroke(#000000); // Color green
            fill(#96c170); // Color green
            rect(curj * unitWidth + 30, height
            - (list[curj] + 1) / max * h, unitWidth, ((list[curj] + 1) / max) * h - 20);

          }
          */
        }


        void reset() {
          list = new int[8];
          for (int i = 0; i < list.length; i++) {
            list[i] = i + 1;
          }
          groupSize = list.length;

          shuffleList();
          tempList = new int[list.length];
          
          mergeI = 0;
          mergeEnd = 0;

          isSplitting = true;
          isCopying = false;
          startMergeStage = false;
          startMergeLevel = false;
        }



        void resetLarge() { 
          list = new int[32];
          for (int i = 0; i < list.length; i++) {
            list[i] = i + 1;
          }
          shuffleList();
          groupSize = list.length;
          tempList = new int[list.length];
          
          mergeI = 0;
          mergeEnd = 0;

          isSplitting = true;
          isCopying = false;
          startMergeStage = false;
          startMergeLevel = false;

          
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
          
          if(isCopying) {
            for(int i = 0; i < list.length; i++) {
               list[i] = tempList[i]; 
            }
            isCopying = false; 
            startMergeStage = true;
            startMergeLevel = true;
            mergeStart = 0;
            groupSize *= 2;
            if (groupSize > list.length) return true; // Now the list is sorted
          }
          
          if(startMergeLevel) {
            if(isSplitting)
              groupSize *= 2;
              
            tempList = new int[list.length];
            mergeStart = -groupSize;
            startMergeLevel = false;
            isSplitting = false; 
            startMergeStage = true;
          }
          
          if (groupSize > list.length) return true; // Now the list is sorted
          
          if(isSplitting) {
            groupSize = groupSize / 2;
            if(groupSize == 1) {
              startMergeLevel = true; 
            }
            return false;
          }
          
          
          //merging - do one step
          
          if(startMergeStage) {
             //start of new stage
              mergeStart += groupSize;
              mergeEnd = mergeStart + groupSize - 1;
              mergeI = mergeStart; 
              int mid = (int)((mergeStart + mergeEnd)/2);
              mergeJ = mid + 1;
              mergeMid = mid;
              mergeTarget = mergeStart;
              startMergeStage = false;
              return false;
          }
          
          if(mergeJ > mergeEnd ||  (mergeI <= mergeMid && list[mergeI] <= list[mergeJ])) {
            tempList[mergeTarget] = list[mergeI];
            mergeTarget++;
            mergeI++;
          } else {
            tempList[mergeTarget] = list[mergeJ];
            mergeTarget++;
            mergeJ++;
          }
          
          if( mergeJ > mergeEnd && mergeI > mergeMid) {
            if( mergeJ == list.length ) {
              isCopying = true;
            } else {
              startMergeStage = true;
            }
          }
          
          
          draw();
         // delay(1000);
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
      <button type="button" onclick="step('MergeSort')">Step</button>
      <button type="button" onclick="reset('MergeSort')">Reset 8 Items</button>
      <button type="button" onclick="resetLarge('MergeSort')">Reset 32 Items</button>
    <div style="font-size: 80%">Animation based on work by <a href="http://cs.armstrong.edu/liang/animation/animation.html">Y. Daniel Liang</a></div>
    </div>
    <br/>

