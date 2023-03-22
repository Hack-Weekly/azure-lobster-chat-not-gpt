import { Application, Request, Response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
const { Server: Serve } = require("socket.io");

const EXPRESS_PORT = 5000;
const SOCKET_PORT = 5500;

const express = require("express");
const cors = require("cors");
const app: Application = express();

app.use(cors());

const http = createServer(app);
const io: Server = new Serve(http, {
  cors: {
    origin: "*", // change when in dev or prod server
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello lobsters</h1>");
});

io.on("connection", (socket: Socket) => {
  logToServer(`user ${socket.id} is connected to the socket`);

  socket.on("create_room", (room: string) => {
    socket.join(room);

    logToServer(`user ${socket.id} has created room ${room}`);
    emitToClient(
      "create_room",
      room,
      `user ${socket.id} has created room ${room}!`
    );
    emitToClient(
      "new_connection",
      room,
      `${socket.id} has joined the room ${room}!`
    );

    logToServer(`user ${socket.id} has joined room ${room}`);
  });

  socket.on("leave_room", (room: string) => {
    emitToClient("leave_room", room, `${socket.id} has left the room ${room}!`);
    socket.leave(room);

    logToServer(`user ${socket.id} has left the room ${room}`);
  });

  socket.on("disconnect", () => {
    logToServer(`user ${socket.id} disconnected`);
  });
});

function logToServer(message: string) {
  console.log(message);
}

function emitToClient(event: string, room: string, message: string) {
  io.to(room).emit(event, message);
}

http.listen(SOCKET_PORT, () => {
  console.log(`Websocket is listenning on port ${SOCKET_PORT}`);
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server started on port ${EXPRESS_PORT}`);
});
