const curry = require('curry');

const isFunction = value => typeof value === 'function';

const when = (predicate, transform, value) =>
  (isFunction(predicate) && predicate(value)) || predicate
    ? transform(value)
    : value

module.exports = curry(when);
