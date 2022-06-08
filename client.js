const net = require("net")

const connect = function() {

  const client = net.createConnection(
    {host: "localhost", port: 50541},
    // () => {console.log("connection to server is sucessful")}
    )

  client.setEncoding("utf8")

  client.on("connect", () => {
    console.log("connected sucessfully")
    client.write("Name: MLD")
  })

  // client.on("connect", () => {
  //   // client.write("Move: up")
  //   // client.write("Move: left")
  //   // client.write("Move: up")
  //   setInterval(() => {client.write("Move: down")}, 50);
  //   // setInterval(() => {client.write("Move: up")}, 100);
  //   // setInterval(() => {client.write("Move: right")}, 150);
  //   // setInterval(() => {client.write("Move: up")}, 200);
  // })

  client.on("data", () => {
    console.log("you ded cuz you idled")
  })

  return client
}

module.exports = connect



// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)