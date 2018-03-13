OfflineSyncApp.controller('loginController', ['$scope', '$state', function($scope, $state)
{
    $scope.username = "" ;
    $scope.password = "";
    $scope.goToList = function()
    {
        //$state.go('list');
        if($scope.username == "tempUser" && $scope.password == "test")
        {
            $state.go('list');
        }
        else
        {
            $scope.error = true;
        }
    }
}]);