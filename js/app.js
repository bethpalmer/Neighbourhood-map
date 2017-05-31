///////////////////  MODEL  /////////////////////

// places of interest
var poi = [
	{
		area: "lanes",
		areaImages: [
			{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939'},
			{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928'},
			{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690'},
			{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695'},
			{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147'},
			{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'},
			],
		infoContent: "</p>Here is some custom content that will show on Lanes page load...</p>",
		locations: [
			{
				name: "North Laine",
				location: {lat: 50.8249028, lng: -0.1395479},
				wiki: '',
				mainImage: {img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731'},
				images: [
					{img: 'img/north-laine/4160169690_9f625d73fa_q.jpg', attrib: 'https://www.flickr.com/photos/martin_thomas/4160169690'},
					{img: 'img/north-laine/5781531147_80b1b59b0e_q.jpg', attrib: 'https://www.flickr.com/photos/llamnuds/5781531147'},
					{img: 'img/north-laine/6049831939_5b979cf9bc_q.jpg', attrib: 'https://www.flickr.com/photos/gareth1953/6049831939'},
					{img: 'img/north-laine/8198189888_b10dd501df_q.jpg', attrib: 'https://www.flickr.com/photos/martinhearn/8198189888'},
					{img: 'img/north-laine/17056158615_4b51e5b75f_q.jpg', attrib: 'https://www.flickr.com/photos/tarquingemstone/17056158615'},
					{img: 'img/north-laine/19448793731_6f7f389dcb_q.jpg', attrib: 'https://www.flickr.com/photos/garryknight/19448793731'}
				]
			},
			{
				name: "The South Lanes",
				location: {lat: 50.8219453, lng: -0.1404023},
				wiki: '',
				mainImage: {img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'},
				images: [
					{img: 'img/south-lanes/6070703057_38161fb4d2_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/6071247928'},
					{img: 'img/south-lanes/9837521426_c1404d107b_q.jpg', attrib: 'https://www.flickr.com/photos/stephencleary/9837521426'},
					{img: 'img/south-lanes/23731069090_f9477f4e1d_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/23731069090'},
					{img: 'img/south-lanes/24046937695_0752f8f814_q.jpg', attrib: 'https://www.flickr.com/photos/peter2010/24046937695'},
					{img: 'img/south-lanes/1011055674_973d6fcd17_q.jpg', attrib: 'href="https://www.flickr.com/photos/sarahcord/1011055674'},
					{img: 'img/south-lanes/4685129550_aec1a184ac_q.jpg', attrib: 'https://www.flickr.com/photos/eguidetravel/4685129550'}
				]	
			}
		]
	},
	{
		area: "beach",
		areaImages: [
					{img: 'img/seafront/148674451_adde1f1354_q.jpg', attrib: ''},
					{img: 'img/seafront/217805015_36dcb3a9fa_q.jpg', attrib: ''},
					{img: 'img/seafront/379606222_7c6a271b2b_q.jpg', attrib: ''},
					{img: 'img/seafront/9671912424_06227e046c_q.jpg', attrib: ''},
					{img: 'img/seafront/14774074611_d5c26bb3fa_q.jpg', attrib: ''},
					{img: 'img/seafront/14867566034_6af7448638_q.jpg', attrib: ''},
				],
		infoContent: "<img src='img/seafront/where-to-sit.jpg' alt='comedy image of where to sit on Brighton Beach' width=50%><p>Attribution: <a href='https://www.phillucas.com/single-post/2014/10/16/Know-Where-to-Sit-on-Brighton-Beach'>Phil Lucas - Comedian</a></p>",
		locations: [
			{
				name: "Those who wish to be alone",
				location: {lat: 50.8245914, lng: -0.1700829},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: []
			},
			{
				name: "Freelancer, Middle class parents, Families with very large picnics",
				location: {lat: 50.8222356, lng: -0.1541934},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: []
			},
			{
				name: "Day trippers, Hen and Stag Dos, London sorts",
				location: {lat: 50.8208433, lng: -0.1468491},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: []
			},
			{
				name: "Gay and Lesbian community, Arty types, and Hipsters",
				location: {lat: 50.8188354, lng: -0.1310034},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: []
			},
			{
				name: "Unemployed people who like fishing",
				location: {lat: 50.81167, lng: -0.10394},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: []
			}
		]
	},
	{
		area: "landmarks",
		areaImages: [
			{img: 'img/pavilion/3323339269_ca33f086cb_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3324484730'},
			{img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: ''},
			{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: ''},
			{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: ''},
			{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: ''},
			{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: ''}
		],
		infoContent: "<p>Here is some custom content that will show on Landmarks page load...</p>",
		locations: [
			{
				name: "The Pavilion",
				location: {lat: 50.8223517, lng: -0.1376855},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: '',},
				images: [
					{img: 'img/pavilion/3323339269_ca33f086cb_q.jpg', attrib: 'https://www.flickr.com/photos/dominicspics/3324484730'},
					{img: 'img/pavilion/15790666768_99f03d8de6_q.jpg', attrib: ''},
					{img: 'img/pavilion/27325425745_23568c76f4_q.jpg', attrib: 'https://www.flickr.com/photos/david0287/27325425745'},
					{img: 'img/pavilion/6148841975_158004d2a4_q.jpg', attrib: ''},
					{img: 'img/pavilion/8023877916_900b7269b5_q.jpg', attrib: 'https://www.flickr.com/photos/wildlife_encounters/8023877916_900b7269b5_q'},
					{img: 'img/pavilion/121894982_47f685cfb0_q.jpg', attrib: ''}
				]
			},
			{
				name: "The Bandstand",
				location: {lat: 50.8222711, lng: -0.1548171},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Bandstand&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: '',},
				images: [
					{img: 'img/bandstand/14046071078_04e9688f83_q.jpg', attrib: ''},
					{img: 'img/bandstand/31376329692_1d531d7ec3_q.jpg', attrib: ''},
					{img: 'img/bandstand/6952821202_7bccaed344_q.jpg', attrib: ''},
					{img: 'img/bandstand/4174955248_69f3ef6e82_q.jpg', attrib: ''},
					{img: 'img/bandstand/4120736098_1cd0515286_q.jpg', attrib: ''},
					{img: 'img/bandstand/4225381466_e753fe2f1e_q.jpg', attrib: ''}
				]
			},
			{
				name: "The Palace Pier",
				location: {lat: 50.8168555, lng: -0.136738},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', attrib: '',},
				images: [
					{img: 'img/palace-pier/1013795516_63de524d2f_q.jpg', attrib: ''},
					{img: 'img/palace-pier/16712529701_647a6f2cb7_q.jpg', attrib: ''},
					{img: 'img/palace-pier/1012935875_0819ad12d9_q.jpg', attrib: ''},
					{img: 'img/palace-pier/6985876181_5bf4c2d4a7_q.jpg', attrib: ''},
					{img: 'img/palace-pier/11422095636_42781da5c7_q.jpg', attrib: ''},
					{img: 'img/palace-pier/17537667234_405b66e6c3_q.jpg', attrib: ''}
				]
			},
			{
				name: "The West Pier",
				location: {lat: 50.8190545, lng: -0.1519598},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/west-pier/33528982172_e567f1d0d4_q.jpg', attrib: '',},
				images: [
					{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/394504492_cc09843c57_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/5967760435_c25838b65a_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/7584224040_0136934031_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/16474088376_f0aacc4138_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
					{img: 'img/west-pier/33528982172_e567f1d0d4_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'}
				]
			},
			{
				name: "The i360",
				location: {lat: 50.821439, lng: -0.150754},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: '',},
				images: [
					{img: 'img/i360/29482583831_68fbc62c95_q.jpg', attrib: ''},
					{img: 'img/i360/30219857810_18dd92dfb8_q.jpg', attrib: ''},
					{img: 'img/i360/30518153195_79aa8d460a_q.jpg', attrib: ''},
					{img: 'img/i360/31803543046_6f694b9216_q.jpg', attrib: ''},
					{img: 'img/i360/32172673813_e3d512a1b5_q.jpg', attrib: ''},
					{img: 'img/i360/33125713276_d060058ea7_q.jpg', attrib: ''}
				]
			},
			{
				name: "The Brighton Wheel",
				location: {lat: 50.8191078, lng: -0.1343941},
				wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?",
				mainImage: {img: 'img/wheel/6220401503_09f84eccfe_q.jpg', attrib: '',},
				images: [
					{img: 'img/wheel/8717901362_48cfeb14e7_q.jpg', attrib: ''},
					{img: 'img/wheel/6220401503_09f84eccfe_q.jpg', attrib: ''},
					{img: 'img/wheel/6404242061_f705d146f8_q.jpg', attrib: ''},
					{img: 'img/wheel/6890339892_ec45b60a79_q.jpg', attrib: ''},
					{img: 'img/wheel/8503870944_3cb8c8b922_q.jpg', attrib: ''},
					{img: 'img/wheel/14292530155_7da7988640_q.jpg', attrib: ''}
				]
			}
		]
	},
	{
		area: "downs",
		areaImages: [
			{img: '', attrib: ''},
			{img: '', attrib: ''},
			{img: '', attrib: ''},
			{img: '', attrib: ''},
			{img: '', attrib: ''},
			{img: '', attrib: ''}
		],
		infoContent: "<p>Here is some custom content that will show on Downs page load...</p>",
		locations: [
			{
				name: "Devils Dyke",
				location: {lat: 50.8826218, lng: -0.2089273},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			},
			{
				name: "Ditchling Beacon",
				location: {lat: 50.9003315, lng: -0.1085077},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			}
		]
	},
	{
		area: "nightlife",
		areaImages: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				],
		infoContent: "<p>Here is some custom content that will show on Nightlife page load...</p>",
		locations: [
			{
				name: "Concorde 2",
				location: {lat: 50.8173252, lng: -0.1252401},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			},
			{
				name: "Casablanca Jazz Club",
				location: {lat: 50.8209047, lng: -0.1455632},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			},
			{
				name: "Green Door Store",
				location: {lat: 50.8293094, lng: -0.1424677},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			},
			{
				name: "Patterns (formally Audio)",
				location: {lat: 50.8200005, lng: -0.1373349},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			},
			{
				name: "The Volks",
				location: {lat: 50.8192982, lng: -0.1350255},
				wiki: '',
				mainImage: {img: '', attrib: '',},
				images: [
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''},
					{img: '', attrib: ''}
				]
			}
		]
	}
];

var onLoadInfo = {
	infoContent: "<h4>The People</h4>"+
				"<p><small>Brighton - the gay capital of England - is brimming with eccentric characters. Anything goes here in Brighton and Hove and even the most extreme of fashion statements are accepted as the norm. Brightonians are unconventional as standard. We are the only  constituency in the UK to vote in political leadership by the Green Party. There is in fact a local movement to become an independent state - The People's Republic Of Brighton And Hove! In the current political climate, one could argue that it’s an ideal that doesn't seem quite so absurd! And we have even adopted our own unconventional local spirit - Tuaca - a smooth sweet shot served best cold.</small></p>"+
				"<h4>The Events</h4>"+
				"<p><small>Brighton has an impressive Calender of annual events. The whole month of May Brighton is wrapped up in a party atmosphere as the city celebrates the Brighton festival and Brighton fringe both running concurrently for the 4 week period. With street theatre, spectacular costumes, free performances, music, art installations, pop up bars and venues, it's every locals favourite time of year! Other organised events that Brighton boasts include the annual Pride celebration, one of the biggest in Europe, the Kemptown Carnival, Paddle Round the Pier, The Great Escape, October's Comedy Festival, Wildlife Festival, Funk the Format, Shakedown / Boundary Festival, Together the People, the Brighton Zombie Walk, the Naked Bike Ride - we have an occasion for whatever your preference!</small></p>"+
				"<h4>The Vibe</h4>"+
				"<p><small>Even when there's not an organised event on, the sheer volume of visitors in the summer months, the density of pubs and clubs of every description, and the best summer hang out spots all equal one thing: Brighton vibes - as standard! If the sun has been shining, or the moon is full, or the day has a y in it, there will be crazy's to be found and fun to be had.</small></p>",
	photos:	[
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'},
		{img: 'img/west-pier/5629808414_7069fde68b_q.jpg', attrib: 'https://www.flickr.com/photos/hozinja/5629808414'}
	]
};

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

	// Observe when the selectedCategory changes and call the showMarkers and showPhotos function for that area
	this.selectedCategory.subscribe(function(){
		self.showMarkers(self.selectedCategory().area);
		self.showCategoryInfo(self.selectedCategory());
		// self.listStyling(self.selectedCategory().area);
		console.log(self.selectedCategory().area);
		// self.selectedCategory().area.style(color, 'red');
	});

	this.showMarkers = function(findArea) {

		// Clear all markers
		for (var i=0; i<self.markers.length; i++){
			self.markers[i].setMap(null);
		};
		// Clear array - not strictly necessary but will stop array getting clogged up with markers
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
                        image: location.mainImage.img,
                        attrib: location.mainImage.attrib,
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

	// this.listStyling = function (selected) {
	// 	$("#list").removeClass('selected').addClass('selected', self);
	// }

	this.populateInfoWindow = function (marker, infowindow){
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<h5>'+marker.title+'</h5><figure><img src="'+marker.image+'" alt="image of "'+marker.title+'><figcaption class="attrib"><a href="'+marker.attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
			infowindow.open(self.map, marker);
			// CLear marker property if infowindow is closed
			infowindow.addListener('closeclilck', function() {
				infowindow.setMarker(null);
			})
		}
	};

	// To display images relating to a specific marker
	this.populateImageArea = function (marker, imagesArray){
		$('#imageDisplay').empty();
		for (var i=0; i<imagesArray.length; i++){
			$('#imageDisplay').append('<figure><img src="'+imagesArray[i].img+'" class="img-responsive" alt="image of '+marker.title+'"><figcaption class="attrib"><a href="'+marker.attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
	};
	
	// To display images relating to the category 
	this.showCategoryInfo = function (object) {
		$('#imageDisplay').empty();
		for (var i=0; i<object.areaImages.length; i++){
			$('#imageDisplay').append('<figure><img src="'+object.areaImages[i].img+'" class="img-responsive" alt="image of '+object.area+'"><figcaption class="attrib"><a href="'+object.areaImages[i].attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
		$('#infoDisplayHead, #infoDisplayBody').empty();
		$('#infoDisplayHead').append('The '+object.area);
		$('#infoDisplayBody').append(object.infoContent);

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

	this.onLoadDisplay = function (content) {
		$('#imageDisplay').empty();
		for (var i=0; i<content.photos.length; i++){
			$('#imageDisplay').append('<figure><img src="'+content.photos[i].img+'" alt="image of Brighton"><figcaption class="attrib"><a href="'+content.photos[i].attrib+'" target="_blank">Photo</a> licenced under CC</figcaption></figure>');
		};
		$('#infoDisplayHead,  #infoDisplayBody').empty();
		$('#infoDisplayHead').append('What makes Brighton cooler than an Eskimos sunglasses is...');
		$('#infoDisplayBody').append(content.infoContent);
	}

	// this.infoDisplay = function ()

	this.init = function() {

		self.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.827022, lng: -0.158278},
            zoom: 12
        });
       
        self.smallInfowindow = new google.maps.InfoWindow();

        // Initially call showMarkers with filter as empty
        self.showMarkers(null);
        self.onLoadDisplay(onLoadInfo);
	};
};

// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

// SOMEWAY TO LOAD THE LOADWIKI (Was loadData function in example)
// $('#form-container').submit(loadData);


// TO DO

// FUNCTIONALIY
// selectedCategory li styling
// Load Wiki api on individual marker load
// Bonus: selecting a marker selects the category the marker belongs to

// CSS
// Images area to display central or right of row

// DATA
// Lanes / Beach / Landmarks / Downs / Nightlife custom content
// Missing image attribution
// OnLoad / Downs / Nightlife category images
// Beach / Downs / Nightlife items image data



