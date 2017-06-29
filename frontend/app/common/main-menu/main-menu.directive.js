(function() {
	console.log('yyy');
	'use strict';

	angular
		.module('main-menu')
		.directive('mainMenu', mainMenu);

	/* @ngInject */
  function mainMenu() {

		console.log('xxx');

    var directive = {
			templateUrl: 'common/main-menu/main-menu.template.html',
			restrict: 'EA'
			//link: link,
			//controller: CategoryBarController
		};

		return directive;

  }

})();