//Q:35 Animals
let pet_animal: string[] = ["Dog", "Cat", "Lion"]
pet_animal.forEach(pet_animal => {
    console.log(`A ${pet_animal} would make a great pet.`)
})
console.log("But I always prefer cats.")

// List of animals
const animals: string[] = ['dog', 'cat', 'rabbit'];

// Print out the name of each animal
console.log("Names of the animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    switch (animal) {
        case 'dog':
            console.log("A dog would make a great pet.");
            break;
        case 'cat':
            console.log("A cat is an independent and low-maintenance pet.");
            break;
        case 'rabbit':
            console.log("A rabbit can be a playful and affectionate companion.");
            break;
        default:
            console.log("Unknown animal.");
    }
}

// Print what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
