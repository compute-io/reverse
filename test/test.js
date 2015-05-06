/* global require, describe, it */
'use strict';

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

	it( 'should export a function', function test() {
		expect( reverse ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			5,
			'5',
			true,
			NaN,
			undefined,
			null,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				reverse( value );
			};
		}
	});

	it( 'should throw an error if provided an options argument which is not an object', function test() {
		var values = [
			5,
			'5',
			true,
			NaN,
			undefined,
			null,
			function(){},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				reverse( [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if provided a copy option which is not a boolean primitive', function test() {
		var values = [
			5,
			'5',
			new Boolean( true ),
			NaN,
			undefined,
			null,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				reverse( [1,2,3], {
					'copy': value
				});
			};
		}
	});

	it( 'should reverse an array', function test() {
		var arr, expected, actual;

		arr = [1,2,3,4];
		expected = [4,3,2,1];

		actual = reverse( arr );

		assert.deepEqual( actual, expected );
	});

	it( 'should mutate an array by default', function test() {
		var arr, out;

		arr = [1,2,3,4];
		out = reverse( arr );

		assert.strictEqual( arr, out );
	});

	it( 'should reverse an array of arbitrary element types', function test() {
		var arr, expected, actual;

		arr = [
			undefined,
			null,
			false,
			undefined,
			foo,
			NaN
		];
		expected = [
			NaN,
			foo,
			undefined,
			false,
			null,
			undefined
		];

		actual = reverse( arr, {} );

		assert.deepEqual( actual, expected );
		assert.strictEqual( arr, actual );

		function foo(){}
	});

	it( 'should reverse an array and return a copy', function test() {
		var arr, expected, actual;

		arr = [1,2,3,4];
		expected = [4,3,2,1];

		actual = reverse( arr, {
			'copy': true
		});

		assert.deepEqual( actual, expected );
		assert.ok( arr !== actual );
	});

});
