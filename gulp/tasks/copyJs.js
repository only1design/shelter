import webpack from "webpack-stream";

export const copyJs = () => {
    return app.gulp.src(app.path.src.jsFile)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: "development",
            output: {
                filename: 'main.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.jsFolder))

        .pipe(app.plugins.browsersync.stream());
}