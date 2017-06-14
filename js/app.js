var ViewModel = function() {
	var self = this;
	// var bounds;
	this.markers = [];
	// this.bounds = new google.maps.LatLngBounds();
	// Makes my model data observable and useable by the view via the ViewModel.
	this.areaList = ko.observableArray([]);
	// Populate the observable array 
	poi.forEach(function(area) {
		self.areaList.push(area);
	});
	this.selectedArea = ko.observable();
	// For when you click on a list item
	this.areaListClick = function(clicked) {
		self.selectedArea(clicked);
	};

	this.locationList = ko.observableArray([]);

	this.populateLocationList = function(area) {
		self.locationList([]);
		if (area) {
			area.locations.forEach(function(location) {
				self.locationList.push(location);
			});
		}
	};

	// Observe when the selectedArea changes and show markers and area info specific to that area
	this.selectedArea.subscribe(function() {
		self.populateLocationList(self.selectedArea());
		self.filterMarkers(self.selectedArea());
		self.populateInfoDisplay(self.selectedArea());
		self.populateImageArray(self.selectedArea());
		self.infoPopup.close();
		// self.closeInfoPopup(self.infoPopup);
		// self.closeInfoPopup();

	});

	this.selectedLocation = ko.observable();

	this.locationListClick = function(clicked) {
		self.selectedLocation(clicked);
	};

	this.selectedLocation.subscribe(function() {
		self.clickMarker(self.selectedLocation());
		self.populateImageArray(self.selectedLocation());
		self.populateInfoDisplay(self.selectedLocation());
	});

	this.createMarkers = function(poi) {
		
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
				self.markers.push(marker);
				marker.addListener('click', function() {
					self.clickMarker(location);
					self.populateImageArray(location);
					self.populateInfoDisplay(location);
				})
			})
		});
	};

	this.filterMarkers = function(selectedArea) {
		var bounds = new google.maps.LatLngBounds();
		self.markers.forEach(function(marker) {

			if (!selectedArea || selectedArea.area == marker.area) {
				marker.setVisible(true);
				bounds.extend(marker.position);
			} else {
				marker.setVisible(false);;
			}
		});
		self.map.fitBounds(bounds);
	};

	this.clickMarker = function(selectedLocation) {
		for (var i = 0; i < self.markers.length; i++) {
			self.markers[i].setAnimation(null);
		}
		self.markers.forEach(function(marker) {
			if (selectedLocation.name == marker.title) {
				self.populateInfoPopup(marker, selectedLocation, self.infoPopup);
				self.toggleBounce(marker);
			}
		})
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
			infoPopup.addListener('closeclick', function() {
				infoPopup.setMarker(null);
			});
			// self.closeInfoPopup(infoPopup);
		}
	};

	// this.closeInfoPopup = function(infoPopup) {
	// 	infoPopup.addListener('closeclick', function() {
	// 		infoPopup.setMarker(null);
	// 	});
	// };

	this.imageArray = ko.observableArray([]);

	// To display images arrays relating to the area, or the specific location, or the initial load selection
	this.populateImageArray = function(object) {
		$('#imageDisplay').empty();
		var imgDetails = {};

		if (!object) {
			object = onLoadGet;
		}

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

	var wikiInfo = '';

	this.infoHeader = ko.observable();
	this.infoBody = ko.observable();

	this.callWikiAjax = function(location, callback) {
		$.ajax({
			type: "GET",
			url: "http://en.wikipedia.org/w/api.php?action=parse&page=" + location.wiki + "&prop=text&format=json&callback=?",
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: "json",
			timeout: 8000,
			success: function(data, textStatus, jqXHR) {
				var markup = data.parse.text["*"];
				var paragraphs = $(markup).find('p');
				var html = $('<div></div>').append(paragraphs).html();
				html = html.split('<a href="/').join('<a href="http://wikipedia.org/');

				callback(html);

				// self.wikiInfo.html();
				// console.log(self.wikiInfo);
				
				// console.log($(wikiInfo));
				
				// var use = function(content){
				// 	content.forEach(function(p) {
				// 		self.infoBody('<p>'+p.innerHTML+'</p>');
				// 	});
				// }(content);
				
				
				// $(content:contains('<a href="/wiki/')).replace('<a href="https://en.wikipedia.org/wiki/');
				// console.log(content);
			},
			error: function(errorMessage) {
				callback("<p><b>Oops... looks like the extra information failed to load. Please try again!</b></p>");
			}
		});
	};

	this.populateInfoDisplay = function(object) {

		if (!object) {
			object = onLoadGet;
		};

		if (object.infoContent) {
			self.infoHeader("The "+object.area);
			self.infoBody(object.infoContent);
		
		} else if (object.wiki) {
			self.infoHeader(object.name);
			self.callWikiAjax(object, function(result) {
				self.infoBody(result);
			});
			
			// var wiki = self.wikiInfo.html($(blurb).find('p'));
			// self.infoBody(self.wikiInfo);
			console.log(self.wikiInfo);

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
		self.createMarkers(poi);
		self.filterMarkers();
		self.populateInfoDisplay();
		self.populateImageArray();
	};
};
// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);



// TODO - Future amends
// selecting a marker selects the category the marker belongs to and also allows all the other marker functionality to happen
	// The problem with this was it stopped all the other marker functionality from happening - infoPopup, marker animation.


	