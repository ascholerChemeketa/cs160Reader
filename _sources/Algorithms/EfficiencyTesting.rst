.. include:: ../global.rst



Efficiency Testing
=================================

We are going to try running some real procedures so we can understand their efficiency. To understand
the efficiency of a procedure, we need to run it with different input sizes and time how long it takes
for each of the inputs. Then, we look for a pattern in the results. All of the procedures will exhibit one of these
three patterns:

* If the procedure takes about the same time no matter what the input is, that procedure is **Constant** or :math:`O(1)`.
  
  Note that every time you run a procedure, it will not take the exact same amount of time - even for the same size input.
  There is some variability based on what else the computer is doing as it runs the program. **Constant** does not mean 
  it always takes exactly the same time. It means that it always takes *about the same amount of time*, regardless of
  the input size.
* If each time we increase the input size by 2, it produces a similar increase in the time the procedure takes,
  it is **Linear** or :math:`O(n)`. 
  
  For example: we try input size 4, and that takes 0.8 seconds; we try input size 6
  and that takes 1.12 seconds; we try input size 8 and that takes 1.39 seconds. Each time we increase the input
  by 2, the time increases by ~0.3 seconds. This is linear growth.
  
  Again, you should not expect the pattern to be absolutely perfect.
  Going up by 0.32 one time, and 0.27 the next, and maybe 0.29 the next would be considered linear growth.
* If each time we increase the input by size 2, the time increases by more and more and more, we are looking at a
  **Quadratic** or :math:`O(n^2)` algorithm. (To be precise, if you calculate the increase from one step to the next,
  it should increse at a fairly steady rate).

  For example: we try input size 4, and that takes 0.8 seconds; we try input size 6
  and that takes 1.4 seconds; we try input size 8 and that takes 2.61 seconds; we try input size 10 and
  that takes 4.39 seconds. The first increase in size increased the time by 0.8 seconds. The next increase
  the time by 1.21 seconds. The third increased the time by 1.78 seconds. The rate of increase keeps increasing
  (in this case it goes up by about 0.6 seconds each time), that is quadratic growth.

-----------------------------------

The actual procedures we will test are in the program at the bottom of the page. There is a lot of code, 
you do not have to worry about most of it. What is important is that it defines ``procedureA``, ``procedureB``,
``procedureC``, ``procedureD``, and ``procedureE``. Each procedure takes a number as its input. At the top
of the program is the procedure ``doTest``. To run a particular procedure, we just need to change line 6 to say
something like ``procedureA(6)`` to run procedureA with an input of 6 - or ``procedureC(10)`` to run procedureC
with an input of size 10.

When you run a procedure, it will make a drawing and print out how long the drawing took to make.

For example... The code below is already set up to run procedureA with an input size of 4 -``procedureA(4)`` on line 6.
I ran it and got a time of ~0.97 seconds. Then, to test the same procedure with an input of size 6, I change line 6 to
``procedureA(6)``. I run that and get a time of ~1.63 seconds. I do the same for input sizes of 8 and 10 (changing line
6 and then running the program again.) Here is what I get:

=====   =========   =========   =========   ========= 
Input   4           6           8           10
=====   =========   =========   =========   =========
Time    0.97        1.63	    2.22        2.77	    
=====   =========   =========   =========   =========

Looking at that pattern, I can see that each time I increase the Input size by 2,
procedureA takes approximately ~0.6 more seconds. That steady growth means procedureA is
**Linear** or **O(n)**.

.. mchoice:: eff_measure_1
    :answer_a: Constant - O(1)
    :answer_b: Linear - O(n)
    :answer_c: Quadratic - O(n^2)
    :correct: a
    :feedback_a: Correct, each time you run the program, it takes about the same amount of time. Increasing the input to procedureB doesn't make it take longer.
    :feedback_b: For that to be true, increasing the size should consistently increase the time. That should not be the case here.
    :feedback_c: For that to be true, increasing the size should increase the time faster and faster with each increase. That should not be the case here.
    
    Try testing procedureB for inputs of size 4, 6, 8, 10 and identify what kind of algorithm it is.
    (Change line 6 to say ``procedureB(4)`` and then run it, then change to ``procedureB(6)``...)

    
.. mchoice:: eff_measure_2
    :answer_a: Constant - O(1)
    :answer_b: Linear - O(n)
    :answer_c: Quadratic - O(n^2)
    :correct: c
    :feedback_a: For that to be true, increasing the size should not really change the time. That should not be the case here.
    :feedback_b: For that to be true, increasing the size should consistently increase the time. That should not be the case here.
    :feedback_c: Correct. Going from 2 to 4 increases the time. But going from 4 to 6 increases it even more. And going from 6 to 8 increases it even more than that.
    
    Try testing procedureC for inputs of size 2, 4, 6, 8 and identify what kind of algorithm it is.
    (Change line 6 to say ``procedureC(2)`` and then run it, then change to ``procedureC(2)``...)

.. activecode:: algorithms_efficiency_testing
    :nocodelens:

    def doTest():
        # to test other procedures,
        #   change the procedure that is called to procedureA, procedureB, etc...
        # to test different problem sizes, change the number that is passed
        #   to the procedure: (4), (8), etc...
        procedureA(4)

    #-----------Do not modify code below-------------

    def procedureA(size):
        for i in range(size):
            drawSquare(10)
            reggie.forward(10)

    def procedureB(size):
        drawSquare(10 * size)
            
    def procedureC(size):
        for i in range(size):
            for j in range(size):
                drawSquare(10)
                reggie.forward(10)
            reggie.penup()
            reggie.goto(reggie.xcor() - size * 10, reggie.ycor() - 10)
            reggie.pendown()
            
    def procedureD(size):
        for i in range(size):
            drawSquare(10)
            reggie.forward(10)
            drawSquare(10)
            reggie.forward(10)
            drawSquare(10)
            reggie.penup()
            reggie.goto(reggie.xcor() - 20, reggie.ycor() - 10)
            reggie.pendown()

    def procedureE(size):
        for i in range(size):
            for j in range(i + 1):
                drawSquare(10)
                reggie.forward(10)
            reggie.penup()
            reggie.goto(reggie.xcor() - (i + 1) * 10, reggie.ycor() - 10)
            reggie.pendown()
        
            
    def drawSquare(size):
        for side in range(4):
            reggie.forward(size)
            reggie.right(90)

    from turtle import *
    import sys
    sys.setExecutionLimit(50000)
    import time
    space = Screen()
    reggie = Turtle()
    reggie.speed(0)
    reggie.penup()
    reggie.goto(-150, 150)
    reggie.pendown()
    start = time.time()
    doTest()
    end = time.time()
    print("That took", end - start, "seconds")


