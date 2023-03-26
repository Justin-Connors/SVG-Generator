const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
//Imports
const { Triangle, Circle, Square, AllShapes } = require('./lib/shapes.js');

// Function for selecting the shape of the SVG
function shapeSelection() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What shape would you like your SVG to be',
                choices: ['Circle', 'Square', 'Triangle'],
                name: 'svgShapes'
            },
            {
                type: 'input',
                message: 'Enter shape color',
                name: 'shapeColor'
            },
            {
                type: 'input',
                message: 'Enter Up to 3 characters',
                name: 'svgChars'
            },
            {
                type: 'input',
                message: 'Enter text color',
                name: 'txtColor'
            }
        ])
        .then((shape) => {
            const svgShape = shape.svgShapes;
            const color = shape.shapeColor.toLowerCase();
            const text = shape.svgChars;
            const txtCol = shape.txtColor.toLowerCase();

            if (shape.svgChars.length > 3) {
                console.log('You cannot use more than 3 Characters');
                process.exit();
            }

            if (svgShape === 'Square') {
                prompt([
                        {
                            type: 'input',
                            message: 'Enter one side size of the square between 50 and 200',
                            name: 'squareSide'
                        }
                    ])
                    .then((size) => {
                        if(size.squareSide > 200 || size.squareSide < 50) {
                            console.log('Size must be between 50 - 200');
                            process.exit();
                        } else {
                            const sideSize = size.squareSide;
                            const squ = new Square(sideSize, color, text, txtCol);
                            console.log(squ.render());
                        }
                    })

            } else if (svgShape === 'Triangle') {
               
                const tri = new Triangle(color, text, txtCol);
                console.log(tri.render());

            } else if (svgShape === 'Circle') {
                prompt([
                        {
                            type: 'input',
                            message: 'Enter a Radius not greater than 50',
                            name: 'circleRadius'
                        }
                    ])
                    .then((r) => {
                        if(r.circleRadius > 50) { 
                            console.log('Circle radius cannot be greater than 50');
                            process.exit();
                        } else {
                            const radius = r.circleRadius;
                            const circ = new Circle(radius, color, text, txtCol);
                            console.log(circ.render());
                        }
                    })
            }
        })
}

shapeSelection();