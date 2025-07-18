const number = 400
console.log(number);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const newNamber = 123.7777

console.log(newNamber.toPrecision(5));

const count = 10000000
console.log(count.toLocaleString('en-IN'));


// MATHS


console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(7, 6, 3, 4, 5, 9));
console.log(Math.max(4, 6, 1, 2, 3, 9, 7, 8));

console.log(Math.random());
console.log((Math.random()*10) + 2);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 2);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);