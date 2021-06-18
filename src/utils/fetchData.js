let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// let API = 'https://rickandmortyapi.com/api/character/';


//no usamos fetch, porque eso eso promesas, mientras hacemos callback por pedagogía
const fetchData= (url_api)=>{
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest(); //aporte de microsoft
        xhttp.open('GET', url_api, true) //el true para que sea asincronismo dentro de html request
        xhttp.onreadystatechange  = (()=>{ //estados, hay 5, el 4 es completado
         if(xhttp.readyState === 4){
             (xhttp.status===200)
             ? resolve(JSON.parse(xhttp.responseText))
             : reject(new Error('error',url_api))
         }
     });
     xhttp.send();
    })
}
module.exports = fetchData;
