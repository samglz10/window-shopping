export const randomDelivery = () =>{
    //grab today's date
    const todaysDate = new Date();
    //grab shortened month
    const months = todaysDate.getMonth();
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];
    const month = monthNames[months];
    //grab day plus 1 for tomorrows date;
    const days = todaysDate.getDate() + 1;

    const deliveryTimes = [
        " Today 10 AM - 3 PM",
        " Today 5 PM - 10 PM",
        ` Tomorrow, ${month} ${days} `
    ]
    const max = 0;
    const min = 2;
    //random number will be the index of the delivery times array
    let randomTime = Math.round(Math.random() * (max - min) + min);
    const deliveryTime = deliveryTimes[randomTime];
        return deliveryTime

}
