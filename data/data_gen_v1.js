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







/*
DATA GOES HERE
-----------------------------------------------
*/



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



//GROUP NODE
//index, type, GROUP, label, node shape, node size, label color, label size

	//increment 101-200
const formalGroupNodes = [

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
	{  201,  "group", "VEIN_GANG", "Vein Gang", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	//balding with the boys
	{  202,  "group", "BALDING", "Balding with the Boys", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	// EN girlypops
	{  203,  "group", "EN_GIRLYPOPS", "EN Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

	// crashout crew
	{  204,  "group", "CRASHOUT_CREW", "Crashout Crew", typeGroupNodeShape, typeGroupNodeSize, typeSubgroupSize, "labelcolor", typeGroupNodeLabelSize },

];


	//TALENT node
	//index, type, GROUP, label, [informal groups id], [interests], [collabs], [URLs] description - color is set by group node

	//increment by group in steps of 1000
const talentNodes = [

	{1000, "talent", "indie", "Ironmouse", [1], [1, 2, 3], [1, 2, 3, etc], ["youtube", "twitch"], "description"},


	{ 2000, "talent", "dentsu", "Mint Fantome", [], [], [], [] },
	{ 2001, "talent", "dentsu", "Victoria Roma", [], [], [], []},
	{ 2002, "talent", "dentsu", "Phoebe Chan", [], [], [], [] },

	
];






/*
Array related variables go here
-----------------------------------------------
*/

var interestNum = interestNode.length;

var formalNum = formalGroupNodes.length;

var informalNum = informalGroupNodes.length;

var talentNum = talentNodes.length;


//path to file




/*
CREATE NODES/EDGES
-----------------------------------------------
*/

//need to figure out which direction I want edges to run
//all group edges source from group node?
//all interest nodes sourced from interest node?
//collab talent to talent?





//nodes

//interest loop
for (var a = 0; j < interestNum; j++) {

	set currentInterestNode = interestNode[a];

	var nodeHTMLoutput = "{ id: " + currentInterestNode[0] + ", type: " + currentInterestNode[1] + ", label: " + currentInterestNode[3] + ",  group: " + currentInterestNode[2] + " },\n";

	testHTMLOutput(nodeHTMLoutput);

};


//formal loop
for (var b = 0; j < formalNum; j++) {

	set currentFormalNode = formalGroupNodes[a];

	var nodeHTMLoutput = "{ id: " + currentFormalNode[0] + ", type: " + currentFormalNode[1] + ", label: " + currentFormalNode[3] + ",  group: " + currentFormalNode[2] + " },\n";

	testHTMLOutput(nodeHTMLoutput);

};


//informal loop
for (var c = 0; j < informalNum; j++) {

	set currentInformalNode = informalGroupNodes[a];

	var nodeHTMLoutput = "{ id: " + currentInformalNode[0] + ", type: " + currentInformalNode[1] + ", label: " + currentInformalNode[3] + ",  group: " + currentInformalNode[2] + " },\n";

	testHTMLOutput(nodeHTMLoutput);

};


//talent 
for (var d = 0; j < talentNum; j++) {




};



//edges







/*
FUNCTIONS
-----------------------------------------------
*/



function testHTMLOutput() {


//more chatgpt code, needed the assist to get this working
	const talentName = document.getElementById("nodeOutput");


// set name
	talentName.textContent = node.label || "#node" + "\n";


// set visible text (optional)
	talentName.innerHTML = node.label;


};






