OfflineSyncApp.controller('listController', ['$scope', '$state','LeadsService', 'StorageService', function($scope, $state, LeadsService, StorageService)
{
    $scope.leadsList = [];

    function init() {
        var response = LeadsService.getLeadsList();
        response.then(function(data){
           $scope.leadsList = data.data;
        },
        function(error)
        {
            console.log("error");
        });
    }

    $scope.openDetails = function(selectedLead)
    {
        StorageService.setItem('selectedLead',selectedLead);
        $state.go('app.details');
    }

    $scope.createNew = function()
    {
        $state.go("app.leadForm", {leadData: {action : "new"}});
    }

    $scope.editLead = function(lead)
    {
        var data = {
            lead : lead,
            action : 'edit'
        }
        $state.go("app.leadForm", {leadData: data});
    }

    $scope.$on("$ionicView.enter", function(scopes, states) {
        if(states.stateName == "app.list") {
            init()
        }
    });

}]);