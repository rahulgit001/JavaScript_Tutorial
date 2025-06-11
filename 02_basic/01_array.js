// An array is a special variable, which can hold more than one value:

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(myArr[1]);

const Arr = ["rahul", "kumar", "logan", "name"]
console.log(Arr[3]);

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)
console.log(myArr2[0]);

// Array Methods

myArr.push(9)

myArr.pop()   // last vallue removed

myArr.unshift(9)  //add vallue from start
myArr.shift()    // remove vallue from first

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr)


const newArr = myArr.join()
console.log(myArr);



//  slice, splice
const newa = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("A ", newa);

const myar = newa.slice(1, 3)

console.log(myar);
const myar2 = newa.slice(2, 3)
console.log("B ", newa);

console.log("c ", newa)
// console.log(myar2);