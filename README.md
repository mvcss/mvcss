# [MVCSS v3.0.2](http://mvcss.github.com)

## Compiling

If you want to compile MVCSS into an `application.css` (and `application.min.css`)
file, you'll need to first install [Grunt.js](http://gruntjs.com):

```shell
npm install -g grunt-cli
```

Next, jump into the `_build` directory and install dependencies:

```shell
cd _build
npm install
```

And then run:

```shell
grunt build
```

You should now have a `css` directory at the root with the compiled CSS files.

## Testing

Once you have compiled into `application.css`, you can run `grunt test` to run
`csslint` and `csscss` on the file.

## License
MVCSS is licensed under the MIT License.

