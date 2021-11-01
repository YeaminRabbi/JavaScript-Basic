/// Creating Objects + Adding methods to objects 

let user = {
    name : 'Yeamin',
    age: 25,
    email: 'yeaminrabbi308@gmail.com',
    location: 'Bangladesh',
    blogs: [
        {title : 'Pan Cake', price : 30},
        {title: ' Burger', price : 100}
    ],
    
    login: function(){
        console.log('User Has Logged in');
    },
    logout: function()
    {
        console.log("User Has LOGGED out");
    },

    logBlogs: function(){
        console.log('user has written these blogs');
        console.log(this.blogs);

        this.blogs.forEach(element => {
            console.log(element.title , element.price);
        });
    }
};

//two ways to access the object
console.log(user['location']);
console.log(user.name);

//callint the object methods
user.login();
user.logout();

//methods for the blogs
user.logBlogs();




////// Math Objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

let area = 4.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();

//random number in a range of 1000
console.log(Math.round(random * 1000));



// Primitive vs Reference values

let score1 = 50;
let score2 =50;

console.log(score1,score2);

score1 =100;
console.log(score1,score2);


//reference type
const userOne = { name:'Rabbi', age: 20};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 100;

console.log(userOne, userTwo);

