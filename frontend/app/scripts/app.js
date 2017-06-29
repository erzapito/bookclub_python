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
      'main-menu'
    ])
    .run(run);

    /* @ngInject */
    /*
    function run($stateProvider) {
      $state.go('application.index');
    };
*/