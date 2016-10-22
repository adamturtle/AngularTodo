'use strict'
angular.module('app')
    .controller('TasksController', ['$scope', 'tasksService', function ($scope, tasksService) {
        let vm = this
        vm.tasks = tasksService
        vm.filter = ''
        vm.filterName = ''
        vm.setFilter = function (filter) {
            vm.filterName = filter
            switch (filter) {
                case 'completed':
                    return (vm.filter = { done: true })
                case 'remaining':
                    return (vm.filter = { done: false })
            }
            return (vm.filter = '')
        }
    }])
