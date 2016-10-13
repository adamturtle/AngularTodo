app.controller('TasksController', function ($scope, tasksService) {
    $scope.tasks = tasksService
    $scope.filter = ''

    $scope.setFilter = function (filter) {
        if (filter) {
            if (filter === 'completed') {
            	return $scope.filter = {done: true}
            }
            else if (filter === 'remaining') {
            	return $scope.filter = {done: false}
            }
        }
        return $scope.filter = ''
    }
})
