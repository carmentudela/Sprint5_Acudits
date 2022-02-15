var botonSiguiente = document.getElementById('siguiente');
botonSiguiente.addEventListener('click', showJoke);

function showJoke() {
    var UrlApi = 'https://icanhazdadjoke.com';
    fetch("".concat(UrlApi), {
            headers: {
                'accept': 'application/json'
            }
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

            console.log("\"".concat(data.joke, "\""));
        });
}