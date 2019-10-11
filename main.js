window.onload = () => {
    // for animations
    AOS.init({
        duration: 1500,
        once: true,
    });

    // manage open and close nav
    const backgroundFade = document.querySelector('#background-fade');
    const openMenuButton = document.querySelector('#button-open');
    const closeMenuButton = document.querySelector('#button-close');
    const nav = document.querySelector('nav');

    openMenuButton.addEventListener('click', () => {
        nav.setAttribute('class', 'open');
        backgroundFade.setAttribute('class', 'show');
    });

    closeMenuButton.addEventListener('click', () => {
        nav.setAttribute('class', 'close');
        backgroundFade.setAttribute('class', 'hide');
    });
    backgroundFade.addEventListener('click', () => {
        nav.setAttribute('class', 'close');
        backgroundFade.setAttribute('class', 'hide');
    });
};
