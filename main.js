let toggle = document.querySelector('#burger');
let sidebar = document.querySelector('nav');

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    sidebar.classList.toggle('open');
});
