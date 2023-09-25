const fs = require("fs");
const funcionesJson = require(__dirname + "/datos/ModuloRequire");
const json = fs.readFileSync("./datos/Historial.json", "utf-8");
let arrayParse = JSON.parse(json);
const sumar = require(__dirname + "/sumar.js");
const multiplicar = require(__dirname + "/multiplicar.js")
function calculadora(cb, ...numbers) {
  let registro = {
    operacion: "",
    resultado: 0,
  };
  switch (cb.toLowerCase()) {
    case "historial":
      console.log(arrayParse);
      break;
    case "sumar":
      registro.operacion = "sumar";
      registro.resultado = sumar(...numbers);
      arrayParse.push(registro);
      funcionesJson.agregarElemento(arrayParse);
      console.log(registro);
      break;
    case "restar":
      registro.operacion = "restar";
      registro.resultado = "PONER FUNCION DE RESTAR"(...numbers); //poner funcion
      arrayParse.push(registro);
      funcionesJson.agregarElemento(arrayParse);
      console.log(registro);
      break;
    case "dividir":
      registro.operacion = "restar";
      registro.resultado = "PONER FUNCION DE dividir"(...numbers); //poner funcion
      arrayParse.push(registro);
      funcionesJson.agregarElemento(arrayParse);
      console.log(registro);
      break;
    case "multiplicar":
      registro.operacion = "multiplicar";
      registro.resultado = multiplicar(num1,num2);  //poner funcion
      arrayParse.push(registro);
      funcionesJson.agregarElemento(arrayParse);
      console.log(registro);
      break;
    default:
      console.log(
        "Por favor ingrese una de las siguientes operaciones: sumar, restar, multiplicar, dividir o historial"
      );
      break;
  }
}

calculadora(process.argv[2], +process.argv[3], +process.argv[4]);
