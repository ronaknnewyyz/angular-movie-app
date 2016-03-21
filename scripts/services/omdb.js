myApp.factory('omdb', omdb);

omdb.$inject = ['$http'];

function omdb ($http) {
	var factory = {
		searchTitle : function (film) {
			var promise = $http({
				method: 'GET',
				url: 'http://www.omdbapi.com/?t=' + film
			});
			return promise;
		}
	};
	return factory;
};
