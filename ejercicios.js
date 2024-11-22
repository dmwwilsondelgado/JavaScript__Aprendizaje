//funciones anonimas 
// const anonima = function (valor){
//     console.log(valor);
// }
// let respuesta = anonima(25);
// console.log(respuesta);




// Funcion Generadora 
// const generadora = function*nombre(a,b){
//     yield 1 
//     yield 2
// }

//console.log(generadora.next());



//anonima auto ejecutable

// let parametro ="";
// (function(){
//     alert("si llaman");
// })()

// Funcio flecha 
// const flecha =(a,b,c,d) =>(a>20)? a*b :b ;


//let respuesta = flecha (40);
//console-log(respuesta);


//areglos
// const a =  [1,"letras",true,false,[false]];
// console.log(a[a.length -1]);
// a.push("Wilson");
// a.pop()

// console.log(a[4][1])



//objetos

const persona ={
    nombre:  "wilson",
    apellido:  "delgado",
    edad: 18,
    saludar: function(){
        return `hola soy ${this.nombre} ${this.apellido} y mi edad es ${this.edad}`;
    }
}

// Object.nacionalidad = "colombiano";

// Object.despedir = function(){
//     return `adios" ${this.nombre}`
// }

console.log(persona.saludar());

// console.log(Object.despedir);


