 export function priceStyle(price){
  console.log('orignial price', price)
  //Round down to nearest whole number to get price;
  const dollars = Math.floor(price).toString();
  //console.log(dollars);
  //find the index of the index of the decimal value;
  const decimal = price.toString().indexOf('.');

  let cents = price.toString().slice(decimal + 1);
  console.log('cents',cents)
  
  //if cents is 0 or cents is less than tens then add the a zero
  if(cents.length < 2) {
    cents = '0'
    cents += '0';
  } if (cents === dollars){
    cents = cents;
  }

  console.log('final cents',cents)

    //Deprecated
    //cents.sup();
    let totalPrice = [dollars, cents];
    
    return totalPrice;
    
} 
