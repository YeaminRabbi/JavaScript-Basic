import Tooltip from './jelly-ui/tooltip';
import Dropdown from './jelly-ui/dropdown';
import Tabs from './jelly-ui/tabs';
import Snackbar from './jelly-ui/snackbar';

//create tooltip
const tooltip = new Tooltip( document.querySelector('.tooltip'));
tooltip.init();


//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

//crate tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar 
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', ()=> {
    snackbar.show('you clicked me');
});