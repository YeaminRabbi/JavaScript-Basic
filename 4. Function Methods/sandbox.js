// normal function declaration
function greet()
{
    console.log("hello");
}
greet();

// fucntion inside a variable

let street = function()
{
    console.log("Road is made with Pitch");
}

street();



///function with arguments
function area(a = 50,b)
{
    console.log(a*b);
}

area(0,20);


///return functions
function findTriangleArea(base,height)
{
    let area = 0.5*base*height;

    return area;
}

console.log('The of the Triagle is: ',findTriangleArea(5,3) );



//arrow function 
const bill  = function(products, tax)
{
    let total = 0;

    for(let i =0 ;i< products.length;i++)
    {
        total += products[i] + products[i]*tax; 
    }

    return total;
};
console.log('Total Price with Tax: ',bill([10,30,20,40,65,103], 1.5));



const bill2 = (products , tax)=>{
    let total = 0;

    for(let i =0 ;i< products.length;i++)
    {
        total += products[i] + products[i]*tax; 
    }

    return total;
};
console.log('(Arrow Function)');
console.log('Total Price with Tax: ',bill2([10,30,20,40,65,103], 1.5));




//Callback Function
 const myFunc = (callbackFunc) =>{
    let value = 100;
    callbackFunc(value);
 };

 myFunc(function(value){
     console.log(value);
 });

//foreach method
 let marks = [10,30,20,40,65,103,14,52,64,85,103,35];
marks.forEach(function(){
    console.log('something');
}) ;

//with normal function
marks.forEach(function(element){
    console.log(element);
}) ;



//element wise
marks.forEach(element => {
    console.log(element);
});




//get a reference to the 'ul'

const ul = document.querySelector('.marks');
console.log('With HTML reference');
let html2 =``;
marks.forEach(xx => {
    html2+=`<li style="color: purple">${xx}</li>`;
});

console.log(html2);
ul.innerHTML = html2;