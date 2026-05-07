/*
//import nodes and edges from external file
import { nodes, edges } from "../data/data_v2.js";

const nodes = new vis.DataSet(nodes);
const edges = new vis.DataSet(edges); 
*/



//import from .js file goes here



//set up for highlight
var allNodes;
var highlightActive = false;



//variables for node styles, this is for properties for nodes by type

//for group nodes
var typeGroupShape = "dot";
var typeGroupSize = 30;

var typeSubgroupSize = 17

//labels
var nodeLabelSize = 20;



// this is what hold the params for and instintates the network
function startNetwork(data) {

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
		},


		edges: {
			color: { inherit: true },
			//width: 0.15,

			//this option changes how the physics effects the network, compensate via adjusting mass?
			smooth: {
				type: "continuous",
			},

		},


		interaction: { 
			selectable: true,
/*
		hideEdgesOnDrag: true,
			tooltipDelay: 200,
	*/		 
		},


/*    layout: {
      randomSeed: 1778132573070,
    },
*/

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
			FLESHTUBERS: {
				//color: {background: "grey"},
				font: { color: "black" },
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
				color: {background: "LightSeaGreen "},
				font: { color: "white" },
			},
			VSHOJO: {
				color: {background: "black"},
			},
		},


		//not able to set custom properties in options sadly
/*
		physics: {
			forceAtlas2Based: {
				gravitationalConstant: -26,
				centralGravity: 0.005,
				springLength: 100,
				springConstant: 0.08
			},
			maxVelocity: 10,
			minVelocity: 1.5,
			solver: "forceAtlas2Based",
			timestep: 0.35,
			stabilization: { iterations: 300 },
			adaptiveTimestep: true,
		}

*/

/*
 physics: false,
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
      hideEdgesOnZoom: true,
    },

*/


/*
 physics: {
      stabilization: false,
      barnesHut: {
        gravitationalConstant: -800,
        springConstant: 0.001,
        springLength: 200,
      },
},



*/







physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 2000,
        updateInterval: 25,
      },

},










	};



/*
	//use imported data for graph
	var data = { nodes: nodes, edges: edges }; // this is currently hard wired
*/


	//this inits the graph
	globalThis.network = new vis.Network(container, data, options);

	//log the rnd seed
	console.log(network.getSeed())


	//this calls the highlighting function
	globalThis.network.on("click", neighbourhoodHighlight);


	//this creates a json object for the highlight function
	allNodes = nodes.get({returnType: "Object"});




	//This pushes the infrom from the node to the anchor tags
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

			// set URL
			youtubeLink.href = node.youtube || "#";
			twitchLink.href = node.twitch || "#";


			// set visible text (optional)
			var nameText = node.label;
			var nameCombined = "<span class=" + "talentButton" + ">" + nameText + "</span>";

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



}




//highlight function
function neighbourhoodHighlight(params) {

  // if something is selected:
	if (params.nodes.length > 0) {
		highlightActive = true;
		var i, j;
		var selectedNode = params.nodes[0];
		var degrees = 2;

    // mark all nodes as hard to read.
		for (var nodeId in allNodes) {
			allNodes[nodeId].color = "rgba(200,200,200,0.5)";
			if (allNodes[nodeId].hiddenLabel === undefined) {
				allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
				allNodes[nodeId].label = undefined;
			}
		}

		var connectedNodes = globalThis.network.getConnectedNodes(selectedNode);
		var allConnectedNodes = [];

    // get the second degree nodes
		for (i = 1; i < degrees; i++) {
			for (j = 0; j < connectedNodes.length; j++) {
				allConnectedNodes = allConnectedNodes.concat(
					globalThis.network.getConnectedNodes(connectedNodes[j]),
					);
			}
		}

    // all second degree nodes get a different color and their label back
		for (i = 0; i < allConnectedNodes.length; i++) {

//allNodes[allConnectedNodes[i]].color = "rgba(125,50,125,.75)";

allNodes[allConnectedNodes[i]].color = undefined;

			if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
				allNodes[allConnectedNodes[i]].label =
				allNodes[allConnectedNodes[i]].hiddenLabel;
				allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
			}
		}

    // all first degree nodes get their own color and their label back
		for (i = 0; i < connectedNodes.length; i++) {
			allNodes[connectedNodes[i]].color = undefined;
			if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
				allNodes[connectedNodes[i]].label =
				allNodes[connectedNodes[i]].hiddenLabel;
				allNodes[connectedNodes[i]].hiddenLabel = undefined;
			}
		}

    // the main node gets its own color and its label back.
		allNodes[selectedNode].color = undefined;
		if (allNodes[selectedNode].hiddenLabel !== undefined) {
			allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
			allNodes[selectedNode].hiddenLabel = undefined;
		}
	} else if (highlightActive === true) {
    // reset all nodes
		for (var nodeId in allNodes) {
			allNodes[nodeId].color = undefined;
			if (allNodes[nodeId].hiddenLabel !== undefined) {
				allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
				allNodes[nodeId].hiddenLabel = undefined;
			}
		}
		highlightActive = false;
	}

  // transform the object into an array
	var updateArray = [];
	for (nodeId in allNodes) {
		if (allNodes.hasOwnProperty(nodeId)) {
			updateArray.push(allNodes[nodeId]);
		}
	}
	nodes.update(updateArray);
}









//DATA


