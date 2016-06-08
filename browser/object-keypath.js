(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Lookout = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var isObj = require('isobject');

module.exports = function (root, key, value) {
  var PATH;

  /**
   * @param {string} base Keypath so far
   * @param {string} str Key to add to path
   */
  function join(base, str) {
    return base.match(/./) ? base + '.' + str : str;
  }

  /**
   * @param {string} path Keypath so far, passed recursively
   * @param {object} obj Context we loop over
   */
  function traverseDeep(path, obj) {
    // meta, meta{}
    Object.keys(obj).forEach(function (k) {
      if (isObj(obj[k])) {
        traverseDeep(join(path, k), obj[k]);
      } else if (k === key && obj[k] === value) {
        PATH = join(path, k);
      }
    });
  }

  /**
   * @param {object} obj Root object to start traversal
   */
  function traverse(obj) {
    var path = '';

    Object.keys(obj).forEach(function (k) {
      if (isObj(obj[k])) {
        traverseDeep(k, obj[k]);
      } else if (k === key && obj[k] === value) {
        PATH = join(path, k);
      }
    });
  };

  traverse(root);

  return PATH;
};

},{"isobject":3}],2:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],3:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isArray = require('isarray');

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};

},{"isarray":2}]},{},[1])(1)
});