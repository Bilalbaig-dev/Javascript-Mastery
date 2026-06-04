let name="bilal";
let age=20;

//concatination
console.log("My name is "+name+" and my age is "+age); //old way not recommended
console.log(`My name is ${name} and my age is ${age}`); //template literals preferred way to concatinate strings

//string methods
console.log(name.length); //length of the string
console.log(name.toUpperCase()); //convert to uppercase
console.log(name.toLowerCase()); //convert to lowercase
console.log(name.includes("i")); //check if string includes a substring
console.log(name.startsWith("b")); //check if string starts with a substring
console.log(name.endsWith("l")); //check if string ends with a substring
console.log(name.indexOf("a")); //get the index of a substring
console.log(name.slice(0,3)); //get a substring from index 0 to 3 (not inclusive)
console.log(name.replace("i","a")); //replace a substring with another substring
console.log(name.split("")); //split the string into an array of characters
console.log(name.split("i")); //split the string into an array of substrings using "i" as the separator
console.log(name.trim()); //remove whitespace from both ends of the string
console.log(name.repeat(3)); //repeat the string 3 times
console.log(name.charAt(0)); //get the character at index 0
console.log(name.charCodeAt(0)); //get the Unicode value of the character at index 0