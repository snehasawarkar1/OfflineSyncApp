OfflineSyncApp.service('LeadsService', ['$http', '$q', function ($http, $q) {
	var baseUrl = "/v1/";
    return {
        getLeadsList: function () {
            var req = {
                url : baseUrl + 'leads.json',
                method: 'GET'
            };
           return $http(req);
        },

        editLead: function (lead) {
            var req = {
                url : baseUrl + 'leads/' + lead.id + '.json',
                method : 'PUT',
                data : lead
            };
            return $http(req);
        },

        createLead: function (lead, action) {
            var req = {
                url : baseUrl + 'leads.json',
                method : action,
                data : lead
            };
            return $http(req);
        }
    }
}]);
