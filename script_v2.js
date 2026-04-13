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




/*
NETWORK
-----------------------------------------------
*/



// this is what hold the params for and instintates the network
function startNetwork(data) {
	const container = document.getElementById("mynetwork");

	const options = {
		// global node properties, can be overidden on a per node basis
		nodes: {
			shape: "box",
			margin: { top: 10, right: 15, bottom: 10, left: 15 },
			font: { size: 14},
			// this sets how much the nodes repell each other, values >1 required
			mass: 1.5,
		}, 
		// manually set the colors for legibility
		groups: {
			interests: {
				color: {background: "grey"},
				shape: "hexagon"
			},
		},
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



//array for node/edge gen

{
	[
		//INTEREST NODE
		//
		{["Topic", "group", "size", "shape"]}
	],
	[
		//GROUP NODE
		//"group name", view id, node color var, label color var, size var, shape var
		{["Vshojo", "node color", "label text color", "size", "shape"],  }, 


		//TALENT node
		//name, [formal groups], [informal groups], [interests]
		{"Ironmouse", [1], ["Vein Gang"], [3000, 3001, 3002]},
	]
}

















/*
CREATE NODEES/EDGES
-----------------------------------------------
*/



//loop through each interest node

//loop through each group, group node first
	//loop through edges per talent node









/*
FILTER GOES HERE
-----------------------------------------------
*/