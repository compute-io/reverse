/**
*
*	COMPUTE: reverse
*
*
*	DESCRIPTION:
*		- Reverse an array in place.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: reverse( arr )
	*	Reverses an `array` in place. Note that the input `array` is mutated.
	*
	* @param {Array} arr - `array` to reverse
	*/
	function reverse( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'reverse()::invalid input argument. Argument must be an array.' );
		}
		var len = arr.length,
			half = Math.floor( len / 2 ),
			N = len - 1,
			tmp,
			j;
		for ( var i = 0; i < half; i++ ) {
			tmp = arr[ i ];
			j = N - i;
			arr[ i ] = arr[ j ];
			arr[ j ] = tmp;
		}
	} // end FUNCTION reverse()


	// EXPORTS //

	module.exports = reverse;

})();