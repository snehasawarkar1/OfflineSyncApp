OfflineSyncApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'views/login.html',
        //     controller: 'loginController'
        // })
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'views/menu.html',
          controller: 'AppCtrl'
        })
        .state('app.list', {
            url: '/list',
            views: {
              'menuContent': {
                templateUrl: 'views/list.html',
                controller: 'listController'
              }
            }
        })
        .state('app.details', {
            url: '/details',
            views: {
              'menuContent': {
                templateUrl: 'views/details.html',
                controller: 'detailsController'
              }
            }
        })
        .state('app.leadForm', {
            url: '/leadForm/{leadData:json}',
            views: {
              'menuContent': {
                templateUrl: 'views/leadForm.html',
                controller: 'leadFormController'
              }
            }
        });
    $urlRouterProvider.otherwise('/app/list');
});




OfflineSyncApp.controller('AppCtrl', [
  '$scope',
  function($scope) {

  }
]);
