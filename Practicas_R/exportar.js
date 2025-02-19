//Diseñar un progrma  que permita Validar el Tipo de tarjeta de crédito que registra el operador. para ello debemos tener en cuenta que las diferentes que  las diferentes tarejtas tienen nomenclaturas distintas 
// Americas express 34 o 37
//Diners Club -305, o 36 o - 38
//Discover -tiene 16 digitos y e,pieza por 51 -55 
//  6011
//Visa - 13 o 16 digitos y empieza por 4
//MasterCard - 16 digitos y empieza por 51-55

// El  Programa solo debe Permitir ingresar de enteros Positivos y Maximo de 16 caracteres, si el operador  ingresa un caracter no Permitido el programa debe mostrar un mensaje de error en Pantalla y solicitar nuevamente el ingreso de la tarjeta de credito
// El programa debe mostrar un mensaje indicando el tipo de tarjeta de crédito o un mensaje indicando que el número de tarjeta de crédito es inválido.
//Para este Ejercio se Solicita Trabajar Con Modulos y Expreiones Regulares y Condicionales  Si esta Permitido Solicitar al Operador El Tipo de su tarjeta de Creadito .


const ValidarTarjeta = () => {
    regex = "/^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3}\.$";
    count = 0;
    if (regex.test(numero)) {
        count ++;
        alert("Trajeta Invalida");
    }else{
        alert("No valido su Tarjeta numeros incorrectos");
    }
    return mensaje(count);
}


let mensaje = (resultado) => {
    if (resultado == 1) {
        return "Americas Express";
    }else if (resultado == 2) {
        return "Diners Club";
    }else if (resultado == 3) {
        return "Discover";
    }else if (resultado == 4) {
        return "Visa";
    }else if (resultado == 5) {
        return "MasterCard";
    }else{
        return "Tarjeta Invalida";
    }
}




let ingreso = prompt("Ingrese su Tarjeta de Credito");


let validacion_de_Tarjeta = ValidarTarjeta();
prompt(validacion_de_Tarjeta);


// function Validar(regex,numero) {
//     if (numero.match) {
//         return true;       
//     }
// }


// function ValidarCaracteres(numero) {
//     let regex = /[0-9]/;
//     let array = numero.split("");
//     let res = 1;
//     for (let i = 0; i < array.length; i++) {
//         if (!array[i].match(regex)) {
//             res = 0;
//         }
//     }
// }


// function ValidarTarjeta(numero) {
//     let res = 0;
//     if (numero.length == 13 || numero.length == 16) {
//         if (numero.charAt(0) == 4) {
//             res = 1;
//         }
//     }
//     if (numero.length == 16) {
//         if (numero.charAt(0) == 5) {
//             if (numero.charAt(1) >= 1 && numero.charAt(1) <= 5) {
//                 res = 2;
//             }
//         }
//     }
//     if (numero.length == 15) {
//         if (numero.charAt(0) == 3) {
//             if (numero.charAt(1) == 4 || numero.charAt(1) == 7) {
//                 res = 3;
//             }
//         }
//     }
//     if (numero.length == 16) {
//         if (numero.charAt(0) == 3) {
//             if (numero.charAt(1) == 6 || numero.charAt(1) == 8) {
//                 res = 3;
//             }
//         }
//     }
//     if (numero.length == 16) {
//         if (numero.charAt(0) == 6) {
//             if (numero.charAt(1) == 0 && numero.charAt(2) == 1 && numero.charAt(3) == 1) {
//                 res = 4;
//             }
//         }
//     }
//     return res;
// }


// function exportar_(){
//     var regex = /^[0-9]+$/;
//     var numero = document.getElementById("numero").value;
//     if (Validar(regex,numero)) {
//         var tabla = document.getElementById("tabla");
//         var html = tabla.outerHTML;
//         var url = 'data:application/vnd.ms-excel,' + escape(html);
//         location.href = url;
//     } else {
//         alert("El valor ingresado no es un número");
//     }
// }



