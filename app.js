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
				price: 600,
				quantity: 3,
				description: 'white, 16GB',
				checkIn: Date.now(),
				checkOut: "",
				inStock: true,
				images:[
					{
						full: 'images/iphone6_full.png'
					},
				],
		
			},
			{
				name: 'Galaxy S5',
				maker: 'Samsung',
				price: 540,
				quantity: 1,
				description: 'Silver, 32GB Micro SD',
				checkIn: Date.now(),
				checkOut: "",
				inStock: true,
				images: [
					{
						full: 'images/galaxys5_full.png'
					},
				],	
			}
		];

		this.devices = devices;	
	});

})();