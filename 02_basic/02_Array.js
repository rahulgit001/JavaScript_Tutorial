const name1 = ["rahul", "logan", "rony"]
const hero = ["manoj", "sharma", "sudhir", "jhjhj"]
name1[0] = 'rony'
name1[1] = 'logan'
name1 [2] = 'ranul'
name1[0] = hero[3]
console.log(name1)



// name1.push(hero)
// console.log(num1);

const num = name1.concat(hero)
console.log(num);

const all_array = [...name1, ...hero]
console.log(all_array);


const real_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_other_array = real_array.flat(Infinity)
console.log(real_other_array);

console.log(Array.isArray("rahul"))
console.log(Array.from("Rahul"))
console.log(Array.from({name: "Rahul"}))   // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));