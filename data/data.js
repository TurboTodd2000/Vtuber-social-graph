


/**
 * In this example we do not mutate nodes or edges source data.
 */

const nodes = new vis.DataSet([
// vshojo
	{ id: 0, label: "ex-Vshjo", type: "group", group: "Vshojo", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },


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
	{ id: 301, label: "Tori Oriane", type: "talent", group: "Beastiez" },
	{ id: 302, label: "PiaPiUFO", type: "talent",  group: "Beastiez" },
	{ id: 303, label: "Beribug", type: "talent",  group: "Beastiez" },
	{ id: 304, label: "Kairyu Crocodile", type: "talent", group: "Beastiez" },

      // Vichi Bon
	{ id: 400, label: "VchiBan", group: "Vichi_Bon", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },
	{ id: 401, label: "Buffpup", type: "talent", group: "Vichi_Bon" },
	{ id: 402, label: "Ai Candii", type: "talent", group: "Vichi_Bon" },
	{ id: 403, label: "Rosedoodle", type: "talent", group: "Vichi_Bon" },
	{ id: 404, label: "ShiaBun", type: "talent", group: "Vichi_Bon" },


      // neuroverse
	{ id: 600, label: "Neuroverse", group: "Neuroverse", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 601, label: "Vedal", type: "talent", group: "Neuroverse" },
	{ id: 602, label: "Neurosama", type: "talent", group: "Neuroverse" },
	{ id: 603, label: "Evil Neuro", type: "talent", group: "Neuroverse" },



//first stage
	{ id: 6000, label: "Liron Lockheart", type: "talent", group: "First Stage" },






      // indie
	{ id: 800, label: "Indies", group: "Indies", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, }  },


	{ id: 1, label: "Ironmouse", type: "talent", group: "Indies", youtube: "https://www.youtube.com/@IronMouseParty", twitch: "https://www.twitch.tv/ironmouse" },


	{ id: 2, label: "Michi Mochievee", type: "talent", group: "Indies" },
	{ id: 3, label: "Geega", type: "talent", group: "Indies" },
	{ id: 4, label: "Zentraya", type: "talent", group: "Indies" },
	{ id: 5, label: "Silvervale", type: "talent", group: "Indies" },
	{ id: 6, label: "K9Kuro", type: "talent", group: "Indies" },
	{ id: 7, label: "Apricot (froot)", type: "talent", group: "Indies" },
	{ id: 8, label: "Haruka Karibu", type: "talent", group: "Indies" },
	{ id: 9, label: "AmaLee", type: "talent", group: "Indies" },
	{ id: 10, label: "Henya the Genius", type: "talent", group: "Indies" },
	{ id: 11, label: "Matara Kan", type: "talent", group: "Indies" },
	{ id: 12, label: "Projket Melody", type: "talent", group: "Indies" },
	{ id: 13, label: "Hajime", type: "talent", group: "Indies" },
	{ id: 14, label: "nyanners", type: "talent", group: "Indies" },
	{ id: 15, label: "Kson", type: "talent", group: "Indies" },
	{ id: 16, label: "Veibae", type: "talent", group: "Indies" },

	{ id: 501, label: "chrchie", type: "talent", group: "Indies" },
	{ id: 502, label: "Minikomew", type: "talent", group: "Indies" },
	{ id: 503, label: "Shoomimi", type: "talent", group: "Indies" },
	{ id: 504, label: "Cerber", type: "talent", group: "Indies" },
	{ id: 505, label: "Elle_Minibot", type: "talent", group: "Indies" },

	{ id: 701, label: "Akuma Nihmune", type: "talent", group: "Indies" },
	{ id: 702, label: "Bao the Whale", type: "talent", group: "Indies" },
	{ id: 703, label: "Yuzu", type: "talent", group: "Indies" },
	{ id: 704, label: "Camila", type: "talent", group: "Indies" },
	{ id: 705, label: "tonkienator", type: "talent", group: "Indies" },
	//lucy pyre

	{ id: 801, label: "Bajiru", type: "talent", group: "Indies" },
	{ id: 802, label: "dooby3D", type: "talent", group: "Indies" },
	{ id: 803, label: "FroggyLoch", type: "talent", group: "Indies" },
	{ id: 804, label: "Limealicious", type: "talent", group: "Indies" },
	{ id: 805, label: "Sameko Saba", type: "talent", group: "Indies" },
	{ id: 806, label: "Nimi Nightmare", type: "talent", group: "Indies" },
	{ id: 807, label: "SixteenInMono", type: "talent", group: "Indies" },
	{ id: 808, label: "Cottontail_VA", type: "talent", group: "Indies" },
	{ id: 809, label: "Arielle_VT", type: "talent", group: "Indies" },
	{ id: 810, label: "Starlight Daryl", type: "talent", group: "Indies" },
	{ id: 811, label: "Issa Corva", type: "talent", group: "Indies" },
	{ id: 813, label: "LordAethelstan", type: "talent", group: "Indies" },
	{ id: 814, label: "obkatiekat", type: "talent", group: "Indies" },
	{ id: 815, label: "U-san", type: "talent", group: "Indies" },
	{ id: 816, label: "Saiiren", type: "talent", group: "Indies" },
	{ id: 817, label: "Porcelain Maid", type: "talent", group: "Indies" },
	{ id: 818, label: "Heavenly Father", type: "talent", group: "Indies" },	
	{ id: 819, label: "pumpkinpotion", type: "talent", group: "Indies" },
	{ id: 820, label: "missshadowlovely", type: "talent", group: "Indies" },
	{ id: 821, label: "Cyyu", type: "talent", group: "Indies" },
	{ id: 822, label: "Croc", type: "talent", group: "Indies" },
	{ id: 823, label: "ENVI", type: "talent", group: "Indies" },
	{ id: 824, label: "lucia", type: "talent", group: "Indies" },
	{ id: 825, label: "KloeKroc", type: "talent", group: "Indies" },
	{ id: 826, label: "Derivakat", type: "talent", group: "Indies" },
	{ id: 827, label: "fufu", type: "talent", group: "Indies" },
	{ id: 828, label: "KokoNuts", type: "talent", group: "Indies" },
	{ id: 829, label: "crelly", type: "talent", group: "Indies" },
	{ id: 830, label: "Bluto", type: "talent", group: "Indies" },
	{ id: 831, label: "chibidoki", type: "talent", group: "Indies" },
	{ id: 832, label: "x3Dustco", type: "talent", group: "Indies" },
	{ id: 833, label: "LaynaLazar", type: "talent", group: "Indies" },
	{ id: 834, label: "papamutt", type: "talent", group: "Indies" },
	{ id: 835, label: "Fefe", type: "talent", group: "Indies" },
	{ id: 836, label: "Vexoria the Suneater", type: "talent", group: "Indies" },
	{ id: 837, label: "Spite", type: "talent", group: "Indies" },
	{ id: 838, label: "Cha Cha your Vtuber Mom", type: "talent", group: "Indies" },
	{ id: 839, label: "el_XoX", type: "talent", group: "Indies" },
	{ id: 840, label: "megladonvt", type: "talent", group: "Indies" },

	



//aqua

//Zen collab partners
//baddaboom
	//fream
	//Mei
	//megalodon



	//ray collab
	
	//kumi
	//RubinSargasm
	



    // fleshtubers
	{ id: 900, label: "Fleshtubers", type: "group", group: "Fleshtubers", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 901, label: "Marcomeatball", type: "talent", group: "Fleshtubers" },
	{ id: 902, label: "Lesange", type: "talent", group: "Fleshtubers" },
	{ id: 903, label: "CDawgVA", type: "talent", group: "Fleshtubers" },
	{ id: 904, label: "Emily Hopkins", type: "talent", group: "Fleshtubers" },
	{ id: 905, label: "JessieCox", type: "talent", group: "Fleshtubers" },
	{ id: 906, label: "Doger", type: "talent", group: "Fleshtubers" },
	{ id: 907, label: "Nagzz", type: "talent", group: "Fleshtubers" },
	{ id: 908, label: "Ray", type: "talent", group: "Fleshtubers" },
	{ id: 909, label: "Chris Broad", type: "talent", group: "Fleshtubers" },


    // INDO girlypops
	{ id: 1000, label: "Indo Girlypops", group: "Indo_Girlypops", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },
	{ id: 1001, label: "RaeLaviere", type: "talent", group: "Indo_Girlypops" },


    // Hololive folks
	{ id: 2000, label: "Hololive", group: "Hololive", type: "group", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize,color: "black" } },
	
	{ id: 2010, label: "Hololive EN", group: "Hololive", type: "group", shape: typeGroupShape, size: typeSubgroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 2001, label: "Mori Calliope", type: "talent", group: "Hololive" },
	{ id: 2002, label: "Nerissa Ravencroft", type: "talent", group: "Hololive" },
	{ id: 2003, label: "Elizabeth Rose Bloodflame", type: "talent", group: "Hololive" },

	{ id: 2011, label: "Hololive Indo", group: "Hololive", type: "group", shape: typeGroupShape, size: typeSubgroupSize, font: { size: nodeLabelSize,color: "black" } },
	{ id: 2004, label: "Kureiji Ollie", type: "talent", group: "Hololive" },
	{ id: 2005, label: "Moona Hoshinova", type: "talent", group: "Hololive" },
	{ id: 2006, label: "MAyunda Risu", type: "talent", group: "Hololive" },
	{ id: 2007, label: "Kaela Kovalskia", type: "talent", group: "Hololive" },
	{ id: 2008, label: "Kobo Kanaeru", type: "talent", group: "Hololive" }, 
	{ id: 2009, label: "Vestia Zeta", type: "talent", group: "Hololive" },

	{ id: 2013, label: "Banzoin Hakka", type: "talent", group: "Hololive" },
	

	{ id: 2012, label: "Hololive JP", group: "Hololive", type: "group", shape: typeGroupShape, size: typeSubgroupSize, font: { size: nodeLabelSize,color: "black" } },


	

    // vein gang
	{ id: 4000, label: "Vein Gang",  type: "group", group: "Viein_Gang", shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },

	//balding with the boys
	{ id: 500, label: "Lab Rats", type: "group", group: "LabRats",  shape: typeGroupShape, size: typeGroupSize, font: { size: nodeLabelSize, } },

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
	{		from: 100, 		to: 800,		type: "group",	},
	{		from: 100,		to: 0,			type: "group",		dashes: true	},
	{		from: 100,		to: 101,		type: "group",	},
	{		from: 100,		to: 102,		type: "group",	},
	{		from: 100,		to: 103,		type: "group",	},


  // NOVA
	{		from: 200,		to: 800,		type: "group",	},
	{		from: 200,		to: 0,			type: "group",		dashes: true	},

	{		from: 200,		to: 201,		type: "group",	},
	{		from: 200,		to: 202,		type: "group",	},
	{		from: 200,		to: 203,		type: "group",	},
	{		from: 200,		to: 204,		type: "group",	},


