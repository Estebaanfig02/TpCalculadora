const fs = require("fs");
const path = __dirname + "/Historial.json"

function leerLista(){
const json = fs.readFileSync(path, "utf-8");
const operaciones = JSON.parse(json)
return operaciones}

function agregarElemento(elemento){
    const modificado = fs.writeFileSync('./datos/Historial.json', JSON.stringify(elemento))
    return modificado

}
module.exports = {
    leerLista,
    agregarElemento
}