const fs = require("fs");
const path = __dirname + "./registro.json"

function leerLista(){
const json = fs.readFileSync(path, "utf-8");
const operaciones = JSON.parse(json);
return operaciones}
let resta = require(__dirname + "../restar.js")

const registro = {
    operacion: "resta",
    argumentos: [a, b],
    resultado: resultado,
  };
fs.writeFileSync('registros.json', JSON.stringify(registro))