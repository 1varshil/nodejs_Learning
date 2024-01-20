// var data = require("./script2");
// console.log(data);

// var data = require('one-liner-joke');
// console.log(data.getRandomJoke());


var figlet = require('figlet');
figlet(123, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });