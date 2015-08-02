.. include:: ../global.rst

.. index:: floating point numbers
 
.. _floating-point:

Floating Point Numbers
=======================================

Computers generally store data in fixed sized chunks. Hardware can more efficiently handle data if it is assumed that integers are represented with 32-bits, doubles with 64-bits and so on. But with a fixed number of bits to store decimal values, we are left with a hard choice: how many bits should we have on either side of the binary point?

Imagine we are only using 8 bits to store decimal numbers. If we do not worry about negative values and assume that there are always 4 digits on each side of the decimal - something like 1010.0110 - that means that the largest value we can represent is 15.9375 (1111.1111). The smallest non-zero value would be 0.0625 (0000.0001). If we use only 2 bits to represent integers and 6 to represent fractional values - like 10.101101 - we could represent smaller values. With 00.000001 we could represent 0.015625; but with this scheme, the largest value we could now represent would be 3.984375 (11.111111). 

Which of these two formats would be best? 4.4? or 2.6? There is no good answer. Sometimes we care about accurately representing small values and do not care about large ones. Other times, we need to represent larger values. A system with a fixed binary point, like where there are always 2 places to the left of the . and 6 to the right, or 4 to the left and 4 to the right, locks us into one particular set of compromises.

.. sidebar:: IEEE 754

    We are considering a simple example of how floating point numbers work - real systems have a few extra details like special values to represent inifinity. You can find information about the most common real implementation, the IEEE 754 floating point standard, `on this page <http://www.tfinley.net/notes/cps104/floating.html>`_ or on `wikipedia <http://en.wikipedia.org/wiki/Floating_point>`_.
    
The alternative is to use a **floating point** representation. You may not have heard of the term, but you have seen the same basic idea in **scientific notation**. When we write 6.2 x :math:`{10}^{12}` instead of 6200000000000 or 1.65 x :math:`{10}^{-8}` instead of 0.0000000165, we are condensing the representation of large and small values by shifting (or floating) the decimal point. Values are recorded as a decimal multiplied by some power of ten.

Computers use this same trick, but instead of representing values as decimals multiplied by powers of ten, they use binary numbers multiplied by a power of two. There are thus three things to represent: the sign of the number, the binary value and the power of two to multiply it by. We will use the following scheme:

* 1 bit to represent the **sign**. 0 for positive, 1 for negative.
* 3 bits to represent the **exponent** - the power of two to multiply by. We need to represent positive and negative exponents; to do so we will subtract 4 from the binary number the exponent represents. For example, if the three exponent bits are 101, that means 5. We would subtract 4 to get 1 and thus raise 2 to the 1st power. If the exponent bits were 001, representing 1, we would subtract 4 and get -3... this indicates we should raise 2 to the -3 power.
* 4 bits to represent the **binary fraction** (more formally known as the **mantissa**). We will always interpret these four bits as filling in the blanks of 0.XXXX. For example, if the four fraction bits are 0100 we would interpret that as :math:`{0.0100}_{2}` or :math:`{0.25}_{10}`.
* The final value is obtained by multiplying the binary fractional by the power of two indicated by the exponent.

