class Persona{
    //construtor
    construtor(nombreA,apellidoA,edadA){
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
    }
    //Metodos
    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }
}

class Apredix extends Persona{
}


wilson = new Apredix("Wilson","Delgado",18);
const wilson = new Persona("Wilson","Delgado",18);
wilson(comer);



// const wilson  ={
//     nombre: "wilson",
//     apellido: "Delgado",
//     edad:18
// }
// const jhoany ={
//     nombre: "jhoany",
//     apellido: "Delgado",
//     edad:18
// }