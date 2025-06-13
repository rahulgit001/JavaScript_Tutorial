function one(){
    const name = "Rahul"

    function two(){
        const lastname = "kumar"
        console.log(name);
    }
    // console.log(lastname);

    two()

}

one()


if (true){
    const name = "Rahul"
    if (name === "Rahul"){
        const lastname = "Kumar"
        console.log(name + lastname);
    }
    // console.log(lastname);
}

// console.log(name);




// ------------------------- interesting -------------------------

console.log(adone(5))
function adone(num){
    return num + 1
}


const addtwo = function(num){
    return num + 2
}
addtwo(5)