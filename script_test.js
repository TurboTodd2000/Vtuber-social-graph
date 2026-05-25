//DATA


//import nodes and edges from external file
import {
	nodes as importedNodes,
	edges as importedEdges
} from "../data/Data.js";

const nodes = new vis.DataSet(importedNodes);
const edges = new vis.DataSet(importedEdges);



//when loading data from the html output comment the above import and const lines and paste in the output of the html 




//variables for node styles, this is for properties for nodes by type

//for group nodes
var typeGroupShape = "dot";
var typeGroupSize = 30;

var typeSubgroupSize = 17;

//labels
var nodeLabelSize = 20;



// this is what hold the params for and instantiates the network
function startNetwork(data, randomSeed) {

	const container = document.getElementById("mynetwork");

	const options = {

		// global node properties, can be overridden on a per node basis
		nodes: {

			//this handles the case for the talent nodes
			shape: "box",

			margin: {
				top: 10,
				right: 15,
				bottom: 10,
				left: 15
			},

			font: {
				size: 15,
				face: "arial",
				strokeWidth: 0,
			},

			// this sets how much the nodes repel each other
			mass: 2.5,

			color: {
				highlight: {
					background: "grey",
					border: "black"
				},
			},
		},


		edges: {

			color: {
				inherit: true
			},

			width: 0.15,

			//this option changes how the physics effects the network
			smooth: {
				type: "continuous",
			},

		},


		interaction: {
			selectable: true,
		},


		layout: {
			randomSeed: randomSeed || 1778063031613,
		},



		// manually set the colors for legibility
		groups: {

			INTERESTS: {
				color: { background: "grey" },
				shape: "hexagon",
				size: 35,
				font: {
					size: 25,
					strokeWidth: 6,
					strokeColor: "#ffffff",
				}
			},

			//these are for the talent nodes only
			DENTSU: {
				color: { background: "blue" },
				font: { color: "white" },
			},

			NOVA: {
				color: { background: "red" },
				font: { color: "white" },
			},

			BEASTIEZ: {
				color: { background: "purple" },
				font: { color: "white" },
			},

			VICHIBAN: {
				color: { background: "yellow" },
				font: { color: "black" },
			},

			INDIES: {
				color: { background: "orange" },
				font: { color: "black" },
			},

			NEUROVERSE: {
				color: { background: "darkgreen" },
				font: { color: "white" },
			},

			FLESHTUBERS: {
				font: { color: "black" },
			},

			INDO_GIRLYPOPS: {
				color: { background: "DarkOrchid" },
				font: { color: "black" },
			},

			HOLOLIVE: {
				color: { background: "green" },
				font: { color: "white" },
			},

			FLESHTUBERS: {
				color: { background: "firebrick" },
				font: { color: "white" },
			},

			LAB_BRATS: {
				color: { background: "LightSeaGreen" },
				font: { color: "white" },
			},

			VSHOJO: {
				color: { background: "black" },
			},

			CRASHOUT_CREW: {
				color: { background: "Turquoise" },
			},

			TERI_YAKI: {
				color: { background: "SkyBlue" },
			},

			VEIN_GANG: {
				color: { background: "Moccasin" }
			},

		},


		physics: {

			forceAtlas2Based: {
				gravitationalConstant: -26,
				centralGravity: 0.0035,
				springLength: 230,
				springConstant: 0.18,
			},

			maxVelocity: 146,

			solver: "forceAtlas2Based",

			timestep: 0.35,

			stabilization: {
				enabled: true,
				iterations: 500,
				updateInterval: 25,
			},

		},

	};




	//destroy existing network before redraw
	if (globalThis.network) {
		globalThis.network.destroy();
	}




	//this initializes the graph
	globalThis.network =
		new vis.Network(container, data, options);




	//log the current seed
	console.log(
		"Current Seed: " +
		globalThis.network.getSeed()
	);




	//This pushes the info from the node to the anchor tags
	globalThis.network.on(
		"selectNode",
		function (params) {

			if (params.nodes.length === 1) {

				var node =
					nodes.get(params.nodes[0]);




				//get DOM elements
				const talentName =
					document.getElementById("talentName");

				const youtubeLink =
					document.getElementById("youtubeLink");

				const twitchLink =
					document.getElementById("twitchLink");




				// set name
				talentName.textContent =
					node.label || "#";




				//set wiki
				talentName.href =
					node.wiki || "#";




				// set media links
				youtubeLink.href =
					node.youtube || "#";

				twitchLink.href =
					node.twitch || "#";




				// set visible text
				var nameText =
					node.label;

				var nameClass =
					"\"talentButton name\"";

				var nameCombined =
					"<span class=" +
					nameClass +
					">" +
					nameText +
					"</span>";

				talentName.innerHTML =
					nameCombined;




				//set inner html for anchor tags
				var youTubeCombined =
					"<span class=" +
					"talentButton" +
					">" +
					"YouTube" +
					"</span>";

				var noYouTubeCombined =
					"<span class=" +
					"talentButton" +
					">" +
					"No YouTube" +
					"</span>";

				var twitchCombined =
					"<span class=" +
					"talentButton" +
					">" +
					"Twitch" +
					"</span>";

				var noTwitchCombined =
					"<span class=" +
					"talentButton" +
					">" +
					"No Twitch" +
					"</span>";




				youtubeLink.innerHTML =
					node.youtube
						? youTubeCombined
						: noYouTubeCombined;

				twitchLink.innerHTML =
					node.twitch
						? twitchCombined
						: noTwitchCombined;

			}

		}

	);

}