It may sound a little complex, but remember it is the same idea as scientific notation - calculate an exponent of 2, and a binary fraction and multiply them. Experiment with the floating point decoder below. The row of boxes shows the bits of a number (initially all 0s), below that is an explanation of how that value would be decoded.

    
.. raw:: html

    <style>
    .digit {
        width: 65px; 
        margin: 2px;
        text-align: center;
    }

    #result, #digits {
        width: 560px;
    }

    #result fieldset {
        border-radius: 5px;
        border: 1px solid #ccc;
        width: 560px;
    }

    .signcol { 
        background: #DBE5F1;
    }

    .expcol {
        background: #EAF1DD;
    }

    .fraccol {
        background: #FDE9D9;
    }

    #result legend {
        margin: 0px;
        font-size: inherit;
        font-weight: bold;
        border-bottom: none;
        width: auto;
    } 

    </style>
    <script>

    $( function() {
        var digitsTable = "<table style='clear: both; border-collapse: inherit; border-spacing: 0; border-radius: 5px; border: 1px solid #ccc;'><tr><th class='signcol'>Sign</th><th class='expcol'>Exponent</th><th class='fraccol'>Fraction</th></tr><tr>";
        
        var i = 0;
        digitsTable += '<td class="signcol"><input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0"></td>';
        
        digitsTable += '<td class="expcol"><input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0">';
        digitsTable += '<input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0">';
        digitsTable += '<input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0"></td>';
        
        digitsTable += '<td class="fraccol"><input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0">';
        digitsTable += '<input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0">';
        digitsTable += '<input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0">';
        digitsTable += '<input readonly="true" class="digit" type="text" id="digit' + (i++) + '" value="0"></td>';
        
        digitsTable += "</tr></table>";
        $("#digits").append( digitsTable );
        
        $("#digits input").click( function() {
            if( $(this).val() == "1" ) 
                $(this).val("0");
            else 
                $(this).val("1");
            $(this).trigger("change"); 
        });
        
        $("#digits input").change( function() {
            var sign = "+"
            if( $("#digit0").val() == "1" ) {
                $("#sign").text("\\[  1 = negative \\hspace{110 px}  \\]" );
                sign = "-";
            }
            else
                $("#sign").text("\\[  0 = positive \\hspace{110 px}  \\]" );
           
            
            var exp = $("#digit1").val() + $("#digit2").val() + $("#digit3").val();
            var expValue = parseInt(exp, 2);
            var expValueDecimal = Math.pow(2, expValue - 4)
            var expHTML = "\\[ \\begin{align*}  {" + exp + "}_2 &= " + expValue + " \\hspace{20 px} \\textrm{(Exponent bits as binary number)}  \\cr ";
            expHTML+= "" + expValue + " - 4 &= " + (expValue - 4) + " \\hspace{20 px} \\textrm{(Subtract 4 for excess notation)} \\cr ";
            expHTML+= "2^{" + (expValue - 4) + "} &= " + expValueDecimal + " \\hspace{20 px} \\textrm{  (Calculate 2 to that power)} \\cr ";
            expHTML+= "\\textrm{exponent value} &= " + expValueDecimal ;
            expHTML+= " \\end{align*} \\]";
            $("#exponent").html("\\[ \\begin{align*} " + exp + "_2 &= " + expValue + " \\cr \\end{align*} \\]"); 
            $("#exponent").html(expHTML); 
            
            var mantissa = $("#digit4").val() + $("#digit5").val() + $("#digit6").val() + $("#digit7").val();
            var mantissaVal = parseInt(mantissa, 2) / 16.0;
            var mantissaHTML = "\\[ \\begin{align*} {0." + mantissa + "}_2 &= " + mantissaVal + "\\hspace{10 px} (";
            if( $("#digit4").val() == "1")
                mantissaHTML += "1/2 + ";
            if( $("#digit5").val() == "1")
                mantissaHTML += "1/4 + ";
            if( $("#digit6").val() == "1")
                mantissaHTML += "1/8 + ";
            if( $("#digit7").val() == "1")
                mantissaHTML += "1/16 + ";
                
            if(mantissaHTML.charAt(mantissaHTML.length - 2) == "+") 
                mantissaHTML = mantissaHTML.slice(0, -2) + ")";
            else
                mantissaHTML = mantissaHTML.slice(0, -2);
            
            mantissaHTML += " \\cr \\textrm{fraction value} &= " + mantissaVal + "\\hspace{180 px}";
            mantissaHTML += " \\end{align*} \\]";
                
            $("#mantissa").html(mantissaHTML);
                
            $("#meaning").html("\\[ \\begin{align*} value &= \\textrm{ (sign) (exponent value)} \\cdot \\textrm{(fraction value) } \\cr ");
            $("#meaning").append("&= " + sign + expValueDecimal + " \\cdot " + mantissaVal + " \\cr ");
            $("#meaning").append("&= " + sign + expValueDecimal * mantissaVal + " \\end{align*} \\]");
            
            
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,"result"]);
        });
        
        $("#digits input#digit0").trigger("change"); //trigger initial parse
    });
    </script>
    <div id="digits"></div>
    <div id="result">
        <fieldset class='signcol'><legend>Sign:</legend> <span type="text" id="sign" readonly="true"> </span></fieldset>
        <fieldset class='expcol'><legend>Exponent:</legend><span type="text" id="exponent" readonly="true"> </span></fieldset>
        <fieldset class='fraccol'><legend>Fraction:</legend><span type="text" id="mantissa" readonly="true"> </span></fieldset>
        <fieldset class=''><legend>Final meaning:</legend><span type="text" id="meaning" readonly="true"> </span></fieldset>
    </div>
        
    


.. pseudo_h4:: Self Check 
    :class: underlined
 
 
.. fillintheblank:: floatingpoint_1

    .. blank:: floatingpoint_1_ans1 
        :correct: ^\\+?7\\.5\\b
        :feedback1: ('[^0-9\\.\\-]+', 'Your answer should be a number')
        :feedback2: ('^\\-.*', 'Your answer should be positive')
        :feedback3: ('.*', 'Hint: To make a large value you need the largest exponent and largest fraction you can make')

        What is the largest value you can make using the scheme above? 

   
.. mchoice:: floatingpoint_2 
    :answer_a: 2
    :answer_b: 3
    :answer_c: 4
    :answer_d: 5
    :answer_e: 6
    :correct: a
    :feedback_a:  
    :feedback_b: 110 means 6
    :feedback_c: What power of two is that?
    :feedback_d: 110 means 6
    :feedback_e: In this scheme we subtract 4 from the binary value to get the exponent
    
    What power of two is represented by exponent bits of 110?
 
 
.. fillintheblank:: bitPatterns_3

    .. blank:: bitPatterns_3_ans1
           :correct: ^1010\\b
           :feedback1: ('[^0-1]+', 'Your answer should only consist of 0s and 1s')
           :feedback2: ('^[0-1]{4}\\b', 'Use the tool above to help figure out the answer')
           :feedback3: ('.*', 'Make sure your answer is 4 digits')

           Say the exponent bits are 101. What bits are needed in the fraction to make a final value of 1.25? 