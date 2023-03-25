// Rectangle class takes in width and a height
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    svg = () => { return `<rect x="0" y="0" width="${this.width}" height="${this.height}" />` }

}

const rect = new Rectangle(100, 50);
const rectangleSvg = rect.svg();
console.log(rectangleSvg);

// Square class takes in a side and applies all around using width and height from Rectangle and setting it to side
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const squ = new Square(50);
const squSvg = squ.svg();
console.log(squSvg);

// Circle class takes in a radius
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    svg = () => { return `<circle cx="0" cy="0" r="${this.radius}" />`}

}

const circ = new Circle(50);
const circSvg = circ.svg();
console.log(circSvg);