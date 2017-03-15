const curry = require('curry');

function isFunction(value) {
  return typeof value === 'function';
}

function when(predicate, transform, value) {
  const isTrue = (isFunction(predicate) && predicate(value)) || Boolean(predicate);
  return isTrue ? transform(value) : value;
}

module.exports = curry(when);
