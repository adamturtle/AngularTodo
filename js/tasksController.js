    angular.module('app')
    .controller('TasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
        $scope.tasks = tasksService
        $scope.filter = ''
        $scope.filterName = 'completed'

        $scope.setFilter = function (filter) {
            $scope.filterName = filter
            if (filter) {
                if (filter === 'completed') {
                    return $scope.filter = { done: true }
                }
                else if (filter === 'remaining') {
                    return $scope.filter = { done: false }
                }
            }
            return $scope.filter = ''
        }
    }])
