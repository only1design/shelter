export const copyJs = () => {
    return app.gulp.src(app.path.src.jsFiles)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.jsFolder))

        .pipe(app.plugins.browsersync.stream());
}