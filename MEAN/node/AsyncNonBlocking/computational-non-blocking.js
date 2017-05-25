// when its working Async so that resource are blocked : Spawn

var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['./_fibonacci.js'], {
	stdio : 'inherit' // stdio is inherit so that same output frame is used as parent
					  // since we are spawning the child process.
});

console.log(2);