const pi=3.14159;
let name="Bilal";
var age=20; //we don't use it anymore because it has function scope and can lead to bugs.


//pi=3.15; // This will cause an error because pi is a constant and cannot be reassigned. 
name="Ali"; // This is allowed because name is declared with let, which allows reassignment.
//console.log(pi);
console.table({pi,name,age}); // This will display the variables in a table format in the console.