angular.module('dfw.core')
  .directive('carouselList', function() {
      return {
        restrict: 'E',
        scope: true,
        templateUrl: 'js/templates/carousel.html',
        link: linkFn
      };
  });

var linkFn = function ($scope) {
	$scope.carouselTitle = "My Favorite";
    $scope.index = "1";
    $scope.listCategory = "Poster";
};
