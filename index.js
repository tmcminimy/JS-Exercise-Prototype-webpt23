/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }
}
  /* Make the person poop */
  Person.prototype.poop = function(){
    this.stomach = [];
  }
  /* to string */
  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const personOne = new Person('Travis', 33);
  const personTwo = new Person('Lara', 26);
  const personThree = new Person('Amy', 32);
  
  console.log(personTwo.toString());
  
  personThree.eat('tacos');
  personThree.eat('steak');
  personThree.eat('ice cream');
  
  console.log(personThree.stomach);
  personThree.poop();
  console.log(personThree.stomach);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}

Car.prototype.fill = function(gallons){
  this.tank += gallons // shorthand for this.tank = this.tank + gallons
};

Car.prototype.toString = function(){
  return `My second car was a ${this.model}, which got ${this.milesPerGallon} mpg when driving in the city!`;
}

const carOne = new Car ('Toyota Camry', 29);
const carTwo = new Car ('Nissan Sentra', 29);
const carThree = new Car ('Nissan Versa', 32);

console.log(carTwo.toString());

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `${this.name} plays with their favorite toy, ${this.favoriteToy}`;
}
const lilBaby1 = new Baby('Kyler', 3, 'Legos');
const lilBaby2 = new Baby('Paige', 3, 'Skyrim')
console.log(lilBaby2);
/* 
  TASK 4

 In your own words explain the four principles for the "this" keyword below:
  1. Implicit - Whatever is before the '.' is what 'this' refers to.
  2. New - when using 'new', a new object is created, and 'this' will point to it.
  3. Explicit - to be honest, I'm having a hard time describing this 'in my own words.' I paid rapt attention the whole lecture, kept notes, and have read multiple websites explaining it. But I'm still not 100% clear on how exactly it works.
  4. Default - when no other rules apply ('backwards compatible?')
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
