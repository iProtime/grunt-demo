module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    wiredep: {
      aaa: {
        src: [
          'dist/index.html'
        ]
      }
    },
    copy: {
      dev: {
        files: [
          // includes files within path
          {
            expand: true, 
            src: ['src/index.html'], 
            flatten: true, 
            dest: 'dist/', 
            filter: 'isFile'
          }
        ],
      },
    }

    
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy','wiredep']);

};