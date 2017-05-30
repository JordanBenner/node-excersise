//problem 1
f(x, y function(z)){
  console.log(z);
});

//problem 2
g(a, b, c function(y)){
  console.log(y);
});

//problem 3
y = g(4.5, 0.2, true);
g(4.5, 0.2, true, function ());
result = convert([1, 8, 2, 4, 4]);

});

// problem 4

kick(can, function() {})
});
// cps rewrites 1

function add(x, y, callback){
  var result = x + y;
  callback(result);
}
add(2,3, function(result){
  console.log(result);
});

//cps rewrites 2

function subtract(x, y, callback){
  var result = x - y;
  callback(result);
}
subtract(2, 3, function(result){
  console.log(result);
})

//cps function rewrites 3

function greeting(person, callback){
  return('hello ' + person + '!')
}

// problem 6
