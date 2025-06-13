// singleton 
const username = new Object()
// Real Life Objects
// non singleton
const user = {
    name: "Rahul",
    lname: "kumar",
    "fullname": "rahul kuamar",
    // [mySym]: "mykey1",
    age: 24,
    location: 'aurangabad',
    email: "merahullogan7@gmail.com",
    mobile: 7766071191,
}

console.log(user.email)
console.log(user["email"])
console.log(user["fullname"])
// console.log(user[mySym])

user.email = "merahullogan7@gmail.com"
// Object.freeze(user)
user.email = "merahul7@gamil.com"
console.log(user);

user.greeting = function () {
    console.log("Hello js Rahul");
}

user.greetingtwo = function () {
    console.log(`Hello js Rahul, ${this.lname}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());
