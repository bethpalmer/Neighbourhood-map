///////////////////  MODEL  /////////////////////

// places[i].locations[i].name
// places[i].locations[i].location

// selectedCategory is poiList[0]
// for (var locations in selectedCategory){
//	console.log('${selectedCategory[locations]}')
// }

// places of interest
var poi = [
	{
	area: "lanes",
	locations: [
		{
			name: "North Laine",
			location: {lat: 50.8249028, lng: -0.1395479}
		},
		{
			name: "The South Lanes",
			location: {lat: 50.8219453, lng: -0.1404023}
		}
	]},
	{
	area: "beach",
	locations: [
		{
			name: "Old people who swim in the sea every single day of the year",
			location: {lat: 50.8201789, lng: -0.1426435}
		},
		{
			name: "Lovers of bongo drum",
			location: {lat: 50.8201789, lng: -0.1426435}
		}
	]},
	{
	area: "landmarks",
	locations: [
		{
			name: "The Pavilion",
			location: {lat: 50.8223517, lng: -0.1376855}
		},
		{
			name: "The Bandstand",
			location: {lat: 50.8247058, lng: -0.1413334}
		},
		{
			name: "The Palace Pier",
			location: {lat: 50.8168555, lng: -0.136738}
		},
		{
			name: "The West Pier",
			location: {lat: 50.8190545, lng: -0.1519598}
		},
		{
			name: "The i360",
			location: {lat: 50.821439, lng: -0.150754}
		},
		{
			name: "The Brighton Wheel",
			location: {lat: 50.8191078, lng: -0.1343941}
		}
	]},
	{
	area: "downs",
	locations: [
		{
			name: "Devils Dyke",
			location: {lat: 50.8826218, lng: -0.2089273}
		},
		{
			name: "Ditchling Beacon",
			location: {lat: 50.9003315, lng: -0.1085077}
		}
	]},
	{
	area: "music",
	locations: [
		{
			name: "Concorde 2",
			location: {lat: 50.8173252, lng: -0.1252401}
		},
		{
			name: "Casablanca Jazz Club",
			location: {lat: 50.8209047, lng: -0.1455632}
		},
		{
			name: "Green Door Store",
			location: {lat: 50.8293094, lng: -0.1424677}
		},
		{
			name: "Patterns (formally Audio)",
			location: {lat: 50.8200005, lng: -0.1373349}
		},
		{
			name: "The Volks",
			location: {lat: 50.8192982, lng: -0.1350255}
		}
	]}
];

// var POI = function(area, locations){
// 	this.area = ko.observable(area);
// 	this.locations = ko.observableArray(locations);
// };

/////////////////////  VIEWMODEL ///////////////////////////////

var ViewModel = function(){

	var self = this;

	this.markers = [];

	// Makes my model data observable and useable by the view via the ViewModel.
	this.poiList = ko.observableArray([]); // observable array of objects

	poi.forEach(function(object){
		self.poiList.push(object);
	});

	this.selectedCategory = ko.observable();
	// console.log("Category changed to "+self.selectedCategory.area);

	this.places = ko.observableArray([]); // which needs to contain objects within the locations array containing name: and location:

	this.clickCategory = function(clicked){ // THIS SETS THE selectedCategory to one of the array indexes of poiList
		self.selectedCategory(clicked);
	};

	this.selectedCategory.subscribe(function(newValue){
		self.showMarkers(newValue.area);
	});

	this.showMarkers = function(findArea) {

		// clear markers
		for (var i=0; i<self.markers.length; i++){
			self.markers[i].setMap(null);
		};
		
		self.markers = [];

		// add markers
		var bounds = new google.maps.LatLngBounds();

		poi.forEach(function(area) {
			if (findArea == null || area.area == findArea) {
				area.locations.forEach(function(location) {

					var marker = new google.maps.Marker({
                        map: self.map,
                        position: location.location,
                        title: location.name,
                        animation: google.maps.Animation.DROP
                    });

                    bounds.extend(location.location);

                    self.markers.push(marker);

				});
			}
		});

		self.map.fitBounds(bounds);

	};

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        var largeInfowindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();

        self.showMarkers(null);

	};

	// LOOK WITHIN THE OBJECT AND PACKAGE UP LOCATIONS[I].OBJECTS TO BE USED BY MAPS
};

var vm = new ViewModel();
ko.applyBindings(vm);

///////////////////// NEXT STEPS ////////////////////////////
/*
GOAL: CREATE AND DISPLAY MARKERS FOR EACH CATEGORY WHEN THAT CATEGORY IS MARKED AS SELECTEDCATEGORY
GOAL2: DISPLAY MARKERS FOR ALL CATEGORIES ON INITIAL LOAD
*/


////////////////////// MAP HANDLING //////////////////////////

//

