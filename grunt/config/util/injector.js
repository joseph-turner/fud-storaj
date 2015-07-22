// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    },
    // Inject application script files into index.html (doesn't include bower)
    scripts: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');
          return '<script src="/' + filePath + '"></script>';
        },
        starttag: '<!-- [injector:js] -->',
        endtag: '<!-- [endinjector] -->'
      },
      files: {
        '<%= yeogurt.client %>/index.html': [
          '<%= yeogurt.client %>/app/**/*.js',
          '!<%= yeogurt.client %>/app/app.js',
          '!<%= yeogurt.client %>/app/**/*.spec.js',
          '!<%= yeogurt.client %>/app/**/*.mock.js',
          '!<%= yeogurt.client %>/scripts/app.js'
        ]
      }
    },
    // Inject component scss into main.scss
    sass: {
      options: {
        transform: function(filePath) {
          grunt.log.writeln('Before ' + filePath);
          if ( filePath.indexOf('app' > -1)) {
            filePath = filePath.replace('/client/', '../');
            grunt.log.writeln('In 1 ' + filePath);
          } else {
            filePath = filePath.replace('/client/styles/', '');
            grunt.log.writeln('In 2 ' + filePath);
          }
            filePath = filePath.replace(/(\/)(_)([a-zA-z]+\.[A-Za-z]*)/, '$1$3');
            grunt.log.writeln('After ' + filePath);

          return '@import \'' + filePath.slice(0, -5) + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/styles/main.scss': [
          '<%= yeogurt.client %>/styles/**/*.scss',
          '!<%= yeogurt.client %>/styles/main.scss',
          '<%= yeogurt.client %>/app/**/*.scss'
        ]
      }
    },
  });

};

module.exports = taskConfig;
