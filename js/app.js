var ViewModel = function() {
    var self = this;
    this.markers = [];

    // Populates the area <li>s
    this.areaList = ko.observableArray([]);

    poi.forEach(function(area) {
        self.areaList.push(area);
    });

    this.selectedArea = ko.observable();
    // When you click on a list item
    this.areaListClick = function(clicked) {
        self.selectedArea(clicked);
    };

    // Observe when the selectedArea changes and show markers and area info specific to that area
    this.selectedArea.subscribe(function() {
        self.populateLocationList(self.selectedArea());
        self.filterMarkers(self.selectedArea());
        self.populateInfoDisplay(self.selectedArea());
        self.populateImageArray(self.selectedArea());
        // The info window only closes when another infowindow opens. When you click a new area it also needs to close.
        self.infoPopup.close();

    });

    // This populates the secondary list in the UI
    this.locationList = ko.observableArray([]);

    this.locationsArray = [];

    // console.log(self.areaList());
    // console.log(self.locationList()); // What doesn't work about this list is it doesn't know to which object each thing belongs...

	poi.forEach(function(area) {
    	area.locations.forEach(function(location){
    		self.locationsArray.push(location);
    	});
    });
    

    this.populateLocationList = function(area) {
        if (!area) {
        	self.locationList(self.locationsArray);
        }

        if (area) {
        	 // LOCATIONS LIST NEEDS TO HAVE PARENT PROPERTIES SO I CAN FILTER MY AREA NAME. ESSENTIALLY THIS SHOULD BE A BIT LIKE FILTER MARKERS?
        	console.log(area);
        	// Empty array
	        self.locationList([]);
	     //    if (area == self.locationList.name // I need to check if selectedArea is equal to poi.area and if it is then set visibility to true on poi.area.locations else false on everything else
		    //     self.locationList().forEach(function() {
		    //     	self.locationList().style.visibility = 'hidden';
		    //     })
	        
    		area.locations.forEach(function(location) {
                self.locationList.push(location);
                // this.location.style.visibility = 'visible';
            });
            console.log(self.locationList());

	    }
    };

    this.selectedLocation = ko.observable();
    // When you click on a secondary list item
    this.locationListClick = function(clicked) {
        self.selectedLocation(clicked);
    };

    this.selectedLocation.subscribe(function() {
        self.clickMarker(self.selectedLocation());
        self.populateImageArray(self.selectedLocation());
        self.populateInfoDisplay(self.selectedLocation());
    });

    // Called by init
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
                });
            });
        });
    };

    // called by selectedArea()
    this.filterMarkers = function(selectedArea) {
        var bounds = new google.maps.LatLngBounds();
        self.markers.forEach(function(marker) {

            // Check for undefined to catch the see all... option on the select drop down
            if (!selectedArea || selectedArea.area == marker.area) {
                marker.setVisible(true);
                bounds.extend(marker.position);
            } else {
                marker.setVisible(false);
            }
        });
        self.map.fitBounds(bounds);
    };

    // Called by the create markers, marker click() as well as the selectedLocation()
    this.clickMarker = function(selectedLocation) {
        for (var i = 0; i < self.markers.length; i++) {
            self.markers[i].setAnimation(null);
        }
        self.markers.forEach(function(marker) {
            if (selectedLocation.name == marker.title) {
                self.populateInfoPopup(marker, selectedLocation, self.infoPopup);
                self.toggleBounce(marker);
            }
        });
    };

    // Animate individual clicked marker
    this.toggleBounce = function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    };

    this.populateInfoPopup = function(marker, location, infoPopup) {
        if (infoPopup.marker != marker) {
            infoPopup.marker = marker;
            infoPopup.setContent('<h5>' + marker.title + '</h5><figure><img src="' + marker.image + '" alt="image of ' + marker.title + '"><figcaption>' + marker.attrib + '</figcaption></figure>');
            infoPopup.open(self.map, marker);
            // Clear marker property when infoPopup is closed
            infoPopup.addListener('closeclick', function() {
                infoPopup.setMarker(null);
            });
        }
    };

    // To display specific array of images in the UI
    this.imageArray = ko.observableArray([]);

    this.populateImageArray = function(object) {
        // empty array
        self.imageArray([]);
        var imgDetails = {};

        // If no object is passed in - undefined (see all...) - get initial load data
        if (!object) {
            object = onLoadGet;
        }
        // To display images arrays relating to the area
        if (object.areaImages) {
            object.areaImages.forEach(function(image) {
                imgDetails.img = image.img;
                imgDetails.attrib = image.attrib;
                imgDetails.alt = "Photo of Brighton " + object.area;
                self.imageArray.push(imgDetails);
            });
            // To display images arrays relating to the specific location
        } else if (object.images) {
            object.images.forEach(function(image) {
                imgDetails.img = image.img;
                imgDetails.attrib = image.attrib;
                imgDetails.alt = "Photo of " + object.name;
                self.imageArray.push(imgDetails);
            });
            // To display images arrays relating to the initial load selection
        } else if (object.photos) {
            object.photos.forEach(function(image) {
                imgDetails.img = image.img;
                imgDetails.attrib = image.attrib;
                imgDetails.alt = "Photo of Brighton";
                self.imageArray.push(imgDetails);
            });
        }
    };

    // var wikiInfo = '';
    // To display info in the bottom info section
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
                // Extract paragraphs only from markup
                var paragraphs = $(markup).find('p');
                var html = $('<div></div>').append(paragraphs).html();
                // Replace all of the relative a links within the data with full url
                html = html.split('<a href="/').join('<a href="http://wikipedia.org/');

                callback(html);

            },
            error: function(errorMessage) {
                callback("<p><b>Oops... looks like the extra information failed to load. Please try again!</b></p>");
            }
        });
    };

    this.populateInfoDisplay = function(object) {

        // If undefined, use initial load data
        if (!object) {
            object = onLoadGet;
        }
        // Area info
        if (object.infoContent) {
            self.infoHeader("The " + object.area);
            self.infoBody(object.infoContent);
            // Wiki info
        } else if (object.wiki) {
            self.infoHeader(object.name);
            self.callWikiAjax(object, function(result) {
                // returns the html via the callback()
                self.infoBody(result);
            });
            // Initial load data	
        } else if (object.onLoadInfo) {
            self.infoHeader(object.title);
            self.infoBody(object.onLoadInfo);
        }
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
        self.createMarkers(poi);
        self.filterMarkers();
        self.populateInfoDisplay();
        self.populateImageArray();
        self.locationList(self.locationsArray);
        // self.displayAllLocations();
    };
};
// Variable can be accessed easily from outside of this object
var vm = new ViewModel();
ko.applyBindings(vm);