// Beastiez
	{		from: 300,		to: 800,		type: "group",	},
	{		from: 300,		to: 0,			type: "group",		dashes: true,	},
	{		from: 300,		to: 301,		type: "group",	},
	{		from: 300,		to: 302,		type: "group",	},
	{		from: 300,		to: 303,		type: "group",	},
	{		from: 300,		to: 304,		type: "group",	},


  // Hololive

	{		from: 2000,		to: 2010,		type: "group",	},
	{		from: 2000,		to: 2011,		type: "group",	},   
	{		from: 2010,		to: 2003,		type: "group",	}, 
	{		from: 2010,		to: 2002,		type: "group",	}, 
	{		from: 2010,		to: 2001,		type: "group",	}, 
	{		from: 2011,		to: 2004,		type: "group",	},            
	{		from: 2011,		to: 2005,		type: "group",	},
	{		from: 2011,		to: 2006,		type: "group",	},
	{		from: 2011,		to: 2007,		type: "group",	},
	{		from: 2011,		to: 2008,		type: "group",	},
	{		from: 2011,		to: 2009,		type: "group",	},
	{		from: 2012,		to: 2000,		type: "group",	},
	{		from: 2010,		to: 2013,		type: "group",	},
	


// VchiBan
	{		from: 400,		to: 800,		type: "group",	},  
	{		from: 400,		to: 401,		type: "group",	},  
	{		from: 400,		to: 402,		type: "group",	},  
	{		from: 400,		to: 403,		type: "group",	},  
	{		from: 400,		to: 404,		type: "group",	},  


