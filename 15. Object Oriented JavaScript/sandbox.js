//creating object 

const onj = new Array(10,20,30,40);
console.log(onj);

const obj = {};
console.log(obj);

const nameString = new String('ryu');
console.log(nameString);

//object literals
const userOne = {
    username : 'Yeamin',
    email: 'yeamin@mgail.com',
    login(){
        console.log('logged in');
    },
    logout(){
        console.log('loggedout');
    }
};

console.log(userOne.email, userOne.username);

const userTwo = {
    username : 'Rabbi',
    email: 'rabbi@mgail.com',
    login(){
        console.log('logged in');
    },
    logout(){
        console.log('loggedout');
    }
};
console.log(userTwo.email, userTwo.username);
console.log(userTwo);


// Class in JavaScript
class User{
    constructor(username,email)
    {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }

    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}


const One = new User('Yeamin', 'yeamin@gmail.com');
const Two = new User('Rabbi', 'rabbi@gmail.com');

console.log(One, Two);


One.login();
One.login().incScore().incScore().logout();

//inheritance

class Admin extends User{
    deleteUser(user){
        users = users.filter((u)=>{
            return u.username !== user.username;
        });
    }
}

const Three = new Admin('beji', 'beji@gmail.com');
console.log(Three);

let users = [One , Two ,Three];
console.log(users);

Three.deleteUser(Two);
console.log(users);


//super() in class

class SuperAdmin extends User{
    constructor(username,email,title){
        super(username, email);
        this.title= title;
    }
    deleteUser(user){
        users = users.filter((u)=>{
            return u.username !== user.username;
        });
    }
}
const Four = new SuperAdmin('beji', 'beji@gmail.com', 'SuperAdmin');

console.log(Four);

//constructor functions

function A(username,email)
{
    this.username = username;
    this.email = email;
}

A.prototype.login = function (){
    console.log(`${this.username} has logged in`);
    return this;
}
A.prototype.logout = function (){
    console.log(`${this.username} has logged out`);
    return this;
}

admin.prototype = Object.create(A.prototype);


function admin(username, email, title)
{
    A.call(this,username,email);
    this.title = title;
}

const UserOne = new A('mario', 'mario@mgail.com');
const UserTwo = new A('jacob', 'jacob@mgail.com');
const UserThree = new admin('admin', 'adminjacob@mgail.com', 'black-belt-ninja');

console.log(UserOne, UserTwo, UserThree);
UserOne.login().logout();