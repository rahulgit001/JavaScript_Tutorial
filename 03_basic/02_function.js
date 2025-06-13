function calculateprice(...num1){
    return num1
}

console.log(calculateprice(100, 300, 20, 500))

const user = {
    username: "Rahul",
    lastname: "Kumar",
    mobilenumarber: "7766071191"
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and last name ${anyobject.lastname} mobile number ${anyobject.mobilenumarber}`)
}

// handleobject(user)

handleobject({
    username: "Rony",
    mobilenumarber: 7766071191
})

const newArray = [100, 200, 300, 400, 500]

function returnvalue(getarray){
    return getarray[2]
}

// console.log(returnvalue(newArray))
console.log(returnvalue([100, 200, 300, 400, 500]));