const inquirer = require('inquirer');

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
        .then((res) => {
            const svgShape = res.svgShapes;
            console.log(svgShape);
        })
}

shapeSelection();