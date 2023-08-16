//grab the submit-btn by id

const submitForm = document.querySelector("#myForm");

// e = capture the event parameter
submitForm.addEventListener('submit',(e) => {
    //prevent the default behavior- stops the browser from trying to submit the form to another page 
    e.preventDefault();
    console.log('form submitted!')
})

