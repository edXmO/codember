const fs = require('fs')

const filepath = './input.txt'

/** * 
Pistas
Los datos pueden estar en cualquier orden.
Los datos pueden estar en la misma línea o separados por líneas.
Los usuarios se separan por un salto de línea en blanco.
Los usuarios pueden estar repetidos, pero no importa, siguen siendo válidos.
Pueden venir datos que no son necesarios para el usuario pero eso no lo hacen inválidos.
 */

fs.readFile(filepath, 'utf-8', function(err, data) {
  if (err) throw new Error("Cant read file")
  let currIdx = 0;
  let users = [];

  data
    .split('\n')
    .forEach((line) => {
      if (!line) {
        currIdx++
        return
      }
      if (!users[currIdx]) {
        users[currIdx] = line
      } else if (line.includes('usr')) {
        users[currIdx] = line
      } else {
        users[currIdx] = users[currIdx] + ' ' + line
      }
    })

  const cleanedUsers = users.filter(Boolean).filter(l => l.includes('age'))
  const len = cleanedUsers.length;
  const last = cleanedUsers[cleanedUsers.length - 1]
  console.log({ len, last })
})
