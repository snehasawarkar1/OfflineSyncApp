OfflineSyncApp.controller('loginController', ['$scope', '$state', function($scope, $state)
{
    $scope.goToList = function(valid, user)
    {
        //$state.go('list');
        if(valid)
        {
            if((user.username == 'tempUser') && (user.password == 'test'))
            {
                $state.go('list');
            }
            else
            {
                $scope.error = true;
            }   
        }
    }
}]);