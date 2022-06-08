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