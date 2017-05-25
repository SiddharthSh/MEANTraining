require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello('Sid');

var answer = question.ask("What is the meaning of Node?");
console.log(answer);

goodbye();