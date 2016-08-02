angular.module('dfw.core')
  .controller('mainNavController', ['$scope', function($scope) {
      $scope.nav = 1;

      $scope.setNav = function (navId) {
          $scope.nav = navId;
      };

      $scope.isSet = function (navId) {
          return $scope.nav === navId;
      };

      // $scope.focus = function($event) {
      //     console.log("^^^^^^^^^^^^^^ focused", $event);
      //     /*$($event.currentTarget).addClass({
      //     });*/
      // };
      //
      // $scope.blur = function($event) {
      //     console.log("^^^^^^^^^^^^^^ blurred", $event);
      //     /*$($event.currentTarget).addClass({
      //     });*/
      // };
      //

      $scope.select = function($event) {
          console.log("^^^^^^^^^^^^^^ select", $event);
          // $($event.currentTarget);
      };

  }]);
