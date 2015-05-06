'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean-primitive' );


// REVERSE //

/**
* FUNCTION: reverse( arr[, options] )
*	Reverses an `array`.
*
* @param {Array} arr - input array
* @param {Object} [options] - function options
* @param {Boolean} [options.copy=true] - boolean indicating whether to return a new array
* @returns {Array} reversed array
*/
function reverse( arr, opts ) {
	var copy,
		half,
		len,
		tmp,
		out,
		N,
		i, j;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'reverse()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'reverse()::invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'copy' ) ) {
			copy = opts.copy;
			if ( !isBoolean( copy ) ) {
				throw new TypeError( 'reverse()::invalid option. Copy option must be a boolean primitive. Option: `' + copy + '`.' );
			}
		}
	}
	len = arr.length;
	N = len - 1;
	if ( copy ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = arr[ N-i ];
		}
		return out;
	}
	half = Math.floor( len / 2 );
	for ( i = 0; i < half; i++ ) {
		tmp = arr[ i ];
		j = N - i;
		arr[ i ] = arr[ j ];
		arr[ j ] = tmp;
	}
	return arr;
} // end FUNCTION reverse()


// EXPORTS //

module.exports = reverse;
