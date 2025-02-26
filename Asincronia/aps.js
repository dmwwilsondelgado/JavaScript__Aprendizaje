// Funciones asincronas
//para definir una funcion asincrona se usa la palabra reservada async
//para definir una promesa se usa la palabra reservada new Promise
//para esperar una promesa se usa la palabra reservada await
//para manejar errores se usa try catch
//para manejar errores de promesas se usa catch
//para manejar errores de promesas se usa finally
//para manejar errores de promesas se usa then
//para manejar errores de promesas se usa resolve
//para manejar errores de promesas se usa reject
//para manejar errores de promesas se usa all



const saludo = async () => {
    let hola = await new Promise((a,b)=>{
        setTimeout(()=>{
            a('Hola');
        },1000);
    });
}

setTimeout(()=>{
    console.log('Hola');
});
//fecth se usa para hacer peticiones a servidores o apis o archivos entre otros
//fetch devuelve una promesa
//fetch recibe como parametro la url de la peticion
//fetch recibe como segundo parametro un objeto con las opciones de la petición


[
    {

        "id": 1,
        "name": "Leanne Graham"
    },
    {
        "id": 2,
        "name": "Ervin Howell"
    },
    {
        "id": 3,
        "name": "Clementine Bauch"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V"
    },
    {
        "id": 9,
        "name": "Glenna Reichert"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque"
    },
]


const ciudades =  () => {
    const data =  fetch('aps.json');
    return data;
}
