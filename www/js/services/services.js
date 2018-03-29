OfflineSyncApp.service('LeadsService', ['$http', '$q', function ($http, $q) {
    var baseUrl = "https://fierce-waters-45153.herokuapp.com/";
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

        createLead: function (lead) {
            var req = {
                url : baseUrl + 'leads.json',
                method : 'POST',
                data : lead
            };
            return $http(req);
        }
    }
}]);
