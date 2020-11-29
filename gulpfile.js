// Imports

const gulp         = require('gulp'),
      del          = require('del'),
      rename       = require('gulp-rename'),
      // Templating
      nunjucks     = require('gulp-nunjucks-render'),
      // CSS processing
      purgecss     = require('gulp-purgecss'),
      postcss      = require('gulp-postcss'),
      tailwindcss  = require('tailwindcss'),
      autoprefixer = require('autoprefixer'),
      // BrowserSync
      browserSync  = require('browser-sync'),
      reload       = browserSync.reload;


// TASKS

// Clean previous build

gulp.task('clean', function(done) {
  // Deletes all files from dist/
  del.sync('dist/', {force: true});
  done();
});


// Reload the browser

gulp.task('reload', function(done){
  reload();
  done();
});


// Nunjucks

gulp.task('nunjucks', function() {
  // Get all .html files in pages
  return gulp.src('src/**/*.html')
  // Render template with nunjucks
  .pipe(nunjucks({
    path: ['src/templates/']
  }))
  // Output files in dist folder
  .pipe(gulp.dest('dist'))
});


// CSS processing

function TailwindExtractor(content) {
  // Extract tailwindcss classes
  // https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g);
}

// Process CSS to be as small as possible with postCSS and purgeCSS
// This task takes a few seconds - only use it in production
gulp.task('css-prod', function() {
  return gulp.src('src/css/style.css')
    // postcss
    .pipe(postcss([
      tailwindcss,
      autoprefixer
    ]))
    // purgecss
    .pipe(purgecss({
      content: ['src/**/*.html'],
      extractors: [{
        extractor: TailwindExtractor,
        extensions: ['html']
      }]
    }))
    // output files in dist folder
    .pipe(gulp.dest('dist/static/css/'));
});

// Use the complete tailwind.min.css file for development only
gulp.task('css-dev', function() {
  return gulp.src('node_modules/tailwindcss/dist/tailwind.min.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/static/css/'));
});


// Start browserSync

gulp.task('serve', function(done){
  browserSync({
    server: {
      baseDir: './dist',
      index: "index.html",
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  done();
});


// Watch for changes

gulp.task('watch', function(done){
  // Watch HTML pages
  gulp.watch('src/**/*.html', gulp.series('nunjucks', 'reload'));
  // Watch CSS files
  gulp.watch('src/css/**/*.css', gulp.series('css-prod'));
  done();
});


// Series

// Default task
gulp.task('default', gulp.series('clean', 'css-dev', 'nunjucks', 'serve',
  'watch'));

// Deployment task
gulp.task('build', gulp.series('clean', 'css-prod'));
