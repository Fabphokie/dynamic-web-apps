const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// 1. Use forEach to console log each name to the console.
names.forEach(name => console.log(name));

// 2. Use forEach to console log each name with a matching province.
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 3. Using map, loop over all province names and turn the string to all uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 4. Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 5. Using sort, sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word "Cape" in them.
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// 7. Create a boolean array by using map and some to determine whether a name contains an "S" character.
const hasSCharacter = names.map(name => name.startsWith("S") || name.includes("s"));
console.log(hasSCharacter);



// 8. Using only reduce, turn the above into an object that indicates the province of an individual.
const provinceObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
}, {});
console.log(provinceObject);


//Exercise 2
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

console.log("Exercise 1:");
products.forEach(product => console.log(product.product));

console.log("Exercise 2:");
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

console.log("Exercise 3:");
const convertedPrices = products
    .filter(product => product.price !== '' && !isNaN(product.price))
    .map(product => ({ ...product, price: Number(product.price) }));
const totalCombinedPrice = convertedPrices.reduce((total, product) => total + product.price, 0);
console.log(totalCombinedPrice);

console.log("Exercise 4:");
const concatenatedNames = products.reduce((result, product) => {
    if (result === '') {
        return product.product;
    } else {
        return result + ', ' + product.product;
    }
}, '');
console.log(concatenatedNames);

console.log("Exercise 5:");
const highestAndLowest = products.reduce(
    (result, product) => {
        if (result.highest === null || product.price > result.highest.price) {
            result.highest = product;
        }
        if (result.lowest === null || product.price < result.lowest.price) {
            result.lowest = product;
        }
        return result;
    },
    { highest: null, lowest: null }
);
const highestAndLowestString = `Highest: ${highestAndLowest.highest.product}. Lowest: ${highestAndLowest.lowest.product}`;
console.log(highestAndLowestString);

console.log("Exercise 6:");
const recreatedObject = Object.entries(products).reduce((result, [key, value]) => {
    const newKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
    result[newKey] = value;
    return result;
}, {});
console.log(recreatedObject);

