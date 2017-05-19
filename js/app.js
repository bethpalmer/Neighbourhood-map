///////////////////  MODEL  /////////////////////

// places of interest
var poi = {

	lanes: [
		{
			name: "North Laine",
			display: true,
			location: {lat: 50.8249028, lng: -0.1395479}
		},
		{
			name: "The South Lanes",
			display: true,
			location: {lat: 50.8219453, lng: -0.1404023}
		}
	],

	beach: [
		{
			name: "Old people who swim in the sea every single day of the year",
			display: true,
			location: {lat: 50.8201789, lng: -0.1426435}
		},
		{
			name: "Lovers of bongo drum",
			display: true,
			location: {lat: 50.8201789, lng: -0.1426435}
		}
	],

	landmarks: [
		{
			name: "The Pavilion",
			display: true,
			location: {lat: 50.8223517, lng: -0.1376855}
		},
		{
			name: "The Bandstand",
			display: true,
			location: {lat: 50.8247058, lng: -0.1413334}
		},
		{
			name: "The Palace Pier",
			display: true,
			location: {lat: 50.8168555, lng: -0.136738}
		},
		{
			name: "The West Pier",
			display: true,
			location: {lat: 50.8190545, lng: -0.1519598}
		},
		{
			name: "The i360",
			display: true,
			location: {lat: 50.821439, lng: -0.150754}
		},
		{
			name: "The Brighton Wheel",
			display: true,
			location: {lat: 50.8191078, lng: -0.1343941}
		}
	],

	downs: [
		{
			name: "Devils Dyke",
			display: true,
			location: {lat: 50.8826218, lng: -0.2089273}
		},
		{
			name: "Ditchling Beacon",
			display: true,
			location: {lat: 50.9003315, lng: -0.1085077}
		}
	],

	music: [
		{
			name: "Concorde 2",
			display: true,
			location: {lat: 50.8173252, lng: -0.1252401}
		},
		{
			name: "Casablanca Jazz Club",
			display: true,
			location: {lat: 50.8209047, lng: -0.1455632}
		},
		{
			name: "Green Door Store",
			display: true,
			location: {lat: 50.8293094, lng: -0.1424677}
		},
		{
			name: "Patterns (formally Audio)",
			display: true,
			location: {lat: 50.8200005, lng: -0.1373349}
		},
		{
			name: "The Volks",
			display: true,
			location: {lat: 50.8192982, lng: -0.1350255}
		}
	]
};

// var categoryList = ko.observableArray(['The Lanes', 'The Beach', 'The Landmarks', 'The Downs', 'The Music Venues']);

var POI = function(data){
	this.lanes = ko.observableArray(data.name, data.display, data.location);
	this.beach = ko.observableArray(data.name, data.display, data.location);
	this.landmarks = ko.observableArray(data.name, data.display, data.location);
	this.downs = ko.observableArray(data.name, data.display, data.location);
	this.music = ko.observableArray(data.name, data.display, data.location);
};

// var Lanes = function(data){
// 	this.name = ko.observable(data.name);
// 	this.location = ko.observable(data.location);
// };

// var Beach = function(data){
// 	this.name = ko.observable(data.name);
// 	this.location = ko.observable(data.location);
// };

// var Landmark = function(data){
// 	this.name = ko.observable(data.name);
// 	this.location = ko.observable(data.location);
// };

// var Downs = function(data){
// 	this.name = ko.observable(data.name);
// 	this.location = ko.observable(data.location);
// };

// var Music = function(data){
// 	this.name = ko.observable(data.name);
// 	this.location = ko.observable(data.location);
// };

// var Place = function(data){
// 	this.name = ko.observable(data.name);
// 	this.category = ko.observable(data.category);
// 	this.location = ko.observable(data.location);
// };

/////////////////////  VIEWMODEL ///////////////////////////////

var ViewModel = function(){

	var self = this;

	this.poiList = ko.observableArray([]);


	var categories = Object.keys(poi);
	for (var i=0; i<categories.length; i++){
		self.poiList.push(categories[i]);
	}
	// poi.forEach(function(category){
	// 	self.poiList.push( new POI(category) );
	// })

	// this.selectedCategory = ko.observable(categoryList()[null]);

	// this.selectCategory = function(clickedCategory){
		// self.selectedCategory(clickedCategory);
	// 	console.log("Category changed");
	// };
};

ko.applyBindings(new ViewModel());


