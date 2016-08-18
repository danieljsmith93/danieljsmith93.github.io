// our angular code
var MyApp = angular.module('MyApp', ['ngMaterial', 'ui.router']);

// define table controller called in about state
MyApp.controller('mainController', function($scope, $mdSidenav) {

	this.toggleNavigation = toggleNavigation;

	$scope.cards = [
	{
		title: 'DSDevelopment1',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo, vero necessitatibus expedita. Impedit tenetur ducimus, repudiandae libero ullam architecto aspernatur, dolorum cumque quisquam obcaecati quia molestiae, error facere amet.'
	},
	{
		title: 'DSDevelopment2',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo, vero necessitatibus expedita. Impedit tenetur ducimus, repudiandae libero ullam architecto aspernatur, dolorum cumque quisquam obcaecati quia molestiae, error facere amet.'
	},
	{
		title: 'DSDevelopment3',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo, vero necessitatibus expedita. Impedit tenetur ducimus, repudiandae libero ullam architecto aspernatur, dolorum cumque quisquam obcaecati quia molestiae, error facere amet.'
	}

	];

	function toggleNavigation() {
	     	$mdSidenav('left').toggle();
	    }
});

MyApp.config(function($stateProvider, $urlRouterProvider, $mdIconProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// HOME STATES AND NESTED VIEWS
		.state('home', {
			url: '/home',
			templateUrl: './views/partial-home.html'
		})

		// nested list with custom controller
		.state('home.list', {
			url: '/list',
			templateUrl: './views/partial-home-list.html',
			controller: function($scope) {
				$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
			}
		})

		// nested list with random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'I could sure use a drink.'
		})

		// ABOUT PAGE AND MULTIPLE NAMED VIEWS
		.state('about', {
			url: '/about',
			templateUrl: './views/partial-about.html',
			controller: 'mainController'
			/*views: {

				// Main template placed here named relatively
				'': {templateUrl: './views/partial-about.html'},

				// Child views defined here named absolutely
				'columnOne@about': {template: 'Look I am a column!'},

				// for column two, we'll define a separate controller
				'columnTwo@about': {
					templateUrl: './views/table-data.html',
					controller: 'mainController'
				}
			}*/
		})

		// BLOG PAGE WITH MULTIPLE POSTS
		.state('blog', {
			url: '/blog',
			templateUrl: './views/partial-blog.html',
			controller: 'mainController'
		})

		$mdIconProvider.icon('menu', './svg/menu.svg', 24);
;

angular.module('MyApp', ['ngMaterial'])
	.config(function(){
	})
});


