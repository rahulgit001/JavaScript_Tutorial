// An array is a special variable, which can hold more than one value:

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(myArr[1]);

const Arr = ["rahul", "kumar", "logan", "name"]
console.log(Arr[3]);

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)
console.log(myArr2[0]);

// Array Methods

let brr = new Array('name', 1, true)
brr.push(9)  // add vallue  end

brr.pop()   // last vallue removed

brr.unshift("rahul")  //add vallue from start
brr.shift()    // remove vallue from start
brr.push(10)
brr.push(20)
brr.push(30)
console.log(brr.slice(2, 4));
brr.splice(1,2, 'logan'); // contant change , insert, replase, remove

console.log(brr);

// map
let rahul = [10, 20, 30]

rahul.map((number,index) => {
    console.log(number);
    console.log(index);
})

let num = Arr.map((number) => {
    return number * number
})
console.log(num)

//  filter
let rahu = [10, 20, 30, 11, 21, 44, 51];
let evenArray = rahu.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }else{
        return false
    }
})
console.log(evenArray)

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

// Array 