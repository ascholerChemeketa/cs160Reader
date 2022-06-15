..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. 	qnum::
	:start: 1
	:prefix: csp-20-2-

.. highlight:: java
   :linenothreshold: 4

The Internet is Many Computers
================================

In the introduction to this chapter we looked at the different devices and services that may connect you to this ebook. But how do all of these connections work together to connect you to the site that want to get to? How does your Internet browser (the computer application that allows you to view website) know how to access a website? How is data transferred over the Internet and how does it know where to go? What has allowed the Internet to connect people from all around the globe? In this section we will attempt to answer these questions.

The Internet is many computers. Some are small, like your cell phone. Some are even smaller, like a router or a Roomba floor vacuum robot or an Amazon Echo.  All of these computers work together to form the Internet.

.. figure:: Figures/interconnected.png
    :height: 280px
    :align: center
    :alt: different electronic devices connect to form the internet
    :figclass: align-center

    Figure 1: The Internet is Many Computers

The Internet is many computers communicating with one another. They might communicate over radio waves (like WiFi or Bluetooth) or over physical cables (like Ethernet or Cable TV). One of the remarkable features of the Internet is that the computers connected are not really aware how they're connected. They are able to communicate over many different kinds of connections.

Once they're connected, how do they communicate? …*Now we can do protocols*

Communication between connections on the Internet are governed by rules known as protocols, or formal standards for transmitting information. In real life, the protocol for asking a favor of your best friend might be to say "Please" when beginning a request and "Thank you" after your friend has done that favor. If you asked your friend the same thing in Spanish, it would be difficult to communicate properly with that friend if he doesn't speak Spanish.

Protocols on the Internet work the same way. In order for every system to communicate with each other, every computer on the Internet has agreed to communicate using the exact same protocols. Protocols outside of these predefined rules aren't understood unless everyone on the Internet decides to recognize them.

These protocols and standards are what constitute the "Network of Autonomous Systems" that is the Internet. The word *autonomous* here is used to mean that the Internet works without any human intervention. For example, you don't need to know all of the technical details behind every Internet protocol in order to use access a webpage. It just works. And you don't need to make sure that every person you send and email to is using the same type of email system because they already are! This is all thanks to the power of having a standard way to do things that allows the Internet to function on a global scale - with everyone who adopts the standard.

Suppose that your friend Alex wants to look at the latest news on CNN's website on the Internet. How is Alex going to this? First, she has to tell the device she is using that she would like to view website on the internet. She does this by opening a web browser. Then, all she has to do is type in "cnn.com" and the website will appear, allowing Alex to browse current events. The story is not so simple however. Behind the scenes, the device has to do a lot in order to allow Alex to view CNN.com. Firstly, it has to know how to connect to the Internet in the first place. Second, it has to send a message to CNN.com that it can understand requesting to view the website and it has to be able to understand the response it receives and convert into something that is recognizable as CNN's website.

Protocols and Standards
------------------------

**Domain Names**

When you visit a particular website you are most likely accessing it by typing something into your browser such as:

    google.com

This **domain name** can be broken down into two parts. The TLD, or top-level domain, (in this case "com") is the first indicator of where to go to find the website. The "google" part of the domain name actually specifies which computer to point to. Domain names are organized hierarchically from right to left, where the right is more general and left is more specific. For example, if you wanted to visit the English Wikipedia page, you would have to type in "en.wikipedia.org". This indicates that you would like to visit a website within the top-level domain "org", a website specifically called "wikipedia", and the "en" sub-domain of Wikipedia that will give you the English-language version of the website.

There are many different top-level domains - and you may have seen some of the more often used ones before - for example: ``.com``, ``.org``, ``.edu``, ``.gov``, ``.tv``, ``.io``. These are just a few of the ones that exist. Each of these TLDs organize domain names into logical groups (such as ``.us``, ``.mx``, or ``.eu``, which are TLDs indicating the United States, Mexico, and the European Union, respectively). Recently, many new TLDs have been put into use, such as ``.shop``, ``.photography``, ``.tech``, and more.

Email addresses are another form of domains that have an even further different type of identifier with an "@" symbol in front of the domain of the email service provider.

    example@gmail.com

**IP Addresses**

One of the foundations of the Internet Protocol system is the **IP address**, or Internet Protocol Address. This is like a street address for your home or school, except, on the Internet, every computer has a unique IP address that only that computer can have. If you search "ip address" on google or a similar search engine, the IP address for the computer you are using right now will likely show up as the first result. Every computer on the Internet uses your IP address to name your computer.

**DNS**

The **Domain Name System**, or **DNS**, is an agreed-upon system of converting domain names (which are easier for humans to read) to IP addresses (which are easier for computers to read). For example, when you type ``google.com`` into your browser, the DNS looks up what the corresponding IP address is, which allows to computer to navigate to a precise address, eg. ``172.217.10.174``.

The DNS exists because it would be impractical to memorize and/or type out IP addresses each time you wanted to visit a website.

**IPv6**

The Internet Protocol has gone through several versions. Currently the latest version is known as **IPv6** (or Internet Protocol version 6). However, before IPv6 came along, computers connected to the Internet used the **IPv4** (IP version 4) standard to communicate with each other.

IPv4 addresses look like the following:

    172.217.10.174

They are 4 numbers separated by dots where each number can be in the range from 0 to 255.
Within these constraints, there are around 4 billion different possible IP addresses.

With the ever-growing usage of the Internet, the world is short on IPv4 addresses. In fact, certain regions of the world started running out of IPv4 addresses in the year 2011.

