var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm i -g gulp static-server",
]));

gulp.task("serve", shell.task("node express-server.js"));

gulp.task("head", shell.task(
       "curl -v --head http://eloquentjavascript.net/17_http.html"
));

gulp.task("get", shell.task(
       "node get.js"
));

gulp.task("post", shell.task(
       "node post.js"
));
