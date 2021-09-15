// Recorrer los enlaces y añadir evento click
function runNav() {
    document
        .querySelectorAll('.b-header__enlace')
        .forEach(function(item) {
            item.addEventListener('click', function() {
                menuScroll(item.textContent)
            });
        });
}

// Ir al scroll de la página
function menuScroll(name) {
    let position = window.scrollY + document.getElementById(name).getBoundingClientRect().top;
    window.scrollTo(0, position - 20);
}

// Crear e insertar el título inicial
function insertHeading() {

    const container = document.querySelector('.b-ocultar');
    const titulo = {
        element: 'h1',
        textContent: 'Asesores S.L',
    }

    const text = {
        element: 'p',
        textContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus in labore odit dolorem soluta voluptate temporibus hic, repudiandae reprehenderit dolore incidunt quam eum. Ipsam nisi velit voluptatum minima amet.'
    }

    const heading = document.createElement(titulo.element);
    const paragraph = document.createElement(text.element);

    heading.textContent = titulo.textContent;
    paragraph.textContent = text.textContent;

    container.appendChild(heading);
    container.appendChild(paragraph);

    showTextHeading();
    changeColour();

};


// Boton ocultar título inicial
function showTextHeading() {
    const button = document.getElementById('mostrarTexto');
    const titulo = document.querySelector('.b-ocultar');

    button.addEventListener('click', (e) => {
        titulo.classList.toggle('b-ocultar__active');

        if (e.target.textContent == 'Ocultar') {
            e.target.textContent = 'Mostrar';
        } else {
            e.target.textContent = 'Ocultar';
        };
    });
};

// Cambiar color inicio
function changeColour() {

    const colours = ['aqua', 'chartreuse', 'crimson', 'yellow', 'blueviolet', 'blue', 'coral', 'white'];
    const button = document.getElementById('cambiarColor');
    const title = document.querySelector('.b-ocultar');

    let contador = 0;

    button.addEventListener('click', () => {

        title.style.color = colours[contador];
        contador++;

        if (contador > (colours.length - 1)) {
            contador = 0;
        };

    });
};

// Boton mostrar menu movil

function showMenu() {
    const button = document.getElementById('btnMenu');
    const body = document.querySelector('body');
    const container = document.querySelector('.b-header');

    button.addEventListener('click', () => {
        container.classList.toggle('b-header__active');
        body.classList.toggle('active');
    });
};

// Boton arriba 
function upToTop() {
    
    const button = document.querySelector('.b-arriba');

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
};
