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
console.log(typeof name);


/*Conversion in data types */
let greet="10";
console.log(typeof greet); //string
let numberConversion=Number(greet);
console.log(typeof numberConversion); //number

// "10" > number
// "10abc" > NaN (Not a Number)
// "abc" > NaN
// null > 0
// undefined > NaN

let num;
let stringConversion=String(num);
console.log(typeof stringConversion); //string
console.log(stringConversion); //undefined

// 10 > "10"
// 3.14 > "3.14"
// true > "true"
// null > "null"
// undefined > "undefined"