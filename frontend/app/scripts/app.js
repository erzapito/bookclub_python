  (function() {
  
  'use strict';

  /**
   * @ngdoc overview
   * @name bookClubApp
   * @description
   * # bookClubApp
   *
   * Main module of the application.
   */
  angular
    .module('bookClubApp', [
      'ngAnimate',
      'ngCookies',
      'ui.router',
      'books-list',
      'main-menu',
      'application'
    ])
    /* @ngInject */
    .run(run);

    
    
    function run($state) {
      //$state.go('application');
    }
  
})();

