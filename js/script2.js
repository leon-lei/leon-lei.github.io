// var name = "Lei";
// function sayHi () {
//     console.log("Hi " + name);
// }

// // Fake namespace
// var leiGreeter = {};
// leiGreeter.name = "Lei";
// leiGreeter.sayHi = function () {
//     console.log("Hi " + leiGreeter.name);
// }

// IIFE version with var greeting declared
// Passing window obj to expose leiGreeter obj
// No collison with var greeting which is repeated in both script1 and script2
(function (window) {
    var leiGreeter = {};
    leiGreeter.name = "Lei";
    var greeting = "Hi ";
    leiGreeter.sayHi = function () {
        console.log(greeting + leiGreeter.name);
    }

    window.leiGreeter = leiGreeter;

})(window);