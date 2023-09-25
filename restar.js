
function restar(...num){
    return num.reduce((acum,num) => acum -= num)
}
module.exports = restar