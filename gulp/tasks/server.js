export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.htmlFolder}`,
        },
        notify: false,
        port: 3000,
        browser: "chrome",
    })
}