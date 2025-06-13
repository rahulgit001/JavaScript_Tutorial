console.log("R")
console.log("A")
console.log("H")
console.log("U")
console.log("L")

// say my function()

// function addnumber(number1, number2){
//     console.log(number1 + number2);
// }

function addnumber(number1, number2){
    let results = number1 + number2
    // console.log("Rahul")
    return results
}
const results = addnumber(3, 5)

console.log("results: ", results);

function login (username){
    // return `${username} just login in`
}

console.log(login("rahul"))
console.log(login())

function loginmess(user){
    if (user === undefined) {
        console.log("please enter a username");
        return
    }
    return `${user} just login in`
}

console.log(loginmess())