module.exports = function(grunt){

  grunt.initConfig({
    name: 'sen',
    watch:{
      files: ['*.js', '*.css'],
      task: ['updated']
    },

    uglify: {
      build: {
        src:['index.js','logger.js'],
        dest: 'dist/bundle.js'
      }
    }
  });
  //watch!
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-babel');

  grunt.registerTask(['babel']);

  grunt.registerTask('updated', () =>{
    grunt.log.writeln('updated again');
  })

  grunt.registerTask('default', () =>{
    grunt.log.writeln(`Hello, ${grunt.config.get('name')}`);
  });

};
