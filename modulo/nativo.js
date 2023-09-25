const fs = require("fs");
let path = __dirname + "/registro.json"
let  json = fs.readFileSync(path, "utf-8");
let operaciones = JSON.parse(json);


console.log(operaciones)
let resta = require("../restar.js")

let registro = {}

function switcher(operacion,a,b){
operacion = process.argv[2]
a = process.argv[3]
b = process.argv[4]
switch (operacion){
    case "resta" : 
registro = {operacion: "resta",
        resultado: resta(a,b)};

     operaciones.push(registro);
     console.log(registro);
     fs.writeFileSync('registro.json', JSON.stringify(operaciones))
  ; break   
}}
 
//fs.writeFileSync('registro.json', JSON.stringify(operaciones))
switcher()
