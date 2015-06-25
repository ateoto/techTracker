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
			for (var i=0; i < tracker.devices.length; i++) {
				if (tracker.devices[i].quantity >= 1) {
					tracker.devices[i].inStock = true;
				}
			}
			console.log(tracker.devices);

		});

	});
	
	// Login
	app.controller('LoginController', function(){
		
		this.logIn = function() {
		};		
	});

	// Panels
	app.controller('PanelController', function($http){
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
			$http.put('http://localhost:3000/api/devices/' + device._id, device).then(function(response) {
				console.log(response);
			});
			if (device.quantity === 0) {
				device.inStock = false;
			}
		};

		this.checkIn = function(device) {
			console.log("You checked in dawg!");
			console.log(device);
			device.quantity++;
			$http.put('http://localhost:3000/api/devices/' + device._id, device).then(function(response) {
				console.log(response);
			});
			if (device.quantity >= 1) {
				device.inStock = true;
			}
		};
	});

	// Reviews
	app.controller('ReviewController', function($http){
		this.review={};

		this.addReview = function(device){
			console.log(device);
			if (this.reviewForm.$valid) {
				this.review.createdOn = new Date();
				device.reviews.push(this.review);
				$http.post('http://localhost:3000/api/devices/' + device._id + '/reviews', this.review).then(function(response){
					console.log(response);
				});
				this.review={};
			}
		};

		this.deleteReview =  function(review, device){
			console.log(device.reviews.indexOf(review));
			$http.delete('http://localhost:3000/api/reviews/' + review._id).then(function(response){
				console.log(response);
				device.reviews.splice(device.reviews.indexOf(review),1);
			})
		};
	});
	
})();