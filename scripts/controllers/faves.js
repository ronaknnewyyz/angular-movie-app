myApp.controller('FavesCtrl', FavesCtrl);

FavesCtrl.$inject = ['filmService', 'omdb'];

function FavesCtrl (filmService, omdb) {
	var vm = this;

	vm.movies = filmService.getMoviesList();

	vm.removeTitle = function (movieTitle) {
		console.log("Remove this movie: " + movieTitle);
		filmService.removeMovie(movieTitle);
	};
}