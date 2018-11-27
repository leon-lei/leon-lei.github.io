function test() {
    console.log(this);
    this.myName = 'Leon'
}

test();
console.log(window.myName);

// Function Constructor
function Circle (radius) {
    this.radius = radius;

}

Circle.prototype.getArea = 
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };


var myCircle = new Circle(10);
console.log(myCircle.getArea());
console.log(myCircle);

// Object literals and 'this'

var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());