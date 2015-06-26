(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies
	var app =  angular.module('tracker');

	// App Controller
	app.controller('TrackerController',function(deviceService){
		var tracker = this;

		this.loggedIn = false;

		tracker.devices = [];

		deviceService.getAllDevices().then(function(response){
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
	app.controller('PanelController', function(deviceService){
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		
		// Check In and Out Devices
		// ========================
		this.adjustDeviceCount = function(action, device) {
			if(action === "checkIn") {
				console.log("You checked in dawg!");
				console.log(device);
				device.quantity++;
			}
			else {
				console.log("You checked out yo!");
				console.log(device);
				device.quantity--;
			}
			if (device.quantity === 0) {
				device.inStock = false;
			}
			else {
				device.inStock = true;
			}
			deviceService.updateDevice(device).then(function(response) {
				console.log(response);
			});

		}


	});

	// Reviews
	app.controller('ReviewController', function(reviewService){
		this.newReview={};

		this.addReview = function(device){
			console.log(device);
			if (this.reviewForm.$valid) {
				this.newReview.createdOn = new Date();
				device.reviews.push(this.newReview);
				reviewService.addReview(device, this.newReview).then(function(response){
					console.log(response);
				});
				this.newReview={};
			}
		};

		this.deleteReview =  function(review, device){
			console.log(device.reviews.indexOf(review));
			reviewService.deleteReview(review).then(function(response){
				console.log(response);
				device.reviews.splice(device.reviews.indexOf(review),1);
			})
		};
	});
	
})();