'use strict'
angular.module('app')
.controller('NewTaskController', ['$scope', 'tasksService', function ($scope, tasksService) {
    $scope.addTask = function (e) {
        e.preventDefault()
        tasksService.addTask({name: $scope.tasks.newTask, done: false})
        $scope.tasks.newTask = ''
    }
}])
