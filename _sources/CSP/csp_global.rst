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


.. |image_defs| raw:: html

    <style>
        .flexgrid {
            display: flex; 
            flex-wrap: wrap;
            gap: 10px;
        }
        .flexgrid div {
            flex: 1 200px;
        }
        .flexgrid .img-title {
            text-align: cetner;
        }
    </style>
    <div class="flexgrid hidden">
    <div>
        <img src="../../_static/CSPImages/mount_hood.jpg" id="mount_hood.jpg">
        <div class="img-title">mount_hood.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/graduates.jpg" id="graduates.jpg">
        <div class="img-title">graduates.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/goalkeeper.jpg" id="goalkeeper.jpg">
        <div class="img-title">goalkeeper.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/student1.jpg" id="student1.jpg">
        <div class="img-title">student1.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/student2.jpg" id="student2.jpg">
        <div class="img-title">student2.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/green_screen.jpg" id="green_screen.jpg">
        <div class="img-title">green_screen.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/scooter.jpg" id="scooter.jpg">
        <div class="img-title">scooter.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/chemeketa_logo.jpg" id="chemeketa_logo.jpg">
        <div class="img-title">chemeketa_logo.jpg</div>
    </div>
    <div>
        <img src="../../_static/CSPImages/cat.jpg" id="cat.jpg">
        <div class="img-title">cat.jpg</div>
    </div>
    </div>