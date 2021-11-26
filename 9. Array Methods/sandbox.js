//filter method
const scores = [10,20,30,55,12,34,65,23];
const filterScores = scores.filter((n)=>{
    return n > 30;
});

console.log(filterScores);


const users =[
    {name: 'jelly', premium: false},
    {name: 'youshi', premium: true},
    {name: 'yeamin', premium: false},
    {name: 'rabbi', premium: true},
]; 

const premiumUsers = users.filter(user=>{
    return user.premium;
});
console.log(premiumUsers);


//Map method
const prices = [10,20,34,64,2,50,12,30];
const salePrices = prices.map((price)=> {
    return price / 2;
})
console.log(salePrices);

const products =[
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
    {name: 'smoothy', price: 80},
]; 

const saleProducts = products.map(product =>{
    if(product.price > 30){
        return {name: product.name, price: product.price /2};
    }
    else{
        return product;
    }
});

console.log(saleProducts);


//reduce method
const numbers = [10,90,34,64,2,50,82,30];

const result = numbers.reduce((acc, curr)=>{
    if(curr >=  50)
    {
        acc++;
    }

    return acc;
}, 0);
console.log(result);


const allRecords =[
    {player: 'mario', score: 20},
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60}, 
    {player: 'yoshi', score: 40},
    {player: 'mario', score: 10},
    {player: 'crystal', score: 60},  
]; 

const marioTotal = allRecords.reduce((acc, curr)=>{
    if(curr.player === 'mario'){
        acc += curr.score;
    }

    return acc;
},0);

console.log(marioTotal);


//find method
const numberList = [10,4,34,64,2,50,82,30];
const firstHighScore = numberList.find(score=>{
    return score > 50;
});

console.log(firstHighScore);

//sort method 
const list1 = [10,4,34,64,2,50,82,30];
const list2 = ['mario','shaun','chun-li','yoshi' ];

list2.sort();
list2.reverse();
console.log(list2);

list1.sort(); 
console.log(list1);

const players =[
    {name: 'gold star', score: 20},
    {name: 'mushroom', score: 40},
    {name: 'green shells', score: 30},
    {name: 'banana skin', score: 10},
    {name: 'red shells', score: 50},
    {name: 'smoothy', score: 80},
]; 

players.sort((a,b)=>{
    if(a.score > b.score){
        return -1;
    }
    else if(b.score > a.score){
        return 1;
    }
    else{
        return 0;
    }
});

console.log(players);


//chaining methods

const productList =[
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
    {name: 'smoothy', price: 80},
]; 

const filtered = products.filter(product => product.price > 20);
const promos = filtered.map(product =>{
    return `the ${product.name} is ${product.price / 2} pounds`;
});

console.log(promos);