app.controller('NewTaskController', function ($scope, tasksService) {
    $scope.addTask = function (e) {
        e.preventDefault()
        tasksService.addTask({name: $scope.tasks.newTask, done: false})
        $scope.tasks.newTask = ''
    }
})
