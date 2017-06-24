module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      task: {
        src: ['_roboczy/js/zegar.js'], 
        dest: 'js/zegar.min.js'
      },
      options: {
        'mangle': {},
        'compress': {},
        'beautify': false,
        'expression': false,
        'report': 'min',
        'sourceMap': false,
        'sourceMapName': undefined,
        'sourceMapIn': undefined,
        'sourceMapIncludeSources': false,
        'enclose': undefined,
        'wrap': undefined,
        'exportAll': false,
        'preserveComments': undefined,
        'banner': '',
        'footer': ''
      }
    },
    cssmin: {
      task: {
        src: ['_roboczy/css/zegar.css'], 
        dest: 'css/zegar.min.css'
      },
      options: {
        'banner': null,
        'keepSpecialComments': '*',
        'report': 'min'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'cssmin']);
};