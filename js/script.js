
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