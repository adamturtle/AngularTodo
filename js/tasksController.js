app.controller('TasksController', function ($scope, tasksService) {
    $scope.tasks = tasksService

    $scope.setFilter = function (filter) {
        if (filter) {
            return $scope.filter = filter
        }
        return $scope.filter = ''
    }
})
