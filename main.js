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
  console.log(result)
  //creates 20 pre tags with JSON response in a string 
    for(let i = 0; i < result.length; i++){
      
    // Create elements for all of them and insert those into the DOM
      //main/parent div
      const mainDiv = document.createElement('div');
      // creating elements
      const titleElement = document.createElement('h3');
      const categoryElement = document.createElement('p');
      const descriptionElement = document.createElement('p');
      const priceElement = document.createElement('p');
      const ratingElement = document.createElement('p');
      const inventoryElement = document.createElement('p');
      const imgElement = document.createElement('img');

      //create ID's for elements
      mainDiv.setAttribute('id','main-div')
      titleElement.setAttribute('id','title');
      descriptionElement.setAttribute('id','item-description');
      categoryElement.setAttribute('id','category');
      imgElement.setAttribute('id','item-image')
      ratingElement.setAttribute('id','rating')

      //creating textContent
      titleElement.textContent = result[i].title;
      categoryElement.textContent = "Category " + result[i].category;
      descriptionElement.textContent = result[i].description;
      priceElement.textContent = "$ "+result[i].price;
      ratingElement.textContent = 'Rating: ' + result[i].rating.rate;
      inventoryElement.textContent = 'Items in Stock: ' + result[i].rating.count;
      imgElement.src=result[i].image;
      
      // Once you do it with just dumping the raw json
      //mainDiv.textContent = JSON.stringify(result[i],undefined, 2);
      //appendChild elements
      mainDiv.appendChild(titleElement);
      mainDiv.appendChild(imgElement);
      mainDiv.appendChild(descriptionElement); 
      mainDiv.appendChild(ratingElement);
      mainDiv.appendChild(priceElement);
      mainDiv.appendChild(inventoryElement);
      mainDiv.appendChild(categoryElement);
    
      //append all childs to parent div      
      rootElement.appendChild(mainDiv);

    }

  // Try to use the object you get back to create specific elements, instead of just dumping JSON
}

renderProducts();


/*
// Example function
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
