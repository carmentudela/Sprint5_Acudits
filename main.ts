

const botonSiguiente = document.getElementById('siguiente');//Creates a const with the button id.
botonSiguiente.addEventListener('click', showJoke);//Asings the function showJoke to the click event.

//Function to print the joke on the console, when clicking the 'següent acudit' button.

function showJoke() {
    const UrlApi: string = 'https://icanhazdadjoke.com';
    fetch(`${UrlApi}`, { headers: { 'accept': 'application/json' } })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(`"${data.joke}"`);
        });


}