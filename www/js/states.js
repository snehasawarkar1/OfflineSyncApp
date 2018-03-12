OfflineSyncApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'views/list.html',
            controller: 'listController'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'views/details.html',
            controller: 'detailsController'
        });
    $urlRouterProvider.otherwise('/login');
});