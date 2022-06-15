..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. 	qnum::
	:start: 1
	:prefix: csp-20-4-

.. highlight:: java
   :linenothreshold: 4

Cybersecurity
================================

**Cybersecurity** deals with protecting devices connected to the Internet as well as the communications between them. This protection involves preventing unwanted people from gaining access to devices, preventing unwanted people from snooping on the messages that are sent between devices, and preventing unwanted people from causing devices and messages to malfunction.

For example, let's say that Alex wants to download a video-game from the Internet. What she doesn't know is that what she downloaded actually contains a virus hidden inside. So, when she starts the game, she also unknowingly starts the virus which immediately infects her computer. This is just one example of the many ways in which we are susceptible to cyber attacks.

Types of Cyber Attacks
--------------------------

The **trust-model** of the Internet comes with some trade-offs involving security. The Internet is built on the philosophy of sharing and collaboration, which comes with a certain amount of risk involving lack of privacy and security. In this section, we will discuss the different forms that loss of privacy and security can take place.

Certain aspects of the Internet were not designed to be secure in particular. This is a result of what the Internet was first intended to be used for. When the Internet was created, it was used only to send data between a few computers. And since not many people had access to the Internet, security was not a concern.

Cyber attacks (and therefore cybersecurity) have both *software* components (aspects dealing with the function of devices) and *human* components (aspects dealing with human behavior). For example, a virus has to be created by programming the software to work in a certain way that the attacker wants. However, a virus will never have a chance to infect any computers if nobody downloads it by accident, so the attacker must also take care to convince people to download their virus. This is the human aspect of cyber attacks.

An example of this is Alex's case with the video game she downloaded. The only reason she downloaded the virus at all is because it was hidden within something appealing, like a video-game.

Another is phishing, which relies on someone falling for the ruse of an email that is pretending to be from a reputable source when in actuality it is from someone trying to get sensitive information from others.

Cybercrime
--------------

**Cybercrime** in general can have a really big effect on its victims. There is so much personal and sensitive information on the Internet, that a serious security breach could have some devastating consequences.

In particular, *cyberwarfare*, is a form of cybercrime that targets specific companies or governments in order to disrupt their normal online presence. This can have especially disrupting effects, since we depend on certain companies' online presences to be uninterrupted 24/7.

For example, in the specific case of the 2017 Equifax hack, criminals managed to get a hold of certain private information of many of Equifax's users. This information included names, Social Security numbers, and more (and even credit card information for some). In other words, hundreds of thousands of people were put at risk for identity theft.

**DDoS**

On the other hand, one of the most common methods of cyberwarfare is as a **Distributed Denial of Service** attack (or a DDoS attack). This involves forcing so many computers to connect to the same Internet location at the same time that it can't keep up and either slows down so much that it is unusable or it just shuts down completely. Fortunately, there is a way to protect against DDoS attacks, so it is not too much of a problem as of late.

Cloudflare is the name of a company that provides such protection. In 2014, Cloudflare experienced a very heavy-duty DDoS attack targeted at one of its customers, Spamhaus. It was the largest DDoS attack they had seen up to that point, surpassing all others by 3 times. Fortunately, Cloudflare was able to mitigate its effects. After forensic investigation, it was found that the attack might have all been created by a teenage boy from his home.

**Prevention**

After hearing about the many vulnerabilities that are possible and possible attacks that can happen on the Internet, you may be hesitant to connect the Internet. This hesitance is well-founded, but, in general, you do not need to worry. Yes, if someone was out to get you, they could probably do some damage. However, most of the large-scale attacks that occur are targeted at companies that are capable of protecting themselves against them. The average Internet user browsing websites and using e-mail is not a target of cyberwarfare. There are things that you should protect yourself from though.

**Viruses** are a prime example. Viruses are usually not large-scale attacks. Instead, they are meant to sneakily infect devices and operate behind-the-scenes to steal information or cause software to malfunction. Antivirus software helps protect your device from getting infected by keeping an eye on your files and activities and automatically getting rid of viruses or warning you that something might be unsafe. For example, antivirus software can see when you've downloaded a game from the Internet, and it will automatically scan the game to see if there might be anything clandestine hiding within.

