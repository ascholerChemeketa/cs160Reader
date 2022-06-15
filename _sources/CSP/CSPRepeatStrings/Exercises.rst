..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter 9 Exercises
--------------------

#.

    .. tabbed:: ch9ex1t

        .. tab:: Question

            Fix 5 errors in code below to correctly print: "Rubber baby buggy bumpers."

            .. activecode:: ch9ex1q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = ""
                # STEP 2: GET DATA
                Phrase = "Rubber baby buggy bumpers.
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase
                    # STEP 4: ACCUMULATE
                    newString = newString letter
                # STEP 5: PROCESS RESULT
                print(newString



#.

    .. tabbed:: ch9ex2t

        .. tab:: Question

            The code currently prints the reverse of a string. Change it so that it prints the string in the correct order, but every character is separated by a space (there should even be a space between a space and the next character).

            .. activecode::  ch9ex2q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = ""
                # STEP 2: GET DATA
                phrase = "This is a string."
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                    # STEP 4: ACCUMULATE
                    newString = letter + newString
                # STEP 5: PROCESS RESULT
                print(newString)



#.

    .. tabbed:: ch9ex3t

        .. tab:: Question

           Fix the indention on 4 lines below to correctly print the reverse of the string.  It should print: "!yadhtriB yppaH."

           .. activecode::  ch9ex3q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATORS
                newString = ""
                # STEP 2: GET DATA
                    phrase = "Happy Birthday!"
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                # STEP 4: ACCUMULATE
                newString = letter + newString
                # STEP 5: PROCESS RESULT
                    print(newString)




#.

    .. tabbed:: ch9ex4t

        .. tab:: Question

            Fix the errors in the code to correctly print the reverse of the string. It should print: "!gnirts a m'I ,kool yeH"

            .. activecode::  ch9ex4q
                :nocodelens:

                # STEP 2: GET DATA
                phrase = "Hey look, I'm a string!"
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                    newString = ""
                    # STEP 4: ACCUMULATE
                    newString = newString + phrase
                    # STEP 5: PROCESS RESULT
                    print(phrase)



#.

    .. tabbed:: ch9ex5t

        .. tab:: Question

           Fix 4 errors in the code below to correctly print the mirror of the text in phrase.  It should print: "tset a si sihTThis is a test."

           .. activecode::  ch9ex5q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString =
                # STEP 2: GET DATA
                phrase = "This is a test"
                # STEP 3: LOOP THROUGH THE DATA
                for l in phrase:
                    # STEP 4: ACCUMULATE
                    newString = letter + newString  letter
                # STEP 5: PROCESS RESULT
                print()




#.

    .. tabbed:: ch9ex6t

        .. tab:: Question

            The code currently prints each letter of the string twice in a row. Change it so that it prints the mirror of the string. It should print: "!rorrim a ni gnikool ekil s'tIIt's like looking in a mirror!"

            .. activecode::  ch9ex6q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = ""
                # STEP 2: GET DATA
                phrase = "It's like looking in a mirror!"
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                    # STEP 4: ACCUMULATE
                    newString = newString + letter + letter
                # STEP 5: PROCESS RESULT
                print(newString)



#.

    .. tabbed:: ch9ex7t

        .. tab:: Question

           The code below is supposed to replace all 1's with i's, but it is in an infinite loop.  You can reload the page to stop the infinite loop.  Add a line to make the code work.  It should print: "This is a string."

           .. activecode::  ch9ex7q
                :nocodelens:

                str = "Th1s is a str1ng"
                pos = str.find("1")
                while pos >= 0:
                    str = str[0:pos] + "i" + str[pos+1:len(str)]
                print(str)



#.

    .. tabbed:: ch9ex8t

        .. tab:: Question

            Fix the errors so that the code prints "I'm just a string."

            .. activecode::  ch9ex8q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = "  "
                # STEP 2: GET DATA
                phrase = "I'm just a string."
                # STEP 3: LOOP THROUGH THE DATA
                for phrase in letter
                    # STEP 4: ACCUMULATE
                    letter = letter + newString
                # STEP 5: PROCESS RESULT
                print(newString)



#.

    .. tabbed:: ch9ex9t

        .. tab:: Question

           The program below is supposed to encode the text in message, but it has 5 errors.  Fix the errors so that it prints: "nvvg.nv.zg.nrwmrtsg."

           .. activecode::  ch9ex9q
                :nocodelens:

                message = "meet me at midnight"
                str = "abcdefghijklmnopqrstuvwxyz.
                eStr = zyxwvutsrqponmlkjihgfedcba ."
                encodedMessage = message
                for letter in message
                    pos = str.find(letter)
                    encodedMessage = encodedMessage + eStr[pos:pos+1]
                print encodedMessage)



#.

    .. tabbed:: ch9ex10t

        .. tab:: Question

            The code currently prints "This is a striniThis is a string". Fix the error so that it replaces every "1" with "i" and prints "This is a string".

            .. activecode::  ch9ex10q
                :nocodelens:

                str = "Th1s is a str1ng"
                pos = str.find("1")
                while pos >= 0:
                    pos = str.find("1")
            	    str = str[0:pos] + "i" + str[pos+1:len(str)]
                print(str)