// neuroverse
	{		from: 600,		to: 800,		type: "group",	},
	{		from: 600,		to: 601,		type: "group",	},
	{		from: 600,		to: 602,		type: "group",	},
	{		from: 600,		to: 603,		type: "group", dashes: true	},





// INFORMAL GROUPSS


// Indo girlypops

	{		from: 1000,		to: 1001,		type: "group",		dashes: true	}, 
	{		from: 1000,		to: 2,		type: "group",		dashes: true	}, 
	{		from: 1000,		to: 2004,		type: "group",		dashes: true	}, 
	{		from: 1000,		to: 2005,		type: "group",		dashes: true	}, 

	{		from: 1000,		to: 2006,		type: "group",		dashes: true	}, 
	{		from: 1000,		to: 2007,		type: "group",		dashes: true	}, 	
	{		from: 1000,		to: 2008,		type: "group",		dashes: true	}, 	
	{		from: 1000,		to: 2009,		type: "group",		dashes: true	}, 



// neuroverse affiliated
	{  		from: 600,		to: 501,		type: "group",		dashes: true	},
	{		from: 600,		to: 502,		type: "group",		dashes: true	},
	{		from: 600,		to: 504,		type: "group",		dashes: true	},
	{		from: 600,		to: 505,		type: "group",		dashes: true	},
	{		from: 600,		to: 701,		type: "group",		dashes: true	},
	{		from: 600,		to: 704,		type: "group",		dashes: true	},
	



// vein gang
	{	from: 4000,		to: 1,		type: "group",		dashes: true	}, 
	{	from: 4000,		to: 903,		type: "group",		dashes: true	}, 
	{	from: 4000,		to: 813,		type: "group",		dashes: true	}, 
	{	from: 4000,		to: 14,		type: "group",		dashes: true	}, 



