//Problema

//Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!

//Nos ha pedido ayuda. Y nos ha dado algunas pistas:

//- Es una contraseña de 5 dígitos.
//- La contraseña tenía el número 5 repetido como mínimo dos veces.
//- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

//Nos ha puesto algunas ejemplos:
//55678 es correcto lo cumple todo
//12555 es correcto, lo cumple todo
//55555 es correcto, lo cumple todo
//12345 es incorrecto, no tiene el 5 repetido.
//57775 es incorrecto, los números no van de forma creciente

//Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números 
//cumplen esas reglas dentro de ese rango?
//

const lowerBound = 11098
const upperBound = 98123

function isStair(str){
  if(str.length === 2){
    return str[0] <= str[1] ? true : false
  } 
  return str[0] <= str[1] ? isStair(str.slice(1)) : false
}

function isSameOrBigger(str){
  return parseInt(str[1]) >= parseInt(str[0]);
}

function hasMinFives(str){
  return str.replace(/[^5]/g, "").length >= 2
}


let counter = 0;
let validPasswords = [];

for(let i = lowerBound; i < upperBound - 1; i++){
  if(isStair(`${i}`) && hasMinFives(`${i}`)){
    validPasswords.push(`${i}`)
  }
}

console.log(validPasswords.length, validPasswords[55])

