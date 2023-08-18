function priceStyle(price){
  const stringPrice = price.toString();
  
  //iterate through the string price and drop the two cents and the decimal
    for (let i = 0; i < stringPrice.length; i++){
    if (stringPrice.length <= 3){
        let dollarPrice = stringPrice.slice(1);
        console.log("dollarPrice "+dollarPrice)
    }else {
        let newPrice = stringPrice.slice(stringPrice.length - 3)
        console.log("newPrice" + newPrice);
        
    }
       
    }
    
  }

priceStyle(10.2)