
// want to import nodes and edges from seperate file to keep things readable
import { nodes, edges } from "data.js";


//need to figure out how we go from import to filter as the edge/node data needs to pass through the filter before going into the network




//variables for node styles, this is for properties for nodes by type

//for group nodes
var typeGroupShape = "dot";
var typeGroupSize = 30;

var typeSubgroupSize = 17


var nodeLabelSize = 20;



//for interests



//edge styles








// this is what hold the params for and instintates the network
function startNetwork(data) {
	const container = document.getElementById("mynetwork");

	const options = {
		// global node properties, can be overidden on a per node basis
		nodes: {
			//this handles the case for the talent nodes
			shape: "box",
			margin: { top: 10, right: 15, bottom: 10, left: 15 },
			font: { size: 14, face: "arial"},
			// this sets how much the nodes repell each other, values >1 required
			mass: 1.25,
		}, 
		edges: {
			color: { inherit: true },
			//width: 0.15,

			//this option changes how the physics effects the network, compensate via adjusting mass?
			/*	smooth: {
				type: "continuous",
			},*/

		},
		//this is overkill for this small a network, can improve responsiveness for large networks
/*		interaction: {
			hideEdgesOnDrag: true,
			tooltipDelay: 200,
		},*/

		// manually set the colors for legibility
		groups: {
			interests: {
				color: {background: "grey"},
				shape: "hexagon",
				size: 35,
				font: { size: 16, }
			},
			dentsu: {
				color: {background: "blue"},
				font: { color: "white" },
			},
			NOVA: {
				color: {background: "red"},
				font: { color: "white" },
			},
			Beastiez: {
				color: {background: "purple"},
				font: { color: "white" },
			},
			Vichi_Bon: {
				color: {background: "yellow"},
				font: { color: "black" },
			},
			Indies: {
				color: {background: "orange"},
				font: { color: "black" },
			},
			Neuroverse: {
				color: {background: "darkgreen"},
				font: { color: "white" },
			},
			Fleshtubers: {
				//color: {background: "grey"},
				font: { color: "lime" },
			},
			Indo_Girlypops: {
				//color: {background: "grey"},
				font: { color: "lime" },
			},
			Hololive: {
				color: {background: "green"},
				font: { color: "white" },
			},
			Fleshtubers: {
				color: {background: "firebrick"},
				font: { color: "white" },
			},
		},

//not able to set custom properties in options sadly

		physics: {
			forceAtlas2Based: {
				gravitationalConstant: -26,
				centralGravity: 0.005,
				springLength: 100,
				springConstant: 0.1
			},
			maxVelocity: 146,
			solver: "forceAtlas2Based",
			timestep: 0.35,
			stabilization: { iterations: 150 }
		}
	};


	new vis.Network(container, data, options);
}




// VARIABLE SET UP


// this sets what elements are providing which filter inputs
const nodeFilterSelector = document.getElementById("nodeFilterSelect");

const edgesFilterSelector = document.getElementById("nodeFilterSelect");




/**
 * filter values are updated in the outer scope.
 * in order to apply filters to new values, DataView.refresh() should be called
 */
let nodeFilterValue = "";







// chat GPT update function for the radio buttons

// this gets the acual radio buttons
const edgeFilters = document.getElementsByName("edgesFilter");



// set inital values
let edgesFilterValues = {
	
	group: false,
	interests: false,
	collab: false,
};


// set inital values
let nodesFilterValues = {
	talent: true,
	group: false,
	interests: false,
	collab: false,
};



// this handles the edgesFilerValues update
function updateEdgeFilters() {

  	// this sees which radio button is selected
	const selected = document.querySelector('input[name="edgesFilter"]:checked');

//edge value update
	edgesFilterValues.group = selected?.value === "group";
	edgesFilterValues.interests = selected?.value === "interests";
	edgesFilterValues.collab = selected?.value === "collab";

	console.log("Updated filters:", edgesFilterValues);


//node value update
	nodesFilterValues.group = selected?.value === "group";
	nodesFilterValues.interests = selected?.value === "interests";
	nodesFilterValues.collab = selected?.value === "collab";

	console.log("Updated filters:", nodesFilterValues);
	

    // 👉 If you're using a DataView or graph, refresh it here
    // dataView.refresh();






//create filters
var nodesFilter = (node) => {
	return nodesFilterValues[node.type];
};


var edgesFilter = (edge) => {
	return edgesFilterValues[edge.type];
};


//create data views based on the filters
var nodesView = new vis.DataView(nodes, { filter: nodesFilter });
var edgesView = new vis.DataView(edges, { filter: edgesFilter });


//start (or restart) network per function upate
startNetwork({ nodes: nodesView, edges: edgesView });







};


  // Attach listener to each radio button
edgeFilters.forEach(radio => {
	radio.addEventListener("change", updateEdgeFilters);
});




  // Optional: run once on page load
updateEdgeFilters();


