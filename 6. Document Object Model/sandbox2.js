// Click Events
const button = document.querySelector('button');



const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e =>{
       // console.log('item clicked');
       //console.log(e);
       console.log(e.target);

       e.target.style.textDecoration = 'line-through';

    })
})


//creating_removing elements
const listItems = document.querySelectorAll('.secondList');
listItems.forEach(item => {
    item.addEventListener('click', e =>{
     e.target.remove();

    })
})

//adding elements to the list using button

thirdList = document.querySelector('.thirdList');
button.addEventListener('click', ()=>{
    //first way
    //thirdList.innerHTML+= '<li>Something new </li>';

    //second way 
    const li = document.createElement('li');
    li.textContent = 'Something new to do';
    //thirdList.append(li);
    thirdList.prepend(li);

});

thirdList.addEventListener('click',e=>{
    console.log('event in UL');
})