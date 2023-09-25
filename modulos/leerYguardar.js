
const fs = require("fs")

function leer(){
    const archivo = fs.readFileSync("./datos/historial.json","utf-8")
    const array = JSON.parse(archivo)
    return array
}

function guardar(parametro){
    const arrayString = JSON.stringify(parametro)
    fs.writeFileSync("./datos/historial.json",arrayString)
}


module.exports = {
    leer,
    guardar
}



