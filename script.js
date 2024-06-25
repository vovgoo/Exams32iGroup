document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.burger-menu');
    const closeButton = document.getElementById('closeButton');
    const openButton = document.getElementById('openButton');

    closeButton.addEventListener('click', function() {
        menu.classList.remove('w-96');
        menu.classList.remove('max-sm:w-full');
        menu.classList.add('w-0'); 
        openButton.classList.remove("hidden")
    });

    openButton.addEventListener('click', function() {
        menu.classList.remove('w-0');
        menu.classList.add('max-sm:w-full');
        menu.classList.add('w-96');
        openButton.classList.add("hidden")
    });
});
