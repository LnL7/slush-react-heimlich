'use strict';

var gulp     = require('gulp')
  , conflict = require('gulp-conflict')
  , inquirer = require('inquirer')
  , install  = require('gulp-install')
  , template = require('gulp-template')
  , util     = require('gulp-util')
  ;

gulp.task('default', function (done) {
  var questions = [
    {
      type    : 'input'
    , name    : 'name'
    , message : 'What\'s the name of your project?'
    , default : gulp.args.join(' ')
    }
  , {
      type    : 'input'
    , name    : 'app'
    , message : 'What\'s the path of your source directory?'
    , default : './app'
    }
  , {
      type    : 'input'
    , name    : 'public'
    , message : 'What is the path of your static files?'
    , default : './public'
    }
  , {
      type    : 'input'
    , name    : 'javascripts'
    , message : 'What is the destination path of your javascripts?'
    , default : './public/assets/javascripts'
    }
  , {
      type    : 'input'
    , name    : 'stylesheets'
    , message : 'What is the destination path of your stylesheets?'
    , default : './public/assets/stylesheets'
    }
  ];

  inquirer.prompt(questions, function (answers) {
    gulp.src(__dirname + '/templates/**', {dot: true})
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function () {
        util.log('All done...');
      })
      .on('error', function () {
        util.log();
      });
  });
});
