let elixir = require('laravel-elixir')

let files = [
    './js/main.js',
    './js/tasksService.js',
    './js/tasksController.js',
    './js/newTaskController.js'
]

elixir(function(mix) {
    mix.rollup(
        files,
        './build/main.js',
        null,
        {format: 'iife'}
    )
})
