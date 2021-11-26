//querySlector & querySelectorAll
const para = document.querySelector('p');
console.log(para);

const paraClass = document.querySelector('.error');
console.log(paraClass);

const paraClassDiv = document.querySelector('div.error');
console.log(paraClassDiv);


const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(para =>{
    console.log(para);
})


//getElementsbyId
const elementById = document.getElementById('pageId');
console.log(elementById);

//getElementsbyClass
const elementByClass = document.getElementsByClassName('pageClass');
console.log(elementByClass[0]);


//getElementsbyTagName
const elementByTagName = document.getElementsByTagName('p');
console.log(elementByTagName);
console.log(elementByTagName[0]);



//adding to the content
const content = document.querySelector('p');
console.log(content.innerText);
para.innerText = 'Changed to Jellyfish';

//changing all the p tag and added a content to it
const contents = document.querySelectorAll('p');
contents.forEach(cont =>{
    console.log(cont.innerText);
    cont.innerHTML+= ' added content';
})

//changing from the htmlinner method
const contentHtml = document.querySelector('.content');
console.log(contentHtml.innerHTML);
contentHtml.innerHTML = '<h2>This is the replaced tah<h2>';

const contentForEach = document.querySelector('.content');
const people = ['mario', 'jelly', 'yoshi', 'paji','beji'];

people.forEach(person =>{
    contentForEach.innerHTML+= `<p>${person}<p>`;
})


//getting_setting attributes

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.innerText = 'The Facebook Link';

const msg = document.querySelector('.getset');
console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color:green');

//changeing attributes with CSS

const head= document.querySelector('h3');
console.log(head.innerText);

head.style.color = 'blue';
head.style.margin = '50px';


//adding and removing class
// const textClass = document.querySelector('.adding_removing_class');

// textClass.classList.add('addClass');
// textClass.classList.remove('addClass');



const parasP = document.querySelectorAll('p');

parasP.forEach(p =>{
    if(p.textContent.includes('error')){
        p.style.color = 'red';
    }
    if(p.textContent.includes('success')){
        p.style.color = 'green';
    }
});


const title4 = document.querySelector('.title4');
title4.classList.toggle('test');
console.log(title4.getAttribute('class'));
