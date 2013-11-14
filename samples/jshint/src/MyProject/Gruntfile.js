/* jshint node: true, browser: false */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: ['**/*.js'],
            options: {
                jshintrc: true,
                reporter: grunt.option('msbuild') ? '../jshint-msbuild-reporter.js' : undefined
            }
        }
    });

    grunt.loadTasks('../../node_modules/grunt-contrib-jshint/tasks');
};
