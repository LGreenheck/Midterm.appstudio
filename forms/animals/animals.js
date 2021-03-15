
var myAnimals = ["dog", "cat", "horse", "meerkat"]
let newAnimal = prompt("Add a new animal:")
let addingAnimal = newAnimal.toLowerCase()
myAnimals.push(addingAnimal)

console.log(`The last animal in the array is ${myAnimals[myAnimals.length-1]}.`)

