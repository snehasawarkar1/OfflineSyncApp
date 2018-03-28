OfflineSyncApp.controller('detailsController', ['$scope', '$state', 'StorageService', function($scope, $state, StorageService)
{
    $scope.lead = JSON.parse(StorageService.getItem('selectedLead'));

    $scope.editLead = function(lead) {
        var data = {
            lead : lead,
            action : 'edit'
        }
        $state.go("app.leadForm", {leadData: data});
    }

}]);