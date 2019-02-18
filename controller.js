var app=angular.module('angular1',[]);
app.controller('myCtrl',function($scope)
{
    $scope.name="Hello World!";
    console.log($scope.name);
});