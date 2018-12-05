var name = "Lei";
function sayHi () {
    console.log("Hi " + name);
}

// Fake namespace
var leiGreeter = {};
leiGreeter.name = "Lei";
leiGreeter.sayHi = function () {
    console.log("Hi " + leiGreeter.name);
}