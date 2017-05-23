///////////////////  MODEL  /////////////////////

// places[i].locations[i].name
// places[i].locations[i].location


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

	// Makes my model data observable and useable by the view via the ViewModel intermediary.
	this.poiList = ko.observableArray([]); // observable array of objects

	poi.forEach(function(object){
		self.poiList.push(object);
	});
	// console.log(self.poiList());

	this.selectedCategory = ko.observable(this.poiList()[null]);
	// console.log("Category changed to "+self.selectedCategory.area);

	this.places = ko.observableArray([]); // which needs to contain objects within the locations array containing name: and location:

	this.selectCategory = function(clicked){
		self.selectedCategory(clicked);
		// var elem = document.getElementById('list');
		// elem.style.color = #ff0000; // defines selectedCategory as the object with area: and locations:
		
	};
	// console.log(this.selectedCategory);

	// this.getPlaces = function(selectedCategory, object){
	// 	for (var i=0; i<selectedCategory.locations.length; i++){
	// 		individualPlaceObj.locations.push(object);
	// 	};
	// };
	// console.log(individualPlaceObj);
	// LOOK WITHIN THE OBJECT AND PACKAGE UP LOCATIONS[I].OBJECTS TO BE USED BY MAPS
};

ko.applyBindings(new ViewModel());

///////////////////// NEXT STEPS ////////////////////////////
/*
GOAL: CREATE AND DISPLAY MARKERS FOR EACH CATEGORY WHEN THAT CATEGORY IS MARKED AS SELECTEDCATEGORY
*/


////////////////////// MAP HANDLING //////////////////////////

var map;
var markers = [];
// var musicMarkers = [];
function initMap(){

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.827022, lng: -0.158278},
        zoom: 12
    });
}
   
    // var largeInfowindow = new google.maps.InfoWindow();
    // var bounds = new google.maps.LatLngBounds();
    
//     var places = [];

//     poiList.forEach(function(obj){ 
//         places.push(obj);
//     });

//     console.log(places);

//     for (var i=0; i<places.length; i++){
//          places[i].locations.forEach(function(object) {
//              var position = location;
//              var title = name;
//              var marker = new google.maps.Marker({
//                 map: map,
//                 position: postion,
//                 title: title,
//                 animation: google.maps.Animation.DROP,
//                 id: i
//             });

//             markers.push(marker);
//             bounds.extend(marker.position);
//             marker.addListener('click', function(){
//                 populateInfoWindow(this, largeInfowindow);
//             });
//         });
//     };               
//     map.fitBounds(bounds);
    // map.fitBounds(bounds); // won't set map bounds until we showHouses()
    // document.getElementById('list_2').addEventListener('click', showLandmarks);
    // document.getElementById('list_4').addEventListener('click', showMusic);
// };
// This function populates the infowindow when the marker is clicked. Only allows one info window to open, and populates based on markers position.
// function populateInfoWindow(marker, infowindow){
    // check to make sure infowindow is not already open
    // if (infowindow.marker != marker) {
    //     infowindow.marker = marker;
    //     infowindow.setContent('<div>' + marker.title + '</div>');
    //     infowindow.open(map, marker);
        // make sure the marker property is cleared if the infowindow is closed
    //     Infowindow.addListener('closeclick', function(){
    //         infowindow.setMarker(null);
    //     })
    // }
// }

// function showAll(){
//     var bounds = new google.maps.LatLngBounds();
//     // Extend the boundaries of the map for each marker and display the marker
//     for (var i=0; i<landmarkMarkers.length; i++){
//         landmarkMarkers[i].setMap(map);
//         bounds.extend(landmarkMarkers[i].position);
//     }
//     for (var i=0; i<musicMarkers.length; i++){
//         musicMarkers[i].setMap(map);
//         bounds.extend(musicMarkers[i].position);
//     }
//     map.fitBounds(bounds);
// };
// This function will loop through the markers array and display them all
// function showLandmarks(){
//     var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
//     for (var i=0; i<landmarkMarkers.length; i++){
//         landmarkMarkers[i].setMap(map);
//         bounds.extend(landmarkMarkers[i].position);
//     }
//     map.fitBounds(bounds);
// }
// function showMusic(){
//     var bounds = new google.maps.LatLngBounds();
//     for (var i=0; i<musicMarkers.length; i++){
//         musicMarkers[i].setMap(map);
//         bounds.extend(musicMarkers[i].position);
//     }
//     map.fitBounds(bounds);     

