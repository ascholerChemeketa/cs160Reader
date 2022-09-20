

Making a Chatbot
==========================

Chatbots are programs that are designed to have conversations with people. Many 
chatbots are designed for the amusement of people playing a game or interacting with others 
in an online forum. However, they also are increasingly used as digital assistants - Google
developed a `technology called Duplex that uses AI to call resteraunts and make reservations
by talking to the host <https://www.youtube.com/watch?v=ijwHj2HaOT0>`__.

Making a full fledged AI that can respond to unexpected responses and questions is a
profoundly compex task. But if our goals are more limited, we can try to make a program
that seems smart by forcing the conversation. If we ask questions that require specific
answers, and count on the user to respond in a logical way, basic conditional code can
handle generating our responses.

.. faux_code::

    Computer: Hello, what is your name?
    User: Greg
    Computer: Hello Greg. Nice to meet you. Where do you go to school?
    User: Chemeketa
    *Test to see if the input has "Chemeketa" in it, if so give this message:*
    Computer: That is where I live!
    *Otherwise, we would have the computer say something like "Huh, never heard of it."*
    Computer: What is your favorite movie?
    User: I like "Rushmore"?
    *Just ignore the user's input and pretend like we used it.*
    Computer: Oh, that is a pretty good one. I like "The Matrix", 
    \           I just wish it had a happy ending.
    *Ask another question...*

Write a chatbot that asks the user at least three questions and then uses the user's
input to build its answer or make a decision about what to say. (You can add extra questions
like the last one where the computer asks a question but then does not look at the response,
but those do not count towards the three question minimum.) Try to come up with your own questions
instead of just copying the samples above!

.. activecode:: cspdecisionsstrings_chatbot1
