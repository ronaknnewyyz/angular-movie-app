
myApp.controller('ToWatchCtrl', ToWatchCtrl);

ToWatchCtrl.$inject = ['filmService', 'omdb'];

function ToWatchCtrl (filmService, omdb) {

	var vm = this;

	vm.movies = filmService.getMoviesList();
	vm.formData = '';

	vm.addTitle = function () {
		filmService.addMovie(vm.formData);
		vm.formData = '';
	};

	vm.removeTitle = function (movieTitle) {
		console.log("Remove this movie: " + movieTitle);
		filmService.removeMovie(movieTitle);
	};

	vm.searchTitle = function (title) {
		vm.searchSuccess = false;
		omdb.searchTitle(title)
		.then(function success(response) {
			console.log("Search Response " + JSON.stringify(response.data));
			if (response.data.Error) {
				console.log("Search Result failed: " + response.data.Error);
				alert("No Movies Found! Please try again");
			} else {
				vm.searchResult = response.data;
				vm.searchSuccess = true;
			}
			
		}, function error(response) {
			console.log("Search Result failed: " + response.data.Error);
			alert("No Movies Found! Please try again");
		});
	};

	vm.addSearchedTitle = function (searchedFilm) {
		filmService.addMovie(searchedFilm);
		vm.searchResult = {};
		vm.searchSuccess = false;
		vm.formData.searchName = '';
		vm.movies = filmService.getMoviesList();
	};

};