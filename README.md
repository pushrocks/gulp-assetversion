# gulp-assetversion
makes it easy to manage versions and updates of assets between and inside pipelines

# Usage

There are three main functions:

```javascript
var gulp = require("gulp");
var gulp-assetversion = require("assetversion");

// #1 set a value
gulp.task("myTask1",function() {
    var stream;
    stream = gulp.src(docit.path.sitebase + "**/*.ts")
        .pipe(myGulpFunction())
        .pipe(gulpAssetVersion.set({
            assetName:"ts",
            assetVersion:"1",
            assetVersionBump: false
        }))
        .pipe(gulp.dest("somefolder"));
    return stream;
});

// #2 get a value
gulp.task("myTask2",function() {
    var stream;
    stream = gulp.src(docit.path.sitebase + "**/*.jade")
        .pipe(myGulpFunction2())
        .pipe(plugins.get({
            assetName:"ts",
            appendTo:"versions"
        }))
        .pipe(gulp.dest("somefolder"));
    return stream;
});
```