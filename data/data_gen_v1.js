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
var typeGroupNodeLabelSize = 25;


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
	//index, type, GROUP, label, size var, shape var, physics
	
	[ 0, "interests", "INTERESTS", "Yapping", [9034, 9028, 1000, 1001, 1003, 9042, 9024, 9038, 1012, 9039, 9019, 9032, 9003, 7003, 1002, 11001, 5001, 6004, 9004, 9016, 5005, 1008, 1010, 9009, 9029, 1011, 10007, 10003, 10002, 9036, 9040, 6001, 1015, 9052, 9053  ], false ],

	[ 1, "interests", "INTERESTS", "Gaming", [10005, 10006, 10007, 10008, 10001, 10003, 10004, 9004, 1001, 9033, 9018, 9009, 1008, 1010, 1013, 1003, 9017, 9016, 7002, 9043, 1000, 1009, 1011, 1012, 1014, 1007, 9025, 9021, 9024, 9020, 9019, 9002, 9006, 9007, 9013, 3001, 3002, 3003, 3004, 2001, 2002, 4001, 4002, 4003, 4004, 6003, 1002, 9031, 7004, 9022, 13001, 9045, 6006, 9051, 6002, 9030, 9050, 9044, 9049, 9035, 9027, 11003, 11001, 9036, 1015, 9034, 9052, 12001, 9023 ], false ],

	[ 2, "interests", "INTERESTS", "Music", [1000, 1002, 1005, 1006, 1007, 1009, 1011, 1014, 1015, 2001, 2002, 2003, 3001, 3002, 3003, 3004, 4001, 4002, 4003, 4004, 6001, 6002, 6003, 6004, 9001, 9002, 9003, 9005, 9006, 9007, 9008, 9010, 9011, 9013, 9014, 9015, 9019, 9026, 9031, 9037, 9041, 9043, 5002, 11001, 11014, 11015, 11002, 11016, 11017, 11018, 11019, 11003, 11020, 11021, 11022, 11004, 11005, 11006, 11007, 11008, 11009, 5005, 7001, 7004, 5001, 6005, 10004, 10002, 10001, 11013, 13001, 9046, 9047 ], true ],

	[ 3, "interests", "INTERESTS", "IRL", [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 9016, 9008, 9033, 9053 ], false ],
	[ 4, "interests", "INTERESTS", "Art", [9032, 9003, 7003, 13001], false ],
	[ 5, "interests", "INTERESTS", "STEM", [5005, 8001, 5003, 7002, 9048], false ],
	[ 6, "interests", "INTERESTS", "Sexuality", [1012, 9039, 9036, 9040], false ],
	[ 7, "interests", "INTERESTS", "N/A", [8002, 8003], false ],
	[ 8, "interests", "INTERESTS", "Educational", [10002, 1012, 9048, ], false ],
	[ 9, "interests", "INTERESTS", "Media/React", [9034, 9052], false ],
	[ 10, "interests", "INTERESTS", "ASMR", [12001, 9008, 5005 ], false ],



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
	[  203,  "group", "EN_GIRLYPOPS", "EN Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [6001, 6002, 6003, 6004, 6005, 6006] ],

	// crashout crew
	[  204,  "group", "CRASHOUT_CREW", "Crashout Crew", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [1009, 9021, 9017, 9020] ],

	//vshojo
	[ 205,  "group", "VSHOJO", "ex-Vshjo", typeGroupNodeShape,  typeGroupNodeSize,  typeGroupNodeLabelSize, [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 102, 103, 104 ] ],

	// fleshtubers
	[ 206, "group", "FLESHTUBERS", "Fleshtubers", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009 ] ],

	// indies
	[ 207, "group", "INDIES", "Indies", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [5001, 5002, 5003, 5005, 6001, 6002, 6003, 6004, 7001, 7002, 7003, 7004, 8001, 8002, 8003, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9026, 9027, 9028, 9029, 9030, 9031, 9032, 9033, 9034, 9035, 9036, 9037, 9038, 9039, 9040, 9041, 9042, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 2001, 2002, 2003, 4001, 4002, 4003, 4004, 6005, 9043, 3001, 3002, 3003, 3004, 9044, 6006, 9045, 9046, 9047, 9048, 9049, 9050, 9051, 9052, 9053 ] ],

	// indo girlypops
	[ 209, "group", "INDO_GIRLYPOPS", "Indo Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [11004, 11005, 11006, 11007, 11008, 11009, 13001, 1002,  ] ],

];





