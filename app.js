/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// 1. Use .filter() to extract all products that cost less than 200
const costProduct = products.filter((e) => e.price <= 200);
console.log(costProduct);

// 2. Use .map() to make a list that only contain the product names
const listName = products.map((e) => e.name);
console.log(listName);

// 3. Use a chained combination of .filter() and .map() to list only
// the names of all products in a specific category (e.g. 'electronics')
const listElectronics = products
  .filter((e) => e.category === "electronics")
  .map((e) => e.category);
console.log(listElectronics);

// 4. Use .some() to check if there are any products that cost more than 1000
console.log(products.some((e) => e.price >= 1000));

// 5. Use .reduce() to find the total cost of all the products.
// .reduce() - I was lokking for information how I can do that so documentaction
//from MDN Web about .reduce() help me. Not chatGPT😅😉 link to webside:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log(products.reduce((accumulator, e) => accumulator + e.price, 0));