// fleshtubers
	{		from: 900,		to: 901,		type: "group",	},
	{	from: 900, to: 902, type: "group", },
	{	from: 900, to: 903, type: "group", },
	{	from: 900, to: 904, type: "group", },
	{	from: 900, to: 905, type: "group", },
	{	from: 900, to: 906, type: "group", },
	{	from: 900, to: 907, type: "group", },
	{	from: 900, to: 908, type: "group", },
	{	from: 900, to: 909, type: "group", },


// indy 
	{	from: 800, to: 801, type: "group", },
	{	from: 800, to: 802, type: "group", },
	{	from: 800, to: 803, type: "group", },
	{	from: 800, to: 804, type: "group", },
	{	from: 800, to: 805, type: "group", },
	{	from: 800, to: 806, type: "group", },
	{	from: 800, to: 807, type: "group", },
	{	from: 800, to: 808, type: "group", },
	{	from: 800, to: 809, type: "group", },
	{	from: 800, to: 810, type: "group", },
	{	from: 800, to: 811, type: "group", },
	{	from: 800, to: 812, type: "group", },
	{	from: 800, to: 813, type: "group", },
	{	from: 800, to: 814, type: "group", },

	{	from: 800, to: 501, type: "group", },
	{	from: 800, to: 502, type: "group", },
	{	from: 800, to: 503, type: "group", },
	{	from: 800, to: 504, type: "group", },
	{	from: 800, to: 505, type: "group", },

	{	from: 800, to: 701, type: "group", },
	{	from: 800, to: 702, type: "group", },
	{	from: 800, to: 703, type: "group", },
	{	from: 800, to: 704, type: "group", },
	{	from: 800, to: 705, type: "group", },

	{	from: 800, to: 815, type: "group", },
	{	from: 800, to: 816, type: "group", },
	{	from: 800, to: 817, type: "group", },
	{	from: 800, to: 818, type: "group", },
	{	from: 800, to: 819, type: "group", },
	{	from: 800, to: 820, type: "group", },
	{	from: 800, to: 821, type: "group", },
	{	from: 800, to: 1, type: "group", },
	{	from: 800, to: 822, type: "group", },
	{	from: 800, to: 823, type: "group", },
	{	from: 800, to: 824, type: "group", },
	{	from: 800, to: 825, type: "group", },
	{	from: 800, to: 826, type: "group", },
	{	from: 800, to: 827, type: "group", },
	{	from: 800, to: 828, type: "group", },
	{	from: 800, to: 829, type: "group", },
	{	from: 800, to: 830, type: "group", },
	{	from: 800, to: 831, type: "group", },
	{	from: 800, to: 832, type: "group", },
	{	from: 800, to: 833, type: "group", },
	{	from: 800, to: 834, type: "group", },
	{	from: 800, to: 835, type: "group", },
	{	from: 800, to: 836, type: "group", },

	{	from: 800, to: 837, type: "group", },
	{	from: 800, to: 838, type: "group", },

	{	from: 800, to: 2, type: "group", },
	{	from: 800, to: 3, type: "group", },
	{	from: 800, to: 4, type: "group", },
	{	from: 800, to: 5, type: "group", },
	{	from: 800, to: 6, type: "group", },
	{	from: 800, to: 7, type: "group", },
	{	from: 800, to: 8, type: "group", },
	{	from: 800, to: 9, type: "group", },
	{	from: 800, to: 10, type: "group", },
	{	from: 800, to: 11, type: "group", },
	{	from: 800, to: 12, type: "group", },
	{	from: 800, to: 13, type: "group", },
	{	from: 800, to: 14, type: "group", },
	{	from: 800, to: 15, type: "group", },
	{	from: 800, to: 16, type: "group", },
	







// balding
	{	from: 500, to: 501, type: "group", 		dashes: true },
	{	from: 500, to: 502, type: "group", 		dashes: true },	
	{	from: 500, to: 503, type: "group",		dashes: true },	
	{	from: 500, to: 504, type: "group",		dashes: true },	
	{	from: 500, to: 505, type: "group",		dashes: true },	
	{	from: 500, to: 801, type: "group",		dashes: true },
	{	from: 500, to: 838, type: "group",		dashes: true },


// EN girlypops

	{	from: 700, to: 701, type: "group",		dashes: true },
	{	from: 700, to: 702, type: "group",		dashes: true },
	{	from: 700, to: 703, type: "group",		dashes: true },
	{	from: 700, to: 704, type: "group",		dashes: true },
	{	from: 700, to: 705, type: "group",		dashes: true },



// crashout crew
	{	from: 5000, to: 9, type: "group",		dashes: true },	
	{	from: 5000, to: 820, type: "group",		dashes: true },	
	{	from: 5000, to: 817, type: "group",		dashes: true },	
	{	from: 5000, to: 821, type: "group",		dashes: true },	


//ex Vshjo

	{	from: 0, to: 1, type: "group",		dashes: true },
	{	from: 0, to: 2, type: "group",		dashes: true },
	{	from: 0, to: 3, type: "group",		dashes: true },
	{	from: 0, to: 4, type: "group",		dashes: true },
	{	from: 0, to: 5, type: "group",		dashes: true },
	{	from: 0, to: 6, type: "group",		dashes: true },
	{	from: 0, to: 7, type: "group",		dashes: true },
	{	from: 0, to: 8, type: "group",		dashes: true },
	{	from: 0, to: 9, type: "group",		dashes: true },
	{	from: 0, to: 10, type: "group",		dashes: true },
	{	from: 0, to: 11, type: "group",		dashes: true },
	{	from: 0, to: 12, type: "group",		dashes: true },
	{	from: 0, to: 13, type: "group",		dashes: true },
	{	from: 0, to: 14, type: "group",		dashes: true },
	{	from: 0, to: 15, type: "group",		dashes: true },
	{	from: 0, to: 16, type: "group",		dashes: true },








// INTERESTS

// michi
	{	from: 2, to: 3000, type: "interests", },
	{	from: 2, to: 3001, type: "interests", },
	{	from: 2, to: 3002, type: "interests", },

// mouse
	{	from: 1, to: 3000, type: "interests", },
	{	from: 1, to: 3001, type: "interests", },
	{	from: 1, to: 3002, type: "interests", },

	// geega
	{	from: 3, to: 3000, type: "interests", },
	{	from: 3, to: 3001, type: "interests", },

// zen
	{	from: 4, to: 3001, type: "interests", },
	{	from: 4, to: 3002, type: "interests", },


// silvervale


	// k9kuro
	{	from: 6, to: 3001, type: "interests", },
	{	from: 6, to: 3002, type: "interests", },

	// apricot
	{	from: 7, to: 3001, type: "interests", },
	{	from: 7, to: 3002, type: "interests", },
	{	from: 7, to: 3003, type: "interests", },

	// haruka
	{	from: 8, to: 3001, type: "interests", },

	// amalee
	{	from: 9, to: 3001, type: "interests", },
	{	from: 9, to: 3002, type: "interests", },

	// henya
	{	from: 10, to: 3001, type: "interests", },
	{	from: 10, to: 3000, type: "interests", },


	// matara
	{	from: 11, to: 3000, type: "interests", },
	{	from: 11, to: 3001, type: "interests", },
	{	from: 11, to: 3003, type: "interests", },

	// melody
	{	from: 12, to: 3000, type: "interests", },
	{	from: 12, to: 3001, type: "interests", },

	// hajime
	{	from: 13, to: 3001, type: "interests", },

	// nyanners
	{	from: 14, to: 3001, type: "interests", },
	{	from: 14, to: 3002, type: "interests", },

//kson
	{	from: 15, to: 3000, type: "interests", },
	{	from: 15, to: 3001, type: "interests", },
	{	from: 15, to: 3003, type: "interests", },

	// veibae



// mint
	{	from: 101, to: 3002, type: "interests", },
	{	from: 101, to: 3001, type: "interests", },

// victoria
	{	from: 102, to: 3002, type: "interests", },

	// phoebe
	{	from: 103, to: 3002, type: "interests", },

// hotaru
	{	from: 201, to: 3002, type: "interests", },
	{	from: 201, to: 3001, type: "interests", },

	// hestia
	{	from: 202, to: 3001, type: "interests", },

	// peke
	{	from: 203, to: 3002, type: "interests", },
	{	from: 203, to: 3001, type: "interests", },

	// nagi
	{	from: 204, to: 3002, type: "interests", },
	{	from: 204, to: 3001, type: "interests", },




// tori
	{	from: 301, to: 3001, type: "interests", },

	// Pia
	{	from: 302, to: 3001, type: "interests", },
	{	from: 302, to: 3002, type: "interests", },

// beri
	{	from: 303, to: 3001, type: "interests", },
	{	from: 303, to: 3002, type: "interests", },

	// kairyu
	{	from: 304, to: 3001, type: "interests", },

	// buff
	{	from: 401, to: 3001, type: "interests", },

	// candii
	{	from: 402, to: 3001, type: "interests", },

	// rosedoodle
	{	from: 403, to: 3001, type: "interests", },
	{	from: 403, to: 3004, type: "interests", },

	//shibun
	{	from: 404, to: 3001, type: "interests", },
	{	from: 404, to: 3002, type: "interests", },

// vedal
	{	from: 601, to: 3001, type: "interests", },
	{	from: 601, to: 3005, type: "interests", },

	// chrchie
	{	from: 501, to: 3001, type: "interests", },
	{	from: 501, to: 3002, type: "interests", },

	//minikomew
	{	from: 502, to: 3002, type: "interests", },


	// shoomimi
	{	from: 503, to: 3001, type: "interests", },
	{	from: 503, to: 3005, type: "interests", },

	// cerber
	{	from: 504, to: 3002, type: "interests", },
	{	from: 504, to: 3001, type: "interests", },

