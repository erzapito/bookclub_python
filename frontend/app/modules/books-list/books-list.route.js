(function () {
  'use strict';

  angular.module('books-list')
    /* @ngInject */
    
    .config(['$stateProvider', function($stateProvider) {
      var BooksList = {
				name: 'bookClubApp.books-list',
				url: '/books-list',
        template: '<h3>hello world!</h3>'
				/*views: {
					'main@bookClubApp': {
						templateUrl: 'modules/books-list/books-list.template.html'
					}
				}*/
			};

      var Index = {
				name: 'application.index',
				url: '/',
         template: '<h3>Its the UI-Router hello world app!</h3>'
				/*views: {
					'main@application': {
						templateUrl: 'modules/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index'
					}
				}*/
			};

      $stateProvider.state(Index);
			$stateProvider.state(BooksList);
    }]);
})();
