//funciones anonimas 
const anonima = function (valor){
    console.log(valor);
}
let respuesta = anonima(25);
console.log(respuesta);




// Funcion Generadora 
const generadora = function*nombre(a,b){
    yield 1 
    yield 2
}

//console.log(generadora.next());



//anonima auto ejecutable

let parametro ="";
(function(){
    alert("si llaman");
})()

// Funcio flecha 
const flecha =(a,b,c,d) =>(a>20)? a*b :b ;


//let respuesta = flecha (40);
//console-log(respuesta);