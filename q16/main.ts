
//Q:16
//Guest List :

let guest_list: string[] = ['Imran Khan', 'Zardari', 'Nawaz Sharif'];
guest_list.forEach(guest_list => {
    console.log('Dear Mr.' + `${guest_list}\nYou are invited for a dinner party\nThank you\n\n`)});

// Changing guest list 
 let guest_list2: string[] = ['Imran Khan', 'Zardari', 'Nawaz Sharif'];
 let unavai_Guest : string[] = ['Imran Khan'];
 console.log(`Unfortunately! Mr.${unavai_Guest} can not make it to dinner.\n`);
 
 let new_guest:string[] = ['Zia Ur Rehman'];
 guest_list2[0]=new_guest[0];

 guest_list2.forEach(guest => {
    console.log('Dear Mr.' + `${guest},\nYou are invited for a dinner party\nThank you\n\n`)});


console.log("Great news! I found a bigger dinner table");

guest_list2.unshift('Pervaiz Musharraf');//start of array
guest_list2.splice(guest_list2.length / 2, 0, 'Kamran Khan');//mid addition
guest_list2.push('Kamran Tessori')//end

guest_list2.forEach(guest_list => {
    console.log('Dear Mr.' + `${guest_list},\nYou are invited for a dinner party\nThank you\n\n`);
});

let updated_guest_list: string[] = guest_list2;

console.log(updated_guest_list);
