(function(){
	'use strict'

	angular	
		.module('conectaApp')
		.config(configuration);

		configuration.$inject = ['$routeProvider'];

		function configuration($routeProvider){
			$routeProvider.when('/',{
				controller: 'homeCtrl',
        		controllerAs: 'home',
        		templateUrl: 'app/views/home/home.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});
		}

})();