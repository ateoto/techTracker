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
			}, {
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
			}, {
				name: 'Nexus 6',
				maker: 'Google',
				price: 660,
				quantity: 3,
				description: 'Metal Back, 64GB Micro SD',
				checkIn: Date.now(),
				checkOut: "",
				inStock: true,
				images: [],	
			},
		];

		this.devices = devices;
		this.activeTab = 2;

		this.checkOut = function(device) {
			console.log("You checked out yo!");
			console.log(device);
			device.quantity--;
			if (device.quantity === 0) {
				device.inStock = false;
			}
		};

		this.checkIn = function(device) {
			console.log("You checked in dawg!");
			console.log(device);
			device.quantity++;
			if (device.quantity >= 1) {
				device.inStock = true;
			}
		}

	});

})();