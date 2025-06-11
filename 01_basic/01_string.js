// Strings are for storing text

// Strings are written with quotes

// A JavaScript string is zero or more characters written inside quotes.


const name = "rahul"
const last = "kumar"
const age = 24

console.log(`my name is ${name} and my lastName is ${last} and my age is ${age}`)

// A JavaScript string is zero or more characters written inside quotes.

const fname = new String('Rahul')
console.log(fname[2]);
console.log(fname.length);
console.log(fname.toLocaleUpperCase());
console.log(fname.toLocaleLowerCase());
console.log(fname.charAt(2));
console.log(fname.indexOf('u'));

const lname = new String('Rahul_logan');
const newname = lname.substring(0, 2);
console.log(lname);

const lastName = lname.slice(0, 4)
console.log(lastName)


const rname = " Rahul "
console.log(rname);
console.log(rname.trim());

const url = "https://rahul.com/rahulkumar"
console.log(url.replace('kumar', 'logan'));

console.log(url.includes('good'));

console.log(name.split('-'));


// JavaScript Strings as Objects