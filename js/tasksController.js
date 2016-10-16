    angular.module('app')
    .controller('TasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
        $scope.tasks = tasksService
        $scope.filter = ''
        $scope.filterName = ''

        $scope.setFilter = function (filter) {
            $scope.filterName = filter
            switch (filter) {
                case 'completed':
                    return $scope.filter = { done: true }
                    break
                case 'remaining':
                    return $scope.filter = { done: false }
                    break
            }
            return $scope.filter = ''
        }
    }])
