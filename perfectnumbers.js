// Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios positivos.
//  Dicho de otra forma, un número perfecto es aquel que es amigo de sí mismo.
// Así, 6 es un número perfecto porque sus divisores propios positivos son 1, 2 y 3; y 6 = 1 + 2 + 3. 
// Un divisor propio positivo de un número es un factor positivo de ese número que no sea el propio número. 
// Por ejemplo, los divisores propios de 6 son 1, 2 y 3, pero no 6.


const perfectos = (a,b)=>{
    let valueA = 0;
    let valueB = 0;
    for(let i = 1;i<a;i++){
        if (a%i===0){
            valueA +=i; 
        }
    }
    for(let i = 1;i<b;i++){
        if (b%i===0){
            valueB +=i; 
        }
    }
    if(valueA === b && valueB === a){
        return true 
    }else{
        return false
    }
}

let a = 220;
let b = 248;
let somosperfectos  = perfectos(a,b);
console.log(somosperfectos);
