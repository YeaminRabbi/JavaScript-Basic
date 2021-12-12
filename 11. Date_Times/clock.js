//For the Digital Clock
const clock = document.querySelector('.clock');

const tick = () =>{
    const NOW = new Date();

    const h = NOW.getHours();
    const m = NOW.getMinutes();
    const s = NOW.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span> 
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);

