//Q:31 No Users

// List of current usernames
const current_users: string[] = ['yousuf', 'mariam', 'anila', 'danish', 'celeste'];

// List of new usernames
const new_users: string[] =['yousuf', 'mariam', 'maria', 'wahab', 'saloni'];

// Convert current_users to lowercase for case-insensitive comparison
const current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Check if each new username is available
for (const user of new_users) {
    if (current_users_lower.includes(user.toLowerCase())) {
        console.log(`Sorry, the username '${user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
}
