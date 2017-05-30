//problem 1
f(x, y function(z)){
  console.log(z);
});

//problem 2
g(a, b, c function(y)){
  console.log(y);
});

//problem 3

function z(numbers, callback){
  var result = numbers.convert(function(a, b, c, d, e){
    return a + b + c + d + e;
  }, 0);
  callback(result);
}
