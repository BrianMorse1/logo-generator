//this defines a class named Circle
class Circle {
    //This sets the shapeColor parameter to the shapeColor that is defined when the object is called. This will be determined through CLI
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  //This method retrieves the shapeColor and applies it to the SVG circle's fill property
    getSVGContent() {
      return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
    }
  }
  //The triangle class functions the same as the triangle class. 
  class Triangle {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    getSVGContent() {
      return `<polygon points="150,25 75,175 225,175" fill="${this.shapeColor}" />`;
    }
  }
  //The square class functions the same as the triangle class. 
  class Square {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    getSVGContent() {
      return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }
  
  //this exports the shape classes for use in the index.js
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  