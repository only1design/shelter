export const copyHtml = () => {
    return app.gulp.src(app.path.src.htmlFiles)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "COPY HTML",
                message: "Error: <%= error.message %>"
            })
        ))

        // // Replace path autocomplete alias
        .pipe(app.plugins.replace(/@styles\//g, 'styles/'))
        .pipe(app.gulp.dest(app.path.build.htmlFolder))

        .pipe(app.plugins.browsersync.stream());
}