var ViewModel = function() {
	var self = this;
	// var bounds;
	this.markers = [];
	// this.bounds = new google.maps.LatLngBounds();
	// Makes my model data observable and useable by the view via the ViewModel.
	this.poiList = ko.observableArray([]);
	// Populate the observable array 
	poi.forEach(function(area) {
		self.poiList.push(area);
	});
	this.selectedArea = ko.observable();
	// For when you click on a list item
	this.clickArea = function(clicked) {
		self.selectedArea(clicked);
	};
	// Observe when the selectedArea changes and show markers and area info specific to that area
	this.selectedArea.subscribe(function() {
		self.filterMarkers(self.selectedArea(), self.markers);
		self.populateInfoDisplay(self.selectedArea());
		self.populateImageArray(self.selectedArea());

	});

	this.createMarkers = function(poi) {
		
		var bounds = new google.maps.LatLngBounds();
		
		self.markers = [];
		
		poi.forEach(function(area) {
			area.locations.forEach(function(location) {
				// Set the attribution to image source if it has one or else attribution is source is absent
				var attrib = '';
				if (location.mainImage.source) {
					attrib = 'Image from venue <a target="_blank" href="' + location.mainImage.source + '">Website</a>';
				} else {
					attrib = '<a target="_blank" href="' + location.mainImage.attrib + '">Photo</a> licenced under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC</a>';
				}

				var marker = new google.maps.Marker({
					map: self.map,
					position: location.location,
					title: location.name,
					image: location.mainImage.img,
					attrib: attrib,
					area: area.area,
					animation: google.maps.Animation.DROP
				});
				bounds.extend(location.location);
				self.markers.push(marker);
				marker.addListener('click', function() {
					self.populateInfoPopup(this, location, self.infoPopup);
					self.populateImageArray(location);
					self.populateInfoDisplay(location);
					for (var i = 0; i < self.markers.length; i++) {
						self.markers[i].setAnimation(null);
					}
					self.toggleBounce(this);
				})
			})
		});
		self.map.fitBounds(bounds);
		// console.log(self.markers);
	};

	this.filterMarkers = function(selectedArea, markers) {
		var bounds = new google.maps.LatLngBounds();
		markers.forEach(function(marker) {
			marker.setVisible(false);
			
			// if (marker.area !==selectedArea) {
			// 	console.log("Not equal");
			// };

			if (selectedArea.area == marker.area) {
				marker.setVisible(true);
				bounds.extend(marker.position);
			};

		});
		self.map.fitBounds(bounds);
	};

	// Animate individual clicked marker
	this.toggleBounce = function(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	};

	this.populateInfoPopup = function(marker, location, infoPopup) {
		// Get info for image alt either from location name or from alt property of img where there are formatting issue from long location names
		var alt = '';
		if (!location.mainImage.alt) {
			alt = location.name;
		} else {
			alt = location.mainImage.alt;
		}
		if (infoPopup.marker != marker) {
			infoPopup.marker = marker;
			infoPopup.setContent('<h5>' + marker.title + '</h5><figure><img src="' + marker.image + '" alt="image of "' + alt + '><figcaption>' + marker.attrib + '</figcaption></figure>');
			infoPopup.open(self.map, marker);
			// Clear marker property when infoPopup is closed
			infoPopup.addListener('closeclilck', function() {
				infoPopup.setMarker(null);
			});
		}
	};

	this.imageArray = ko.observableArray([]);

	// To display images arrays relating to the area, or the specific location, or the initial load selection
	this.populateImageArray = function(object) {
		$('#imageDisplay').empty();
		var imgDetails = {};

		if (object.areaImages) {
			object.areaImages.forEach (function(image) {
				imgDetails.img = image.img;
				imgDetails.attrib = image.attrib;
				imgDetails.alt = "Photo of Brighton "+object.area;
				self.imageArray.push(imgDetails);
			})
			
		} else if (object.images) {
			object.images.forEach (function(image) {
				imgDetails.img = image.img;
				imgDetails.attrib = image.attrib;
				imgDetails.alt = "Photo of "+object.name;
				self.imageArray.push(imgDetails);
			})
	
		} else if (object.photos) {
			object.photos.forEach (function(image) {
				imgDetails.img = image.img;
				imgDetails.attrib = image.attrib;
				imgDetails.alt = "Photo of Brighton";
				self.imageArray.push(imgDetails);
			})
		};
	};

	this.callWikiAjax = function(location) {
		$.ajax({
			type: "GET",
			url: "http://en.wikipedia.org/w/api.php?action=parse&page=" + location.wiki + "&prop=text&format=json&callback=?",
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: "json",
			timeout: 8000,
			success: function(data, textStatus, jqXHR) {
				var markup = data.parse.text["*"];
				var blurb = $('<div></div>').html(markup);
				console.log(blurb);
				$('#infoDisplayBody').html($(blurb).find('p'));
			},
			error: function(errorMessage) {
				$('#infoDisplayBody').html("<p><b>Oops... looks like the extra information failed to load. Please try again!</b></p>");
			}
		});
	};

	this.infoHeader = ko.observable();
	this.infoBody = ko.observable();

	this.populateInfoDisplay = function(object) {

		if (object.infoContent) {
			self.infoHeader("The "+object.area);
			self.infoBody(object.infoContent);
		
		} else if (object.wiki) {
			self.infoHeader(object.name);
			self.callWikiAjax(object);

		} else if (object.onLoadInfo) {
			self.infoHeader(object.title);
			self.infoBody(object.onLoadInfo);
		};
	};

	

	// USED BY THE SELECTEDAREA()
	// this.showAreaInfo = function(object) {
	// 	self.populateImageArray(object);
	// 	$('#infoDisplayHead, #infoDisplayBody').empty();
	// 	$('#infoDisplayHead').append('The ' + object.area);
	// 	$('#infoDisplayBody').append(object.infoContent);
	// };
	
	// USED BY THE MARKER
	
	// this.loadLocationInfo = function(location) {
		
	// 	$('#infoDisplayHead, #infoDisplayBody').empty();
	// 	$('#infoDisplayHead').append(location.name+"<p style='text-decoration:underline'>Information displayed here is sourced from the encyclopedia of <a href='https://en.wikipedia.org/wiki/Main_Page'>Wikipedia</a></p>")
	// 	// Display wiki info for 3 of the 5 categories
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "http://en.wikipedia.org/w/api.php?action=parse&page=" + location.wiki + "&prop=text&format=json&callback=?",
	// 		contentType: "application/json; charset=utf-8",
	// 		async: true,
	// 		dataType: "json",
	// 		timeout: 8000,
	// 		success: function(data, textStatus, jqXHR) {
	// 			var markup = data.parse.text["*"];
	// 			var blurb = $('<div></div>').html(markup);
	// 			$('#infoDisplayBody').html($(blurb).find('p'));
	// 		},
	// 		error: function(errorMessage) {
	// 			$('#infoDisplayBody').html("<p><b>Oops... looks like the extra information failed to load. Please try again!</b></p>");
	// 		}
	// 	});
	// };

	// To display images and custom info content on initial load from onLoadInfo object
	// this.onLoadDisplay = function(onLoadInfo) {
	// 	self.populateImageArray(onLoadInfo);
	// 	$('#infoDisplayHead,  #infoDisplayBody').empty();
	// 	$('#infoDisplayHead').append('What makes Brighton cooler than an Eskimos sunglasses is...');
	// 	$('#infoDisplayBody').append(onLoadInfo.infoContent);
	// };
	this.mapError = function() {
		alert('There seems to be a problem with loading the google map. Please try again!');
	};
	// Initialise all the things needed on page load
	this.init = function() {
		self.map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 50.827022,
				lng: -0.158278
			},
			zoom: 12
		});
		self.infoPopup = new google.maps.InfoWindow();
		// self.bounds = new google.maps.LatLngBounds();
		// Initially call showMarkers with filter as empty
		// self.showMarkers(null);
		self.createMarkers(poi);
		self.populateInfoDisplay(onLoadGet);
		self.populateImageArray(onLoadGet);
	};
};
// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);

