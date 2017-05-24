///////////////////  MODEL  /////////////////////

// places of interest
var poi = [
	{
	area: "lanes",
	areaImages: ['img/north-laine/4160169690_9f625d73fa_q.jpg', 'img/north-laine/5781531147_80b1b59b0e_q.jpg', 'img/north-laine/6049831939_5b979cf9bc_q.jpg', 'img/south-lanes/6070703057_38161fb4d2_q.jpg', 'img/south-lanes/24046937695_0752f8f814_q.jpg', 'img/south-lanes/23731069090_f9477f4e1d_q.jpg'],
	locations: [
		{
			name: "North Laine",
			location: {lat: 50.8249028, lng: -0.1395479},
			wiki: '',
			mainImage: 'img/north-laine/19448793731_6f7f389dcb_q.jpg',
			images: ['img/north-laine/4160169690_9f625d73fa_q.jpg', 'img/north-laine/5781531147_80b1b59b0e_q.jpg', 'img/north-laine/6049831939_5b979cf9bc_q.jpg', 'img/north-laine/8198189888_b10dd501df_q.jpg', 'img/north-laine/17056158615_4b51e5b75f_q.jpg', 'img/north-laine/19448793731_6f7f389dcb_q.jpg']
		},
		{
			name: "The South Lanes",
			location: {lat: 50.8219453, lng: -0.1404023},
			wiki: '',
			mainImage: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg',
			images: ['img/south-lanes/6070703057_38161fb4d2_q.jpg', 'img/south-lanes/9837521426_c1404d107b_q.jpg', 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', 'img/south-lanes/24046937695_0752f8f814_q.jpg', 'img/south-lanes/1011055674_973d6fcd17_q.jpg', 'img/south-lanes/4685129550_aec1a184ac_q.jpg']
		}
	]},
	{
	area: "beach",
	areaImages: ['img/seafront/148674451_adde1f1354_q.jpg', 'img/seafront/217805015_36dcb3a9fa_q.jpg', 'img/seafront/379606222_7c6a271b2b_q.jpg', 'img/seafront/9671912424_06227e046c_q.jpg', 'img/seafront/14774074611_d5c26bb3fa_q.jpg', 'img/seafront/14867566034_6af7448638_q.jpg'],
	locations: [
		{
			name: "Old people who swim in the sea every single day of the year",
			location: {lat: 50.8201789, lng: -0.1426435},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "Lovers of bongo drum",
			location: {lat: 50.8201789, lng: -0.1426435},
			wiki: '',
			mainImage: '',
			images: []
		}
	]},
	{
	area: "landmarks",
	areaImages: ['img/pavilion/5228108302_aa4375a233_q.jpg', 'img/bandstand/14046071078_04e9688f83_q.jpg', 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', 'img/west-pier/394504492_cc09843c57_q.jpg', 'img/i360/31803543046_6f694b9216_q.jpg', 'img/wheel/8717901362_48cfeb14e7_q.jpg'],
	locations: [
		{
			name: "The Pavilion",
			location: {lat: 50.8223517, lng: -0.1376855},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/pavilion/8023877916_900b7269b5_q.jpg',
			images: ['img/pavilion/3323339269_ca33f086cb_q.jpg', 'img/pavilion/15790666768_99f03d8de6_q.jpg', 'img/pavilion/27325425745_23568c76f4_q.jpg', 'img/pavilion/6148841975_158004d2a4_q.jpg', 'img/pavilion/8023877916_900b7269b5_q.jpg', 'img/pavilion/121894982_47f685cfb0_q.jpg']
		},
		{
			name: "The Bandstand",
			location: {lat: 50.8247058, lng: -0.1413334},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Bandstand&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/bandstand/14046071078_04e9688f83_q.jpg',
			images: ['img/bandstand/14046071078_04e9688f83_q.jpg', 'img/bandstand/31376329692_1d531d7ec3_q.jpg', 'img/bandstand/6952821202_7bccaed344_q.jpg', 'img/bandstand/4174955248_69f3ef6e82_q.jpg', 'img/bandstand/4120736098_1cd0515286_q.jpg', 'img/bandstand/4225381466_e753fe2f1e_q.jpg']
		},
		{
			name: "The Palace Pier",
			location: {lat: 50.8168555, lng: -0.136738},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg',
			images: ['img/palace-pier/1013795516_63de524d2f_q.jpg', 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', 'img/palace-pier/1012935875_0819ad12d9_q.jpg', 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', 'img/palace-pier/11422095636_42781da5c7_q.jpg', 'img/palace-pier/17537667234_405b66e6c3_q.jpg']
		},
		{
			name: "The West Pier",
			location: {lat: 50.8190545, lng: -0.1519598},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/west-pier/33528982172_e567f1d0d4_q.jpg',
			images: ['img/west-pier/394504492_cc09843c57_q.jpg', 'img/west-pier/5629808414_7069fde68b_q.jpg', 'img/west-pier/5967760435_c25838b65a_q.jpg', 'img/west-pier/7584224040_0136934031_q.jpg', 'img/west-pier/16474088376_f0aacc4138_q.jpg', 'img/west-pier/33528982172_e567f1d0d4_q.jpg']
		},
		{
			name: "The i360",
			location: {lat: 50.821439, lng: -0.150754},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/i360/29482583831_68fbc62c95_q.jpg',
			images: ['img/i360/29482583831_68fbc62c95_q.jpg', 'img/i360/30219857810_18dd92dfb8_q.jpg', 'img/i360/30518153195_79aa8d460a_q.jpg', 'img/i360/31803543046_6f694b9216_q.jpg', 'img/i360/32172673813_e3d512a1b5_q.jpg', 'img/i360/33125713276_d060058ea7_q.jpg']
		},
		{
			name: "The Brighton Wheel",
			location: {lat: 50.8191078, lng: -0.1343941},
			wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?",
			mainImage: 'img/wheel/6220401503_09f84eccfe_q.jpg',
			images: ['img/wheel/8717901362_48cfeb14e7_q.jpg', 'img/wheel/6220401503_09f84eccfe_q.jpg', 'img/wheel/6404242061_f705d146f8_q.jpg', 'img/wheel/6890339892_ec45b60a79_q.jpg', 'img/wheel/8503870944_3cb8c8b922_q.jpg', 'img/wheel/14292530155_7da7988640_q.jpg']
		}
	]},
	{
	area: "downs",
	areaImages: [],
	locations: [
		{
			name: "Devils Dyke",
			location: {lat: 50.8826218, lng: -0.2089273},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "Ditchling Beacon",
			location: {lat: 50.9003315, lng: -0.1085077},
			wiki: '',
			mainImage: '',
			images: []
		}
	]},
	{
	area: "nightlife",
	areaImages: [],
	locations: [
		{
			name: "Concorde 2",
			location: {lat: 50.8173252, lng: -0.1252401},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "Casablanca Jazz Club",
			location: {lat: 50.8209047, lng: -0.1455632},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "Green Door Store",
			location: {lat: 50.8293094, lng: -0.1424677},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "Patterns (formally Audio)",
			location: {lat: 50.8200005, lng: -0.1373349},
			wiki: '',
			mainImage: '',
			images: []
		},
		{
			name: "The Volks",
			location: {lat: 50.8192982, lng: -0.1350255},
			wiki: '',
			mainImage: '',
			images: []
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
                        image: location.mainImage,
                        animation: google.maps.Animation.DROP
                    });

                    bounds.extend(location.location);

                    // Push markers to markers array
                    self.markers.push(marker);
                    marker.addListener('click', function(){
                        self.populateInfoWindow(this, self.smallInfowindow);
                        self.populateImageArea(this, location.images);
                    });

				});
			}
		});

		self.map.fitBounds(bounds);

	};

	this.populateInfoWindow = function (marker, infowindow){
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>'+marker.title+'</div><img src="'+marker.image+'" alt="image of the area">');
			infowindow.open(self.map, marker);
			// CLear marker property if infowindow is closed
			infowindow.addListener('closeclilck', function() {
				infowindow.setMarker(null);
			})
		}
	};

	this.populateImageArea = function (marker, imagesArray){
		$('#imageDisplay').empty();
		for (var i=0; i<imagesArray.length; i++){
			$('#imageDisplay').append('<img class="imgSet" src="'+imagesArray[i]+'" alt="images of place">');
		};
	};
	
	// this.loadWiki = function (argument) {
	// 	var $wikiElem = $('#wikipedia-links');
	// 	// clear out old data before new request
	//     $wikiElem.text("");
	//     // load Wikipedia articles via AJAX request and JSON-P to get round CORS
	//     var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

	//     var wikiRequestTimeout = setTimeout(function(){
	//         $wikiElem.text("failed to get Wikipedia resources");
	//     }, 8000);

	//     $.ajax({
	// 	    type: "GET",
	// 	    url: "",
	// 	    contentType: "application/json; charset=utf-8",
	// 	    async: true,
	// 	    dataType: "json",
	// 	    success: function (data, textStatus, jqXHR) {

	// 	        var markup = data.parse.text["*"];
	// 	        var blurb = $('<div></div>').html(markup);
	// 	        $('#article').html($(blurb).find('p'));

	// 	    },
	// 	    clearTimeout(wikiRequestTimeout);
	// 	})
	// 	return false;
	// };

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        self.smallInfowindow = new google.maps.InfoWindow();

        // Initially call showMarkers with filter as empty
        self.showMarkers(null);
	};
};

// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

// SOMEWAY TO LOAD THE LOADWIKI (Was loadData function in example)
// $('#form-container').submit(loadData);

