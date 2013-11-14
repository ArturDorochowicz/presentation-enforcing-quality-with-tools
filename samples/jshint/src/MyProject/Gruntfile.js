/* jshint node: true, browser: false */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: ['**/*.js'],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadTasks('../../node_modules/grunt-contrib-jshint/tasks');
};
