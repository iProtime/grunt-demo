module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
          },
          {
            expand: true, 
            src: [
              'src/**/*.js',
              'bower_components/jquery/dist/jquery.min.js'
            ], 
            flatten: true, 
            dest: 'dist/js', 
            filter: 'isFile'
          }
        ],
      },
    },
    less: {
      development: {
        files: {
          "dist/css/style.css": "src/less/main.less"
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    }

    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['copy','less']);
  grunt.registerTask('deploy', ['default','cssmin']);

};