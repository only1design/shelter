export const copyImg = () => {
    return app.gulp.src(app.path.src.imgFiles)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY IMG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.imgFolder))

        .pipe(app.plugins.browsersync.stream());
}