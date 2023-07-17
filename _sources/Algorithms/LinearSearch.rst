.. include:: ../global.rst

.. add_script:: https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js
   :defer:

.. index:: 
    pair: search; linear

Linear Search
=================================

Computers spend lots of time working with large lists of data. One of the fundamental tasks they do with that data is to search it for particular values - say looking up a particular student record so it can be displayed.

What is the simplest method for searching a list of elements? Check the first item, then the second item, and so on until you find the target item or reach the end of the list. Because we progress in a straight line through the list items, it is known as a **linear search**. Of course, to be an effective algorithm, we have to specify it in terms of operations a computer can do.

Assume a list called ``list``, filled with integers. Each integer in the list has a unique location in the list - called its **index**. The task is to search for the location of a particular value - often called the ``key``. Here's how to do the search:

.. faux_code::

    \     *Note: assume that list and key are already set*
    1   set ``location`` = 0
    2   repeat while ``location`` < (length of the ``list``)
    3       if ``list[location]`` == ``key`` 
    4           print "Found at " + ``location``
    5           end program
    6       set ``location`` = ``location`` + 1     *advance to next location*
    7    
    8   print "Value not found"

Note that ``location`` here is a variable that stores the index we are currently looking at in the list. ``list[location]`` is the standard way of saying "the value in ``list`` at ``location``".

You can try doing a linear search below. Type the number you wish to search for in the text box, then step through the search. Each "Step" in the animation takes you through the repeat loop one time. Try following the algorithm above step by step as you watch the animation.
    
.. raw:: html

    <script>
      function step(id) {
        var pjs = Processing.getInstanceById(id);
        var key = document.getElementById('key').value;
        
        var index = pjs.step(key);
        pjs.draw();
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
        //pjs.draw();
      }
    </script>
    <div align="center">
    <canvas id="LinearSearch" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="LinearSearch">
        int[] numbers = new int[20];
        boolean isKeySet = false;
        int keyInUse;
        boolean done = false;

        // Setup the Processing Canvas
        void setup() {
          size(580, 400);
          strokeWeight(2);
          background(255,255,255);
         // noLoop();

          for (int i = 0; i < numbers.length; i++) {
            numbers[i] = 5*(i+1) + (int)random(5);
          }

          reset();
        }

        // Main draw loop
        void draw() {
          background(255,255,255);
          drawBars();
        }

        int getMax(int[] numbers) {
          // Find maximum integer
          int max = numbers[0];
          for (int i = 1; i < numbers.length; i++) {
            if (max < numbers[i]) {
              max = numbers[i];
            }
          }
          return max;
        }

        void drawBars() {
          double h = height * 0.80;
          double w = width - 60;
          double unitWidth = w * 1.0 / numbers.length;
          int max = getMax(numbers);

          for (int i = 0; i < numbers.length; i++) {
            fill(#C0C0C0); // Color dim gray
            rect(i * unitWidth + 30, height
              - ((numbers[i] + 1) / max) * h, unitWidth, ((numbers[i] + 1) / max) * h - 20);
            fill(0, 102, 153); 
            text(numbers[i], (i +0.5) * unitWidth+ 22,
              height - ((numbers[i] + 1) / max) * h - 7); 
            text(i, (i +0.5) * unitWidth+ 22, height - 5); 
          }

          text("index", 5, height - 5); 

          fill(#677915);
          if (isKeySet) {
            text("Search for key " + keyInUse, 10, 15); 
            text("location: " + (coloredBarIndex), 10, 30); 
          }
         
          fill(#96c170); 
          if (coloredBarIndex >= 0) {
            int i = coloredBarIndex;
            rect(i * unitWidth + 30, height
              - (numbers[i] + 1) / max * h, unitWidth, ((numbers[i] + 1) / max) * h - 20);
          }
        }

        int coloredBarIndex = -1;

        void reset() {
          isKeySet = false;
          coloredBarIndex = -1;
          done = false;

          // Fill canvas grey
          background(new color("white"));

          for (int i = 0; i < numbers.length; i++) {
            int index = int(random(numbers.length));
            int temp = numbers[index];
            numbers[index] = numbers[i];
            numbers[i] = temp;
          }
        }

        int getKey() {
          return keyInUse;
        }

        int step(int key) {
          if (!isKeySet) {
            isKeySet = true;
            keyInUse = key; // Set key in the first step
          }

          if (done)
            return coloredBarIndex;

          coloredBarIndex++;

          if (coloredBarIndex >= numbers.length) {
            return -2; // Out of range
          }

          //draw();

          if (numbers[coloredBarIndex] == keyInUse) {
            done = true; // Found
            return coloredBarIndex;
          }
          else {
            return -1;
          }
        }
    </script>
    <p></p> 
    <div align="center">
      Value to search for (key): <input type="text" value="39" id="key" style="text-align: right">
    <button type="button" onclick="step('LinearSearch')">Step</button>
    <button type="button" onclick="reset('LinearSearch')">Reset</button>
    <div style="font-size: 80%">Animation based on work by <a href="http://cs.armstrong.edu/liang/animation/animation.html">Y. Daniel Liang</a></div>
    </div>
    <br/>

Linear search is pretty easy, but it does have one big weakness - you potentially have to look at every item in the list. Imagine finding someone's number in a phone book with a linear search! While linear search works fine for small jobs, it does not scale well to larger problems.
   