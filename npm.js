var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});
function do_stuff (){
  rl.question('reverse what file?', function (filename))
  fs.readFile('test.py', function (error, buffer){
    if (error){
      callback(error, null);
      return;
    }
    var content = buffer.toString();
    content =content.split('');
    content = content.reverse();
    content = content.join('');
    fs.writeFile('reverse.txt', content, function(error){
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, 'file saved!');
    })
  })
}
// pauls version

var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function do_stuff (callback) {
  rl.question("Reverse what file?", function (filename) {
    fs.readFile(filename, function (error, buffer) {
      if (error) {
        callback(error, null);
        return;
      }

      var content = buffer.toString();
      content = content.split('');
      content = content.reverse();
      content = content.join('');
      fs.writeFile('reverse.txt', content, function (error) {
        if (error) {
          callback(error, null);
          return;
        }

        callback(null, 'File Saved!');
      });
    });
  });
}

do_stuff(function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }

  rl.close();
});

console.log('END OF FILE');


//module


var readline = require('./fileread');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function do_stuff (callback) {
  rl.question("Reverse what file?", function (filename) {
    fs.readFile(filename, function (error, buffer) {
      if (error) {
        callback(error, null);
        return;
      }

      var content = buffer.toString();
      content = content.split('');
      content = content.reverse();
      content = content.join('');
      fs.writeFile('reverse.txt', content, function (error) {
        if (error) {
          callback(error, null);
          return;
        }

        callback(null, 'File Saved!');
      });
    });
  });
}
exports.do_stuff = do_stuff;
