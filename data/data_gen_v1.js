/*
CONSTANTS
-----------------------------------------------
*/

//group node,shape, size, label and edge colors

//interest node, shape, size, label and edge colors

//talent shape?



/*
VARIABLES
-----------------------------------------------
*/

//init node and edge arrays


//variables for node styles, this is for properties for nodes by type


//FOR GROUP NODES

//size and shape
var typeGroupNodeShape = "dot";
var typeGroupNodeSize = 30;

//label size
var typeGroupNodeLabelSize = 20;


//subgroups node size
var typeSubgroupSize = 17;


//for interests



//edge styles



//output array containers
var outputNodeAcc = [];
var outputedgeAcc = [];








/*
DATA GOES HERE
-----------------------------------------------
*/



//arrays for node/edge gen

//increment 0-100
const interestNode = [

	//INTEREST NODE
	//index, type, GROUP, label, size var, shape var
	
	[ 0, "interests", "INTERESTS", "Yapping", [9034, 9028, 1000, 1001, 1003, 9042, 9024, 9038, 1012, 9039, 9019, 9032, 9003, 7003, 1002, 11001, 5001, 6004, 9004, 9016, 5005, 1008, 1010, 9009, 9029, 1011  ] ],

	[ 1, "interests", "INTERESTS", "Gaming", [10005, 10006, 10007, 10008, 10001, 10003, 10004, 9004, 1001, 9033, 9018, 9009, 1008, 1010, 1013, 1003, 9017, 9016, 7002, 9043, 1000, 1009, 1011, 1012, 1014, 1007, 9025, 9021, 9024, 9020, 9019, 9002, 9006, 9007, 9013,  3001, 3002, 3003, 3004, 2001, 2002, 4001, 4002, 4003, 4004, 6003, 1002, 9031, 7004, 9022, 13001  ] ],

	[ 2, "interests", "INTERESTS", "Music", [1000, 1002, 1005, 1006, 1007, 1009, 1011, 1014, 1015, 2001, 2002, 2003, 3001, 3002, 3003, 3004, 4001, 4002, 4003, 4004, 6001, 6002, 6003, 6004, 9001, 9002, 9003, 9005, 9006, 9007, 9008, 9010, 9011, 9013, 9014, 9015, 9019, 9026, 9031, 9037, 9041, 9043, 5002, 11001, 11014, 11015, 11002, 11016, 11017, 11018, 11019, 11003, 11020, 11021, 11022, 11004, 11005, 11006, 11007, 11008, 11009, 5005, 7001, 7004, 5001, 6005, 10004, 10002, 10001, 11013, 13001 ] ],

	[ 3, "interests", "INTERESTS", "IRL", [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 9016, 9008, 9033 ] ],
	[ 4, "interests", "INTERESTS", "Art", [9032, 9003, 7003, 13001] ],
	[ 5, "interests", "INTERESTS", "STEM", [5005, 8001, 5003, 7002] ],
	[ 6, "interests", "INTERESTS", "Sexuality", [1012, 9039, 9036, 9040] ],
	[ 7, "interests", "INTERESTS", "N/A", [8002, 8003] ],

];





//GROUP NODE
//index, type, GROUP, label, node shape, node size, label size

//increment 101-200
const formalGroupNodes = [

	// dentsu.exe
	[ 102,  "group", "DENTSU", "dentsu.exe",  typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [2001, 2002, 2003] ],

	// nova
	[ 103, "group", "NOVA", "Nova", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [3001, 3002, 3003, 3004] ],

	// beastiez
	[ 104, "group", "BEASTIEZ", "Beastiez", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [4001, 4002, 4003, 4004] ],

	// vichi ban
	[ 105, "group", "VICHIBAN", "VchiBan", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [7001, 7002, 7003, 7004] ],

	// hololive
	[ 110, "group", "HOLOLIVE", "Hololive", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [111, 113, 114] ],


	[ 111, "group", "HOLOLIVE", "Hololive EN", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [112, 116, 117, 120] ],

	[ 112, "group", "HOLOLIVE", "Myth", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11001, 11014, 11015] ],

	[ 116, "group", "HOLOLIVE", "Justice", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11003, 11020, 11021, 11022] ],

	[ 117, "group", "HOLOLIVE", "Advent", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11002, 11016, 11017, 11018, 11019] ],

	[ 120, "group", "HOLOLIVE", "HOLOSTARS EN", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11013] ],


	[ 113, "group", "HOLOLIVE", "Hololive Indo", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [11004, 11005, 11006, 11007, 11008, 11009] ],

	[ 114, "group", "HOLOLIVE", "Hololive JP", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [] ],

	// first stage
	[ 115, "group", "FIRST_STAGE", "First Stage", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [12001] ],

	// teri-yaki
	[ 118, "group", "TERI-YAKI", "TERI-yaki", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [13001] ],
	
	// nijisanji
	[ 119, "group", "NIJISANJI", "Nijisanji", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [] ],

	//lab brats
	[  202,  "group", "LAB_BRATS", "Lab Brats", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [5001, 5002, 5003, 5005] ],

	// neuroverse
	[ 208, "group", "NEUROVERSE", "Neuroverse", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [8001, 8002, 8003] ],

];



