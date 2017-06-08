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
		self.showAreaInfo(self.selectedArea());
	});
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
					self.populateImageArea(location);
					self.loadLocationInfo(location);
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
	// To display images arrays relating to the area, or the specific location, or the initial load selection
	this.populateImageArea = function(object) {
		$('#imageDisplay').empty();
		var imgArray = [],
			alt = '',
			attrib = [];
		// for object passed in from area
		if (object.areaImages) {
			imgArray = object.areaImages;
			alt = 'Brighton ' + object.area;
			imgArray.forEach(function(img) {
				attrib.push('<a target="_blank" href="' + img.attrib + '">Photo</a> licenced under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC</a>');
			});
			// for object passed in from location
		} else if (object.images) {
			console.log(object.images);
			imgArray = object.images;
			// alt from 2 diffenet sources depending on licence	
			if (object.images.alt) {
				alt = object.images.alt;
			} else {
				alt = object.name;
			}
			imgArray.forEach(function(img) {
				if (img.source) {
					attrib.push('Image from venue <a target="_blank" href="' + img.source + '">Website</a>');
				} else {
					attrib.push('<a target="_blank" href="' + img.attrib + '">Photo</a> licenced under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC</a>');
				}
			});
			// for object passed in from initial load data object
		} else if (object.photos) {
			imgArray = object.photos;
			alt = 'Brighton';
			imgArray.forEach(function(img) {
				attrib.push('<a target="_blank" href="' + img.attrib + '">Photo</a> licenced under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC</a>');
			});
		}
		// display images SHOULD BE DONE VIA KO IN VIEW
		// CREATE AN OBSERVABLE ARRAY
		for (var i = 0; i < imgArray.length; i++) {
			$('#imageDisplay').append('<figure><img src="' + imgArray[i].img + '" class="img-responsive" alt="image of ' + alt + '"><figcaption>' + attrib[i] + '</figcaption></figure>');
		}
	};
	// To display images and info relating to the area 
	this.showAreaInfo = function(object) {
		self.populateImageArea(object);
		$('#infoDisplayHead, #infoDisplayBody').empty();
		$('#infoDisplayHead').append('The ' + object.area);
		$('#infoDisplayBody').append(object.infoContent);
	};
	// To display information in the info area from either wiki api or embeded yelp reviews
	this.loadLocationInfo = function(location) {
		if (!location.wiki && !location.yelp) {
			return;
		}
		$('#infoDisplayHead, #infoDisplayBody').empty();
		$('#infoDisplayHead').append(location.name);
		// Display wiki info for 3 of the 5 categories
		if (location.wiki) {
			// attribute wikipedia
			$('#infoDisplayHead').append("<p style='text-decoration:underline'>Information displayed here is sourced from the encyclopedia of <a href='https://en.wikipedia.org/wiki/Main_Page'>Wikipedia</a></p>");
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
					$('#infoDisplayBody').html($(blurb).find('p'));
				},
				error: function(errorMessage) {
					$('#infoDisplayBody').html("<p><b>Oops... looks like the extra information failed to load. Please try again!</b></p>");
				}
			});
		}
		// Display embeded yelp review for nightlife area only
		if (location.yelp) {
			$('#infoDisplayHead').append("<p style='text-decoration:underline'>Information displayed here is sourced from the popular review site <a href='https://www.yelp.co.uk/'>Yelp</a></p>");
			console.log(location.yelp);
			for (var i = 0; i < location.yelp.length; i++) {
				$('#infoDisplayBody').append('<div class="col-xs-12 col-sm-6">' + location.yelp[i] + '</div>');
			}
		}
	};
	// To display images and custom info content on initial load from onLoadInfo object
	this.onLoadDisplay = function(onLoadInfo) {
		self.populateImageArea(onLoadInfo);
		$('#infoDisplayHead,  #infoDisplayBody').empty();
		$('#infoDisplayHead').append('What makes Brighton cooler than an Eskimos sunglasses is...');
		$('#infoDisplayBody').append(onLoadInfo.infoContent);
	};
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
		// Initially call showMarkers with filter as empty
		// self.showMarkers(null);
		self.createMarkers(poi);
		self.onLoadDisplay(onLoadInfo);
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

// Use KO bindings to display images in the UI using a combo of foreach and attr bindings
// For all location details - use ko text binding to show in the DOM - not jQuery
// Don't include sections which don't use wiki (remove the if block - as all sections will have wiki)
// Wiki links aren't working becuase they are relative. Use replace() to replace /wiki with full wiki url to make links work.

// Issues var bounds should be a reuseable global variable instead of being created by both marker functions.




