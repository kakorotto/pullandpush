const server = require("http").createServer();
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("new-message", message);
    // console.log(message);
  });
  // io.emit()
  // io.on()
  console.log("new client connected");
});
server.listen(4000, () => console.log("running"));
