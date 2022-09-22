const somethingWillHappen = () => {
return new Promise((resolve, reject)=> {
    if (true){
        resolve('Hey! se resolvió')
    }
    else{
        reject('Whoops!');
    }
});
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Promise.all(aca dentro todas las promesas) el then es un arreglo de respuestas