export const copy = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.gulp.src(app.path.src.html))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.gulp.src(app.path.src.fonts))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.gulp.src(app.path.src.img))
        .pipe(app.gulp.dest(app.path.build.img))

        .pipe(app.plugins.browsersync.stream());
}