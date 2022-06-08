
let connection;

const setupInput = function (client) {
  connection = client
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up")
  } else if (key === 'a') {
    connection.write("Move: left")
  } else if (key === 's') {
    connection.write("Move: down")
  } else if (key === 'd') {
    connection.write("Move: right")
  }

  if (key === 'o') {
    connection.write("Say: Oh Hello there")
  } else if (key === 'i') {
    connection.write("Say: doot doot !!")
  } else if (key === 'u') {
    connection.write("Say: doot doot !!")
  }
};




module.exports = setupInput


// setupInput()
