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
});

//cps function rewrites 3

function greeting(person, callback){
  return('hello ' + person + '!')
}

// cps rewrites 4

function hello(callback){
  console.log('Hello, world!');
  callback();
});

//cps rewrites 5

function sum(numbers, callback){
  var result = numbers.reduce(function(a, b){
    return a + b;
  }, 1);
  callback(result);
}

// nested callbacks 1

var squared = square(5);

function square(num, callbacks){
  callbacks(num*num);
}
square(5, function(squared){
  console.log(squared);

});

// nested callbacks 2
var x = 4;
var y = 3;
var x2 = square(x);
var y2 = square(y);
var sum = x2 + y2;

square(x, function(x2){
  console.log(square);
});

square(y, function(y2){
  console.log(square);
});
