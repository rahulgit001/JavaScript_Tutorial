const oneuser = {}

oneuser.id = "123abc"
oneuser.name = "Rahul"
oneuser.isLoggedIn = false

console.log(oneuser);
// Methods are actions that can be performed on objects.

// Methods are function definitions stored as property values.


const registering = {
  email: "mrrahullogan7@gmail.com",
  fullname: {
    username: {
      firstname: "Rahul",
      lastname: "kumar"
    }
  }
};

console.log(registering.fullname.username.firstname); // Output: "Rahul"




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)  
console.log(obj3);
console.log(obj4);


const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users = [
    {
        id: 10,
        email: "merahullogan7@gmail.com"
    },
    {
        id: 10,
        email: "merahullogan7@gmail.com"
    },
    {
        id: 10,
        email: "merahullogan7@gmail.com"
    },
    {
        id: 10,
        email: "merahullogan7@gmail.com"
    },
    {
        id: 10,
        email: "merahullogan7@gmail.com"
    }
]

users[1].email
console.log(oneuser);

console.log(Object.keys(oneuser));
console.log(Object.values(oneuser));
console.log(Object.entries(oneuser));

console.log(oneuser.hasOwnProperty('isLoggedIn'));