const nodes = new vis.DataSet([

{ id: 0, type: "interests", group: "INTERESTS", label: "Yapping", fixed: false },{ id: 1, type: "interests", group: "INTERESTS", label: "Gaming", fixed: false },{ id: 2, type: "interests", group: "INTERESTS", label: "Music", fixed: true },{ id: 3, type: "interests", group: "INTERESTS", label: "IRL", fixed: false },{ id: 4, type: "interests", group: "INTERESTS", label: "Art", fixed: false },{ id: 5, type: "interests", group: "INTERESTS", label: "STEM", fixed: false },{ id: 6, type: "interests", group: "INTERESTS", label: "Sexuality", fixed: false },{ id: 7, type: "interests", group: "INTERESTS", label: "N/A", fixed: false },{ id: 8, type: "interests", group: "INTERESTS", label: "Educational", fixed: false },{ id: 9, type: "interests", group: "INTERESTS", label: "Media/React", fixed: false },{ id: 10, type: "interests", group: "INTERESTS", label: "ASMR", fixed: false },{ id: 102, type: "group", group: "DENTSU", label: "dentsu.exe", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 103, type: "group", group: "NOVA", label: "Nova", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 104, type: "group", group: "BEASTIEZ", label: "Beastiez", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 105, type: "group", group: "VICHIBAN", label: "VchiBan", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 110, type: "group", group: "HOLOLIVE", label: "Hololive", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 111, type: "group", group: "HOLOLIVE", label: "Hololive EN", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 112, type: "group", group: "HOLOLIVE", label: "Myth", shape: "dot", size: 17, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 116, type: "group", group: "HOLOLIVE", label: "Justice", shape: "dot", size: 17, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 117, type: "group", group: "HOLOLIVE", label: "Advent", shape: "dot", size: 17, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 120, type: "group", group: "HOLOLIVE", label: "HOLOSTARS EN", shape: "dot", size: 17, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 113, type: "group", group: "HOLOLIVE", label: "Hololive Indo", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 114, type: "group", group: "HOLOLIVE", label: "Hololive JP", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 115, type: "group", group: "FIRST_STAGE", label: "First Stage", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 118, type: "group", group: "TERI-YAKI", label: "TERI-yaki", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 119, type: "group", group: "NIJISANJI", label: "Nijisanji", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 202, type: "group", group: "LAB_BRATS", label: "Lab Brats", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 208, type: "group", group: "NEUROVERSE", label: "Neuroverse", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 201, type: "group", group: "VEIN_GANG", label: "Vein Gang", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 203, type: "group", group: "EN_GIRLYPOPS", label: "EN Girlypops", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 204, type: "group", group: "CRASHOUT_CREW", label: "Crashout Crew", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 205, type: "group", group: "VSHOJO", label: "ex-Vshjo", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 206, type: "group", group: "FLESHTUBERS", label: "Fleshtubers", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 207, type: "group", group: "INDIES", label: "Indies", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 209, type: "group", group: "INDO_GIRLYPOPS", label: "Indo Girlypops", shape: "dot", size: 30, font: { size: 25, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } },{ id: 1000, type: "talent", group: "INDIES", label: "Ironmouse", youtube: "https://www.youtube.com/@IronMouseParty", twitch: "https://www.twitch.tv/ironmouse", wiki: "https://en.wikipedia.org/wiki/Ironmouse" },{ id: 1001, type: "talent", group: "INDIES", label: "Zentraya", youtube: "http://youtube.com/c/Zentreya", twitch: "https://www.twitch.tv/zentreya", wiki: "https://virtualyoutuber.fandom.com/wiki/Zentreya" },{ id: 1002, type: "talent", group: "INDIES", label: "Michi Mochievee", youtube: "https://www.youtube.com/channel/UCnS5IYNyGKOti9cFlK5SefQ", twitch: "https://www.twitch.tv/michimochievee", wiki: "https://virtualyoutuber.fandom.com/wiki/Michi_Mochievee" },{ id: 1003, type: "talent", group: "INDIES", label: "Geega", youtube: "https://www.youtube.com/@GEEGA/", twitch: "https://www.twitch.tv/geega", wiki: "https://virtualyoutuber.fandom.com/wiki/GEEGA" },{ id: 1005, type: "talent", group: "INDIES", label: "Silvervale", youtube: "https://www.youtube.com/channel/UCm8Dj7dQ0oRHXNUXF31kjEw", twitch: "https://www.twitch.tv/silvervale", wiki: "https://virtualyoutuber.fandom.com/wiki/Silvervale" },{ id: 1006, type: "talent", group: "INDIES", label: "K9 Kuro", youtube: "https://www.youtube.com/channel/UCN5J_HKNGFCPtqAnSjBekcA", twitch: "https://www.twitch.tv/k9kuro", wiki: "https://virtualyoutuber.fandom.com/wiki/Kuro_Kurenai" },{ id: 1007, type: "talent", group: "INDIES", label: "Apricot (froot)", youtube: "https://www.youtube.com/c/ApricottheLichVS", twitch: "https://www.twitch.tv/apricot", wiki: "https://virtualyoutuber.fandom.com/wiki/Apricot" },{ id: 1008, type: "talent", group: "INDIES", label: "Haruka Karibu", youtube: "https://www.youtube.com/c/HarukaKaribu", twitch: "https://www.twitch.tv/harukakaribu", wiki: "https://virtualyoutuber.fandom.com/wiki/Haruka_Karibu" },{ id: 1009, type: "talent", group: "INDIES", label: "AmaLee", youtube: "https://youtube.com/leeandlie", twitch: "https://www.twitch.tv/amalee", wiki: "https://virtualyoutuber.fandom.com/wiki/AmaLee" },{ id: 1010, type: "talent", group: "INDIES", label: "Henya the Genius", youtube: "https://www.youtube.com/channel/UCVhRMzNWYcg8XDTgB9NFRTw", twitch: "https://www.twitch.tv/henyathegenius", wiki: "https://virtualyoutuber.fandom.com/wiki/Henya_the_Genius" },{ id: 1011, type: "talent", group: "INDIES", label: "Matara Kan", youtube: "https://www.youtube.com/channel/UCxx2uRmAwkhb3QJMfLssgsw", twitch: "https://www.twitch.tv/matarakan", wiki: "https://virtualyoutuber.fandom.com/wiki/Matara_Kan" },{ id: 1012, type: "talent", group: "INDIES", label: "Projket Melody", youtube: "https://www.youtube.com/c/ProjektMelodyOfficial", twitch: "https://www.twitch.tv/projektmelody", wiki: "https://virtualyoutuber.fandom.com/wiki/Projekt_Melody" },{ id: 1013, type: "talent", group: "INDIES", label: "Hime Hajime", youtube: "https://www.youtube.com/@himehajime1570", twitch: "https://www.twitch.tv/hajime", wiki: "https://virtualyoutuber.fandom.com/wiki/Hime_Hajime" },{ id: 1014, type: "talent", group: "INDIES", label: "Nyatasha Nyanners", youtube: "https://youtube.com/nyanners", twitch: "https://www.twitch.tv/nyanners", wiki: "https://virtualyoutuber.fandom.com/wiki/Nyatasha_Nyanners" },{ id: 1015, type: "talent", group: "INDIES", label: "Kson", youtube: "https://www.youtube.com/channel/UC9ruVYPv7yJmV0Rh0NKA-Lw", twitch: "https://www.twitch.tv/ksonsouchou", wiki: "https://virtualyoutuber.fandom.com/wiki/Kson" },{ id: 1016, type: "talent", group: "INDIES", label: "Veibae", youtube: "https://www.youtube.com/channel/UCsBFeCb82qOXyUP19nmD9xw", twitch: "https://www.twitch.tv/vei", wiki: "https://virtualyoutuber.fandom.com/wiki/Veibae" },{ id: 6001, type: "talent", group: "INDIES", label: "Akuma Nihmune", youtube: "https://www.youtube.com/c/AkumaNihmuneCh", twitch: "https://www.twitch.tv/nihmune", wiki: "https://virtualyoutuber.fandom.com/wiki/Akuma_Nihmune" },{ id: 6002, type: "talent", group: "INDIES", label: "Bao the Whale", youtube: "https://www.youtube.com/@baovtuber", twitch: "https://www.twitch.tv/bao", wiki: "https://virtualyoutuber.fandom.com/wiki/Bao" },{ id: 6003, type: "talent", group: "INDIES", label: "Yuzu", youtube: "https://www.youtube.com/channel/UCKvij44VV9TWt-EM3evoRWg", twitch: "https://www.twitch.tv/yuzu", wiki: "https://virtualyoutuber.fandom.com/wiki/Sanagi_Yuzu" },{ id: 6004, type: "talent", group: "INDIES", label: "Camila", youtube: "https://www.youtube.com/channel/UCdjLJvro7Q3V0M2V2pwWfZA", twitch: "https://www.twitch.tv/camila", wiki: "https://virtualyoutuber.fandom.com/wiki/Camila" },{ id: 6005, type: "talent", group: "INDIES", label: "Lucy Pyre", youtube: "https://www.youtube.com/channel/UC5VWF53rrEiuYvO5e5Ecn9Q", twitch: "https://www.twitch.tv/lucypyre", wiki: "https://virtualyoutuber.fandom.com/wiki/Lucy_Pyre" },{ id: 6006, type: "talent", group: "INDIES", label: "Trickywi", youtube: "https://www.youtube.com/@Trickywi", twitch: "https://www.twitch.tv/trickywi", wiki: "https://virtualyoutuber.fandom.com/wiki/Trickywi" },{ id: 9001, type: "talent", group: "INDIES", label: "Bajiru", youtube: "https://www.youtube.com/c/bajiru_EN", twitch: "https://www.twitch.tv/bajiru_en", wiki: "https://virtualyoutuber.fandom.com/wiki/Bajiru" },{ id: 9002, type: "talent", group: "INDIES", label: "dooby3D", youtube: "https://www.youtube.com/@dooby3d", twitch: "https://www.twitch.tv/dooby3d", wiki: "https://virtualyoutuber.fandom.com/wiki/Dooby3D" },{ id: 9003, type: "talent", group: "INDIES", label: "FroggyLoch", youtube: "https://www.youtube.com/channel/UCyHiAEZfJmXO_cBRtgzcWZA/featured", twitch: "https://www.twitch.tv/froggyloch", wiki: "https://virtualyoutuber.fandom.com/wiki/FroggyLoch" },{ id: 9004, type: "talent", group: "INDIES", label: "Limealicious", youtube: "https://www.youtube.com/c/Limealicious", twitch: "https://www.twitch.tv/limealicious", wiki: "https://virtualyoutuber.fandom.com/wiki/Laimu" },{ id: 9005, type: "talent", group: "INDIES", label: "Sameko Saba", youtube: "https://www.youtube.com/@SamekoSaba", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Sameko_Saba" },{ id: 9006, type: "talent", group: "INDIES", label: "Nimi Nightmare", youtube: "https://www.youtube.com/@niminightmare", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Nimi_Nightmare" },{ id: 9007, type: "talent", group: "INDIES", label: "SixteenInMono", youtube: "https://www.youtube.com/@SixteenInMono", twitch: "https://www.twitch.tv/sixteeninmono", wiki: "" },{ id: 9008, type: "talent", group: "INDIES", label: "Cottontail_VA", youtube: "https://www.youtube.com/cottontailva", twitch: "https://www.twitch.tv/cottontailva", wiki: "https://virtualyoutuber.fandom.com/wiki/CottontailVA" },{ id: 9009, type: "talent", group: "INDIES", label: "Arielle_VT", youtube: "https://www.youtube.com/@Arielle-VT", twitch: "https://www.twitch.tv/arielle", wiki: "https://virtualyoutuber.fandom.com/wiki/Arielle" },{ id: 9010, type: "talent", group: "INDIES", label: "Starlight Daryl", youtube: "https://www.youtube.com/@StarlightDaryl", twitch: "https://www.twitch.tv/starlightdaryl", wiki: "https://virtualyoutuber.fandom.com/wiki/StarlightDaryl" },{ id: 9011, type: "talent", group: "INDIES", label: "Isaa Corva", youtube: "https://www.youtube.com/@isaacorva", twitch: "https://www.twitch.tv/isaa", wiki: "https://virtualyoutuber.fandom.com/wiki/Isaa_Corva" },{ id: 9013, type: "talent", group: "INDIES", label: "Lord Aethelstan", youtube: "https://www.youtube.com/channel/UCLI_XmsVZzOrOB1LaoV0BEQ", twitch: "https://www.twitch.tv/lordaethelstan", wiki: "https://virtualyoutuber.fandom.com/wiki/Lord_Aethelstan" },{ id: 9014, type: "talent", group: "INDIES", label: "Obkatiekat", youtube: "https://www.youtube.com/obkatiekat", twitch: "https://www.twitch.tv/obkatiekat", wiki: "https://virtualyoutuber.fandom.com/wiki/Obkatiekat" },{ id: 9015, type: "talent", group: "INDIES", label: "U-san", youtube: "https://www.youtube.com/@unnamednow00", twitch: "https://www.twitch.tv/unnamednow00", wiki: "https://virtualyoutuber.fandom.com/wiki/Unn%C3%A4med" },{ id: 9016, type: "talent", group: "INDIES", label: "Saiiren", youtube: "https://www.youtube.com/@saiiren", twitch: "https://www.twitch.tv/saiiren", wiki: "https://virtualyoutuber.fandom.com/wiki/Saiiren" },{ id: 9017, type: "talent", group: "INDIES", label: "Porcelain Maid", youtube: "https://www.youtube.com/channel/UCngBjKSLC8IhPNagQCnf2LQ", twitch: "https://www.twitch.tv/porcelainmaid", wiki: "https://virtualyoutuber.fandom.com/wiki/PorcelainMaid" },{ id: 9018, type: "talent", group: "INDIES", label: "Heavenly Father", youtube: "https://www.youtube.com/channel/UCrx5cwSB4bl3fI34Boxvq2A", twitch: "https://www.twitch.tv/heavenlyfather", wiki: "https://virtualyoutuber.fandom.com/wiki/Heavenly_Father" },{ id: 9019, type: "talent", group: "INDIES", label: "Pumpkin Potion", youtube: "https://www.youtube.com/pumpkinpotion", twitch: "https://www.twitch.tv/pumpkinpotion", wiki: "https://virtualyoutuber.fandom.com/wiki/Pumpkin_Potion" },{ id: 9020, type: "talent", group: "INDIES", label: "missshadowlovely", youtube: "https://www.youtube.com/MissShadowLovely", twitch: "https://www.twitch.tv/missshadowlovely", wiki: "https://virtualyoutuber.fandom.com/wiki/MissShadowLovely" },{ id: 9021, type: "talent", group: "INDIES", label: "CyYu", youtube: "https://www.youtube.com/c/@CyYuvods", twitch: "https://www.twitch.tv/cyyuvtuber", wiki: "https://virtualyoutuber.fandom.com/wiki/CyYu" },{ id: 9022, type: "talent", group: "INDIES", label: "CROC", youtube: "https://www.youtube.com/@CROCvt", twitch: "https://www.twitch.tv/croc", wiki: "wikilink" },{ id: 9023, type: "talent", group: "INDIES", label: "ENVI", youtube: "youtube", twitch: "https://www.twitch.tv/envi", wiki: "wikilink" },{ id: 9024, type: "talent", group: "INDIES", label: "Lucia Crabs", youtube: "https://www.youtube.com/@luciavt", twitch: "https://www.twitch.tv/lucia", wiki: "https://virtualyoutuber.fandom.com/wiki/Lucia_Crabs" },{ id: 9025, type: "talent", group: "INDIES", label: "KloeKroc", youtube: "https://www.youtube.com/@KloeKroc", twitch: "https://www.twitch.tv/kloekroc", wiki: "wikilink" },{ id: 9026, type: "talent", group: "INDIES", label: "Derivakat", youtube: "https://www.youtube.com/derivakat", twitch: "https://www.twitch.tv/derivakat", wiki: "wikilink" },{ id: 9027, type: "talent", group: "INDIES", label: "Fufu", youtube: "https://www.youtube.com/channel/UCNMHJ9WnMXabPn-iyQKAdcA", twitch: "https://www.twitch.tv/fufu", wiki: "https://virtualyoutuber.fandom.com/wiki/Fufu" },{ id: 9028, type: "talent", group: "INDIES", label: "KokoNuts", youtube: "https://www.youtube.com/channel/UCk9qayCnFw51PIUZKVxH1UQ", twitch: "https://www.twitch.tv/kokonuts", wiki: "https://virtualyoutuber.fandom.com/wiki/Koko_D._Nuts" },{ id: 9029, type: "talent", group: "INDIES", label: "Crelly", youtube: "https://www.youtube.com/channel/UCwxaNWg74VccV65gr_L6JZg", twitch: "https://www.twitch.tv/crelly", wiki: "https://virtualyoutuber.fandom.com/wiki/Crelly" },{ id: 9030, type: "talent", group: "INDIES", label: "Bluto", youtube: "youtube", twitch: "https://www.twitch.tv/bluto", wiki: "https://virtualyoutuber.fandom.com/wiki/Bluto" },{ id: 9031, type: "talent", group: "INDIES", label: "chibidoki", youtube: "https://www.youtube.com/channel/UCoqNvjhUxJRYW4JsT5fBK6w", twitch: "https://www.twitch.tv/chibidoki", wiki: "https://virtualyoutuber.fandom.com/wiki/Chibidoki" },{ id: 9032, type: "talent", group: "INDIES", label: "x3Dustco", youtube: "youtube", twitch: "https://www.twitch.tv/x3dustco", wiki: "wikilink" },{ id: 9033, type: "talent", group: "INDIES", label: "LaynaLazar", youtube: "https://www.youtube.com/@LaynaLazar", twitch: "https://www.twitch.tv/laynalazar", wiki: "https://virtualyoutuber.fandom.com/wiki/Layna_Lazar" },{ id: 9034, type: "talent", group: "INDIES", label: "Papamutt", youtube: "https://www.youtube.com/channel/UCbAadhjblnwYfQ0xypSH_sg", twitch: "https://www.twitch.tv/papamutt", wiki: "https://virtualyoutuber.fandom.com/wiki/Papamutt" },{ id: 9035, type: "talent", group: "INDIES", label: "FeFe", youtube: "https://www.youtube.com/c/fefevtuber", twitch: "https://www.twitch.tv/fefe", wiki: "https://virtualyoutuber.fandom.com/wiki/FeFe" },{ id: 9036, type: "talent", group: "INDIES", label: "Vexoria the Suneater", youtube: "https://www.youtube.com/channel/UC9r8dNEoXdIpYTnoMVFwzhg", twitch: "https://www.twitch.tv/vexoria_the_suneater", wiki: "https://virtualyoutuber.fandom.com/wiki/Vexoria_the_Sun_Eater" },{ id: 9037, type: "talent", group: "INDIES", label: "Spite", youtube: "https://www.youtube.com/c/SpitemeVtuber", twitch: "https://www.twitch.tv/spite", wiki: "https://virtualyoutuber.fandom.com/wiki/Spite" },{ id: 9038, type: "talent", group: "INDIES", label: "Cha Cha Your Vmom", youtube: "https://youtube.com/@chachayourvmom", twitch: "https://www.twitch.tv/chachayourvmom", wiki: "https://virtualyoutuber.fandom.com/wiki/Cha_Cha,_Your_Vmom" },{ id: 9039, type: "talent", group: "INDIES", label: "el XoX", youtube: "https://www.youtube.com/@elXoX34", twitch: "https://www.twitch.tv/el_xox", wiki: "https://virtualyoutuber.fandom.com/wiki/El_XoX" },{ id: 9040, type: "talent", group: "INDIES", label: "Megladon", youtube: "https://www.youtube.com/channel/UCb5BJg1PJvzQ6kYk7eguzCQ", twitch: "https://www.twitch.tv/megalodonvt", wiki: "https://virtualyoutuber.fandom.com/wiki/Megalodon" },{ id: 9041, type: "talent", group: "INDIES", label: "cerberVT", youtube: "https://www.youtube.com/channel/UCBX-cil2Y9-_TOyFxsAdt1w", twitch: "https://www.twitch.tv/cerbervt", wiki: "https://virtualyoutuber.fandom.com/wiki/CerberVT" },{ id: 9042, type: "talent", group: "INDIES", label: "tonkienator", youtube: "https://www.youtube.com/@tonkienatorr", twitch: "https://www.twitch.tv/tonkienator", wiki: "wikilink" },{ id: 9043, type: "talent", group: "INDIES", label: "Dokibird", youtube: "https://www.youtube.com/@Dokibird", twitch: "https://www.twitch.tv/dokibird", wiki: "https://virtualyoutuber.fandom.com/wiki/Dokibird" },{ id: 9044, type: "talent", group: "INDIES", label: "Shylilly", youtube: "https://www.youtube.com/@Shylily", twitch: "https://www.twitch.tv/shylily", wiki: "https://virtualyoutuber.fandom.com/wiki/Shylily" },{ id: 9045, type: "talent", group: "INDIES", label: "Meicha", youtube: "https://www.youtube.com/channel/UCNbVN2AjnvY73GVS3NdJx4Q/", twitch: "https://www.twitch.tv/meicha", wiki: "https://virtualyoutuber.fandom.com/wiki/Meicha" },{ id: 9046, type: "talent", group: "INDIES", label: "moniibagel", youtube: "https://www.youtube.com/channel/UCfTjT67uIy1hcAJFO7_AqOQ", twitch: "https://www.twitch.tv/moniibagel/about", wiki: "https://virtualyoutuber.fandom.com/wiki/Monii" },{ id: 9047, type: "talent", group: "INDIES", label: "InannaBell", youtube: "https://www.youtube.com/@inannabell", twitch: "https://www.twitch.tv/inannabell", wiki: "" },{ id: 9048, type: "talent", group: "INDIES", label: "Psydere", youtube: "https://www.youtube.com/@psydere", twitch: "https://www.twitch.tv/psydere", wiki: "" },{ id: 9049, type: "talent", group: "INDIES", label: "FREAM", youtube: "", twitch: "https://www.twitch.tv/fream", wiki: "https://virtualyoutuber.fandom.com/wiki/Fream" },{ id: 9050, type: "talent", group: "INDIES", label: "Momo", youtube: "http://www.youtube.com/themastermo", twitch: "https://www.twitch.tv/momo", wiki: "https://virtualyoutuber.fandom.com/wiki/Momo" },{ id: 9051, type: "talent", group: "INDIES", label: "girl_dm_", youtube: "https://www.youtube.com/channel/UC_WC6plpIdL_buebR9vSVkg", twitch: "https://www.twitch.tv/girl_dm_", wiki: "https://virtualyoutuber.fandom.com/wiki/Girl_dm" },{ id: 9052, type: "talent", group: "INDIES", label: "SunnySplosion", youtube: "https://www.youtube.com/@OopsAllSunny", twitch: "https://www.twitch.tv/sunnysplosion", wiki: "https://virtualyoutuber.fandom.com/wiki/SunnySplosion" },{ id: 9053, type: "talent", group: "INDIES", label: "OniGiri", youtube: "https://www.youtube.com/c/OniGirien", twitch: "https://www.twitch.tv/onigiri", wiki: "https://virtualyoutuber.fandom.com/wiki/OniGiri" },{ id: 10001, type: "talent", group: "FLESHTUBERS", label: "Marcomeatball", youtube: "https://www.youtube.com/c/MarcoMeatball", twitch: "https://www.twitch.tv/marcomeatball", wiki: "wikilink" },{ id: 10002, type: "talent", group: "FLESHTUBERS", label: "lesagesinging", youtube: "https://www.youtube.com/channel/UCReU-IqthhUbR7N7EsTu6MQ", twitch: "https://www.twitch.tv/lesagesinging", wiki: "" },{ id: 10003, type: "talent", group: "FLESHTUBERS", label: "CDawgVA", youtube: "https://www.youtube.com/channel/UCPsZ_0SkFdi551iYTG04R2g", twitch: "https://www.twitch.tv/cdawg", wiki: "https://en.wikipedia.org/wiki/CDawgVA" },{ id: 10005, type: "talent", group: "FLESHTUBERS", label: "JessieCox", youtube: "https://youtube.com/JesseCox", twitch: "https://www.twitch.tv/jessecox", wiki: "" },{ id: 10006, type: "talent", group: "FLESHTUBERS", label: "Doger", youtube: "https://www.youtube.com/@DexbonusVOD", twitch: "https://www.twitch.tv/dexbonus", wiki: "" },{ id: 10007, type: "talent", group: "FLESHTUBERS", label: "Nagzz", youtube: "https://www.youtube.com/nagzz", twitch: "https://www.twitch.tv/nagzz", wiki: "" },{ id: 10008, type: "talent", group: "FLESHTUBERS", label: "Ray Narvaez", youtube: "http://youtube.com/@rayyylmao", twitch: "https://www.twitch.tv/ray", wiki: "" },{ id: 10009, type: "talent", group: "FLESHTUBERS", label: "Chris Broad", youtube: "https://www.youtube.com/@AbroadinJapan", twitch: "", wiki: "https://en.wikipedia.org/wiki/Chris_Broad_(YouTuber)" },{ id: 10090, type: "talent", group: "FLESHTUBERS", label: "Rubin Sargasm", youtube: "youtube", twitch: "twitch", wiki: "" },{ id: 11001, type: "talent", group: "HOLOLIVE", label: "Mori Calliope", youtube: "https://www.youtube.com/@MoriCalliope/featured", twitch: "https://www.twitch.tv/moricalliope/about", wiki: "https://virtualyoutuber.fandom.com/wiki/Mori_Calliope" },{ id: 11014, type: "talent", group: "HOLOLIVE", label: "Takanashi Kiara", youtube: "https://t.co/mZsEcWct3I", twitch: "https://www.twitch.tv/kiara", wiki: "https://virtualyoutuber.fandom.com/wiki/Takanashi_Kiara" },{ id: 11015, type: "talent", group: "HOLOLIVE", label: "Ninomae Ina’nis", youtube: "https://www.youtube.com/@NinomaeInanis", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Ninomae_Ina'nis" },{ id: 11002, type: "talent", group: "HOLOLIVE", label: "Nerissa Ravencroft", youtube: "https://www.youtube.com/@NerissaRavencroft", twitch: "https://www.twitch.tv/nerissaravencroft", wiki: "https://virtualyoutuber.fandom.com/wiki/Nerissa_Ravencroft" },{ id: 11016, type: "talent", group: "HOLOLIVE", label: "Koseki Bijou", youtube: "https://www.youtube.com/@KosekiBijou", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Koseki_Bijou" },{ id: 11017, type: "talent", group: "HOLOLIVE", label: "Shiori Novella", youtube: "https://www.youtube.com/@ShioriNovella", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Shiori_Novella" },{ id: 11018, type: "talent", group: "HOLOLIVE", label: "Fuwawa Abyssgard", youtube: "https://www.youtube.com/@FUWAMOCOch", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Fuwawa_Abyssgard" },{ id: 11019, type: "talent", group: "HOLOLIVE", label: "Mococo Abyssgard", youtube: "https://www.youtube.com/@FUWAMOCOch", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Mococo_Abyssgard" },{ id: 11003, type: "talent", group: "HOLOLIVE", label: "Elizabeth Rose Bloodflame", youtube: "youtube", twitch: "https://www.twitch.tv/elizabethrosebloodflame", wiki: "https://virtualyoutuber.fandom.com/wiki/Elizabeth_Rose_Bloodflame" },{ id: 11020, type: "talent", group: "HOLOLIVE", label: "Gigi Murin", youtube: "https://www.youtube.com/@holoen_gigimurin", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Gigi_Murin" },{ id: 11021, type: "talent", group: "HOLOLIVE", label: "Cecilia Immergreen", youtube: "https://www.youtube.com/@holoen_ceciliaimmergreen", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Cecilia_Immergreen" },{ id: 11022, type: "talent", group: "HOLOLIVE", label: "Raora Panthera", youtube: "https://www.youtube.com/@holoen_raorapanthera", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Raora_Panthera" },{ id: 11004, type: "talent", group: "HOLOLIVE", label: "Kureiji Ollie", youtube: "https://www.youtube.com/@KureijiOllie", twitch: "https://www.twitch.tv/kureijiollie", wiki: "https://virtualyoutuber.fandom.com/wiki/Kureiji_Ollie" },{ id: 11005, type: "talent", group: "HOLOLIVE", label: "Moona Hoshinova", youtube: "https://www.youtube.com/@MoonaHoshinova", twitch: "https://www.twitch.tv/moonahoshinova", wiki: "https://virtualyoutuber.fandom.com/wiki/Moona_Hoshinova" },{ id: 11006, type: "talent", group: "HOLOLIVE", label: "Ayunda Risu", youtube: "https://www.youtube.com/@ayundarisu", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Ayunda_Risu" },{ id: 11007, type: "talent", group: "HOLOLIVE", label: "Kaela Kovalskia", youtube: "https://www.youtube.com/@KaelaKovalskia", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Kaela_Kovalskia" },{ id: 11008, type: "talent", group: "HOLOLIVE", label: "Kobo Kanaeru", youtube: "https://www.youtube.com/@KoboKanaeru", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Kobo_Kanaeru" },{ id: 11009, type: "talent", group: "HOLOLIVE", label: "Vestia Zeta", youtube: "https://www.youtube.com/@VestiaZeta", twitch: "https://www.twitch.tv/vestiazeta", wiki: "https://virtualyoutuber.fandom.com/wiki/Vestia_Zeta" },{ id: 11013, type: "talent", group: "HOLOLIVE", label: "Banzoin Hakka", youtube: "https://www.youtube.com/@BanzoinHakka", twitch: "https://www.twitch.tv/banzoinhakka", wiki: "https://virtualyoutuber.fandom.com/wiki/Banzoin_Hakka" },{ id: 12001, type: "talent", group: "FIRST_STAGE", label: "Liron Lockheart", youtube: "https://www.youtube.com/@LironLockheart_FSP", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Liron_Lockheart" },{ id: 13001, type: "talent", group: "TERI-YAKI", label: "Rae Laveire", youtube: "https://youtube.com/c/Raelaveire", twitch: "https://www.twitch.tv/raelaveire", wiki: "https://virtualyoutuber.fandom.com/wiki/Rae_Laveire" },{ id: 5001, type: "talent", group: "LAB_BRATS", label: "Chrchie", youtube: "https://www.youtube.com/@chrchieVT", twitch: "https://www.twitch.tv/chrchie", wiki: "https://virtualyoutuber.fandom.com/wiki/Chrchie" },{ id: 5002, type: "talent", group: "LAB_BRATS", label: "MinikoMew", youtube: "https://www.youtube.com/channel/UC9evPLoYqsHASjrahHekqMA", twitch: "https://www.twitch.tv/minikomew", wiki: "https://virtualyoutuber.fandom.com/wiki/MinikoMew" },{ id: 5003, type: "talent", group: "LAB_BRATS", label: "Shoomimi", youtube: "https://www.youtube.com/@Shoomimi", twitch: "https://www.twitch.tv/shoomimi", wiki: "https://virtualyoutuber.fandom.com/wiki/Shoomimi" },{ id: 5005, type: "talent", group: "LAB_BRATS", label: "Ellie Minibot", youtube: "https://www.youtube.com/channel/UCeZe82WbZ7VL9meqWli6qxg", twitch: "https://www.twitch.tv/ellie_minibot", wiki: "https://virtualyoutuber.fandom.com/wiki/Ellie_Minibot" },{ id: 8001, type: "talent", group: "NEUROVERSE", label: "Vedal", youtube: "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", twitch: "https://www.twitch.tv/vedal987", wiki: "wikilink" },{ id: 8002, type: "talent", group: "NEUROVERSE", label: "Neurosama", youtube: "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", twitch: "https://www.twitch.tv/vedal987", wiki: "https://virtualyoutuber.fandom.com/wiki/Neuro-sama" },{ id: 8003, type: "talent", group: "NEUROVERSE", label: "Evil Neuro", youtube: "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", twitch: "https://www.twitch.tv/vedal987", wiki: "https://virtualyoutuber.fandom.com/wiki/Evil_Neuro" },{ id: 7001, type: "talent", group: "VICHIBAN", label: "Buffpup", youtube: "https://www.youtube.com/channel/UCM6Ld_dNSaUQ2uwjJ4Gq9FA", twitch: "https://www.twitch.tv/buffpup", wiki: "https://virtualyoutuber.fandom.com/wiki/Buffpup" },{ id: 7002, type: "talent", group: "VICHIBAN", label: "Ai Candii", youtube: "http://youtube.com/c/aicandii", twitch: "https://www.twitch.tv/aicandii", wiki: "https://virtualyoutuber.fandom.com/wiki/Ai_Candii" },{ id: 7003, type: "talent", group: "VICHIBAN", label: "Rosedoodle", youtube: "https://www.youtube.com/channel/UCihXhXRz8tj91hBptuSsQ0g", twitch: "https://www.twitch.tv/rosedoodle", wiki: "https://virtualyoutuber.fandom.com/wiki/Rosedoodle" },{ id: 7004, type: "talent", group: "VICHIBAN", label: "ShiaBun", youtube: "https://www.youtube.com/c/ShiaBun", twitch: "https://www.twitch.tv/shiabun", wiki: "https://virtualyoutuber.fandom.com/wiki/ShiaBun" },{ id: 2001, type: "talent", group: "DENTSU", label: "Mint Fantôme", youtube: "https://www.youtube.com/@mintfantome", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Mint_Fant%C3%B4me" },{ id: 2002, type: "talent", group: "DENTSU", label: "Victoria Roma", youtube: "https://www.youtube.com/@vickyroman_idol", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Victoria_Roman" },{ id: 2003, type: "talent", group: "DENTSU", label: "Phoebe Chan", youtube: "https://www.youtube.com/@feebeechanchibi", twitch: "", wiki: "https://virtualyoutuber.fandom.com/wiki/Phoebe_Chan" },{ id: 3001, type: "talent", group: "NOVA", label: "Akatsuki Hotaru", youtube: "https://www.youtube.com/@AkatsukiDHotaru", twitch: "https://www.twitch.tv/akatsukidhotaru", wiki: "https://virtualyoutuber.fandom.com/wiki/Akatsuki_Hotaru" },{ id: 3002, type: "talent", group: "NOVA", label: "Hestia Happiness", youtube: "https://www.youtube.com/channel/UCyaxhmE-zyUIjMfCGQ75vlA", twitch: "https://www.twitch.tv/hestiahappiness", wiki: "https://virtualyoutuber.fandom.com/wiki/Hestia_Happiness" },{ id: 3003, type: "talent", group: "NOVA", label: "Yutori Peke", youtube: "https://www.youtube.com/@PekeIsPeak", twitch: "https://www.twitch.tv/pekeispeak", wiki: "https://virtualyoutuber.fandom.com/wiki/Yutori_Peke" },{ id: 3004, type: "talent", group: "NOVA", label: "Okamoto Nagi", youtube: "https://www.youtube.com/@NagIsekaied", twitch: "https://www.twitch.tv/nagisekaied", wiki: "https://virtualyoutuber.fandom.com/wiki/Okamoto_Nagi" },{ id: 4001, type: "talent", group: "BEASTIEZ", label: "Tori Oriane", youtube: "https://www.youtube.com/@ToriOriane/featured", twitch: "https://www.twitch.tv/torioriane", wiki: "https://virtualyoutuber.fandom.com/wiki/Tori_Oriane" },{ id: 4002, type: "talent", group: "BEASTIEZ", label: "PiaPiUFO", youtube: "https://www.youtube.com/c/PiaPIUFO", twitch: "https://www.twitch.tv/piapiufo", wiki: "https://virtualyoutuber.fandom.com/wiki/PiaPiUFO" },{ id: 4003, type: "talent", group: "BEASTIEZ", label: "Beribug", youtube: "https://www.youtube.com/channel/UC8PMqEDpXcsooyDGiLvxs4w", twitch: "https://www.twitch.tv/beribug", wiki: "https://virtualyoutuber.fandom.com/wiki/Beribug" },{ id: 4004, type: "talent", group: "BEASTIEZ", label: "Kairyu Crocodile", youtube: "https://www.youtube.com/@KairyuCrocodile", twitch: "https://www.twitch.tv/kairyucrocodile", wiki: "https://virtualyoutuber.fandom.com/wiki/Kairyu_Crocodile" }

]);

const edges = new vis.DataSet([

{ from: 0, to: 9034, type: "interests" },{ from: 0, to: 9028, type: "interests" },{ from: 0, to: 1000, type: "interests" },{ from: 0, to: 1001, type: "interests" },{ from: 0, to: 1003, type: "interests" },{ from: 0, to: 9042, type: "interests" },{ from: 0, to: 9024, type: "interests" },{ from: 0, to: 9038, type: "interests" },{ from: 0, to: 1012, type: "interests" },{ from: 0, to: 9039, type: "interests" },{ from: 0, to: 9019, type: "interests" },{ from: 0, to: 9032, type: "interests" },{ from: 0, to: 9003, type: "interests" },{ from: 0, to: 7003, type: "interests" },{ from: 0, to: 1002, type: "interests" },{ from: 0, to: 11001, type: "interests" },{ from: 0, to: 5001, type: "interests" },{ from: 0, to: 6004, type: "interests" },{ from: 0, to: 9004, type: "interests" },{ from: 0, to: 9016, type: "interests" },{ from: 0, to: 5005, type: "interests" },{ from: 0, to: 1008, type: "interests" },{ from: 0, to: 1010, type: "interests" },{ from: 0, to: 9009, type: "interests" },{ from: 0, to: 9029, type: "interests" },{ from: 0, to: 1011, type: "interests" },{ from: 0, to: 10007, type: "interests" },{ from: 0, to: 10003, type: "interests" },{ from: 0, to: 10002, type: "interests" },{ from: 0, to: 9036, type: "interests" },{ from: 0, to: 9040, type: "interests" },{ from: 0, to: 6001, type: "interests" },{ from: 0, to: 1015, type: "interests" },{ from: 0, to: 9052, type: "interests" },{ from: 0, to: 9053, type: "interests" },{ from: 1, to: 10005, type: "interests" },{ from: 1, to: 10006, type: "interests" },{ from: 1, to: 10007, type: "interests" },{ from: 1, to: 10008, type: "interests" },{ from: 1, to: 10001, type: "interests" },{ from: 1, to: 10003, type: "interests" },{ from: 1, to: 10004, type: "interests" },{ from: 1, to: 9004, type: "interests" },{ from: 1, to: 1001, type: "interests" },{ from: 1, to: 9033, type: "interests" },{ from: 1, to: 9018, type: "interests" },{ from: 1, to: 9009, type: "interests" },{ from: 1, to: 1008, type: "interests" },{ from: 1, to: 1010, type: "interests" },{ from: 1, to: 1013, type: "interests" },{ from: 1, to: 1003, type: "interests" },{ from: 1, to: 9017, type: "interests" },{ from: 1, to: 9016, type: "interests" },{ from: 1, to: 7002, type: "interests" },{ from: 1, to: 9043, type: "interests" },{ from: 1, to: 1000, type: "interests" },{ from: 1, to: 1009, type: "interests" },{ from: 1, to: 1011, type: "interests" },{ from: 1, to: 1012, type: "interests" },{ from: 1, to: 1014, type: "interests" },{ from: 1, to: 1007, type: "interests" },{ from: 1, to: 9025, type: "interests" },{ from: 1, to: 9021, type: "interests" },{ from: 1, to: 9024, type: "interests" },{ from: 1, to: 9020, type: "interests" },{ from: 1, to: 9019, type: "interests" },{ from: 1, to: 9002, type: "interests" },{ from: 1, to: 9006, type: "interests" },{ from: 1, to: 9007, type: "interests" },{ from: 1, to: 9013, type: "interests" },{ from: 1, to: 3001, type: "interests" },{ from: 1, to: 3002, type: "interests" },{ from: 1, to: 3003, type: "interests" },{ from: 1, to: 3004, type: "interests" },{ from: 1, to: 2001, type: "interests" },{ from: 1, to: 2002, type: "interests" },{ from: 1, to: 4001, type: "interests" },{ from: 1, to: 4002, type: "interests" },{ from: 1, to: 4003, type: "interests" },{ from: 1, to: 4004, type: "interests" },{ from: 1, to: 6003, type: "interests" },{ from: 1, to: 1002, type: "interests" },{ from: 1, to: 9031, type: "interests" },{ from: 1, to: 7004, type: "interests" },{ from: 1, to: 9022, type: "interests" },{ from: 1, to: 13001, type: "interests" },{ from: 1, to: 9045, type: "interests" },{ from: 1, to: 6006, type: "interests" },{ from: 1, to: 9051, type: "interests" },{ from: 1, to: 6002, type: "interests" },{ from: 1, to: 9030, type: "interests" },{ from: 1, to: 9050, type: "interests" },{ from: 1, to: 9044, type: "interests" },{ from: 1, to: 9049, type: "interests" },{ from: 1, to: 9035, type: "interests" },{ from: 1, to: 9027, type: "interests" },{ from: 1, to: 11003, type: "interests" },{ from: 1, to: 11001, type: "interests" },{ from: 1, to: 9036, type: "interests" },{ from: 1, to: 1015, type: "interests" },{ from: 1, to: 9034, type: "interests" },{ from: 1, to: 9052, type: "interests" },{ from: 1, to: 12001, type: "interests" },{ from: 1, to: 9023, type: "interests" },{ from: 2, to: 1000, type: "interests" },{ from: 2, to: 1002, type: "interests" },{ from: 2, to: 1005, type: "interests" },{ from: 2, to: 1006, type: "interests" },{ from: 2, to: 1007, type: "interests" },{ from: 2, to: 1009, type: "interests" },{ from: 2, to: 1011, type: "interests" },{ from: 2, to: 1014, type: "interests" },{ from: 2, to: 1015, type: "interests" },{ from: 2, to: 2001, type: "interests" },{ from: 2, to: 2002, type: "interests" },{ from: 2, to: 2003, type: "interests" },{ from: 2, to: 3001, type: "interests" },{ from: 2, to: 3002, type: "interests" },{ from: 2, to: 3003, type: "interests" },{ from: 2, to: 3004, type: "interests" },{ from: 2, to: 4001, type: "interests" },{ from: 2, to: 4002, type: "interests" },{ from: 2, to: 4003, type: "interests" },{ from: 2, to: 4004, type: "interests" },{ from: 2, to: 6001, type: "interests" },{ from: 2, to: 6002, type: "interests" },{ from: 2, to: 6003, type: "interests" },{ from: 2, to: 6004, type: "interests" },{ from: 2, to: 9001, type: "interests" },{ from: 2, to: 9002, type: "interests" },{ from: 2, to: 9003, type: "interests" },{ from: 2, to: 9005, type: "interests" },{ from: 2, to: 9006, type: "interests" },{ from: 2, to: 9007, type: "interests" },{ from: 2, to: 9008, type: "interests" },{ from: 2, to: 9010, type: "interests" },{ from: 2, to: 9011, type: "interests" },{ from: 2, to: 9013, type: "interests" },{ from: 2, to: 9014, type: "interests" },{ from: 2, to: 9015, type: "interests" },{ from: 2, to: 9019, type: "interests" },{ from: 2, to: 9026, type: "interests" },{ from: 2, to: 9031, type: "interests" },{ from: 2, to: 9037, type: "interests" },{ from: 2, to: 9041, type: "interests" },{ from: 2, to: 9043, type: "interests" },{ from: 2, to: 5002, type: "interests" },{ from: 2, to: 11001, type: "interests" },{ from: 2, to: 11014, type: "interests" },{ from: 2, to: 11015, type: "interests" },{ from: 2, to: 11002, type: "interests" },{ from: 2, to: 11016, type: "interests" },{ from: 2, to: 11017, type: "interests" },{ from: 2, to: 11018, type: "interests" },{ from: 2, to: 11019, type: "interests" },{ from: 2, to: 11003, type: "interests" },{ from: 2, to: 11020, type: "interests" },{ from: 2, to: 11021, type: "interests" },{ from: 2, to: 11022, type: "interests" },{ from: 2, to: 11004, type: "interests" },{ from: 2, to: 11005, type: "interests" },{ from: 2, to: 11006, type: "interests" },{ from: 2, to: 11007, type: "interests" },{ from: 2, to: 11008, type: "interests" },{ from: 2, to: 11009, type: "interests" },{ from: 2, to: 5005, type: "interests" },{ from: 2, to: 7001, type: "interests" },{ from: 2, to: 7004, type: "interests" },{ from: 2, to: 5001, type: "interests" },{ from: 2, to: 6005, type: "interests" },{ from: 2, to: 10004, type: "interests" },{ from: 2, to: 10002, type: "interests" },{ from: 2, to: 10001, type: "interests" },{ from: 2, to: 11013, type: "interests" },{ from: 2, to: 13001, type: "interests" },{ from: 2, to: 9046, type: "interests" },{ from: 2, to: 9047, type: "interests" },{ from: 3, to: 10001, type: "interests" },{ from: 3, to: 10002, type: "interests" },{ from: 3, to: 10003, type: "interests" },{ from: 3, to: 10004, type: "interests" },{ from: 3, to: 10005, type: "interests" },{ from: 3, to: 10006, type: "interests" },{ from: 3, to: 10007, type: "interests" },{ from: 3, to: 10008, type: "interests" },{ from: 3, to: 10009, type: "interests" },{ from: 3, to: 9016, type: "interests" },{ from: 3, to: 9008, type: "interests" },{ from: 3, to: 9033, type: "interests" },{ from: 3, to: 9053, type: "interests" },{ from: 4, to: 9032, type: "interests" },{ from: 4, to: 9003, type: "interests" },{ from: 4, to: 7003, type: "interests" },{ from: 4, to: 13001, type: "interests" },{ from: 5, to: 5005, type: "interests" },{ from: 5, to: 8001, type: "interests" },{ from: 5, to: 5003, type: "interests" },{ from: 5, to: 7002, type: "interests" },{ from: 5, to: 9048, type: "interests" },{ from: 6, to: 1012, type: "interests" },{ from: 6, to: 9039, type: "interests" },{ from: 6, to: 9036, type: "interests" },{ from: 6, to: 9040, type: "interests" },{ from: 6, to: 9024, type: "interests" },{ from: 6, to: 9035, type: "interests" },{ from: 7, to: 8002, type: "interests" },{ from: 7, to: 8003, type: "interests" },{ from: 8, to: 10002, type: "interests" },{ from: 8, to: 1012, type: "interests" },{ from: 8, to: 9048, type: "interests" },{ from: 9, to: 9034, type: "interests" },{ from: 9, to: 9052, type: "interests" },{ from: 10, to: 12001, type: "interests" },{ from: 10, to: 9008, type: "interests" },{ from: 10, to: 5005, type: "interests" },{ from: 10, to: 9038, type: "interests" },{ from: 102, to: 2001, type: "group" },{ from: 102, to: 2002, type: "group" },{ from: 102, to: 2003, type: "group" },{ from: 103, to: 3001, type: "group" },{ from: 103, to: 3002, type: "group" },{ from: 103, to: 3003, type: "group" },{ from: 103, to: 3004, type: "group" },{ from: 104, to: 4001, type: "group" },{ from: 104, to: 4002, type: "group" },{ from: 104, to: 4003, type: "group" },{ from: 104, to: 4004, type: "group" },{ from: 105, to: 7001, type: "group" },{ from: 105, to: 7002, type: "group" },{ from: 105, to: 7003, type: "group" },{ from: 105, to: 7004, type: "group" },{ from: 110, to: 111, type: "group" },{ from: 110, to: 113, type: "group" },{ from: 110, to: 114, type: "group" },{ from: 111, to: 112, type: "group" },{ from: 111, to: 116, type: "group" },{ from: 111, to: 117, type: "group" },{ from: 111, to: 120, type: "group" },{ from: 112, to: 11001, type: "group" },{ from: 112, to: 11014, type: "group" },{ from: 112, to: 11015, type: "group" },{ from: 116, to: 11003, type: "group" },{ from: 116, to: 11020, type: "group" },{ from: 116, to: 11021, type: "group" },{ from: 116, to: 11022, type: "group" },{ from: 117, to: 11002, type: "group" },{ from: 117, to: 11016, type: "group" },{ from: 117, to: 11017, type: "group" },{ from: 117, to: 11018, type: "group" },{ from: 117, to: 11019, type: "group" },{ from: 120, to: 11013, type: "group" },{ from: 113, to: 11004, type: "group" },{ from: 113, to: 11005, type: "group" },{ from: 113, to: 11006, type: "group" },{ from: 113, to: 11007, type: "group" },{ from: 113, to: 11008, type: "group" },{ from: 113, to: 11009, type: "group" },{ from: 115, to: 12001, type: "group" },{ from: 118, to: 13001, type: "group" },{ from: 202, to: 5001, type: "group" },{ from: 202, to: 5002, type: "group" },{ from: 202, to: 5003, type: "group" },{ from: 202, to: 5005, type: "group" },{ from: 208, to: 8001, type: "group" },{ from: 208, to: 8002, type: "group" },{ from: 208, to: 8003, type: "group" },{ from: 201, to: 1000, type: "group", dashes: true},{ from: 201, to: 1014, type: "group", dashes: true},{ from: 201, to: 9013, type: "group", dashes: true},{ from: 201, to: 10003, type: "group", dashes: true},{ from: 203, to: 6001, type: "group", dashes: true},{ from: 203, to: 6002, type: "group", dashes: true},{ from: 203, to: 6003, type: "group", dashes: true},{ from: 203, to: 6004, type: "group", dashes: true},{ from: 203, to: 6005, type: "group", dashes: true},{ from: 203, to: 6006, type: "group", dashes: true},{ from: 204, to: 1009, type: "group", dashes: true},{ from: 204, to: 9021, type: "group", dashes: true},{ from: 204, to: 9017, type: "group", dashes: true},{ from: 204, to: 9020, type: "group", dashes: true},{ from: 205, to: 1000, type: "group", dashes: true},{ from: 205, to: 1001, type: "group", dashes: true},{ from: 205, to: 1002, type: "group", dashes: true},{ from: 205, to: 1003, type: "group", dashes: true},{ from: 205, to: 1004, type: "group", dashes: true},{ from: 205, to: 1005, type: "group", dashes: true},{ from: 205, to: 1006, type: "group", dashes: true},{ from: 205, to: 1007, type: "group", dashes: true},{ from: 205, to: 1008, type: "group", dashes: true},{ from: 205, to: 1009, type: "group", dashes: true},{ from: 205, to: 1010, type: "group", dashes: true},{ from: 205, to: 1011, type: "group", dashes: true},{ from: 205, to: 1012, type: "group", dashes: true},{ from: 205, to: 1013, type: "group", dashes: true},{ from: 205, to: 1014, type: "group", dashes: true},{ from: 205, to: 1015, type: "group", dashes: true},{ from: 205, to: 1016, type: "group", dashes: true},{ from: 205, to: 102, type: "group", dashes: true},{ from: 205, to: 103, type: "group", dashes: true},{ from: 205, to: 104, type: "group", dashes: true},{ from: 206, to: 10001, type: "group", dashes: true},{ from: 206, to: 10002, type: "group", dashes: true},{ from: 206, to: 10003, type: "group", dashes: true},{ from: 206, to: 10004, type: "group", dashes: true},{ from: 206, to: 10005, type: "group", dashes: true},{ from: 206, to: 10006, type: "group", dashes: true},{ from: 206, to: 10007, type: "group", dashes: true},{ from: 206, to: 10008, type: "group", dashes: true},{ from: 206, to: 10009, type: "group", dashes: true},{ from: 207, to: 5001, type: "group", dashes: true},{ from: 207, to: 5002, type: "group", dashes: true},{ from: 207, to: 5003, type: "group", dashes: true},{ from: 207, to: 5005, type: "group", dashes: true},{ from: 207, to: 6001, type: "group", dashes: true},{ from: 207, to: 6002, type: "group", dashes: true},{ from: 207, to: 6003, type: "group", dashes: true},{ from: 207, to: 6004, type: "group", dashes: true},{ from: 207, to: 7001, type: "group", dashes: true},{ from: 207, to: 7002, type: "group", dashes: true},{ from: 207, to: 7003, type: "group", dashes: true},{ from: 207, to: 7004, type: "group", dashes: true},{ from: 207, to: 8001, type: "group", dashes: true},{ from: 207, to: 8002, type: "group", dashes: true},{ from: 207, to: 8003, type: "group", dashes: true},{ from: 207, to: 9001, type: "group", dashes: true},{ from: 207, to: 9002, type: "group", dashes: true},{ from: 207, to: 9003, type: "group", dashes: true},{ from: 207, to: 9004, type: "group", dashes: true},{ from: 207, to: 9005, type: "group", dashes: true},{ from: 207, to: 9006, type: "group", dashes: true},{ from: 207, to: 9007, type: "group", dashes: true},{ from: 207, to: 9008, type: "group", dashes: true},{ from: 207, to: 9009, type: "group", dashes: true},{ from: 207, to: 9010, type: "group", dashes: true},{ from: 207, to: 9011, type: "group", dashes: true},{ from: 207, to: 9012, type: "group", dashes: true},{ from: 207, to: 9013, type: "group", dashes: true},{ from: 207, to: 9014, type: "group", dashes: true},{ from: 207, to: 9015, type: "group", dashes: true},{ from: 207, to: 9016, type: "group", dashes: true},{ from: 207, to: 9017, type: "group", dashes: true},{ from: 207, to: 9018, type: "group", dashes: true},{ from: 207, to: 9019, type: "group", dashes: true},{ from: 207, to: 9020, type: "group", dashes: true},{ from: 207, to: 9021, type: "group", dashes: true},{ from: 207, to: 9022, type: "group", dashes: true},{ from: 207, to: 9023, type: "group", dashes: true},{ from: 207, to: 9024, type: "group", dashes: true},{ from: 207, to: 9025, type: "group", dashes: true},{ from: 207, to: 9026, type: "group", dashes: true},{ from: 207, to: 9027, type: "group", dashes: true},{ from: 207, to: 9028, type: "group", dashes: true},{ from: 207, to: 9029, type: "group", dashes: true},{ from: 207, to: 9030, type: "group", dashes: true},{ from: 207, to: 9031, type: "group", dashes: true},{ from: 207, to: 9032, type: "group", dashes: true},{ from: 207, to: 9033, type: "group", dashes: true},{ from: 207, to: 9034, type: "group", dashes: true},{ from: 207, to: 9035, type: "group", dashes: true},{ from: 207, to: 9036, type: "group", dashes: true},{ from: 207, to: 9037, type: "group", dashes: true},{ from: 207, to: 9038, type: "group", dashes: true},{ from: 207, to: 9039, type: "group", dashes: true},{ from: 207, to: 9040, type: "group", dashes: true},{ from: 207, to: 9041, type: "group", dashes: true},{ from: 207, to: 9042, type: "group", dashes: true},{ from: 207, to: 1000, type: "group", dashes: true},{ from: 207, to: 1001, type: "group", dashes: true},{ from: 207, to: 1002, type: "group", dashes: true},{ from: 207, to: 1003, type: "group", dashes: true},{ from: 207, to: 1004, type: "group", dashes: true},{ from: 207, to: 1005, type: "group", dashes: true},{ from: 207, to: 1006, type: "group", dashes: true},{ from: 207, to: 1007, type: "group", dashes: true},{ from: 207, to: 1008, type: "group", dashes: true},{ from: 207, to: 1009, type: "group", dashes: true},{ from: 207, to: 1010, type: "group", dashes: true},{ from: 207, to: 1011, type: "group", dashes: true},{ from: 207, to: 1012, type: "group", dashes: true},{ from: 207, to: 1013, type: "group", dashes: true},{ from: 207, to: 1014, type: "group", dashes: true},{ from: 207, to: 1015, type: "group", dashes: true},{ from: 207, to: 1016, type: "group", dashes: true},{ from: 207, to: 2001, type: "group", dashes: true},{ from: 207, to: 2002, type: "group", dashes: true},{ from: 207, to: 2003, type: "group", dashes: true},{ from: 207, to: 4001, type: "group", dashes: true},{ from: 207, to: 4002, type: "group", dashes: true},{ from: 207, to: 4003, type: "group", dashes: true},{ from: 207, to: 4004, type: "group", dashes: true},{ from: 207, to: 6005, type: "group", dashes: true},{ from: 207, to: 9043, type: "group", dashes: true},{ from: 207, to: 3001, type: "group", dashes: true},{ from: 207, to: 3002, type: "group", dashes: true},{ from: 207, to: 3003, type: "group", dashes: true},{ from: 207, to: 3004, type: "group", dashes: true},{ from: 207, to: 9044, type: "group", dashes: true},{ from: 207, to: 6006, type: "group", dashes: true},{ from: 207, to: 9045, type: "group", dashes: true},{ from: 207, to: 9046, type: "group", dashes: true},{ from: 207, to: 9047, type: "group", dashes: true},{ from: 207, to: 9048, type: "group", dashes: true},{ from: 207, to: 9049, type: "group", dashes: true},{ from: 207, to: 9050, type: "group", dashes: true},{ from: 207, to: 9051, type: "group", dashes: true},{ from: 207, to: 9052, type: "group", dashes: true},{ from: 207, to: 9053, type: "group", dashes: true},{ from: 209, to: 11004, type: "group", dashes: true},{ from: 209, to: 11005, type: "group", dashes: true},{ from: 209, to: 11006, type: "group", dashes: true},{ from: 209, to: 11007, type: "group", dashes: true},{ from: 209, to: 11008, type: "group", dashes: true},{ from: 209, to: 11009, type: "group", dashes: true},{ from: 209, to: 13001, type: "group", dashes: true},{ from: 209, to: 1002, type: "group", dashes: true}

]);
















//REDRAW BASED ON RADIO BUTTON


// VARIABLE SET UP


// this sets what elements are providing which filter inputs
//const nodeFilterSelector = document.getElementById("nodeFilterSelect");

//const edgesFilterSelector = document.getElementById("nodeFilterSelect");


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

	//console.log("Updated filters:", edgesFilterValues);


	//node value update
	nodesFilterValues.group = selected?.value === "group";
	nodesFilterValues.interests = selected?.value === "interests";
	nodesFilterValues.collab = selected?.value === "collab";

	//console.log("Updated filters:", nodesFilterValues);
	

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




// reset only if network already exists
//from chatgpt
if (globalThis.network) {
	globalThis.network.unselectAll();

	highlightActive = false;

	for (let nodeId in allNodes) {
		allNodes[nodeId].color = undefined;

		if (allNodes[nodeId].hiddenLabel !== undefined) {
			allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
			allNodes[nodeId].hiddenLabel = undefined;
		}
	}

	nodes.update(Object.values(allNodes));
}




};


// Attach listener to each radio button
edgeFilters.forEach(radio => {
	radio.addEventListener("change", updateEdgeFilters);
});




// Optional: run once on page load
updateEdgeFilters();