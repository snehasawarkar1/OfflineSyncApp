OfflineSyncApp.controller('loginController', ['$scope', '$state', function($scope, $state)
{
    $scope.goToList = function()
    {
        $state.go('list');
    }
}]);