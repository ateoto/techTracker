(function() {
	// angular = AngularJs
	// tracker = Application Name
	// [ ] = Dependencies 
	var app = angular.module('tracker',[]);

	app.controller('TrackerController',function(){
		var devices = [
			{
				name: 'iPhone 6',
				maker: 'Apple',
				quantity: 3,
				description: 'white, 16GB',
				inStock: true,
		
			},
			{
				name: 'Galaxy S5',
				maker: 'Samsung',
				quantity: 1,
				description: 'Silver, 32GB Micro SD',
				inStock: true,
			}
		];

		this.devices = devices;	
	});

})();