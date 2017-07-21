(function () {
  'use strict';

  angular.module('application')
    /* @ngInject */
    
    .config( function($stateProvider) {
      console.log('entra');
      var Application = {
				name: 'application',
				url: '{path:.*}',
				 views: {
					'application': {
						template: '<h3>Its the UI-Router hello world app!</h3>',
						}
					}
        };

      $stateProvider.state(Application);
    });
})();