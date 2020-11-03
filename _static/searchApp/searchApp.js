function sfc32(a, b, c, d) {
   return function() {
     a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
     var t = (a + b) | 0;
     a = b ^ b >>> 9;
     b = c + (c << 3) | 0;
     c = (c << 21 | c >>> 11);
     d = d + 1 | 0;
     t = t + d | 0;
     c = c + t | 0;
     return (t >>> 0) / 4294967296;
   }
}

function intersects(boxA, boxB) {
   if( boxB.x2 < boxA.x1 || boxB.x1 > boxA.x2 )
      return false;
   if( boxB.y2 < boxA.y1 || boxB.y1 > boxA.y2 )
      return false;

   return true;
}

function distance(p1, p2) {
   return Math.ceil(Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)));
}


function shuffleArray(array, rng) {
   for (var i = array.length - 1; i >= 0; i--) {
       var j = Math.floor(rng() * (array.length));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
}

$(function(){ 

   $('[data-toggle="tooltip"]').tooltip();

   var queryParams = new URLSearchParams(window.location.search);

   var hashValue = Math.floor(Math.random() * 10000);
   if(queryParams.has('map'))
      hashValue = queryParams.get('map');

   $('#mapNum').val(hashValue);

   var isStrict = true;
   if(queryParams.has('intuition')) {
      isStrict = false;
      $("#intuition").prop("checked", true)
   }

   $("#mapNum").on('focusout', function() {
      location.href = location.protocol + '//' + location.host + location.pathname + '?map=' + $('#mapNum').val() + '&' + (!isStrict ? 'intuition' : '');
      return false;
   });

   $("#reload").on('click', function() {
      location.href = location.protocol + '//' + location.host + location.pathname + '?map=' + $('#mapNum').val() + '&' + (!isStrict ? 'intuition' : '');
      return false;
   });

   $("#random").on('click', function() {
      location.href = location.protocol + '//' + location.host + location.pathname + '?map=' + Math.floor(Math.random() * 10000) + '&' + (!isStrict ? 'intuition' : '');
      return false;
   });
   
   $("#intuition").on('click', function() {
      location.href = location.protocol + '//' + location.host + location.pathname + '?map=' + $('#mapNum').val() + '&' + (isStrict ? 'intuition' : '');
   });
   
   var key = false;
   if(queryParams.has('key'))
      key = true;
   
   var rng = sfc32(hashValue,hashValue,hashValue,hashValue);

   var cy = cytoscape({
      container: document.getElementById('cy'),
      zoomingEnabled: false,
      style: cytoscape.stylesheet()
      .selector('node')
        .css({
            'width': '40',
            'height': '40',
            'content': 'data(name)',
            'text-valign': 'center',
            'background-color': '#ccc',
            'border-color': 'black',
            'border-width': '1',
            'text-wrap': 'wrap',
            'label': 'data(id)',
        })
      .selector('edge')
        .css({
            'width': '4',
            'z-index:': '0',
            'line-color': '#aaa',
            'curve-style': 'unbundled-bezier',
            'font-weight': 'bold',
            'label': 'data(weight)',
        })
      .selector('edge:selected')
        .css({
            'width': '8',
            'z-index:': '100',
            'font-size': '36pt',
            'line-color': '#c99',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black'
        })
      .selector('.faded')
        .css({
            'opacity': 0.25,
            'text-opacity': 0
        }),
        elements: {
            nodes: [],
         },
       
         // on graph initial layout done (could be async depending on layout...)
         ready: function(ev){
            var numNodes = 8;
            var numPlaces = 12;

            window.cy = ev.cy;

            var places = [];
            for(var i = 1; i <= numPlaces; i++) {
               places.push(i);
            }
            shuffleArray(places, rng);
            places.forEach( function(p) {
               ev.cy.add({
                  group: 'nodes', data: { id: p, label: p, name: p, 'explored': false }
               });
            });

            ev.cy.layout(
               {
                  name: 'grid',
                  fit: false, // whether to fit the viewport to the graph
                  padding: 0,
                  zoom: 1,
                },
            ).run();
            
            
            
            for(var i = numNodes + 1; i <= numPlaces; i++) {
               ev.cy.remove(ev.cy.getElementById(i));
            }
            
            ev.cy.nodes().lock();

            ev.cy.nodes().forEach(function(n){
               var allNodes = ev.cy.nodes().toArray();

               allNodes.sort(function(a,b) {
                  return distance(n.position(), a.position()) - distance(n.position(), b.position());
               });

               //Some small chance to not automatically have edge to closest neighbor
               var skipClosestChance = 0.2;
               if(rng() < skipClosestChance) {
                  var temp = allNodes[1];
                  var rIndex = Math.floor(rng() * 3 + 2);
                  allNodes[1] = allNodes[rIndex];
                  allNodes[rIndex] = allNodes[1];
               }

               var first = true;
               var additionalEdgeProbability = 0.2;
               //omit first
               allNodes.slice(1).forEach(function(n2){
                  if(
                     n2.edgesWith(n).size() == 0 &&
                     (first || rng() < additionalEdgeProbability)
                  ) {
                     first = false;
                     additionalEdgeProbability  /= 2;
                     ev.cy.add( {
                        group: 'edges', data: { 
                           source: n.id(), 
                           target: n2.id(), 
                           weight: Math.ceil(distance(n.position(), n2.position()) * (1 + 2*rng()) / 50) * 5 
                        }
                     } );
                  }
               });
            });

            var nodeOne = ev.cy.getElementById(1);
            var dijkstraReturn = ev.cy.elements().dijkstra(nodeOne, function(edge){
               return edge.data('weight');
            });
            
            
            var nodesByRealDistance = ev.cy.nodes().toArray().sort(function(a,b) {
               return dijkstraReturn.distanceTo(a) - dijkstraReturn.distanceTo(b);
            });
            var farthestNodeFrom1 = nodesByRealDistance[nodesByRealDistance.length - 1];
            $('#instructions').append("<p>Goal: Find the best path to " + farthestNodeFrom1.id() + ".</p>");
            
            if(isStrict)
               $('#instructions > p').append(" You must always explore the shortest possible path first.");


            
            if(!key) {
               for(var i = 2; i <= numNodes; i++) {
                  if(i != farthestNodeFrom1.id() || isStrict)  //show destination if not in strict mode
                     ev.cy.getElementById(i).hide();
               }

               ev.cy.edges().hide();
            }

            ev.cy.on('tap', 'edge', function(ev){
               var edge = ev.target;
               edge.style({'z-index': '100', 'overlay-color' : 'red'});
            });

         
            var done = false;
            ev.cy.on('tap', 'node', function(ev){
               if(done == true) {
                  return;
               }

               var node = ev.target;
               node.data('explored',true);
               
               //See if user selected one of minimal distant known nodes
               var exploredNodes = ev.cy.filter('node[?explored]');
               var exploredNeighborhood = exploredNodes.neighborhood().union(exploredNodes);
               var knownPaths = exploredNeighborhood.dijkstra(nodeOne, function(edge){
                  return edge.data('weight');
               });

               var newNeighbors = exploredNeighborhood.nodes('node[!explored]').sort(function(a,b) {
                  return knownPaths.distanceTo(a) - knownPaths.distanceTo(b);
               }).toArray();

               //If strict, chosen node better not be further than any available nodes
               if(isStrict && newNeighbors.length > 0 && knownPaths.distanceTo(node) > knownPaths.distanceTo(newNeighbors[0])) {
                  //Incorrect selection
                  done = true;
                  $('#message').html("<p>You selected " + node.id() + " at a total distance of " + knownPaths.distanceTo(node) + "." +
                                     " You should have picked " + newNeighbors[0].id() + 
                                     " at a total distance of " + knownPaths.distanceTo(newNeighbors[0]) + ".</p>");
                  $('#message').append("<p>Reload the map to try again.</p>");
                  $('#message').css('color', 'red');
                  ev.cy.nodes().style({'background-color':'red'});
                  return;
               } else {
                  node.style({'border-color': 'black'});
                  node.style({'background-color': '#ffff99'});
                  var revealed = cy.collection();
                  node.connectedEdges().forEach(function(n){
                     revealed.merge(n.target());
                     revealed.merge(n.source());
                  });
                  
                  if(!key) {
                     revealed.show();
                     revealed.connectedEdges().forEach(function(e) {
                        if(!e.target().data('explored') && !e.source().data('explored')) {
                           e.hide();
                        } else {
                           e.show();
                        }
                     });
                  }
               }

               if(node == farthestNodeFrom1) {
                  done = true;

                  var pathOptimal = false;

                  if(isStrict) {
                     //had to take optimal
                     pathOptimal = true;
                  } else {
                     //if their explored nodes contain the optimal path, they at least did not miss the optimal
                     if( exploredNodes.contains(dijkstraReturn.pathTo(farthestNodeFrom1).nodes()) )
                        pathOptimal = true;
                  }

                  if(pathOptimal) {
                     ev.cy.elements().show();
                     dijkstraReturn.pathTo(farthestNodeFrom1).nodes().style({'background-color': '#6f7'});
                     dijkstraReturn.pathTo(farthestNodeFrom1).edges().style({'overlay-color' : '#6f7'});
                     dijkstraReturn.pathTo(farthestNodeFrom1).edges().style({'line-color' : '#6f7'});
                     dijkstraReturn.pathTo(farthestNodeFrom1).edges().select();
                     $('#message').append("<p>Optimal path found!</p>");
                  } else {
                     ev.cy.elements().show();
                     ev.cy.nodes('node[?explored]').style({'background-color': '#f66'});
                     dijkstraReturn.pathTo(farthestNodeFrom1).edges().style({'overlay-color' : '#6f7'});
                     dijkstraReturn.pathTo(farthestNodeFrom1).edges().style({'line-color' : '#6f7'});
                     $('#message').append("<p>You did not find the optimal path!</p>");
                     $('#message').css('color', 'red');
                  }
               }

            });
         }
   });
   
   
   $(document).on('keypress', function(e) {
      if(e.which == 107) {
         key = true;
         cy.elements().show();
      }
   });

});    