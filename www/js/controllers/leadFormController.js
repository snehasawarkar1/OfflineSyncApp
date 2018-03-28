OfflineSyncApp.controller('leadFormController', ['$scope', '$state', 'LeadsService', 'StorageService', function($scope, $state, LeadsService, StorageService)
{
    var action = $state.params.leadData.action;
    if(action == "edit")
    {
        $scope.lead = $state.params.leadData.lead;
        $scope.btnName = "Update";
    }
    else
    {
        $scope.lead = {};
        $scope.btnName = "Add";
    }

    $scope.submitForm = function(valid) {
        if(valid)
        {

            if(action == "edit")
            {
                var p = LeadsService.editLead($scope.lead);
                p.then(function(response)
                {
                    // openDetails($scope.lead)
                    $state.go('app.list');
                },
                function(error)
                {

                });
            }
            else
            {
                var p = LeadsService.createLead($scope.lead);
                p.then(function(response)
                {
                    // openDetails($scope.lead)
                    $state.go('app.list');
                },
                function(error)
                {

                });
            }
        }
    }

    function openDetails(selectedLead) {
        StorageService.setItem('selectedLead', selectedLead);
        $state.go('app.details');
    }

}]);