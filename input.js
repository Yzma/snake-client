const setupInput = function() {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()
  return stdin
}

const stdin = setupInput()

stdin.on('data', (key) => {
  // ctrl-c ( end of text )
  if (key === '\u0003') {
    process.exit()
  }
  console.log('Pressed:', key)
})

module.exports = { setupInput }