(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies 
	var app = angular.module('tracker',['ui.router', 'ui.gravatar']);
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
			})

			.state('401error', {
				url: "/error401",
				templateUrl: "src/app/login/loginError.view.html"
			})

			.state('register', {
				url: "/register",
				templateUrl: "src/app/login/register.view.html",
				controller: "RegisterController as register"
			});
	});
	
	app.run(function($rootScope, loginService){
		
		var retrievedUser = loginService.getActiveUser();
		// console.log(retrievedUser);
		if(retrievedUser) {
			$rootScope.isLoggedIn = true;
		};
	})

})();
