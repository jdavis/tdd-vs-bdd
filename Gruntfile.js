/*
 * tdd-vs-bdd
 * https://github.com/jdavis/tdd-vs-bdd
 *
 * Copyright (c) 2013 Josh Davis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        cafemocha: {
            tdd: {
                src: 'test/tdd.js',
                options: {
                    ui: 'tdd',
                },
            },

            bdd: {
                src: 'test/bdd.js',
                options: {
                    ui: 'bdd',
                    require: [
                        'should',
                    ],
                },
            },
        },

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-cafe-mocha');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['cafemocha']);
};
