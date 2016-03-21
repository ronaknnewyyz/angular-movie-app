myApp.directive('film', film);

function film () {
	var directive = {
		restrict: 'E',
		templateUrl: 'views/directives/film.html',
		link: linkFunction,
		scope: {
       	 	name: '@', //access the value as a string
	        removeMovie: '&', //pass in an expression that you can evaluate from inside the directive
	        movie: '=' //two way binding between directive and controller
		}
	};
	return directive;

	function linkFunction(scope, element, attrs) {
      var removeButton = element.find('button');

      removeButton.bind('click', function () {
        console.log('selected Movie: ' + JSON.stringify(scope.movie));
        // scope.removeMovie();

        scope.removeMovie({
          movieTitle: scope.movie.Title
        });
      });
    }
}