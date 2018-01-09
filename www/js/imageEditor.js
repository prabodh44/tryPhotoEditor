angular.module('app', ['pmImageEditor'])
      .controller('Ctrl', function($scope) {
        $scope.width = 500;
        $scope.image = 'img/logo.png';
        $scope.selectionWidth = 100;
        $scope.selectionHeight = 70;
      });