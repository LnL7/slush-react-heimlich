'use strict';

var gulp        = require('gulp')
  , browserSync = require('browser-sync')
  , del         = require('del')
  , heimlich    = require('heimlich')
  , path        = require('path')
  , sequence    = require('run-sequence')
  ;

gulp.task('clean', function (next) {
  del(['<%= javascripts %>', '<%= stylesheets %>'], next);
});

gulp.task('watch', ['browser'],  function () {
  sequence(
    ['clean'],
    ['jsx', 'styl']
  );
  gulp.watch([ '<%= app %>/**/styles/**/*.css', '<%= app %>/**/styles/index.styl' ], ['styl']);
});

gulp.task('browser', ['node'], function () {
  browserSync({
      files : [ '<%= javascripts %>', '<%= stylesheets %>' ]
    , port  : 7000
    , proxy : '127.0.0.1:3000'
    , open  : false
  });
});

gulp.task('node', heimlich.tasks.node({
  files: [ '<%= app %>/router/**/*', '<%= app %>/server/**/*' ]
}));

gulp.task('jsx', function () {
  heimlich.browserify({
    debug    : true
  , entries  : ['./client.js']
  , watching : true
  })
    .configure(heimlich.browserify.external({
      libs: [
        'react'
      , 'react-router'
      , 'react-document-title'
      ]
    }))
    .configure(heimlich.browserify.react())
    .done(function (stream) {
      stream.pipe(heimlich.dest('<%= javascripts %>'));
    });
});

gulp.task('styl', heimlich.tasks.stylus({
  source : ['<%= app %>/**/styles/*.css', '<%= app %>/**/styles/*.styl']
, dest   : '<%= stylesheets %>'
}));

gulp.task('default', ['watch']);
