"use strict";

window.onload = function(){

  var o = {x:1};

  //Make "x" non-configurable
  Object.defineProperty(o, "x", {configurable: false});
  //freeze "o";
  Object.freeze(o);

  console.log(Object.getOwnPropertyDescriptor(o, "x"));
  //outputs => Object { value: 1, writable: true, enumerable: true, configurable: false }
  console.log(Object.isSealed(o));
  //outputs => true

  Object.defineProperty(o, "x", {writable: true}); //Now this doesn't cause.
  console.log(Object.getOwnPropertyDescriptor(o, "x"));
  //outputs => Object { value: 1, writable: false, enumerable: true, configurable: false }
}
