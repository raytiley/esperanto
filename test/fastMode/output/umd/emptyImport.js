(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('foo'), require('polyfills')) :
	typeof define === 'function' && define.amd ? define(['foo', 'polyfills'], factory) :
	factory(global.bar)
}(this, function (bar) { 'use strict';

}));