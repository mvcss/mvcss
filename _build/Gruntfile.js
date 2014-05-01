module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/application.css': '../application.sass'
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },

    csscss: {
      dist: {
        src: ['css/application.css']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-csscss');

  grunt.registerTask('build', ['sass', 'cssmin']);
  grunt.registerTask('test', ['csscss']);

};
