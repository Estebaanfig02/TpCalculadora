const fs = require("fs");
const path = __dirname + "/registro.json"

function leerLista(){
const json = fs.readFileSync(path, "utf-8");
const arrayLista = JSON.parse(json);
return arrayLista}

let resta = require(__dirname + "../restar")


const registro = {
    operacion: "resta",
    argumentos: [a, b],
    resultado: resultado};
fs.writeFileSync('./modulo/registro.json', JSON.stringify(registro));