(function () {
    angular.module('app')
    .factory('tasksService', function () {
        const STORAGE = sessionStorage
        const STORAGE_KEY = "tasks"
        const defaultTasks = [
            {name: 'Task One', done: false},
            {name: 'Task Two', done: false},
            {name: 'Task Three', done: false},
        ]

        let tasks = angular.fromJson(STORAGE.getItem(STORAGE_KEY) || defaultTasks)

        let _save = function (data) {
            STORAGE.setItem(STORAGE_KEY, angular.toJson(data))
        }

        return {
            data: tasks,

            addTask: function (task) {
                this.data.push(task)
                _save(this.data)
            },

            removeTask: function (index) {
                this.data.splice(index, 1)
                _save(this.data)
            },

            toggleCompleted: function (index) {
                this.data[index].completed = !this.data[index].completed
                _save(this.data)
            },

            remaining: function () {
                return this.data.reduce(function (count, task) {
                    return task.done ? count : count + 1
                }, 0)
            }
        }
    })
})()
