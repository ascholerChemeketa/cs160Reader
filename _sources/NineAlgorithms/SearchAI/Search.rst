.. include:: ../global.rst

.. index:: best first search, shortest path

Search & AI
=========================================

.. pseudo_h3:: Best First Search
    :class: underlined
    
How does google maps plan a route? Imagine we have a map that shows different towns and the distance between them. This video demonstrates a technique to make sure we find the best possible path from one town to another.

.. youtube:: uyfZlHtXP74

.. note:: This is a simplified version of an algorithm called Djiksta's shortest path algorithm. It finds the best route to every other city from a given city. You can `try it out here <http://www.cs.usfca.edu/~galles/visualization/Dijkstra.html>`__ if you like. Enter a vertex (circle/town) number to start at and press the Run Djikstra.

This same basic technique can be applied any time we can represent a problem as a collection of states and transitions between those states. For example, take the kind of puzzle called a **word ladder**. A word ladder involves trying to turn one word, say *cat* into another, say *dog*, by changing just one letter at a time to make a new word. From the starting word *cat* we could make lots of words: *cab, car, can, cap, bat, rat, fat, mat, cot, etc...* Each of those words leads to other possible words. 

Viewed as a search problem, each word is a "location", and the "roads" between each location show the moves we can make. We would assign each step a cost of 1 and try to find a path with the minimal number of moves using the same process as we did on a map. One solution for cat->dog is shown below.
    
.. figure:: Images/wordLadder.png
    
    ..
    
    A word ladder: cat -> cot -> dot -> dog.

A computer using this algorithm would first determine all the words that were 1 step away from the start word. Then it would take each of those words, and find the words that were 2 steps away. Then it would look at each 2 step word to figure out where it could get in three steps... spreading out something like the animation shown below.


