var places = [
		{
			name: "The Lanes"
		},
		{
			name: "The Beach"
		},
		{
			name: "The Landmarks"
		},
		{
			name: "The Downs"
		},
		{
			name: "The Music Venues"
		}
	];

var Place = function(data){
	this.name = ko.observable(data.name);
};

var ViewModel = function(){

	var self = this; // When you do this 'this' here is ViewModel object. This can help stop confusion between inner and outer this.

	this.placeList = ko.observableArray([]);

	places.forEach(function(place){
		self.placeList.push( new Place(place) );
	})

	this.currentPlace = ko.observable(this.placeList()[0]);

	this.changePlace = function(clickedPlace){
		self.currentPlace(clickedPlace);
		console.log("Place changed to "+ self.currentPlace(clickedPlace));
	};
};

ko.applyBindings(new ViewModel());