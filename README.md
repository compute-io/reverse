Reverse
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Reverse an array.


## Installation

``` bash
$ npm install compute-reverse
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var reverse = require( 'compute-reverse' );
```

#### reverse( arr[, options] )

Reverses an `array`.

``` javascript
var arr = [ 1, 2, 3, 4 ];

var out = reverse( arr );
// returns [ 4, 3, 2, 1 ]
```

By default, the input `array` is __mutated__. To return a new `array`, set the `copy` option to `true`.

``` javascript
var arr = [ 1, 2, 3, 4 ];

var out = reverse( arr, {
	'copy': true
});
// returns [ 4, 3, 2, 1 ];

console.log( arr === out );
// returns false
```



## Examples

``` javascript
var reverse = require( 'compute-reverse' );

var arr = new Array( 100 );
for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = i;
}
reverse( arr );

console.log( JSON.stringify( arr ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

According to [ECMA specification 262](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8), when implementing the native `array.reverse()` method, one must check whether `array` elements are defined before determining how to swap elements. If one element is a `hole`, only the non-hole value is assigned to a temporary value before being assigned to a new position in the `array`. The element's original position is then deleted. See the V8 (Node.js) [implementation](https://github.com/joyent/node/blob/master/deps/v8/src/array.js) for an example.

If we eliminate the `hole` checks and additional temporary variables, we can streamline the algorithm for performance gains. See [jsPerf](http://jsperf.com/array-reverse-native-vs-loop/3) for benchmarks.


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-reverse.svg
[npm-url]: https://npmjs.org/package/compute-reverse

[travis-image]: http://img.shields.io/travis/compute-io/reverse/master.svg
[travis-url]: https://travis-ci.org/compute-io/reverse

[coveralls-image]: https://img.shields.io/coveralls/compute-io/reverse/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/reverse?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/reverse.svg
[dependencies-url]: https://david-dm.org/compute-io/reverse

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/reverse.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/reverse

[github-issues-image]: http://img.shields.io/github/issues/compute-io/reverse.svg
[github-issues-url]: https://github.com/compute-io/reverse/issues
