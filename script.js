document.addEventListener("DOMContentLoaded", function() {

    const formElement = document.querySelector("form");

    formElement.addEventListener("submit", (e)=>{
        
        e.preventDefault();

        const messageElement = document.querySelector('.form-message');
        const message = "Thank you for your email :)";

        messageElement.innerHTML = message;
        messageElement.style.display = "block";
        formElement.reset();
    });


});