//for loop
let msg = 'Hello';

for(let i=0;i<10;i++)
{
    console.log(msg, i+1);
}



//while loop
let ii=10;

while(ii != 0)
{
    console.log( ii);
    ii--;
}


//if else 

let a = 10;
let b = 20;
let c = 30;
if(a>= b && a>=c)
{
    console.log('a is greater than b & c');
}
else if ( b>=a && b>=c)
{
    console.log('b is greater than a & c');

}
else{
    console.log('c is greater than b & a');

}


//break and continue
let arr = ['ab','hg','yt','sc','tu','ty','sd','sdy','r','oi','qwe','td','argh'];
for(let i=0;i< arr.length ; i++)
{

    console.log(arr[i]);
    if(arr[i] == 'oi')
    {
        break; // or continue would do the same thing
    }


}

console.log("Loop Breaked");