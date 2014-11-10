.. include:: ../global.rst

.. index:: public private key cryptography, ESA

Digital Signing (Ch 9) 
=========================================

This chapter powers through a couple of big ideas. Here is a recommendation for breaking up the reading.

#. Read until you hit *Signing with an Exponent Padlock...* section. Don't go on until you feel comfortable with the basic idea.
#. Go try out the idea of multiplicative keys - use `this application to test different clock sizes and keys <http://faculty.chemeketa.edu/ascholer/cs160/webapps/RSATimesTable.html>`__. You do not need to master doing the math by hand... just make sure you are confident the process works.
#. Now continue on with to *Signing with an Exponent Padlock...* and continue reading from there. To test out the math for something like :math:`9^7 \textrm{ mod } 22` use wolfram alpha and type it in as "9^7 mod 22"

.. raw:: html

    <div style="text-align: center;"><script id="WolframAlphaScript" src="http://www.wolframalpha.com/input/embed/?type=large" type="text/javascript"></script></div>
    

.. pseudo_h3:: More on Public/Private Keys
    :class: underlined

.. sidebar:: Asymmetric Cryptography

    Another name for Public/Private key cryptography is **asymmetric** cryptography. Each key can encrypt a message that it cannot decrypt (no symmetry).

It is important to understand that the pair of *keys* that the RSA algorithm produces can each encrypt a message in such a way that only the other key can decrypt it. A message encrypted by one key must be decrypted by the other key, not the key that was used to encrypt it. There is nothing mathematically different about the **public** key or **private** key, those are just terms for how we use them - the fact that we hand out one key to anyone who wants it and keep the other one secret. 

By giving out the public key to anyone who wants it, we create a mechanism for people to verify that a message we have digitally signed really came from us. No one else could have signed that message. Note that there is no guarantee of secrecy, we assume anyone who wants it has the public key and thus can read the message!

We have also made it possible for anyone to use that public key to make an encrypted message that can only be read by us. If it gets sent to us, we can't be sure who sent it... anyone who wants could have gotten the public key and encrypted the message. But we can be sure no one but us can decrypt it.

    
.. raw:: html

    <table style="border-spacing: 10px; border-collapse: separate; padding: 5px;">
           <tr><td style="border: 1px solid #ccc; padding: 5px;"><b>Signed with Private Key</b><br/><em>Authentication</em><br/>
                   Everyone can tell who sent the message.
                   <img style="max-width: 100%" src="../_images/rsa1.png"></td>
                <td style="border: 1px solid #ccc; padding: 5px;"><b>Signed with Public Key</b><br/><em>Secrecy</em><br/>
                   Only one person can read the message
                   <img style="max-width: 100%"  src="../_images/rsa2.png"></td>        
            </tr>
           </table>

           

.. pseudo_h3:: More on Certification Authorities
    :class: underlined

.. image:: Images/httpsProcess.png
    :width: 275
    :class: align-right
    
When you connect to a webserver securely, you use the RSA public/private cryptography system. You use the server's public key to send a message that only the right webserver can read. That message contains the shared secret you will use to encrypt the rest of the information passed between the server and your computer. (From then on you are using "standard" encryption based on the secret you sent the web server and do not use the public/private keys).

But how do you know that you have the right public key for a website like wellsfargo.com? Anyone could send you a public key and claim they are wellsfargo. So Wells Fargo gets their public key "signed" by a certification authority like Verisign - Verisign encrypts Wells Fargo's public key with their private key. Wells Fargo actually gives us this "signed" key. If we can unlock it using Verisign's public key, then we know that Verisign thinks that the key really does belong to Wells Fargo and it is safe to use.

How do we know to trust Verisign? Their public key is built into our browser. As long as we trust the source we got our browser from, we can trust that public key. You can see this process in your browser - the screen shots below are from Chrome, but you can look up the same information in IE, Safari or Firefox.





.. |text1| replace:: A secure connection shows a padlock next to the URL of the website. |br| |br| I can inspect the server's certificate. The certificate is the public key along with a bunch of other information.

.. |text2| replace:: I can see that WellsFargo's public key was signed by Verisign. Verisign took a copy of WellsFargo's key and encrypted it with their private key. |br| |br| Verisign's public key is built into my web browser… I can use it to decrypt the signed key. If I trust Verisign, I should trust the WellsFargo public key they have signed.

.. |text3| replace:: Under the details, I can actually see the public key for WellsFargo's web server. It is 2048 bits long – those bits are shown as 512 hexadecimal digits at the bottom of the screenshot.

.. |img1| image:: Images/https1.png
    :width: 100%
    
.. |img2| image:: Images/https2.png
    :width: 100%
    
.. |img3| image:: Images/https3.png
    :width: 100%

===================    ======================================
|text1|                |img1|   
|text2|                |img2|   
|text3|                |img3|   
===================    ======================================



.. pseudo_h3:: Optional: RSA Key Generation
    :class: underlined
    
Want to try generating your own RSA key pair? You can use `this application <http://faculty.chemeketa.edu/ascholer/cs160/webapps/RSAExponentKeys.html>`__ will walk you through generating a public/private key pair for use with the RSA algorithm. You do not have to memorize the process, but working through it may help clarify the section titled "The Connection Between RSA and Factoring".
