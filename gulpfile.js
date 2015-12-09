// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp build`
//   `gulp compile`
//   `gulp minify`
//   `gulp test`
//
// *************************************

// -------------------------------------
//   Plugins
// -------------------------------------
//
// gulp              : The streaming build system
// gulp-autoprefixer : Prefix CSS
// gulp-concat       : Concatenate files
// gulp-csscss       : CSS redundancy analyzer
// gulp-load-plugins : Automatically load Gulp plugins
// gulp-minify-css   : Minify CSS
// gulp-parker       : Stylesheet analysis tool
// gulp-plumber      : Prevent pipe breaking from errors
// gulp-rename       : Rename files
// gulp-sass         : Compile Sass
// gulp-sass-lint    : Lint Sass
// gulp-util         : Utility functions
// gulp-watch        : Watch stream
// run-sequence      : Run a series of dependent Gulp tasks in order
//
// -------------------------------------

var gulp    = require( 'gulp' );
var run     = require( 'run-sequence' );
var plugins = require( 'gulp-load-plugins' )( {

  rename : {
    'gulp-minify-css' : 'cssmin'
  }

} );

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  // ----- Default ----- //

  default : {
    tasks : [ 'build', 'watch' ]
  },

  // ----- Build ----- //

  build : {
    tasks       : [ 'compile', 'minify' ],
    destination : 'build/css'
  },

  // ----- CSS ----- //

  css : {
    files       : 'build/css/*.css',
    file        : 'build/css/application.css',
    destination : 'build/css'
  },

  // ----- Sass ----- //

  sass : {
    files       : [ '*.sass', '**/*.sass' ],
    destination : 'build/css'
  },

  // ----- Watch ----- //

  watch : {
    files : function() {
      return [
        options.sass.files
      ]
    },
    run : function() {
      return [
        [ 'compile', 'minify' ]
      ]
    }
  }

};

// -------------------------------------
//   Task: Default
// -------------------------------------

gulp.task( 'default', options.default.tasks );

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task( 'build', function() {

  options.build.tasks.forEach( function( task ) {
    gulp.start( task );
  } );

});

// -------------------------------------
//   Task: Compile: Sass
// -------------------------------------

gulp.task( 'compile', function () {

  gulp.src( options.sass.files )
    .pipe( plugins.plumber() )
    .pipe( plugins.sass( { indentedSyntax: true } ) )
    .pipe( plugins.autoprefixer( {
            browsers : [ 'last 2 versions' ],
            cascade  : false
        } ) )
    .pipe( gulp.dest( options.sass.destination ) );

} );

// -------------------------------------
//   Task: Minify: CSS
// -------------------------------------

gulp.task( 'minify', function () {

  gulp.src( options.css.file )
    .pipe( plugins.plumber() )
    .pipe( plugins.cssmin( { advanced: false } ) )
    .pipe( plugins.rename( { suffix: '.min' } ) )
    .pipe( gulp.dest( options.build.destination ) )

} );

// -------------------------------------
//   Task: Test: CSS
// -------------------------------------

gulp.task( 'test', function() {

  gulp.src( options.css.file )
    .pipe( plugins.plumber() )
    .pipe( plugins.parker() )

  gulp.src( options.css.file )
    .pipe( plugins.plumber() )
    .pipe( plugins.csscss() )

});

// -------------------------------------
//   Task: Watch
// -------------------------------------

gulp.task( 'watch', function() {

  var watchFiles = options.watch.files();

  watchFiles.forEach( function( files, index ) {
    gulp.watch( files, options.watch.run()[ index ]  );
  } );

});
