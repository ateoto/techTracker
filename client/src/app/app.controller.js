(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies
	var app =  angular.module('tracker');

	// App Controller
	app.controller('TrackerController',function($http){
		var tracker = this;

		this.loggedIn = false;

		tracker.devices = [];

		$http.get('http://localhost:3000/api/devices').then(function(response){
			tracker.devices = response.data;
		});

	});
	
	// Login
	app.controller('LoginController', function(){
		
		this.logIn = function() {
		};		
	});

	// Panels
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		
		this.checkOut = function(device) {
			console.log("You checked out yo!");
			console.log(device);
			device.quantity--;
			if (device.quantity === 0) {
				device.inStock = false;
			}
		};

		this.checkIn = function(device) {
			console.log("You checked in dawg!");
			console.log(device);
			device.quantity++;
			if (device.quantity >= 1) {
				device.inStock = true;
			}
		};
	});

	// Reviews
	app.controller('ReviewController', function(){
		this.review={};

		this.addReview = function(device){
			console.log(device);
			if (this.reviewForm.$valid) {
			this.review.createdOn = Date.now();
			device.reviews.push(this.review);
			this.review={};
			// $http.post('http://localhost:3000/api/devices/' + device._id + '/reviews');
			}
		};

	});
	
})();