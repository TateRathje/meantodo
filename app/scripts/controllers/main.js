'use strict';


function MainCtrl($rootScope, $scope, $log, $interval, dataService) {

  // $scope.seconds = 0;

  // $scope.counter = function() {
  //   $scope.seconds++;
  //   $log.log($scope.seconds + ' have passed!');
  // };

  // $interval($scope.counter, 1000, 10);

  dataService.getTodos(function(response) {
    var todos = response.data.todos;
    $scope.todos = todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({
      name: "This is a new todo.",
      completed: false
    });
  };

}

module.exports = MainCtrl;
