//DATA


//import nodes and edges from external file
/*import { importedNodes, importedEdges } from "./data/Data.js";

const nodes = new vis.DataSet(importedNodes);
const edges = new vis.DataSet(importedEdges);*/


const nodes = new vis.DataSet(window.nodes);
const edges = new vis.DataSet(window.edges);



//when loading data from the html output comment out the above import and const lines and paste in the output of the html below this comment



//variables for node styles, this is for properties for nodes by type

//for group nodes
var typeGroupShape = "dot";
var typeGroupSize = 30;

var typeSubgroupSize = 17

//labels
var nodeLabelSize = 20;



// this is what hold the params for and instintates the network
function startNetwork(data, randomSeed) {

	const container = document.getElementById("mynetwork");

	const options = {
		// global node properties, can be overidden on a per node basis

		nodes: {
			//this handles the case for the talent nodes
			shape: "box",
			margin: { top: 10, right: 15, bottom: 10, left: 15 },
			font: { size: 15, face: "arial", strokeWidth: 0, },
			// this sets how much the nodes repell each other, values >1 required
			mass: 2.5,
			color: {
				highlight: { background: "grey", border: "black" },
			},
		},


		edges: {
			color: { inherit: true },
			width: 0.15,

			//this option changes how the physics effects the network, compensate via adjusting mass?
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
				color: {background: "grey"},
				shape: "hexagon",
				size: 35,
				font: { size: 25, strokeWidth: 6, strokeColor: "#ffffff", }
			},

			//these are for the talent nodes only
			DENTSU: {
				color: {background: "blue"},
				font: { color: "white" },
			},
			NOVA: {
				color: {background: "red"},
				font: { color: "white" },
			},
			BEASTIEZ: {
				color: {background: "purple"},
				font: { color: "white" },
			},
			VICHIBAN: {
				color: {background: "yellow"},
				font: { color: "black" },
			},
			INDIES: {
				color: {background: "orange"},
				font: { color: "black", },
			},
			NEUROVERSE: {
				color: {background: "darkgreen"},
				font: { color: "white" },
			},
			INDO_GIRLYPOPS: {
				color: {background: "DarkOrchid "},
				font: { color: "black" },
			},
			HOLOLIVE: {
				color: {background: "green"},
				font: { color: "white" },
			},
			FLESHTUBERS: {
				color: {background: "firebrick"},
				font: { color: "white" },
			},
			LAB_BRATS: {
				color: {background: "LightSeaGreen"},
				font: { color: "white" },
			},
			VSHOJO: {
				color: {background: "black"},
			},
			CRASHOUT_CREW: {
				color: {background: "Turquoise"},
			},
			TERI_YAKI: {
				color: {background: "SkyBlue"},
			},
			VEIN_GANG: {color: {background: "Moccasin"}},

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




	//this inits the graph
	globalThis.network = new vis.Network(container, data, options);


	//log the current seed
	console.log("Current Seed: " + network.getSeed());


	//This pushes the info from from the node to the anchor tags

	//more chatgpt evil
	globalThis.network.on("selectNode", function (params) {
		if (params.nodes.length === 1) {
			var node = nodes.get(params.nodes[0]);

			//console.log(node.youtube);


			//more chatgpt code, needed the assist to get this working
			const talentName = document.getElementById("talentName");
			//console.log(talentName);

			const youtubeLink = document.getElementById("youtubeLink");
			const twitchLink = document.getElementById("twitchLink");


			// set name
			talentName.textContent = node.label || "#";

			//set wiki
			talentName.href = node.wiki || "#";

			// set media links
			youtubeLink.href = node.youtube || "#";
			twitchLink.href = node.twitch || "#";

			// set visible text (optional)
			var nameText = node.label;
			var nameClass = "\"talentButton name\""
			var nameCombined = "<span class=" + nameClass + ">" + nameText + "</span>";

			talentName.innerHTML = nameCombined;


			//set inner html for a tag
			var wikiCombined = "<span class=" + "talentButton" + ">" + node.label + "</span>";

			var youTubeCombined = "<span class=" + "talentButton" + ">" + "YouTube" + "</span>";
			var noYouTubeCombined = "<span class=" + "talentButton" + ">" + "No YouTube" + "</span>";

			var twitchCombined = "<span class=" + "talentButton" + ">" + "Twitch" + "</span>";
			var noTwitchCombined = "<span class=" + "talentButton" + ">" + "No Twitch" + "</span>";


			youtubeLink.innerHTML = node.youtube ? youTubeCombined : noYouTubeCombined;
			twitchLink.innerHTML = node.twitch ? twitchCombined : noTwitchCombined;


		}



	});



};





//REDRAW BASED ON RADIO BUTTON

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

//these control the rndSeed when the graph loadds, if objects are added or removed you'll need to find a new seed that creates a stable layout. just comment out the layout section in the options, that will force it to load a rndSeed which you can see in the consol output
let seedValues = {
	group: 1778936111674,
	interests: 1778949108316,
	collab: 1778132573070,
};


// this handles the edgesFilerValues update
function updateEdgeFilters() {

	// this sees which radio button is selected
	const selected = document.querySelector('input[name="edgesFilter"]:checked');

	//edge value update
	edgesFilterValues.group = selected?.value === "group";
	edgesFilterValues.interests = selected?.value === "interests";
	edgesFilterValues.collab = selected?.value === "collab";

	//console.log("Updated filters:", edgesFilterValues);

	//node value update
	nodesFilterValues.group = selected?.value === "group";
	nodesFilterValues.interests = selected?.value === "interests";
	nodesFilterValues.collab = selected?.value === "collab";

	//console.log("Updated filters:", nodesFilterValues);
	

	// set new seed
	if (edgesFilterValues.group) {
		var newSeedVaiue = seedValues.group
	} else if (edgesFilterValues.interests) {
		var newSeedVaiue = seedValues.interests
	} else if (edgesFilterValues.collab) {
		var newSeedVaiue = seedValues.collab
	};

	//console.log("new seed: ", newSeedVaiue);


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
	startNetwork(
		{ nodes: nodesView, edges: edgesView, }, newSeedVaiue
		);


};


// Attach listener to each radio button
edgeFilters.forEach(radio => {
	radio.addEventListener("change", updateEdgeFilters);
});




// Optional: run once on page load
updateEdgeFilters();