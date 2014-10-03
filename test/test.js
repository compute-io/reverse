
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	reverse = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-reverse', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( reverse ).to.be.a( 'function' );
	});

	it( 'should reverse an array', function test() {
		var arr = [1,2,3,4],
			expected = [4,3,2,1];

		reverse( arr );

		assert.deepEqual( arr, expected );
	});

	it( 'should reverse an array of arbitrary element types', function test() {
		var foo = function() {},
			arr = [
				undefined,
				null,
				false,
				undefined,
				foo,
				NaN
			],
			expected = [
				NaN,
				foo,
				undefined,
				false,
				null,
				undefined
			];

		reverse( arr );

		assert.deepEqual( arr, expected );
	});

});