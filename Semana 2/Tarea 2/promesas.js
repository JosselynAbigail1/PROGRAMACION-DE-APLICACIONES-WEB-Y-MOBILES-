const myPromise = new Promise((resolve, reject) => {
    let success = true; // Cambia a false para simular un error

    if (success) {
        setTimeout(() => resolve("Operacion exitosa!"), 2000); 
    } else {
        setTimeout(() => reject("Ocurrio un error."), 2000); 
    }
});

myPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    })
    .finally(() => {
        console.log("Operacion completada."); // 
    });