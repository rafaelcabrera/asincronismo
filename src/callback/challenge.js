const XMLHttpRequest = require('XMLHttpRequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = (event) =>{
        if(xhttp.readyState === 4 ){ //0 no inicializado 1 loading... 2 ejecutó el valor de send 3 interactuando 4 se completó la llamada
            if(xhttp.status === 200) //200 es solicitud correcta
             callback(null, JSON.parse(xhttp.responseText));
        } else {
            const err = new Error('Error' + urlApi)
            return callback(err, null)
        }
    }
    xhttp.send();
}

