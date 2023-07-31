const exampleProduct = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

// JSON - JavaScript Object Notation
// Get products
// Loop through
// Display them

const rootElement = document.querySelector('#app');

if (rootElement === null) {
  throw new Error('root element is null')
}

const renderProducts = async () => {
  // Get all the products from fake store api
  let response = await fetch('https://fakestoreapi.com/products');
  let result = await response.json();
  
  const preAllProductsJSONElement = document.createElement('pre');
  
  preAllProductsJSONElement.textContent = JSON.stringify(result,undefined, 6);

  rootElement.appendChild(preAllProductsJSONElement);

  console.log(result)
  
  // Create elements for all of them and insert those into the DOM


  // Once you do it with just dumping the raw json
  // Try to use the object you get back to create specific elements, instead of just dumping JSON
}

renderProducts();
/*

const renderProduct = async () => {
  // Get the object from fake store API
  let response = await fetch('https://fakestoreapi.com/products/1')
  let result = await response.json(); // parses the body into a javascript object
  // could also be response.text() if it's not json you're getting back

  const preJSONElement = document.createElement('pre');

  preJSONElement.textContent = JSON.stringify(obj, undefined, 2);

  rootElement.appendChild(preJSONElement)
}

renderProduct(exampleProduct);
*/
