..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


Data and Python
========================

Although SQL gives us powerful tools for querying data that is stored in a database, programmers
often need to work with data in other languages. If our data is coming from somewhere like a
file or a web site, it is not in a database, so there is nothing to issue SQL instructions to.
Or maybe we need to manipulate the data using some complex logic - we want to find telephone
numbers in a wide range of formats like "5031231234" or "503 123-1234" or "(503) 123 1234"
and turn them into something standard like "503-123-1234". SQL excels at basic filtering and
aggregation, but it can be difficult to express more complex algorithms in it.

For situations like these, programmers will use Python or some other general purpose programming
language to work with their data. In this chapter we will look at how that is done.
