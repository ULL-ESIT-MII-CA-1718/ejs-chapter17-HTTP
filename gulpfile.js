var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm i -g gulp static-server",
]));

gulp.task("serve", shell.task("static-server"));

gulp.task("lint", shell.task("jshint *.js **/*.js"));
