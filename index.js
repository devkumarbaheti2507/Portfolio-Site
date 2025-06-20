document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-option');
    const links = document.querySelector('.links');

    menu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to document
        links.classList.toggle('show');
    });

    // Clicking anywhere else on the document closes the menu
    document.addEventListener('click', () => {
        links.classList.remove('show');
    });

    // Optional: Prevent clicks inside the links container from closing the menu
    links.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
