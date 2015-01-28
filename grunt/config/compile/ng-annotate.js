// Configuration for ngAnnotate task(s)
// Compile angular files to be minification-safe
'use strict';

// Allow the use of non-minsafe DI in AngularJS files.
var taskConfig = function(grunt) {

  grunt.config.set('ngAnnotate', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeogurt.tmp %>/concat',
        src: '*/**.js',
        dest: '<%= yeogurt.tmp %>/concat'
      }]
    }
  });

};

module.exports = taskConfig;