It was easy to foresee this "IPv4 address exhaustion", and so the IPv6 (IP version 6) standard was created. IPv6 addresses look like the following:

    2001:0db5:0000:0000:0000:ff00:0035:7392

They are made up of 8 groups of 4 hexadecimal digits. (There are 16 different hexadecimal digits, running from 0-9 and a-f.)
This newer type of address provides around 340 billion billion billion billion possible addresses, so there is no foreseeable shortage to worry about at the moment.

**HTTP and SMTP**

In addition to lower-level protocols such as **TCP/IP**, there are higher-level protocols (protocols that operate on top of TCP/IP) such as **HTTP** and **SMTP**. Computers on the Internet need to know not only how to send data to each other but also need to know what to do with the data. For example, when viewing websites, your computer is communicating using HTTP (Hypertext Transfer Protocol).

    Of interest: This is also the reason that you sometimes see web addresses begin with an ``http://`` or an ``https://``. This indicates to the browser to use the HTTP protocol to communicate.

This provides the computer with enough context to be able to handle the data and communicate in a way that is best for websites. Similarly, there is also a protocol for sending email known as SMTP (Simple Mail Transfer Protocol).

HTTP and SMTP were designed by the Internet Engineering Task Force. This is an organization that actively promotes the use of standardized protocols on the Internet. They are also involved in developing and creating resources (such as standards and documentation) to make the adoption of these standards easier.

There are many other protocols such as these. FTP (File Transfer Protocol), in particular, is also used often to transfer files directly from one computer to another over the Internet.

Packets
----------

The Internet transmits data from one computer to another by breaking the data down into small manageable units that are known as **packets**. A packet is defined as a small chunk of digital data (like an Email or a Picture) that contains both a sender address and an address to where the packet is supposed to go. A single image could contain anywhere from just a handful of packets to upwards of 10,000 depending on a variety of factors.

.. figure:: Figures/packet_transfer.png
    :height: 60px
    :align: center
    :alt: packets are the chunks of data computers send to each other over the internet
    :figclass: align-center

    Figure 1: Computer communicate with packets

The process of determining where packets go is called routing, or selecting a path for traffic in a network. An instance of non packet routing might be a computer that controls car traffic on streets and roads. If a road is becoming too crowded, traffic lights that allow cars to go onto that road might turn red in order to prevent any more cars from coming on. A road might even be under construction, so no cars are able to enter that road. Detour signs might route the cars to other roads that are more accessible in order for the cars to get to their destination.

The main goal of routing on the Internet is to try to deliver packets as fast and as efficiently as possible. A certain connection might only be able to transfer a certain number of packets per minute, so if the connection isn't able to transfer them quickly enough, a new path for the packets to go will need to be found by a router, or a computer that changes the path for packet traffic. If some connection is broken or doesn't function, the router needs to find a new path for the data to get to its destination, otherwise the packets will never be delivered.

As mentioned before, TCP/IP is the protocol that defines how packets should be packaged and delivered between devices on the Internet. In addition to this, HTTP, SMTP, and such are responsible for defining the type of data that is being sent and allows certain types of packets to be sent for certain types of communications. The specific ways in which packets are built and transferred are beyond the scope of this book.

Systems Built on the Internet
---------------------------------

As you have seen, the technology involved in providing Internet is built hierarchically. Domain names are broken into parts that provide general to specific information about the website you are trying to access. IP addresses are broken up into several numbers that delineate the different sections of the Internet from each other. Routing, especially, which uses the DNS to jump around from network to network to find its way to the destination, is built on the hierarchical system of networks that are all interconnected. This hierarchy and connectedness allowed the Internet to grow to the global scale that it is today.

When you have a large system there is going to be **latency**, however. The latency of a system is the measure of the time it takes for a message to get to its intended recipient from the time it was sent. Since the Internet is so large and spread out, there is going to be more noticeable latency when connecting to somewhere further away. For example, if you try connecting to a website in the country you are in, and then to one in a country on the opposite side of the world, you might notice a difference in the time it takes for the website to fully load. (Try connecting to "CNN.com" and then "TheAustralian.com.au" from Australia to see if you can feel a difference.)

Another way to measure a systems effectiveness is with **bandwidth**. Bandwidth is the amount of data that can be transferred on a system in a certain amount of time. The amount of data is measured in bits. These days, an average Internet connection speed might be anywhere from a megabit (about a million bits) per second to a gigabit (about a billion bits) per second.

Latency and bandwidth are important measures of a system's speed because it can sometime greatly impact what it can be used for. For example, browsing a simple news website with text articles can be done easily with pretty much any type of Internet connection. Watching a movie on Netflix requires a higher bandwidth, still on the lower half of the scale, however. But occasionally, there is a need for a very great amount of bandwidth, such as by research labs that transfer lots of huge data sets for analysis, requiring possibly many gigabits of bandwidth.

Summary
-----------

To answer the questions at the beginning of this section, the systems that are in place to allow you to connect to any website you want to get to are the autonomous standard protocols the Internet is built on. To find the website that you are trying to access, the DNS converts the URL you type in such as ``google.com`` and turns it into an IP address. Using this IP address, your computer knows exactly where to go to connect to, communicate with, and ultimately show you the website you are accessing.

These standards and autonomous systems as well as its hierarchical structure are what allowed the Internet to become global in scale; and nowadays, there is not a country in the world that does not have access to the Internet. The Internet is continuing to grow as well. As a result of the existing protocols, it is easy to create more and more, knowing that everyone will be able to access it immediately as long it adheres to the standards.


