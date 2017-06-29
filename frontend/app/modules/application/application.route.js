(function () {
  'use strict';

console.log('directiva app');
  angular.module('application')
    /* @ngInject */
    
    .config( function($stateProvider) {
      
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