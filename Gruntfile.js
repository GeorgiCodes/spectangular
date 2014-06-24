module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['src/**/*.js', 'specs/**/*.js'],
      options: {
        globals: {
          _: false,
          $: false,
          jasmine: false,
          describe: false,
          it: false,
          expect: false,
          beforeEach: false
        },
        browser: true,
        devel: true
      }
    },
    testem: {
      unit: {
        options: {
          framework: 'jasmine',
          launch_in_dev: ['PhantomJS'],
          serve_files: [
            'node_modules/lodash/lodash.js',
            'node_modules/jquery/dist/jquery.js',
            'src/**/*.js',
            'specs/**/*.js'
          ],
          watch_files: [
            'src/**/*.js',
            'specs/**/*.js'
          ]
        }
      }
    },
    watch: {
      all: {
        files: ['src/**/*.js', 'specs/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-testem');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['testem:run:unit']);
};
