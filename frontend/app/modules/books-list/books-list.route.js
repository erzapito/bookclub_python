(function () {
  'use strict';

  angular.module('books-list')
    /* @ngInject */
    
    .config(['$stateProvider', function($stateProvider) {
      var BooksList = {
				name: 'books-list',
				url: '/books-list',
				views: {
					'application': {
						templateUrl: 'modules/books-list/books-list.template.html',
						controller: 'BooksList',
						controllerAs: 'booksList',
					}
				} 
				
			};

    

			
			$stateProvider.state(BooksList);
			/*$stateProvider.state('default', {
				views: {
					'main': {
							url:'/',
						template:'Hola mundo'
					}
				}
				
			});*/
    }]);
})();
