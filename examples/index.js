'use strict';

var reverse = require( './../lib' );

var arr = new Array( 100 );
for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = i;
}
reverse( arr );

console.log( JSON.stringify( arr ) );
