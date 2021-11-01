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

