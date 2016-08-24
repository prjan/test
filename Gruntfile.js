module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                src: 'assets/scss/style.scss',
                dest: 'assets/css/style.css'
            }
        },
        
        watch : {
            html : {
                files   : 'index.html',
                options : {
                    livereload : true
                }
            },
            css : {
                files   : 'assets/scss/**/*.scss',
                tasks   : ['sass'],
                options : {
                    livereload : true
                }
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};