var places = [
		{
			category: "The Lanes"
		},
		{
			category: "The Beach"
		},
		{
			category: "The Landmarks"
		},
		{
			category: "The Downs"
		},
		{
			category: "The Music Venues"
		}
	];

var Category = function(data){
	this.category = ko.observable(data.category);
};

var ViewModel = function(){

	var self = this; // When you do this 'this' here is ViewModel object. This can help stop confusion between inner and outer this.

	this.categoryList = ko.observableArray([]);

	places.forEach(function(category){
		self.categoryList.push( new Category(category) );
	})

	this.currentCategory = ko.observable(this.categoryList()[0]);

	this.changeCategory = function(clickedCategory){
		self.currentCategory(clickedCategory);
		console.log("Category changed to "+ self.currentCategory(clickedCategory));
	};
};

ko.applyBindings(new ViewModel());