.. raw:: html

    <script>
        // initial default values 
        var pvars = {
            FRAME_DELAY : 500,
            GRAPH_SIZE : 30,
            VERT_DENSITY : 0.7,
            EDGE_LENGTH_CUTOFF : 1.8,
            POINT_CHAOS : 0.5,
            WINDOW_SIZE : 600
        };
        $(function() {
            $("#dobfs").click(function() {
                var p = Processing.getInstanceById('Processing_BFS');
                p.startBFS();
            });
            
            $("#sliderDelay").slider({
              value: pvars.FRAME_DELAY,           // default value
              min: 10, max: 3000, step: 5, 	  
              slide: function(event, ui) {        // function called when slider adjusted
                pvars.FRAME_DELAY = ui.value;               // update variable
                $("#textDelay").text("Slowness: " + pvars.FRAME_DELAY + "ms");  // update text label
              }
            });
            
            $("#sliderSize").slider({
              value: pvars.GRAPH_SIZE,
              min: 3, max: 100, step: 1, 	  
              slide: function(event, ui) {       
                //pvars.GRAPH_SIZE = ui.value;
                var p = Processing.getInstanceById('Processing_BFS');
                p.setGraphSize(ui.value);
                $("#textSize").text("Graph size: " + pvars.GRAPH_SIZE); 
              }
            });
            
            $("#sliderDensity").slider({
              value: pvars.VERT_DENSITY,
              min: 0, max: 1, step: 0.05, 	  
              slide: function(event, ui) {
                pvars.VERT_DENSITY = ui.value;
                $("#textDensity").text("Node density: " + pvars.VERT_DENSITY);
              }
            });
            
            $("#sliderEdgeCutoff").slider({
              value: pvars.EDGE_LENGTH_CUTOFF,
              min: 0.5, max: 15, step: 0.1, 	  
              slide: function(event, ui) {
                pvars.EDGE_LENGTH_CUTOFF = ui.value;
                $("#textEdgeCutoff").text("Edge length cutoff: " + pvars.EDGE_LENGTH_CUTOFF);
              }
            });
            
            $("#sliderPointChaos").slider({
              value: pvars.POINT_CHAOS,
              min: 0, max: 6, step: 0.1, 	  
              slide: function(event, ui) {
                pvars.POINT_CHAOS = ui.value;
                $("#textPointChaos").text("Node randomness: " + pvars.POINT_CHAOS);
              }
            });
            
            // inital text of labels
            $("#textDelay").text("Slowness: " + pvars.FRAME_DELAY + "ms");
            $("#textSize").text("Graph size: " + pvars.GRAPH_SIZE);
            $("#textDensity").text("Node density: " + pvars.VERT_DENSITY);
            $("#textEdgeCutoff").text("Edge length cutoff: " + pvars.EDGE_LENGTH_CUTOFF);
            $("#textPointChaos").text("Node randomness: " + pvars.POINT_CHAOS);
        });
            </script>
    <div align="center">
    <canvas id="Processing_BFS" style="border-style: solid; image-rendering: -webkit-optimize-contrast !important;" tabindex="0" width="580" height="400"></canvas></div>
    <script type="text/processing" data-processing-target="Processing_BFS">

    // constants
    //float EDGE_LENGTH_CUTOFF = 1.8;   // Maximum length of created edges between points
    //float GRAPH_SIZE = 	40.0;       // (Number of x and y coordinates in points) - 1
    //int WINDOW_SIZE = 500;
    int WINDOW_PADDING = 15;
    //float POINT_CHAOS = 0.4;
    //float SPARSITY = 0.3;
    //int FRAME_DELAY = 20;

    int MAX_NUM_VERT_EDGES = 2*(int)Math.pow(2*Math.ceil(pvars.EDGE_LENGTH_CUTOFF),2);
    float EDGE_LENGTH_CUTOFF_SQ;

    color edgeCol     = color(80, 80, 80, 30);
    color travEdgeCol = color(255, 90, 90, 180);

    // globals
    DiGraph theGraph;
    BFSer bfser;
    float SF;
    int lastTime;
    boolean searching = false;

    boolean draggingSource, draggingSink;
    DiVert srcVert, snkVert;

    void setup() {
      size(pvars.WINDOW_SIZE, pvars.WINDOW_SIZE);
      smooth(); 
      startBFS();
      lastTime = millis();
    }
        
    void draw() {
      if (searching && millis() - lastTime > pvars.FRAME_DELAY) {
          bfser.doSearchStep();
          bfser.drawUpdate();
          lastTime = millis();
          
          if (bfser.sinkFound) {
            bfser.drawSolutionPath();
            searching = false;
            displayStatusMessage("Shortest path from source to sink is " + bfser.depth + " steps.");
          }
          else if (bfser.queue.isEmpty()) {
            searching = false;
            displayStatusMessage("Queue empty. Sink node unreachable from source node.");
          }
      }
    }

    void mousePressed() {
        // if click is on source node, start dragging source
        if (dist(mouseX, mouseY, gx(srcVert.x), gy(srcVert.y)) < 30)
            draggingSource = true;
        // else if click is on sink node, start dragging sink
        else if (dist(mouseX, mouseY, gx(snkVert.x), gy(snkVert.y)) < 30)
            draggingSink = true;
    }

    void mouseReleased() {
        // stop dragging everything
        draggingSource = draggingSink = false;
    }

    void mouseDragged() {
        // if dragging source node, update position
        if (draggingSource) {
            srcVert.x = (mouseX - WINDOW_PADDING) / SF;
            srcVert.y = -(mouseY + WINDOW_PADDING - height) / SF;
            redrawTheGraph();
        }
        // else if dragging sink node, update position
        else if (draggingSink) {
            snkVert.x = (mouseX - WINDOW_PADDING) / SF;
            snkVert.y = -(mouseY + WINDOW_PADDING - height) / SF;
            redrawTheGraph();
        }
    }
    float gx(float x) {
      return (x * SF + WINDOW_PADDING);
    }

    float gy(float y) {
      return (-y * SF + (height - WINDOW_PADDING));
    }

    void setGraphSize(int newSize) {
        srcVert.x = srcVert.x * newSize/pvars.GRAPH_SIZE;
        srcVert.y = srcVert.y * newSize/pvars.GRAPH_SIZE;
        snkVert.x = snkVert.x * newSize/pvars.GRAPH_SIZE;
        snkVert.y = snkVert.y * newSize/pvars.GRAPH_SIZE;
        pvars.GRAPH_SIZE = newSize;
    }

    void displayStatusMessage(String msg) {
        // update webpage status message text
        $("#textSearchResult").text(msg);
    }


    void startBFS() {
      int tStart = millis();
      displayStatusMessage("");
      SF = (pvars.WINDOW_SIZE - 2*WINDOW_PADDING) / pvars.GRAPH_SIZE; // scale factor
      EDGE_LENGTH_CUTOFF_SQ = pvars.EDGE_LENGTH_CUTOFF * pvars.EDGE_LENGTH_CUTOFF
      
      if (srcVert != null) srcVert.reset();
      if (snkVert != null) snkVert.reset();
      
      theGraph = new DiGraph(pvars.GRAPH_SIZE, pvars.VERT_DENSITY, srcVert, snkVert);
      bfser = new BFSer(theGraph);
      srcVert = theGraph.source;
      snkVert = theGraph.sink;
      searching = true;
      redrawTheGraph();
    }


    void redrawTheGraph() {
      background(255,255,255);
      
      // draw out-edges
      // (we only need to draw out-edges, since every out-edge is also an in-edge for a different vertex)
      strokeWeight(1);
      stroke(edgeCol);
      for (DiVert v1 : theGraph.innerVerts) {
        for (DiEdge e: v1.outEdges) {      
          DiVert v2 = e.toVert;
          line(gx(v1.x), gy(v1.y), gx(v2.x), gy(v2.y));
        }
      }
      
      // draw out-edges from source
      for (DiEdge e: theGraph.source.outEdges) {      
        DiVert v2 = e.toVert;
        line(gx(theGraph.source.x), gy(theGraph.source.y), gx(v2.x), gy(v2.y));
      }
      
      // draw traveled edges
      strokeWeight(2);
      stroke(travEdgeCol);
      for (DiEdge e : theGraph.graphEdges){
        if (e.traversed) 
          line(gx(e.fromVert.x), gy(e.fromVert.y), gx(e.toVert.x), gy(e.toVert.y));
      }
      
      
      // draw inner verts
      int pointSize = 2*sqrt(100 / pvars.GRAPH_SIZE);
      strokeWeight(pointSize);
      stroke(0);
      for (DiVert v : theGraph.innerVerts) {
        point(gx(v.x), gy(v.y));
      }

      // draw source and sink
      int sourceSinkSize = max(8, pointSize);
      strokeWeight(sourceSinkSize + 4);
      stroke(255,200,200,200);  // red
      point(gx(theGraph.source.x), gy(theGraph.source.y));
      point(gx(theGraph.sink.x), gy(theGraph.sink.y));
      strokeWeight(sourceSinkSize);
      stroke(255,0,0);  // red
      point(gx(theGraph.source.x), gy(theGraph.source.y));
      point(gx(theGraph.sink.x), gy(theGraph.sink.y));
        
    }


    float gx(float x) {
      return (x * SF + WINDOW_PADDING);
    }

    float gy(float y) {
      return (-y * SF + (height - WINDOW_PADDING));
    }

    DiEdge getTraversedInEdge(DiVert v){
        for (DiEdge e : v.inEdges){
            if (e.traversed) return e;
        }
        return null;
    }

    // Vertex class for graph
    class DiVert {
      float x, y;
      ArrayList<DiEdge> outEdges, inEdges;
      boolean wasVisited;     // flag for search algorithm
      
      // constructor to create a DiVert from coordinates
      public DiVert(float _x, float _y){
        x = _x;
        y = _y;
        reset();
      }
      
      void reset() {
        outEdges = new ArrayList<DiEdge>();
        inEdges = new ArrayList<DiEdge>();
        wasVisited = false;
      }
    }


    // Edge class for graph
    class DiEdge {
      DiVert fromVert, toVert;
      boolean traversed;
      
      public DiEdge(DiVert _from, DiVert _to) {
        fromVert = _from;
        toVert = _to;
        traversed = false;
      }
    }


    class BFSer {
        VertQueue queue;
        DiVert vert1, vert2;
        boolean sinkFound = false;
        int depth = 0; // number of search steps executed (level of search depth)
        int remainingVertsThisDepth = 1;
        DiGraph graph;

        BFSer(DiGraph g) {
            graph = g;
            startBFS();
        }
        
        
      void startBFS() {
          queue = new VertQueue();;

          sinkFound = false;
          depth = 0; // number of search steps executed (level of search depth)
          remainingVertsThisDepth = 1;

          //source node is starting point
          graph.source.wasVisited = true; 
          queue.enqueue(graph.source);
      }
      
      void doSearchStep() {
          boolean stepDone = false;
          while (!stepDone && !sinkFound && !queue.isEmpty()) {
            vert1 = queue.dequeue();
            remainingVertsThisDepth--;
          
            while (!sinkFound && (vert2 = graph.getAdjUnvisitedVert(vert1)) != null) {
              vert2.wasVisited = true;
              queue.enqueue(vert2);
              if (vert2 == graph.sink)
                sinkFound = true;
            }
            
            if (remainingVertsThisDepth == 0 || sinkFound) {
              depth++;  
              remainingVertsThisDepth = queue.currentSize; 
              stepDone = true;
            }
          }
      
          displayStatusMessage("Current depth: " + depth + ", Nodes in queue: " + queue.currentSize);
      }
      
      void drawUpdate() {
        strokeWeight(2);
        stroke(travEdgeCol);
        for (DiEdge e : graph.newTraversedEdges) 
              line(gx(e.fromVert.x), gy(e.fromVert.y), gx(e.toVert.x), gy(e.toVert.y));
        
        graph.newTraversedEdges.clear();
      }
      
      // draw solution path
      void drawSolutionPath() {
        stroke(255, 0, 0, 200);
        strokeWeight(5);
        DiEdge e;
        DiVert v1 = theGraph.sink, v2;
        while ((e = getTraversedInEdge(v1)) != null){
            v2 = e.fromVert;
            line(gx(v1.x), gy(v1.y), gx(v2.x), gy(v2.y));
            v1 = v2;
        }
      }
      
    }



    // Graph class
    class DiGraph 
    {
      DiVert source, sink;
      ArrayList<DiVert> innerVerts;
      ArrayList<DiEdge> graphEdges;
      ArrayList<DiEdge> newTraversedEdges;
      
      // pointSparsity: Sparseness of points; closer to 1.0 = fewer points
      public DiGraph(float graphSize, float pointDensity, DiVert _src, DiVert _snk)
      {  
        // create source and sink vertices
        source = (_src == null) ? new DiVert( graphSize * 0.051, graphSize * 0.051 ) : _src;
        sink = (_snk == null) ? new DiVert( graphSize * 0.951, graphSize * 0.951 ) : _snk;
      
        // randomly select points in the graph to use as vertices and add randomness if desired
        innerVerts = new ArrayList<DiVert>();
        for (int i=0; i <= graphSize; i++)
          for (int j=0; j <= graphSize; j++)
            if (random(1) < pointDensity) 
              addVert(i + random(-pvars.POINT_CHAOS,pvars.POINT_CHAOS), j + random(-pvars.POINT_CHAOS,pvars.POINT_CHAOS));
              
            
        //for source and sink nodes, add edges between neighboring verts closer than bound
        graphEdges = new ArrayList<DiEdge>();
        for (DiVert v : innerVerts) {
          if ( distSq(source.x, source.y, v.x, v.y) < EDGE_LENGTH_CUTOFF_SQ )
            addEdge(source, v);        // add edge from source to point
              
          if ( distSq(v.x, v.y, sink.x, sink.y) < EDGE_LENGTH_CUTOFF_SQ ) 
            addEdge(v, sink);          // add edge from point to sink
        }
            
        // iterate through all inner vertex pairs and add edges between verts closer than bound
        for (int i=0; i < innerVerts.size(); i++) {
          DiVert v1 = innerVerts.get(i);
          
          for (int j=i+1; j < innerVerts.size(); j++) {
            DiVert v2 = innerVerts.get(j);
                  
            if ( distSq(v1.x, v1.y, v2.x, v2.y) < EDGE_LENGTH_CUTOFF_SQ ) {
              addEdge(v2, v1);
              addEdge(v1, v2);    // add edges in both directions for all inner verts
            }
            
          }
        }
        
        newTraversedEdges = new ArrayList<DiEdge>();
      }
      
      public void addEdge(DiVert fromVert, DiVert toVert) 
      {
        DiEdge e = new DiEdge(fromVert, toVert); // create a new edge with these vertices
        graphEdges.add(e);                       // add the new edge to the graph's list of edges
        fromVert.outEdges.add(e);                // add the new edge to its vertices' lists of edges
        toVert.inEdges.add(e);
      }
      
      public void addVert(float x, float y)
      {
        innerVerts.add( new DiVert(x, y) );
      }
      

      
      // Finds the shortest path length from source to sink by doing a breadth-first search
      public int findShortestPathLength(int waitTime) {
        Queue<DiVert> q = new LinkedList<DiVert>();
        
        // source node is starting point
        source.wasVisited = true; 
        q.add(source);
        
        DiVert v1, v2;
        boolean sinkFound = false;
        int depth = 0; // number of search steps executed (level of search depth)
        int remainingVertsThisDepth = 1;
        
        while (!sinkFound && !q.isEmpty()) {
          v1 = q.remove();
          remainingVertsThisDepth--;
          
          while (!sinkFound && (v2 = getAdjUnvisitedVert(v1)) != null) {
            v2.wasVisited = true;
            q.add(v2);
            if (v2 == sink) sinkFound = true;
          }
          
          if (remainingVertsThisDepth == 0) {
            depth++;  
            remainingVertsThisDepth += q.size(); 
          }
        }
        if (sinkFound) { return depth + 1; } // +1 to include final step in search depth
        else { return -1; } // return -1 if sink node was not reachable from source node (disconnected)
      }
      
      // Given a vertex, returns an adjacent vertex with wasVisited flag = false, and null if none exist.
      public DiVert getAdjUnvisitedVert( DiVert v )
      {
        // iterate through all v's outgoing edges
        for (DiEdge e : v.outEdges) 
          if (!e.toVert.wasVisited) {
            e.traversed = true;
            newTraversedEdges.add(e);
            return e.toVert; 
          }
            
        return null;
      }
      
      // return the square of the distance between two points
      // this takes less computation power than finding the distance because it does not need a square root
      float distSq(float x1, float y1, float x2, float y2) {
        return ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      }
      
    }


    class VertQueue { // cannot hold null values
      DiVert[] arr = new DiVert[1];
      int head, tail, currentSize;
      
      VertQueue() {
        currentSize = 0;
        head = 0;
        tail = -1;
      }
      
      void enqueue(DiVert v) {
        if (currentSize == arr.length) doubleArray();
        if (++tail == arr.length) tail = 0;
        arr[tail] = v;
        currentSize++;
      }
      
      DiVert dequeue() {
        if (currentSize == 0) return null;
        currentSize--;
        DiVert v = arr[head];
        if (++head == arr.length) head = 0;
        return v;
      }
      
      boolean isEmpty() {
        return currentSize == 0;
      }
      
      void doubleArray() {
        DiVert[] newArr = new DiVert[2 * arr.length];
        for (int i = 0; i < currentSize; i++) 
          newArr[i] = arr[(head + i) % arr.length];
          
        arr = newArr;
        head = 0;
        tail = currentSize - 1;
      }
    }
    </script>
    <p></p> 
    <div align="center">
    <div style="font-size: 80%">Animation based on work by <a href="http://joseph-harrington.com/2012/02/breadth-first-search-visual/">Joseph Harrington</a></div>
    <button id="dobfs" type="button">Restart</button>
    </div>
    <br/>

    
