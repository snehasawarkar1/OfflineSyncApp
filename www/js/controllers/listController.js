OfflineSyncApp.controller('listController', ['$scope', '$state','LeadsService', 'StorageService', function($scope, $state, LeadsService, StorageService)
{
    $scope.leadsList = [];
    var response = LeadsService.getLeadsList();
    response.then(function(data){
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

    $scope.createNew = function()
    {
        $state.go("leadForm", {leadData: {action : "new"}});
    }

    $scope.editLead = function(lead)
    {
        var data = {
            lead : lead,
            action : 'edit'
        }
        $state.go("leadForm", {leadData: data});
    }

}]);