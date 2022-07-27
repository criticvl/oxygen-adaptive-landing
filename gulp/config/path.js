import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    images: `${buildFolder}/imgs/`,
    js: `${buildFolder}/js/`,
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    images: `${srcFolder}/imgs/**/*.{jpg,jpeg,png,gif,webp,ico,mp4}`,
    svg: `${srcFolder}/imgs/**/*.svg`,
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgs/*.svg`,
  },
  watch: {
    images: `${srcFolder}/imgs/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `web`,
};
