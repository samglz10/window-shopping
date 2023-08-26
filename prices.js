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
