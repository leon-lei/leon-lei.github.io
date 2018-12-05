// traditional function declaration and invoking
function a() {
    console.log("Traditional Function");
}
a();

// Immediately Invoked Function Expression
// IIFE
(function () {
    console.log("IIFE");
    console.log("Immediately Invoked Function Expression");
})();

// Passing arg into IIFE
(function (name) {
    console.log("Hello " + name);
})("Leon");