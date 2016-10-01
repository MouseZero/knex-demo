const screen = {
  write: (data, mode) => {
    let output = data
    if (mode === 'json') {
      output = JSON.stringify(data, null, 2)
    }
    console.log(output)
  }
}

module.exports = screen