//REDRAW BASED ON RADIO BUTTON




// set initial values
let edgesFilterValues = {
	group: false,
	interests: false,
	collab: false,
};




// set initial values
let nodesFilterValues = {
	talent: true,
	group: false,
	interests: false,
	collab: false,
};




//these control the rndSeed when the graph loads
let seedValues = {

	group: 1778936111674,

	interests: 1778949108316,

	collab: 1778132573070,

};




// this handles the edgesFilterValues update
function updateEdgeFilters() {




	// this sees which radio button is selected
	const selected =
		document.querySelector(
			'input[name="edgesFilter"]:checked'
		);




	//edge value update
	edgesFilterValues.group =
		selected?.value === "group";

	edgesFilterValues.interests =
		selected?.value === "interests";

	edgesFilterValues.collab =
		selected?.value === "collab";




	//node value update
	nodesFilterValues.group =
		selected?.value === "group";

	nodesFilterValues.interests =
		selected?.value === "interests";

	nodesFilterValues.collab =
		selected?.value === "collab";




	// set new seed
	if (edgesFilterValues.group) {

		var newSeedValue =
			seedValues.group;

	}
	else if (edgesFilterValues.interests) {

		var newSeedValue =
			seedValues.interests;

	}
	else if (edgesFilterValues.collab) {

		var newSeedValue =
			seedValues.collab;

	}




	//create filters
	var nodesFilter = (node) => {
		return nodesFilterValues[node.type];
	};


	var edgesFilter = (edge) => {
		return edgesFilterValues[edge.type];
	};




	//create data views based on the filters
	var nodesView =
		new vis.DataView(
			nodes,
			{
				filter: nodesFilter
			}
		);


	var edgesView =
		new vis.DataView(
			edges,
			{
				filter: edgesFilter
			}
		);




	//start (or restart) network
	startNetwork(
		{
			nodes: nodesView,
			edges: edgesView,
		},
		newSeedValue
	);

}




//wait until DOM is fully loaded
window.addEventListener(
	"DOMContentLoaded",
	function () {




		// this gets the actual radio buttons
		const edgeFilters =
			document.getElementsByName(
				"edgesFilter"
			);




		// Attach listener to each radio button
		edgeFilters.forEach(radio => {

			radio.addEventListener(
				"change",
				updateEdgeFilters
			);

		});




		// Initial draw
		updateEdgeFilters();

	}
);