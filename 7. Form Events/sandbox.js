const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
form.addEventListener('submit', e =>{
    e.preventDefault(); 
    //console.log(username.value);
    console.log(form.username.value);
});

//testing Regex
const UserName = 'jellyfish';
//const pattern = /[a-z][A-Z]{6,}/;
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(UserName);
console.log(result);
if(result)
{
    console.log('Regex test passed');
}
else{
    console.log('Regex test Fails');
}


let result2 = UserName.search(pattern);
console.log(result2);


//form validation
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', e =>{
   e.preventDefault(); 
   //validation

   const username = form.username.value;
   

   if(usernamePattern.test(username)){
        //feedback good info
        feedback.textContent='that user name is valid!';

   }
   else{
        //feedback help info
        feedback.textContent='that user name is not valid!';

   }
});


//RealTime Feedback from validation
form.username.addEventListener('keyup', e =>{
    //console.log(e.target.value, form.username.value);

    if(usernamePattern.test(e.target.value)){
       
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');



    }
})