OfflineSyncApp.controller('listController', ['$scope', '$state','LeadsService', function($scope, $state, LeadsService)
{
    $scope.leadsList = [];
    var response = LeadsService.getLeadsList();
    response.then(function(data){
        console.log(data);
        $scope.leadsList = data.data;
    },
    function(error)
    {
        console.log("error");
    });
    $scope.openDetails = function()
    {
        $state.go('details');
    }
}]);