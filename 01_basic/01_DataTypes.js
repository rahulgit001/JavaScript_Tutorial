/*
"use strict"  // treat all js code as newer version
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object
*/

// 1. Primitive Data Types

let name = "hitesh" //string
let age = 25        // number
let num = false     // boolean
let x = BigInt("123456789012345678901234567890"); // bigint
let account;   // undifind
let space = null // null standalone value
let id = Symbol('id');    // Symbol

console.log(typeof (num));

//  2. Non-Primitive (Reference) Data Types

// Objects, Array, Functions

const persion = {
    name: "rahul",
    lastname: "kumar",
    address: "aurangabad",
    email: "merahullogan7@gmail.com",
    mobile: 7766071191,
    account: "",

}

console.log(persion);
console.log(typeof account);
console.log(typeof persion.mobile);

let count = "88as"
let value = Number(count)
console.log(typeof value);
console.log(value)

// "88"  => 88
// "88acs" => NaN
// true => 1; false => 0

let is = 1
let booleanis = Boolean(is)
console.log(booleanis);


// 1 => true; 0 => false
//  "" => false
//  "rahul" => true

let sumnumber = 77
let stringNumber = String(sumnumber)
console.log(stringNumber)

// Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