// elle
	{	from: 505, to: 3002, type: "interests", },
	{	from: 505, to: 3005, type: "interests", },
	{	from: 505, to: 3004, type: "interests", },
	{	from: 505, to: 3000, type: "interests", },

//Numi
	{	from: 701, to: 3000, type: "interests", },
	{	from: 701, to: 3002, type: "interests", },
	{	from: 701, to: 3001, type: "interests", },

	//bao
	{	from: 702, to: 3001, type: "interests", },
	{	from: 702, to: 3002, type: "interests", },

	//yuzu
	{	from: 703, to: 3001, type: "interests", },
	{	from: 703, to: 3002, type: "interests", },

	//camila
	{	from: 704, to: 3001, type: "interests", },
	{	from: 704, to: 3000, type: "interests", },
	{	from: 704, to: 3002, type: "interests", },

	// tonkienator
	{	from: 705, to: 3000, type: "interests", },
	{	from: 705, to: 3001, type: "interests", },

// bajiru
	{	from: 801, to: 3002, type: "interests", },

	// dooby
	{	from: 802, to: 3001, type: "interests", },

	// froggy
	{	from: 803, to: 3000, type: "interests", },
	{	from: 803, to: 3001, type: "interests", },
	{	from: 803, to: 3002, type: "interests", },
	{	from: 803, to: 3004, type: "interests", },

	// lime
	{	from: 804, to: 3001, type: "interests", },

	// saba
	{	from: 805, to: 3001, type: "interests", },
	{	from: 805, to: 3002, type: "interests", },

	// nimi
	{	from: 806, to: 3001, type: "interests", },
	{	from: 806, to: 3002, type: "interests", },

	// mono
	{	from: 807, to: 3001, type: "interests", },
	{	from: 807, to: 3002, type: "interests", },

// cottontail
	{	from: 808, to: 3001, type: "interests", },
	{	from: 808, to: 3001, type: "interests", },
	{	from: 808, to: 3001, type: "interests", },

	// arielle
	{	from: 809, to: 3000, type: "interests", },
	{	from: 809, to: 3001, type: "interests", },

	// daryl
	{	from: 810, to: 3002, type: "interests", },

	// issa
	{	from: 811, to: 3001, type: "interests", },
	{	from: 811, to: 3002, type: "interests", },
	
	// aethel
	{	from: 813, to: 3001, type: "interests", },
	{	from: 813, to: 3001, type: "interests", },		

	// katie
	{	from: 814, to: 3001, type: "interests", },

	// usan
	{	from: 815, to: 3000, type: "interests", },
	{	from: 815, to: 3001, type: "interests", },
	{	from: 815, to: 3002, type: "interests", },

	// saii
	{	from: 816, to: 3000, type: "interests", },
	{	from: 816, to: 3001, type: "interests", },
	{	from: 816, to: 3003, type: "interests", },

	// porcelian maid
	{	from: 817, to: 3000, type: "interests", },
	{	from: 817, to: 3001, type: "interests", },

	// heavenly
	{	from: 818, to: 3000, type: "interests", },
	{	from: 818, to: 3001, type: "interests", },


	// pumpkin
	{	from: 819, to: 3000, type: "interests", },
	{	from: 819, to: 3001, type: "interests", },
	{	from: 819, to: 3002, type: "interests", },


	// miss shadow lovely

	// cyyu

//marcomeatball
	{	from: 901, to: 3001, type: "interests", },
	{	from: 901, to: 3002, type: "interests", },
	{	from: 901, to: 3003, type: "interests", },

	//lesange
	{	from: 902, to: 3002, type: "interests", },
	{	from: 902, to: 3003, type: "interests", },

	//CDawgVA
	{	from: 903, to: 3000, type: "interests", },
	{	from: 903, to: 3001, type: "interests", },
	{	from: 903, to: 3003, type: "interests", },

	//Emily Hopkins
	{	from: 904, to: 3001, type: "interests", },
	{	from: 904, to: 3002, type: "interests", },
	{	from: 904, to: 3003, type: "interests", },

	//Jessie
	{	from: 905, to: 3000, type: "interests", },
	{	from: 905, to: 3001, type: "interests", },
	{	from: 905, to: 3003, type: "interests", },

	//Dodger
	{	from: 906, to: 3000, type: "interests", },
	{	from: 906, to: 3001, type: "interests", },
	{	from: 906, to: 3003, type: "interests", },

	//Nagzz
	{	from: 907, to: 3000, type: "interests", },
	{	from: 907, to: 3001, type: "interests", },
	{	from: 907, to: 3003, type: "interests", },

	//Ray
	{	from: 908, to: 3000, type: "interests", },
	{	from: 908, to: 3001, type: "interests", },
	{	from: 908, to: 3003, type: "interests", },

