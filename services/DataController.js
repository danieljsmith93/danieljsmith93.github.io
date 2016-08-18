(function() {

	angular
		.module('data')
		.controller('DataController', [
			'dataService', DataController
			]);

			function DataController(dataService)d{
				var self = this;

				self.siteTitle	= null;

				dataService
					.loadSiteData()
					.then( function( siteData ){
						self.siteTitle = siteData.siteTitle; 
					});

				// *********************
				// Internal methods
				// *********************
			}
})();