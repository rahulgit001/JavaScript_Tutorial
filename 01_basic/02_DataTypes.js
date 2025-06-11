let age = 44
  // "44abc",  null, undefiend, true  "rahul",  
console.log(typeof age);
console.log(typeof (age));

let numnumber = Number(age)
console.log(typeof numnumber);
console.log(numnumber)

let numin = 4    // "rahul", 4, "", 
let booleanin = Boolean(numin)
console.log(booleanin);

// 1 => true;, 0 => falsh
// "" => falsh "rahul" => true

// reference (non primitive)

//  Array, objests, functions
const heros =["shaka", "ajay", "rahul",]

let myobjects = {
  name: "rahul",
  age: 25,
}
console.log(myobjects);

const myfunction = function(){
  console.log("hello rahul");
}

console.log(typeof myfunction);