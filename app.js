var app =
    angular
    .module('customDirective', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/customD1');



    var customD1 = {
        name: 'customD1',
        url: '/customD1',
        templateUrl: 'views/customD1.html',
        controller: 'customD1'
    }

    $stateProvider.state(customD1);

});
