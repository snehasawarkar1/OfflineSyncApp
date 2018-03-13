OfflineSyncApp.controller('listController', ['$scope', '$state','LeadsService', 'StorageService', function($scope, $state, LeadsService, StorageService)
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
    $scope.openDetails = function(selectedLead)
    {
        StorageService.setItem('selectedLead',selectedLead);
        $state.go('details');
    }
}]);