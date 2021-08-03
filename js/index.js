window.onload = init;

function init() {
    window.scrollTo(0,0);
    insertHeading();
    scheduleForm();
    showTeam();
    upToTop();
    runNav();
    showMenu();
    validarForm();
}

// FUNCION SCROLL - - Barra de progreso
window.addEventListener('scroll', () => {

    const alturaScroll = document.documentElement.scrollTop;
    const progressBar = document.querySelector('.b-progreso');

    let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progreso = (alturaScroll/altura) * 100;
    
    progressBar.style.opacity = 1;
    progressBar.style.setProperty('--progreso', progreso + "%");

});