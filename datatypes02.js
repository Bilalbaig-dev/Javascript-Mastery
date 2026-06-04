/******************Data types in JavaScript ********************/
//number>  2 ......
//string> "Hello"
//float> 3.14
//boolean> true or false
//null> represents the intentional absence of any object value
//undefined> represents a variable that has been declared but has not been assigned a value
//symbol> a unique value that can be used as an identifier for object properties

let name="Bilal";
let state; //undefined
let temp=null; //null
//console.log(typeof name);


/******************8Conversion in data types *********************/
let greet="10";
/*
console.log(typeof greet); //string
let numberConversion=Number(greet);
console.log(typeof numberConversion); //number
*/

// "10" > number
// "10abc" > NaN (Not a Number)
// "abc" > NaN
// null > 0
// undefined > NaN

let num;
let stringConversion=String(num);
/*
console.log(typeof stringConversion); //string
console.log(stringConversion); //undefined
*/

// 10 > "10"
// 3.14 > "3.14"
// true > "true"
// null > "null"
// undefined > "undefined"


/*********************Operations ********************/
let a=10;
let negativeA=-a; // -10
/*
console.log(negativeA);

console.log(5+3); //8
console.log(5-3); //2
console.log(5*3); //15
console.log(5/3); //1.6666666666666667
console.log(5%3); //2 (remainder)
console.log(5**3); //125 (5 raised to the power of 3)

*/

let greet1="Hello";
let name1="Bilal";
let greeting=greet1+" "+name1; //Hello Bilal


1+"2"; // "12" (number + string = string)
"1"+2; // "12" (string + number = string)
"1"+2+"3"; // "123" (string + number + string = string)
1+2+"3"; // "33" (number + number + string = string)
1+"2"+3; // "123" (number + string + number = string)

(1+2)*3; // 9 (parentheses first) keep code clean and readable

/***prefix and postfix operators */
let x=5;
console.log(x++); // 5 (postfix: returns x, then increments)
console.log(x); // 6 (x is now incremented)
let y=5;
console.log(++y); // 6 (prefix: increments y, then returns it)
//postfix operator (x++) 
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
//prefix operator (++x)
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

/*********************Comparison operators ********************/
console.log(5==5); // true (loose equality)
console.log(5=="5"); // true (loose equality, type coercion)
console.log(5===5); // true (strict equality)
console.log(5==="5"); // false (strict equality, no type coercion)
console.log(5!=5); // false (loose inequality)
console.log(5!="5"); // false (loose inequality, type coercion)
console.log(5!==5); // false (strict inequality)
console.log(5!== "5"); // true (strict inequality, no type coercion)
console.log(5>3); // true
console.log(5<3); // false
console.log(5>=5); // true
console.log(5<=5); // true

//Avoid using these messy comparisons with null and undefined
null > 0; // false
null >= 0; // true (null is converted to 0 for comparison)
undefined > 0; // false
undefined >= 0; // false (undefined is not converted to a number for comparison)


/*********************primitive & non-primitive data types(reference types) ********************/

//primitive data types: number, string, boolean, null, undefined, symbol,BigInt
const score=100; //number
const name2="Bilal"; //string
const isStudent=true; //boolean
const emptyValue=null;
let notAssigned; //undefined
const bigNumber=1234567890123456789012345678901234567890n; //BigInt
const uniqueId=Symbol("id"); //symbol
const anotherUniqueId=Symbol("id"); // another unique symbol, even with the same description
console.log(uniqueId === anotherUniqueId); // false (each symbol is unique)



//non-primitive data types: object, array, function
const heros=["Superman","Batman", "spiderman"] //array (which is a type of object)
const person={
    name:"Bilal",
    age:20,
    isStudent:true
} //object
function greet2(name){
    return "Hello "+name;
} //function