// TODO - Future amends
// selecting a marker selects the category the marker belongs to and also allows all the other marker functionality to happen

// TODO before resubmission
// Create a list which then shows each of the areas within that list 
// Provide a conditional check on filterMarkers for where self.selectedArea is undefined (where "see all" is selected)
	// Can I make 'see all' a category which has all the poi objects in?
// Wiki links aren't working becuase they are relative. Use replace() to replace /wiki with full wiki url to make links work.

// THIS NEXT
// For all location details - use ko text binding to show in the DOM - not jQuery

// Issues var bounds should be a reuseable global variable instead of being created by both marker functions.

// BUG When changing category the previous infoPop up does not close?!


// FOR REFERENCE
	// this.showMarkers = function(findArea) {
	// 	// Clear all markers
	// 	for (var i = 0; i < self.markers.length; i++) {
	// 		self.markers[i].setMap(null);
	// 	}
	// 	// Clear array - not strictly necessary but will stop array getting clogged up with markers
	// 	self.markers = [];
	// 	// Add markers
	// 	var bounds = new google.maps.LatLngBounds();
		
	// 	// Argument of area here is referring to the whole object
	// 	// When showMarkers function is called initially in the init function, it is passed an argument of null, so will show markers in all areas
	// 	// Otherwise filter for where the object area, area property, is equal to the area passed in by the selectedArea.

	// 	poi.forEach(function(area) {
			
	// 		if (findArea === null || findArea.area == area.area) {
	// 			// For each location within the filtered area
	// 			area.locations.forEach(function(location) {
	// 				// Set the attribution to image source if it has one or else attribution is source is absent
	// 				var attrib = '';
	// 				if (location.mainImage.source) {
	// 					attrib = 'Image from venue <a target="_blank" href="' + location.mainImage.source + '">Website</a>';
	// 				} else {
	// 					attrib = '<a target="_blank" href="' + location.mainImage.attrib + '">Photo</a> licenced under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC</a>';
	// 				}
	// 				// Make markers
	// 				var marker = new google.maps.Marker({
	// 					map: self.map,
	// 					position: location.location,
	// 					title: location.name,
	// 					image: location.mainImage.img,
	// 					attrib: attrib,
	// 					animation: google.maps.Animation.DROP
	// 				});
	// 				bounds.extend(location.location);
	// 				// Push markers to markers array
	// 				self.markers.push(marker);
	// 				marker.addListener('click', function() {
	// 					self.populateInfoPopup(this, location, self.infoPopup);
	// 					self.populateImageArea(location);
	// 					self.loadLocationInfo(location);
	// 					// Clear any previous individual marker animation before animating the current clicked marker
	// 					for (var i = 0; i < self.markers.length; i++) {
	// 						self.markers[i].setAnimation(null);
	// 					}
	// 					self.toggleBounce(this);
	// 				});
	// 			});
	// 		}
	// 	});
	// 	self.map.fitBounds(bounds);
	// };

