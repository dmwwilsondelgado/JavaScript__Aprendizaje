// exprexiones reegulares
let palabra =  "lorem1 la i  ignor3a el ca4so de la con5sulta est6ricta solamente5 busca que concuerde ";
palabra = "1238"
// let regex = /[0-9]{2,3}/g;
let regex = /^([0-9]{4,6}).+([a-z]{4,6})$/g;
let regexx = /[a-z]/g;
// la i  ignora el caso de la consulta estricta solamente busca que concuerde 
// la ig busca todas las concidencias siendo globales
// con s imprimos spacios

console.log(regex.test(palabra));
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));


console.log(regexx.test(palabra));
console.log(palabra.match(regexx));


// funcion declarada
// const encontrar = function(regex,palabra){
//     return palabra.includes(regex);
// }
// console.log(encontrar(regex.palabra));


