let name = "Eric Coleman"
const state = 50;
let total = 4 + 5;
let vegetables = ["onion", "pepper", "carrot", "Tomato"]
let pet = {
    name: "Chum",
    breed: "Dog"
}
let arrayObject = [{
    name: "Steven",
    age: 25
},
{
    name: "Sarah",
    age: 20
},
{
    name: "Dora",
    age: 18
},
{
    name: "Justin",
    age: 29
},
{
    name: "Ahmed",
    age: 30
},
]
function sayHello() {
    console.log("Hello World!")
}
function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
function getLength(letter) {
    return letter.length
}
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

for (let i = 0; i < arrayObject.length; i++) {
    checkAge(arrayObject[i].name, arrayObject[i].age)
}
let len = getLength("hello world")
console.log(len)
if (len % 2 === 0) {
    console.log("The world is nice and even")
} else {
    console.log("the world is an odd place")
}
function hi() {
    let a = "eric"
    function h2() {
        console.log("byeee" + a)
    }
    return h2;
}

console.log(checkAge("Charles", 21))
console.log(checkAge("Abby", 27))
console.log(checkAge("James", 18))
console.log(checkAge("John", 17))
console.log()
console.log(sayHello())
console.log()
console.log(pet.name + "  " + pet.breed)
console.log(hi())