//grab the submit-btn by id

const submitForm = document.querySelector("#myForm");
//need window.onload so page will not read values of null because the js code is being executed before the DOM/function is ready 
window.onload = () =>{
// e = capture the event parameter
submitForm.addEventListener('submit',(e) => {
    //stops the browser from trying to submit the form by default
    e.preventDefault();
    //itirate through the object to obtain valeus
   for(const data of submitForm){
    console.log(data.value)
    const ObjectData = [data.name, data.value]
    //getting entries in names into an array
        console.log(ObjectData)
        }
        
        
    })
    
}

