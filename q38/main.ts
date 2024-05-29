//Q:38

// Function to describe a city
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Sydney'); // Without providing a country (uses default value)
