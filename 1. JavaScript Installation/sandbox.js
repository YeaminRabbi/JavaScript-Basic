let string = 'Hello World';
console.log(string);

//declaring a constant variable 
const pie = 3.1416;
console.log(pie);

var myName = "Yeamin Rabbi Bin Akram";
console.log(myName);


//basic number codes in javascript
let num1 = 5;
let num2 = 30;

let addition = num1 + num2;
let subtraction = num2 - num1;
let multiplication = num1 * num2;
let division = num1/num2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);


//String Functions

let s1 = 'United';
let s2 = 'International';



//concating two strings
let concat = s1 + ' ' + s2;
console.log(concat);

//index and indexOf and length of a string
//String upper + lower + String functions

let UIU = concat + ' University';
console.log(UIU.length);
console.log(UIU.toUpperCase());
console.log(UIU.toLowerCase());

//slicing a string
let slice = UIU.slice(3,10);
console.log(slice);

//finding the index of a character in a string
let position = UIU.indexOf('i');
console.log(position);


//replacing all the characters in a string with a given character
let replaced = UIU.replace('i', '5');
console.log(replaced);
