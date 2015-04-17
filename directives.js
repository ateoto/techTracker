(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies 
	var app = angular.module('tracker');

	app.directive('ttDeviceTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'device-title.html'
		};
	});

	app.directive('ttPanelContents', function() {
		return {
			restrict: 'E',
			templateUrl: 'panel-contents.html'
		};
	});

	app.directive('ttPanelNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'panel-nav.html'
		};
	});

})();