//mori
	{	from: 2001, to: 3000, type: "interests", },
	{	from: 2001, to: 3001, type: "interests", },
	{	from: 2001, to: 3002, type: "interests", },


//nerissa
	{	from: 2002, to: 3000, type: "interests", },
	{	from: 2002, to: 3001, type: "interests", },
	{	from: 2002, to: 3002, type: "interests", },


//erb
	{	from: 2003, to: 3000, type: "interests", },
	{	from: 2003, to: 3001, type: "interests", },
	{	from: 2003, to: 3002, type: "interests", },


//ollie
	{	from: 2004, to: 3000, type: "interests", },
	{	from: 2004, to: 3001, type: "interests", },
	{	from: 2004, to: 3002, type: "interests", },

//moona
	{	from: 2005, to: 3002, type: "interests", },

//risu
	{	from: 2006, to: 3002, type: "interests", },

//kaela
	{	from: 2007, to: 3002, type: "interests", },

//kobo
	{	from: 2008, to: 3002, type: "interests", },

//zeta
	{	from: 2009, to: 3002, type: "interests", },


//kloe
	{	from: 825, to: 3001, type: "interests", },

//croc
	{	from: 822, to: 3001, type: "interests", },

	//ENVI
	{	from: 823, to: 3001, type: "interests", },

//lucia
	{	from: 824, to: 3001, type: "interests", },
	{	from: 824, to: 3000, type: "interests", },


//chris broad
	{	from: 909, to: 3000, type: "interests", },
	{	from: 909, to: 3003, type: "interests", },


//derivakat
	{	from: 826, to: 3002, type: "interests", },


	//x3dustco
	{	from: 832, to: 3001, type: "interests", },
	{	from: 832, to: 3004, type: "interests", },




//COLLAB

//ironmouse
	{	from: 1, to: 201, type: "collab", },
	{	from: 1, to: 202, type: "collab", },
	{	from: 1, to: 203, type: "collab", },
	{	from: 1, to: 204, type: "collab", },

	{	from: 1, to: 401, type: "collab", },
	{	from: 1, to: 402, type: "collab", },
	{	from: 1, to: 403, type: "collab", },
	{	from: 1, to: 404, type: "collab", },

	{	from: 1, to: 301, type: "collab", },
	{	from: 1, to: 302, type: "collab", },
	{	from: 1, to: 303, type: "collab", },
	{	from: 1, to: 304, type: "collab", },


	{	from: 1, to: 8, type: "collab", },
	{	from: 1, to: 14, type: "collab", },
	{	from: 1, to: 10, type: "collab", },
	{	from: 1, to: 13, type: "collab", },
	{	from: 1, to: 15, type: "collab", },

	{	from: 1, to: 803, type: "collab", },
	{	from: 1, to: 809, type: "collab", },
	{	from: 1, to: 813, type: "collab", },
	{	from: 1, to: 817, type: "collab", },
	{	from: 1, to: 823, type: "collab", },
	{	from: 1, to: 822, type: "collab", },
	{	from: 1, to: 818, type: "collab", },

	{	from: 1, to: 901, type: "collab", },
	{	from: 1, to: 903, type: "collab", },
	{	from: 1, to: 909, type: "collab", },

	{	from: 1, to: 4000, type: "collab", },

	
	{	from: 1, to: 2013, type: "collab", },

	{	from: 1, to: 6000, type: "collab", },

	{	from: 1, to: 2001, type: "collab", },
	{	from: 1, to: 2002, type: "collab", },
	{	from: 1, to: 2003, type: "collab", },



//michi
	{	from: 2, to: 701, type: "collab", },
	{	from: 2, to: 807, type: "collab", },
	{	from: 2, to: 902, type: "collab", },
	{	from: 2, to: 819, type: "collab", },
	{	from: 2, to: 816, type: "collab", },
	{	from: 2, to: 815, type: "collab", },

	{	from: 2, to: 2004, type: "collab", },
	{	from: 2, to: 2005, type: "collab", },
	{	from: 2, to: 2006, type: "collab", },
	{	from: 2, to: 2007, type: "collab", },
	{	from: 2, to: 2008, type: "collab", },
	{	from: 2, to: 2009, type: "collab", },

	{	from: 2, to: 907, type: "collab", },

	{	from: 2, to: 6, type: "collab", },
	{	from: 2, to: 704, type: "collab", },
	{	from: 2, to: 818, type: "collab", },


//lesange
	{	from: 902, to: 810, type: "collab", },
	{	from: 902, to: 807, type: "collab", },
	{	from: 902, to: 801, type: "collab", },


//elle
	{	from: 505, to: 501, type: "collab", },
	{	from: 505, to: 502, type: "collab", },
	{	from: 505, to: 503, type: "collab", },
	{	from: 505, to: 504, type: "collab", },
	{	from: 505, to: 801, type: "collab", },
	{	from: 505, to: 811, type: "collab", },


