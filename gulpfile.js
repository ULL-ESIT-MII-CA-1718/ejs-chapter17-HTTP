var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
      "npm i -g gulp static-server",
      "npm install -g nodemon"
]));

gulp.task("serve", shell.task("static-server"));

gulp.task("the-protocol", shell.task("nodemon the-protocol/express-server.js"));
gulp.task("get", shell.task("nodemon the-protocol/get.js"));
gulp.task("post", shell.task("nodemon the-protocol/post.js"));

gulp.task("browsers-and-http", shell.task("nodemon browsers-and-http/server.js"));
gulp.task("xmlhttprequest", shell.task("nodemon xmlhttprequest/server.js"));
gulp.task("sending-a-request", shell.task("nodemon sending-a-request/server.js"));

gulp.task("lint", shell.task("jshint *.js **/*.js"));
