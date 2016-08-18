(function(){
	'use strict';

	angular.module('data')
		.service('dataService', ['$q', DataService]);

	function DataService($q) {
		var siteData = [{
			siteTitle: 'Daniel Smith Development',
			siteAuthor: 'Daniel Smith'
		}]
	};

		return {
			loadSiteData: function() {
				return $q.when(siteData);
			}
		};
	}
)();