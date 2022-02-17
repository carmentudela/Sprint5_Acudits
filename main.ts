

const botonSiguiente = document.getElementById('siguiente');//Creates a const with the button id.
botonSiguiente.addEventListener('click', showJoke);//Asings the function showJoke to the click event.
const pantalla = document.getElementById('joke');
const plantilla = document.createElement('div');

const reportAcudits: Array<{ joke: string, score: number, date: Date }> = [];

//Function to print the joke on the console, when clicking the 'següent acudit' button.

function showJoke() {

    const UrlApi: string = 'https://icanhazdadjoke.com';
    fetch(`${UrlApi}`, { headers: { 'accept': 'application/json' } })
        .then((resp) => resp.json())
        .then((data) => {

            let element = document.createElement('span');
            element.classList.add('span');
            element.appendChild(document.createTextNode(`${data.joke}`));
            let divBotones = document.createElement('div');
            divBotones.classList.add('divBotones');
            let emoji1 = document.createElement('button');
            emoji1.innerHTML = '&#128546';
            emoji1.classList.add('emoji1');
            const id1 = document.querySelector('.emoji1');
            if (id1) {


                id1.addEventListener('click', nolo);
                function nolo(): void {
                    console.log('hey');
                }
            }

            let boton2 = document.createElement('button');
            boton2.innerHTML = 'Mmm';
            let boton3 = document.createElement('button');
            boton3.innerHTML = 'Good';
            divBotones.appendChild(emoji1);
            divBotones.appendChild(boton2);
            divBotones.appendChild(boton3);
            element.appendChild(divBotones);
            plantilla.appendChild(element);
        });
    pantalla.appendChild(plantilla);
    removeJoke();

}
function removeJoke() {
    plantilla.innerHTML = '';
}

