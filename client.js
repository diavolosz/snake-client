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