// Submit al formulario
function scheduleForm() {
    const formulario = document.getElementById('form_agenda');
    formulario.addEventListener('submit', checkForm);
};

// Almacenar el contenido del formulario
function checkForm(e) {

    e.preventDefault();

    // Valores del formulario
    const name = document.getElementById('client').value;
    const draft = document.getElementById('draft').value;
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value;

    // Crear ID
    let id = Date.now();

    // Objeto del cliente
    const cliente = {
        name,
        draft,
        date,
        note,
        id
    };

    // Validación mínima del formulario
    if (name === '' || draft === '' || date === '' || note === '') {
        showAlert('Todos los campos son oblogatorios');
        return;
    };

    insertNote(cliente);
}

// Insertar nota en la Agenda
function insertNote(cliente) {

    const {name, draft, date, note, id } = cliente;

    const agenda = document.querySelector('.b-agenda');

    const container = document.createElement('div');
    const btnDelete = document.createElement('div');
    
    container.classList.add('b-agenda__elemento');
    container.setAttribute('id', id);

    container.innerHTML = `
        <h2 class="b-agenda__elemento__titulo">${name}</h2>
        <h4>${draft}</h4>
        <p>${date}</p>
        <p class="b-agenda__elemento__texto">${note}</p>
    `;

    // Botón eliminar
    btnDelete.classList.add('b-agenda__elemento__cerrar', 'icon-cross');
    btnDelete.onclick = function () {
        deleteContent(id, container);
    }

    // Insertar el contenido creado en el DOM
    container.appendChild(btnDelete);
    agenda.appendChild(container);
}

// Mostrar alerta
function showAlert(mensaje) {

    const container = document.querySelector('.b-formulario__elemento__alerta');
    const message = document.createElement('p');

    // Limìar el HTML previo
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };

    message.textContent = mensaje;
    container.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
};

// Eliminar nota de la Agenda
function deleteContent(id, contenedor) {

    if (contenedor.getAttribute('id') == id) {
        contenedor.remove();
    }

};

