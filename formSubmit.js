
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
    //gets all the form data 
    const formData = new FormData(e.target); 
    //to view contents of the data object
        for(const data of formData ){
            console.log(data);
        }
    //If you send an object like the code above, it will return you an object with a new id. 
    //remember that nothing in real will insert into the database. 
    //so if you want to access the new id you will get a 404 error.
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(formData)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            alert('submitted!')
            window.location.href = 'index.html'
    /*
    //long way to get the data
    let newProduct = {
        title: titleData.value,
        price: priceData.value,
        description: descriptionData.value,
        image: imageData.value,
        category: categoryData.value
    }
    console.log(newProduct)*/
  
    })
}


