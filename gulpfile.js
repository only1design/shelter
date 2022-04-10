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
import { copyJs } from './gulp/tasks/copyJs.js';
import { copyHtml } from './gulp/tasks/copyHtml.js';
import { copyImg } from './gulp/tasks/copyImg.js';
import { copyFonts } from './gulp/tasks/copyFonts.js';
import { less } from './gulp/tasks/less.js';
import { server } from './gulp/tasks/server.js';


// Watcher for files changes
function watcher() {
  gulp.watch(path.watch.jsFiles, copyJs);
  gulp.watch(path.watch.htmlFiles, copyHtml);
  gulp.watch(path.watch.fontsFiles, copyFonts);
  gulp.watch(path.watch.imgFiles, copyImg);
  gulp.watch(path.watch.lessFiles, less);
}

// Main tasks
const mainTasks = gulp.parallel(copyJs, copyHtml, copyFonts, copyImg, less);

// Building a task execution script
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

export { dev };

gulp.task('default', dev);