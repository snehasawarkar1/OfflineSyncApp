OfflineSyncApp.controller('detailsController', ['$scope', '$state', 'StorageService', function($scope, $state, StorageService)
{
    $scope.lead = JSON.parse(StorageService.getItem('selectedLead'));
    console.log($scope.lead);
    
}]);