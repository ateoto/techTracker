(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies
	var app =  angular.module('tracker');

	// App Controller
	app.controller('TrackerController',function($state, deviceService,loginService){
		var tracker = this;

		var retrievedUser = loginService.getActiveUser();
		if(!retrievedUser) {
			$state.go('login');
			console.log("You must login to view devices!");
		};

		tracker.devices = [];

		deviceService.getAllDevices().then(function(response){
			tracker.devices = response.data;
			for (var i=0; i < tracker.devices.length; i++) {
				if (tracker.devices[i].quantity >= 1) {
					tracker.devices[i].inStock = true;
				}
			}
			

		});

	});



	
	// Login
	app.controller('LoginController', function($state,$rootScope,loginService){
		var login = this;
		
		var retrievedUser = loginService.getActiveUser();
		if(retrievedUser) {
			$state.go('user');
		};

		this.doLogin = function() {
			loginService.login(login.email, login.password).then(function(res) {
				loginService.setActiveUser(res.data);
				$state.go('app');
				$rootScope.isLoggedIn = true;
			},function(err) {
				$state.go('401error');
			})


		};

	});

	app.controller('RegisterController', function(userService, loginService, $state, $rootScope) {
		var register = this;

		this.doRegister = function() {
			userService.addUser(register.firstName, register.lastName, register.email, register.password).then(function(res) {
				console.log(res.data.user);
				loginService.setActiveUser(res.data.user);
				$state.go('app');
				$rootScope.isLoggedIn = true;
			})
		};
	});

	app.controller('UserController', function($state,$rootScope, loginService){
		this.activeUser = loginService.getActiveUser();
		
		this.doLogout = function() {
			loginService.clearActiveUser();
			$state.go('login');
			$rootScope.isLoggedIn = false;
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