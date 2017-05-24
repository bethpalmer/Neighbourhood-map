///////////////////  MODEL  /////////////////////

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
			location: {lat: 50.8223517, lng: -0.1376855},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?"
		},
		{
			name: "The Bandstand",
			location: {lat: 50.8247058, lng: -0.1413334},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Bandstand&section=0&prop=text&format=json&callback=?"
		},
		{
			name: "The Palace Pier",
			location: {lat: 50.8168555, lng: -0.136738},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?"
		},
		{
			name: "The West Pier",
			location: {lat: 50.8190545, lng: -0.1519598},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?"
		},
		{
			name: "The i360",
			location: {lat: 50.821439, lng: -0.150754},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?"
		},
		{
			name: "The Brighton Wheel",
			location: {lat: 50.8191078, lng: -0.1343941},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?"
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

/////////////////////  VIEWMODEL ///////////////////////////////

var ViewModel = function(){

	var self = this;

	this.markers = [];

	// Makes my model data observable and useable by the view via the ViewModel.
	this.poiList = ko.observableArray([]); // observable array of objects

	// Populate the observable array 
	poi.forEach(function(object){
		self.poiList.push(object);
	});

	this.selectedCategory = ko.observable();

	this.clickCategory = function(clicked){
		self.selectedCategory(clicked);
	};

	// Observe when the selectedCategory changes and call the showMarkers function for that area
	this.selectedCategory.subscribe(function(){
		self.showMarkers(self.selectedCategory().area);
	});

	this.showMarkers = function(findArea) {

		// Clear all markers
		for (var i=0; i<self.markers.length; i++){
			self.markers[i].setMap(null);
		};
		// Clear array - not strictly necessary but array would eventually get clogged up with markers
		self.markers = [];

		// Add markers
		var bounds = new google.maps.LatLngBounds();

		// Argument of area here is referring to the whole object
		// When showMarkers function is called initially in the init function, it is passed an argument of null, so will show markers in all areas
		// Otherwise filter for where the object area, area property, is equal to the area passed in by the selectedCategory.
		poi.forEach(function(area) {
			if (findArea == null || area.area == findArea) {
				area.locations.forEach(function(location) {

					// Make markers
					var marker = new google.maps.Marker({
                        map: self.map,
                        position: location.location,
                        title: location.name,
                        animation: google.maps.Animation.DROP
                    });

                    bounds.extend(location.location);

                    // Push markers to markers array
                    self.markers.push(marker);
                    marker.addListener('click', function(){
                        self.populateInfoWindow(this, self.largeInfowindow);
                    });

				});
			}
		});

		self.map.fitBounds(bounds);

	};

	this.populateInfoWindow = function (marker, infowindow){
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>'+marker.title+'</div>');
			infowindow.open(self.map, marker);
			// CLear marker property if infowindow is closed
			infowindow.addListener('closeclilck', function() {
				infowindow.setMarker(null);
			})
		}
	};
	

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        self.largeInfowindow = new google.maps.InfoWindow();

        // Initially call showMarkers with filter as empty
        self.showMarkers(null);
	};
};

// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

