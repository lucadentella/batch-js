if(process.env.EXITCODE == undefined) process.exitCode = 2;
else process.exitCode = process.env.EXITCODE;

if(process.env.DURATION == undefined) duration = 10;
else duration = process.env.DURATION;

var i = 0;

console.log('Running batch for ' + duration + ' seconds, with exit code ' + process.exitCode); 

var myfunc = setInterval(function() {

    i = i + 1;
    console.log('Hello World at '+ 2*i + ' seconds'); 

    if(i == duration / 2) {
        clearInterval(myfunc);
    }
}, 2000);
