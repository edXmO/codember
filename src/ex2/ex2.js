const fs = require('fs')

const filePath = './encrypted.txt'

/**
*Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. 
Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
*/

function fromAsciiCode(str){
  if(str.length <= 2) return String.fromCharCode(parseInt(str))
  const triplet = parseInt(str.slice(0, 3))
  if(triplet > 255){
    return String.fromCharCode(str.slice(0,2)) + fromAsciiCode(str.slice(2))
  } else {
    return String.fromCharCode(triplet) + fromAsciiCode(str.slice(3))
  }
}

fs.readFile(filePath, 'ascii', function(err, data) {
  if (err) throw new Error('Could not read file')
  const codes = data
    .split('\n')
    .filter(Boolean)[0]
    .split(' ')
    .map(c => fromAsciiCode(c))
    .join(' ')

  console.log(codes)
})
