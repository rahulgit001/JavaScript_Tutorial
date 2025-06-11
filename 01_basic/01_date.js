// JavaScript Date Objects let us work with dates:

// Wed Jun 11 2025 19:10:10 GMT+0530 (India Standard Time)

let mydate = new Date()
console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate.getTimezoneOffset());
console.log(mydate.getHours());
console.log(typeof mydate.getMonth());


let createdate = new Date(2023, 0, 23)
let dates = new Date(2023, 0, 23, 5, 3)
let time = new Date("11-06-2023")
console.log(createdate.toLocaleString());
console.log(dates)
console.log(time)

let mytimet = Date.now();

console.log(mytimet)
// console.log(mytimet.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)


// Date objects are created with the new Date() constructor.



// You can use an array of names to return the month as a name:


const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];

console.log(month);
