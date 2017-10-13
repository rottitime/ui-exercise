module.exports = function (grunt) {
	'use strict';

	var dirWeb = 'www/inc/',
		jsDevFiles =  dirWeb + 'js/**/*.js',
		allFiles = 'www/**/*';

	// Configuring Grunt modules
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* Watch for changes in the JS files
		 *  See: https://github.com/gruntjs/grunt-contrib-watch
		 * */
		watch: {
			sass: {
				files: dirWeb + 'scss/**/*.scss',
				tasks: ['sass'],
				options: {
					spawn: false,

				}
			},
			reload: {
				files: allFiles,
				options: {
					livereload: true
				}
			}
		},

		sass: {
			dist: {
				src: dirWeb + 'scss/main.scss',
				dest: dirWeb + 'css/test.css'
			}
		}

	}); //End grunt.initConfig

	/*
	 * Loading modules
	 * */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

};