//increment 201-300
const informalGroupNodes = [

	// vein gang
	[  201,  "group", "VEIN_GANG", "Vein Gang", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [1000, 1014, 9013, 10003] ],

	// EN girlypops
	[  203,  "group", "EN_GIRLYPOPS", "EN Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [6001, 6002, 6003, 6004, 6005] ],

	// crashout crew
	[  204,  "group", "CRASHOUT_CREW", "Crashout Crew", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [1009, 9021, 9017, 9020] ],

	//vshojo
	[ 205,  "group", "VSHOJO", "ex-Vshjo", typeGroupNodeShape,  typeGroupNodeSize,  typeGroupNodeLabelSize, [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 102, 103, 104 ] ],

	// fleshtubers
	[ 206, "group", "FLESHTUBERS", "Fleshtubers", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009 ] ],

	// indies
	[ 207, "group", "INDIES", "Indies", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [5001, 5002, 5003, 5005, 6001, 6002, 6003, 6004, 7001, 7002, 7003, 7004, 8001, 8002, 8003, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9026, 9027, 9028, 9029, 9030, 9030, 9031, 9032, 9033, 9034, 9035, 9036, 9037, 9038, 9039, 9040, 9041, 9042, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 2001, 2002, 2003, 4001, 4002, 4003, 4004, 6005, 9043, 3001, 3002, 3003, 3004 ] ],

	// indo girlypops
	[ 209, "group", "INDO_GIRLYPOPS", "Indo Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [11004, 11005, 11006, 11007, 11008, 11009, 13001, 1002,  ] ],

];





//TALENT node
//index, type, GROUP, label, youtube, twitch, wiki, [collabs],  - color is set by group node

//increment by group in steps of 1000
const talentNodes = [

	//INFORMAL GROUPS

	//ex vshjo and vshojo affliated
	[ 1000, "talent", "INDIES", "Ironmouse", "https://www.youtube.com/@IronMouseParty", "https://www.twitch.tv/ironmouse", "wikilink", [1001,1011], ],
	[ 1001, "talent", "INDIES", "Zentraya", "youtube", "twitch", "wikilink", [],  ],
	[ 1002, "talent", "INDIES", "Michi Mochievee", "youtube", "twitch", "wikilink", [], ],
	[ 1003, "talent", "INDIES", "Geega", "youtube", "twitch", "wikilink", [], ],
	[ 1005, "talent", "INDIES", "Silvervale", "youtube", "twitch", "wikilink", [], ],
	[ 1006, "talent", "INDIES", "K9Kuro", "youtube", "twitch", "wikilink", [], ],
	[ 1007, "talent", "INDIES", "Apricot (froot)", "youtube", "twitch", "wikilink", [], ],
	[ 1008, "talent", "INDIES", "Haruka Karibu", "youtube", "twitch", "wikilink", [], ],
	[ 1009, "talent", "INDIES", "AmaLee", "youtube", "twitch", "wikilink", [], ],
	[ 1010, "talent", "INDIES", "Henya the Genius", "youtube", "twitch", "wikilink", [], ],
	[ 1011, "talent", "INDIES", "Matara Kan", "youtube", "twitch", "wikilink", [], ],
	[ 1012, "talent", "INDIES", "Projket Melody", "youtube", "twitch", "wikilink", [], ],
	[ 1013, "talent", "INDIES", "Hajime", "youtube", "twitch", "wikilink", [], ],
	[ 1014, "talent", "INDIES", "nyanners", "youtube", "twitch", "wikilink", [], ],
	[ 1015, "talent", "INDIES", "Kson", "youtube", "twitch", "wikilink", [], ],
	[ 1016, "talent", "INDIES", "Veibae", "youtube", "twitch", "wikilink", [], ],

	//EN girlypops
	[ 6001, "talent", "INDIES", "Akuma Nihmune", "youtube", "twitch", "wikilink", [], ],
	[ 6002, "talent", "INDIES", "Bao the Whale", "youtube", "twitch", "wikilink", [], ],
	[ 6003, "talent", "INDIES", "Yuzu", "youtube", "twitch", "wikilink", [], ],
	[ 6004, "talent", "INDIES", "Camila", "youtube", "twitch", "wikilink", [], ],
	[ 6005, "talent", "INDIES", "Lucy Pyre", "youtube", "twitch", "wikilink", [], ],
	

	//indie general population
	[ 9001, "talent", "INDIES", "Bajiru", "youtube", "twitch", "wikilink", [], ],
	[ 9002, "talent", "INDIES", "dooby3D", "youtube", "twitch", "wikilink", [], ],
	[ 9003, "talent", "INDIES", "FroggyLoch", "youtube", "twitch", "wikilink", [], ],
	[ 9004, "talent", "INDIES", "Limealicious", "youtube", "twitch", "wikilink", [], ],
	[ 9005, "talent", "INDIES", "Sameko Saba", "youtube", "twitch", "wikilink", [], ],
	[ 9006, "talent", "INDIES", "Nimi Nightmare", "youtube", "twitch", "wikilink", [], ],
	[ 9007, "talent", "INDIES", "SixteenInMono", "youtube", "twitch", "wikilink", [], ],
	[ 9008, "talent", "INDIES", "Cottontail_VA", "youtube", "twitch", "wikilink", [], ],
	[ 9009, "talent", "INDIES", "Arielle_VT", "youtube", "twitch", "wikilink", [], ],
	[ 9010, "talent", "INDIES", "Starlight Daryl", "youtube", "twitch", "wikilink", [], ],
	[ 9011, "talent", "INDIES", "Issa Corva", "youtube", "twitch", "wikilink", [], ],
	[ 9013, "talent", "INDIES", "LordAethelstan", "youtube", "twitch", "wikilink", [], ],
	[ 9014, "talent", "INDIES", "obkatiekat", "youtube", "twitch", "wikilink", [], ],
	[ 9015, "talent", "INDIES", "U-san", "youtube", "twitch", "wikilink", [], ],
	[ 9016, "talent", "INDIES", "Saiiren", "youtube", "twitch", "wikilink", [], ],
	[ 9017, "talent", "INDIES", "Porcelain Maid", "youtube", "twitch", "wikilink", [], ],
	[ 9018, "talent", "INDIES", "Heavenly Father", "youtube", "twitch", "wikilink", [], ],	
	[ 9019, "talent", "INDIES", "pumpkinpotion", "youtube", "twitch", "wikilink", [], ],
	[ 9020, "talent", "INDIES", "missshadowlovely", "youtube", "twitch", "wikilink", [], ],
	[ 9021, "talent", "INDIES", "Cyyu", "youtube", "twitch", "wikilink", [], ],
	[ 9022, "talent", "INDIES", "Croc", "youtube", "twitch", "wikilink", [], ],
	[ 9023, "talent", "INDIES", "ENVI", "youtube", "twitch", "wikilink", [], ],
	[ 9024, "talent", "INDIES", "lucia", "youtube", "twitch", "wikilink", [], ],
	[ 9025, "talent", "INDIES", "KloeKroc", "youtube", "twitch", "wikilink", [], ],
	[ 9026, "talent", "INDIES", "Derivakat", "youtube", "twitch", "wikilink", [], ],
	[ 9027, "talent", "INDIES", "fufu", "youtube", "twitch", "wikilink", [], ],
	[ 9028, "talent", "INDIES", "KokoNuts", "youtube", "twitch", "wikilink", [], ],
	[ 9029, "talent", "INDIES", "crelly", "youtube", "twitch", "wikilink", [], ],
	[ 9030, "talent", "INDIES", "Bluto", "youtube", "twitch", "wikilink", [], ],
	[ 9031, "talent", "INDIES", "chibidoki", "youtube", "twitch", "wikilink", [], ],
	[ 9032, "talent", "INDIES", "x3Dustco", "youtube", "twitch", "wikilink", [], ],
	[ 9033, "talent", "INDIES", "LaynaLazar", "youtube", "twitch", "wikilink", [], ],
	[ 9034, "talent", "INDIES", "papamutt", "youtube", "twitch", "wikilink", [], ],
	[ 9035, "talent", "INDIES", "Fefe", "youtube", "twitch", "wikilink", [], ],
	[ 9036, "talent", "INDIES", "Vexoria the Suneater", "youtube", "twitch", "wikilink", [], ],
	[ 9037, "talent", "INDIES", "Spite", "youtube", "twitch", "wikilink", [], ],
	[ 9038, "talent", "INDIES", "Cha Cha your Vtuber Mom", "youtube", "twitch", "wikilink", [], ],
	[ 9039, "talent", "INDIES", "el_XoX", "youtube", "twitch", "wikilink", [], ],
	[ 9040, "talent", "INDIES", "megladonvt", "youtube", "twitch", "wikilink", [], ],
	[ 9041, "talent", "INDIES", "Cerber", "youtube", "twitch", "wikilink", [], ],
	[ 9042, "talent", "INDIES", "tonkienator", "youtube", "twitch", "wikilink", [], ],
	[ 9043, "talent", "INDIES", "Dokibird", "youtube", "twitch", "wikilink", [], ],
	

//aqua

//Zen collab partners
//baddaboom
//fream
//Mei
//megalodon


//ray collab
//kumi
//RubinSargasm


	//livestreamers and IRL folks aka Fleshtubers
	[ 10001, "talent", "FLESHTUBERS", "Marcomeatball", "youtube", "twitch", "wikilink", [], ],
	[ 10002, "talent", "FLESHTUBERS", "Lesange", "youtube", "twitch", "wikilink", [], ],
	[ 10003, "talent", "FLESHTUBERS", "CDawgVA", "youtube", "twitch", "wikilink", [], ],
	[ 10004, "talent", "FLESHTUBERS", "Emily Hopkins", "youtube", "twitch", "wikilink", [], ],
	[ 10005, "talent", "FLESHTUBERS", "JessieCox", "youtube", "twitch", "wikilink", [], ],
	[ 10006, "talent", "FLESHTUBERS", "Doger", "youtube", "twitch", "wikilink", [], ],
	[ 10007, "talent", "FLESHTUBERS", "Nagzz", "youtube", "twitch", "wikilink", [], ],
	[ 10008, "talent", "FLESHTUBERS", "Ray", "youtube", "twitch", "wikilink", [], ],
	[ 10009, "talent", "FLESHTUBERS", "Chris Broad", "youtube", "twitch", "wikilink", [], ],

	

	//FORMAL GROUPS

	//hololive
	[ 11001, "talent", "HOLOLIVE", "Mori Calliope", "youtube", "twitch", "wikilink", [], ],
	[ 11014, "talent", "HOLOLIVE", "Takanashi Kiara", "youtube", "twitch", "wikilink", [], ],
	[ 11015, "talent", "HOLOLIVE", "Ninomae Ina’nis", "youtube", "twitch", "wikilink", [], ],


	[ 11002, "talent", "HOLOLIVE", "Nerissa Ravencroft", "youtube", "twitch", "wikilink", [], ],
	[ 11016, "talent", "HOLOLIVE", "Koseki Bijou", "youtube", "twitch", "wikilink", [], ],
	[ 11017, "talent", "HOLOLIVE", "Shiori Novella", "youtube", "twitch", "wikilink", [], ],
	[ 11018, "talent", "HOLOLIVE", "Fuwawa Abyssgard", "youtube", "twitch", "wikilink", [], ],
	[ 11019, "talent", "HOLOLIVE", "Mococo Abyssgard", "youtube", "twitch", "wikilink", [], ],
	
	
	[ 11003, "talent", "HOLOLIVE", "Elizabeth Rose Bloodflame", "youtube", "twitch", "wikilink", [], ],
	[ 11020, "talent", "HOLOLIVE", "Gigi Murin", "youtube", "twitch", "wikilink", [], ],
	[ 11021, "talent", "HOLOLIVE", "Cecilia Immergreen", "youtube", "twitch", "wikilink", [], ],
	[ 11022, "talent", "HOLOLIVE", "Raora Panthera", "youtube", "twitch", "wikilink", [], ],


	[ 11004, "talent", "HOLOLIVE", "Kureiji Ollie", "youtube", "twitch", "wikilink", [], ],
	[ 11005, "talent", "HOLOLIVE", "Moona Hoshinova", "youtube", "twitch", "wikilink", [], ],
	[ 11006, "talent", "HOLOLIVE", "MAyunda Risu", "youtube", "twitch", "wikilink", [], ],
	[ 11007, "talent", "HOLOLIVE", "Kaela Kovalskia", "youtube", "twitch", "wikilink", [], ],
	[ 11008, "talent", "HOLOLIVE", "Kobo Kanaeru", "youtube", "twitch", "wikilink", [], ], 
	[ 11009, "talent", "HOLOLIVE", "Vestia Zeta", "youtube", "twitch", "wikilink", [], ],

	[ 11013, "talent", "HOLOLIVE", "Banzoin Hakka", "youtube", "twitch", "wikilink", [], ],


	//first stage
	[ 12001, "talent", "FIRST_STAGE", "Liron Lockheart", "youtube", "twitch", "wikilink", [], ],

	//teri-yaki
	[ 13001, "talent", "TERI-YAKI", "RaeLaviere", "youtube", "twitch", "wikilink", [], ],

	//lab brats
	[ 5001, "talent", "LAB_BRATS", "chrchie", "youtube", "twitch", "wikilink", [], ],
	[ 5002, "talent", "LAB_BRATS", "Minikomew", "youtube", "twitch", "wikilink", [], ],
	[ 5003, "talent", "LAB_BRATS", "Shoomimi", "youtube", "twitch", "wikilink", [], ],
	[ 5005, "talent", "LAB_BRATS", "Elle_Minibot", "youtube", "twitch", "wikilink", [], ],

	// neuroverse
	[ 8001, "talent", "NEUROVERSE", "Vedal", "youtube", "twitch", "wikilink", [], ],
	[ 8002, "talent", "NEUROVERSE", "Neurosama", "youtube", "twitch", "wikilink", [], ],
	[ 8003, "talent", "NEUROVERSE", "Evil Neuro", "youtube", "twitch", "wikilink", [], ],

	// VichiBan
	[ 7001, "talent", "VICHIBAN", "Buffpup", "youtube", "twitch", "wikilink", [], ],
	[ 7002, "talent", "VICHIBAN", "Ai Candii", "youtube", "twitch", "wikilink", [], ],
	[ 7003, "talent", "VICHIBAN", "Rosedoodle", "youtube", "twitch", "wikilink", [], ],
	[ 7004, "talent", "VICHIBAN", "ShiaBun", "youtube", "twitch", "wikilink", [], ],

	// dentsu.exe
	[ 2001, "talent", "DENTSU", "Mint Fantome", "youtube", "twitch", "wikilink", [], ],
	[ 2002, "talent", "DENTSU", "Victoria Roma", "youtube", "twitch", "wikilink", [], ],
	[ 2003, "talent", "DENTSU", "Phoebe Chan", "youtube", "twitch", "wikilink", [], ],

    // NOVA
	[ 3001, "talent", "NOVA", "Akatsuki Hotaru", "youtube", "twitch", "wikilink", [], ],
	[ 3002, "talent", "NOVA", "Hestia Happiness", "youtube", "twitch", "wikilink", [], ],
	[ 3003, "talent", "NOVA", "Yutori Peke", "youtube", "twitch", "wikilink", [], ],
	[ 3004, "talent", "NOVA", "Okamoto Nagi", "youtube", "twitch", "wikilink", [], ],

	// Beastiez
	[ 4001, "talent", "BEASTIEZ", "Tori Oriane", "youtube", "twitch", "wikilink", [], ],
	[ 4002, "talent", "BEASTIEZ", "PiaPiUFO", "youtube", "twitch", "wikilink", [], ],
	[ 4003, "talent", "BEASTIEZ", "Beribug", "youtube", "twitch", "wikilink", [], ],
	[ 4004, "talent", "BEASTIEZ", "Kairyu Crocodile", "youtube", "twitch", "wikilink", [], ],




];







/*
CREATE NODES/EDGES
-----------------------------------------------
*/

//need to figure out which direction I want edges to run
//all group edges source from group node?
//all interest nodes sourced from interest node?
//collab talent to talent?

//for nodes
const idText = `{ id: `;
const typeText = `, type: "`;
const groupText = `",  group: "`;
const labelText = `", label: "`;

const collabText = `collab`;

const shapeText = `", shape: "`;
const sizeNodeText = `", size: `;


const fontSizeText = `, font: { size: `;
const fontColorText = `, color: "black" } }`;

const youtubeText = `", youtube: "`;
const twitchText = `", twitch: "`;
const wikiText = `", wiki: "`;


const endText = `" }`;

//for edges
const fromText = `{ from: `;
const toText = `, to: `;
const dashesText = `", dashes: `;
const dashesEndText = `}`;
const interestsText = ``;



//NODES


//interest loop
for (var a = 0; a < interestNode.length; a++) {


	//nodee elements
	var currentInterestNode = interestNode[a];

	var nodeHTMLoutput = idText + currentInterestNode[0] + typeText + currentInterestNode[1] + groupText + currentInterestNode[2] + labelText + currentInterestNode[3] + endText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentInterestNode[4].length > 0) {

	   //edge elements
		for (var ee = 0; ee < currentInterestNode[4].length; ee++) {

			var edgeHTMLoutput = fromText + currentInterestNode[0] + toText + currentInterestNode[4][ee] + typeText + currentInterestNode[1] + endText;

			outputedgeAcc.push(edgeHTMLoutput)

		}

	};


};




