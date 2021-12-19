//store data in the local storage
localStorage.setItem('name', 'Bejji');
localStorage.setItem('age', 25);
localStorage.setItem('temp', 500);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);


//updating data
localStorage.setItem('name', 'Pajji');
localStorage.setItem('age', 30);
name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);


//deleting data from local storage
let temp = localStorage.getItem('temp');
console.log(temp);
localStorage.removeItem('temp');
temp = localStorage.getItem('temp');
console.log(temp);

//removing all items from the local storage
localStorage.clear();
console.log(name);



