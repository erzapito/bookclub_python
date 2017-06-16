console.log('pasa por la directiva');


'use strict';

(function() {
  angular
    .module('app-header')
      .directive('appHeader', appHeader);


    /* @ngInject */
    function AppHeader() {

      console.log('pasa');

      var directive = {
        templateUrl: 'app-header.template.html',
        restrict: 'AEC'
      }

      return  directive;
      
    }

  })();
