//Greetings :the text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ['rabekah ', 'zaynah', 'azlan'];
//foreach loop lagaya 
friends.forEach(function (items) {
    //     console.log(`Hello ${items}, i want world tour with you`);
    // });
    console.log("Hello ".concat(items, ", i want world tour with you"));
});
