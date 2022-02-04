const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
   let time = recipe.created_at.toDate();

    let html = `
        <li data-id="${id}">
            <div>
                ${recipe.title}
            </div>
            <div>
                ${time}
            </div>

            <button class="btn btn-danger btn-sm-2">Delete</button>
        </li>
    `;

    list.innerHTML+= html;
}




const delteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id)
        {
            recipe.remove();
        }
    });
}


//get documents (Real Time)
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change);
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }
        else if(change.type === 'removed'){
            delteRecipe(doc.id);
        }
    });
});


// add documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title : form.recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)

    };

    db.collection('recipes').add(recipe).then(()=>{
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });
});



// deleting data 
list.addEventListener('click', e =>{
    // console.log(e);
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete();
        console.log('recipe deleted');
    }
});

//unsubscribe from the changes in database
button.addEventListener('click', () => {
    unsub();
    console.log('Unsubscribed from the collection changes');

});

