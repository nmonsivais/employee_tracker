console.log("Batman Begins");

process.on("exit", function (code) {
    return console.log(`About to exit with ${code}`);
});

setInterval((function () {
    return console.log("I am Batman!");
}), 1000);

setTimeout((function () {
    return process.kill(process.pid);
}), 5000);