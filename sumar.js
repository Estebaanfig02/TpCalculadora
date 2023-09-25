function sumar(...num){
    return num.reduce((acum,num) => acum += num)
}

module.exports = {
    sumar
}