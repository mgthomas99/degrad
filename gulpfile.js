var gulp = require("gulp");
var typescript = require("gulp-typescript");

gulp.task("build", function () {
    var tsProj = typescript.createProject("tsconfig.json");
    gulp.src("src/**/*.ts")
            .pipe(tsProj())
            .pipe(gulp.dest("dist/commonjs"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*.ts", [ "build" ]);
});

gulp.task("default", [ "build" ]);
