"use strict";
//Guest List :
let guest_list = ['Imran Khan', 'Zardari', 'Nawaz Sharif'];
guest_list.forEach(guest_list => {
    console.log('Dear Mr.' + `${guest_list}\nYou are invited for a dinner party\nThank you\n\n`);
});
// Changing guest list 
let guest_list2 = ['Imran Khan', 'Zardari', 'Nawaz Sharif'];
// guest_list1.forEach(guest_list1 => {
//     console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
// })
let unavai_Guest = ['Imran Khan'];
console.log(`Unfortunately! Mr.${unavai_Guest} can not make it to dinner.`);
let new_guest = ['Sir Zia Ur Rehman'];
guest_list2[0] = new_guest[0];
guest_list2.forEach(guest => {
    console.log('Dear Mr.' + `${guest},\nYou are invited for a dinner party\nThank you\n\n`);
});
