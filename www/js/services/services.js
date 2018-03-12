OfflineSyncApp.service('LeadsService', ['$http', '$q', function ($http, $q) {
	var baseUrl = "https://fierce-waters-45153.herokuapp.com/";
    return {
        getLeadsList: function () {
            var req = {                
				url : baseUrl + 'leads.json',
                method: 'GET'
            };
           return $http(req);
        }
    }
}]);