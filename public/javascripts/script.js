var app = angular.module('bmiApp', []);

app.controller('MainCtrl', function($scope, $http){
  $http.get("/home").success(function(data){
    $scope.personData = data.personData;
  })
})
