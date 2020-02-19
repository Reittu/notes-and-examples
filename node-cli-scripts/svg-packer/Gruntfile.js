module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  svgstore: {
    options: {
      prefix : 'icon-', // This will prefix each ID,
      inheritviewbox: true
    },
    default : {
      files: {
        'output/svg_sprite.svg': ['svgs/*.svg'],
      },
    },
  },
});

  grunt.loadNpmTasks('grunt-svgstore');

};