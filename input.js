const setupInput = function(con) {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()

  stdin.on('data', (key) => {
    // ctrl-c ( end of text )
    if (key === '\u0003') {
      process.exit()
    }
  
    if (key === 'w') {
      con.write('Move: up')
    }

    if (key === 's') {
      con.write('Move: down')
    }

    if (key === 'a') {
      con.write('Move: left')
    }

    if (key === 'd') {
      con.write('Move: right')
    }

    if (key === 'l') {
      con.write('Say: Hey')
    }
  
    console.log('Pressed:', key)
  })
  
  return stdin
}

module.exports = { setupInput }