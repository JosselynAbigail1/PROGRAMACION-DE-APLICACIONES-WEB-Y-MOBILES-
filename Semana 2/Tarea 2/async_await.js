function fetchData() {
    return new Promise((resolve, reject) => {
        let dataAvailable = true;

        setTimeout(() => {
            if (dataAvailable) {
                resolve("Datos cargados correctamente.");
            } else {
                reject("No se pudieron cargar los datos.");
            }
        }, 3000);
    });
}

async function loadData() {
    try {
        console.log("Cargando datos...");
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Finaliz? la operaci?n de carga.");
    }
}

loadData();