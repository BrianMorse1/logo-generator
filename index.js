//These are required imports for the file system, the CLI, and the shape classes
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes'); // Import the shape constructors from shapes.js

// This is the function that is called to execute the code
const generateSVG = (text, textColor, shape, shapeColor) => {
    //sets an empty variable to store user input from the CLI combined with the defined class objects.
  let shapeContent = '';

  //conditional statement that selects which class object to use based on user input
  if (shape === 'circle') {
    const circle = new Circle(shapeColor);
    shapeContent = circle.getSVGContent();
  } else if (shape === 'triangle') {
    const triangle = new Triangle(shapeColor); 
    shapeContent = triangle.getSVGContent(); 
  } else if (shape === 'square') {
    const square = new Square(shapeColor); 
    shapeContent = square.getSVGContent(); 
  }

  //this constant sets an <svg> element and tells it to use http://www.w3.org/2000/svg as the XML namespace, which allows the code to understand that it is receiving instructions for generating a shape. The text element is set to fit within the generated shape and is anchored to the center. The text and text color is obtained through user input. 
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeContent}
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" dominant-baseline="middle" font-family="Arial" font-size="48">${text}</text>
  </svg>`;

  //this saves the generated file to the root directory of the app with the name 'logo.svg' and the content contained in the svgContent variable.
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

//this function prompts the user for input and then calls the generateLogo function to generate the logo.svg file. It names each question to be referred to in other parts of the code.
inquirer
  .prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  //runs the generateSVG function using user provided answers
  .then((answers) => {
    generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  })
  .catch((error) => {
    console.log(error);
  });
