

Set #1
-------------------------------------

The following questions make up Set #1 of the Untimed Practice Questions. The questions resemble, both in format and substance, what you might see on the AP CS Principles exam. You may refer to the AP CS Reference Sheet, which can be found here_.

.. _here: raw:: html <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-computer-science-principles-course-and-exam-description.pdf#page=121" target="_blank">here</a>


You will not be able to change your answers after you hit the "Finish Exam" button.

.. mchoice:: e25_1_1
  :answer_a: A variable.
  :answer_b: A Function.
  :answer_c: Code.
  :answer_d: A String.
  :correct: d
  :feedback_a: Incorrect. A variable is name that a computer can associate with a value. For example, if <i>name</i> ='Alexa' then <i>name</i> is the variable and 'Alexa' is the value.
  :feedback_b: Incorrect. Functions perform some action, like a procedure, and return a value. For example, x.lower() would return a new string in all lowercase.
  :feedback_c: Incorrect. Code is what you are using to tell the computer how to function! You are learning how to code!
  :feedback_d: Correct. A string is characters typed between one, two, or three quotes.

  Which term does the following statement describe?

  *Any sequence of characters we can type between a pair of single, double, or triple quotes*

.. mchoice:: e25_1_2
  :answer_a: A device that can be programmed to compute anything that can be mathematically computed.
  :answer_b: Any machine that passes the Turing Test.
  :answer_c: A machine that can read instructions from a tape and write results to the tape.
  :answer_d: A computer that cannot repeat steps.
  :correct: d
  :feedback_a: Incorrect. This one is true! All Turing Machines have the ability to compute mathematical functions.
  :feedback_b: Incorrect. This one is true! Turing Machines pass the Turing Test if they reflect human-like tendencies during the Turing Test.
  :feedback_c: Incorrect. This one is true! A Turing Machine can read information that it is provided and write back results.
  :feedback_d: Correct. This answer is not true! All Turing Machines do have the ability to repeat steps.

  Which of the following is NOT true of a Turing Machine?

.. mchoice:: e25_1_3
  :answer_a: 'Fido'
  :answer_b: animal_3
  :answer_c: 'fish'
  :answer_d: Error
  :correct: a
  :feedback_a: Correct. On line four, notice how <i>animal_1</i> is reassigned to 'Fido'. On the following line <i>animal_3</i> is reassigned to the value of <i>animal_1</i>, which is now 'Fido'.
  :feedback_b: Incorrect. <i>animal_3</i> is the name of the variable.
  :feedback_c: Incorrect. 'fish' is the new value of <i>animal_2</i> assigned on the last line.
  :feedback_d: Incorrect. This code will run and there will not be an error.

  Use the following code for questions 3 and 4.

  What will print out when the code is run?

  ::


      animal_1 ← 'Garfield'
      animal_2 ← 'Fido'
      animal_3 ← 'Gary'
      animal_1 ← animal_2
      animal_3 ← animal_1
      animal_2 ← 'fish'

.. mchoice:: e25_1_4
  :answer_a: A name
  :answer_b: A string
  :answer_c: A function
  :answer_d: A variable
  :correct: d
  :feedback_a: Incorrect. <i>animal_1</i> is the name of the variable, but the type of <i>animal_1</i> is a variable.
  :feedback_b: Incorrect. The value of <i>animal_1</i> is a string, however, <i>animal_1</i> is a variable assigned to that value.
  :feedback_c: Incorrect. A function performs an action on variables and returns some result.
  :feedback_d: Correct. <i>animal_1</i> is a variable with a string as its value.

  Which of the following is *animal_1* an example of?

.. mchoice:: e25_1_5
  :answer_a: strings
  :answer_b: lists
  :answer_c: integers
  :answer_d: booleans
  :correct: b
  :feedback_a: Incorrect. Strings are immutable.
  :feedback_b: Correct. Lists can be changed by indexing and reassigning the value of that index.
  :feedback_c: Incorrect. Integers are immutable, but mathematical functions can be applied to change their values.
  :feedback_d: Incorrect. Booleans have the value of either True or False.

  Which of the following are mutable?

.. mchoice:: e25_1_6
  :answer_a: Classifying
  :answer_b: Cleaning
  :answer_c: Clustering
  :answer_d: Filtering
  :correct: b
  :feedback_a: Incorrect. This process is not called Classifying.
  :feedback_b: Correct. Cleaning is in fact the process of searching data sets for incomplete data records.
  :feedback_c: Incorrect. This is not the definition of Clustering.
  :feedback_d: Incorrect. Filtering often refers to choosing data with specific characteristics.

  What describes the process of searching data sets for incomplete data records to process?

.. mchoice:: e25_1_7
  :answer_a: _a1SteakSauce
  :answer_b: My_name
  :answer_c: 1more-try
  :answer_d: LOL
  :answer_e: alotOfexamStuff
  :correct: c
  :feedback_a: Incorrect. Names of variables MUST start with a letter or an underscore (_).
  :feedback_b: Incorrect. This is a legal variable. It does not start with a number or contain any spaces.
  :feedback_c: Correct. Legal variable names must start with a letter or underscore, can contain but not start with a digit, and cannot be a Python keyword.
  :feedback_d: Incorrect. This is a legal variable name.
  :feedback_e: Incorrect. This is a legal variable.

  Which of the following is *not* a legal variable name?

.. mchoice:: e25_1_8
  :answer_a: .25
  :answer_b: 0
  :answer_c: 1/4
  :answer_d: .2
  :correct: a
  :feedback_a: Correct. In Python code, pseudo code as well, a decimal value will be returned from an integer calculation. Note that in older Python code, it would have printed 0. In other languages as well, the code will return the number just before the decimal.
  :feedback_b: Incorrect. Because we are applying Python 3.0, the code will return a decimal.
  :feedback_c: Incorrect. The code will calculate the value of a fraction.
  :feedback_d: Incorrect. The value of 1/4 is .25, not .2 or .20.

  What will the above code print?

  ::

      result ← 1/4
      DISPLAY (result)


