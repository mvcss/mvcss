module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          '../css/application.css': '../application.sass'
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: '../css/',
        src: ['*.css'],
        dest: '../css/',
        ext: '.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass', 'cssmin']);

};
