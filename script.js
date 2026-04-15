
// want to import nodes and edges from seperate file to keep things readable
//import { nodes, edges } from "data.js";


//need to figure out how we go from import to filter as the edge/node data needs to pass through the filter before going into the network




//variables for node styles, this is for properties for nodes by type

//for group nodes
var typeGroupShape = "dot";
var typeGroupSize = 30;


var nodeLabelSize = 16;



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



/**
 * In this example we do not mutate nodes or edges source data.
 */
const nodes = new vis.DataSet([
// vshojo
	{ id: 0, label: "ex-Vshjo", group: "Vshojo", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },


      // dentsu.exe
	{ id: 100, label: "dentsu.exe", type: "group", group: "dentsu", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, color: "black" } },
	{ id: 101, label: "Mint Fantome", type: "talent", group: "dentsu" },
	{ id: 102, label: "Victoria Roma", type: "talent", group: "dentsu" },
	{ id: 103, label: "Phoebe Chan", type: "talent", group: "dentsu" },

    // NOVA
	{ id: 200, label: "Nova", type: "group", group: "NOVA", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 201, label: "Akatsuki Hotaru", type: "talent", group: "NOVA" },
	{ id: 202, label: "Hestia Happiness", type: "talent", group: "NOVA" },
	{ id: 203, label: "Yutori Peke", type: "talent", group: "NOVA" },
	{ id: 204, label: "Okamoto Nagi", type: "talent", group: "NOVA" },

    // Beastiez
	{ id: 300, label: "Beastiez", type: "group", group: "Beastiez", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 301, label: "Tori Oriane", group: "Beastiez" },
	{ id: 302, label: "PiaPiUFO", group: "Beastiez" },
	{ id: 303, label: "Beribug", group: "Beastiez" },
	{ id: 304, label: "Kairyu Crocodile", group: "Beastiez" },

      // Vichi Bon
	{ id: 400, label: "VchiBan", group: "Vichi_Bon", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },
	{ id: 401, label: "Buffpup", group: "Vichi_Bon" },
	{ id: 402, label: "Ai Candii", group: "Vichi_Bon" },
	{ id: 403, label: "Rosedoodle", group: "Vichi_Bon" },
	{ id: 404, label: "ShiaBun", group: "Vichi_Bon" },


      // neuroverse
	{ id: 600, label: "Neuroverse", group: "Neuroverse", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 601, label: "Vedal", group: "Neuroverse" },
	{ id: 602, label: "Neurosama", group: "Neuroverse" },
	{ id: 603, label: "Evil Neuro", group: "Neuroverse" },


      // indie
	{ id: 800, label: "Indies", group: "Indies", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, }  },


	{ id: 1, label: "Ironmouse", group: "Indies" },
	{ id: 2, label: "Michi Mochievee", group: "Indies" },
	{ id: 3, label: "Geega", group: "Indies" },
	{ id: 4, label: "Zentraya", group: "Indies" },
	{ id: 5, label: "Silvervale", group: "Indies" },
	{ id: 6, label: "K9Kuro", group: "Indies" },
	{ id: 7, label: "Apricot (froot)", group: "Indies" },
	{ id: 8, label: "Haruka Karibu", group: "Indies" },
	{ id: 9, label: "AmaLee", group: "Indies" },
	{ id: 10, label: "Henya the Genius", group: "Indies" },
	{ id: 11, label: "Matara Kan", group: "Indies" },
	{ id: 12, label: "Projket Melody", group: "Indies" },
	{ id: 13, label: "Hajime", group: "Indies" },
	{ id: 14, label: "nyanners", group: "Indies" },
	{ id: 15, label: "Kson", group: "Indies" },
	{ id: 16, label: "Veibae", group: "Indies" },

	{ id: 501, label: "chrchie", group: "Indies" },
	{ id: 502, label: "Minikomew", group: "Indies" },
	{ id: 503, label: "Shoomimi", group: "Indies" },
	{ id: 504, label: "Cerber", group: "Indies" },
	{ id: 505, label: "Elle_Minibot", group: "Indies" },

	{ id: 701, label: "Akuma Nihmune", group: "Indies" },
	{ id: 702, label: "Bao the Whale", group: "Indies" },
	{ id: 703, label: "Yuzu", group: "Indies" },
	{ id: 704, label: "Camila", group: "Indies" },
	{ id: 705, label: "tonkienator", group: "Indies" },

	{ id: 801, label: "Bajiru", group: "Indies" },
	{ id: 802, label: "dooby3D", group: "Indies" },
	{ id: 803, label: "FroggyLoch", group: "Indies" },
	{ id: 804, label: "Limealicious", group: "Indies" },
	{ id: 805, label: "Sameko Saba", group: "Indies" },
	{ id: 806, label: "Nimi Nightmare", group: "Indies" },
	{ id: 807, label: "SixteenInMono", group: "Indies" },
	{ id: 808, label: "Cottontail_VA", group: "Indies" },
	{ id: 809, label: "Arielle_VT", group: "Indies" },
	{ id: 810, label: "Starlight Daryl", group: "Indies" },
	{ id: 811, label: "Issa Corva", group: "Indies" },
	{ id: 813, label: "LordAethelstan", group: "Indies" },
	{ id: 814, label: "obkatiekat", group: "Indies" },
	{ id: 815, label: "U-san", group: "Indies" },
	{ id: 816, label: "Saiiren", group: "Indies" },
	{ id: 817, label: "Porcelain Maid", group: "Indies" },
	{ id: 818, label: "Heavenly Father", group: "Indies" },	
	{ id: 819, label: "pumpkinpotion", group: "Indies" },
	{ id: 820, label: "missshadowlovely", group: "Indies" },
	{ id: 821, label: "Cyyu", group: "Indies" },


    // fleshtubers
	{ id: 900, label: "Fleshtubers", type: "group", group: "Fleshtubers", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 901, label: "Marcomeatball", group: "Fleshtubers" },
	{ id: 902, label: "Lesange", group: "Fleshtubers" },
	{ id: 903, label: "CDawgVA", group: "Fleshtubers" },
	{ id: 904, label: "Emily Hopkins", group: "Fleshtubers" },
	{ id: 905, label: "Jessie", group: "Fleshtubers" },
	{ id: 906, label: "Doger", group: "Fleshtubers" },
	{ id: 907, label: "Nagzz", group: "Fleshtubers" },
	{ id: 908, label: "Ray", group: "Fleshtubers" },


    // INDO girlypops
	{ id: 1000, label: "Indo Girlypops", group: "Indo_Girlypops", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },
	{ id: 1001, label: "RaeLaviere", interest: "Gaming", group: "Indo_Girlypops" },


    // Hololive folks
	{ id: 2000, label: "Hololive", group: "Hololive", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 2001, label: "Mori Calliope", group: "Hololive" },
	{ id: 2002, label: "Nerissa Ravencroft", group: "Hololive" },
	{ id: 2003, label: "Elizabeth Rose Bloodflame", group: "Hololive" },
	{ id: 2004, label: "Kureiji Ollie", group: "Hololive" },
	{ id: 2005, label: "Moona Hoshinova", group: "Hololive" },
	{ id: 2006, label: "MAyunda Risu", group: "Hololive" },
	{ id: 2007, label: "Kaela Kovalskia", group: "Hololive" },
	{ id: 2008, label: "Kobo Kanaeru", group: "Hololive" }, 
	{ id: 2009, label: "Vestia Zeta", group: "Hololive" },
	

    // vein gang
	{ id: 4000, label: "Vein Gang",  type: "group", group: "Viein_Gang", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },

	//balding with the boys
	{ id: 500, label: "balding", type: "group", group: "balding",  shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },

	// EN girlypops
	{ id: 700, label: "EN Girlypops", type: "group", group: "EN Girlypops", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },

	// crashout crew
	{ id: 5000, label: "Crashout Crew", type: "group", group: "EN Girlypops", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },



    // interest groups
	{ id: 3000, label: "Yapping", type: "interests", group: "interests",  },
	{ id: 3001, label: "Gaming", type: "interests", group: "interests", },
	{ id: 3002, label: "Music", type: "interests", group: "interests", },
	{ id: 3003, label: "IRL", type: "interests", group: "interests", },
	{ id: 3004, label: "Art", type: "interests", group: "interests", },
	{ id: 3005, label: "STEM", type: "interests", group: "interests", },	


]);




