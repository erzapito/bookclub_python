(function () {
	'use strict';

	angular
		.module('books-list')
		.controller('BooksList', BooksList);

    /* @ngInject*/
    function BooksList() {
      var vm = this;


      vm.books = [
          {
            title: 'Los juegos del hambre',
            author: 'Suzanne Collins',
            owner: 'Estel',
            id: '1'
          },
          {
            title: 'Un pequeño inconveniente',
            author: 'Mark Haddon',
            owner: 'Alex',
            id: '2'
          },
          {
            title: 'La casa',
            author: 'Paco Roca',
            owner: 'Ainize',
            id: '3'
          }
        ];
    };

    

})();
