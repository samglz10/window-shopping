/**
 * @param { number } price in the format of a number
 * @return {{ dollars: number, cents: number }}  
 */
export function splitIntoDollarsAndCents(price) {
  // Format the number into two decimal places
  const twoDecimalPlaces = price.toFixed(2);

  const portions = twoDecimalPlaces.split('.');
  const [
    dollars, 
    cents = "00",
  ] = portions;

  
}

// Make the return type like this { dollars: number, cents: number }

export function priceStyle(price){
  
  //Round down to nearest whole number to get price;
  const dollars = Math.floor(price).toString();

  //find the index of the index of the decimal value;
  const decimal = price.toString().indexOf('.');
  //slices the string array to have just the cents
  let cents = price.toString().slice(decimal + 1);
  
  //if cents is length is a singular number than add a 0
  if(cents.length < 2) {
    cents += 0;
  // if cents is the same as dollars, then reset cents value to zero and add a zero at the end
  } if (cents === dollars){
    cents = 0;
    cents += '0';
  }

  let totalPrice= [dollars, cents];
  
  return totalPrice;
  
} 
