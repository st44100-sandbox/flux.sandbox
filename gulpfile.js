var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

function compile(watch) {
  var bundler = watchify(browserify('./src/index.js', {
    debug: true,
    }).transform(babelify, {
        presets: [
            "es2015",
            "react"
        ]
    }));

  function rebundle() {
    bundler.bundle()
    .on('error', function(err) {
        console.error(err); this.emit('end');
    })
    .on('end', function(src){
        console.log('...finish.');
    })
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('bundleling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);
