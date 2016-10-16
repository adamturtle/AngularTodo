let gulp = require('gulp')
let wrap = require('gulp-wrap')
let concat = require('gulp-concat')
let sourcemaps = require('gulp-sourcemaps')
let uglify = require('gulp-uglify')
let babel = require('gulp-babel')
let notify = require("gulp-notify")

let js = [
    './js/main.js',
    './js/tasksService.js',
    './js/tasksController.js',
    './js/newTaskController.js'
]


gulp.task('watch', function () {
    gulp.watch('js/**/*.js',['build'])
})

gulp.task('build', function () {
    gulp.src(js)
        .pipe(sourcemaps.init())
            .pipe(wrap('(function(){\n"use strict";\n<%= contents %>})();'))
            .pipe(concat('./build/app.min.js'))
            .pipe(babel({presets: ['es2015']}))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
        .pipe(notify("Compilation complete!"))
})

gulp.task('vendor', function () {
    gulp.src('./node_modules/angular/angular.min.js')
        .pipe(gulp.dest('./js/vendor'));
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('./css/vendor'));
})

gulp.task('default', ['build', 'vendor'])

// elixir(function(mix) {
//     mix.copy('./node_modules/angular/angular.min.js', './js/vendor/angular.min.js')
//     mix.copy('./node_modules/bootstrap/dist/css/bootstrap.css', './css/vendor')

//     mix.scripts(
//         files,
//         './build/main.js',
//         null,
//         {format: 'iife'}
//     )
// })
