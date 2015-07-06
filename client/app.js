(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies 
	var app = angular.module('tracker',['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, send to /state1
		$urlRouterProvider.otherwise('/')

		$stateProvider
			.state('app', {
				url: "/",
				templateUrl: "src/app/app.view.html",
				controller: "TrackerController as tracker"
			})
			.state('login', {
				url: "/login",
				templateUrl: "src/app/login/login.view.html",
				controller: "LoginController as login"
			})

			.state('user', {
				url: "/user",
				templateUrl: "src/app/user/user.view.html",
				controller: "UserController as user"
			});
	});
})();
