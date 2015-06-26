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
			return $http.put('http://localhost:3000/api/devices/' + device._id, device)
		}


	})
})();