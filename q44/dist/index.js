"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(item) {
    console.log("\nMaking Your sandwich with:");
    item.forEach(element => console.log("." + element));
    console.log('Enjoy your sandwich!\n');
}
make_sandwich(['ham', 'cheese', 'lettuce']);
make_sandwich(['turkey', 'bacon']);
make_sandwich(['peanut butter', 'jelly']);
