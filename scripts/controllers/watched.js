myApp.controller('WatchedCtrl', WatchedCtrl);

WatchedCtrl.$inject = ['filmService', 'omdb'];

function WatchedCtrl (filmService, omdb) {
	var vm = this;

	vm.movies = filmService.getMoviesList();

	vm.removeTitle = function (movieTitle) {
		console.log("Remove this movie: " + movieTitle);
		filmService.removeMovie(movieTitle);
	};
}