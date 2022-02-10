 class Dropdown {
     constructor(container){
         this.container = container ;
         this.trigger = container.querySelector('.trigger');
         this.content = container.querySelector('.content');

     }

     intit(){
         this.trigger.addEventListner('click', ()=>{
             this.trigger.classList.toggle('active');
             this.content.classList.toggle('active');
         });
     }
 }

 export {Dropdown as default};