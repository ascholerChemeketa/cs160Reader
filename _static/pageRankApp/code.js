$(function(){ // on dom ready

nextID = 0;

$('#cy').cytoscape({
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'rectangle',
        'width': '80',
        'height': '100',
        'content': 'data(name)',
        'text-valign': 'center',
        'background-color': '#FFFF99',
        'border-color': 'black',
        'border-width': '1',
          'text-wrap': 'wrap',
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'width': '4',
        'line-color': '#CCC',
        'color': '#CCC',
				'target-arrow-color': '#CCC',
				'curve-style': 'bezier'
      })
    .selector(':selected')
      .css({
        'line-color': 'black',
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
  edges: []
    /*
    nodes: [
        { data: { id: '0', name: 'Page' } },
          { data: { id: '1', name: 'Page' } },
            { data: { id: '2', name: 'Page' } },
              { data: { id: '3', name: 'Page' } },],
    edges: [
      { data: { source: '0', target: '1' } },
        { data: { source: '0', target: '2' } },
          { data: { source: '0', target: '3' } },
            { data: { source: '3', target: '0' } },
              { data: { source: '1', target: '2' } },
              { data: { source: '1', target: '3' } },
                { data: { source: '2', target: '3' } },]
                */
                /*
    nodes: [
      { data: { id: '0', name: 'Page' } },
        { data: { id: '1', name: 'Page' } },
          { data: { id: '2', name: 'Page' } },
            { data: { id: '3', name: 'Page' } },
    ],
    edges: [
      { data: { source: '0', target: '1' } },
        { data: { source: '0', target: '2' } },
          { data: { source: '0', target: '3' } },
            { data: { source: '3', target: '0' } },
              { data: { source: '1', target: '3' } },
                { data: { source: '2', target: '1' } },
    ]
    */


  },

  layout: {
    name: 'grid',
    fit: false, // whether to fit the viewport to the graph
    padding: 10
  },

  // on graph initial layout done (could be async depending on layout...)
  ready: function(){
    window.cy = this;

    // giddy up...

    cy.elements().unselectify();

    cy.selectedNode = null;

    cy.on('tap', 'node', function(e){
      var node = e.cyTarget;

      if(cy.selectedNode !== null && cy.selectedNode !== node) {
        cy.add({
            group: "edges",
            data: { target: node.id(), source: cy.selectedNode.id()  },
        });
        cy.elements().removeClass('faded');
        cy.selectedNode = null;
      } else {
        cy.elements().addClass('faded');
        node.removeClass('faded');
        node.select();
        cy.selectedNode = node;
      }

    });

    cy.on('tap', function(e){
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');
        cy.selectedNode = null;
      }
    });
  }
});

$(document).keydown(function(e){
  var DELETE_KEY = 46;
  if(e.which == DELETE_KEY) {
    deleteSelected();
  }
});

function clearRanks() {
  cy.nodes().each( function(i, ele) {
    ele.style({'content': 'Page ' + ele.id()});
  });
  cy.nodes().flashClass('nolabel',1);
}

function deleteSelected() {
  var selection = cy.$(':selected');
  var edgesToRemove = selection.connectedEdges();
  edgesToRemove.remove();
  selection.remove();
  cy.selectedNode = null;
  cy.elements().removeClass('faded');
  clearRanks();
}

$('#addPage').on('click', function(e) {
  var newNode = cy.add({
      group: "nodes",
      data: { id: '' + nextID, name: 'Page '+nextID },
      position: { x: (100 + nextID * 90 % 600), y: 100 }
  });
  nextID++;
  clearRanks();
});

$('#reset').on('click', function(e) {
  location.reload();
});

$('#delete').on('click', function(e) {
  deleteSelected();
});

function pageRank() {
  var pr = cy.elements().pageRank({'dampingFactor': 0.825, 'dampingfactor': 0.825});
  cy.nodes().each( function(i, ele) {
    var nodeRank = pr.rank(ele);
    ele.style({'content': 'Page ' + ele.id() + '\n' + Math.round(nodeRank * 1000) / 1000 });
  });
  cy.nodes().flashClass('nolabel',1);  //force redraw - see http://stackoverflow.com/questions/26123468/dynamic-node-content-label-in-cytoscape-js
}
$('#runPageRank').on('click', function(e) {
  pageRank();
});

}); // on dom ready
