OfflineSyncApp.service('StorageService', [function () {
	 return {
        setItem: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },

        getItem: function(key)
        {
            return localStorage[key];
        }
    }

}]);