const { AllShapes, Triangle, Square, Circle } = require('../lib/shapes.js');

// AllShapes test class
describe('AllShapes class', () => {
  it('renders an SVG with the correct color, text, and text color', () => {
    const shape = new AllShapes('#ff0000', 'wah', '#000000');
    expect(shape.render()).toContain('#ff0000');
    expect(shape.render()).toContain('wah');
    expect(shape.render()).toContain('#000000');
  });
});

// Triangle test class
describe('Triangle class', () => {
    it('renders a triangle with the correct size, color, text, and text color', () => {
    const shape = new Triangle(50, 'blue', 'weh', '#000000');
    expect(shape.render()).toContain('blue');
    expect(shape.render()).toContain('weh');
    expect(shape.render()).toContain('#000000');
  });
});

// Square test class
describe('Square class', () => {
    it('renders a square with the correct side length, color, text, and text color', () => {
    const shape = new Square(100, '#ff0000', 'wat', '#000000');
    expect(shape.render()).toContain('width="100" height="100"');
    expect(shape.render()).toContain('#ff0000');
    expect(shape.render()).toContain('wat');
    expect(shape.render()).toContain('#000000');
  });
});

// Circle test class
describe('Circle class', () => {
    it('renders a circle with the correct radius, color, text, and text color', () => {
    const shape = new Circle(25, '#ff0000', 'wet', '#000000');
    expect(shape.render()).toContain('cx="50" cy="50" r="25"');
    expect(shape.render()).toContain('#ff0000');
    expect(shape.render()).toContain('wet');
    expect(shape.render()).toContain('#000000');
  });
});
