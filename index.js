const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
//Imports
const { Triangle, Circle, Square, AllShapes } = require('./lib/shapes.js');
const fs = require('fs');

// Function for selecting the shape of the SVG
function shapeSelection() {
    //Global const for svg paths used for checking if they exist
    const circlePath = 'circle.svg';
    const trianglePath = 'triangle.svg';
    const squarePath = 'square.svg';

    //Initial prompts for the user
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
            //Getting all data from the promise and saving them to a const to use
            const svgShape = shape.svgShapes;
            const color = shape.shapeColor.toLowerCase();
            const text = shape.svgChars;
            const txtCol = shape.txtColor.toLowerCase();

            //Checking if user tried to use more than 3 characters in their SVG if so exit execution
            if (shape.svgChars.length > 3) {
                console.log('You cannot use more than 3 Characters');
                process.exit();
            }

            //If the shape selected was a Square
            if (svgShape === 'Square') {
                prompt([
                    {
                        type: 'input',
                        message: 'Enter one side size of the square between 50 and 200',
                        name: 'squareSide'
                    }
                ])
                .then((s) => {
                    const sideSize = s.squareSide;
                    // Checking if user made square too big or too small
                    if (sideSize > 200 || sideSize < 50) {
                        console.log('Size must be between 50 - 200');
                        process.exit();
                    } else { // If shape size are fine, create the square
                        const squ = new Square(sideSize, color, text, txtCol);
                        // console.log(squ.render());
                        const svgString = squ.render();
                        if (fs.existsSync(squarePath)) { // if the square already exists, make sure user wants to overwrite
                            prompt([
                                {
                                    type: 'confirm',
                                    message: 'square.svg already exists, would you like to overwrite?',
                                    name: 'replaceConfirm'
                                }
                            ])
                            .then((r) => {
                                if (r.replaceConfirm === true) { // executed if user wants to overwrite else exit application
                                    saveSvgFile(svgString, 'square');
                                } else {
                                    process.exit();
                                }
                            });
                        } else {
                            saveSvgFile(svgString, 'square'); // if there is no file that already exists we can just save it
                        }
                        
                    }
                });
            } else if (svgShape === 'Triangle') { // Same logic for Triangle as there was for square, just different user inputs
                prompt([
                    {
                        type: 'input',
                        message: 'Enter the size of the triangle between 125 - 225',
                        name: 'triSide'
                    }
                ])
                .then((tSize) => {
                    if (tSize.triSide < 125 || tSize.triSide > 225) {
                        console.log('Triangle size must be between 125 - 225');
                        process.exit();
                    } else {
                        const triSize = tSize.triSide;
                        const tri = new Triangle(triSize, color, text, txtCol);
                        // console.log(tri.render());
                        const svgString = tri.render();
                        if (fs.existsSync(trianglePath)) {
                            prompt([
                                {
                                    type: 'confirm',
                                    message: 'triangle.svg already exists, would you like to overwrite?',
                                    name: 'replaceConfirm'
                                }
                            ])
                            .then((r) => {
                                if (r.replaceConfirm === true) {
                                    saveSvgFile(svgString, 'triangle');
                                } else {
                                    process.exit();
                                }
                            });
                        } else {
                            saveSvgFile(svgString, 'triangle');
                        }
                    }
                });
            } else if (svgShape === 'Circle') { // Same logic for Circle as there was for square, just different user inputs
                prompt([
                    {
                        type: 'input',
                        message: 'Enter a Radius between 20 - 50',
                        name: 'circleRadius'
                    }
                ])
                .then((r) => {
                    if (r.circleRadius > 50 || r.circleRadius < 20) { 
                            console.log('Circle radius must be between 20 - 50');
                            process.exit();
                    } else {
                            const radius = r.circleRadius;
                            const circ = new Circle(radius, color, text, txtCol);
                            // console.log(circ.render());
                            const svgString = circ.render();
                            if (fs.existsSync(circlePath)) {
                                prompt([
                                    {
                                        type: 'confirm',
                                        message: 'circle.svg already exists, would you like to overwrite?',
                                        name: 'replaceConfirm'
                                    }
                                ])
                                .then((r) => {
                                    if (r.replaceConfirm === true) {
                                        saveSvgFile(svgString, 'circle');
                                    } else {
                                        process.exit();
                                    }
                                });
                            } else {
                                saveSvgFile(svgString, 'circle');
                            }
                    }
                });
            }
        });
}

// Function to save the svg file to the directory with specified shape name
function saveSvgFile(svgString, fileName) {
    fs.writeFile(`${fileName}.svg`, svgString, (err) => {
        if (err) throw err;
        console.log(`${fileName}.svg has been saved.`);
    });
}

shapeSelection();
