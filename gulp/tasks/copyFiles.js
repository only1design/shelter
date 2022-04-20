export const copyFiles = () => {
  return app.gulp.src(app.path.src.otherFiles)
      .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
              title: "COPY FILES",
              message: "Error: <%= error.message %>"
          })
      ))
      .pipe(app.gulp.dest(app.path.build.filesFolder))

      .pipe(app.plugins.browsersync.stream());
}