//rest parameter 
const double = (...nums)=>{
    console.log(nums);
    return nums.map(num => num*2);
}

const result= double(1,2,3,4,6,7,89,5,4,3);
console.log(result);


//spread suntrax (arrays)

const people = ['shaun', 'ryu', 'rystal'];
const members = ['pajji', 'chun-li', ...people];
console.log(members);


//spread syntax (objects)

const person = { name: 'bejji', age: 30, job: 'none'};
const personClone = {...person, location: 'Dhaka'};
console.log(personClone);


//sets  (removes duplicate values)
const names = ['shaun', 'ryu', 'rystal', 'ryu'];
console.log(names);
const nameSet = new Set(names);
console.log(nameSet);


//converting the set to array
const uniqueNames = [...nameSet];
//const uniqueNames = [...new Set(names)];
console.log(uniqueNames);

//adding elements to the set
const ages = new Set();
ages.add(20);
ages.add(24);
ages.add(27);
ages.add(29).add(50);
console.log(ages);


//removing elements from the set
ages.delete(29);
console.log(ages);

console.log(ages.size);
console.log(ages.has(30), ages.has(25));



const obj = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 24},
    {name: 'Chun-li', age: 34}
]);

obj.forEach(data => {
    console.log(data.name , data.age);
})


// Symbols (premitive type)
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const bb = [];
bb.age =29;
bb['belt'] = 'orange';
console.log(bb);

bb['belt']= 'black';
console.log(bb);


bb[symbolOne] = 'ryu';
bb[symbolTwo] = 'tua';

console.log(bb);