OfflineSyncApp.controller('leadFormController', ['$scope', '$state', 'LeadsService', function($scope, $state, LeadsService)
{
    var action = $state.params.leadData.action;
    if(action == "edit")
    {
        $scope.lead = $state.params.leadData.lead;
        $scope.btnName = "Update";
    }
    else
    {
        //$scope.lead = {};
        $scope.btnName = "Add";
    }
    
    $scope.submitForm = function(valid)
    {
        if(valid)
        {
            if(action == "edit")
            {
                var p = LeadsService.editLead($scope.lead);
                p.then(function(response)
                {
                    $state.go('list');
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
                    $state.go('list');
                },
                function(error)
                {

                });
            }
        }
    }

}]);