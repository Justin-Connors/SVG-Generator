const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const Rectangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');

// let rectangle = new Rectangle();
// let circle = new Circle();
// let square = new Square();

// Function for selecting the shape of the SVG
function shapeSelection() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What shape would you like your SVG to be',
                choices: ['Circle', 'Square', 'Rectangle'],
                name: 'svgShapes'
            }
        ])
        .then((shape) => {
            const svgShape = shape.svgShapes;
            if (svgShape === 'Square') {
                prompt([
                        {
                            type: 'input',
                            message: 'Enter one side size of the square',
                            name: 'squareSide'
                        }
                    ])
                    .then((size) => {
                        const sideSize = size.squareSide;
                        const squ = new Square(sideSize);
                        console.log(squ);
                    })

            } else if (svgShape === 'Rectangle') {
                prompt([
                        {
                            type: 'input',
                            message: 'Enter a Width',
                            name: 'rectangleWidth'
                        },
                        {
                            type: 'input',
                            message: 'Enter a Height',
                            name: 'rectangleHeight'
                        }
                    ])
                    .then((recSize) => {
                        const recWidth = recSize.rectangleWidth;
                        const recHeight = recSize.rectangleHeight;
                        const rec = new Rectangle(recWidth, recHeight);
                        console.log(rec);
                    })

            } else if (svgShape === 'Circle') {
                prompt([
                        {
                            type: 'input',
                            message: 'Enter a Radius',
                            name: 'circleRadius'
                        }
                    ])
                    .then((r) => {
                        const radius = r.circleRadius;
                        const circ = new Circle(radius);
                        console.log(circ);
                    })
            }
        })
}

shapeSelection();

// const container = document.getElementById('#svg');
// container.innerHTML = rectangleSvg + squareSvg + circleSvg;