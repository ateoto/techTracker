(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies 
	var app = angular.module('tracker');

	app.directive('ttPanelContents', function() {
		return {
			restrict: 'E',
			templateUrl: 'src/app/panel-contents.html'
		};
	});

	app.directive('ttPanelNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'src/app/panel-nav.html'
		};
	});

})();





