function starRating(rating){
    const star = '⭐';
    const halfStar = '🌓'
    const emptyStar = '★'
    let starRating = [];
    let roundedRating = Math.round(rating);
    console.log("rated"+rating)
    console.log("rounded"+roundedRating)
    
    
      for(let i = 0; i < roundedRating ; i++){
        if( i < roundedRating){  
          starRating.push(star);
        } 
      }
      console.log(starRating);

      if (roundedRating <= rating){
        starRating.push(halfStar);
        console.log(roundedRating +"is less than" +rating)
        console.log('adding a half rating' + starRating)
      }
      
      
      // starRating.length = 4, how many times should I loop? once
      // starRading.length = 2, 3
      const currentStars = starRating.length;
      for(let j = 0; j < 4 - currentStars; j++) {
          starRating.push(emptyStar);
      }
        console.log('final rating' + starRating)
        
    return starRating.join('');
      
      }
    starRating(4.1);