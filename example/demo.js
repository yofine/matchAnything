var matchAnything = require('../index');

var matchA = matchAnything('a');

console.log(matchA(['abc', 'bc', 'ac']));
