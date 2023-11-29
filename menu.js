let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('abrir-menu'); // Toggle the 'abrir-menu' class
    overlay.style.display = menu.classList.contains('abrir-menu') ? 'block' : 'none'; // Show/hide overlay
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

// Close the mobile menu when a menu item is clicked
menu.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });
});
