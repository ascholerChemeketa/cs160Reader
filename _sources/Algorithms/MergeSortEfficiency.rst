.. include:: ../global.rst


.. index:: 
    pair: sort; merge

Merge Sort Efficiency
=================================

So how efficient is Merge Sort? Well, for starters, remember that merging **n** items takes :math:`O(n)` work. In other words, merging 5 items takes ~5 units of work, merging 20 items, takes ~20 units of work, etc... Now lets do a rough analysis of how long it takes to do a merge sort on a list of length 1024.

All the hard work takes place as we merge the lists back together:

* The first merge for a list of 1024 things would be to merge 1024 single items into 512 lists of length two. Each merge would take ~2 units of work since there are two items in the new lists. 512 lists times 2 units of work = ~1024 units of work. 
* The next level would be to merge those 512 lists of size 2 into 256 lists of size 4. Each merge in that level would take ~4 units of work. 256 lists times 4 units of work = 1024 units of work again. 

The table below shows this and the pattern for the rest of the level:

.. raw:: html

    <table class="table" border="0">
        <colgroup>
            <col width="5%">
            <col width="35%">
            <col width="15%">
            <col width="15%">
            <col width="30%">
        </colgroup>
        <thead valign="bottom" style="text-align: center;">
            <tr class="row-odd">
                <th class="head">Level</th>
                <th class="head">Description</th>
                <th class="head">Number of Lists</th>
                <th class="head">Size of Each List</th>
                <th class="head">Amount of Work</th>
            </tr>
        </thead>
        <tbody valign="top">
            <tr class="row-even">
                <td>1</td>
                <td>1024 lists of size 1 <br>
                into 512 lists of size 2</td>
                <td>512</td>
                <td>2</td>
                <td>512 · 2 = <strong>1024</strong></td>
            </tr>
            <tr class="row-odd">
                <td>2</td>
                <td>512 lists of size 2 <br>
                into 256 lists of size 4</td>
                <td>256</td>
                <td>4</td>
                <td>256 · 4 = <strong>1024</strong></td>
            </tr>
            <tr class="row-even">
                <td>3</td>
                <td>256 lists of size 4 <br>
                into 128 lists of size 8</td>
                <td>128</td>
                <td>8</td>
                <td>128 · 8 = <strong>1024</strong></td>
            </tr>
            <tr class="row-odd">
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
            <tr class="row-even">
                <td>???</td>
                <td>2 lists of size 512<br>
                into 1 list of size 1024</td>
                <td>1</td>
                <td>1024</td>
                <td>1 · 1024 = <strong>1024</strong></td>
            </tr>
        </tbody>
    </table>


Note that each level the work is ~1024 units of time - exactly the number of items in the full list. Thus we can say each level takes :math:`O(n)` work.

Th only other thing we need to figure out is "how many levels are required?" The table above skips a few steps in the middle. We could go back and add them in - starting with 1024 items the levels would look like::

    1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1

That is 10 levels of merging to group 1024 single items into one list of 1024.

.. sidebar:: Wolfram Alpha
    
    You can use `Wolfram Alpha website <http://www.wolframalpha.com/>`__ to calculate log base 2 by typing something like "log2(1024)". To calculate :math:`100·log_2(100)` you would type "100*log2(100)". Try it below.
    
    .. raw:: html
    
        <div style="text-align: center;"><script id="WolframAlphaScript" src="http://www.wolframalpha.com/input/embed/?type=small" type="text/javascript"></script></div>
        
Like we saw with binary search, that progression - dividing by 2 repeatedly until we reach 1 - can also be determined by the mathematical function :math:`log_2(n)`. :math:`log_2(1024) = 10`. Using that, we could calculate the number of levels of merges required to do a Merge Sort on a list of 100,000 items: :math:`log_2(100,000) ≈ 16.61`. (Since we can't do 16.61 merges levels, we would call that 17.)

The formula also allows us to write a general formula for the overall work required for a Merge Sort. Starting with:

:math:`\textrm{total work} = \textrm{work per level} · \textrm{number of levels}`

We know that sorting **n** items will require :math:`log_2(n)` levels and each level will take **n** work:

:math:`\textrm{total work} = \textrm{n work} · log_2(n) \textrm{ levels}`

Or:

:math:`\textrm{total work} = n·log_2(n)`

Merge Sort requires :math:`O(n·log_2(n))` work to sort a list of size **n**.
