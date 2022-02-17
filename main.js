var botonSiguiente = document.getElementById('siguiente'); //Creates a const with the button id.
botonSiguiente.addEventListener('click', showJoke); //Asings the function showJoke to the click event.
var pantalla = document.getElementById('joke');
var plantilla = document.createElement('div');
var reportAcudits = [];
//Function to print the joke on the console, when clicking the 'següent acudit' button.
function showJoke() {
    var UrlApi = 'https://icanhazdadjoke.com';
    fetch("".concat(UrlApi), { headers: { 'accept': 'application/json' } })
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
        var element = document.createElement('span');
        element.classList.add('span');
        element.appendChild(document.createTextNode("".concat(data.joke)));
        var divBotones = document.createElement('div');
        divBotones.classList.add('divBotones');
        var emoji1 = document.createElement('button');
        emoji1.innerHTML = '&#128546';
        emoji1.classList.add('emoji1');
        var id1 = document.querySelector('.emoji1');
        if (id1) {
            id1.addEventListener('click', nolo);
            function nolo() {
                console.log('hey');
            }
        }
        var boton2 = document.createElement('button');
        boton2.innerHTML = 'Mmm';
        var boton3 = document.createElement('button');
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
