import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './shelter';
const srcFolder = './src';

const path = {
    build: {
        js: `${buildFolder}/scripts/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/styles/fonts/`,
        img: `${buildFolder}/styles/img/`,
        css: `${buildFolder}/styles/`,
    },
    src: {
        js: `${srcFolder}/scripts/**/*.js`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/styles/fonts/**/*.*`,
        img: `${srcFolder}/styles/img/**/*.*`,
        less: `${srcFolder}/styles/general.less`,
    },
    watch: {
        js: `${srcFolder}/scripts/**/*.js`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/styles/fonts/**/*.*`,
        img: `${srcFolder}/styles/img/**/*.*`,
        less: `${srcFolder}/styles/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}

export default path;