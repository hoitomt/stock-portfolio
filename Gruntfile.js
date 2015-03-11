module.exports = function(grunt){
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: './public',
          port: '4000',
          host: '*'
        }
      }
    },
    clean: {
      build: {
        src: ['public/js', 'public/css']
      }
    },
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: [{
          expand: true,
          cwd: 'app/coffeescript',
          src: ['**/*.coffee', '**/*.js'],
          dest: 'public/js',
          ext: '.js'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/stylesheets',
          src: ['**/*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },
    haml: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/views',
          src: ['**/*.haml'],
          dest: 'public',
          ext: '.html'
        }]
      }
    },
    slim: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/views',
          src: ['**/*.slim'],
          dest: 'public',
          ext: '.html'
        }]
      }
    },
    watch: {
      js: {
        files: ['app/coffeescript/**/*.coffee'],
        tasks: ['coffee']
      },
      styles: {
        files: ['app/stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      haml: {
        files: ['app/views/**/*.haml'],
        tasks: ['haml']
      },
      slim: {
        files: ['app/views/**/*.slim'],
        tasks: ['slim']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-slim');

  grunt.registerTask('build', ['clean', 'coffee', 'sass', 'haml', 'slim']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
}