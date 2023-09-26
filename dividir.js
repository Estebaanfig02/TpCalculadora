
function dividir(...números) {
   if (números.length === 0) {
     return "Debe proporcionar al menos un número para la división.";
   }
   // El primer número se convierte en el dividendo
   let resultado = números[0];
   // Itera sobre los demás números y los divide uno por uno
   for (let i = 1; i < números.length; i++) {
     if (números[i] === 0) {
       return "No se puede dividir por cero.";
     }
     resultado /= números[i];
   }
 
   return resultado;
 }
 
 module.exports = {
   dividir
 };