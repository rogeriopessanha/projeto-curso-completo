
let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

let cadastroBtn = document.querySelector('.conta-form .cadastro-btn');
let loginBtn = document.querySelector('.conta-form .login-btn');

cadastroBtn.onclick = () =>{
    cadastroBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.conta-form .login-form').classList.remove('active');
    document.querySelector('.conta-form .cadastrar-form').classList.add('active');
}

loginBtn.onclick = () =>{
    cadastroBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.conta-form .login-form').classList.add('active');
    document.querySelector('.conta-form .cadastrar-form').classList.remove('active');
}

let contaForm = document.querySelector('.conta-form')

document.querySelector('#conta-btn').onclick = () =>{
    contaForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    contaForm.classList.remove('active');
}


var swiper = new Swiper(".inicio-slider", {
    slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
  });


  var swiper = new Swiper(".inicio-cursos-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });



//   slidesPerView: 1,
//         spaceBetween: 30,
//         loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable:true,
//     },
//     loop:true,
//     grabCursor:true,
//     autoplay: {
//         delay: 8500,
//         disableOnInteraction: false,
//     },