

// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs
const city1 = city_country('Lahore', 'Pakistan');
const city2 = city_country('Paris', 'France');
const city3 = city_country('New York', 'USA');

// Print the values returned
console.log(city1);
console.log(city2);
console.log(city3);
