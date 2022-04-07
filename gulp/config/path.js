import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './shelter';
const srcFolder = './src';

const path = {
    build: {
        jsFolder: `${buildFolder}/scripts/`,
        htmlFolder: `${buildFolder}/`,
        htmlFiles: `${buildFolder}/*.html`,
        fontsFolder: `${buildFolder}/styles/fonts/`,
        imgFolder: `${buildFolder}/styles/img/`,
        cssFolder: `${buildFolder}/styles/`,
    },
    src: {
        jsFiles: `${srcFolder}/scripts/**/*.js`,
        htmlFiles: `${srcFolder}/*.html`,
        fontsFiles: `${srcFolder}/styles/fonts/**/*.*`,
        imgFiles: `${srcFolder}/styles/img/**/*.*`,
        lessFile: `${srcFolder}/styles/general.less`,
        cssFiles: `${srcFolder}/styles/**/*.*`,
    },
    watch: {
        jsFiles: `${srcFolder}/scripts/**/*.js`,
        htmlFiles: `${srcFolder}/*.html`,
        fontsFiles: `${srcFolder}/styles/fonts/**/*.*`,
        imgFiles: `${srcFolder}/styles/img/**/*.*`,
        lessFiles: `${srcFolder}/styles/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}

export default path;