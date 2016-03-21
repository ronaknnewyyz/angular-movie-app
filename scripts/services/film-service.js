myApp.factory('filmService', filmFactory);

filmFactory.$inject = ['$localStorage'];

function filmFactory ($localStorage) {
	return {
		getMoviesList : function () {
			if ($localStorage.movies && $localStorage.movies.length) {
		      movies = $localStorage.movies;
		    }
			return movies;
		},
		addMovie : function (film) {
			movies.push(film);
			$localStorage.movies = movies;
		},
		removeMovie : function (Title) {
			for(var i = 0; i < movies.length; i++) {
			    var obj = movies[i];
			    if(Title.indexOf(obj.Title) !== -1) {
			        movies.splice(i, 1);
			        break;
			    }
			}
			$localStorage.movies = movies;
		}
	};
};

// var movies = [{
// 	'Title' : 'Now you see me', 
// 	'Year' : '2014',
// 	'Director' : 'Speilberg',
// 	'Favourite' : true,
// 	'Watched' : false
// },
// {
// 	'Title' : 'Titanic', 
// 	'Year' : '2000',
// 	'Director' : 'Mac',
// 	'Favourite' : true,
// 	'Watched' : false
// },
// {
// 	'Title' : 'Bourne Identity', 
// 	'Year' : '2002',
// 	'Director' : 'Steve',
// 	'Favourite' : true,
// 	'Watched' : true
// },
// {
// 	'Title' : 'Bridge of Spies', 
// 	'Year' : '1998',
// 	'Director' : 'Cruise',
// 	'Favourite' : false,
// 	'Watched' : false
// }];

