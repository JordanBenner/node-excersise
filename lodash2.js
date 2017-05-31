//sum function
var sum = require('lodash/sum');
console.log(sum([1, 3, 9]));

//max function
var max = require('lodash/max');
console.log(max([4, 2, 5, 8]));
//mean function
var mean = require('lodash/mean');
console.log(mean([10, 2, 5, 8, 6, 4, 3]));

//forEach function
var forEach = require('lodash/foreach');
.forEach([1, 2], function(value) {
  console.log(value);
});