//revised formal group nodes
for (var a = 0; a < formalGroupNodes.length; a++) {


	//nodee elements
	var currentFormalGroupNodes = formalGroupNodes[a];

	var nodeHTMLoutput = idText + currentFormalGroupNodes[0] + typeText + currentFormalGroupNodes[1] + groupText + currentFormalGroupNodes[2] + labelText + currentFormalGroupNodes[3] + shapeText + currentFormalGroupNodes[4] + sizeNodeText + currentFormalGroupNodes[5] + fontSizeText + currentFormalGroupNodes[6] + fontColorText;

	outputNodeAcc.push(nodeHTMLoutput);

	if (currentFormalGroupNodes[7].length > 0) {

   //edge elements
		for (var ee = 0; ee < currentFormalGroupNodes[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentFormalGroupNodes[0] + toText + currentFormalGroupNodes[7][ee] + typeText + currentFormalGroupNodes[1] + endText;

			outputedgeAcc.push(edgeHTMLoutput)

		}

	}


};





//revised informal group nodes
for (var a = 0; a < informalGroupNodes.length; a++) {


	//nodee elements
	var currentInformalGroupNodes = informalGroupNodes[a];

	var nodeHTMLoutput = idText + currentInformalGroupNodes[0] + typeText + currentInformalGroupNodes[1] + groupText + currentInformalGroupNodes[2] + labelText + currentInformalGroupNodes[3] + shapeText + currentInformalGroupNodes[4] + sizeNodeText + currentInformalGroupNodes[5] + fontSizeText + currentInformalGroupNodes[6] + fontColorText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentInformalGroupNodes[7].length > 0) {

	   //edge elements
		for (var ee = 0; ee < currentInformalGroupNodes[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentInformalGroupNodes[0] + toText + currentInformalGroupNodes[7][ee] + typeText + currentInformalGroupNodes[1] + dashesText + true + dashesEndText;

			outputedgeAcc.push(edgeHTMLoutput)

		}

	}



};





//revised talent
for (var a = 0; a < talentNodes.length; a++) {


	//nodee elements
	var currentTalentNode = talentNodes[a];

	var nodeHTMLoutput = idText + currentTalentNode[0] + typeText + currentTalentNode[1] + groupText + currentTalentNode[2] + labelText + currentTalentNode[3] + youtubeText + currentTalentNode[4] + twitchText + currentTalentNode[5] + wikiText + currentTalentNode[6] + endText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentTalentNode[7].length > 0) {

   //edge elements
		for (var ee = 0; ee < currentTalentNode[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentTalentNode[0] + toText + currentTalentNode[7][ee] + typeText + collabText + endText;

			outputedgeAcc.push(edgeHTMLoutput)

		}

	}



};








//function to push the node accumliation array to the file

testHTMLNodeOutput(outputNodeAcc);



testHTMLEdgeOutput(outputedgeAcc);







//EDGES












/*
FUNCTIONS
-----------------------------------------------
*/



function testHTMLNodeOutput(nodeHTMLoutput) {

//more chatgpt code, needed the assist to get this working
	const talentName = document.getElementById("nodeOutput");

// set name
	talentName.textContent = nodeHTMLoutput || "#node";

};





function testHTMLEdgeOutput(nodeHTMLoutput) {


//more chatgpt code, needed the assist to get this working
	const edgeContainer = document.getElementById("edgeOutput");


// set name
	edgeContainer.textContent = nodeHTMLoutput || "#edge" + "\n";



};





