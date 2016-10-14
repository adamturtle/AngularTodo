app.factory('tasksService', function () {
    let tasks = angular.fromJson(localStorage.getItem('tasks') || "[]")

    let _save = function (data) {
        localStorage.setItem('tasks', angular.toJson(data))
    }

    return {
        data: tasks,
        // data: [
        //     { name: 'Task One', done: false },
        //     { name: 'Task Two', done: false },
        //     { name: 'Task Three', done: true },
        //     { name: 'Task Four', done: false }
        // ],

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
