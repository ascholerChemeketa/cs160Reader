.. include:: ../../global.rst

.. index:: internet architecture

Internet Architecture
=========================================

Say you have a computer that is connected to the internet and you want to access your bank account at wellsfargo.com in your web browser. A message is sent by your browser as a **packet** of information requesting that web page. This packet is sent from your computer to another computer (or a specialized computational device known as a router) that is owned by whoever is providing the internet service: your phone company, the college, or the Starbucks you are sitting in. That packet is then passed  through more computers owned by network of the service provider until it reaches an exit point where messages are forwarded to other networks. At that exit point, there are records that indicate the best current way to route messages - who to pass a packet to based on where it is going.

TODO IMAGE OF ROUTING

This routing information is neither fixed nor permanent. As new networks join the internet, they advertise to their neighbors what addresses they can route packets to and how quickly they can do so. As they learn what places their neighbors can reach, they add those places to their own records. For example, if AT&T's network can reach a particular address in 4 steps, and Verizon can in 6 steps, and I control a network connected to both of those networks, I can reach that address in 5 steps by forwarding the message to AT&T (1 step to get it to AT&T and 4 more steps from there). If something happens to my connection to AT&T - say I try sending a message through them and never get confirmation it was received - I will stop routing traffic that way and chose a new path, maybe through Verizon's network.

.. sidebar:: Internet Hijacking

  Hijacking of traffic is not a purely hypothetical event. In 2013 there was a sustained series of events where some entity `hijacked internet traffic <http://arstechnica.com/security/2013/11/repeated-attacks-hijack-huge-chunks-of-internet-traffic-researchers-warn/>`_ and routed it through Belarus and Iceland before forwarding it to its destination .

The computer that sends the original message has no control over this routing - it simply hands it off to another computer that promises it can direct the message to its destination. The message will pass through the hands of many organizations along the way to its destination and there is no telling who exactly those organizations may be. Any of these network along the way could pretend to be the final destination and send back a reply - pretending to be wellsfargo.com and asking you to provide your username and password. Even worse, a malicious network can try to advertise that it provides quick routing to wellsfargo.com to encourage traffic to be routed through them.

TODO IMAGE OF HIJACK

Any machine that is routing your message can read it unless that message is encrypted, meaning that if you want secrecy - you do not want someone to see your password - you need to encrypt your message. We have learned how two people can come up with a shared secret to start encrypting their communication using the Diffie-Hellman algorithm, but that does not help us here. If you send a message to wellsfargo.com to start the algorithm, an imposter could just pretend to be Wells Fargo, work with you to generate an encryption key, and then use that to communicate with you. You would be talking in secret, but to the wrong organization!
