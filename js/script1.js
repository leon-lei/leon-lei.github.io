var name = "Leon";
function sayHello () {
    console.log("Hello " + name);
}

// Fake namespace
var leonGreeter = {};
leonGreeter.name = "Leon";
leonGreeter.sayHello = function () {
    console.log("Hello " + leonGreeter.name)
}