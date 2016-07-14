.. include:: ../../global.rst

.. index:: certification authorities

.. index::
  :single: signing, digital

Certification Authorities
=========================================

We have a chicken and egg problem: We can't trust any computer that we connect to over the internet unless we have its public key. But we can't trust a public key if we get it over the internet.

To get around this problem, computers and web browsers come with a list of public keys already built in. Large tech companies like Microsoft and companies that specialize in internet security like Verisign provide their public key to the makers of web browsers and other software. We trust that the makers of the software have verified that the public key really belongs to the company it is being used for - that the "Microsoft key" really does belong to Microsoft - and thus, we can trust those keys. (This is a good reason to be careful about where you download your web browser from - if you download a browser like Chrome from a dodgy website it may have been doctored to include new public keys!).

So our computers can trust certain web servers because the needed public key is "baked into" the operating system or web browser. But computers can't possibly come with the public key for every website in the world preinstalled. Instead we need to leverage the servers we trust to establish trust for new servers. This is the job done by **certification authorities**: they certify the public keys of websites like wellsfargo.com so we know we can trust them.

The process begins when someone wants to establish a new secure server on the web like wellsfargo.com. They generate a private/public key pair and then give the public key to a certification authority like Verisign. Verisign checks out the information provided by the company and makes sure in the real world that they really are talking to Wells Fargo. After they have verified the source of the public key, Verisign would lock up a copy of Wells Fargo's public key using Verisign's own private key. They then give this locked package (the encrypted key) back to Wells Fargo. This package is called a **certificate** and in addition to Wells Fargo's public key would contain locked up copies of information about what website the key belongs to, an expiration date for the key and other information.

TODO SIGNED KEY

Now, when your computer connects to wellsfargo.com, the web server can give your computer a copy of the locked up public key. (Since this is all really happening electronically, we can make an infinite number of copies of the "locked box".) Your computer already has and trusts the public key for Verisign - it can use that key to unlock the box and reveal the wellsfargo.com public key. There is nothing secret about the public key that is locked up - anyone else could open that box as well. Instead, what is important is that you know that the public key inside the box **must** have been locked up by Verisign. No one else could have locked the box as only Verisign has the private key that corresponds to the Verisign public key.

Since we trust Verisign's public key, we can trust that Verisign must have produced the locked box (encrypted key); we also trust that Verisign validated that the public key belongs to Wells Fargo before they locked it up; therefore, we can trust that the encrypted key must really belong to Wells Fargo. This process of encrypting something in a way that does not keep it secret, but instead proves that it came from a particular source is known as **digital signing**.

This chain of trust can be extended with to build a whole chain of trust. Say I run a small web business (call it "foo.com") and want to create a secure server. I am too small for Verisign to deal with - they only want to work with large companies. So instead, I could go to my web provider (lets call them "host.com"). I get them to verify me and **sign** my public key (encrypt it using their private key). They are big enough to get a copy of their public key signed by Verisign. Now, if you connect to foo.com you are given the copy of my public key that was encrypted by host.com. To unlock that package, your browser asks host.com for the copy of their public key that was encrypted by Verisign. That can be unlocked with the Verisign key built into your browser. Once the host.com public key has been unlocked, it can be used to unlock the foo.com key. Because you trust Verisign and Verisign trusts host.com and host.com trusts foo.com, you can trust foo.com.

TODO CHAIN OF TRUST
