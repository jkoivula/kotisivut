var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    $http.get('projektit.json').success(function(data){
      $scope.projektit = data;
    });
});
