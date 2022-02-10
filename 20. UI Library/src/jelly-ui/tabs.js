import './styles/tabs.css';

class Tabs{
    constructor(container){
        this.contianer = container;
        this.tabs = container.querySelectorAll('.trigger');

    }

    init(){
        this.tabs.forEach(tab => [
            tab.addEvenListener('click',e=> {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        ]);
    }

    toggleTabs(e){
        //remove current active classes
        this.tabs.forEach(tab=> tab.classList.remove('active'));

        //add new active class to clicked tab
        e.target.classList.add('active');
    }

    toggleContent(e)
    {
        //remove current active classes from the content
        this.container.querySelectorAll('.content').forEach(item =>{
            item.classList.remove('active');
        });
        
        //add new active class to the content
        const selector = e.target.getAttribute('data-target');
        const content = this.contianer.querySelector(selector);
        content.classList.add('active');

    }
}


export { Tabs as deafault};