let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-containe');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');  
}

let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click' () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });

searchBtn.addEventListener('click', () =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});
