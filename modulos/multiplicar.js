const fs = require("fs");
let sumar = (n1 , n2) => n1 + n2 ;
 let restar = (n1 , n2) => n1 - n2 ;
 let multiplicar = (n1 , n2) => n1 * n2 ;
 let dividir = (n1 , n2) => n1 / n2 ;

 //let calculator=(num1, num2, callback)=>callback (num1,num2);
function calculador(callback,n1,n2){
   /* let registro ={
        operacion:callback,
        resultado : 10
    }*/
    let resultado= callback(n1 , n2);
    return resultado
    
}
console.log(calculador(sumar,3,3)); 
