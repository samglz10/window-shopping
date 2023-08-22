import {reviewCounter} from './reviewCounter.js'
import { randomDelivery } from './randomDeliveryTimes.js'
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
      const reviewElement = document.createElement('p');
      const deliveryElement = document.createElement('p');
    
      // Applying classes
      containerElement.classList.add('item-container');
      titleElement.classList.add('item-title');
      //descriptionElement.classList.add('item-description');
      //categoryElement.classList.add('item-category');
      imgElement.classList.add('item-image');
      ratingElement.classList.add('item-rating');
      //inventoryElement.classList.add('item-stock');
      priceElement.classList.add('item-price');
      reviewElement.classList.add('item-review');
      deliveryElement.classList.add('delivery');

      //creating textContent
      titleElement.textContent = result[i].title;
      //categoryElement.textContent = "Category " + result[i].category;
      //descriptionElement.textContent = result[i].description;
      priceElement.textContent = "$ "+result[i].price // priceStyle(result[i].price );
      ratingElement.innerHTML = starRating(result[i].rating.rate) ;
      //inventoryElement.textContent = 'Items in Stock: ' + result[i].rating.count;
      imgElement.src=result[i].image;
      reviewElement.textContent = reviewCounter(1000, 10000);
      deliveryElement.textContent = "Free Delivery" + randomDelivery();

      //anchor element with links
      let search_query = result[i].title;
      titleElement.href = `https://www.youtube.com/results?search_query=${search_query}`;
      
    //appendChild elements
      containerElement.appendChild(imgElement);
      containerElement.appendChild(titleElement);
      containerElement.appendChild(ratingElement);
      //appending random review numbers to the rating element as a child
      ratingElement.appendChild(reviewElement);
      //containerElement.appendChild(descriptionElement); 
      containerElement.appendChild(priceElement);
      //containerElement.appendChild(inventoryElement);
      //containerElement.appendChild(categoryElement);
      containerElement.appendChild(deliveryElement);
      //append all childs to parent div      
      productContainerElement.appendChild(containerElement);

      


    }

    //anchor tags
  
    
      
}

renderProducts();

/** 
 * @param {number | undefined} rating
 * @returns {string} 
 * */
function starRating(rating = 0) {
  let starRating = [];
  let roundedRating = roundToStep(rating, 0.5);

  // Count whole stars
  for(let i = 0; i < Math.floor(roundedRating) ; i++){
    starRating.push(FULL_STAR);
  }

  // Check for half stars
  if (roundedRating !== Math.round(rating)) {
    starRating.push(HALF_STAR);
  }

  // Filling wiht empty stars
  const currentStars = starRating.length;
  for(let j = 0; j < 5 - currentStars; j++) {
      starRating.push(EMPTY_STAR);
  }
      
  return starRating.join('');
}

/**
* @param {number} num
* @param {number} step 
*/
function roundToStep(num, step){
  return Math.round(num / step) * step
}



const HALF_STAR = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
</svg>
`;
const FULL_STAR = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
`;
const EMPTY_STAR = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
</svg>
`;


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
