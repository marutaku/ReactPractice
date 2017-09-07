const gulp = require('gulp');
const browserify = require('browserify');
const source = require("vinyl-source-stream");
const reactify = require('reactify');
const babelify = require('babelify');

const jsFilePath =[
    './src/index.jsx',
    './src/index.html',
    './src/main.css'
];

gulp.task('browserify', function() {
    browserify(jsFilePath, { debug: true })
        .transform(babelify.configure({
            presets: ["react"]
        }))
        .bundle()
        .on("error", function (err) { console.error("Error : " + err.message); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('build'));
});