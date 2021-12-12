//date & times
const now = new Date();
console.log(now);

//year, months, day, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());


//timestamps
console.log('timestamp: ', now.getTime());

//Date Strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//Advanced Timestamps
const before = new Date('February 1 2019 7:30:59');
console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(days);

console.log(`The blog was written in ${days} days ago` );

//converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));


//Date FNS (CND links)
console.log(dateFns.isToday(now));

//formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

//comparing dates
const early = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now,early));
console.log(dateFns.distanceInWords(now,early, {addSuffix: true}));


