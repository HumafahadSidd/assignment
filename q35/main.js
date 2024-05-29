//Q:35 Animals
var pet_animal = ["Dog", "Cat", "Lion"];
pet_animal.forEach(function (pet_animal) {
    console.log("A ".concat(pet_animal, " would make a great pet."));
});
console.log("But I always prefer cats.");
// List of animals
var animals = ['dog', 'cat', 'rabbit'];
// Print out the name of each animal
console.log("Names of the animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
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
