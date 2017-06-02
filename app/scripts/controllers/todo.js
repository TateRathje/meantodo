'use strict';

function TodoCtrl($rootScope, $scope, dataService, usSpinnerService) {
  
  $scope.spinneractive = false;

  $scope.deleteTodo = function(todo, index) {
    $scope.startSpin();
    dataService.deleteTodo(todo).then(function() {
      $scope.todos.splice(index, 1);
      $scope.stopSpin();
    });
  };

  $scope.saveTodos = function() {
    $scope.startSpin();
    var filteredTodos = $scope.todos.filter(function(todo) {
      if (todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos)
      .finally(function() {
        $scope.resetTodoState();
        $scope.stopSpin();
      });
  };

  $scope.resetTodoState = function() {
    $scope.todos.forEach(function(todo) {
      todo.edited = false;
    });
  };

  // Angular spinner functions
  $scope.startSpin = function() {
      if (!$scope.spinneractive) {
        usSpinnerService.spin('spinner-1');
      }
    };

    $scope.stopSpin = function() {
      if ($scope.spinneractive) {
        usSpinnerService.stop('spinner-1');
      }
    };

  $rootScope.$on('us-spinner:spin', function(event, key) {
    $scope.spinneractive = true;
  });

  $rootScope.$on('us-spinner:stop', function(event, key) {
    $scope.spinneractive = false;
  });

}

module.exports = TodoCtrl;
