class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((acc, curr) => acc + curr, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) {
            return false;
        }
        const [a, b, c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a);
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
    }

    get area() {
        if (!this.isValid) return null;
        const [a, , , b] = this.sides;
        return a * b;
    }
}

let polygon = new Polygon([5, 5, 5]);
let triangle = new Triangle([5, 5, 5]);
let triangle2 = new Triangle([15, 10, 1]);
let square = new Square([5, 5, 5, 5]);
let square2 = new Square([5, 4, 3, 2])

console.log(polygon.countSides);
console.log(polygon.perimeter);
console.log(triangle.countSides);
console.log(triangle.isValid);
console.log(triangle2.isValid);
console.log(triangle.perimeter);
console.log(triangle.perimeter);
console.log(square.perimeter);
console.log(square.area);
console.log(square.countSides);
console.log(square.isValid);
console.log(square2.isValid);