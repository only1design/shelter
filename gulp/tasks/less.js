import gulpLess from "gulp-less"; //less preprocessor
import gulpSourcemaps from "gulp-sourcemaps"; //sourcemaps
import autoprefixer from "gulp-autoprefixer"; //adding vendor prefixes

export const less = () => {
  return (
    app.gulp
      .src(app.path.src.lessFile)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "LESS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // CSS Sourcemap
      .pipe(gulpSourcemaps.init())
      // Less interpretator
      .pipe(gulpLess())
      // Autoprefixer
      //   .pipe(
      //     autoprefixer({
      //       grid: true,
      //       overrideBrowserslist: ["last 8 versions"],
      //       browsers: ["defaults"],
      //       cascade: true,
      //     })
      //   )

      // CSS Sourcemap
      .pipe(gulpSourcemaps.write("/"))

      // Replace path autocomplete alias
      .pipe(app.plugins.replace(/@styles\//g, ""))

      .pipe(app.gulp.dest(app.path.build.cssFolder))
      .pipe(app.plugins.browsersync.stream())
  );
};
