OfflineSyncApp.controller('loginController', ['$scope', '$state', function($scope, $state)
{
    $scope.user = {};
    
    $scope.login = function()
    {
        $scope.error = false;
        if(($scope.user.username == 'tempUser') && ($scope.user.password == 'test'))
        {
            $state.go('app.list');
        }
        else
        {
            $scope.error = true;
        }
    }
}]);