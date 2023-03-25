const inquirer = require('inquirer');

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
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'Enter one side size of the square',
                            name: 'squareSide'
                        }
                    ])
                    .then((size) => {
                        const sideSize = size.squareSide;
                        console.log(new Square(sideSize));
                    })

            } else if (svgShape === 'Rectangle') {
                inquirer
                    .prompt([
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
                        console.log(svgShape);
                        const recWidth = recSize.rectangleWidth;
                        const recHeight = recSize.rectangleHeight;
                        console.log(new Rectangle(recWidth, recHeight));
                    })
            }
        })
}

shapeSelection();

// const container = document.getElementById('#svg');
// container.innerHTML = rectangleSvg + squareSvg + circleSvg;