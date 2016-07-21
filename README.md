# Gulp WebPack Example

A simple gulp and webpack example

For the purposes of this example I am keeping the sass files separate from the javascript modules.  This build will result in a single Javascript file and a single css file to be included in the build.
HTML files are kept separate.

## References

There are some amazing resources that are just a quick search away.  Here are some of the things
I looked at while working on this.

* [Gulp](http://gulpjs.com/)
* [Webpack](https://github.com/petehunt/webpack-howto)
* [gulp-sass](https://github.com/dlmanning/gulp-sass)
* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
* [gulp-webpack](https://github.com/shama/webpack-stream)

## Install

* clone the repo locally `git clone https://github.com/dforth/gulp-webpack-example.git`
* make sure you have gulp installed `sudo npm install gulp-cli -g`
* install dependencies `npm install`
* build the example `gulp` or `gulp build`
* build the example and watch source for changes with auto deploy to the build dir `gulp build watch`
* view the example: open `./build/index.html`


## License

Gulp WebPack Example is released under the [MIT License](./LICENSE.txt).
