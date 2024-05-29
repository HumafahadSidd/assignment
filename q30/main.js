"use strict";
//Q:30
let userNames = ["Admin", "Sana", "Zaynah", "Hammad", "Hira"];
userNames.forEach(userNames => {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});