//TALENT node
//index, type, GROUP, label, youtube, twitch, wiki, [collabs],  - color is set by group node

//increment by group in steps of 1000
const talentNodes = [

	//INFORMAL GROUPS

	//ex vshjo and vshojo affliated
	[ 1000, "talent", "INDIES", "Ironmouse", "https://www.youtube.com/@IronMouseParty", "https://www.twitch.tv/ironmouse", "wikilink", [], ],
	[ 1001, "talent", "INDIES", "Zentraya", "http://youtube.com/c/Zentreya", "https://www.twitch.tv/zentreya", "wikilink", [],  ],
	[ 1002, "talent", "INDIES", "Michi Mochievee", "https://www.youtube.com/channel/UCnS5IYNyGKOti9cFlK5SefQ", "https://www.twitch.tv/michimochievee", "wikilink", [], ],
	[ 1003, "talent", "INDIES", "Geega", "https://www.youtube.com/@GEEGA/", "https://www.twitch.tv/geega", "wikilink", [], ],
	[ 1005, "talent", "INDIES", "Silvervale", "https://www.youtube.com/channel/UCm8Dj7dQ0oRHXNUXF31kjEw", "https://www.twitch.tv/silvervale", "wikilink", [], ],
	[ 1006, "talent", "INDIES", "K9Kuro", "https://www.youtube.com/channel/UCN5J_HKNGFCPtqAnSjBekcA", "https://www.twitch.tv/k9kuro", "wikilink", [], ],
	[ 1007, "talent", "INDIES", "Apricot (froot)", "https://www.youtube.com/c/ApricottheLichVS", "https://www.twitch.tv/apricot", "wikilink", [], ],
	[ 1008, "talent", "INDIES", "Haruka Karibu", "https://www.youtube.com/c/HarukaKaribu", "https://www.twitch.tv/harukakaribu", "wikilink", [], ],
	[ 1009, "talent", "INDIES", "AmaLee", "https://youtube.com/leeandlie", "https://www.twitch.tv/amalee", "wikilink", [], ],
	[ 1010, "talent", "INDIES", "Henya the Genius", "https://www.youtube.com/channel/UCVhRMzNWYcg8XDTgB9NFRTw", "https://www.twitch.tv/henyathegenius", "wikilink", [], ],
	[ 1011, "talent", "INDIES", "Matara Kan", "https://www.youtube.com/channel/UCxx2uRmAwkhb3QJMfLssgsw", "https://www.twitch.tv/matarakan", "wikilink", [], ],
	[ 1012, "talent", "INDIES", "Projket Melody", "https://www.youtube.com/c/ProjektMelodyOfficial", "https://www.twitch.tv/projektmelody", "wikilink", [], ],
	[ 1013, "talent", "INDIES", "Hime Hajime", "https://www.youtube.com/@himehajime1570", "https://www.twitch.tv/hajime", "wikilink", [], ],
	[ 1014, "talent", "INDIES", "Nyatasha Nyanners", "https://youtube.com/nyanners", "https://www.twitch.tv/nyanners", "wikilink", [], ],
	[ 1015, "talent", "INDIES", "Kson", "https://www.youtube.com/channel/UC9ruVYPv7yJmV0Rh0NKA-Lw", "https://www.twitch.tv/ksonsouchou", "wikilink", [], ],
	//[ 1016, "talent", "INDIES", "Veibae", "youtube", "twitch", "wikilink", [], ],

	//EN girlypops
	[ 6001, "talent", "INDIES", "Akuma Nihmune", "https://www.youtube.com/c/AkumaNihmuneCh", "https://www.twitch.tv/nihmune", "wikilink", [], ],
	[ 6002, "talent", "INDIES", "Bao the Whale", "https://www.youtube.com/@baovtuber", "https://www.twitch.tv/bao", "wikilink", [], ],
	[ 6003, "talent", "INDIES", "Yuzu", "https://www.youtube.com/channel/UCKvij44VV9TWt-EM3evoRWg", "https://www.twitch.tv/yuzu", "wikilink", [], ],
	[ 6004, "talent", "INDIES", "Camila", "https://www.youtube.com/channel/UCdjLJvro7Q3V0M2V2pwWfZA", "https://www.twitch.tv/camila", "wikilink", [], ],
	[ 6005, "talent", "INDIES", "Lucy Pyre", "https://www.youtube.com/channel/UC5VWF53rrEiuYvO5e5Ecn9Q", "https://www.twitch.tv/lucypyre", "wikilink", [], ],
	[ 6006, "talent", "INDIES", "Trickywi", "", "", "wikilink", [], ],

	
	

	//indie general population
	[ 9001, "talent", "INDIES", "Bajiru", "https://www.youtube.com/c/bajiru_EN", "https://www.twitch.tv/bajiru_en", "wikilink", [], ],
	[ 9002, "talent", "INDIES", "dooby3D", "https://www.youtube.com/@dooby3d", "https://www.twitch.tv/dooby3d", "wikilink", [], ],
	[ 9003, "talent", "INDIES", "FroggyLoch", "https://www.youtube.com/channel/UCyHiAEZfJmXO_cBRtgzcWZA/featured", "https://www.twitch.tv/froggyloch", "wikilink", [], ],
	[ 9004, "talent", "INDIES", "Limealicious", "https://www.youtube.com/c/Limealicious", "https://www.twitch.tv/limealicious", "wikilink", [], ],
	[ 9005, "talent", "INDIES", "Sameko Saba", "youtube", "twitch", "wikilink", [], ],
	[ 9006, "talent", "INDIES", "Nimi Nightmare", "youtube", "twitch", "wikilink", [], ],
	[ 9007, "talent", "INDIES", "SixteenInMono", "youtube", "https://www.twitch.tv/sixteeninmono", "wikilink", [], ],
	[ 9008, "talent", "INDIES", "Cottontail_VA", "https://www.youtube.com/cottontailva", "https://www.twitch.tv/cottontailva", "wikilink", [], ],
	[ 9009, "talent", "INDIES", "Arielle_VT", "https://www.youtube.com/@Arielle-VT", "https://www.twitch.tv/arielle", "wikilink", [], ],
	[ 9010, "talent", "INDIES", "Starlight Daryl", "youtube", "https://www.twitch.tv/starlightdaryl", "wikilink", [], ],
	[ 9011, "talent", "INDIES", "Isaa Corva", "https://www.youtube.com/@isaacorva", "https://www.twitch.tv/isaa", "wikilink", [], ],
	[ 9013, "talent", "INDIES", "LordAethelstan", "https://www.youtube.com/channel/UCLI_XmsVZzOrOB1LaoV0BEQ", "https://www.twitch.tv/lordaethelstan", "wikilink", [], ],
	[ 9014, "talent", "INDIES", "obkatiekat", "https://www.youtube.com/obkatiekat", "https://www.twitch.tv/obkatiekat", "wikilink", [], ],
	[ 9015, "talent", "INDIES", "U-san", "https://www.youtube.com/@unnamednow00", "https://www.twitch.tv/unnamednow00", "wikilink", [], ],
	[ 9016, "talent", "INDIES", "Saiiren", "https://www.youtube.com/@saiiren", "https://www.twitch.tv/saiiren", "wikilink", [], ],
	[ 9017, "talent", "INDIES", "Porcelain Maid", "https://www.youtube.com/channel/UCngBjKSLC8IhPNagQCnf2LQ", "https://www.twitch.tv/porcelainmaid", "wikilink", [], ],
	[ 9018, "talent", "INDIES", "Heavenly Father", "https://www.youtube.com/channel/UCrx5cwSB4bl3fI34Boxvq2A", "https://www.twitch.tv/heavenlyfather", "wikilink", [], ],	
	[ 9019, "talent", "INDIES", "pumpkinpotion", "https://www.youtube.com/pumpkinpotion", "https://www.twitch.tv/pumpkinpotion", "wikilink", [], ],
	[ 9020, "talent", "INDIES", "missshadowlovely", "https://www.youtube.com/MissShadowLovely", "https://www.twitch.tv/missshadowlovely", "wikilink", [], ],
	[ 9021, "talent", "INDIES", "CyYu", "https://www.youtube.com/c/@CyYuvods", "https://www.twitch.tv/cyyuvtuber", "wikilink", [], ],
	[ 9022, "talent", "INDIES", "CROC", "https://www.youtube.com/@CROCvt", "https://www.twitch.tv/croc", "wikilink", [], ],
	[ 9023, "talent", "INDIES", "ENVI", "youtube", "https://www.twitch.tv/envi", "wikilink", [], ],
	[ 9024, "talent", "INDIES", "lucia", "https://www.youtube.com/@luciavt", "https://www.twitch.tv/lucia", "wikilink", [], ],
	[ 9025, "talent", "INDIES", "KloeKroc", "https://www.youtube.com/@KloeKroc", "https://www.twitch.tv/kloekroc", "wikilink", [], ],
	[ 9026, "talent", "INDIES", "Derivakat", "https://www.youtube.com/derivakat", "https://www.twitch.tv/derivakat", "wikilink", [], ],
	[ 9027, "talent", "INDIES", "Fufu", "https://www.youtube.com/channel/UCNMHJ9WnMXabPn-iyQKAdcA", "https://www.twitch.tv/fufu", "wikilink", [], ],
	[ 9028, "talent", "INDIES", "KokoNuts", "https://www.youtube.com/channel/UCk9qayCnFw51PIUZKVxH1UQ", "https://www.twitch.tv/kokonuts", "wikilink", [], ],
	[ 9029, "talent", "INDIES", "crelly", "https://www.youtube.com/channel/UCwxaNWg74VccV65gr_L6JZg", "https://www.twitch.tv/crelly", "wikilink", [], ],
	[ 9030, "talent", "INDIES", "Bluto", "youtube", "https://www.twitch.tv/bluto", "wikilink", [], ],
	[ 9031, "talent", "INDIES", "chibidoki", "https://www.youtube.com/channel/UCoqNvjhUxJRYW4JsT5fBK6w", "https://www.twitch.tv/chibidoki", "wikilink", [], ],
	[ 9032, "talent", "INDIES", "x3Dustco", "youtube", "https://www.twitch.tv/x3dustco", "wikilink", [], ],
	[ 9033, "talent", "INDIES", "LaynaLazar", "https://www.youtube.com/@LaynaLazar", "https://www.twitch.tv/laynalazar", "wikilink", [], ],
	[ 9034, "talent", "INDIES", "papamutt", "https://www.youtube.com/channel/UCbAadhjblnwYfQ0xypSH_sg", "https://www.twitch.tv/papamutt", "wikilink", [], ],
	[ 9035, "talent", "INDIES", "FeFe", "https://www.youtube.com/c/fefevtuber", "https://www.twitch.tv/fefe", "wikilink", [], ],
	[ 9036, "talent", "INDIES", "Vexoria the Suneater", "https://www.youtube.com/channel/UC9r8dNEoXdIpYTnoMVFwzhg", "https://www.twitch.tv/vexoria_the_suneater", "wikilink", [], ],
	[ 9037, "talent", "INDIES", "Spite", "https://www.youtube.com/c/SpitemeVtuber", "https://www.twitch.tv/spite", "wikilink", [], ],
	[ 9038, "talent", "INDIES", "Cha Cha Your Vmom", "https://youtube.com/@chachayourvmom", "https://www.twitch.tv/chachayourvmom", "wikilink", [], ],
	[ 9039, "talent", "INDIES", "el_XoX", "https://www.youtube.com/@elXoX34", "https://www.twitch.tv/el_xox", "wikilink", [], ],
	[ 9040, "talent", "INDIES", "MegladonVT", "https://www.youtube.com/channel/UCb5BJg1PJvzQ6kYk7eguzCQ", "https://www.twitch.tv/megalodonvt", "wikilink", [], ],
	[ 9041, "talent", "INDIES", "cerberVT", "https://www.youtube.com/channel/UCBX-cil2Y9-_TOyFxsAdt1w", "https://www.twitch.tv/cerbervt", "wikilink", [], ],
	[ 9042, "talent", "INDIES", "tonkienator", "https://www.youtube.com/@tonkienatorr", "https://www.twitch.tv/tonkienator", "wikilink", [], ],
	[ 9043, "talent", "INDIES", "Dokibird", "https://www.youtube.com/@Dokibird", "https://www.twitch.tv/dokibird", "wikilink", [], ],
	[ 9044, "talent", "INDIES", "Shylilly", "https://www.youtube.com/@Shylily", "https://www.twitch.tv/shylily", "wikilink", [], ],
	[ 9045, "talent", "INDIES", "Meicha", "https://www.youtube.com/channel/UCNbVN2AjnvY73GVS3NdJx4Q/", "https://www.twitch.tv/meicha", "wikilink", [], ],
	[ 9046, "talent", "INDIES", "moniibagel", "https://www.youtube.com/channel/UCfTjT67uIy1hcAJFO7_AqOQ", "https://www.twitch.tv/moniibagel/about", "wikilink", [], ],
	[ 9047, "talent", "INDIES", "InannaBell", "https://www.youtube.com/@inannabell", "https://www.twitch.tv/inannabell", "wikilink", [], ],
	[ 9048, "talent", "INDIES", "Psydere", "https://www.youtube.com/@psydere", "https://www.twitch.tv/psydere", "wikilink", [], ],
	[ 9049, "talent", "INDIES", "FREAM", "", "https://www.twitch.tv/fream", "wikilink", [], ],
	[ 9050, "talent", "INDIES", "Momo", "http://www.youtube.com/themastermo", "https://www.twitch.tv/momo", "wikilink", [], ],
	[ 9051, "talent", "INDIES", "girl_dm_", "https://www.youtube.com/channel/UC_WC6plpIdL_buebR9vSVkg", "https://www.twitch.tv/girl_dm_", "wikilink", [], ],
	[ 9052, "talent", "INDIES", "SunnySplosion", "https://www.youtube.com/@OopsAllSunny", "https://www.twitch.tv/sunnysplosion", "wikilink", [], ],
	[ 9053, "talent", "INDIES", "OniGiri", "https://www.youtube.com/c/OniGirien", "https://www.twitch.tv/onigiri", "wikilink", [], ],

//aqua
//baddaboom
//kumi
//RubinSargasm



	//livestreamers and IRL folks aka Fleshtubers
	[ 10001, "talent", "FLESHTUBERS", "Marcomeatball", "https://www.youtube.com/c/MarcoMeatball", "https://www.twitch.tv/marcomeatball", "wikilink", [], ],
	[ 10002, "talent", "FLESHTUBERS", "lesagesinging", "https://www.youtube.com/channel/UCReU-IqthhUbR7N7EsTu6MQ", "https://www.twitch.tv/lesagesinging", "wikilink", [], ],
	[ 10003, "talent", "FLESHTUBERS", "CDawgVA", "https://www.youtube.com/channel/UCPsZ_0SkFdi551iYTG04R2g", "https://www.twitch.tv/cdawg", "wikilink", [], ],
	[ 10004, "talent", "FLESHTUBERS", "Emily Hopkins", "youtube", "twitch", "wikilink", [], ],
	[ 10005, "talent", "FLESHTUBERS", "JessieCox", "https://youtube.com/JesseCox", "https://www.twitch.tv/jessecox", "wikilink", [], ],
	[ 10006, "talent", "FLESHTUBERS", "Doger", "youtube", "twitch", "wikilink", [], ],
	[ 10007, "talent", "FLESHTUBERS", "Nagzz", "https://www.youtube.com/nagzz", "https://www.twitch.tv/nagzz", "wikilink", [], ],
	[ 10008, "talent", "FLESHTUBERS", "Ray", "http://youtube.com/@rayyylmao", "https://www.twitch.tv/ray", "wikilink", [], ],
	[ 10009, "talent", "FLESHTUBERS", "Chris Broad", "youtube", "twitch", "wikilink", [], ],

	

	//FORMAL GROUPS

	//hololive
	[ 11001, "talent", "HOLOLIVE", "Mori Calliope", "https://www.youtube.com/@MoriCalliope/featured", "https://www.twitch.tv/moricalliope/about", "wikilink", [], ],
	[ 11014, "talent", "HOLOLIVE", "Takanashi Kiara", "https://t.co/mZsEcWct3I", "https://www.twitch.tv/kiara", "wikilink", [], ],
	[ 11015, "talent", "HOLOLIVE", "Ninomae Ina’nis", "https://www.youtube.com/@NinomaeInanis", "", "wikilink", [], ],


	[ 11002, "talent", "HOLOLIVE", "Nerissa Ravencroft", "https://www.youtube.com/@NerissaRavencroft", "https://www.twitch.tv/nerissaravencroft", "wikilink", [], ],
	[ 11016, "talent", "HOLOLIVE", "Koseki Bijou", "https://www.youtube.com/@KosekiBijou", "", "wikilink", [], ],
	[ 11017, "talent", "HOLOLIVE", "Shiori Novella", "https://www.youtube.com/@ShioriNovella", "", "wikilink", [], ],
	[ 11018, "talent", "HOLOLIVE", "Fuwawa Abyssgard", "https://www.youtube.com/@FUWAMOCOch", "", "wikilink", [], ],
	[ 11019, "talent", "HOLOLIVE", "Mococo Abyssgard", "https://www.youtube.com/@FUWAMOCOch", "", "wikilink", [], ],
	
	
	[ 11003, "talent", "HOLOLIVE", "Elizabeth Rose Bloodflame", "youtube", "https://www.twitch.tv/elizabethrosebloodflame", "wikilink", [], ],
	[ 11020, "talent", "HOLOLIVE", "Gigi Murin", "https://www.youtube.com/@holoen_gigimurin", "", "wikilink", [], ],
	[ 11021, "talent", "HOLOLIVE", "Cecilia Immergreen", "https://www.youtube.com/@holoen_ceciliaimmergreen", "", "wikilink", [], ],
	[ 11022, "talent", "HOLOLIVE", "Raora Panthera", "https://www.youtube.com/@holoen_raorapanthera", "", "wikilink", [], ],


	[ 11004, "talent", "HOLOLIVE", "Kureiji Ollie", "https://www.youtube.com/@KureijiOllie", "https://www.twitch.tv/kureijiollie", "wikilink", [], ],
	[ 11005, "talent", "HOLOLIVE", "Moona Hoshinova", "https://www.youtube.com/@MoonaHoshinova", "https://www.twitch.tv/moonahoshinova", "wikilink", [], ],
	[ 11006, "talent", "HOLOLIVE", "Ayunda Risu", "https://www.youtube.com/@ayundarisu", "", "wikilink", [], ],
	[ 11007, "talent", "HOLOLIVE", "Kaela Kovalskia", "https://www.youtube.com/@KaelaKovalskia", "", "wikilink", [], ],
	[ 11008, "talent", "HOLOLIVE", "Kobo Kanaeru", "https://www.youtube.com/@KoboKanaeru", "", "wikilink", [], ], 
	[ 11009, "talent", "HOLOLIVE", "Vestia Zeta", "https://www.youtube.com/@VestiaZeta", "https://www.twitch.tv/vestiazeta", "wikilink", [], ],

	[ 11013, "talent", "HOLOLIVE", "Banzoin Hakka", "https://www.youtube.com/@BanzoinHakka", "https://www.twitch.tv/banzoinhakka", "wikilink", [], ],


	//first stage
	[ 12001, "talent", "FIRST_STAGE", "Liron Lockheart", "https://www.youtube.com/@LironLockheart_FSP", "", "wikilink", [], ],

	//teri-yaki
	[ 13001, "talent", "TERI-YAKI", "RaeLaviere", "https://youtube.com/c/Raelaveire", "https://www.twitch.tv/raelaveire", "wikilink", [], ],

	//lab brats
	[ 5001, "talent", "LAB_BRATS", "chrchie", "https://www.youtube.com/@chrchieVT", "https://www.twitch.tv/chrchie", "wikilink", [], ],
	[ 5002, "talent", "LAB_BRATS", "MinikoMew", "https://www.youtube.com/channel/UC9evPLoYqsHASjrahHekqMA", "https://www.twitch.tv/minikomew", "wikilink", [], ],
	[ 5003, "talent", "LAB_BRATS", "Shoomimi", "https://www.youtube.com/@Shoomimi", "https://www.twitch.tv/shoomimi", "wikilink", [], ],
	[ 5005, "talent", "LAB_BRATS", "Elle_Minibot", "https://www.youtube.com/channel/UCeZe82WbZ7VL9meqWli6qxg", "https://www.twitch.tv/ellie_minibot", "wikilink", [], ],

	// neuroverse
	[ 8001, "talent", "NEUROVERSE", "Vedal", "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", "https://www.twitch.tv/vedal987", "wikilink", [], ],
	[ 8002, "talent", "NEUROVERSE", "Neurosama", "youtube", "twitch", "wikilink", [], ],
	[ 8003, "talent", "NEUROVERSE", "Evil Neuro", "youtube", "twitch", "wikilink", [], ],

	// VichiBan
	[ 7001, "talent", "VICHIBAN", "Buffpup", "https://www.youtube.com/channel/UCM6Ld_dNSaUQ2uwjJ4Gq9FA", "https://www.twitch.tv/buffpup", "wikilink", [], ],
	[ 7002, "talent", "VICHIBAN", "Ai Candii", "http://youtube.com/c/aicandii", "https://www.twitch.tv/aicandii", "wikilink", [], ],
	[ 7003, "talent", "VICHIBAN", "Rosedoodle", "https://www.youtube.com/channel/UCihXhXRz8tj91hBptuSsQ0g", "https://www.twitch.tv/rosedoodle", "wikilink", [], ],
	[ 7004, "talent", "VICHIBAN", "ShiaBun", "https://www.youtube.com/c/ShiaBun", "https://www.twitch.tv/shiabun", "wikilink", [], ],

	// dentsu.exe
	[ 2001, "talent", "DENTSU", "Mint Fantome", "https://www.youtube.com/@mintfantome", "", "wikilink", [], ],
	[ 2002, "talent", "DENTSU", "Victoria Roma", "https://www.youtube.com/@vickyroman_idol", "", "wikilink", [], ],
	[ 2003, "talent", "DENTSU", "Phoebe Chan", "https://www.youtube.com/@feebeechanchibi", "", "wikilink", [], ],

    // NOVA
	[ 3001, "talent", "NOVA", "Akatsuki Hotaru", "https://www.youtube.com/@AkatsukiDHotaru", "https://www.twitch.tv/akatsukidhotaru", "wikilink", [], ],
	[ 3002, "talent", "NOVA", "Hestia Happiness", "https://www.youtube.com/channel/UCyaxhmE-zyUIjMfCGQ75vlA", "https://www.twitch.tv/hestiahappiness", "wikilink", [], ],
	[ 3003, "talent", "NOVA", "Yutori Peke", "https://www.youtube.com/@PekeIsPeak", "https://www.twitch.tv/pekeispeak", "wikilink", [], ],
	[ 3004, "talent", "NOVA", "Okamoto Nagi", "https://www.youtube.com/@NagIsekaied", "https://www.twitch.tv/nagisekaied", "wikilink", [], ],

	// Beastiez
	[ 4001, "talent", "BEASTIEZ", "Tori Oriane", "https://www.youtube.com/@ToriOriane/featured", "https://www.twitch.tv/torioriane", "wikilink", [], ],
	[ 4002, "talent", "BEASTIEZ", "PiaPiUFO", "https://www.youtube.com/c/PiaPIUFO", "https://www.twitch.tv/piapiufo", "wikilink", [], ],
	[ 4003, "talent", "BEASTIEZ", "Beribug", "https://www.youtube.com/channel/UC8PMqEDpXcsooyDGiLvxs4w", "https://www.twitch.tv/beribug", "wikilink", [], ],
	[ 4004, "talent", "BEASTIEZ", "Kairyu Crocodile", "https://www.youtube.com/@KairyuCrocodile", "https://www.twitch.tv/kairyucrocodile", "wikilink", [], ],



];







/*
CREATE NODES/EDGES
-----------------------------------------------
*/

//these const are to deal with the quote mark issue  when concatanating strings in an array

//for nodes
const idText = `{ id: `;
const typeText = `, type: "`;
const groupText = `",  group: "`;
const labelText = `", label: "`;

const collabText = `collab`;

const shapeText = `", shape: "`;
const sizeNodeText = `", size: `;

const fontSizeText = `, font: { size: `;
const fontColorText = `, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } }`;

const youtubeText = `", youtube: "`;
const twitchText = `", twitch: "`;
const wikiText = `", wiki: "`;

const physicsText = `", fixed: `;

const endText = `" }`;
const physicsEndText = ` }`;


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

	var nodeHTMLoutput = idText + currentInterestNode[0] + typeText + currentInterestNode[1] + groupText + currentInterestNode[2] + labelText + currentInterestNode[3] + physicsText + currentInterestNode[5] + physicsEndText;

/*	var nodeHTMLoutput = idText + currentInterestNode[0] + typeText + currentInterestNode[1] + groupText + currentInterestNode[2] + labelText + currentInterestNode[3] + endText;
*/
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