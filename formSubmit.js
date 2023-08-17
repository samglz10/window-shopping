
//grab the HTML elements by id
const submitForm = document.querySelector("#myForm");
const titleData = document.querySelector('#title');
const priceData = document.querySelector('#price');
const descriptionData = document.querySelector('#description');
const imageData = document.querySelector('#image');
const categoryData =document.querySelector('#category');




//need window.onload so page will not read values of null because the js code is being executed before the DOM/function is ready 
window.onload = () =>{
// e = capture the event parameter
submitForm.addEventListener('submit',(e) => {
    //stops the browser from trying to submit the form by default
    e.preventDefault();
    const data = new FormData(e.target.value); 
    let newProductObject = {
        title: titleData.value,
        price: priceData.value,
        description: descriptionData.value,
        image: imageData.value,
        category: categoryData.value

    }
    console.log(data)
    })

}


