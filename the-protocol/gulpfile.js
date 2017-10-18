var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm i -g gulp static-server",
]));

gulp.task("serve", shell.task("static-server"));

gulp.task("lint", shell.task("jshint *.js **/*.js"));

gulp.task("head", shell.task(
       "curl -v --head http://eloquentjavascript.net/17_http.html"
      ));

gulp.task("post", shell.task(
       "curl -v -X POST http://eloquentjavascript.net/17_http.html"
      ));
