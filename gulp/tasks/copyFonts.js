export const copyFonts = () => {
    return app.gulp.src(app.path.src.fontsFiles)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.fontsFolder))

        .pipe(app.plugins.browsersync.stream());
}