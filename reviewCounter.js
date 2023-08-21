const reviewCounter = (num) => {
    //Math.random returns a random number between 0 and 1;
    for(let i = 0; i < 10; i++){
    let randomNumber = Math.round(Math.random() * num);
    console.log(randomNumber);
    }
}

reviewCounter(5);