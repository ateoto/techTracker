(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies
	var app =  angular.module('tracker');

	app.service('deviceService', function($http) {



		this.getAllDevices = function() {
			return $http.get('http://localhost:3000/api/devices');
		};

		this.updateDevice = function(device) {
			return $http.put('http://localhost:3000/api/devices/' + device._id, device);
		}


	})


	app.service('reviewService', function($http) {


		this.addReview = function(device, review) {
			return $http.post('http://localhost:3000/api/devices/' + device._id + '/reviews', review);
		}

		this.deleteReview = function(review) {
			return $http.delete('http://localhost:3000/api/reviews/' + review._id);
		}


	})

	app.service('loginService', function($http) {

		this.loginSuccess = function(user) {
			return $http.post('http://localhost:3000/api/login');
		}
	})
})();