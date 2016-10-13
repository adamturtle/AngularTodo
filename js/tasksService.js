app.factory('tasksService', function () {
    return {
        data: [
            { name: 'Task One', done: false },
            { name: 'Task Two', done: false },
            { name: 'Task Three', done: true },
            { name: 'Task Four', done: false }
        ],
        removeTask: function (task) {
            this.data.splice(task, 1)
        },
        remaining: function () {
            return this.data.reduce(function (count, task) {
                return task.done ? count : count + 1
            }, 0)
        }
    }
})