const edges = new vis.DataSet([

// FORMAL GROUPS

// vshojo

	

  //dentsu
	{
		from: 100,
		to: 800,
		type: "group",
//		color: { color: "yellow" },
	},
	{
		from: 100,
		to: 0,
		type: "group",
//		color: { color: "yellow" },
		dashes: true
	},

	{
		from: 100,
		to: 101,
		type: "group",
//		color: { color: "yellow" },
	},
	{
		from: 100,
		to: 102,
		type: "group",
//		color: { color: "yellow" },
	},
	{
		from: 100,
		to: 103,
		type: "group",
//		color: { color: "yellow" },
	},

  // NOVA
	{
		from: 200,
		to: 800,
		type: "group",
//		color: { color: "red" },
	},
	{
		from: 200,
		to: 0,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},

	{
		from: 200,
		to: 201,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 200,
		to: 202,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 200,
		to: 203,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 200,
		to: 204,
		type: "group",
//		color: { color: "blue" },
	},


// Beastiez
	{
		from: 300,
		to: 800,
		type: "group",
//		color: { color: "red" },
	},
	{
		from: 300,
		to: 0,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 300,
		to: 301,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 300,
		to: 302,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 300,
		to: 303,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 300,
		to: 304,
		type: "group",
//		color: { color: "blue" },
	},


  // Hololive
	{
		from: 2000,
		to: 2001,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 2000,
		to: 2002,
		type: "group",
//		color: { color: "blue" },
	},             
	{
		from: 2000,
		to: 2003,
		type: "group",
//		color: { color: "blue" },
	},             
	{
		from: 2000,
		to: 2004,
		type: "group",
//		color: { color: "blue" },
	},            
	{
		from: 2000,
		to: 2005,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 2000,
		to: 2006,
		type: "group",
//		color: { color: "blue" },
	},
	
	{
		from: 2000,
		to: 2007,
		type: "group",
//		color: { color: "blue" },
	},
	
	{
		from: 2000,
		to: 2008,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 2000,
		to: 2009,
		type: "group",
//		color: { color: "blue" },
	},
	




// VchiBan
	{
		from: 400,
		to: 800,
		type: "group",
//		color: { color: "blue" },
	},  
	{
		from: 400,
		to: 401,
		type: "group",
//		color: { color: "blue" },
	},  
	{
		from: 400,
		to: 402,
		type: "group",
//		color: { color: "blue" },
	},  
	{
		from: 400,
		to: 403,
		type: "group",
//		color: { color: "blue" },
	},  
	{
		from: 400,
		to: 404,
		type: "group",
//		color: { color: "blue" },
	},  


// neuroverse
	{
		from: 600,
		to: 800,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 600,
		to: 601,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 600,
		to: 602,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 600,
		to: 603,
		type: "group",
//		color: { color: "blue" },
	},



// INFORMAL GROUPSS


// Indo girlypops

	{
		from: 1000,
		to: 1001,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 1000,
		to: 2,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 1000,
		to: 2004,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 1000,
		to: 2005,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 

	{
		from: 1000,
		to: 2006,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 	{
		from: 1000,
		to: 2007,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 	{
		from: 1000,
		to: 2008,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 	{
		from: 1000,
		to: 2009,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 



// neuroverse affiliated
	{
		from: 600,
		to: 501,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 600,
		to: 502,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 600,
		to: 504,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 600,
		to: 505,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 600,
		to: 701,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 600,
		to: 704,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},



// vein gang
	{
		from: 4000,
		to: 1,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 4000,
		to: 903,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 4000,
		to: 813,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 
	{
		from: 4000,
		to: 14,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	}, 



// fleshtubers
	{
		from: 900,
		to: 901,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 902,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 903,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 904,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 905,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 906,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 907,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 900,
		to: 908,
		type: "group",
//		color: { color: "blue" },
	},


// indy 
	{
		from: 800,
		to: 801,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 802,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 803,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 804,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 805,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 806,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 807,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 808,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 809,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 810,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 811,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 812,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 813,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 814,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 501,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 502,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 503,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 504,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 505,
		type: "group",
//		color: { color: "blue" },
	},


	{
		from: 800,
		to: 701,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 702,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 703,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 704,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 705,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 815,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 816,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 817,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 818,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 819,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 820,
		type: "group",
//		color: { color: "blue" },
	},

	{
		from: 800,
		to: 821,
		type: "group",
//		color: { color: "blue" },
	},



	{
		from: 800,
		to: 1,
		type: "group",
//		color: { color: "blue" },
	},




	{
		from: 800,
		to: 2,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 3,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 4,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 5,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 6,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 7,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 8,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 9,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 10,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 11,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 12,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 13,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 14,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 15,
		type: "group",
//		color: { color: "blue" },
	},
	{
		from: 800,
		to: 16,
		type: "group",
//		color: { color: "blue" },
	},


// balding
	{
		from: 500,
		to: 501,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 500,
		to: 502,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 500,
		to: 503,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 500,
		to: 504,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 500,
		to: 505,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 500,
		to: 801,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},

	


// EN girlypops

	{
		from: 700,
		to: 701,
		type: "group",
		//color: { color: "blue" },
		dashes: true
	},
	{
		from: 700,
		to: 702,
		type: "group",
		//color: { color: "blue" },
		dashes: true
	},
	{
		from: 700,
		to: 703,
		type: "group",
		//color: { color: "blue" },
		dashes: true
	},
	{
		from: 700,
		to: 704,
		type: "group",
		//color: { color: "blue" },
		dashes: true
	},
	{
		from: 700,
		to: 705,
		type: "group",
		//color: { color: "blue" },
		dashes: true
	},



// crashout crew
	{
		from: 5000,
		to: 9,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 5000,
		to: 820,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 5000,
		to: 817,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	
	{
		from: 5000,
		to: 821,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},	




//ex Vshjo

	{
		from: 0,
		to: 1,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 2,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 3,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 4,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 5,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 6,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 7,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 8,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 9,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 10,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 11,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 12,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 13,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 14,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 15,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},
	{
		from: 0,
		to: 16,
		type: "group",
//		color: { color: "blue" },
		dashes: true
	},








// INTERESTS

// michi
	{
		from: 2,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 2,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 2,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

// mouse
	{
		from: 1,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 1,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 1,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// geega
	{
		from: 3,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 3,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

// zen
	{
		from: 4,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 4,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


// silvervale

	// k9kuro
	{
		from: 6,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 6,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// apricot
	{
		from: 7,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 7,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 7,
		to: 3003,
		type: "interests",
//		color: { color: "blue" },
	},

	// haruka
	{
		from: 8,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// amalee
	{
		from: 9,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 9,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// henya
	{
		from: 10,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 10,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},


	// matara
	{
		from: 11,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},

	{
		from: 11,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	{
		from: 11,
		to: 3003,
		type: "interests",
//		color: { color: "blue" },
	},

	// melody
	{
		from: 12,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 12,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// hajime
	{
		from: 13,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// nyanners
	{
		from: 14,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 14,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

//kson
	{
		from: 15,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 15,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 15,
		to: 3003,
		type: "interests",
//		color: { color: "blue" },
	},

	// veibae



// mint

	{
		from: 101,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 101,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


// victoria
	{
		from: 102,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// phoebe
	{
		from: 103,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


// hotaru
	{
		from: 201,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 201,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	// hestia
	{
		from: 202,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// peke
	{
		from: 203,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 203,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// nagi
	{
		from: 204,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 204,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},




// tori
	{
		from: 301,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	// Pia
	{
		from: 302,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 302,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


// beri
	{
		from: 303,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 303,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	// kairyu
	{
		from: 304,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},




	// buff
	{
		from: 401,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	// candii
	{
		from: 402,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	// rosedoodle
	{
		from: 403,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 403,
		to: 3004,
		type: "interests",
//		color: { color: "blue" },
	},


	//shibun
	{
		from: 404,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 404,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},



// vedal
	{
		from: 601,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 601,
		to: 3005,
		type: "interests",
//		color: { color: "blue" },
	},


	// chrchie
	{
		from: 501,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	{
		from: 501,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	
	//minikomew
	{
		from: 502,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	// shoomimi
	{
		from: 503,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 503,
		to: 3005,
		type: "interests",
//		color: { color: "blue" },
	},

	// cerber
	{
		from: 504,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 504,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


// elle
	{
		from: 505,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 505,
		to: 3005,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 505,
		to: 3004,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 505,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},




//Numi
	{
		from: 701,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 701,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 701,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	//bao
	{
		from: 702,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 702,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	//yuzu
	{
		from: 703,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 703,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	//camila
	{
		from: 704,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 704,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 704,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	// tonkienator
	{
		from: 705,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 705,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


// bajiru
	{
		from: 801,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// dooby
	{
		from: 802,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// froggy
	{
		from: 803,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 803,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 803,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 803,
		to: 3004,
		type: "interests",
//		color: { color: "blue" },
	},

	// lime
	{
		from: 804,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// saba

	// nimi

	// mono
	{
		from: 807,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 807,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

// cottontail

	// arielle
	{
		from: 809,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 809,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// daryl
	{
		from: 810,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// issa

	// aethel

	// katie

	// usan
	{
		from: 815,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 815,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 815,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},

	// saii
	{
		from: 816,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 816,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 816,
		to: 3003,
		type: "interests",
//		color: { color: "blue" },
	},



	// porcelian maid
	{
		from: 817,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 817,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},

	// heavenly
	{
		from: 818,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 818,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},


	// pumpkin
	{
		from: 819,
		to: 3000,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 819,
		to: 3001,
		type: "interests",
//		color: { color: "blue" },
	},
	{
		from: 819,
		to: 3002,
		type: "interests",
//		color: { color: "blue" },
	},


	// miss shadow lovely

	// cyyu




]);




// VARIABLE SET UP


// this sets what elements are providing which filter inputs
const nodeFilterSelector = document.getElementById("nodeFilterSelect");




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

// this handles the edgesFilerValues update
function updateEdgeFilters() {

  	// this sees which radio button is selected
	const selected = document.querySelector('input[name="edgesFilter"]:checked');

	edgesFilterValues.group = selected?.value === "group";
	edgesFilterValues.interests = selected?.value === "interests";
	edgesFilterValues.collab = selected?.value === "collab";

	console.log("Updated filters:", edgesFilterValues);

    // 👉 If you're using a DataView or graph, refresh it here
    // dataView.refresh();
}


// need to add a function here to filter the noddes



  // Attach listener to each radio button
edgeFilters.forEach(radio => {
	radio.addEventListener("change", updateEdgeFilters);
});

  // Optional: run once on page load
updateEdgeFilters();











/*
      filter function should return true or false
      based on whether item in DataView satisfies a given condition.
    */
const nodesFilter = (node) => {
	if (nodeFilterValue === "") {
		return true;
	}
	switch (nodeFilterValue) {
	case "kid":
		return node.age === "kid";
	case "adult":
		return node.age === "adult";
	case "male":
		return node.gender === "male";
	case "female":
		return node.gender === "female";
	default:
		return true;
	}
};









const edgesFilter = (edge) => {
	return edgesFilterValues[edge.type];
};

const nodesView = new vis.DataView(nodes, { filter: nodesFilter });
const edgesView = new vis.DataView(edges, { filter: edgesFilter });









nodeFilterSelector.addEventListener("change", (e) => {
  // set new value to filter variable
	nodeFilterValue = e.target.value;
  /*
        refresh DataView,
        so that its filter function is re-calculated with the new variable
      */
	nodesView.refresh();
});



edgeFilters.forEach((filter) =>
	filter.addEventListener("change", (e) => {
		const { value, checked } = e.target;
		edgesFilterValues[value] = checked;
		edgesView.refresh();
		
	}),
	);

startNetwork({ nodes: nodesView, edges: edgesView });