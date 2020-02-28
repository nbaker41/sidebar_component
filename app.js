(function () {

	let app = angular.module("app", [
		// AJS modules
		"ui.router",
        //components
        "sidebar",

	]);

	app.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");

	});

	app.controller(
		"appCtrl",
		function ($scope, $transitions) {
			this.example = "Hello from AJS";
			let app = this;

			// transitions
			$transitions.onSuccess({}, function ($transition) {
				app.route = {};
				app.route.from = $transition.$from().name;
				app.route.to = $transition.$to().name;
				app.route.params = $transition.params().name;

				app.pageClass = app.route.to;
			});

		});

})();