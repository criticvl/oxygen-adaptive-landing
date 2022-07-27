import svgSprite from 'gulp-svg-sprite';

export const svg = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "svg",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: false
            }
        }
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};
