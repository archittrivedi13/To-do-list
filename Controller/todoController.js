
var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Purchase a Laptop', done:false}];

    $scope.todoAddItem = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.removeItem = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(todoItem) {
            if (!todoItem.done) $scope.todoList.push(todoItem);
        });
    };
});