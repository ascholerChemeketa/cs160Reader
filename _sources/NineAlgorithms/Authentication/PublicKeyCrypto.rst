.. include:: ../../global.rst

.. index:: public key cryptography

Public Key Cryptography
=========================================

We have established the idea of a special lock that has a pair of keys and shown how it can be implemented mathematically to do encryption. But it is not clear how that solves the problem of your computer authenticating a website like wellsfargo.com when you connect to it - we need a way to verify the identity of that site.

The trick used on the internet to solve this problem sounds unintuitive - we generate encryption keys and then give them away. Websites that want users to be able to verify their identity and connect securely generate an asymmetric key pair (an A and B key) then keep one of the key pair (A or B, it does not matter) secret and give the other key to whoever wants it. The key that is handed out to anyone is called the **public key** and the one that is kept secret is the **private key**.

Because the private key is a secret only held by the website and anyone can have a copy of the public key, they give very different guarantees:

* Anyone can use the public key to encrypt a message and be sure that only the holder of the private key can decrypt it. Other people cannot use the public key to decrypt the message. A message you lock with that public key can only be read by the holder of the private key.
* The holder of the private key can use it to lock messages that anyone can read using the public key. But, the reader will know that the message must be from the holder of the private key - only they have the key that will encrypt a message so that the public key unlocks it. No one can use the public key to make a message that other public keys can unlock.

TODO SYMMETRIC vs ASYMMETRIC IMAGE

Now to make sure that we are talking to the real wellsfargo.com, we just need to have a copy of their public key and ask them to send us messages encrypted using their private key. If we can read the messages with the public key, they must have come from Wells Fargo. But how can we be sure that we get a copy of their public key? If we connect to wellsfargo.com and ask for a copy, someone who intercepted our message could simply give us their public key and claim it was Wells Fargo's! We need a way to get that key from a trusted source.
