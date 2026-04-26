

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


		interaction: { 
			selectable: true,
/*
		hideEdgesOnDrag: true,
			tooltipDelay: 200,
			 */
		},



 
		// manually set the colors for legibility
		groups: {
			INTERESTS: {
				color: {background: "grey"},
				shape: "hexagon",
				size: 35,
				font: { size: 16, }
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
				font: { color: "black" },
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
				color: {background: "firebrick"},
				font: { color: "white" },
			},
			VSHOJO: {
				color: {background: "black"},
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



	//on select functions to get the custom url properties

	globalThis.network = new vis.Network(container, data, options);


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

			// set URL
			youtubeLink.href = node.youtube || "#";
			twitchLink.href = node.twitch || "#";


			// set visible text (optional)
			talentName.innerHTML = node.label;
			youtubeLink.innerHTML = node.youtube ? "YouTube" : "No YouTube";
			twitchLink.innerHTML = node.twitch ? "Twitch" : "No Twitch";


		}



	});



}



















const nodes = new vis.DataSet([

{ id: 0, type: "interests", group: "INTERESTS", label: "Yapping" },{ id: 1, type: "interests", group: "INTERESTS", label: "Gaming" },{ id: 2, type: "interests", group: "INTERESTS", label: "Music" },{ id: 3, type: "interests", group: "INTERESTS", label: "IRL" },{ id: 4, type: "interests", group: "INTERESTS", label: "Art" },{ id: 5, type: "interests", group: "INTERESTS", label: "STEM" },{ id: 6, type: "interests", group: "INTERESTS", label: "Sexuality" },{ id: 7, type: "interests", group: "INTERESTS", label: "N/A" },{ id: 102, type: "group", group: "DENTSU", label: "dentsu.exe", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 103, type: "group", group: "NOVA", label: "Nova", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 104, type: "group", group: "BEASTIEZ", label: "Beastiez", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 105, type: "group", group: "VICHIBAN", label: "VchiBan", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 110, type: "group", group: "HOLOLIVE", label: "Hololive", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 111, type: "group", group: "HOLOLIVE", label: "Hololive EN", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 112, type: "group", group: "HOLOLIVE", label: "Myth", shape: "dot", size: 17, font: { size: 20, color: "black" } },{ id: 116, type: "group", group: "HOLOLIVE", label: "Justice", shape: "dot", size: 17, font: { size: 20, color: "black" } },{ id: 117, type: "group", group: "HOLOLIVE", label: "Advent", shape: "dot", size: 17, font: { size: 20, color: "black" } },{ id: 120, type: "group", group: "HOLOLIVE", label: "HOLOSTARS EN", shape: "dot", size: 17, font: { size: 20, color: "black" } },{ id: 113, type: "group", group: "HOLOLIVE", label: "Hololive Indo", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 114, type: "group", group: "HOLOLIVE", label: "Hololive JP", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 115, type: "group", group: "FIRST_STAGE", label: "First Stage", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 118, type: "group", group: "TERI-YAKI", label: "TERI-yaki", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 119, type: "group", group: "NIJISANJI", label: "Nijisanji", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 202, type: "group", group: "LAB_BRATS", label: "Lab Brats", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 208, type: "group", group: "NEUROVERSE", label: "Neuroverse", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 201, type: "group", group: "VEIN_GANG", label: "Vein Gang", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 203, type: "group", group: "EN_GIRLYPOPS", label: "EN Girlypops", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 204, type: "group", group: "CRASHOUT_CREW", label: "Crashout Crew", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 205, type: "group", group: "VSHOJO", label: "ex-Vshjo", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 206, type: "group", group: "FLESHTUBERS", label: "Fleshtubers", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 207, type: "group", group: "INDIES", label: "Indies", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 209, type: "group", group: "INDO_GIRLYPOPS", label: "Indo Girlypops", shape: "dot", size: 30, font: { size: 20, color: "black" } },{ id: 1000, type: "talent", group: "INDIES", label: "Ironmouse", youtube: "https://www.youtube.com/@IronMouseParty", twitch: "https://www.twitch.tv/ironmouse", wiki: "wikilink" },{ id: 1001, type: "talent", group: "INDIES", label: "Zentraya", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1002, type: "talent", group: "INDIES", label: "Michi Mochievee", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1003, type: "talent", group: "INDIES", label: "Geega", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1005, type: "talent", group: "INDIES", label: "Silvervale", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1006, type: "talent", group: "INDIES", label: "K9Kuro", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1007, type: "talent", group: "INDIES", label: "Apricot (froot)", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1008, type: "talent", group: "INDIES", label: "Haruka Karibu", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1009, type: "talent", group: "INDIES", label: "AmaLee", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1010, type: "talent", group: "INDIES", label: "Henya the Genius", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1011, type: "talent", group: "INDIES", label: "Matara Kan", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1012, type: "talent", group: "INDIES", label: "Projket Melody", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1013, type: "talent", group: "INDIES", label: "Hajime", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1014, type: "talent", group: "INDIES", label: "nyanners", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1015, type: "talent", group: "INDIES", label: "Kson", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 1016, type: "talent", group: "INDIES", label: "Veibae", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 6001, type: "talent", group: "INDIES", label: "Akuma Nihmune", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 6002, type: "talent", group: "INDIES", label: "Bao the Whale", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 6003, type: "talent", group: "INDIES", label: "Yuzu", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 6004, type: "talent", group: "INDIES", label: "Camila", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 6005, type: "talent", group: "INDIES", label: "Lucy Pyre", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9001, type: "talent", group: "INDIES", label: "Bajiru", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9002, type: "talent", group: "INDIES", label: "dooby3D", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9003, type: "talent", group: "INDIES", label: "FroggyLoch", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9004, type: "talent", group: "INDIES", label: "Limealicious", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9005, type: "talent", group: "INDIES", label: "Sameko Saba", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9006, type: "talent", group: "INDIES", label: "Nimi Nightmare", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9007, type: "talent", group: "INDIES", label: "SixteenInMono", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9008, type: "talent", group: "INDIES", label: "Cottontail_VA", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9009, type: "talent", group: "INDIES", label: "Arielle_VT", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9010, type: "talent", group: "INDIES", label: "Starlight Daryl", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9011, type: "talent", group: "INDIES", label: "Issa Corva", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9013, type: "talent", group: "INDIES", label: "LordAethelstan", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9014, type: "talent", group: "INDIES", label: "obkatiekat", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9015, type: "talent", group: "INDIES", label: "U-san", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9016, type: "talent", group: "INDIES", label: "Saiiren", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9017, type: "talent", group: "INDIES", label: "Porcelain Maid", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9018, type: "talent", group: "INDIES", label: "Heavenly Father", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9019, type: "talent", group: "INDIES", label: "pumpkinpotion", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9020, type: "talent", group: "INDIES", label: "missshadowlovely", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9021, type: "talent", group: "INDIES", label: "Cyyu", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9022, type: "talent", group: "INDIES", label: "Croc", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9023, type: "talent", group: "INDIES", label: "ENVI", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9024, type: "talent", group: "INDIES", label: "lucia", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9025, type: "talent", group: "INDIES", label: "KloeKroc", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9026, type: "talent", group: "INDIES", label: "Derivakat", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9027, type: "talent", group: "INDIES", label: "fufu", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9028, type: "talent", group: "INDIES", label: "KokoNuts", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9029, type: "talent", group: "INDIES", label: "crelly", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9030, type: "talent", group: "INDIES", label: "Bluto", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9031, type: "talent", group: "INDIES", label: "chibidoki", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9032, type: "talent", group: "INDIES", label: "x3Dustco", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9033, type: "talent", group: "INDIES", label: "LaynaLazar", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9034, type: "talent", group: "INDIES", label: "papamutt", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9035, type: "talent", group: "INDIES", label: "Fefe", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9036, type: "talent", group: "INDIES", label: "Vexoria the Suneater", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9037, type: "talent", group: "INDIES", label: "Spite", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9038, type: "talent", group: "INDIES", label: "Cha Cha your Vtuber Mom", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9039, type: "talent", group: "INDIES", label: "el_XoX", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9040, type: "talent", group: "INDIES", label: "megladonvt", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9041, type: "talent", group: "INDIES", label: "Cerber", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9042, type: "talent", group: "INDIES", label: "tonkienator", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 9043, type: "talent", group: "INDIES", label: "Dokibird", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10001, type: "talent", group: "FLESHTUBERS", label: "Marcomeatball", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10002, type: "talent", group: "FLESHTUBERS", label: "Lesange", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10003, type: "talent", group: "FLESHTUBERS", label: "CDawgVA", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10004, type: "talent", group: "FLESHTUBERS", label: "Emily Hopkins", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10005, type: "talent", group: "FLESHTUBERS", label: "JessieCox", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10006, type: "talent", group: "FLESHTUBERS", label: "Doger", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10007, type: "talent", group: "FLESHTUBERS", label: "Nagzz", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10008, type: "talent", group: "FLESHTUBERS", label: "Ray", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 10009, type: "talent", group: "FLESHTUBERS", label: "Chris Broad", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11001, type: "talent", group: "HOLOLIVE", label: "Mori Calliope", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11014, type: "talent", group: "HOLOLIVE", label: "Takanashi Kiara", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11015, type: "talent", group: "HOLOLIVE", label: "Ninomae Ina’nis", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11002, type: "talent", group: "HOLOLIVE", label: "Nerissa Ravencroft", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11016, type: "talent", group: "HOLOLIVE", label: "Koseki Bijou", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11017, type: "talent", group: "HOLOLIVE", label: "Shiori Novella", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11018, type: "talent", group: "HOLOLIVE", label: "Fuwawa Abyssgard", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11019, type: "talent", group: "HOLOLIVE", label: "Mococo Abyssgard", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11003, type: "talent", group: "HOLOLIVE", label: "Elizabeth Rose Bloodflame", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11020, type: "talent", group: "HOLOLIVE", label: "Gigi Murin", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11021, type: "talent", group: "HOLOLIVE", label: "Cecilia Immergreen", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11022, type: "talent", group: "HOLOLIVE", label: "Raora Panthera", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11004, type: "talent", group: "HOLOLIVE", label: "Kureiji Ollie", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11005, type: "talent", group: "HOLOLIVE", label: "Moona Hoshinova", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11006, type: "talent", group: "HOLOLIVE", label: "MAyunda Risu", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11007, type: "talent", group: "HOLOLIVE", label: "Kaela Kovalskia", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11008, type: "talent", group: "HOLOLIVE", label: "Kobo Kanaeru", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11009, type: "talent", group: "HOLOLIVE", label: "Vestia Zeta", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 11013, type: "talent", group: "HOLOLIVE", label: "Banzoin Hakka", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 12001, type: "talent", group: "FIRST_STAGE", label: "Liron Lockheart", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 13001, type: "talent", group: "TERI-YAKI", label: "RaeLaviere", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 5001, type: "talent", group: "LAB_BRATS", label: "chrchie", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 5002, type: "talent", group: "LAB_BRATS", label: "Minikomew", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 5003, type: "talent", group: "LAB_BRATS", label: "Shoomimi", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 5005, type: "talent", group: "LAB_BRATS", label: "Elle_Minibot", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 8001, type: "talent", group: "NEUROVERSE", label: "Vedal", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 8002, type: "talent", group: "NEUROVERSE", label: "Neurosama", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 8003, type: "talent", group: "NEUROVERSE", label: "Evil Neuro", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 7001, type: "talent", group: "VICHIBAN", label: "Buffpup", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 7002, type: "talent", group: "VICHIBAN", label: "Ai Candii", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 7003, type: "talent", group: "VICHIBAN", label: "Rosedoodle", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 7004, type: "talent", group: "VICHIBAN", label: "ShiaBun", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 2001, type: "talent", group: "DENTSU", label: "Mint Fantome", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 2002, type: "talent", group: "DENTSU", label: "Victoria Roma", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 2003, type: "talent", group: "DENTSU", label: "Phoebe Chan", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 3001, type: "talent", group: "NOVA", label: "Akatsuki Hotaru", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 3002, type: "talent", group: "NOVA", label: "Hestia Happiness", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 3003, type: "talent", group: "NOVA", label: "Yutori Peke", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 3004, type: "talent", group: "NOVA", label: "Okamoto Nagi", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 4001, type: "talent", group: "BEASTIEZ", label: "Tori Oriane", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 4002, type: "talent", group: "BEASTIEZ", label: "PiaPiUFO", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 4003, type: "talent", group: "BEASTIEZ", label: "Beribug", youtube: "youtube", twitch: "twitch", wiki: "wikilink" },{ id: 4004, type: "talent", group: "BEASTIEZ", label: "Kairyu Crocodile", youtube: "youtube", twitch: "twitch", wiki: "wikilink" }

]);

