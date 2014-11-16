.. include:: ../global.rst


.. index:: 
    single: merge sort; efficiency

Merge Sort Compared
=================================

We have established that the Merge Sort algorithm requires :math:`O(n·log_2(n))` work to sort a list of size **n**. How does that compare to Insertion and Selection sort that are :math:`O(n^2)`? 

Below is a graph of the growth of :math:`n^2` and :math:`n·log_2(n)`:

.. figure:: Images/Sorts.svg

Obviously, :math:`n^2` grows much faster than :math:`n·log_2(n)`. Looking at the table below, we can see that sorting 500 items with Insertion Sort (\ :math:`O(n^2)`) would take somewhere around 250,000 units of work. Doing the same task with Merge Sort would only take around 4,483 units of work! 

.. table::
    :class: place-values type-size-100p
    
    ==================================      ==============  ==============  ==============  ==============  ==============  ===============   
    **Problem size**                        10              100             500             1,000           10,000          100,000         
    ==================================      ==============  ==============  ==============  ==============  ==============  ===============
    :math:`n \cdot log_2(n)`                33	            664	            4,483	        9,966	        132,877	        1,660,964   
    :math:`n^2`                             100	            10,000          250,000         1,000,000       100,000,000     10,000,000,000
    ==================================      ==============  ==============  ==============  ==============  ==============  ===============
       

Using the Big-O classification of each algorithm like this gives us a rough estimate of the work. We are ignoring constant factors that may change the exact numbers (especially for low values of n). Merge Sort has more basic overhead than Insertion Sort (for example, we have to copy items to and from a second list) - if you are solving small problems it may actually take more time to run than Insertion Sort due to this. But we know that as **n** grows larger the basic pattern is going to hold - :math:`O(n^2)` is going to grow faster than :math:`O(n·log_2(n))`, so Merge Sort will certainly be faster out for large values of **n**. 

Below, you can use the Sort Timer to simulate running sorts of different sizes using the two algorithms. You can use the slider to change the size of the list being sorted. Try comparing the two algorithms at different sort sizes. Does Merge Sort always win? At what point does Insertion Sort start taking more than a half second to run? At what point does Merges Sort start taking more than a half second?

.. image:: Images/working.gif
    :class: display-none

.. raw:: html
    
    <style>
      #sorterBox {
        width: 600px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      #sorterBox legend {
        width: auto;
        margin: 0px 0px 0px 10px;
        border: none;
      }
      .sortRow {
        padding: 5px 10px;
      }
      #probSizeEntry {
        margin-right: 20px;
      }
      #probSizeText {
        text-align: center;
        width: 150px;
        margin-bottom: 10px;
      }
      #sizeBox {
        float: right;
        padding-bottom: 15px;
        width: 200px;
      }
      #inputBox {
        display: inline-block;
      }
      #probSize {
        width: 150px;
      }
      .sortButton {
        width: 120px;
        margin-right: 15px;
      }
      </style>
      <script>
      function hexFromRGB(r, g, b) {
        var hex = [
          r.toString( 16 ),
          g.toString( 16 ),
          b.toString( 16 )
        ];
        $.each( hex, function( nr, val ) {
          if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
          }
        });
        return hex.join( "" ).toUpperCase();
      }
      
      function getBaseLog(x,y) {
            return Math.log(x) / Math.log(y);
      }
      
      function simulateNSqWork(n) {
        var total = 0;
        n *= n;
        n /= 51324;     //misc tuning constant
        n *= (1.05 - Math.random() / 10); //+- 5% variability
        var places = 5 - Math.floor(getBaseLog(n,10));
        if(places < 0) places = 0;
        setTimeout(function() {
            
            $("#insertSorting").text( (n / 1000.0).toFixed(places) + " seconds");
            
            $( "#goNSqButton" ).removeAttr('disabled');
        }, n);
      }
      function addCommas(nStr)
        {
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
      function simulateNLogNWork(n) {
        var total = 0;
        n *= Math.log(n);  //base e but adjust to 2 with tuning constant
        n /= 47303;     //misc tuning constant
        n += 0.00234;     //misc tuning constant - make merge sort come in slower on small list
        n *= (1.05 - Math.random() / 10); //+- 5% variability
        var places = 5 - Math.floor(getBaseLog(n,10));
        if(places < 0) places = 0;
        setTimeout(function() {
            $("#mergeSorting").text( (n / 1000.0).toFixed(places) + " seconds");
            $( "#goNLogNButton" ).removeAttr('disabled');
        }, n);
      }
      function changeSize() {
        var n = $( "#probSize" ).slider( "value" );
        $("#probSizeText").val( addCommas(Math.pow(10,n)) );
      }
      $(function() {
        $( "#probSize" ).slider({
          orientation: "horizontal",
          min: 1,
          max: 7,
          value: 1,
          slide: changeSize,
          change: changeSize
        });
        changeSize();
        $( "#goNSqButton" ).click( function() {
            var temp = $("#probSizeText").val().split(",").join("");
            var n = parseInt(temp);
            $( "#insertSorting" ).html("Sorting... <img src='../_images/working.gif'>");
            $( "#goNSqButton" ).attr('disabled','disabled');
            simulateNSqWork(n);
        });
        $( "#goNLogNButton" ).click( function() {
            var temp = $("#probSizeText").val().split(",").join("");
            var n = parseInt(temp);
            $( "#mergeSorting" ).html("Sorting... <img src='../_images/working.gif'>");
            $( "#goNLogNButton" ).attr('disabled','disabled');
            simulateNLogNWork(n);
        });
      });
      </script>
      
    <fieldset id="sorterBox">
        <legend>Sort Timer</legend>
        <div id="sizeBox">
            <span id="probSizeEntry"><strong>List Length:</strong></span>
            <div id="inputBox">
                <input type="text" class="work" id="probSizeText" readonly="true" />
                <div type="text" id="probSize"> </div>
             </div>
        </div>
        <div class="sortRow">
            <button id="goNSqButton" class="sortButton">Insertion Sort</button><span id="insertSorting"></span>
        </div>
        <div class="sortRow">
            <button id="goNLogNButton" class="sortButton">Merge Sort</button><span id="mergeSorting"></span>
        </div>
    </fieldset>
    <br/>


