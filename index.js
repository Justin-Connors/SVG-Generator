const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
//Imports
const { Rectangle, Circle, Square } = require('./lib/shapes.js');

// Function for selecting the shape of the SVG
function shapeSelection() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What shape would you like your SVG to be',
                choices: ['Circle', 'Square', 'Rectangle'],
                name: 'svgShapes'
            },
            {
                type: 'input',
                message: 'Enter shape color (keyword or hexadecimal):',
                name: 'shapeColor'
            },
            {
                type: 'input',
                message: 'Enter Up to 3 characters',
                name: 'svgChars'
            }
        ])
        .then((shape) => {
            const svgShape = shape.svgShapes;

            if (shape.svgChars.length > 3) {
                console.log('You cannot use more than 3 Characters');
                process.exit();
            }

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