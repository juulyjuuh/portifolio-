let btnMenu = document.getElementById('btn-menu');
let btnFecharMenu = document.getElementById('btn-fechar-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('abrir-menu');
    overlay.style.display = menu.classList.contains('abrir-menu') ? 'block' : 'none';
});

btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

// Fechar o menu mobile quando um item de menu for clicado
menu.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});
