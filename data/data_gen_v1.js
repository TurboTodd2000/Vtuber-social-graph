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


//for group nodes
var typeGroupNodeShape = "dot";
var typeGroupNodeSize = 30;

var typeGroupNodeLabelSize = 20;


//for subgroups
var typeSubgroupSize = 17;




//



//for interests



//edge styles







/*
DATA GOES HERE
-----------------------------------------------
*/


//need to add view ID so nodes can be filtered, talent in all views should be 0


//OLD ORGINIZATION NODE
//{ id: 0, label: "ex-Vshjo", group: "Vshojo", GroupNode: 1, size: 30, shape: "dot" },


//OLD INTEREST NODE
//{ id: 3005, label: "STEM",  group: "interests", GroupNode: 2, size: 30, shape: "dot" },	


//OLO TALENT NODE
//{ id: 1, label: "Ironmouse", group: "Vshojo" },



//arrays for node/edge gen

//increment 0-100
const interestNode = [

	//INTEREST NODE
	//index, type, GROUP, label, size var, shape var
	
	{ 0, "interests", "INTERESTS", "Yapping", },
	{ 1, "interests", "INTERESTS", "Gaming", },
	{ 2, "interests", "INTERESTS", "Music", },
	{ 3, "interests", "INTERESTS", "IRL", },
	{ 4, "interests", "INTERESTS", "Art", },
	{ 5, "interests", "INTERESTS", "STEM", },

];



//increment 101-200
const formalGroupNodes = [

	//FORMAL GROUP NODE
	//index, type, GROUP, label, node shape, node size, label color, label size

//vshojo
	{ 101,  "group",  "VSHOJO", "ex-Vshjo", typeGroupNodeShape,  typeGroupNodeSize,  typeGroupNodeLabelSize },

// dentsu.exe
	{ 102,  "group", "DENTSU", "dentsu.exe",  typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// nova
	{ 103, "group", "NOVA", "Nova", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// beastiez
	{ 104, "group", "BEASTIEZ", "Beastiez", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// vichi ban
	{ 105, "group", "VICHIBAN", "VchiBan", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// neuroverse
	{ 106, "group", "NEUROVERSE", "Neuroverse", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// indies
	{ 107, "group", "INDIES", "Indies", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// fleshtubers
	{ 108, "group", "FLESHTUBERS", "Fleshtubers", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// indo girlypops
	{ 109, "group", "INDO_GIRLYPOPS", "Indo Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

// hololive
	{ 110, "group", "HOLOLIVE", "Hololive", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize },

	{ 111, "group", "HOLOLIVE", "Hololive EN", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, typeGroupNodeLabelSize },

	{ 112, "group", "HOLOLIVE", "Hololive Indo", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, typeGroupNodeLabelSize },

	{ 113, "group", "HOLOLIVE", "Hololive JP", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, typeGroupNodeLabelSize },

];



//increment 201-300
const informalGroupNodes = [

    // vein gang
	{  201,  "group", "Vein_Gang", "Vein Gang", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	//balding with the boys
	{  202,  "group", "balding", "Balding with the Boys", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	// EN girlypops
	{  203,  "group", "EN_Girlypops", "EN Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	// crashout crew
	{  204,  "group", "Crashout_Crew", "Crashout Crew", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

];






//increment by group in steps of 1000
const talentNodes = [

	
		//TALENT node
		//index, name, type, group, [informal groups id], [interests], [collabs], [URLs] - color is set by group node
		{1000, "Ironmouse", "talent", "indie", [1], [1, 2, 3], [1, 2, 3, etc], ["youtube", "twitch"]},
	
	



	{ 101, "Mint Fantome", "talent", "dentsu", [], [], [], [] },
	{ 102, "Victoria Roma", "talent", "dentsu", [], [], [], []},
	{ 103, "Phoebe Chan", "talent", "dentsu", [], [], [], [] },




	
];




/*
CREATE NODES/EDGES
-----------------------------------------------
*/



//loop through each interest node

//loop through each group, group node first
	//loop through edges per talent node






//loop to make ndoes and edges




//need to figure out which direction I want edges to run

	//all group edges source from group node?

	//all interest nodes sourced from interest node?

	//collab talent to talent?