//neuroverse
	{	from: 601, to: 602, type: "collab", },
	{	from: 601, to: 603, type: "collab", },


//zentraya
	{	from: 4, to: 11, type: "collab", },
	{	from: 4, to: 3, type: "collab", },
	{	from: 4, to: 816, type: "collab", },
	{	from: 4, to: 9, type: "collab", },
	{	from: 4, to: 808, type: "collab", },
	{	from: 4, to: 7, type: "collab", },
	{	from: 4, to: 704, type: "collab", },
	{	from: 4, to: 824, type: "collab", },
	{	from: 4, to: 814, type: "collab", },
	{	from: 4, to: 819, type: "collab", },
	{	from: 4, to: 818, type: "collab", },
	{	from: 4, to: 834, type: "collab", },
	{	from: 4, to: 830, type: "collab", },
	{	from: 4, to: 837, type: "collab", },
	


//lime
	{	from: 804, to: 805, type: "collab", },
	{	from: 804, to: 802, type: "collab", },
	{	from: 804, to: 806, type: "collab", },


//henya
	{	from: 10, to: 804, type: "collab", },
	{	from: 10, to: 805, type: "collab", },
	{	from: 10, to: 908, type: "collab", },
	


//amalee
	{	from: 9, to: 821, type: "collab", },
	{	from: 9, to: 820, type: "collab", },
	{	from: 9, to: 817, type: "collab", },


	//numi
	{	from: 701, to: 702, type: "collab", },
	{	from: 701, to: 703, type: "collab", },



//arielle
	{	from: 809, to: 8, type: "collab", },
	{	from: 809, to: 803, type: "collab", },
	{	from: 809, to: 908, type: "collab", },
	{	from: 809, to: 6, type: "collab", },


	//ray
	{	from: 908, to: 824, type: "collab", },
	{	from: 908, to: 8, type: "collab", },
	{	from: 908, to: 907, type: "collab", },
	{	from: 908, to: 3, type: "collab", },
	{	from: 908, to: 818, type: "collab", },
	{	from: 908, to: 4, type: "collab", },


//haruka
	{	from: 8, to: 825, type: "collab", },
	{	from: 8, to: 907, type: "collab", },


//beastiez
	{	from: 301, to: 302, type: "collab", },
	{	from: 302, to: 303, type: "collab", },
	{	from: 303, to: 304, type: "collab", },
	

	//vichiban
	{	from: 401, to: 402, type: "collab", },
	{	from: 402, to: 403, type: "collab", },
	{	from: 403, to: 404, type: "collab", },


//dentsu
	{	from: 101, to: 102, type: "collab", },
	{	from: 102, to: 103, type: "collab", },
	{	from: 103, to: 101, type: "collab", },


//neuroverse
	{	from: 601, to: 501, type: "collab", },
	{	from: 601, to: 502, type: "collab", },
	{	from: 601, to: 504, type: "collab", },
	{	from: 601, to: 505, type: "collab", },
	{	from: 601, to: 701, type: "collab", },
	{	from: 601, to: 4, type: "collab", },
	{	from: 601, to: 833, type: "collab", },
	{	from: 601, to: 828, type: "collab", },


//matara
	{	from: 11, to: 101, type: "collab", },
	{	from: 11, to: 908, type: "collab", },


	//holo en
	{	from: 2001, to: 2002, type: "collab", },
	{	from: 2002, to: 2003, type: "collab", },


//melody
	{	from: 12, to: 907, type: "collab", },
	{	from: 12, to: 301, type: "collab", },
	{	from: 12, to: 302, type: "collab", },
	{	from: 12, to: 303, type: "collab", },
	{	from: 12, to: 304, type: "collab", },
	{	from: 12, to: 832, type: "collab", },
	{	from: 12, to: 836, type: "collab", },
	{	from: 12, to: 839, type: "collab", },
	{	from: 12, to: 840, type: "collab", },



//jessie and dodger
	{	from: 905, to: 2004, type: "collab", },
	{	from: 905, to: 401, type: "collab", },
	{	from: 905, to: 402, type: "collab", },
	{	from: 905, to: 403, type: "collab", },
	{	from: 905, to: 404, type: "collab", },

	{	from: 906, to: 2004, type: "collab", },




//froggy
	{	from: 803, to: 6, type: "collab", },


//henya
	{	from: 10, to: 802, type: "collab", },


//issa
	{	from: 811, to: 826, type: "collab", },


	//obiekatiekat
	{	from: 814, to: 827, type: "collab", },

	//naggz
	{	from: 907, to: 831, type: "collab", },
	{	from: 907, to: 814, type: "collab", },
	{	from: 907, to: 827, type: "collab", },
	{	from: 907, to: 835, type: "collab", },
	{	from: 907, to: 836, type: "collab", },
	{	from: 907, to: 837, type: "collab", },






]);