const edges = new vis.DataSet([

{ from: 0, to: 9034, type: "interests" },{ from: 0, to: 9028, type: "interests" },{ from: 0, to: 1000, type: "interests" },{ from: 0, to: 1001, type: "interests" },{ from: 0, to: 1003, type: "interests" },{ from: 0, to: 9042, type: "interests" },{ from: 0, to: 9024, type: "interests" },{ from: 0, to: 9038, type: "interests" },{ from: 0, to: 1012, type: "interests" },{ from: 0, to: 9039, type: "interests" },{ from: 0, to: 9019, type: "interests" },{ from: 0, to: 9032, type: "interests" },{ from: 0, to: 9003, type: "interests" },{ from: 0, to: 7003, type: "interests" },{ from: 0, to: 1002, type: "interests" },{ from: 0, to: 11001, type: "interests" },{ from: 0, to: 5001, type: "interests" },{ from: 0, to: 6004, type: "interests" },{ from: 0, to: 9004, type: "interests" },{ from: 0, to: 9016, type: "interests" },{ from: 0, to: 5005, type: "interests" },{ from: 0, to: 1008, type: "interests" },{ from: 0, to: 1010, type: "interests" },{ from: 0, to: 9009, type: "interests" },{ from: 0, to: 9029, type: "interests" },{ from: 0, to: 1011, type: "interests" },{ from: 1, to: 10005, type: "interests" },{ from: 1, to: 10006, type: "interests" },{ from: 1, to: 10007, type: "interests" },{ from: 1, to: 10008, type: "interests" },{ from: 1, to: 10001, type: "interests" },{ from: 1, to: 10003, type: "interests" },{ from: 1, to: 10004, type: "interests" },{ from: 1, to: 9004, type: "interests" },{ from: 1, to: 1001, type: "interests" },{ from: 1, to: 9033, type: "interests" },{ from: 1, to: 9018, type: "interests" },{ from: 1, to: 9009, type: "interests" },{ from: 1, to: 1008, type: "interests" },{ from: 1, to: 1010, type: "interests" },{ from: 1, to: 1013, type: "interests" },{ from: 1, to: 1003, type: "interests" },{ from: 1, to: 9017, type: "interests" },{ from: 1, to: 9016, type: "interests" },{ from: 1, to: 7002, type: "interests" },{ from: 1, to: 9043, type: "interests" },{ from: 1, to: 1000, type: "interests" },{ from: 1, to: 1009, type: "interests" },{ from: 1, to: 1011, type: "interests" },{ from: 1, to: 1012, type: "interests" },{ from: 1, to: 1014, type: "interests" },{ from: 1, to: 1007, type: "interests" },{ from: 1, to: 9025, type: "interests" },{ from: 1, to: 9021, type: "interests" },{ from: 1, to: 9024, type: "interests" },{ from: 1, to: 9020, type: "interests" },{ from: 1, to: 9019, type: "interests" },{ from: 1, to: 9002, type: "interests" },{ from: 1, to: 9006, type: "interests" },{ from: 1, to: 9007, type: "interests" },{ from: 1, to: 9013, type: "interests" },{ from: 1, to: 3001, type: "interests" },{ from: 1, to: 3002, type: "interests" },{ from: 1, to: 3003, type: "interests" },{ from: 1, to: 3004, type: "interests" },{ from: 1, to: 2001, type: "interests" },{ from: 1, to: 2002, type: "interests" },{ from: 1, to: 4001, type: "interests" },{ from: 1, to: 4002, type: "interests" },{ from: 1, to: 4003, type: "interests" },{ from: 1, to: 4004, type: "interests" },{ from: 1, to: 6003, type: "interests" },{ from: 1, to: 1002, type: "interests" },{ from: 1, to: 9031, type: "interests" },{ from: 1, to: 7004, type: "interests" },{ from: 1, to: 9022, type: "interests" },{ from: 1, to: 13001, type: "interests" },{ from: 2, to: 1000, type: "interests" },{ from: 2, to: 1002, type: "interests" },{ from: 2, to: 1005, type: "interests" },{ from: 2, to: 1006, type: "interests" },{ from: 2, to: 1007, type: "interests" },{ from: 2, to: 1009, type: "interests" },{ from: 2, to: 1011, type: "interests" },{ from: 2, to: 1014, type: "interests" },{ from: 2, to: 1015, type: "interests" },{ from: 2, to: 2001, type: "interests" },{ from: 2, to: 2002, type: "interests" },{ from: 2, to: 2003, type: "interests" },{ from: 2, to: 3001, type: "interests" },{ from: 2, to: 3002, type: "interests" },{ from: 2, to: 3003, type: "interests" },{ from: 2, to: 3004, type: "interests" },{ from: 2, to: 4001, type: "interests" },{ from: 2, to: 4002, type: "interests" },{ from: 2, to: 4003, type: "interests" },{ from: 2, to: 4004, type: "interests" },{ from: 2, to: 6001, type: "interests" },{ from: 2, to: 6002, type: "interests" },{ from: 2, to: 6003, type: "interests" },{ from: 2, to: 6004, type: "interests" },{ from: 2, to: 9001, type: "interests" },{ from: 2, to: 9002, type: "interests" },{ from: 2, to: 9003, type: "interests" },{ from: 2, to: 9005, type: "interests" },{ from: 2, to: 9006, type: "interests" },{ from: 2, to: 9007, type: "interests" },{ from: 2, to: 9008, type: "interests" },{ from: 2, to: 9010, type: "interests" },{ from: 2, to: 9011, type: "interests" },{ from: 2, to: 9013, type: "interests" },{ from: 2, to: 9014, type: "interests" },{ from: 2, to: 9015, type: "interests" },{ from: 2, to: 9019, type: "interests" },{ from: 2, to: 9026, type: "interests" },{ from: 2, to: 9031, type: "interests" },{ from: 2, to: 9037, type: "interests" },{ from: 2, to: 9041, type: "interests" },{ from: 2, to: 9043, type: "interests" },{ from: 2, to: 5002, type: "interests" },{ from: 2, to: 11001, type: "interests" },{ from: 2, to: 11014, type: "interests" },{ from: 2, to: 11015, type: "interests" },{ from: 2, to: 11002, type: "interests" },{ from: 2, to: 11016, type: "interests" },{ from: 2, to: 11017, type: "interests" },{ from: 2, to: 11018, type: "interests" },{ from: 2, to: 11019, type: "interests" },{ from: 2, to: 11003, type: "interests" },{ from: 2, to: 11020, type: "interests" },{ from: 2, to: 11021, type: "interests" },{ from: 2, to: 11022, type: "interests" },{ from: 2, to: 11004, type: "interests" },{ from: 2, to: 11005, type: "interests" },{ from: 2, to: 11006, type: "interests" },{ from: 2, to: 11007, type: "interests" },{ from: 2, to: 11008, type: "interests" },{ from: 2, to: 11009, type: "interests" },{ from: 2, to: 5005, type: "interests" },{ from: 2, to: 7001, type: "interests" },{ from: 2, to: 7004, type: "interests" },{ from: 2, to: 5001, type: "interests" },{ from: 2, to: 6005, type: "interests" },{ from: 2, to: 10004, type: "interests" },{ from: 2, to: 10002, type: "interests" },{ from: 2, to: 10001, type: "interests" },{ from: 2, to: 11013, type: "interests" },{ from: 2, to: 13001, type: "interests" },{ from: 3, to: 10001, type: "interests" },{ from: 3, to: 10002, type: "interests" },{ from: 3, to: 10003, type: "interests" },{ from: 3, to: 10004, type: "interests" },{ from: 3, to: 10005, type: "interests" },{ from: 3, to: 10006, type: "interests" },{ from: 3, to: 10007, type: "interests" },{ from: 3, to: 10008, type: "interests" },{ from: 3, to: 10009, type: "interests" },{ from: 3, to: 9016, type: "interests" },{ from: 3, to: 9008, type: "interests" },{ from: 3, to: 9033, type: "interests" },{ from: 4, to: 9032, type: "interests" },{ from: 4, to: 9003, type: "interests" },{ from: 4, to: 7003, type: "interests" },{ from: 4, to: 13001, type: "interests" },{ from: 5, to: 5005, type: "interests" },{ from: 5, to: 8001, type: "interests" },{ from: 5, to: 5003, type: "interests" },{ from: 5, to: 7002, type: "interests" },{ from: 6, to: 1012, type: "interests" },{ from: 6, to: 9039, type: "interests" },{ from: 6, to: 9036, type: "interests" },{ from: 6, to: 9040, type: "interests" },{ from: 7, to: 8002, type: "interests" },{ from: 7, to: 8003, type: "interests" },{ from: 102, to: 2001, type: "group" },{ from: 102, to: 2002, type: "group" },{ from: 102, to: 2003, type: "group" },{ from: 103, to: 3001, type: "group" },{ from: 103, to: 3002, type: "group" },{ from: 103, to: 3003, type: "group" },{ from: 103, to: 3004, type: "group" },{ from: 104, to: 4001, type: "group" },{ from: 104, to: 4002, type: "group" },{ from: 104, to: 4003, type: "group" },{ from: 104, to: 4004, type: "group" },{ from: 105, to: 7001, type: "group" },{ from: 105, to: 7002, type: "group" },{ from: 105, to: 7003, type: "group" },{ from: 105, to: 7004, type: "group" },{ from: 110, to: 111, type: "group" },{ from: 110, to: 113, type: "group" },{ from: 110, to: 114, type: "group" },{ from: 111, to: 112, type: "group" },{ from: 111, to: 116, type: "group" },{ from: 111, to: 117, type: "group" },{ from: 111, to: 120, type: "group" },{ from: 112, to: 11001, type: "group" },{ from: 112, to: 11014, type: "group" },{ from: 112, to: 11015, type: "group" },{ from: 116, to: 11003, type: "group" },{ from: 116, to: 11020, type: "group" },{ from: 116, to: 11021, type: "group" },{ from: 116, to: 11022, type: "group" },{ from: 117, to: 11002, type: "group" },{ from: 117, to: 11016, type: "group" },{ from: 117, to: 11017, type: "group" },{ from: 117, to: 11018, type: "group" },{ from: 117, to: 11019, type: "group" },{ from: 120, to: 11013, type: "group" },{ from: 113, to: 11004, type: "group" },{ from: 113, to: 11005, type: "group" },{ from: 113, to: 11006, type: "group" },{ from: 113, to: 11007, type: "group" },{ from: 113, to: 11008, type: "group" },{ from: 113, to: 11009, type: "group" },{ from: 115, to: 12001, type: "group" },{ from: 118, to: 13001, type: "group" },{ from: 202, to: 5001, type: "group" },{ from: 202, to: 5002, type: "group" },{ from: 202, to: 5003, type: "group" },{ from: 202, to: 5005, type: "group" },{ from: 208, to: 8001, type: "group" },{ from: 208, to: 8002, type: "group" },{ from: 208, to: 8003, type: "group" },{ from: 201, to: 1000, type: "group", dashes: true},{ from: 201, to: 1014, type: "group", dashes: true},{ from: 201, to: 9013, type: "group", dashes: true},{ from: 201, to: 10003, type: "group", dashes: true},{ from: 203, to: 6001, type: "group", dashes: true},{ from: 203, to: 6002, type: "group", dashes: true},{ from: 203, to: 6003, type: "group", dashes: true},{ from: 203, to: 6004, type: "group", dashes: true},{ from: 203, to: 6005, type: "group", dashes: true},{ from: 204, to: 1009, type: "group", dashes: true},{ from: 204, to: 9021, type: "group", dashes: true},{ from: 204, to: 9017, type: "group", dashes: true},{ from: 204, to: 9020, type: "group", dashes: true},{ from: 205, to: 1000, type: "group", dashes: true},{ from: 205, to: 1001, type: "group", dashes: true},{ from: 205, to: 1002, type: "group", dashes: true},{ from: 205, to: 1003, type: "group", dashes: true},{ from: 205, to: 1004, type: "group", dashes: true},{ from: 205, to: 1005, type: "group", dashes: true},{ from: 205, to: 1006, type: "group", dashes: true},{ from: 205, to: 1007, type: "group", dashes: true},{ from: 205, to: 1008, type: "group", dashes: true},{ from: 205, to: 1009, type: "group", dashes: true},{ from: 205, to: 1010, type: "group", dashes: true},{ from: 205, to: 1011, type: "group", dashes: true},{ from: 205, to: 1012, type: "group", dashes: true},{ from: 205, to: 1013, type: "group", dashes: true},{ from: 205, to: 1014, type: "group", dashes: true},{ from: 205, to: 1015, type: "group", dashes: true},{ from: 205, to: 1016, type: "group", dashes: true},{ from: 205, to: 102, type: "group", dashes: true},{ from: 205, to: 103, type: "group", dashes: true},{ from: 205, to: 104, type: "group", dashes: true},{ from: 206, to: 10001, type: "group", dashes: true},{ from: 206, to: 10002, type: "group", dashes: true},{ from: 206, to: 10003, type: "group", dashes: true},{ from: 206, to: 10004, type: "group", dashes: true},{ from: 206, to: 10005, type: "group", dashes: true},{ from: 206, to: 10006, type: "group", dashes: true},{ from: 206, to: 10007, type: "group", dashes: true},{ from: 206, to: 10008, type: "group", dashes: true},{ from: 206, to: 10009, type: "group", dashes: true},{ from: 207, to: 5001, type: "group", dashes: true},{ from: 207, to: 5002, type: "group", dashes: true},{ from: 207, to: 5003, type: "group", dashes: true},{ from: 207, to: 5005, type: "group", dashes: true},{ from: 207, to: 6001, type: "group", dashes: true},{ from: 207, to: 6002, type: "group", dashes: true},{ from: 207, to: 6003, type: "group", dashes: true},{ from: 207, to: 6004, type: "group", dashes: true},{ from: 207, to: 7001, type: "group", dashes: true},{ from: 207, to: 7002, type: "group", dashes: true},{ from: 207, to: 7003, type: "group", dashes: true},{ from: 207, to: 7004, type: "group", dashes: true},{ from: 207, to: 8001, type: "group", dashes: true},{ from: 207, to: 8002, type: "group", dashes: true},{ from: 207, to: 8003, type: "group", dashes: true},{ from: 207, to: 9001, type: "group", dashes: true},{ from: 207, to: 9002, type: "group", dashes: true},{ from: 207, to: 9003, type: "group", dashes: true},{ from: 207, to: 9004, type: "group", dashes: true},{ from: 207, to: 9005, type: "group", dashes: true},{ from: 207, to: 9006, type: "group", dashes: true},{ from: 207, to: 9007, type: "group", dashes: true},{ from: 207, to: 9008, type: "group", dashes: true},{ from: 207, to: 9009, type: "group", dashes: true},{ from: 207, to: 9010, type: "group", dashes: true},{ from: 207, to: 9011, type: "group", dashes: true},{ from: 207, to: 9012, type: "group", dashes: true},{ from: 207, to: 9013, type: "group", dashes: true},{ from: 207, to: 9014, type: "group", dashes: true},{ from: 207, to: 9015, type: "group", dashes: true},{ from: 207, to: 9016, type: "group", dashes: true},{ from: 207, to: 9017, type: "group", dashes: true},{ from: 207, to: 9018, type: "group", dashes: true},{ from: 207, to: 9019, type: "group", dashes: true},{ from: 207, to: 9020, type: "group", dashes: true},{ from: 207, to: 9021, type: "group", dashes: true},{ from: 207, to: 9022, type: "group", dashes: true},{ from: 207, to: 9023, type: "group", dashes: true},{ from: 207, to: 9024, type: "group", dashes: true},{ from: 207, to: 9025, type: "group", dashes: true},{ from: 207, to: 9026, type: "group", dashes: true},{ from: 207, to: 9027, type: "group", dashes: true},{ from: 207, to: 9028, type: "group", dashes: true},{ from: 207, to: 9029, type: "group", dashes: true},{ from: 207, to: 9030, type: "group", dashes: true},{ from: 207, to: 9030, type: "group", dashes: true},{ from: 207, to: 9031, type: "group", dashes: true},{ from: 207, to: 9032, type: "group", dashes: true},{ from: 207, to: 9033, type: "group", dashes: true},{ from: 207, to: 9034, type: "group", dashes: true},{ from: 207, to: 9035, type: "group", dashes: true},{ from: 207, to: 9036, type: "group", dashes: true},{ from: 207, to: 9037, type: "group", dashes: true},{ from: 207, to: 9038, type: "group", dashes: true},{ from: 207, to: 9039, type: "group", dashes: true},{ from: 207, to: 9040, type: "group", dashes: true},{ from: 207, to: 9041, type: "group", dashes: true},{ from: 207, to: 9042, type: "group", dashes: true},{ from: 207, to: 1000, type: "group", dashes: true},{ from: 207, to: 1001, type: "group", dashes: true},{ from: 207, to: 1002, type: "group", dashes: true},{ from: 207, to: 1003, type: "group", dashes: true},{ from: 207, to: 1004, type: "group", dashes: true},{ from: 207, to: 1005, type: "group", dashes: true},{ from: 207, to: 1006, type: "group", dashes: true},{ from: 207, to: 1007, type: "group", dashes: true},{ from: 207, to: 1008, type: "group", dashes: true},{ from: 207, to: 1009, type: "group", dashes: true},{ from: 207, to: 1010, type: "group", dashes: true},{ from: 207, to: 1011, type: "group", dashes: true},{ from: 207, to: 1012, type: "group", dashes: true},{ from: 207, to: 1013, type: "group", dashes: true},{ from: 207, to: 1014, type: "group", dashes: true},{ from: 207, to: 1015, type: "group", dashes: true},{ from: 207, to: 1016, type: "group", dashes: true},{ from: 207, to: 2001, type: "group", dashes: true},{ from: 207, to: 2002, type: "group", dashes: true},{ from: 207, to: 2003, type: "group", dashes: true},{ from: 207, to: 4001, type: "group", dashes: true},{ from: 207, to: 4002, type: "group", dashes: true},{ from: 207, to: 4003, type: "group", dashes: true},{ from: 207, to: 4004, type: "group", dashes: true},{ from: 207, to: 6005, type: "group", dashes: true},{ from: 207, to: 9043, type: "group", dashes: true},{ from: 207, to: 3001, type: "group", dashes: true},{ from: 207, to: 3002, type: "group", dashes: true},{ from: 207, to: 3003, type: "group", dashes: true},{ from: 207, to: 3004, type: "group", dashes: true},{ from: 209, to: 11004, type: "group", dashes: true},{ from: 209, to: 11005, type: "group", dashes: true},{ from: 209, to: 11006, type: "group", dashes: true},{ from: 209, to: 11007, type: "group", dashes: true},{ from: 209, to: 11008, type: "group", dashes: true},{ from: 209, to: 11009, type: "group", dashes: true},{ from: 209, to: 13001, type: "group", dashes: true},{ from: 209, to: 1002, type: "group", dashes: true},{ from: 1000, to: 1001, type: "collab" },{ from: 1000, to: 1011, type: "collab" }

]);
























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



//need to get current network here















