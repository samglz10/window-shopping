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
  // Select products container
  const productContainerElement = document.querySelector('#products-container');
  if (productContainerElement === null){
    throw new Error('product container is null')
  }
  
  // Get all the products from fake store api
  let response = await fetch('https://fakestoreapi.com/products');
  let result = await response.json();

       
  //console.log(result);
  //creates 20 pre tags with JSON response in a string 
    for(let i = 0; i < result.length; i++){

      
    // Create elements for all of them and insert those into the DOM
      //main-parent div
      const containerElement = document.createElement('div');

      // creating elements
      const titleElement = document.createElement('a');
      //const categoryElement = document.createElement('p');
      //const descriptionElement = document.createElement('p');
      const priceElement = document.createElement('p');
      const ratingElement = document.createElement('p');
      //const inventoryElement = document.createElement('p');
      const imgElement = document.createElement('img');
    
      // Applying classes
      containerElement.classList.add('item-container');
      titleElement.classList.add('item-title');
      //descriptionElement.classList.add('item-description');
      //categoryElement.classList.add('item-category');
      imgElement.classList.add('item-image');
      ratingElement.classList.add('item-rating');
      //inventoryElement.classList.add('item-stock');
      priceElement.classList.add('item-price');

      


     
      //creating textContent
      titleElement.textContent = result[i].title;
      //categoryElement.textContent = "Category " + result[i].category;
      //descriptionElement.textContent = result[i].description;
      priceElement.textContent = "$ "+result[i].price // priceStyle(result[i].price );
      ratingElement.textContent = starRating(result[i].rating.rate);
      //inventoryElement.textContent = 'Items in Stock: ' + result[i].rating.count;
      imgElement.src=result[i].image;

      //anchor element with links
      let search_query = result[i].title;
      titleElement.href = `https://www.youtube.com/results?search_query=${search_query}`;
      
    //appendChild elements
      containerElement.appendChild(imgElement);
      containerElement.appendChild(titleElement);
      containerElement.appendChild(ratingElement);
      //containerElement.appendChild(descriptionElement); 
      containerElement.appendChild(priceElement);
      //containerElement.appendChild(inventoryElement);
      //containerElement.appendChild(categoryElement);
          console.log(result[i].price)
      //append all childs to parent div      
      productContainerElement.appendChild(containerElement);

      


    }

    //anchor tags
  
    
      
}

renderProducts();

// let foo: undefined
/** @type {string} */
let foo

/** 
 * @param {number | undefined} rating
 * @returns {string} 
 * */
function starRating(rating = 0) {
  const star = '⭐';
  const halfStar = '🌓'
  const emptyStar = '★'
  let starRating = [];
  let roundedRating = Math.round(rating);

  for(let i = 0; i < roundedRating ; i++){
    if( i < roundedRating){  
      starRating.push(star);
    } 
  }
  if (roundedRating < rating){
    starRating.push(halfStar);
  }
  // starRating.length = 4, how many times should I loop? once
  // starRading.length = 2, 3
  const currentStars = starRating.length;
  for(let j = 0; j < 5 - currentStars; j++) {
      starRating.push(emptyStar);
  }
      
  return starRating.join('');
}




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
