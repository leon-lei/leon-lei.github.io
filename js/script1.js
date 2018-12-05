// var name = "Leon";
// function sayHello () {
//     console.log("Hello " + name);
// }

// // Fake namespace
// var leonGreeter = {};
// leonGreeter.name = "Leon";
// leonGreeter.sayHello = function () {
//     console.log("Hello " + leonGreeter.name)
// }

// IIFE version with var greeting declared
// Passing window obj to expose leonGreeter obj
(function (window) {
    var leonGreeter = {};
    leonGreeter.name = "Leon";
    var greeting = "Hello ";
    leonGreeter.sayHello = function () {
        console.log(greeting + leonGreeter.name)
    }

    window.leonGreeter = leonGreeter;

})(window);