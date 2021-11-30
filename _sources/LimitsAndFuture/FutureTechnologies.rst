.. include:: ../global.rst

.. index:: moore's law

End of Moore's Law?
=========================================

Although it is hard to overestimate the degree to which computation has changed modern life, there are limits to what we can do with modern computers and new barriers to progress on the horizon. We have discussed problems that are proven to be unsolvable by any computer, and those that have no polynomial time solution and thus are unsolvable in practical terms on a modern computer. In addition to those algorithmic limits, physical limits are increasingly affecting our ability to build faster computers.

.. sidebar:: How Big?

    \ `This cool animation <https://htwins.net/scale2/>`__ allows you to explore the microscopic world. (Hint: you'll find transistors at about :math:`{10}^{-7}` meters)

Moore's Law has served well as a predictor of the growth of the limits of computational power. By relentlessly shrinking the size of computational components we have been able to build more complex and faster processors. But the exponential growth of computer power predicted by Moore's Law may be close to an end. Modern transistors are manufactured at a size of about 10 nanometers - or 1/10,000th of the size of a human hair. At this scale, the gate in a transistor the blocks or allows current is only about 50 atoms wide.

.. figure:: Images/nanoscale.jpg

    `Image by US Dept. of Energy <http://www.nano.gov/nanotech-101/what/nano-size>`__

    A transistor is ~10 nm or 1/10,000th the size of a human hair.

We are nearing the end of our ability to continue shrinking existing silicon microchips. As the scale of components decreases, they become harder to build and harder to make reliable. Every attempt to reduce the size of chips requires increasingly complex new processes. The fabrication facilities used to make cutting edge processors cost billions of dollars - only three companies in the world are actively pursuing commercial manufacturing at smaller and smaller scales. And as features shrink to a few dozen atoms, quantum effects mean they start behaving differently. We can't just build the same kinds of chips much smaller than we already do. For these reasons, `"Moore's Law is Dead" <https://www.google.com/search?q=moore%27s%20law%20is%20dead>`__ is a popular sentiment - the steady growth in computing power we have had for over four decades is slowing down.

Computing power will continue to increase, but it will not come by following the path that has given us dramatic speedups year after year. Instead, we will need `completely new strategies <https://www.digitaltrends.com/computing/end-moores-law-end-of-computers/>`__ for increasing the amount of work we can do with computation. These strategies include new materials for microprocessors, doing parallel computing in the cloud, specialized hardware for specific tasks, and researching completely different forms of computation like quantum computation.
