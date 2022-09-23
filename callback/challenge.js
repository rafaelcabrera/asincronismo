// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const API = 'https://api.escuelajs.co/api/v1';

// function fetchData(urlAPI, callback) {
//     let xhttp = new XMLHttpRequest();

//     xhttp.open('GET', urlAPI, true);
//     xhttp.onreadystatechange = (event) =>{
//         if(xhttp.readyState === 4 ){ //0 no inicializado 1 loading... 2 ejecutó el valor de send 3 interactuando 4 se completó la llamada
//             if(xhttp.status === 200) //200 es solicitud correcta
//              callback(null, JSON.parse(xhttp.responseText));
//         } else {
//             const err = new Error('Error' + urlAPI)
//             return callback(err, null)
//         }
//     }
//     xhttp.send();
// }

// fetchData(`${API}/products`,(err1, data1)=>{
//     if(err1) return console.error(err1);
//     fetchData(`${API}/products/${data1[0].id}`, (err2, data2)=>{
//         if(err2) return console.error(err2);
//         fetchData(`${API}/categories/${data2?.category?.id}`,(err3,data3)=>{
//             if (err3) return console.error(err3);
//             console.log(data1[0]);
//             console.log(data2.titles);
//             console.log(data3.name);
//         });
//     });
// });

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}
fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
