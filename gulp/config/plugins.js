import replace from "gulp-replace";  // Search and replace
import plumber from "gulp-plumber";  // Error handler
import notify from "gulp-notify"; // Notify
import browsersync from "browser-sync"; // Browser auto-refresh

// Export plugins object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}