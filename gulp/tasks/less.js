import gulpLess from 'gulp-less'; //less preprocessor
import gulpSourcemaps from 'gulp-sourcemaps'; //sourcemaps
import autoprefixer from 'gulp-autoprefixer'; //adding vendor prefixes

export const less = () => {
    return app.gulp.src(app.path.src.less)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "LESS",
                message: "Error: <%= error.message %>"
            })
        ))

        // CSS Sourcemap
        .pipe(gulpSourcemaps.init())
        // Less interpretator
        .pipe(gulpLess())
        // Autoprefixer
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 8 versions"],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
            cascade:  true,
        }))
        
        // CSS Sourcemap
        .pipe(gulpSourcemaps.write('/'))

        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}