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

const reference = {
  "109105100117": "midu",
  "9911110010110998101114": "codember",
  "11210897121": "play",
  "116101116114105115": "tetris"
}

const referenceKeys = Object.keys(reference);
const map = Object.fromEntries(Array.from(Array(26), (_, i) => [i + 97, String.fromCharCode(i + 97)]))

fs.readFile(filePath, 'ascii', function(err, data) {
  if (err) throw new Error('Could not read file')
  const lines = data
    .split('\n')
    .filter(Boolean)[0]
    .split(' ')
    .map(code => {
      if(referenceKeys.includes(code)){
        return reference[code];
      }
      return code.match(/.{1,3}/g).map(l => {
        const char = String.fromCharCode(parseInt(l))
        if(map[l]){
        return map[l] 
        } else {
        return l
        }
      }).join('')
    })
  console.log(lines)

})
