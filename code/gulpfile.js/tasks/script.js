const {src, dest} = require('gulp');

//add config
const path = require('./../config/path.js');
const app = require('./../config/app.js');

//Plugins
const plumber = require('gulp-plumber'); //compilation errors plugin
const notify = require('gulp-notify'); //generates pop-up messages

const gulpif = require('gulp-if'); //conditionally control the flow of objects

const babel = require('gulp-babel'); //javascript handling
const rigger = require('gulp-rigger');
const rename = require('gulp-rename'); //rename files




//task
const script = () => {
    return src(path.script.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        }))
        .pipe(rigger())
        .pipe(babel(app.babel))
        // .pipe(webpack(app.webpack))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.script.dest))

        .pipe(gulpif(app.isProd, src(path.publicGit.copyJs)))
        .pipe(gulpif(app.isProd, dest(path.publicGit.pathPublic + '/js')))
}


module.exports = script;