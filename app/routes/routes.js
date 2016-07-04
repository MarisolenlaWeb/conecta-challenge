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
			}).when('/registro',{
				controller: 'registroCtrl',
        		controllerAs: 'registro',
        		templateUrl: 'app/views/registro/registro.html'
			}).when('/login',{
				controller: 'loginCtrl',
        		controllerAs: 'login',
        		templateUrl: 'app/views/login/login.html'
			}).otherwise({
	         	redirectTo: '/'
	      	});
		}

})();