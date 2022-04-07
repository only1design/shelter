export const copy = () => {
    return app.gulp.src(app.path.src.jsFiles)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.jsFolder))

        .pipe(app.gulp.src(app.path.src.htmlFiles))
        // Replace path autocomplete alias
        .pipe(app.plugins.replace(/@styles\//g, 'styles/'))
        .pipe(app.gulp.dest(app.path.build.htmlFolder))

        .pipe(app.gulp.src(app.path.src.fontsFiles))
        .pipe(app.gulp.dest(app.path.build.fontsFolder))

        .pipe(app.gulp.src(app.path.src.imgFiles))
        .pipe(app.gulp.dest(app.path.build.imgFolder))

        .pipe(app.plugins.browsersync.stream());
}