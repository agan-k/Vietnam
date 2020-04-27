let burger = document.querySelector('#burger');
let x = document.querySelector('#x');
let sidebar = document.querySelector('nav');

burger.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.toggle('open');
});
x.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.toggle('open');
});