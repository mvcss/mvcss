MVCSS
=====

Contributing
------------

We use [Semantic Versioning](http://semver.org) for all versioning. When you make a **Major**, **Minor**, or **Patch** update, you'll need to the do the following:

- Run the build to update the build files (`grunt build`) and verify nothing breaks
- Update the `CHANGELOG.md` file
- Update the version number in `application.sass`
- Add the new tag locally
- Push the tag (along with your commit(s))
- Update the version number in the [documentation](https://github.com/mvcss/mvcss.github.com)

Compiling
---------

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

You should now have a `css` directory in `_build/` with the compiled CSS files.

License
-------

MVCSS is licensed under the MIT License.

