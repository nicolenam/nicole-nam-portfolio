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


    const hamburger = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__menu');
    const close = document.querySelector(('.nav__close'));
    const menuList = document.querySelector('.nav__menu')

    hamburger.addEventListener("click", toggleMenu);
    close.addEventListener("click", toggleMenu);
    menuList.addEventListener("click", toggleMenu);

    function toggleMenu(){
        hamburger.classList.toggle('hide');
        close.classList.toggle('show');
        menu.classList.toggle('show');
    }


    window.addEventListener('scroll', ()=>{

        const nav = document.querySelector('.nav__container');
        const scrollTop = window.pageYoffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            nav.classList.add('nav__scrolled');
          } else {
            nav.classList.remove('nav__scrolled');
          }

    })

});