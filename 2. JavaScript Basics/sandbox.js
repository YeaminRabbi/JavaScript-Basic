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



//Template Strings

const c1 = "My Name is";
const c2 = "Tushar";
const c3 = "Web Developer";

let template_string = `Hello! ${c1} ${c2}. I am a ${c3}`;
console.log(template_string);


//Html templates 

let html = `
        <h2>Hello!</h2>
        <p>I am ${c2}</p> `;

console.log(html);


//array in javascript

let arr = ['ab', 'vd', 2, 29];
let arr2 = ['agt', 'pou'];

console.log(arr);

// joining all the elements in the array 
console.log(arr.join('-'));

//joining two arrays
let combined_array = arr.concat(arr2);
console.log(combined_array);

//push & pop
combined_array.push('LastOne');
console.log(combined_array);

combined_array.pop('LastOne');
console.log(combined_array);



//Boolean 
let n = "United";
console.log(n.includes('t'));
console.log(n.includes('tt'));

let ARRAY = ['1', '2', '3', '4'];
console.log(ARRAY.includes('100'));
console.log(ARRAY.includes('3'));


//comparison operators
let age = 30;
console.log(age == 25);
console.log(age != 25);
console.log(age < 25);
console.log(age > 25);
console.log(age >= 25);


//strict comparison 

console.log(age === '30');
console.log(age === 30);


//type conversion
let score = '100';
let ConvertedScore = Number(score);
console.log(ConvertedScore+1);
console.log(ConvertedScore , typeof ConvertedScore);
console.log(score , typeof score);

let ss = Number('102');
let tt = String(50);
console.log(ss , typeof ss);
console.log(tt , typeof tt);







