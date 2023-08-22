export const reviewCounter = (min, max) => {
    //Math.random returns a random number between 0 and 1; Getting a random integer between two values;
    let randomNumber = Math.round(Math.random() * (max - min) + min);
    let randomReviews = randomNumber.toString();
   
    return randomReviews 

}

