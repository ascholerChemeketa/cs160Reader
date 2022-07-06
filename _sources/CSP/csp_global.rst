.. Commonly used declarations in CSP files

.. Not sure this is doing anything... but it appeared a lot so keeping it for now
.. highlight:: python
    :linenothreshold: 4


.. This is ugly, find a better way...
.. |turtle_ref| raw:: html

    <a href="" class="turtle-ref" target="_blank">Turtle programming reference sheet</a>
    <script>
        let loc = window.document.location.pathname;
        loc = loc.slice(0, loc.indexOf("/CSP/")+ 5);
        loc = loc + "CSPNameTurtles/turtleProcedures.html"
        console.log(loc)
        let links = document.getElementsByClassName("turtle-ref")
        for(let link of links) {
            link.href = loc;
            console.log(link)
        }
    </script>
