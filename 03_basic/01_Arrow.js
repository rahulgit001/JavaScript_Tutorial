const user = {
    firstname: "Rahul",
    lastname: "kumar",
    mobilenumber: 7766071191,

    message: function() {
        console.log(`${this.firstname} , welcome to profile`);

        console.log(this);
    }
}

user.message()
user.firstname = "logan"
user.message()

// console.log(this);



function name(){
    let username = "Rahul"
    console.log(this.username);
}
name()   // undefined


// const one = function () {
//     let name = "Rahul"
//     console.log(this.name);
// }
// one()      // undefined


const two = () => {
    let Fname = "Rahul"
    console.log(this);
}
two()       // undefined



// Arrow Function

const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(3, 5))       // basic


const sum = (num1, num2) => ( num1 + num2 )

console.log(sum(4, 4));

const addsum = (num1, num2) => ({name: "Rahul"})  // object Return
console.log(addsum());

const myarray = [1, 2, 3, 4, 5, 6]

myarray.forEach()