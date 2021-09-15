function validarForm() {

    const formulario = document.getElementById('form_contacto');
    const inputs = document.querySelectorAll('#form_contacto input');


    const expresions = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, 
        apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        asunto: /^[a-zA-ZÀ-ÿ\s]{2,30}$/
    };

    const valor = {
        nombre: false,
        apellido: false,
        email: false,
        asunto: false
    };

    const validarFormulario = function (e) {
        
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresions.nombre, e.target, 'nombre');
            break;
            case "apellido":
                validarCampo(expresions.apellido, e.target, 'apellido');
            break;
            case "email":
                validarCampo(expresions.email, e.target, 'email');
            break;
            case "asunto":
                validarCampo(expresions.asunto, e.target, 'asunto');
            break;
        };
    };

    const validarCampo = function (expresion, input, name) {
        
        if (expresion.test(input.value)) {

            document.getElementById(`b-${name}`).classList.add('correcto');
            document.getElementById(`b-${name}`).classList.remove('incorrecto');
            valor[name] = true;

        } else {

            document.getElementById(`b-${name}`).classList.add('incorrecto');
            document.getElementById(`b-${name}`).classList.remove('correcto');
            valor[name] = false;
        };
    };

    inputs.forEach( input => {

        input.addEventListener('input', validarFormulario);

    });


    formulario.addEventListener('submit', function (e) {

        e.preventDefault();

        const { nombre, apellido, email, asunto } = valor;

        const contenedor = document.getElementById('Contacto');
        const emergente = document.createElement('div');
        const tittle = document.createElement('h2');

        emergente.classList.add('b-emergente', 'b-absoluto');

        if (nombre && apellido && email && asunto) {

            tittle.textContent = 'Mensaje enviado';

        } else { 
            tittle.textContent = 'Error en el envio'; 
        }

        emergente.appendChild(tittle);
        contenedor.appendChild(emergente);

        setTimeout(() => {
            emergente.classList.add('d-none');
        }, 3000);

    });

};
