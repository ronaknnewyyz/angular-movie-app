var myApp = angular.module('FilmApp', ['ngRoute', 'ngStorage']);

myApp.config(config);

config.$inject = ['$routeProvider'];

function config ($routeProvider) {
	$routeProvider
		.when('/to-watch', {
			templateUrl: 'views/to-watch.html',
			controller: 'ToWatchCtrl', 
			controllerAs: 'watch'
		})
		.when('/faves', { 
			templateUrl: 'views/faves.html',
			controller: 'FavesCtrl',
			controllerAs: 'faves'
		})
		.when('/watched', {
			templateUrl: 'views/watched.html',
			controller: 'WatchedCtrl',
			controllerAs: 'watched'
		})
		.otherwise({
			redirectTo: '/to-watch'
		});
}