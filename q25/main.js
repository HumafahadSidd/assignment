"use strict";
// //Q:25
// let alien_color = "green"
// if (alien_color === "green") {
//     console.log("You earned 5 points!")
// }
// alien_color = "red"
// if (alien_color === "green") {
//     console.log("You earned 10 points!") //Output: Empty
// }
//q 26
// //Q:26
// let alien_color = "green"
// if (alien_color === "green") {
//     console.log("You earned 5 points!")
// } else {
//     console.log("Congratulations!You earned 10 points.") //this runs the if block
// }
// //this wil runs else block
//  alien_color = "red"
// if (alien_color === "green") {
//     console.log("alien color is green so You earned 5 points!")
// } else {
//     console.log("alien color is not green so You earned 10 points!")
// } //this runs the else block
//q 26 selse if chain
let alienColor = "green";
if (alienColor === "green") {
    console.log("you earned 5 points");
}
else if (alienColor === "red") {
    console.log("you earned 10 points");
}
else {
    console.log("you earned 15 points");
}