.. mchoice:: e25_1_9
  :answer_a: 122
  :answer_b: 220
  :answer_c: 420
  :answer_d: 0
  :correct: b
  :feedback_a: Incorrect. Based on the order of operations, be sure to start with the inmost parentheses.
  :feedback_b: Correct. The expression will begin by adding <i>Right</i> + <i>Left</i> inside the parentheses then move to the outer parentheses to add Mid to the sum of <i>Right</i> + <i>Left</i>. The entire sum within the outer parentheses will then be multiplied by <i>Right</i>.
  :feedback_c: Incorrect. Remember to follow the order of operations.
  :feedback_d: Incorrect. The product is not 0. Remember to follow the order of operations.

  What is the value of *Product*?

  ::

    Mid ← 8
    Right ← 10
    Left ← 4
    Product ← Right *((Right+Left)+ Mid)



.. mchoice:: e25_1_10
  :answer_a: They are the same.
  :answer_b: The Internet cannot search using user-specified queries, the Web can.
  :answer_c: The Internet uses the Web to connect devices to share data.
  :answer_d: The Web uses HTTP to share computational artifacts using the Internet.
  :correct: d
  :feedback_a: Incorrect. The Web and the Internet are not the same. The Internet is a global computer network consisting of interconnected networks. The Web is an information system on the Internet that allows documents to be connected to one another.
  :feedback_b: Incorrect. The Internet can search user-specified queries.
  :feedback_c: Incorrect. The Web is a system on the Internet that connects documents to one another.
  :feedback_d: Correct. This is true of the World Wide Web.

  How do the World Wide Web and the Internet work together?

.. mchoice:: e25_1_11
  :answer_a: Everyone with access can reach it at any time.
  :answer_b: The cloud keeps their information private from other companies.
  :answer_c: The cloud blocks all information from its employees.
  :answer_d: Half of the company’s data can be transferred to other locations to reduce demand on servers.
  :correct: a
  :feedback_a: Correct. Using cloud computing refers to storing and accessing information using the Internet rather than one's hard drive. It allows more than one computer to access it.
  :feedback_b: Incorrect. Cloud computing systems can keep information private, however, that is not a main advantage of using it.
  :feedback_c: Incorrect. Advantages of cloud computing do the exact opposite.
  :feedback_d: Incorrect. This is not a main advantage of cloud computing systems for businesses.

  Which of the following is a main advantage for a company placing their data in the cloud?

.. mchoice:: e25_1_12
  :answer_a: 2
  :answer_b: 4
  :answer_c: 0
  :answer_d: None
  :correct: c
  :feedback_a: Incorrect. 4 is divisible by 2, and 4/2 = 2, but MOD will produce the remainder value of 4/2.
  :feedback_b: Incorrect. The remainder of 4/2 is not 4.
  :feedback_c: Correct. Because 4 is divisible by 2, there is no remainder.
  :feedback_d: Incorrect. The answer is not None. MOD will return an integer.

  What will the following code print out?

  ::

    num ← 4 MOD 2
    DISPLAY (num)


.. mchoice:: e25_1_13
  :answer_a: 0.5
  :answer_b: 5.0
  :answer_c: 15.0
  :answer_d: 20
  :correct: b
  :feedback_a: Incorrect. 100 divided by 20 is 5.
  :feedback_b: Correct. Because they are float types, the value of 100.0/20.0 is equal to 5.0.
  :feedback_c: Incorrect. 100 divided by 20 is not 15.
  :feedback_d: Incorrect. 100 divided by 20 is not 20. The value of a float divided by a float is also a float.

  Use the following code for questions 13 and 14.

  What is the value of *gallons*?

  ::

    distance ← 100.0
    mpg ← 20.0
    gallons ← distance / mpg
    costPerGallon ← 3.00
    costTrip ← gallons * costPerGallon


.. mchoice:: e25_1_14
  :answer_a: 15.0
  :answer_b: 5.0
  :answer_c: 15.0
  :answer_d: 20
  :correct: a
  :feedback_a: Correct. The value of <i>gallons</i> is 5.0, the value of <i>costPerGallon</i> is 3.00. Therefore, <i>costTrip</i> = 15.0.
  :feedback_b: Incorrect. A float multiplied by a float is a float.
  :feedback_c: Incorrect. The value of <i>costTrip</i> is the product of <i>gallons</i> multiplied by <i>costPerGallon</i>.
  :feedback_d: Incorrect. The value of <i>costTrip</i> is the product of <i>gallons</i> multiplied by <i>costPerGallon</i>.

  What is the value of *costTrip*?

.. mchoice:: e25_1_15
  :answer_a: 'What a fast turtle!'
  :answer_b: A square
  :answer_c: A turtle
  :answer_d: A triangle
  :correct: b
  :feedback_a: Incorrect. The return value of a function will not be printed unless in a print statement.
  :feedback_b: Correct. This function creates a square. Turtles start facing East.
  :feedback_c: Incorrect. This function does not create a turtle shape.
  :feedback_d: Incorrect. Write out the function. The turtle starts facing East, moves forward 100, turns right and does it again three more times.

  What shape will the turtle function return?

  ::

    def square(turtle):
      turtle.forward(100)
      turtle.right(90)
      turtle.forward(100)
      turtle.right(90)
      turtle.forward(100)
      turtle.right(90)
      turtle.forward(100)
      turtle.right(90)
      return “What a fast turtle!”
