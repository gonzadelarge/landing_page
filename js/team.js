function teamPlayers(num) {

    // Lista con los miembros del equipo
    const team = [ player1 = {
                    name: 'Paula Scher',
                    text: 'Es una de las diseñadoras gráficas más influyentes del mundo. Descrita como la “maestra conjuradora de lo instantáneamente familiar”, Scher se encuentra entre la cultura pop y las bellas artes en su trabajo. Icónico, inteligente y accesible, sus imágenes han entrado en la lengua vernácula estadounidense.',
                    img: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80',
                }, 
                player2 = {
                    name: 'Javi Garcia',
                    text: 'Estudió Diseño Gráfico en la University of Applied Arts de Viena, más tarde recibió una beca para estudiar en el Pratt Institute de New York. En 1991 se mudó a Honk Kong y ha trabajado para la agencia Leo Burnett, Tibor Kalman (fundador junto con Oliviero Toscani de la revista Colors de Benetton), para más tarde formar su propio estudio en el que ha trabajado con los más diversos clientes del mundo de la música, diseñando portadas realmente sorprendentes, cargadas de poder retórico y estético. Desde su estudio se da el lujo de elegir a sus clientes como a David Byrne, Lou Reed, The Rolling Stones y la artista japonesa Mariko Mori.',
                    img: 'https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                },
                player3 = {
                    name: 'Jaimito Martin',
                    text: 'Jaimito Martin (nacido como Peretz Rosenbaum, 15 de agosto de 1914 - 26 de noviembre de 1996), fue un diseñador gráfico estadounidense muy reconocido1​ en gran parte por el diseño de marcas institucionales. Su educación incluye el Pratt Institute (1929-1932), el Parsons School of Design (1932-1933) y la Liga de estudiantes de arte de Nueva York (1933-1934). Fue uno de los originadores del estilo tipográfico internacional suizo.',
                    img: 'https://images.unsplash.com/photo-1600697394936-59934aa5951f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                },
            ];

    createTeam(team[num]);

};

function showTeam() {

    const button = document.querySelector('.b-toggle');
    const teamContainer = document.querySelector('.b-modal');
    const playerContainer = document.querySelector('.b-section__worker');

    button.addEventListener('click', (e) => {
        teamContainer.classList.toggle('b-modal__active');
        playerContainer.classList.toggle('b-modal__active');

        if (e.target.textContent === 'Ver Equipo') {
            e.target.textContent = 'Ocultar Equipo';
        } else {
            e.target.textContent = 'Ver Equipo';
        }
    });

    chosePlayer();
};

function createTeam(player) {
    
    const { name, text, img } = player;

    const title = document.createElement('h3');
    const paragraph = document.createElement('p');
    const image = document.createElement('img');


    title.textContent = name;
    paragraph.textContent = text;
    image.src = img;

    showImage(image);
    showPlayer(title, paragraph);
}

function showImage(image) {

    const container = document.querySelector('.b-section__columna');

    // Limpiar HTML
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };

    container.appendChild(image);
};

function showPlayer(title, paragraph) {

    const container = document.querySelector('.b-section__worker');

    // Limpiar HTML
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };

    container.appendChild(title);
    container.appendChild(paragraph);

};

function chosePlayer() {
    
    document.querySelectorAll('.b-section__links')
    .forEach( player => {

        player.addEventListener('click', (e) => {

            if (e.target.textContent === 'Paula Scher') {
                teamPlayers(0);
            } else if (e.target.textContent === 'Javi Garcia') {
                teamPlayers(1);
            } else if (e.target.textContent === 'Jaimito Martin') {
                teamPlayers(2);
            };
        });
    });
};

