const score=100; //100
const scoreN= new Number(100); // [Number: 100]

//methods in number
console.log(score.toFixed(2)); //toFixed() method formats a number using fixed-point notation.
console.log(score.toString()); //toString() method returns a string
console.log(score.toExponential(2)); //toExponential() method returns a string representing the number  
console.log(score.toPrecision(2)); //toPrecision() method returns a string representing the number to a specified precision.
console.log(score.localeString()); //toLocaleString() method returns a string with a language-sensitive representation of this number.



/*****************************************Math***********************************/
console.log(Math.PI); //PI constant
console.log(Math.abs(-5)); //abs() method returns the absolute value of a number convert negative to positive
console.log(Math.round(4.5)); //round() method rounds a number to the nearest integer
console.log(Math.ceil(4.1)); //ceil() method rounds a number up to the nearest integer
console.log(Math.floor(4.9)); //floor() method rounds a number down to the nearest integer
console.log(Math.max(1,2,3)); //max() method returns the largest of zero or more numbers
console.log(Math.min(1,2,3)); //min() method returns the smallest of zero or more numbers
console.log(Math.random()); //random() method returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10); //random number between 0 and 10
console.log(Math.random()*10+1); //random number between 1 and 10
console.log(Math.floor(Math.random()*10)+1); //random integer between 1 and 10 remove decimal part using floor method

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //random integer between min and max