#.

    .. tabbed:: ch9ex11t

        .. tab:: Question

           Rewrite the following code to create a function that takes a string and returns the reverse of the string.  It should print: "!yadhtriB yppaH."

           .. activecode::  ch9ex11q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATORS
                newString = ""
                # STEP 2: GET DATA
                phrase = "Happy Birthday!"
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                    # STEP 4: ACCUMULATE
                    newString = letter + newString
                # STEP 5: PROCESS RESULT
                print(newString)



#.

    .. tabbed:: ch9ex12t

        .. tab:: Question

            Fix the errors in the code so that it replaces the misspelled word "recieved" with the correct spelling "received"

            .. activecode::  ch9ex12q
                :nocodelens:

                str = "He recieved candy"
                pos = str.find("received")
                while pos >= 0:
                    str = str[0:pos+len("recieved")] + "received" + str[pos:len(str)]
                    pos = str.find("recieved")
                print(str)



#.

    .. tabbed:: ch9ex13t

        .. tab:: Question

           Rewrite the following code to create a function that takes a string and returns the mirror of the string.  It should print: "!ssalC iHHi Class!".

           .. activecode::  ch9ex13q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = ""
                # STEP 2: GET DATA
                phrase = "This is a test"
                # STEP 3: LOOP THROUGH THE DATA
                for letter in phrase:
                    # STEP 4: ACCUMULATE
                    newString = letter + newString + letter
                # STEP 5: PROCESS RESULT
                print(newString)




#.

    .. tabbed:: ch9ex14t

        .. tab:: Question

            Complete the code to change all the periods to commas.

            .. activecode::  ch9ex14q
                :nocodelens:

                str = "I like to eat. sleep. learn. and code!"
                pos = str.
                while pos >= :
                    str = str[0:pos] +   + str[  :len(str)]
                    pos =
                print(str)



#.

    .. tabbed:: ch9ex15t

        .. tab:: Question

           Modify the code below to create a function that will that will take a message and return an encoded message.  It should print: "nvvg.nv.zg.nrwmrtsg."

           .. activecode::  ch9ex15q
                :nocodelens:

                message = "meet me at midnight"
                str = "abcdefghijklmnopqrstuvwxyz. "
                eStr = "zyxwvutsrqponmlkjihgfedcba ."
                encodedMessage = ""
                for letter in message:
                    pos = str.find(letter)
                    encodedMessage = encodedMessage + eStr[pos:pos+1]
                print(encodedMessage)



#.

    .. tabbed:: ch9ex16t

        .. tab:: Question

            Rewrite and fix the errors in the code to be a procedure that takes in a string and prints the reverse of the string and the mirror of the string. Make sure to call the procedure.

            .. activecode::  ch9ex16q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                reverseString = ""
                mirrorString = " "
                # STEP 2: GET DATA
                phrase = "This is the string"
                # STEP 3: LOOP THROUGH THE DATA
                for phrase in phrase:
                    # STEP 4: ACCUMULATE
                    reverseString = reverseString + letter
                    mirrorString = letter + letter + reverseString
                # STEP 5: PROCESS RESULT
                print(reverseString)
                print(mirrorString)



#.

    .. tabbed:: ch9ex17t

        .. tab:: Question

           Modify the code below to create a function that returns the decoded input string.  It should print: "meet me at midnight."

           .. activecode::  ch9ex17q
                :nocodelens:

                message = ""
                str = "abcdefghijklmnopqrstuvwxyz. "
                eStr = "zyxwvutsrqponmlkjihgfedcba ."
                encodedMessage = "nvvg.nv.zg.nrwmrtsg"
                for letter in encodedMessage:
                    pos = eStr.find(letter)
                    message = message + str[pos:pos+1]
                print(message)



#.

    .. tabbed:: ch9ex18t

        .. tab:: Question

            Finish the code so that it prints the mirror of the string with the correct way then the reverse. It should print: "This is a mirror!!rorrim a si sihT"

            .. activecode::  ch9ex18q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                newString = ""
                aString = ""
                # STEP 2: GET DATA
                phrase = "This is a mirror!"



#.

    .. tabbed:: ch9ex19t

        .. tab:: Question

           Create another function that encodes a string.  Pass in both the string to be encoded *and* the string to use to encode the string as well.

           .. activecode::  ch9ex19q
               :nocodelens:



#.

    .. tabbed:: ch9ex20t

        .. tab:: Question

            Here's the code to encode a message. Write code underneath it to decode the encoded message and print it.

            .. activecode::  ch9ex20q
                :nocodelens:

                message = "meet me at midnight"
                str = "abcdefghijklmnopqrstuvwxyz. "
                eStr = "zyxwvutsrqponmlkjihgfedcba ."
                encodedMessage = ""
                for letter in message:
                    pos = str.find(letter)
                    encodedMessage = encodedMessage + eStr[pos:pos+1]
                print(encodedMessage)


