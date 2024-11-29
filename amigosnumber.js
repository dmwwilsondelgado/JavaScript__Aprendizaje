
// Los números amigos son dos números enteros positivos «a» y «b» 
// tales que la suma de los divisores (aquellos valores que dividen el número en partes exactas)
//  propios de uno es igual al otro número y viceversa.
// El ejemplo más conocido es el de 220 y 284.
// Los divisores de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110.
// Si hacemos la suma 1+2+4+5+10+11+20+22+44+55+110 = 284. ¡Se cumple!
// Al igual, los divisores de 284 son 1, 2, 4, 71, 142.
// Al sumarlos 1+2+4+71+142 = 220. ¡Genial!
// Así vemos como 220 y 284 son números amigos.
// Existen muchos más, por ejemplo el 1.184 es amigo del 1.210. Del mismo modo, el 2.620 es amigo del 2.924.}





const amigos = (a,b)=>{
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
let somosamigos  = amigos(a,b);
console.log(somosamigos);
