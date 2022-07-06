const { Server } = require('http');
const net = require('net')

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  })
  conn.on('data', (data) => {
    console.log(data)
  })
  conn.on("connect", () => {
    conn.write("Name: wtq")
  })
  // conn.on('connect', () => {
  //   conn.write("Move: up")
  // })
  return conn;
};

module.exports = {connect}

