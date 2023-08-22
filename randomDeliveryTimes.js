export const randomDelivery = () =>{
    //grab today's date
    const todaysDate = new Date();
    //grab shortened month
    const months = todaysDate.getMonth();
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];
    const month = monthNames[months];
    //grab day
    const days = todaysDate.getDate();


    const deliveryTimes = [
        "FREE delivery Today 10 AM - 3 PM",
        "FREE delivery Today 5 PM - 10 PM",
        `FREE delivery Tomorrow, ${month} ${days} `
    ]
    const max = 0;
    const min = 2;

    let randomTime = Math.round(Math.random() * (max - min) + min);
    const deliveryTime = deliveryTimes[randomTime];
        return deliveryTime

}
