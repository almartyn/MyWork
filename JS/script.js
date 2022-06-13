let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let back = document.querySelector('body');

header_burger.onclick = function () {
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
