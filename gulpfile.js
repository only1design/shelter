// Main modules
import gulp from 'gulp';

// Import path
import path from './gulp/config/path.js';

// Import others plugins
import { plugins } from './gulp/config/plugins.js';

// Global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Tasks import
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { less } from './gulp/tasks/less.js';
import { server } from './gulp/tasks/server.js';

// Watcher for files changes
function watcher() {
  gulp.watch(path.watch.js, copy);
  gulp.watch(path.watch.html, copy);
  gulp.watch(path.watch.fonts, copy);
  gulp.watch(path.watch.img, copy);
  gulp.watch(path.watch.less, less);
}

// Main tasks
const mainTasks = gulp.parallel(copy, less);

// Building a task execution script
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

export { dev };

gulp.task('default', dev);