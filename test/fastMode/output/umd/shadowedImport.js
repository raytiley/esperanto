(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('foo')) :
	typeof define === 'function' && define.amd ? define(['foo'], factory) :
	factory()
}(this, function () { 'use strict';

	a();
	(function () {
		var foo = 'bar';
		a();
	}())

}));