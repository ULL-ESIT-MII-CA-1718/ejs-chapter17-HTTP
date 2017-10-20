var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("s3000", shell.task("nodemon server3000.js"));
gulp.task("s3000-allow", shell.task("nodemon server3000-allow.js"));
gulp.task("s5000", shell.task("nodemon server5000.js"));

