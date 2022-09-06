..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.




Chapter Concept Summary
============================

This chapter included the following concepts from computing.

.. index::
    pair: list; slice
    pair: list; index based loop
    
- **Index Based List Iteration** - To modify items in a look as we iterate through
  them, we need to use a counting loop where we iterate through the indexes of all
  of the items in the list. Given the index, we can access items to read them or
  to modify them.
- **List Slice** - We can copy part of a list by making a slice using the syntax
  ``list[startIndex:endIndex]`` The slice will be a list that contains all the
  item from ``startIndex`` up to but not including ``endIndex``.
  We can leave ``endIndex`` blank to select until the end of the list.
  The original list will not be modfied.