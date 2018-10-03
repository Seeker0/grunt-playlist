"use strict";

let sass = require("node-sass");

module.exports = grunt => {
  "use strict";

  //configuration
  grunt.initConfig({
    //pass in options to plugins, and references to files
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "build/scripts.js"
      },
      css: {
        src: ["css/reset.css", "css/bootstrap.css", "css/styles.css"],
        dest: "build/styles.css"
      }
    },
    sass: {
      build: {
        options: {
          implementation: sass,
          sourceMap: false
        },
        files: [
          {
            src: "css/sass/styles.scss",
            dest: "css/styles.css"
          }
        ]
      }
    },
    uglify: {
      build: {
        files: [
          {
            src: "build/scripts.js",
            dest: "build/scripts.js"
          }
        ]
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //register tasks
  grunt.registerTask("concat-js", ["concat:js"]);

  grunt.registerTask("concat-css", ["concat:css"]);

  grunt.registerTask("default", () => console.log("working"));
};
