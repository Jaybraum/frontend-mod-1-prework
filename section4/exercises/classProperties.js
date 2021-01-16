/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog1 {
}
var husky = new Dog1();
var malamute = new Dog1();
console.log(husky);
console.log(malamute);
// Prompt 2: Snack
class Snack1 {
}
var snicker = new Snack1();
var reeses = new Snack1();
console.log(snicker);
console.log(reeses);
// Prompt 3: Shirt
class Shirt1 {
}
var buttonDown = new Shirt1();
var shortSleeve = new Shirt1();
console.log(buttonDown);
console.log(shortSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  constructor() {
    this.color = "white";
    this.height = "2ft";
    this.eyeColor = "blue";
  }
}
var husky = new Dog2();
console.log(husky);
// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.isSweet = true;
    this.wrapperColor = "brown";
    this.hasNuts = true;
  }
}
var snicker = new Snack2();
console.log(snicker);
// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.color = "black";
    this.size = "XXL";
    this.hasButton = true;
  }
}
var buttonDown = new Shirt2();
console.log(buttonDown);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(clr, height, eyeColor) {
    this.color = clr;
    this.height = height;
    this.eyeColor = eyeColor;
  }
}
var husky = new Dog3("white", "2ft", "blue");
var malamute = new Dog3("black", "3.5ft", "white")
console.log(husky);
console.log(malamute);
// Prompt 2: Snack
class Snack3 {
  constructor(sweet, wrapperColor, hasNuts) {
    this.isSweet = sweet;
    this.wrapperColor = wrapperColor;
    this.hasNuts = hasNuts;
  }
}
var snicker = new Snack3(true, "brown", true);
var reeses = new Snack3(true, "orange", false);
console.log(snicker);
console.log(reeses);
// Prompt 3: Shirt
class Shirt3 {
  constructor(clr, size, hasButton) {
    this.color = clr;
    this.size = size;
    this.hasButton = hasButton;
  }
}
var buttonDown = new Shirt3("black", "XXL", true);
var shortsleeve = new Shirt3("white", "M", false);
console.log(buttonDown);
console.log(shortSleeve);
