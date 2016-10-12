app.factory('tasksService', function () {
    return {
        tasks: [
            { name: 'Task One', done: false },
            { name: 'Task Two', done: false },
            { name: 'Task Three', done: true },
            { name: 'Task Four', done: false }
        ],
        remaining: function () {
            return this.tasks.reduce(function (count, task) {
                return task.done ? count : count + 1
            }, 0)
        }
    }
})
