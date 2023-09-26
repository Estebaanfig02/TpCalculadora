function multiplicar(...numero){
    return numero.reduce((acumulador, numero) => acumulador * numero);
}


module.exports = multiplicar