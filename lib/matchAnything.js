(function() {
  'use strick'

  function match(array, str) {
    return array.map(function(e) {
      return (e + '').match(str) ? e : null;
    }).filter(function(n) {
      return n !== null;
    });
  }

  function wrap(fun) {
    return function(str) {
      return function(array) {
        return fun(array, str);
      };
    };
  }

  module.exports = wrap(match);

}());