A way that you can preempt downloading viruses, is by using a firewall. Most likely, your Internet service provider and your computer already have firewalls set up and working to filter out some of the unwanted things that you might otherwise have downloaded by accident. A firewall, is essentially a filter between you and the rest of the Internet. A firewall prevents you from accidentally connecting to some IP addresses that are known to be malicious and it prevents you from being targeted by certain types of targeted attacks. In addition to this, you can manually add more filters to your computer's firewall such as filtering out specific words or phrases or specific websites and IP addresses. This, for example, is how Internet parental controls work.

Another common cyber attack that you can easily protect yourself from is purely dependent on the *human* aspect. **Phishing** is the practice of sending emails that appear to be from a reputable source (such as a trusted company or a government authority) and that convinces the receiver to divulge personal information such as bank account details, personal account passwords, Social Security numbers, or anything else useful for criminals. You can easily protect yourself from phishing emails, however, if you keep an eye open for suspicious emails and always ensure that a message is indeed from who it claims to be from. Phishing is a type of spam email; and these days email service providers (such as Google and other big names) are fairly good at filtering out the spam before it reaches your inbox.

Cryptography
----------------

At this point, you might be thinking that it is unsafe to send or put up any sort of private or sensitive information on the Internet. In general, this is a good idea. However, in this age of global communication and commerce, certain private information must be stored and exchanged in order to keep up with the demands of consumers. And there are some ingenious ways to ensure privacy.

As a contrived example, consider the following: Alex is connected to Internet with her smartphone and she logs in to her bank account to make a transfer. In order to communicate this to the bank (and for her phone to connect to the Internet in the first place) her phone has to connect to the rest of the Internet by a wireless signal. Somebody could use a device that detects wireless communications and "listen in" on all of Alex's communications with her bank.

Since it would be really difficult to prevent anyone from listening in on others' communications, another technique is necessary to occlude the information being sent in such a way that nobody except the intended recipient of a message is able to know what was sent.

**Cryptography** is the art of transforming messages in such a way that only those that possess the key are able to transform the messages back into their original form.

These processes of transforming messages is called **encryption** (turning the message into something unintelligible) and **decryption** (turning messages back into something intelligible). There is some solid mathematical theory behind the cryptographic techniques used by much of the Internet. As an example, one such popular and often used type of encryption is RSA. Though, the mathematics behind encryption are beyond the scope of this book. There are two main types of encryption we will discuss here: *symmetric encryption* and the more used *public key encryption*.

**Symmetric encryption** is a method of cryptography that involves a single key. This key is used for both encryption and decryption, hence the symmetry. So, both the parties involved in a communication have to have the same key in order encrypt and decrypt the messages being sent.

**Public key encryption** is not symmetric. This asymmetry affords more security and functionality because there isn't a single key that needs to be passed from sender to receiver in order to encrypt and decrypt the messages. As a result, public key encryption is more widely used for encrypting Internet traffic.

Cryptography Standards
----------------------------

One of the less obvious ways in which security can be increased is by making cryptographic standards completely open to the public. Of course, you wouldn't want to give out private encryption keys. But the math behind the encryption and the software used to encrypt and decrypt messages can be independently verified by anyone with the expertise, lending an open standard more credibility. For example, RSA itself is a completely open standard and is free to use by anyone. Part of what makes it so unbreakable is that since it can be inspected by anyone, even when a loophole is found, it is closed immediately and everyone can benefit from the latest and safest open standard.

Another way that security can be ensured at the highest level is through **digital certificates**. **Certificate authorities** are certain trusted organizations that we entrust with the issuing of digital certificates to companies or other organizations that have a presence on the Internet. This allows anybody connecting to a service or a website on the Internet for the first time to verify that they are connected to precisely who they intended to.

This, just like everything else is built on the trust-model at the heart of the Internet. You trust your bank to handle your money properly. You trust a doctor to do their best to help you get better. And you trust that the systems underlying the Internet provide the latest and greatest security available to protect your sensitive information, whether that be bank account information, your passwords, or the e-mails you send.


